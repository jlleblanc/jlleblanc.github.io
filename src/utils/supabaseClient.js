import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

let supabaseSingleton

export function getSupabaseClient() {
  if (supabaseSingleton) return supabaseSingleton
  if (typeof window === 'undefined') return null
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
    return null
  }
  supabaseSingleton = createClient(supabaseUrl, supabaseAnonKey)
  return supabaseSingleton
}

