import { ref, toValue, onMounted, onUnmounted, watch, type MaybeRefOrGetter } from 'vue'

export function useCountdown(targetDate: MaybeRefOrGetter<string | Date | undefined | null>) {
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  const isFinished = ref(false)

  let timer: ReturnType<typeof setInterval> | null = null

  function update() {
    const rawTarget = toValue(targetDate)
    if (!rawTarget) {
      days.value = 0
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
      isFinished.value = true
      return
    }

    const targetTime = new Date(rawTarget).getTime()
    if (Number.isNaN(targetTime)) {
      days.value = 0
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
      isFinished.value = true
      return
    }

    const diff = targetTime - Date.now()
    if (diff <= 0) {
      days.value = 0
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
      isFinished.value = true
      if (timer) {
        clearInterval(timer)
        timer = null
      }
      return
    }

    isFinished.value = false
    days.value = Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0)
    hours.value = Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0)
    minutes.value = Math.max(Math.floor((diff / (1000 * 60)) % 60), 0)
    seconds.value = Math.max(Math.floor((diff / 1000) % 60), 0)
  }

  onMounted(() => {
    update()
    timer = setInterval(update, 1000)
  })

  onUnmounted(() => {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
  })

  watch(
    () => toValue(targetDate),
    () => {
      update()
      if (!isFinished.value && !timer && typeof window !== 'undefined') {
        timer = setInterval(update, 1000)
      }
    },
  )

  return {
    days,
    hours,
    minutes,
    seconds,
    isFinished,
  }
}
