import { ref, onMounted } from 'vue'

function formatGuestName(raw: string): string {
  try {
    const decoded = decodeURIComponent(raw).trim()
    if (!decoded) return ''
    return decoded
      .replace(/[-_+]/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/\b\w/g, c => c.toUpperCase())
  }
  catch {
    return raw
  }
}

export function useGuest() {
  const route = useRoute()
  const defaultGuestName = 'Tamu Undangan'

  const queryName = typeof route?.query?.to === 'string' && route.query.to.trim()
    ? formatGuestName(route.query.to)
    : ''

  const guestName = ref(queryName || defaultGuestName)

  onMounted(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const rawHash = window.location.hash.replace(/^#/, '')
      const hashName = formatGuestName(rawHash)
      if (hashName) {
        guestName.value = hashName
        return
      }
    }

    if (route?.query?.to && typeof route.query.to === 'string') {
      const resolvedQuery = formatGuestName(route.query.to)
      if (resolvedQuery) {
        guestName.value = resolvedQuery
      }
    }
  })

  return {
    guestName,
  }
}
