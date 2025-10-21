// Supabase client helper
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getUMKM() {
  const { data, error } = await supabase.from('umkm').select('*').order('name')
  if (error) throw error
  return data
}
