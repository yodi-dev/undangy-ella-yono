export interface SeoConfig {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  ogImageWidth: string
  ogImageHeight: string
  ogUrl: string
  twitterCard: string
}

export interface PersonInfo {
  name: string
  fullName: string
  parents: string
  instagram: string
  instagramUrl: string
  photo: string
}

export interface CoupleConfig {
  shortName: string
  title: string
  greeting: {
    title: string
    text: string
  }
  bride: PersonInfo
  groom: PersonInfo
  dividerIcon: string
}

export interface AssetsConfig {
  landingBg: string
  countdownBg: string
}

export interface CountdownConfig {
  targetDate: string
  dateText: string
}

export interface QuoteConfig {
  text: string
  source: string
  icon: string
}

export interface EventDetail {
  id: string
  title: string
  subTitle: string
  dateText: string
  timeText: string
  locationName: string
  address: string
  googleMapsEmbedUrl: string
  googleMapsUrl?: string
  entertainment?: string
}

export interface TimelineEvent {
  date: string
  description: string
  icon: string
}

export interface LoveStoryConfig {
  title: string
  timeline: TimelineEvent[]
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface GalleryConfig {
  title: string
  portrait: GalleryImage[]
  landscape: GalleryImage[]
}

export interface BankAccount {
  name: string
  account: string
  owner: string
}

export interface GiftConfig {
  title: string
  message: string
  banks: BankAccount[]
}

export interface AudioConfig {
  src: string
}

export interface InviteeCategory {
  title?: string
  names: string[]
}

export interface TurutMengundangConfig {
  title?: string
  subTitle?: string
  categories?: InviteeCategory[]
  names?: string[]
}

export interface ClosingConfig {
  title: string
  message: string
  coupleText: string
  photo: string
  musicAttribution: string
  iconAttribution: {
    text: string
    author: string
    url: string
  }
  developerCredit: {
    text: string
    author: string
    url: string
  }
}

export interface InvitationData {
  seo: SeoConfig
  couple: CoupleConfig
  assets: AssetsConfig
  countdown: CountdownConfig
  quote: QuoteConfig
  events: EventDetail[]
  loveStory: LoveStoryConfig
  gallery: GalleryConfig
  gift: GiftConfig
  audio: AudioConfig
  turutMengundang?: TurutMengundangConfig
  closing: ClosingConfig
}
