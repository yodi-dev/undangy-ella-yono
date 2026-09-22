<template>
  <section id="gallery" class="relative bg-[#F6EFE5] text-[#2C2021] py-20 sm:py-24 md:py-28 px-6 transition-colors">
    <div class="max-w-5xl mx-auto">
      <!-- Top Subtle Ornament Divider -->
      <div class="flex items-center justify-center gap-3 text-[#C4A46C]/70 mb-6" data-aos="fade-in"
        data-aos-duration="800">
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
        <span class="text-[10px] tracking-widest text-[#C4A46C]">◆</span>
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
      </div>

      <!-- Section Header -->
      <div class="text-center mb-14 sm:mb-18">
        <span class="font-heading text-2xl sm:text-3xl text-[#C4A46C] block mb-2" data-aos="fade-up"
          data-aos-duration="800">
          Our Moments
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5A1724] font-normal tracking-wide"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          {{ gallery?.title || 'Galeri Kami' }}
        </h2>
      </div>

      <!-- EDITORIAL ALBUM COMPOSITION (Varied Rhythm & Visual Scales) -->
      <div class="space-y-6 sm:space-y-8">
        <!-- 1. Opening Asymmetric Feature Spread (Hero Portrait + Stacked Duo) -->
        <div v-if="heroImage" class="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch" data-aos="fade-up"
          data-aos-duration="800" data-aos-delay="150">
          <!-- Dominant Grand Hero Portrait -->
          <div
            class="md:col-span-7 relative overflow-hidden rounded-sm border border-[#C4A46C]/35 shadow-[0_4px_24px_rgba(42,13,20,0.07)] cursor-pointer group aspect-[3/4] sm:aspect-[4/5] bg-[#EDE0D0]/50"
            @click="showLightbox(getGlobalIndex(heroImage))">
            <img loading="lazy" :src="heroImage.src" :alt="heroImage.alt"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
            <div
              class="absolute inset-0 bg-[#2A0D14]/0 group-hover:bg-[#2A0D14]/15 transition-colors duration-300 pointer-events-none" />
            <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/20 pointer-events-none" />
            <div
              class="absolute bottom-3 left-3 bg-[#2A0D14]/65 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#C4A46C]/30 text-[10px] font-body uppercase tracking-[0.2em] text-[#F6EFE5]">
              Featured
            </div>
          </div>

          <!-- Stacked Curated Duo on Right Column -->
          <div v-if="duoImages.length" class="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
            <div v-for="(img, idx) in duoImages" :key="idx"
              class="relative overflow-hidden rounded-sm border border-[#C4A46C]/35 shadow-[0_4px_20px_rgba(42,13,20,0.06)] cursor-pointer group aspect-[3/4] md:aspect-[4/3] bg-[#EDE0D0]/50"
              @click="showLightbox(getGlobalIndex(img))">
              <img loading="lazy" :src="img.src" :alt="img.alt"
                class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
              <div
                class="absolute inset-0 bg-[#2A0D14]/0 group-hover:bg-[#2A0D14]/15 transition-colors duration-300 pointer-events-none" />
              <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/20 pointer-events-none" />
            </div>
          </div>
        </div>

        <!-- 2. Cinematic Panoramic Focus Crop (Breaks the vertical-only monotony) -->
        <div v-if="bannerImage"
          class="relative overflow-hidden rounded-sm border border-[#C4A46C]/35 shadow-[0_4px_24px_rgba(42,13,20,0.07)] cursor-pointer group w-full aspect-[16/8] sm:aspect-[21/9] bg-[#EDE0D0]/50"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="200"
          @click="showLightbox(getGlobalIndex(bannerImage))">
          <img loading="lazy" :src="bannerImage.src" :alt="bannerImage.alt"
            class="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-105">
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#2A0D14]/60 via-transparent to-transparent pointer-events-none" />
          <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/20 pointer-events-none" />
          <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[#F6EFE5]">
            <span class="font-heading text-lg sm:text-2xl text-[#C4A46C] block leading-none">
              Forever &amp; Always
            </span>
            <p class="font-serif italic text-xs sm:text-sm text-[#F6EFE5]/90 tracking-widest uppercase mt-1">
              Sebuah Cerita Dalam Bingkai
            </p>
          </div>
        </div>

        <!-- 3. Staggered Editorial Triptych (Dynamic Rhythmic Heights) -->
        <div v-if="triptychImages.length" class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 items-center"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <div v-for="(img, idx) in triptychImages" :key="idx" :class="[
            'relative overflow-hidden rounded-sm border border-[#C4A46C]/35 shadow-[0_4px_20px_rgba(42,13,20,0.06)] cursor-pointer group bg-[#EDE0D0]/50 transition-all duration-300',
            idx === 1
              ? 'aspect-[4/5] sm:scale-[1.02] sm:border-[#C4A46C]/50 shadow-md sm:-translate-y-2'
              : 'aspect-[3/4]',
          ]" @click="showLightbox(getGlobalIndex(img))">
            <img loading="lazy" :src="img.src" :alt="img.alt"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
            <div
              class="absolute inset-0 bg-[#2A0D14]/0 group-hover:bg-[#2A0D14]/15 transition-colors duration-300 pointer-events-none" />
            <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/20 pointer-events-none" />
          </div>
        </div>
      </div>

      <!-- Unified Fullscreen Lightbox -->
      <vue-easy-lightbox :visible="lightbox.visible" :imgs="allImages" :index="lightbox.index"
        @hide="lightbox.visible = false" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const props = defineProps({
  gallery: {
    type: Object,
    default: null,
  },
})

const allGalleryImages = computed(() => {
  const p = props.gallery?.portrait || []
  const l = props.gallery?.landscape || []
  return [...p, ...l]
})

const allImages = computed(() => allGalleryImages.value.map(i => i.src))

// 1. Opening Feature: Hero (0) + Stacked Duo (1, 2)
const heroImage = computed(() => allGalleryImages.value[0])
const duoImages = computed(() => allGalleryImages.value.slice(1, 3))

// 2. Panoramic Interlude: Banner (3)
const bannerImage = computed(() => allGalleryImages.value[3])

// 3. Staggered Triptych: (4, 5, 6)
const triptychImages = computed(() => allGalleryImages.value.slice(4, 7))

// 4. Remaining Curated Moments: (7 onwards)
const remainingImages = computed(() => {
  if (allGalleryImages.value.length > 7) {
    return allGalleryImages.value.slice(7)
  }
  return []
})

const getGlobalIndex = (img) => {
  if (!img) return 0
  const idx = allGalleryImages.value.findIndex(item => item.src === img.src)
  return idx >= 0 ? idx : 0
}

const lightbox = ref({ visible: false, index: 0 })

const showLightbox = (index) => {
  lightbox.value.index = index
  lightbox.value.visible = true
}
</script>
