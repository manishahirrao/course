import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = () => {
  return (
    supabaseUrl !== '' &&
    supabaseAnonKey !== '' &&
    supabaseUrl !== 'your_supabase_project_url'
  );
};

// Lazy singleton — only instantiated when actually needed
let _client: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient => {
  if (!_client) {
    _client = createClient(supabaseUrl, supabaseAnonKey);
  }
  return _client;
};
