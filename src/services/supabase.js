import { createClient } from '@supabase/supabase-js';

export const superbaseUrl = 'https://alcvrrgdemcutlhtlvkn.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsY3ZycmdkZW1jdXRsaHRsdmtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNjY3NzIsImV4cCI6MjA1Mzk0Mjc3Mn0.jED0CR2uV216J87s-OKE002a5OH0SYNSHQpy5r_H9mI';

if (!supabaseKey) throw new Error('Supabase key is missing!');
const supabase = createClient(superbaseUrl, supabaseKey);

export default supabase;
