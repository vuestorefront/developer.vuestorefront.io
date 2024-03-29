import { randomUUID } from 'node:crypto';
import Joi from 'joi';
import { createSupabaseClient } from '~/server/utils/supabase';
import {
  getDiplomaSVG,
  getPdfBufferFromSvg,
} from '~/server/utils/getDiplomaPdfBuffer';
import type { SupabaseClient } from '@supabase/supabase-js';
import type {
  Quiz,
  Response,
  UserDetails,
  ApiQuizSubmit,
  EmailQuizBody,
  EmailDetails,
} from '~/types/api/quiz';
import {
  defineEventHandler,
  getCookie,
  H3Event,
  readBody,
  setCookie,
} from 'h3';

interface Body {
  name: string;
  selectedAnswers: string[];
  userDetails: UserDetails;
}

/**
 * Validates and returns body of the request or throws an error
 */
async function validateBody(event: H3Event): Promise<Body> {
  const schema = Joi.object<Body>({
    name: Joi.string().required().alphanum().lowercase(),
    selectedAnswers: Joi.array().items(Joi.string()),
    userDetails: Joi.object({
      name: Joi.string().required().trim(),
      surname: Joi.string().required().trim(),
      email: Joi.string().required().email().trim(),
    }),
  });

  const body = await readBody<Body>(event);
  const { error, value } = schema.validate(body, { presence: 'required' });

  if (error) {
    throw new Error(error.toString());
  }

  return value;
}

/**
 * Validates existing or generates new cookie and returns it or throws an error
 */
function validateCookie(event: H3Event, cookieName: string): string {
  const cookie = getCookie(event, cookieName) || randomUUID();

  const schema = Joi.string().guid({
    version: ['uuidv4'],
  });

  const { error, value } = schema.validate(cookie, { presence: 'required' });

  if (error) {
    throw new Error('Cookie missing or wrong');
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
    .eq('id', name)
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
    .from<Response>('quiz_responses')
    .insert(response)
    .select()
    .single();

  if (error) {
    throw new Error('Failed to save quiz response to the database');
  }

  return data;
}

async function generateAndSaveDiplomas(
  client: SupabaseClient,
  response: Response,
  quiz: Quiz,
): Promise<void> {
  const diplomaSvg = getDiplomaSVG(response, quiz);
  const diplomaPdf = getPdfBufferFromSvg(diplomaSvg);
  const storage = client.storage.from('quiz-diplomas');

  const pdf = storage.upload(`${response.id}.pdf`, diplomaPdf, {
    cacheControl: '86400', // 1 day
    contentType: 'application/pdf',
  });

  const svg = storage.upload(`${response.id}.svg`, diplomaSvg, {
    cacheControl: '86400', // 1 day
    contentType: 'image/svg+xml',
  });

  await Promise.all([pdf, svg]);
}

export default defineEventHandler(async (event) => {
  const { name, selectedAnswers, userDetails } = await validateBody(event);
  const supabase = createSupabaseClient();
  const quiz = await fetchQuiz(supabase, name);
  const cookieName = `quiz-${quiz.id}`;
  const submitterCookie = validateCookie(event, cookieName);

  const correctAnswers = quiz.correct_answers.filter(
    (answer, index) => selectedAnswers[index] === answer,
  );
  const score = Math.round(
    (correctAnswers.length / quiz.correct_answers.length) * 100,
  );
  const passed = score >= quiz.passing_score;

  const response = await submitResponse(supabase, {
    quiz_id: quiz.id,
    score,
    passed,
    answers: selectedAnswers,
    user_details: userDetails,
    submitter_cookie: submitterCookie,
  });

  if (passed) {
    await generateAndSaveDiplomas(supabase, response, quiz);
  }

  setCookie(event, cookieName, submitterCookie, {
    // Year from now
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    httpOnly: true,
  });

  return {
    id: response.id,
  };
});