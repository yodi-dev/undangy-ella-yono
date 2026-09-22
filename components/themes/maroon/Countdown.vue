<template>
  <section
    class="relative min-h-[100svh] h-[100svh] w-full overflow-hidden bg-cover bg-no-repeat bg-[position:50%_center] md:bg-[position:center_35%] text-center select-none"
    :style="{ backgroundImage: `url(${bgImage || '/images/7.webp'})` }"
  >
    <!-- Top Gradient: follows the top content zone for text legibility -->
    <div
      class="absolute top-0 inset-x-0 h-80 sm:h-72 md:h-80 bg-gradient-to-b from-[#2A0D14]/85 via-[#2A0D14]/45 to-transparent pointer-events-none z-0"
    />

    <!-- Bottom Gradient: follows the bottom content zone for text legibility -->
    <div
      class="absolute bottom-0 inset-x-0 h-80 sm:h-64 md:h-72 bg-gradient-to-t from-[#2A0D14]/90 via-[#2A0D14]/50 to-transparent pointer-events-none z-0"
    />

    <!-- Two-Zone Fullscreen Layout: Atas & Bawah -->
    <div class="relative z-10 h-full w-full max-w-xl mx-auto px-6 flex flex-col justify-between items-center">
      <!-- BAGIAN ATAS: Save The Date & Main Date -->
      <div class="pt-20 sm:pt-8 md:pt-8 flex flex-col items-center">
        <p
          class="font-body text-md sm:text-sm uppercase tracking-[0.35em] text-[#F6EFE5]/90 mb-2"
          style="text-shadow: 0 2px 14px rgba(0, 0, 0, 0.55);"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Save The Date
        </p>

        <!-- Restrained Thin Divider -->
        <div
          class="flex items-center justify-center gap-2 text-[#C4A46C] mb-3"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <div class="h-px w-6 sm:w-10 bg-[#C4A46C]/60" />
          <span class="text-[9px] leading-none">◇</span>
          <div class="h-px w-6 sm:w-10 bg-[#C4A46C]/60" />
        </div>

        <!-- Main Date -->
        <div
          class="flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >
          <span
            class="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-[#F6EFE5] leading-none tracking-tight"
            style="text-shadow: 0 2px 18px rgba(0, 0, 0, 0.65);"
          >
            {{ dateParts.day }}
          </span>
          <span
            class="font-body text-xs sm:text-sm tracking-[0.38em] text-[#C4A46C] uppercase mt-2"
            style="text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);"
          >
            {{ dateParts.month }}
          </span>
          <span
            class="font-body text-[11px] sm:text-xs tracking-[0.32em] text-[#F6EFE5]/85 mt-0.5"
            style="text-shadow: 0 2px 14px rgba(0, 0, 0, 0.6);"
          >
            {{ dateParts.year }}
          </span>
        </div>
      </div>

      <!-- BAGIAN BAWAH: Countdown Units & Supporting Date -->
      <div class="pb-20 sm:pb-4 md:pb-4 flex flex-col items-center space-y-3 sm:space-y-4">
        <!-- Card-less Stationery Countdown Units -->
        <div
          class="flex items-center justify-center gap-2.5 sm:gap-5 md:gap-7"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="350"
        >
          <template
            v-for="(item, i) in countdownItems"
            :key="item.label"
          >
            <div class="flex flex-col items-center min-w-[50px] sm:min-w-[62px]">
              <span
                class="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#F6EFE5] tracking-tight tabular-nums leading-tight"
                style="text-shadow: 0 2px 14px rgba(0, 0, 0, 0.55);"
              >
                {{ item.value }}
              </span>
              <span
                class="font-body text-[9px] sm:text-[10px] tracking-[0.22em] text-[#C4A46C] uppercase mt-1"
                style="text-shadow: 0 2px 10px rgba(0, 0, 0, 0.55);"
              >
                {{ item.label }}
              </span>
            </div>

            <!-- Thin Vertical Champagne Divider -->
            <div
              v-if="i < countdownItems.length - 1"
              class="h-6 sm:h-7 w-px bg-[#C4A46C]/40"
            />
          </template>
        </div>

        <!-- Supporting Date Derived from Existing Data -->
        <p
          v-if="countdown?.dateText"
          class="font-body text-xs sm:text-sm tracking-[0.22em] text-[#F6EFE5]/85"
          style="text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="450"
        >
          {{ countdown.dateText }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useCountdown } from '~/composables/useCountdown'

const props = defineProps({
  couple: {
    type: Object,
    default: null,
  },
  countdown: {
    type: Object,
    default: null,
  },
  bgImage: {
    type: String,
    default: '',
  },
})

const { days, hours, minutes, seconds } = useCountdown(() => props.countdown?.targetDate)

const dateParts = computed(() => {
  if (props.countdown?.targetDate) {
    const d = new Date(props.countdown.targetDate)
    if (!Number.isNaN(d.getTime())) {
      const day = String(d.getDate()).padStart(2, '0')
      const month = d.toLocaleString('en-US', { month: 'long' }).toUpperCase()
      const year = String(d.getFullYear())
      return { day, month, year }
    }
  }

  return { day: '26', month: 'JULY', year: '2025' }
})

const countdownItems = computed(() => [
  { label: 'HARI', value: String(days.value).padStart(2, '0') },
  { label: 'JAM', value: String(hours.value).padStart(2, '0') },
  { label: 'MENIT', value: String(minutes.value).padStart(2, '0') },
  { label: 'DETIK', value: String(seconds.value).padStart(2, '0') },
])
</script>
