<template>
  <div class="fixed bottom-5 right-5 z-50">
    <button
      class="bg-white text-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
      @click="toggle"
    >
      <span v-if="isPlaying">
        <!-- Icon suara aktif -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="size-5"
          viewBox="0 0 20 20"
        >
          <path
            d="M10.5 3.75a.75.75 0 0 0-1.264-.546L5.2 7H2.7a.75.75 0 0 0-.7.48 6.985 6.985 0 0 0-.5 2.52c0 .887.165 1.737.468 2.52.111.29.39.48.7.48H5.2l4.033 3.796a.75.75 0 0 0 1.264-.546V3.75Z"
          />
          <path
            d="M16.45 5.05a.75.75 0 0 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.899Z"
          />
        </svg>
      </span>
      <span v-else>
        <!-- Icon suara mati -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="size-5"
          viewBox="0 0 20 20"
        >
          <path
            d="M10.05 3.06a.75.75 0 0 1 .45.69v12.5a.75.75 0 0 1-1.26.54L5.2 13H2.67a.75.75 0 0 1-.7-.48 6.985 6.985 0 0 1-.47-2.52c0-.887.165-1.737.47-2.52a.75.75 0 0 1 .7-.48H5.2l4.03-3.8a.75.75 0 0 1 .82-.14ZM13.78 7.22a.75.75 0 1 0-1.06 1.06L14.44 10l-1.72 1.72a.75.75 0 0 0 1.06 1.06L15.5 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L16.56 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L15.5 8.94l-1.72-1.72Z"
          />
        </svg>
      </span>
    </button>

    <audio
      ref="audioRef"
      loop
      preload="auto"
      @play="isPlaying = true"
      @pause="isPlaying = false"
    >
      <source
        :src="audio?.src || '/audio/bg-music.mp3'"
        type="audio/mpeg"
      >
    </audio>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useAudio } from '~/composables/useAudio'

defineProps({
  audio: {
    type: Object,
    default: null,
  },
})

const { isPlaying, audioRef, play, toggle } = useAudio()

onMounted(async () => {
  if (isPlaying.value && audioRef.value) {
    await play()
  }
})

onUnmounted(() => {
  if (audioRef.value) {
    audioRef.value.pause()
  }
})
</script>
