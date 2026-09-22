<template>
  <section
    ref="landingRef"
    class="relative flex flex-col justify-between items-center h-screen min-h-[600px] w-full overflow-hidden bg-no-repeat bg-cover bg-[center_75%] md:bg-[center_35%] transition-opacity duration-700 ease-out"
    :style="{ backgroundImage: `url(${bgImage || '/images/landing.webp'})` }"
  >
    <!-- Cinematic Deep Wine Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-[#2A0D14]/75 via-[#2A0D14]/30 to-[#2A0D14]/95 pointer-events-none z-0"
    />

    <!-- Content: Editorial Layout -->
    <div
      class="relative z-10 flex flex-col justify-between items-center h-full w-full max-w-xl mx-auto px-6 py-12 sm:py-16 md:py-20 text-center"
    >
      <!-- Top / Header Block -->
      <div class="pt-4 sm:pt-6">
        <p
          class="font-body text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.32em] text-[#F6EFE5]/80 anim-eyebrow"
        >
          {{ couple?.title || 'The Wedding Of' }}
        </p>

        <h1
          class="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-[#F6EFE5] tracking-wide mt-3 mb-3 leading-tight anim-names"
        >
          {{ couple?.shortName }}
        </h1>

        <div
          v-if="formattedDate"
          class="inline-flex items-center justify-center gap-2 font-body text-xs sm:text-sm tracking-[0.3em] text-[#C4A46C] uppercase anim-date"
        >
          <span>{{ formattedDate }}</span>
        </div>
      </div>

      <!-- Bottom / Guest & CTA Block -->
      <div class="w-full pb-4 sm:pb-6 space-y-4">
        <!-- Guest Box -->
        <div
          class="w-full max-w-xs mx-auto py-3.5 px-5 rounded-sm bg-[#2A0D14]/45 backdrop-blur-sm border border-[#C4A46C]/30 shadow-sm anim-guest"
        >
          <p class="font-body text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#F6EFE5]/75 mb-1">
            Kepada Yth:
          </p>
          <p class="font-serif text-xl sm:text-2xl text-[#F6EFE5] font-normal tracking-wide">
            {{ guestName }}
          </p>
        </div>

        <!-- Open Invitation CTA -->
        <div class="anim-cta">
          <button
            class="group inline-flex items-center justify-center gap-2.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-sm border border-[#C4A46C]/60 bg-[#2A0D14]/60 hover:bg-[#5A1724] hover:border-[#C4A46C] text-[#F6EFE5] font-body text-xs sm:text-sm font-medium tracking-[0.22em] uppercase transition-all duration-300 active:scale-[0.98] min-h-[44px]"
            @click="openInvitation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-4 text-[#C4A46C] transition-colors group-hover:text-[#F6EFE5]"
            >
              <path
                fill-rule="evenodd"
                d="M2.106 6.447A2 2 0 0 0 1 8.237V16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.236a2 2 0 0 0-1.106-1.789l-7-3.5a2 2 0 0 0-1.788 0l-7 3.5Zm1.48 4.007a.75.75 0 0 0-.671 1.342l5.855 2.928a2.75 2.75 0 0 0 2.46 0l5.852-2.927a.75.75 0 1 0-.67-1.341l-5.853 2.926a1.25 1.25 0 0 1-1.118 0l-5.856-2.928Z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Buka Undangan</span>
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
    default: '/images/landing.webp',
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
  }, 150)
}
</script>

<style scoped>
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
