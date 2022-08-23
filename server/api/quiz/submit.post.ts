import { randomUUID } from 'node:crypto';
import Joi from 'joi';
import { createSupabaseClient } from '~/server/utils/supabase';
import type { CompatibilityEvent } from 'h3';
import type { SupabaseClient } from '@supabase/supabase-js';
import type {
  Quiz,
  Response,
  SelectedAnswers,
  UserDetails,
  ApiQuizSubmit,
} from '~/types/api/quiz';

interface Body {
  name: string;
  selectedAnswers: SelectedAnswers;
  userDetails: UserDetails;
}

/**
 * Validates and returns body of the request or throws an error
 */
async function validateBody(event: CompatibilityEvent): Promise<Body> {
  const schema = Joi.object<Body>({
    name: Joi.string().required().alphanum().lowercase(),
    selectedAnswers: Joi.object().pattern(
      Joi.string().required().lowercase(),
      Joi.string().required().lowercase(),
    ),
    userDetails: Joi.object({
      name: Joi.string().required().trim(),
      surname: Joi.string().required().trim(),
      email: Joi.string().required().email().trim(),
    }),
  });

  const body = await useBody<Body>(event);
  const { error, value } = schema.validate(body, { presence: 'required' });

  if (error) {
    throw new Error('API body missing or wrong');
  }

  return value;
}

/**
 * Fetches and returns quiz from the database or throws an error
 */
async function fetchQuiz(client: SupabaseClient, name: string): Promise<Quiz> {
  const { data, error } = await client
    .from<Quiz>('quizzes')
    .select()
    .eq('name', name)
    .limit(1)
    .single();

  if (error) {
    throw new Error('Failed to load quiz from database');
  }

  return data;
}

/**
 * Submits and returns quiz response from the database or throws an error
 */
async function submitResponse(
  client: SupabaseClient,
  response: Partial<Response>,
): Promise<Response> {
  const { data, error } = await client
    .from<Response>('responses')
    .insert(response)
    .single();

  if (error) {
    throw new Error('Failed to save quiz response to the database');
  }

  return data;
}

export default defineEventHandler(async (event) => {
  const { name, selectedAnswers, userDetails } = await validateBody(event);
  const supabase = createSupabaseClient();
  const quiz = await fetchQuiz(supabase, name);

  const submitterCookie = randomUUID();
  const correctAnswers = quiz.correct_answers.filter(
    ({ id, answer }) => selectedAnswers[id] === answer,
  );
  const score = Math.round(
    (correctAnswers.length / quiz.correct_answers.length) * 100,
  );

  const response = await submitResponse(supabase, {
    quiz_name: name,
    answers: selectedAnswers,
    user_details: userDetails,
    score,
    submitter_cookie: submitterCookie,
  });

  setCookie(event, `quiz-${quiz.name}`, submitterCookie, {
    // Year from now
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    httpOnly: true,
  });

  return {
    id: response.id,
  } as ApiQuizSubmit;
});
