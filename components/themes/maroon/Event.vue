<template>
  <section
    id="event-detail"
    class="relative bg-[#22090F] text-[#F6EFE5] py-20 sm:py-24 md:py-28 px-6 transition-colors"
  >
    <div class="max-w-4xl mx-auto">
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
      <div class="text-center mb-12 sm:mb-16">
        <span
          class="font-body text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C4A46C] font-medium block mb-2"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Save Our Special Day
        </span>
        <h2
          class="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F6EFE5] font-normal tracking-wide"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          {{ mainEvent?.title || 'The Wedding Event' }}
        </h2>
      </div>

      <!-- Event Card List - High-Contrast Formal Structured Surface -->
      <div class="space-y-10">
        <div
          v-for="(event, idx) in (events.length ? events : [mainEvent])"
          :key="event?.id || idx"
          class="bg-[#F6EFE5] text-[#2C2021] rounded-sm p-6 sm:p-8 md:p-10 border border-[#C4A46C]/40 shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="150 + idx * 100"
        >
          <!-- Event Subtitle / Name -->
          <div class="text-center mb-8 pb-6 border-b border-[#C4A46C]/30">
            <span
              class="font-body text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#772638] font-medium block mb-1"
            >
              Acara
            </span>
            <h3 class="font-serif text-2xl sm:text-3xl text-[#5A1724] font-normal tracking-wide">
              {{ event?.subTitle }}
            </h3>
          </div>

          <!-- Two-Column Layout: Info + Map -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <!-- Details Column -->
            <div class="space-y-6">
              <!-- Date Block -->
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-sm border border-[#C4A46C]/50 flex items-center justify-center text-[#5A1724] bg-[#EDE0D0]/60 shrink-0 mt-0.5"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <span class="font-body text-[10px] uppercase tracking-[0.2em] text-[#772638] font-semibold block">
                    Tanggal
                  </span>
                  <p class="font-serif text-lg sm:text-xl text-[#2C2021] font-medium mt-0.5">
                    {{ event?.dateText }}
                  </p>
                </div>
              </div>

              <!-- Time Block -->
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-sm border border-[#C4A46C]/50 flex items-center justify-center text-[#5A1724] bg-[#EDE0D0]/60 shrink-0 mt-0.5"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span class="font-body text-[10px] uppercase tracking-[0.2em] text-[#772638] font-semibold block">
                    Waktu
                  </span>
                  <p class="font-body text-sm sm:text-base text-[#2C2021] font-medium mt-0.5">
                    {{ event?.timeText }}
                  </p>
                </div>
              </div>

              <!-- Location Block -->
              <div class="flex items-start gap-4">
                <div
                  class="w-10 h-10 rounded-sm border border-[#C4A46C]/50 flex items-center justify-center text-[#5A1724] bg-[#EDE0D0]/60 shrink-0 mt-0.5"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <span class="font-body text-[10px] uppercase tracking-[0.2em] text-[#772638] font-semibold block">
                    Lokasi
                  </span>
                  <p class="font-body text-sm sm:text-base text-[#2C2021] font-semibold mt-0.5">
                    {{ event?.locationName }}
                  </p>
                  <p
                    v-if="event?.address && event.address !== event.locationName"
                    class="font-body text-xs text-[#2C2021]/70 mt-1 leading-relaxed"
                  >
                    {{ event.address }}
                  </p>
                </div>
              </div>

              <!-- Entertainment Block (Optional) -->
              <div
                v-if="event?.entertainment"
                class="flex items-start gap-4"
              >
                <div
                  class="w-10 h-10 rounded-sm border border-[#C4A46C]/50 flex items-center justify-center text-[#5A1724] bg-[#EDE0D0]/60 shrink-0 mt-0.5"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                    />
                  </svg>
                </div>
                <div>
                  <span class="font-body text-[10px] uppercase tracking-[0.2em] text-[#772638] font-semibold block">
                    Hiburan
                  </span>
                  <p class="font-body text-sm sm:text-base text-[#2C2021] font-semibold mt-0.5">
                    {{ event.entertainment }}
                  </p>
                </div>
              </div>

              <!-- CTA Button -->
              <div class="pt-2">
                <a
                  v-if="getMapUrl(event)"
                  :href="getMapUrl(event)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#5A1724] hover:bg-[#772638] text-[#F6EFE5] text-xs font-medium uppercase tracking-[0.2em] px-6 py-3 rounded-sm border border-[#C4A46C]/30 transition-all duration-300 shadow-sm"
                >
                  <svg
                    class="w-4 h-4 text-[#C4A46C]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>Buka Google Maps</span>
                </a>
              </div>
            </div>

            <!-- Map Column -->
            <div
              class="overflow-hidden rounded-sm border border-[#C4A46C]/30 shadow-inner h-64 sm:h-72 md:h-full min-h-[260px] bg-[#EDE0D0]"
            >
              <iframe
                v-if="event?.googleMapsEmbedUrl"
                :src="event.googleMapsEmbedUrl"
                class="w-full h-full min-h-[260px] border-0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  events: {
    type: Array,
    default: () => [],
  },
})

const mainEvent = computed(() => props.events?.[0])

function getMapUrl(event) {
  if (event?.googleMapsUrl) {
    return event.googleMapsUrl
  }
  if (event?.googleMapsEmbedUrl) {
    const latMatch = event.googleMapsEmbedUrl.match(/!3d(-?[\d.]+)/)
    const lngMatch = event.googleMapsEmbedUrl.match(/!2d(-?[\d.]+)/)
    if (latMatch && lngMatch) {
      return `https://www.google.com/maps/search/?api=1&query=${latMatch[1]},${lngMatch[1]}`
    }
  }
  if (event?.locationName || event?.address) {
    const query = [event.locationName, event.address].filter(Boolean).join(', ')
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
  }
  return '#'
}
</script>
