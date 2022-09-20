import Joi from 'joi';
import { createSupabaseClient } from '~/server/utils/supabase';
import type { Quiz, Response } from '~/types/api/quiz';
import type { CompatibilityEvent } from 'h3';
import type { SupabaseClient, User } from '@supabase/supabase-js';

interface Body {
  accessToken: string;
  resultId: string;
}

type QuizResponse = Pick<
  Response,
  'id' | 'score' | 'passed' | 'discord_user_id' | 'submitter_cookie'
> & {
  quizzes: Pick<Quiz, 'id' | 'discord_role_id'>;
};

/**
 * Validates and returns body of the request or throws an error
 */
async function validateBody(event: CompatibilityEvent): Promise<Body> {
  const schema = Joi.object<Body>({
    accessToken: Joi.string().required(),
    resultId: Joi.string().required(),
  });

  const body = await useBody(event);
  const { error, value } = schema.validate(body, { presence: 'required' });

  if (error) {
    throw new Error('API body missing or wrong');
  }

  return value;
}

/**
 * Fetches and returns quiz response from the database or throws an error
 */
async function fetchQuizResponse(
  client: SupabaseClient,
  resultId: string,
): Promise<QuizResponse> {
  const { data, error } = await client
    .from<QuizResponse>('quiz_responses')
    .select(
      `
      id,
      score,
      passed,
      discord_user_id,
      submitter_cookie,
      quizzes (
        id,
        discord_role_id
      )
    `,
    )
    .eq('id', resultId)
    .limit(1)
    .single();

  if (error) {
    throw new Error('Failed to load quiz result from database');
  }

  return data;
}

/**
 * Fetches and returns user from the database or throws an error
 */
async function fetchUser(
  client: SupabaseClient,
  accessToken: string,
): Promise<User> {
  const { user, error } = await client.auth.api.getUser(accessToken);

  if (!user || error) {
    throw new Error('Failed to load user from database');
  }

  return user;
}

/**
 * Checks if user is in the Discord server
 */
async function checkIfUserIsInServer(
  guildId: string,
  userId: string,
  token: string,
): Promise<void> {
  try {
    await $fetch(
      `https://discord.com/api/v10/guilds/${guildId}/members/${userId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bot ${token}`,
        },
      },
    );
  } catch {
    throw new Error('User is not in the Discord server');
  }
}

/**
 * Adds role to the Discord user or throws an error
 */
async function addDiscordRole(
  guildId: string,
  userId: string,
  roleId: string,
  token: string,
): Promise<void> {
  try {
    await $fetch(
      `https://discord.com/api/v10/guilds/${guildId}/members/${userId}/roles/${roleId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bot ${token}`,
        },
        method: 'PUT',
      },
    );
  } catch {
    throw new Error('Failed to add Discord role');
  }
}

/**
 * Updates `discord_user_id` in quiz response or throws an error
 */
async function updateDiscordUserIdInResponse(
  client: SupabaseClient,
  resultId: number,
  userId: string,
): Promise<void> {
  const { error } = await client
    .from<Response>('quiz_responses')
    .update({ discord_user_id: userId }) // TODO: Update `user_id`
    .match({ id: resultId });

  if (error) {
    throw new Error('Failed to update user data in database');
  }
}

/**
 * Claims a Discord badge after submitting a quiz response with minimum score requirement met
 */
export default defineEventHandler(async (event) => {
  const { accessToken, resultId } = await validateBody(event);
  const { token, guildId } = useRuntimeConfig().discord;
  const supabase = createSupabaseClient();

  const data = await fetchQuizResponse(supabase, resultId);
  const cookie = getCookie(event, `quiz-${data.quizzes.id}`);

  if (data.discord_user_id) {
    throw new Error('Badge already claimed');
  }

  if (!data.passed) {
    throw new Error('Minimum score requirement not met');
  }

  if (data.submitter_cookie !== cookie) {
    throw new Error('Only quiz submitter can claim badge');
  }

  const user = await fetchUser(supabase, accessToken);

  await checkIfUserIsInServer(
    guildId,
    user.user_metadata.provider_id as string,
    token,
  );

  await addDiscordRole(
    guildId,
    user.user_metadata.provider_id as string,
    data.quizzes.discord_role_id,
    token,
  );

  await updateDiscordUserIdInResponse(
    supabase,
    data.id,
    user.user_metadata.provider_id as string,
  );

  return true;
});
