# PRD — Undangy Maroon Editorial Romance

**Product:** Undangy  
**Theme:** Maroon Editorial Romance  
**Status:** Design Polish  
**Version:** 1.0  
**Platform:** Wedding Invitation Website  
**Primary Framework:** Nuxt  
**Styling:** Tailwind CSS  
**Target:** Mobile-first, responsive wedding invitation

---

# 1. Overview

Maroon Editorial Romance adalah pengembangan visual dari theme Maroon Undangy yang sudah ada.

Theme ini tidak dibuat sebagai desain baru dari nol, melainkan sebagai **polish menyeluruh terhadap existing Maroon theme** dengan tujuan menghasilkan identitas visual yang lebih matang, original, modern, dan premium.

Arah desain menggabungkan:

- warna deep maroon / wine
- warm ivory
- champagne gold sebagai aksen
- editorial typography
- strong photography
- whitespace
- romantic atmosphere
- subtle Indonesian warmth
- ornament minimal

Theme harus tetap terasa cocok untuk undangan pernikahan di Indonesia, tetapi menghindari karakter template undangan digital yang terlalu ramai, terlalu banyak ornamen, atau terlalu bergantung pada kombinasi maroon + gold.

---

# 2. Product Goal

Tujuan utama polish adalah mengubah existing Maroon theme dari:

> website undangan berwarna maroon

menjadi:

> wedding invitation dengan identitas visual dark romantic, warm, elegant, dan editorial.

Theme harus memberikan pengalaman yang:

- romantis
- intimate
- premium
- tenang
- mudah dibaca
- tidak berlebihan
- berfokus pada pasangan dan fotografi

---

# 3. Design Positioning

Theme berada di antara dua pendekatan umum:

```text
Traditional Indonesian Wedding
ornament-heavy / gold / cultural pattern

                ↓

      MAROON EDITORIAL ROMANCE

                ↓

Modern Western Editorial Wedding
minimal / photography / typography
```

Theme mengambil kehangatan undangan pernikahan Indonesia, tetapi menggunakan prinsip visual editorial modern.

---

# 4. Design Keywords

Design language utama:

```text
Romantic
Elegant
Warm
Intimate
Editorial
Timeless
Refined
Cinematic
Minimal Ornament
Photography Driven
```

Theme TIDAK boleh terasa:

```text
Royal berlebihan
Glamour berlebihan
Dashboard-like
SaaS-like
Template marketplace
Over-decorated
Over-animated
```

---

# 5. Core Design Principles

## 5.1 One Section, One Focal Point

Setiap section hanya memiliki satu fokus visual utama.

Contoh:

```text
Cover      → Couple Name
Quote      → Verse
Couple     → Portrait
Story      → Timeline
Event      → Date & Location
Gallery    → Photography
Gift       → Account Information
Wishes     → Guest Message
Closing    → Couple + Thank You
```

Jangan membuat semua elemen memiliki bobot visual yang sama.

---

## 5.2 Photography Over Decoration

Jika pilihan antara:

```text
ornament besar
```

atau:

```text
foto pasangan yang kuat
```

prioritaskan fotografi.

Ornament hanya mendukung composition.

---

## 5.3 Typography Over Cards

Gunakan hierarchy typography dan whitespace sebelum menambahkan card.

Hindari terlalu banyak:

```text
rounded-xl
rounded-2xl
shadow-xl
glass card
```

Gunakan container hanya jika membantu grouping informasi.

---

## 5.4 Gold Is an Accent

Champagne gold tidak digunakan sebagai warna utama.

Gunakan hanya untuk:

- thin border
- divider
- small icon
- ornament
- date accent
- tiny decorative detail

Jangan gunakan gold untuk paragraph/body text.

---

## 5.5 Alternating Visual Rhythm

Halaman harus memiliki ritme antara dark dan light section.

Contoh:

```text
Cover        Dark
Countdown    Dark
Quote        Light
Couple       Light
Story        Light
Event        Dark
Gallery      Light
Gift         Light
Wishes       Light
Closing      Dark
```

Urutan dapat disesuaikan saat implementation jika transisinya lebih baik.

