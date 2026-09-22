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
      <div class="relative max-w-xl mx-auto pl-8 sm:pl-10 border-l border-[#C4A46C]/40 space-y-12 sm:space-y-16">
        <div
          v-for="(event, idx) in timeline"
          :key="idx"
          class="relative group"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="150 + idx * 100"
        >
          <!-- Timeline Diamond Node -->
          <div
            class="absolute -left-[37px] sm:-left-[45px] top-1.5 w-3 h-3 rotate-45 border border-[#C4A46C] bg-[#4A141E] transition-colors duration-300 group-hover:bg-[#C4A46C]"
          />

          <!-- Milestone Content with Clear Contrast -->
          <div>
            <h3 class="font-serif text-xl sm:text-2xl text-[#F6EFE5] font-normal tracking-wide">
              {{ event.date }}
            </h3>
            <p class="font-body text-xs sm:text-sm text-[#F6EFE5]/85 leading-relaxed mt-2.5">
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
