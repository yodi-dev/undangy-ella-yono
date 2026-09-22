<template>
  <section class="relative bg-[#521521] text-[#F6EFE5] py-20 sm:py-24 md:py-28 px-6 text-center transition-colors">
    <div class="relative max-w-2xl mx-auto">
      <!-- Top Subtle Ornament Divider -->
      <div
        class="flex items-center justify-center gap-3 text-[#C4A46C]/70 mb-8"
        data-aos="fade-in"
        data-aos-duration="800"
      >
        <div class="h-px w-12 sm:w-20 bg-[#C4A46C]/40" />
        <span class="text-[10px] tracking-widest">◆</span>
        <div class="h-px w-12 sm:w-20 bg-[#C4A46C]/40" />
      </div>

      <figure>
        <!-- White Dove Asset (naturally visible on Maroon background) -->
        <div
          v-if="quote?.icon"
          class="mb-6 flex justify-center"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <img
            :src="quote.icon"
            alt="Ikon Undangan"
            class="w-8 h-8 object-contain opacity-80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
            loading="lazy"
          >
        </div>

        <!-- Editorial Verse Text in Warm Ivory -->
        <blockquote
          class="font-serif text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-[#F6EFE5] italic max-w-xl mx-auto px-2"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="200"
        >
          "{{ quote?.text }}"
        </blockquote>

        <!-- Source Reference in Champagne Gold Accent -->
        <figcaption
          class="font-body text-xs sm:text-sm text-[#C4A46C] font-medium tracking-[0.25em] uppercase mt-8"
          data-aos="fade-in"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          {{ quote?.source }}
        </figcaption>
      </figure>

      <!-- Bottom Subtle Ornament Divider -->
      <div
        class="flex items-center justify-center gap-3 text-[#C4A46C]/70 mt-8"
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay="350"
      >
        <div class="h-px w-12 sm:w-20 bg-[#C4A46C]/40" />
        <span class="text-[10px] tracking-widest">◆</span>
        <div class="h-px w-12 sm:w-20 bg-[#C4A46C]/40" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  quote: {
    type: Object,
    default: null,
  },
})
</script>
