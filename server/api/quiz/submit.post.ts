import { randomUUID } from 'node:crypto';
import { createClient } from '@supabase/supabase-js';
import type { Quiz, Response, SelectedAnswers } from '~/types/api/quiz';

interface Body {
  quizName: string;
  selectedAnswers: SelectedAnswers;
}

export default defineEventHandler(async (event) => {
  const { quizName, selectedAnswers } = await useBody<Body>(event);
  const { supabaseUrl, supabaseKey } = useRuntimeConfig();

  if (!selectedAnswers) {
    return createError('API body missing or wrong: selectedAnswers');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // TODO: Persist client and refresh token https://supabase.com/docs/reference/javascript/initializing#with-additional-parameters

  const { data: quiz, error: quizError } = await supabase
    .from<Quiz>('quizzes')
    .select()
    .eq('name', quizName)
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

  console.log({
    correctAnswers,
    score,
  });

  const submitterCookie = randomUUID();

  const { data: response, error: responseError } = await supabase
    .from<Response>('responses')
    .insert({
      answers: selectedAnswers,
      score,
      submitter_cookie: submitterCookie,
    });

  if (responseError) {
    return createError('Failed to save quiz response to the database');
  }

  setCookie(event, `quiz-${quiz.name}`, submitterCookie);

  return response;
});
