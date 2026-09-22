<template>
  <ThemesMaroonShell>
    <ThemesMaroonCover v-if="!showInvitation" :couple="invitation.couple" :countdown="invitation.countdown"
      :bg-image="invitation.assets.landingBg" @open="showInvitation = true" />

    <template v-else>
      <ThemesMaroonCountdown :couple="invitation.couple" :countdown="invitation.countdown"
        :bg-image="invitation.assets.countdownBg" />
      <ThemesMaroonQuote :quote="invitation.quote" />
      <ThemesMaroonCouple :couple="invitation.couple" />
      <ThemesMaroonStory :story="invitation.loveStory" />
      <ThemesMaroonEvent :events="invitation.events" />
      <ThemesMaroonGallery :gallery="invitation.gallery" />
      <ThemesMaroonGift :gift="invitation.gift" />
      <ThemesMaroonWishes />
      <ThemesMaroonTurutMengundang :turut-mengundang="invitation.turutMengundang" />
      <ThemesMaroonClosing :couple="invitation.couple" :closing="invitation.closing"
        :date-text="invitation.countdown.dateText" />
      <SharedAudioPlayer :audio="invitation.audio" />
    </template>
  </ThemesMaroonShell>
</template>

<script setup>
import { ref, computed } from 'vue'
import { invitation } from '~/data/invitation'
import { useGuest } from '~/composables/useGuest'

const showInvitation = ref(false)
const { guestName } = useGuest()
const route = useRoute()
const config = useRuntimeConfig()
const requestUrl = useRequestURL()

// Resolve absolute base URL cleanly
const baseUrl = computed(() => {
  const configured = config.public?.siteUrl || ''
  if (configured) return configured.replace(/\/$/, '')
  return requestUrl?.origin ? requestUrl.origin.replace(/\/$/, '') : 'https://undangy-ella-yono.vercel.app'
})

const fullUrl = computed(() => {
  const path = route.fullPath || '/'
  return `${baseUrl.value}${path}`
})

const absoluteOgImage = computed(() => {
  const img = invitation.seo.ogImage || '/images/og-image.jpg'
  if (img.startsWith('http://') || img.startsWith('https://')) return img
  return `${baseUrl.value}${img.startsWith('/') ? '' : '/'}${img}`
})

const hasPersonalizedGuest = computed(() => {
  return typeof route.query?.to === 'string' && route.query.to.trim().length > 0
})

const metaTitle = computed(() => {
  if (hasPersonalizedGuest.value && guestName.value) {
    return `The Wedding of Ella & Yono - Untuk ${guestName.value}`
  }
  return invitation.seo.title
})

const metaDescription = computed(() => {
  if (hasPersonalizedGuest.value && guestName.value) {
    return `Kepada Yth. ${guestName.value}, kami mengundang Anda untuk menghadiri acara pernikahan kami pada Minggu, 11 Oktober 2026.`
  }
  return invitation.seo.description
})

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
  ogTitle: metaTitle,
  ogDescription: metaDescription,
  ogImage: absoluteOgImage,
  ogImageUrl: absoluteOgImage,
  ogImageSecureUrl: absoluteOgImage,
  ogImageType: invitation.seo.ogImageType || 'image/jpeg',
  ogImageWidth: invitation.seo.ogImageWidth || 1200,
  ogImageHeight: invitation.seo.ogImageHeight || 630,
  ogImageAlt: invitation.seo.ogImageAlt || 'The Wedding of Ella & Yono',
  ogUrl: fullUrl,
  ogType: invitation.seo.ogType || 'website',
  ogSiteName: invitation.seo.ogSiteName || 'Undangy',
  ogLocale: invitation.seo.ogLocale || 'id_ID',
  twitterCard: invitation.seo.twitterCard || 'summary_large_image',
  twitterTitle: metaTitle,
  twitterDescription: metaDescription,
  twitterImage: absoluteOgImage,
  themeColor: invitation.seo.themeColor || '#2A0D14',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: fullUrl,
    },
  ],
})
</script>
