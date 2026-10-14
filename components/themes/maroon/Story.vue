<template>
  <section
    id="love-story"
    class="relative bg-[#4A141E] text-[#F6EFE5] py-20 sm:py-24 md:py-28 px-6 transition-colors"
  >
    <div class="max-w-2xl mx-auto">
      <!-- Top Subtle Ornament Divider in Champagne -->
      <div
        class="flex items-center justify-center gap-3 text-[#C4A46C]/70 mb-6"
        data-aos="fade-in"
        data-aos-duration="800"
      >
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
        <span class="text-[10px] tracking-widest text-[#C4A46C]">◆</span>
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
      </div>

      <!-- Section Eyebrow & Title in Warm Ivory -->
      <div class="text-center mb-16 sm:mb-20">
        <span
          class="font-body text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#C4A46C] font-medium block mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Our Journey
        </span>
        <h2
          class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F6EFE5] font-normal tracking-wide"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          {{ story?.title || 'Love Story' }}
        </h2>
      </div>

      <!-- Editorial Timeline on Muted Maroon -->
      <div class="relative max-w-xl mx-auto pl-8 sm:pl-10 border-l border-[#C4A46C]/40 space-y-10 sm:space-y-12">
        <div
          v-for="(event, idx) in timeline"
          :key="idx"
          class="relative group"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="150 + idx * 100"
        >
          <!-- Timeline Diamond Node with Glowing Accent -->
          <div
            class="absolute -left-[38px] sm:-left-[46px] top-4 w-3.5 h-3.5 rotate-45 border border-[#C4A46C] bg-[#4A141E] shadow-[0_0_8px_rgba(196,164,108,0.4)] transition-all duration-300 group-hover:bg-[#C4A46C] group-hover:scale-125 flex items-center justify-center"
          >
            <div class="w-1 h-1 bg-[#C4A46C] rounded-full group-hover:bg-[#4A141E]" />
          </div>

          <!-- Milestone Content Card with Elevated Contrast & Warm Tone -->
          <div
            class="bg-[#3D1018]/60 hover:bg-[#3D1018]/90 backdrop-blur-xs p-5 sm:p-6 rounded-sm border border-[#C4A46C]/25 transition-all duration-300 hover:border-[#C4A46C]/50 shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.3)]"
          >
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[#C4A46C] text-xs">❦</span>
              <h3 class="font-serif text-lg sm:text-xl text-[#F6EFE5] font-medium tracking-wide">
                {{ event.date }}
              </h3>
            </div>
            <p class="font-body text-xs sm:text-sm text-[#F6EFE5]/85 leading-relaxed">
              {{ event.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  story: {
    type: Object,
    default: null,
  },
})

const timeline = computed(() => props.story?.timeline || [])
</script>
