import { randomUUID } from 'node:crypto';
import Joi from 'joi';
import { createClient } from '@supabase/supabase-js';
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

const schema = Joi.object({
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

export default defineEventHandler(async (event) => {
  const body = await useBody<Body>(event);
  const { error, value } = schema.validate(body, { presence: 'required' });

  if (error) {
    return createError('API body missing or wrong');
  }

  const { name, selectedAnswers, userDetails } = value as Body;
  const {
    supabaseServiceRoleKey,
    public: {
      supabase: { url },
    },
  } = useRuntimeConfig();
  const supabase = createClient(url, supabaseServiceRoleKey);

  // TODO: Persist client and refresh token https://supabase.com/docs/reference/javascript/initializing#with-additional-parameters

  const { data: quiz, error: quizError } = await supabase
    .from<Quiz>('quizzes')
    .select()
    .eq('name', name)
    .limit(1)
    .single();

  if (quizError) {
    return createError('Failed to load quiz from database');
  }

  const correctAnswers = quiz.correct_answers.filter(
    ({ id, answer }) => selectedAnswers[id] === answer,
  );

  const score = Math.round(
    (correctAnswers.length / quiz.correct_answers.length) * 100,
  );

  const submitterCookie = randomUUID();

  const { data: response, error: responseError } = await supabase
    .from<Response>('responses')
    .insert({
      quiz_name: name,
      answers: selectedAnswers,
      user_details: userDetails,
      score,
      submitter_cookie: submitterCookie,
    })
    .single();

  if (responseError) {
    return createError('Failed to save quiz response to the database');
  }

  setCookie(event, `quiz-${quiz.name}`, submitterCookie, {
    // Year from now
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    httpOnly: true,
  });

  return {
    id: response.id,
  } as ApiQuizSubmit;
});