---

# 6. Color System

## Primary Palette

### Deep Wine

```text
#2A0D14
```

Penggunaan:

- dark background
- cinematic overlay
- primary dark surface

---

### Maroon

```text
#5A1724
```

Penggunaan:

- primary accent
- button
- heading tertentu
- interactive element

---

### Muted Maroon

```text
#772638
```

Penggunaan:

- secondary accent
- hover
- gradient transition
- decorative surfaces

---

## Neutral Palette

### Warm Ivory

```text
#F6EFE5
```

Penggunaan:

- primary light section
- surface
- text on dark background

---

### Soft Cream

```text
#EDE0D0
```

Penggunaan:

- alternate light surface
- subtle card
- background variation

---

### Dark Text

```text
#2C2021
```

Penggunaan:

- body text on light surfaces

---

## Accent Palette

### Champagne Gold

```text
#C4A46C
```

Penggunaan terbatas:

- divider
- border
- ornament
- tiny icon
- decorative detail

---

### Dusty Rose

```text
#B98287
```

Penggunaan:

- secondary romantic accent
- hover
- subtle decoration

---

# 7. Color Usage Rule

Target proporsi visual:

```text
60% Deep Wine / Maroon
30% Ivory / Cream
10% Gold / Rose accent
```

Tidak harus dihitung secara literal, tetapi digunakan sebagai guideline.

---

# 8. Typography System

Theme menggunakan tiga fungsi typography.

## Display Serif

Recommended:

```text
Cormorant Garamond
```

Digunakan untuk:

- couple names
- large section heading
- large date
- editorial statement
- closing name

Visual character:

```text
elegant
high contrast
editorial
romantic
```

---

## Body / UI

```text
Montserrat
```

Digunakan untuk:

- body text
- event information
- button
- label
- RSVP
- navigation-like UI

---

## Accent Script

```text
Great Vibes
```

Penggunaan sangat terbatas.

Contoh:

```text
with love
our story
thank you
```

Jangan digunakan sebagai primary heading untuk semua section.

---

# 9. Typography Hierarchy

Contoh hierarchy:

```text
EYEBROW
Montserrat
uppercase
tracking-wide
text-xs / text-sm

DISPLAY
Cormorant Garamond
text-5xl → text-7xl

SECTION TITLE
Cormorant Garamond
text-4xl → text-5xl

BODY
Montserrat
text-sm → text-base

ACCENT SCRIPT
Great Vibes
text-2xl → text-4xl
```

---

# 10. Photography Direction

Fotografi menjadi salah satu elemen terbesar dari theme.

Preferred photography:

- portrait
- warm tone
- intimate pose
- natural expression
- cinematic lighting
- neutral / dark background jika memungkinkan

Image treatment:

```text
object-cover
subtle contrast
minimal rounded radius
no heavy shadow
```

Gunakan:

```text
rounded-none
rounded-sm
rounded-md
```

lebih sering daripada `rounded-xl`.

---

# 11. Ornament Language

Theme menggunakan ornament minimal.

Primary inspiration:

```text
jasmine / melati
leaf vine
thin geometric line
small romantic flourish
```

Ornament dibuat sebagai:

- thin line
- subtle SVG
- transparent
- symmetrical atau semi-organic

Tidak menggunakan:

- bunga besar di semua section
- gold frame berat
- ornament sudut besar
- motif dekoratif berulang berlebihan

---

# 12. Divider System

Gunakan divider sederhana.

Contoh:

```text
──── ◇ ────
```

atau:

```text
──── ❦ ────
```

atau botanical line-art kecil.

Divider digunakan untuk:

- section transition
- quote
- couple
- closing

Tidak digunakan di setiap section.

---

# 13. Motion Direction

Animation harus:

```text
subtle
slow
elegant
predictable
```

Preferred:

- fade-up
- fade-in
- slight slide
- image reveal
- opacity transition

Avoid:

- bounce
- zoom berlebihan
- rotate
- animation cepat
- stagger yang terlalu panjang

Typical duration:

```text
600–900ms
```

