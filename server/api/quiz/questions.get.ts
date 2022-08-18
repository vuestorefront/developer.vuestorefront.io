import { createClient } from '@supabase/supabase-js';
import type { ApiQuizQuestions } from '~/types/api/quiz';

export default defineEventHandler(async (event) => {
  const { name } = useQuery(event);
  const { supabaseUrl, supabaseKey } = useRuntimeConfig();

  if (!name) {
    return createError('API query parameters missing or wrong: name');
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  // TODO: Persist client and refresh token https://supabase.com/docs/reference/javascript/initializing#with-additional-parameters

  const { data, error } = await supabase
    .from<ApiQuizQuestions>('quizzes')
    .select(`
      name,
      title,
      questions
    `)
    .eq('name', name as string)
    .limit(1)
    .single();

  if (error) {
    return createError('Failed to load quiz from database');
  }

  return data;
});
