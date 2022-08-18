import { createClient } from '@supabase/supabase-js';
import type { ApiQuizResponse } from '~/types/api/quiz';

export default defineEventHandler(async (event) => {
  const { id } = useQuery(event);
  const { supabaseUrl, supabaseKey } = useRuntimeConfig();

  if (!id) {
    return createError('API query parameters missing or wrong: id');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // TODO: Persist client and refresh token https://supabase.com/docs/reference/javascript/initializing#with-additional-parameters

  const { data, error } = await supabase
    .from('responses')
    .select(`
      id,
      score,
      submitter_cookie,
      first_name:user_details->name,
      last_name:user_details->surname,
      quizzes (
        name,
        title
      )
    `)
    .eq('id', id as string)
    .limit(1)
    .single();

  if (error) {
    return createError('Failed to load quiz result from database');
  }

  const cookie = useCookie(event, `quiz-${data.quiz_name}`);

  return {
    id: data.id,
    score: data.score,
    username: `${data.first_name} ${data.last_name}`,
    isSubmitter: data.submitter_cookie === cookie,
    quiz: data.quizzes,
  } as ApiQuizResponse;
});