Existing AOS boleh tetap digunakan.

---

# 14. SECTION SPECIFICATIONS

---

# 14.1 Cover

## Goal

Membuat first impression yang cinematic dan romantic.

Cover harus menjadi salah satu visual terkuat dari seluruh website.

## Composition

```text
Full Screen Couple Photo

THE WEDDING OF

Desti & Reza

26 · 07 · 2025

Guest Information

[ Buka Undangan ]
```

## Visual Treatment

Image:

```text
full viewport
object-cover
```

Overlay:

```text
deep wine gradient
```

Contoh arah:

```text
top    → subtle transparent wine
middle → transparent
bottom → strong deep wine
```

Tambahkan grain sangat subtle jika diperlukan.

## Couple Name

Primary visual focus.

Use:

```text
Cormorant Garamond
large size
light/ivory
```

## Guest Area

Tidak menggunakan card besar.

Preferred:

```text
transparent dark surface
thin champagne border
subtle backdrop blur
```

## CTA

Button sederhana.

```text
Ivory / transparent
thin border
medium radius
```

Tidak menggunakan heavy shadow.

---

# 14.2 Countdown

## Goal

Mengubah countdown dari "widget" menjadi editorial date presentation.

## Structure

```text
Save The Date

26
JULY
2025

05     13     22     48
DAYS   HOURS  MINS   SECS
```

## Rules

Hindari:

```text
4 card besar
heavy shadow
dashboard-style timer
```

Preferred:

- numbers
- thin divider
- typography
- whitespace

Background boleh tetap dark.

---

# 14.3 Quote

## Goal

Memberikan visual breathing room setelah dark opening section.

## Background

```text
Warm Ivory
```

## Composition

```text
small ornament

verse text

QS. Ar-Rum: 21

thin divider
```

Typography:

- serif untuk emphasis
- sans-serif untuk source/reference

Text:

```text
Dark Maroon / Dark Text
```

Large vertical whitespace.

---

# 14.4 Couple

## Goal

Menampilkan bride dan groom secara romantic editorial.

## Photography

Tidak lagi memprioritaskan circular image.

Gunakan:

```text
portrait rectangle
atau
subtle arch
```

## Layout

Alternating composition:

```text
BRIDE

photo ← text
```

kemudian:

```text
GROOM

text → photo
```

atau versi mobile vertical.

## Information

Hierarchy:

```text
Bride / Groom
Full Name
Parents
Instagram
```

Couple name menggunakan display serif.

Orang tua menggunakan body typography.

---

# 14.5 Love Story

## Goal

Memberikan cerita intimate tanpa terlalu banyak card.

## Background

Preferred:

```text
Warm Ivory / Soft Cream
```

## Timeline

Gunakan:

```text
large faded year
thin vertical line
small champagne dot
story content
```

Contoh:

```text
2021

  ●
  │
  │  Pertama Bertemu
  │  description...
  │
```

Tahun menjadi decorative typographic element.

---

# 14.6 Event

## Goal

Menjadi section paling mudah dipahami secara functional.

Informasi utama:

```text
event name
date
time
location
map
```

harus dapat dipahami dalam beberapa detik.

## Suggested Direction

Dark background + warm ivory surface.

Card:

```text
small radius
thin champagne border
minimal/no shadow
```

Date dapat menjadi focal point.

Contoh:

```text
THE EVENT

AKAD & RESEPSI

26
JULY
2025

09.00 WIB

Location

[ Lihat Lokasi ]
```

---

# 14.7 Gallery

## Goal

Membuat fotografi pasangan menjadi pusat visual.

Gunakan editorial photo rhythm.

Contoh:

```text
large portrait

small        small

wide landscape

portrait
```

Tidak semua image harus memiliki size yang sama.

Existing carousel/lightbox boleh dipertahankan jika cocok dengan composition.

Avoid:

- terlalu banyak border
- shadow berat
- radius besar

---

# 14.8 Gift

## Goal

Membuat digital gift section terasa respectful dan subtle.

## Structure

```text
A Gift of Love

short message

────────

BCA

7455190011

Desti Amalia

[ Copy Number ]
```

