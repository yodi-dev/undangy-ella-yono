<template>
  <section id="closing"
    class="relative bg-[#22090F] text-[#F6EFE5] pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 px-6 text-center overflow-hidden transition-colors">
    <!-- Background Ambient Wine Vignette -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-[#160408]/40 to-[#160408]/90 pointer-events-none" />

    <div class="relative z-10 max-w-4xl mx-auto">
      <!-- Top Subtle Ornament Divider -->
      <div class="flex items-center justify-center gap-3 text-[#C4A46C]/70 mb-6" data-aos="fade-in"
        data-aos-duration="800">
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
        <span class="text-[10px] tracking-widest text-[#C4A46C]">◆</span>
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
      </div>

      <!-- Header: Title & Message -->
      <div class="mb-10 sm:mb-12">
        <span class="font-heading text-2xl sm:text-3xl text-[#C4A46C] block mb-2" data-aos="fade-up"
          data-aos-duration="800">
          with love
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F6EFE5] font-normal tracking-wide"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          {{ closing?.title || 'Terima Kasih' }}
        </h2>
        <p v-if="closing?.message"
          class="font-serif italic text-sm sm:text-base text-[#F6EFE5]/85 max-w-xl mx-auto leading-relaxed mt-4"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          {{ closing.message }}
        </p>
      </div>

      <!-- Centerpiece Couple Photography Moment -->
      <div class="max-w-md mx-auto my-8 sm:my-10" data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
        <div
          class="relative overflow-hidden rounded-sm border border-[#C4A46C]/40 shadow-[0_16px_40px_rgba(0,0,0,0.55)] group aspect-[4/5] sm:aspect-[3/4] bg-[#2A0D14]">
          <img loading="lazy" :src="closing?.photo || '/images/closing.webp'" alt="Foto Mempelai"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#160408]/85 via-transparent to-transparent pointer-events-none" />
          <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/25 pointer-events-none" />

          <!-- Floating Names & Date inside Photo -->
          <div class="absolute bottom-4 inset-x-4 text-center text-[#F6EFE5] pointer-events-none">
            <span class="font-heading text-2xl sm:text-3xl text-[#C4A46C] block leading-none drop-shadow-md">
              {{ couple?.shortName }}
            </span>
            <span v-if="dateText"
              class="font-body text-[10px] sm:text-xs tracking-[0.3em] text-[#F6EFE5]/85 uppercase mt-1.5 block drop-shadow-sm">
              {{ dateText }}
            </span>
          </div>
        </div>
      </div>

      <!-- Signature Section: Kami yang Berbahagia -->
      <div class="space-y-2 mt-8 sm:mt-10" data-aos="fade-up" data-aos-duration="800" data-aos-delay="250">
        <p class="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C4A46C] font-medium">
          {{ closing?.coupleText || 'Kami yang berbahagia' }}
        </p>
        <h3 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F6EFE5] font-normal tracking-wide">
          {{ couple?.shortName }}
        </h3>
      </div>

      <!-- Editorial Quiet Footer -->
      <footer class="mt-14 sm:mt-16 pt-8 border-t border-[#C4A46C]/25 text-xs text-[#F6EFE5]/60 space-y-3"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
        <!-- Top Ornament in Footer -->
        <div class="flex items-center justify-center gap-2 text-[#C4A46C]/50 mb-4">
          <div class="h-px w-8 bg-[#C4A46C]/30" />
          <span class="text-[8px]">◇</span>
          <div class="h-px w-8 bg-[#C4A46C]/30" />
        </div>

        <!-- Music Attribution -->
        <p v-if="closing?.musicAttribution"
          class="font-body italic text-[11px] sm:text-xs text-[#F6EFE5]/50 whitespace-pre-line leading-relaxed max-w-lg mx-auto">
          {{ closing.musicAttribution }}
        </p>

        <!-- Icon Attribution -->
        <p v-if="closing?.iconAttribution" class="font-body text-[11px] sm:text-xs text-[#F6EFE5]/50">
          {{ closing.iconAttribution.text }}
          <a :href="closing.iconAttribution.url" target="_blank" rel="noopener noreferrer"
            class="text-[#C4A46C]/80 hover:text-[#C4A46C] underline underline-offset-2 transition-colors">
            {{ closing.iconAttribution.author }}
          </a>
        </p>

        <!-- Developer Credit -->
        <p v-if="closing?.developerCredit" class="font-body text-[11px] sm:text-xs text-[#F6EFE5]/60">
          {{ closing.developerCredit.text }}
          <a :href="closing.developerCredit.url" target="_blank" rel="noopener noreferrer"
            class="text-[#C4A46C] hover:text-[#F6EFE5] font-medium underline underline-offset-2 transition-colors">
            {{ closing.developerCredit.author }}
          </a>
        </p>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
  couple: {
    type: Object,
    default: null,
  },
  closing: {
    type: Object,
    default: null,
  },
  dateText: {
    type: String,
    default: '',
  },
})

const currentYear = computed(() => new Date().getFullYear())
</script>
