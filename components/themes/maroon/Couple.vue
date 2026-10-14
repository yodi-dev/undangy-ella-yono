<template>
  <section class="relative bg-[#F6EFE5] text-[#2C2021] py-20 sm:py-24 md:py-28 px-6 transition-colors">
    <div class="relative max-w-5xl mx-auto text-center">
      <!-- Top Subtle Ornament Divider with Maroon Accent -->
      <div class="flex items-center justify-center gap-3 text-[#5A1724]/60 mb-6" data-aos="fade-in"
        data-aos-duration="800">
        <div class="h-px w-10 sm:w-16 bg-[#5A1724]/30" />
        <span class="text-[10px] tracking-widest text-[#5A1724]">◆</span>
        <div class="h-px w-10 sm:w-16 bg-[#5A1724]/30" />
      </div>

      <!-- Greeting Title in Rich Maroon -->
      <h2 v-if="couple?.greeting?.title"
        class="font-serif text-2xl sm:text-3xl md:text-4xl text-[#5A1724] font-normal tracking-wide mb-4"
        data-aos="fade-up" data-aos-duration="800">
        {{ couple.greeting.title }}
      </h2>

      <!-- Greeting Text -->
      <p v-if="couple?.greeting?.text"
        class="font-body text-xs sm:text-sm text-[#2C2021]/75 max-w-xl mx-auto leading-relaxed mb-16 sm:mb-20"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
        {{ couple.greeting.text }}
      </p>

      <!-- Mempelai Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-12 md:gap-8 lg:gap-12 max-w-4xl mx-auto">
        <!-- Mempelai Pria (The Groom) -->
        <div class="flex flex-col items-center text-center" data-aos="fade-up" data-aos-duration="800"
          data-aos-delay="200">
          <!-- Arch-Shaped Luxury Portrait Frame -->
          <div
            class="relative w-56 sm:w-64 aspect-[3/4.2] mb-6 overflow-hidden rounded-t-full rounded-b-xs border-2 border-[#C4A46C]/50 ring-4 ring-[#5A1724]/10 shadow-[0_16px_36px_rgba(90,23,36,0.14)] group">
            <img :src="couple?.groom?.photo" :alt="couple?.groom?.fullName"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-[#2A0D14]/30 via-transparent to-transparent pointer-events-none" />
            <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/30 rounded-t-full pointer-events-none" />
          </div>

          <!-- Groom Info with Stronger Maroon Hierarchy -->
          <span class="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C4A46C] font-semibold mb-2">
            The Groom
          </span>
          <h3 class="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#5A1724] font-normal tracking-wide mb-3">
            {{ couple?.groom?.fullName }}
          </h3>
          <p class="font-body text-xs sm:text-sm text-[#2C2021]/75 leading-relaxed max-w-xs mb-4">
            {{ couple?.groom?.parents }}
          </p>
          <a v-if="couple?.groom?.instagram" :href="couple?.groom?.instagramUrl" target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 font-body text-xs text-[#5A1724] hover:text-[#F6EFE5] hover:bg-[#5A1724] border border-[#5A1724]/35 hover:border-[#5A1724] rounded-full px-4 py-1.5 transition-all duration-300 shadow-sm active:scale-95">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>{{ couple?.groom?.instagram }}</span>
          </a>
        </div>

        <!-- Center Monogram Seal with Champagne Accent -->
        <div class="flex md:flex-col items-center justify-center gap-3 py-3 md:py-0 text-[#5A1724]" data-aos="fade-in"
          data-aos-duration="800" data-aos-delay="300">
          <div class="h-px md:h-16 w-12 md:w-px bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#C4A46C] to-transparent" />
          <div class="relative flex items-center justify-center size-12 rounded-full border border-[#C4A46C] bg-[#F6EFE5] shadow-sm ring-2 ring-[#C4A46C]/20">
            <span class="font-serif italic text-2xl text-[#5A1724] select-none">&amp;</span>
          </div>
          <div class="h-px md:h-16 w-12 md:w-px bg-gradient-to-r md:bg-gradient-to-b from-transparent via-[#C4A46C] to-transparent" />
        </div>

        <!-- Mempelai Wanita (The Bride) -->
        <div class="flex flex-col items-center text-center" data-aos="fade-up" data-aos-duration="800"
          data-aos-delay="400">
          <!-- Arch-Shaped Luxury Portrait Frame -->
          <div
            class="relative w-56 sm:w-64 aspect-[3/4.2] mb-6 overflow-hidden rounded-t-full rounded-b-xs border-2 border-[#C4A46C]/50 ring-4 ring-[#5A1724]/10 shadow-[0_16px_36px_rgba(90,23,36,0.14)] group">
            <img :src="couple?.bride?.photo" :alt="couple?.bride?.fullName"
              class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-[#2A0D14]/30 via-transparent to-transparent pointer-events-none" />
            <div class="absolute inset-0 ring-1 ring-inset ring-[#C4A46C]/30 rounded-t-full pointer-events-none" />
          </div>

          <!-- Bride Info with Stronger Maroon Hierarchy -->
          <span class="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C4A46C] font-semibold mb-2">
            The Bride
          </span>
          <h3 class="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#5A1724] font-normal tracking-wide mb-3">
            {{ couple?.bride?.fullName }}
          </h3>
          <p class="font-body text-xs sm:text-sm text-[#2C2021]/75 leading-relaxed max-w-xs mb-4">
            {{ couple?.bride?.parents }}
          </p>
          <a v-if="couple?.bride?.instagram" :href="couple?.bride?.instagramUrl" target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 font-body text-xs text-[#5A1724] hover:text-[#F6EFE5] hover:bg-[#5A1724] border border-[#5A1724]/35 hover:border-[#5A1724] rounded-full px-4 py-1.5 transition-all duration-300 shadow-sm active:scale-95">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>{{ couple?.bride?.instagram }}</span>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  couple: {
    type: Object,
    default: null,
  },
})
</script>
