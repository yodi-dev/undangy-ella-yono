<template>
  <section
    id="rsvp-blessing"
    class="relative bg-[#F6EFE5] text-[#2C2021] py-20 sm:py-24 md:py-28 px-6 transition-colors"
  >
    <div class="max-w-3xl mx-auto">
      <!-- Top Subtle Ornament Divider -->
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
      <div class="text-center mb-14 sm:mb-18">
        <span
          class="font-heading text-2xl sm:text-3xl text-[#C4A46C] block mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          with love
        </span>
        <h2
          class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#5A1724] font-normal tracking-wide"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          Doa &amp; Kehadiran
        </h2>
      </div>

      <!-- Form Kehadiran & Ucapan (Editorial Surface) -->
      <div
        class="bg-[#EDE0D0]/45 border border-[#C4A46C]/35 rounded-sm p-6 sm:p-8 md:p-10 max-w-xl mx-auto shadow-[0_4px_24px_rgba(42,13,20,0.05)] mb-16 sm:mb-20"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <form
          class="space-y-6"
          @submit.prevent="submitForm"
        >
          <!-- Nama -->
          <div>
            <label
              for="name"
              class="font-body text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#5A1724] font-semibold block mb-1.5"
            >
              Nama
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Tuliskan nama Anda"
              class="w-full rounded-sm border border-[#C4A46C]/40 bg-white/80 focus:bg-white focus:border-[#5A1724] focus:outline-none px-4 py-3 text-xs sm:text-sm text-[#2C2021] placeholder-[#2C2021]/40 transition-all shadow-inner"
            >
          </div>

          <!-- Konfirmasi Kehadiran (Pill Selector) -->
          <div>
            <span
              class="font-body text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#5A1724] font-semibold block mb-2"
            >
              Konfirmasi Kehadiran
            </span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                :class="[
                  'px-4 py-3 text-xs font-medium uppercase tracking-[0.15em] rounded-sm border transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 cursor-pointer',
                  form.attending === 'yes'
                    ? 'bg-[#5A1724] text-[#F6EFE5] border-[#5A1724] shadow-sm'
                    : 'bg-white/70 text-[#2C2021]/80 border-[#C4A46C]/40 hover:border-[#5A1724]/60',
                ]"
                @click="form.attending = 'yes'"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Hadir</span>
              </button>

              <button
                type="button"
                :class="[
                  'px-4 py-3 text-xs font-medium uppercase tracking-[0.15em] rounded-sm border transition-all duration-300 min-h-[44px] flex items-center justify-center gap-2 cursor-pointer',
                  form.attending === 'no'
                    ? 'bg-[#5A1724] text-[#F6EFE5] border-[#5A1724] shadow-sm'
                    : 'bg-white/70 text-[#2C2021]/80 border-[#C4A46C]/40 hover:border-[#5A1724]/60',
                ]"
                @click="form.attending = 'no'"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Tidak Hadir</span>
              </button>
            </div>
            <!-- Hidden input for HTML validation if needed -->
            <input
              v-model="form.attending"
              type="text"
              required
              class="sr-only"
              tabindex="-1"
            >
          </div>

          <!-- Ucapan -->
          <div>
            <label
              for="message"
              class="font-body text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#5A1724] font-semibold block mb-1.5"
            >
              Ucapan &amp; Doa Restu
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              required
              placeholder="Tuliskan doa atau ucapan terbaik Anda..."
              class="w-full rounded-sm border border-[#C4A46C]/40 bg-white/80 focus:bg-white focus:border-[#5A1724] focus:outline-none p-4 text-xs sm:text-sm text-[#2C2021] placeholder-[#2C2021]/40 transition-all resize-y min-h-[110px] shadow-inner"
            />
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-3.5 px-6 bg-[#5A1724] hover:bg-[#772638] text-[#F6EFE5] font-body text-xs font-medium uppercase tracking-[0.2em] rounded-sm border border-[#C4A46C]/30 transition-all duration-300 min-h-[44px] shadow-sm disabled:opacity-50 active:scale-[0.99] cursor-pointer"
            >
              {{ isSubmitting ? 'Mengirim...' : 'Kirim Ucapan' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Daftar Ucapan (Editorial Entries) -->
      <div
        class="max-w-xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="250"
      >
        <h3 class="font-serif text-2xl sm:text-3xl text-[#5A1724] font-normal text-center mb-8 tracking-wide">
          Ucapan Sahabat &amp; Keluarga
        </h3>

        <!-- Loading / Empty State -->
        <div
          v-if="isLoading"
          class="text-center font-body text-xs sm:text-sm text-[#2C2021]/60 italic py-8"
        >
          Memuat ucapan...
        </div>
        <div
          v-else-if="wishes.length === 0"
          class="text-center font-body text-xs sm:text-sm text-[#2C2021]/60 italic py-8"
        >
          Belum ada ucapan yang masuk. Jadilah yang pertama memberikan doa restu!
        </div>

        <!-- Wishes Scroll List -->
        <div
          v-else
          class="space-y-6 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar"
        >
          <div
            v-for="(entry, index) in wishes"
            :key="index"
            class="border-b border-[#C4A46C]/25 pb-6 last:border-b-0"
          >
            <div class="flex items-center justify-between gap-3 mb-1.5">
              <p class="font-serif text-lg sm:text-xl text-[#5A1724] font-normal tracking-wide">
                {{ entry.name }}
              </p>
              <span
                v-if="entry.attending === 'yes'"
                class="font-body text-[10px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full border border-[#C4A46C]/50 text-[#5A1724] bg-[#EDE0D0]/60 shrink-0 font-medium"
              >
                Hadir
              </span>
              <span
                v-else
                class="font-body text-[10px] tracking-[0.2em] uppercase px-2.5 py-0.5 rounded-full border border-[#C4A46C]/30 text-[#2C2021]/60 bg-white/50 shrink-0"
              >
                Tidak Hadir
              </span>
            </div>
            <p class="font-body text-xs sm:text-sm text-[#2C2021]/80 leading-relaxed italic">
              "{{ entry.message }}"
            </p>
          </div>
        </div>
      </div>

      <!-- Toast Feedback -->
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
import { ref, onMounted } from 'vue'
import { useGuestbook } from '~/composables/useGuestbook'

const { wishes, isLoading, isSubmitting, fetchWishes, submitWish } = useGuestbook()

const form = ref({ name: '', attending: '', message: '' })
const toast = ref({ visible: false, message: '' })

const submitForm = async () => {
  if (!form.value.attending) {
    toast.value = { visible: true, message: 'Silakan pilih status kehadiran!' }
    setTimeout(() => {
      toast.value.visible = false
    }, 2500)
    return
  }

  const success = await submitWish(form.value)

  if (!success) {
    toast.value = { visible: true, message: 'Gagal mengirim ucapan!' }
    setTimeout(() => {
      toast.value.visible = false
    }, 2500)
    return
  }

  toast.value = { visible: true, message: 'Ucapan berhasil dikirim!' }
  form.value = { name: '', attending: '', message: '' }
  setTimeout(() => {
    toast.value.visible = false
  }, 2500)
}

onMounted(() => {
  fetchWishes()
})
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

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(196, 164, 108, 0.1);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(196, 164, 108, 0.4);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(90, 23, 36, 0.6);
}
</style>
