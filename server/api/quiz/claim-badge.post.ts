import Joi from 'joi';
import { createSupabaseClient } from '~/server/utils/supabase';
import type { Response } from '~/types/api/quiz';
import type { CompatibilityEvent } from 'h3';
import type { SupabaseClient, User } from '@supabase/supabase-js';

interface Body {
  accessToken: string;
  resultId: string;
}

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
): Promise<Response> {
  const { data, error } = await client
    .from<Response>('responses')
    .select(
      `
      id,
      score,
      discord_user_id,
      submitter_cookie,
      quizzes (
        name,
        discord_role_id,
        badge_minimum_score
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
    .from<Response>('responses')
    .update({ discord_user_id: userId })
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
  const cookie = getCookie(event, `quiz-${data.quizzes.name}`);

  if (data.discord_user_id) {
    throw new Error('Badge already claimed');
  }

  if (data.score < data.quizzes.badge_minimum_score) {
    throw new Error('Minimum score requirement not met');
  }

  if (data.submitter_cookie !== cookie) {
    throw new Error('Only quiz submitter can claim badge');
  }

  const user = await fetchUser(supabase, accessToken);

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