Background:

```text
Warm Ivory / Cream
```

Bank account menggunakan typography yang jelas.

Copy action harus obvious tetapi tidak dominan.

---

# 14.9 RSVP & Wishes

## Goal

Menjadi section functional yang tetap menyatu dengan visual wedding theme.

Background:

```text
Warm Ivory
```

Inputs:

Preferred:

```text
transparent / cream
simple bottom border
minimal radius
```

Avoid dashboard-style form UI.

## Wishes

Preferred layout:

```text
Name                       Hadir

message text...

────────────────────────────
```

Gunakan whitespace sebagai separator.

---

# 14.10 Closing

## Goal

Menciptakan emotional ending.

Closing harus terasa:

```text
cinematic
quiet
romantic
final
```

## Composition

Preferred:

```text
full / large couple photo

dark wine vignette

Thank You

Desti
&
Reza

26 · 07 · 2025
```

Minimum text.

Photography + typography menjadi fokus.

---

# 15. Section Rhythm

Target emotional journey:

```text
Cover
DRAMATIC

↓

Countdown
ANTICIPATION

↓

Quote
CALM

↓

Couple
ROMANTIC

↓

Story
INTIMATE

↓

Event
INFORMATIVE

↓

Gallery
VISUAL

↓

Gift
QUIET

↓

RSVP / Wishes
INTERACTIVE

↓

Closing
EMOTIONAL
```

Tidak semua section harus terlihat "mewah".

Setiap section memiliki peran emosional berbeda.

---

# 16. Spacing System

Gunakan generous vertical spacing.

Mobile:

```text
py-16
py-20
py-24
```

Desktop:

```text
py-24
py-28
py-32
```

Hindari section terlalu padat.

Preferred content width:

```text
max-w-xl
max-w-2xl
max-w-4xl
```

bergantung pada section.

---

# 17. Mobile-First Rules

Target utama:

```text
360px
390px
430px
```

Desktop tetap harus memiliki composition yang baik.

Mobile bukan versi desktop yang diperkecil.

Layout dapat berubah secara natural.

Contoh:

Desktop:

```text
photo | couple information
```

Mobile:

```text
photo
couple information
```

---

# 18. Responsive Photography

Foto harus menjaga wajah/subjek.

Gunakan:

```text
object-cover
object-position
```

secara intentional.

Jika diperlukan, setiap image boleh mempunyai object-position berbeda.

---

# 19. Interaction Rules

Hover effects:

```text
subtle opacity
subtle color shift
slight translation
```

Tidak menggunakan:

```text
large scaling
bounce
aggressive glow
```

Buttons:

```text
minimum touch target ±44px
```

---

# 20. Accessibility

Minimum requirements:

- contrast text readable
- button labels jelas
- alt text meaningful
- form labels tersedia
- tidak bergantung pada warna saja
- text tidak terlalu kecil
- motion tidak mengganggu readability

Decorative images dapat menggunakan empty alt jika memang purely decorative.

---

# 21. Performance

Polish tidak boleh menyebabkan:

- image file terlalu besar
- excessive animation
- unnecessary JS library
- duplicated assets
- unnecessary component abstraction

Existing image optimization strategy dipertahankan untuk sementara.

Tidak menambah dependency baru kecuali benar-benar diperlukan.

---

# 22. Technical Boundaries

Polish hanya berfokus pada:

```text
components/themes/maroon/
```

dan design configuration yang memang diperlukan.

Do NOT change:

```text
Supabase schema
guestbook table
RLS
useGuest
useGuestbook
useCountdown
useAudio
database architecture
multi-tenancy
```

Business logic harus tetap stabil.

---

# 23. Theme Architecture

Current theme:

```text
components/
├── shared/
│   └── AudioPlayer.vue
│
└── themes/
    └── maroon/
        ├── Shell.vue
        ├── Cover.vue
        ├── Countdown.vue
        ├── Quote.vue
        ├── Couple.vue
        ├── Story.vue
        ├── Event.vue
        ├── Gallery.vue
        ├── Gift.vue
        ├── Wishes.vue
        └── Closing.vue
```

