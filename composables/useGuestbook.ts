import { ref } from 'vue'
import { getSupabaseClient } from '~/utils/supabase'

export interface GuestbookEntry {
  id?: number | string
  name: string
  attending: string
  message: string
  created_at?: string
}

export interface NewGuestbookEntry {
  name: string
  attending: string
  message: string
}

export function useGuestbook() {
  const wishes = ref<GuestbookEntry[]>([])
  const isLoading = ref(false)
  const isSubmitting = ref(false)
  const error = ref<string | null>(null)

  const fetchWishes = async () => {
    isLoading.value = true
    error.value = null
    try {
      const client = getSupabaseClient()
      const { data, error: fetchError } = await client
        .from('guestbook_ella')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) {
        console.error('Gagal ambil data:', fetchError)
        error.value = fetchError.message || 'Gagal mengambil data ucapan'
        return null
      }

      wishes.value = (data as GuestbookEntry[]) || []
      return wishes.value
    }
    catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan saat mengambil ucapan'
      console.error('Fetch error:', err)
      error.value = message
      return null
    }
    finally {
      isLoading.value = false
    }
  }

  const submitWish = async (entry: NewGuestbookEntry): Promise<boolean> => {
    isSubmitting.value = true
    error.value = null
    try {
      const client = getSupabaseClient()
      const { error: insertError } = await client
        .from('guestbook_ella')
        .insert([{
          name: entry.name,
          attending: entry.attending,
          message: entry.message,
          created_at: new Date().toISOString(),
        }])

      if (insertError) {
        console.error('Gagal mengirim ucapan:', insertError)
        error.value = insertError.message || 'Gagal mengirim ucapan'
        return false
      }

      await fetchWishes()
      return true
    }
    catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan saat mengirim ucapan'
      console.error('Submit error:', err)
      error.value = message
      return false
    }
    finally {
      isSubmitting.value = false
    }
  }

  return {
    wishes,
    isLoading,
    isSubmitting,
    error,
    fetchWishes,
    submitWish,
  }
}
