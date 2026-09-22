import { createClient, type SupabaseClient } from '@supabase/supabase-js'

let client: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  if (!client) {
    const config = useRuntimeConfig()
    const url = (config.public.supabaseUrl as string) || ''
    const key = (config.public.supabaseKey as string) || ''

    if (!url || !key) {
      console.warn(
        '[Supabase] Supabase URL atau Key kosong. Pastikan NUXT_PUBLIC_SUPABASE_URL dan NUXT_PUBLIC_SUPABASE_KEY terisi di .env',
      )
    }

    client = createClient(url, key)
  }
  return client
}

// Alias for backwards compatibility
export { getSupabaseClient as getSupabase }
