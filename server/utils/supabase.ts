import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

/**
 * Creates new Supabase client using credentials from runtime configuration
 */
export function createSupabaseClient(): SupabaseClient {
  const {
    supabaseServiceRoleKey,
    public: {
      supabase: { url },
    },
  } = useRuntimeConfig();

  return createClient(url, supabaseServiceRoleKey);
}
