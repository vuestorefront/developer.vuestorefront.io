import Joi from 'joi';
import { createClient } from '@supabase/supabase-js';
import type { Response } from '~/types/api/quiz';

interface Body {
  accessToken: string;
  resultId: string;
}

const schema = Joi.object({
  accessToken: Joi.string().required(),
  resultId: Joi.string().required(),
});

export default defineEventHandler(async (event) => {
  const body = await useBody<Body>(event);
  const { error, value } = schema.validate(body, { presence: 'required' });

  if (error) {
    return createError('API body missing or wrong');
  }

  const { accessToken, resultId } = value as Body;
  const {
    supabaseServiceRoleKey,
    discord: { token, guildId },
    public: {
      supabase: { url },
    },
  } = useRuntimeConfig();
  const supabase = createClient(url, supabaseServiceRoleKey);

  // TODO: Persist client and refresh token https://supabase.com/docs/reference/javascript/initializing#with-additional-parameters

  const { data: response, error: responseError } = await supabase
    .from<Response>('responses')
    .select(
      `
      id,
      score,
      discord_user_id,
      submitter_cookie,
      quizzes (
        discord_role_id,
        badge_minimum_score
      )
    `,
    )
    .eq('id', resultId)
    .limit(1)
    .single();

  if (responseError) {
    return createError('Failed to load quiz result from database');
  }

  if (response.discord_user_id) {
    return createError('Badge already claimed');
  }

  if (response.score < response.quizzes.badge_minimum_score) {
    return createError('Minimum score requirement not met');
  }

  const { user, error: userError } = await supabase.auth.api.getUser(
    accessToken,
  );

  if (!user || userError) {
    return createError('Failed to load user from database');
  }

  await $fetch(
    `https://discord.com/api/v10/guilds/${guildId}/members/${user.user_metadata.provider_id}/roles/${response.quizzes.discord_role_id}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bot ${token}`,
      },
      method: 'PUT',
    },
  );

  const { error: updateError } = await supabase
    .from<Response>('responses')
    .update({ discord_user_id: user.user_metadata.provider_id })
    .match({ id: response.id });

  if (updateError) {
    return createError('Failed to update user data in database');
  }

  return true;
});
