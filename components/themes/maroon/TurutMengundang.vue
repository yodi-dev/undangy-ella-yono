<template>
  <section id="turut-mengundang"
    class="relative bg-[#4A141E] text-[#F6EFE5] py-20 sm:py-24 md:py-28 px-6 transition-colors">
    <div class="max-w-5xl mx-auto">
      <!-- Top Subtle Ornament Divider -->
      <div class="flex items-center justify-center gap-3 text-[#C4A46C]/70 mb-6" data-aos="fade-in"
        data-aos-duration="800">
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
        <span class="text-[10px] tracking-widest text-[#C4A46C]">◆</span>
        <div class="h-px w-10 sm:w-16 bg-[#C4A46C]/40" />
      </div>

      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16">
        <span class="font-heading text-2xl sm:text-3xl text-[#C4A46C] block mb-2" data-aos="fade-up"
          data-aos-duration="800">
          Ungkapan Hormat
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F6EFE5] font-normal tracking-wide"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          {{ turutMengundang?.title || 'Turut Mengundang' }}
        </h2>
        <p v-if="turutMengundang?.subTitle"
          class="font-body text-xs sm:text-sm text-[#F6EFE5]/80 max-w-2xl mx-auto leading-relaxed mt-3"
          data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          {{ turutMengundang.subTitle }}
        </p>
      </div>

      <!-- Categorized Family Grid -->
      <div v-if="categories.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        <div v-for="(cat, idx) in categories" :key="idx" :class="[
          'bg-[#2A0D14]/50 backdrop-blur-xs border border-[#C4A46C]/30 rounded-sm p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.25)] flex flex-col items-center text-center relative overflow-hidden group transition-all duration-300 hover:border-[#C4A46C]/50 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]',
          idx === 2 && categories.length === 3 ? 'md:col-span-2 lg:col-span-1' : '',
        ]" data-aos="fade-up" data-aos-duration="800" :data-aos-delay="150 + idx * 100">
          <!-- Top Subtle Gold Glow Line -->
          <div
            class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C4A46C]/60 to-transparent" />

          <!-- Category Title -->
          <h3
            class="font-serif text-lg sm:text-xl text-[#C4A46C] font-normal tracking-wide mb-4 pb-3 border-b border-[#C4A46C]/25 w-full">
            {{ cat.title }}
          </h3>

          <!-- Family Names List -->
          <ul class="space-y-2.5 w-full">
            <li v-for="(name, nIdx) in cat.names" :key="nIdx"
              class="font-serif text-sm sm:text-base text-[#F6EFE5]/90 tracking-wide leading-relaxed">
              {{ name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Flat Names Fallback (if categories are not used) -->
      <div v-else-if="turutMengundang?.names?.length"
        class="bg-[#2A0D14]/50 backdrop-blur-xs border border-[#C4A46C]/30 rounded-sm p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.25)] max-w-3xl mx-auto"
        data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div v-for="(name, idx) in turutMengundang.names" :key="idx"
            class="font-serif text-sm sm:text-base text-[#F6EFE5]/90 tracking-wide py-1">
            {{ name }}
          </div>
        </div>
      </div>

      <!-- Bottom Subtle Diamond Divider -->
      <div class="flex items-center justify-center gap-3 text-[#C4A46C]/50 mt-14" data-aos="fade-in"
        data-aos-duration="800" data-aos-delay="300">
        <div class="h-px w-8 sm:w-12 bg-[#C4A46C]/30" />
        <span class="text-[8px] tracking-widest text-[#C4A46C]/70">◇</span>
        <div class="h-px w-8 sm:w-12 bg-[#C4A46C]/30" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  turutMengundang: {
    type: Object,
    default: null,
  },
})

const categories = computed(() => props.turutMengundang?.categories || [])
</script>