Jangan membuat dynamic theme loader pada tahap polish.

---

# 24. Design Foundation

Polish dapat memperkenalkan konfigurasi reusable jika benar-benar membantu consistency.

Allowed:

```text
Tailwind color aliases
font families
small CSS utilities
```

Avoid:

```text
complex design-token engine
ThemeProvider
ThemeRegistry
CSS architecture overhaul
```

---

# 25. Things To Avoid

Theme tidak boleh menggunakan berlebihan:

- floral PNG besar
- corner decoration
- gold gradient text
- glow
- glassmorphism
- shadow
- huge border radius
- generic wedding icons
- multiple competing fonts
- complicated animation
- decorative cards

Rule:

> If removing an ornament improves the composition, remove it.

---

# 26. Implementation Strategy

Polish dilakukan bertahap.

---

## Phase 1 — Foundation + Opening Experience

Scope:

```text
Design Foundation
Shell
Cover
Countdown
Quote
```

Goals:

- validate palette
- validate typography
- validate spacing
- validate dark/light rhythm
- establish editorial visual language

Do NOT modify later sections yet.

---

## Phase 2 — Romantic Narrative

Scope:

```text
Couple
Story
Event
```

Goals:

- establish portrait treatment
- establish timeline style
- establish practical event information hierarchy

---

## Phase 3 — Content & Interaction

Scope:

```text
Gallery
Gift
Wishes
```

Goals:

- editorial photo rhythm
- minimal gift presentation
- wedding-styled functional RSVP UI

---

## Phase 4 — Closing & Consistency

Scope:

```text
Closing
Motion polish
Spacing consistency
Typography consistency
Responsive consistency
```

---

## Phase 5 — Final QA

Review:

```text
360px
390px
430px
tablet
desktop
```

Check:

- visual rhythm
- section transitions
- image crop
- typography
- button size
- accessibility
- animations
- performance

---

# 27. Phase Review Rule

Setiap implementation phase harus berhenti untuk visual review.

Flow:

```text
Implement Phase
      ↓
pnpm lint
      ↓
pnpm build
      ↓
Visual Review
      ↓
Approve / Adjust
      ↓
Commit
      ↓
Next Phase
```

Jangan mengimplementasikan beberapa phase sekaligus.

---

# 28. Acceptance Criteria

Maroon Editorial Romance dianggap berhasil jika:

### Visual

- memiliki identity yang jelas
- tidak terasa seperti generic template marketplace
- warna maroon terasa rich, bukan flat
- gold hanya berfungsi sebagai accent
- photography memiliki visual priority
- typography memiliki editorial hierarchy
- whitespace terasa intentional

### UX

- tanggal dan lokasi mudah ditemukan
- CTA jelas
- RSVP mudah digunakan
- copy rekening mudah dilakukan
- gallery nyaman dilihat
- audio tidak mengganggu

### Technical

```text
pnpm lint
→ 0 errors
→ 0 warnings

pnpm build
→ SUCCESS
```

Tidak ada regression pada:

- guest handling
- audio
- countdown
- Supabase
- RSVP
- wishes
- lightbox
- maps

---

# 29. Theme Identity Statement

Final identity:

> **Maroon Editorial Romance adalah wedding invitation theme yang menggabungkan deep wine tones, warm ivory, restrained champagne accents, editorial typography, intimate photography, dan romantic minimalism untuk menghasilkan pengalaman undangan pernikahan yang modern namun tetap hangat dan relevan untuk pasangan Indonesia.**

---

# 30. Final Design Rule

Ketika ragu memilih antara dua pendekatan:

```text
More decoration
vs
More breathing room
```

pilih:

```text
More breathing room
```

Ketika ragu:

```text
More cards
vs
Better typography
```

pilih:

```text
Better typography
```

Ketika ragu:

```text
More ornament
vs
Better photography
```

pilih:

```text
Better photography
```

Dan ketika ragu apakah sesuatu harus ditambahkan:

> Jika tidak memperkuat cerita pasangan, informasi, atau hierarchy visual, jangan tambahkan.