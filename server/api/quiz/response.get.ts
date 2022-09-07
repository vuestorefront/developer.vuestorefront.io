import Joi from 'joi';
import { createSupabaseClient } from '~/server/utils/supabase';
import type { CompatibilityEvent } from 'h3';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { ApiQuizResponse, Response } from '~/types/api/quiz';

interface Query {
  id: string;
}

/**
 * Validates and returns query from the request or throws an error
 */
function validateQuery(event: CompatibilityEvent): Query {
  const schema = Joi.object<Query>({
    id: Joi.string().required(),
  });

  const query = useQuery(event);
  const { error, value } = schema.validate(query, { presence: 'required' });

  if (error) {
    throw new Error('API query parameters missing or wrong');
  }

  return value;
}
/**
 * Fetches and returns quiz response from the database or throws an error
 */
async function fetchQuizResponse(
  client: SupabaseClient,
  id: string,
): Promise<Response> {
  const { data, error } = await client
    .from<Response>('responses')
    .select(
      `
      id,
      discord_user_id,
      score,
      passed,
      submitter_cookie,
      user_details,
      created_at,
      quizzes (
        name,
        title,
        badge_image_path
      )
    `,
    )
    .eq('id', id)
    .limit(1)
    .single();

  if (error) {
    throw new Error('Failed to load quiz result from database');
  }

  return data;
}

/**
 * Fetches and returns quiz response from the database
 */
export default defineEventHandler(async (event) => {
  const { id } = validateQuery(event);
  const supabase = createSupabaseClient();
  const data = await fetchQuizResponse(supabase, id);
  const cookie = getCookie(event, `quiz-${data.quizzes.name}`);

  return {
    id: data.id,
    score: data.score,
    passed: data.passed,
    username: `${data.user_details.name} ${data.user_details.surname}`,
    isSubmitter: data.submitter_cookie === cookie,
    isBadgeClaimed: Boolean(data.discord_user_id),
    createdAt: data.created_at,
    quiz: data.quizzes,
  } as ApiQuizResponse;
});
