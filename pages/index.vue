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
import { ref } from 'vue'
import { invitation } from '~/data/invitation'

const showInvitation = ref(false)

useSeoMeta(invitation.seo)
</script>
