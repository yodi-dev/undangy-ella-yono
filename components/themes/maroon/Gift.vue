<template>
  <section
    id="gift"
    class="relative bg-[#521521] text-[#F6EFE5] py-20 sm:py-24 md:py-28 px-6 transition-colors"
  >
    <div class="max-w-2xl mx-auto text-center">
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

      <!-- Section Header -->
      <div class="mb-12 sm:mb-16">
        <span
          class="font-heading text-2xl sm:text-3xl text-[#C4A46C] block mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          with love
        </span>
        <h2
          class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F6EFE5] font-normal tracking-wide"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          {{ gift?.title || 'Wedding Gift' }}
        </h2>
        <p
          v-if="gift?.message"
          class="font-body text-xs sm:text-sm text-[#F6EFE5]/80 max-w-lg mx-auto leading-relaxed mt-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="150"
        >
          {{ gift.message }}
        </p>
      </div>

      <!-- Daftar Rekening (Editorial Surface) -->
      <div
        class="space-y-6"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div
          v-for="(bank, idx) in banks"
          :key="idx"
          class="relative overflow-hidden rounded-sm bg-[#2A0D14]/55 backdrop-blur-sm border border-[#C4A46C]/35 p-6 sm:p-8 max-w-md mx-auto shadow-[0_8px_30px_rgba(0,0,0,0.2)] text-center transition-all duration-300"
        >
          <span class="font-body text-xs uppercase tracking-[0.25em] text-[#C4A46C] font-semibold block">
            {{ bank.name }}
          </span>

          <div class="h-px w-12 mx-auto bg-[#C4A46C]/30 my-3" />

          <p
            class="font-serif text-2xl sm:text-3xl tracking-widest text-[#F6EFE5] font-normal my-2 select-all tabular-nums"
          >
            {{ bank.account }}
          </p>

          <p class="font-body text-xs sm:text-sm text-[#F6EFE5]/75 italic mb-6">
            a.n. {{ bank.owner }}
          </p>

          <div>
            <button
              type="button"
              class="group inline-flex items-center justify-center gap-2 border border-[#C4A46C]/60 hover:bg-[#C4A46C] hover:text-[#2A0D14] text-[#F6EFE5] font-body text-xs uppercase tracking-[0.2em] px-6 py-2.5 rounded-sm transition-all duration-300 min-h-[44px] active:scale-[0.98]"
              @click="copyToClipboard(bank.account)"
            >
              <svg
                class="w-4 h-4 text-[#C4A46C] group-hover:text-[#2A0D14] transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
              <span>Salin Nomor</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Toast Notif -->
      <transition name="fade">
        <div
          v-if="toast.visible"
          class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#2A0D14] text-[#F6EFE5] border border-[#C4A46C]/50 px-6 py-2.5 rounded-full shadow-lg text-xs tracking-wider z-50 pointer-events-none"
        >
          {{ toast.message }}
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  gift: {
    type: Object,
    default: null,
  },
})

const banks = computed(() => props.gift?.banks || [])

const toast = ref({
  visible: false,
  message: '',
})

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    toast.value.message = 'Nomor rekening disalin!'
    toast.value.visible = true
    setTimeout(() => {
      toast.value.visible = false
    }, 2000)
  })
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
