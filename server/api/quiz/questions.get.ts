import Joi from 'joi';
import { createSupabaseClient } from '~/server/utils/supabase';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { ApiQuizQuestions } from '~/types/api/quiz';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createError, defineEventHandler, getQuery, H3Event } from 'h3';

interface Query {
  name: string;
}

/**
 * Validates and returns query from the request or throws an error
 */
function validateQuery(event: H3Event): Query {
  const schema = Joi.object<Query>({
    name: Joi.string().required(),
  });

  const query = getQuery(event);
  const { error, value } = schema.validate(query, { presence: 'required' });

  if (error) {
    return createError(error.toString());
  }

  return value;
}

/**
 * Fetches and returns quiz from the database or throws an error
 */
async function fetchQuiz(
  client: SupabaseClient,
  name: string,
): Promise<ApiQuizQuestions> {
  const { data, error } = await client
    .from<ApiQuizQuestions>('quizzes')
    .select(
      `
      id,
      title,
      questions
    `,
    )
    .eq('id', name)
    .limit(1)
    .single();

  if (error) {
    throw new Error('Failed to load quiz from database');
  }

  return data;
}

/**
 * Fetches and returns quiz from the database
 */
export default defineEventHandler(async (event) => {
  const { name } = validateQuery(event);
  const supabase = createSupabaseClient();

  return fetchQuiz(supabase, name);
});
