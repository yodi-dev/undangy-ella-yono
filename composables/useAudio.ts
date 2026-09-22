import { ref } from 'vue'

const isPlaying = ref(false)
const audioRef = ref<HTMLAudioElement | null>(null)

export function useAudio() {
  const play = async () => {
    isPlaying.value = true
    if (audioRef.value) {
      try {
        await audioRef.value.play()
      }
      catch (err) {
        console.warn('Audio playback error:', err)
        isPlaying.value = false
      }
    }
  }

  const pause = () => {
    isPlaying.value = false
    if (audioRef.value) {
      audioRef.value.pause()
    }
  }

  const toggle = () => {
    if (isPlaying.value) {
      pause()
    }
    else {
      play()
    }
  }

  return {
    isPlaying,
    audioRef,
    play,
    pause,
    toggle,
  }
}
