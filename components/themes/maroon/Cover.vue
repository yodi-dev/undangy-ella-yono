<template>
  <section
    ref="landingRef"
    class="relative flex flex-col justify-between items-center h-screen min-h-[620px] w-full overflow-hidden transition-opacity duration-700 ease-out select-none"
  >
    <!-- Background Image Layer with Cinematic Subtle Ken Burns Zoom -->
    <div
      class="absolute inset-0 bg-no-repeat bg-cover bg-[center_28%] md:bg-[center_20%] anim-zoom pointer-events-none"
      :style="{ backgroundImage: `url(${bgImage || '/images/2.webp'})` }"
    />

    <!-- Cinematic Deep Wine & Vignette Gradient Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#2A0D14]/85 via-[#2A0D14]/40 to-[#2A0D14]/95 pointer-events-none z-0"
    />
    <div
      class="absolute inset-0 bg-radial-gradient from-transparent via-[#2A0D14]/30 to-[#18060B]/80 pointer-events-none z-0"
    />

    <!-- Luxury Hairline Gold Inner Border Frame -->
    <div
      class="absolute inset-3.5 sm:inset-5 md:inset-6 border border-[#C4A46C]/30 rounded-xs pointer-events-none z-10"
    >
      <!-- Corner Accents -->
      <div class="absolute -top-px -left-px w-3.5 h-3.5 border-t-2 border-l-2 border-[#C4A46C]" />
      <div class="absolute -top-px -right-px w-3.5 h-3.5 border-t-2 border-r-2 border-[#C4A46C]" />
      <div class="absolute -bottom-px -left-px w-3.5 h-3.5 border-b-2 border-l-2 border-[#C4A46C]" />
      <div class="absolute -bottom-px -right-px w-3.5 h-3.5 border-b-2 border-r-2 border-[#C4A46C]" />
    </div>

    <!-- Content: Editorial Layout -->
    <div
      class="relative z-20 flex flex-col justify-between items-center h-full w-full max-w-xl mx-auto px-6 py-10 sm:py-14 md:py-16 text-center"
    >
      <!-- Top / Header Block -->
      <div class="pt-2 sm:pt-4">
        <!-- Eyebrow with decorative lines -->
        <div class="inline-flex items-center justify-center gap-3 anim-eyebrow mb-2">
          <div class="h-px w-6 sm:w-10 bg-[#C4A46C]/60" />
          <p class="font-body text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.35em] text-[#C4A46C] font-medium">
            {{ couple?.title || 'The Wedding Of' }}
          </p>
          <div class="h-px w-6 sm:w-10 bg-[#C4A46C]/60" />
        </div>

        <h1
          class="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#F6EFE5] tracking-wide mt-2 mb-3 leading-tight anim-names drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
        >
          {{ couple?.shortName }}
        </h1>

        <div
          v-if="formattedDate"
          class="inline-flex items-center justify-center gap-2.5 font-body text-xs sm:text-sm tracking-[0.32em] text-[#F6EFE5]/90 uppercase anim-date"
        >
          <span class="text-[8px] text-[#C4A46C]">◇</span>
          <span>{{ formattedDate }}</span>
          <span class="text-[8px] text-[#C4A46C]">◇</span>
        </div>
      </div>

      <!-- Bottom / Guest & CTA Block -->
      <div class="w-full pb-3 sm:pb-5 space-y-4">
        <!-- Guest Box (Elevated Glassmorphism Card) -->
        <div
          class="w-full max-w-xs mx-auto py-3.5 px-5 rounded-xs bg-[#2A0D14]/65 backdrop-blur-md border border-[#C4A46C]/40 shadow-[0_8px_24px_rgba(0,0,0,0.45)] anim-guest"
        >
          <p class="font-body text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#C4A46C] font-medium mb-1">
            Kepada Yth:
          </p>
          <p class="font-serif text-xl sm:text-2xl text-[#F6EFE5] font-normal tracking-wide truncate px-1">
            {{ guestName }}
          </p>
        </div>

        <!-- Open Invitation CTA with Shimmer Effect -->
        <div class="anim-cta">
          <button
            class="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-xs border border-[#C4A46C] bg-gradient-to-r from-[#2A0D14]/90 via-[#5A1724]/90 to-[#2A0D14]/90 hover:from-[#5A1724] hover:to-[#772638] text-[#F6EFE5] font-body text-xs sm:text-sm font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(196,164,108,0.25)] hover:shadow-[0_4px_28px_rgba(196,164,108,0.45)] active:scale-[0.98] min-h-[46px]"
            @click="openInvitation"
          >
            <!-- Shimmer light-bar animation -->
            <span
              class="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 anim-shimmer pointer-events-none"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-4 text-[#C4A46C] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#F6EFE5]"
            >
              <path
                fill-rule="evenodd"
                d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="relative z-10">Buka Undangan</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useGuest } from '~/composables/useGuest'
import { useAudio } from '~/composables/useAudio'

const props = defineProps({
  couple: {
    type: Object,
    default: null,
  },
  bgImage: {
    type: String,
    default: '/images/2.webp',
  },
  countdown: {
    type: Object,
    default: null,
  },
  dateText: {
    type: String,
    default: '',
  },
  targetDate: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['open'])
const landingRef = ref(null)

const { guestName } = useGuest()
const { play } = useAudio()

const formattedDate = computed(() => {
  const target = props.countdown?.targetDate || props.targetDate
  if (target) {
    const d = new Date(target)
    if (!Number.isNaN(d.getTime())) {
      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0')
      const year = d.getFullYear()
      return `${day} · ${month} · ${year}`
    }
  }

  return props.countdown?.dateText || props.dateText || ''
})

const openInvitation = () => {
  if (landingRef.value) {
    landingRef.value.classList.add('opacity-0')
  }
  play()
  setTimeout(() => {
    emit('open')
  }, 200)
}
</script>

<style scoped>
@keyframes zoomSlow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.06);
  }
}

.anim-zoom {
  animation: zoomSlow 20s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate;
}

@keyframes shimmerEffect {
  0% {
    transform: translateX(-150%) skewX(-12deg);
  }
  50%, 100% {
    transform: translateX(250%) skewX(-12deg);
  }
}

.anim-shimmer {
  animation: shimmerEffect 3.5s ease-in-out infinite;
}

@keyframes fade-down {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.anim-eyebrow {
  animation: fade-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s both;
}

.anim-names {
  animation: fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}

.anim-date {
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
}

.anim-guest {
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
}

.anim-cta {
  animation: fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s both;
}

@media (prefers-reduced-motion: reduce) {
  .anim-zoom,
  .anim-shimmer,
  .anim-eyebrow,
  .anim-names,
  .anim-date,
  .anim-guest,
  .anim-cta {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
