import type { InvitationData } from '~/types/invitation'

export const invitation: InvitationData = {
  seo: {
    title: 'Ella & Yono - Undangy',
    description: 'Undangan pernikahan resmi Ella dan Yono. Temukan informasi acara, RSVP, lokasi, dan hitung mundur pernikahan kami.',
    ogTitle: 'Ella & Yono - Undagny',
    ogDescription: 'Kami mengundang Anda untuk hadir di hari bahagia kami.',
    ogImage: 'https://undangy-starter.vercel.app/images/landing.webp',
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogUrl: 'https://undangy-starter.vercel.app/',
    twitterCard: 'summary_large_image',
  },
  couple: {
    shortName: 'Ella & Yono',
    title: 'The Wedding Of',
    greeting: {
      title: 'Assalamu\'alaikum Wr. Wb.',
      text: 'Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.',
    },
    bride: {
      name: 'Ella',
      fullName: 'Sehla Marsela',
      parents: 'Putri Kedua dari Bapak Iskandar/Acong (Alm) & Ibu Asnani',
      instagram: '@elmrslaaa',
      instagramUrl: 'https://instagram.com/elmrslaaa',
      photo: '/images/bg-wanita.webp',
    },
    groom: {
      name: 'Yono',
      fullName: 'Wahyono',
      parents: 'Putra Pertama dari Bapak Daryo & Ibu Rofiah',
      instagram: '@babangyinot',
      instagramUrl: 'https://instagram.com/babangyinot',
      photo: '/images/bg-pria.webp',
    },
    dividerIcon: '/icons/ring.png',
  },
  assets: {
    landingBg: '/images/landing.webp',
    countdownBg: '/images/countdown.webp',
  },
  countdown: {
    targetDate: '2026-10-11T08:00:00+07:00',
    dateText: 'Minggu, 11 Oktober 2026',
  },
  quote: {
    text: 'Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.',
    source: 'QS. Ar-Rum: 21',
    icon: '/images/dove.png',
  },
  events: [
    {
      id: 'akad',
      title: 'Wedding Event',
      subTitle: 'Akad',
      dateText: 'Sabtu, 10 Oktober 2026',
      timeText: 'Pukul 12:00 - Selesai',
      locationName: 'Simpang Nibung',
      address: 'Kediaman Mempelai Wanita',
      googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31886.561296601714!2d102.72878999999999!3d-2.56523605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e31cdee3bd595fb%3A0xf50fd31a2bd22f8d!2sSimpang%20Nibung%2C%20Kec.%20Singkut%2C%20Kabupaten%20Sarolangun%2C%20Jambi!5e0!3m2!1sid!2sid!4v1789544958052!5m2!1sid!2sid',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=-2.56523605,102.72878999999999',
    },
    {
      id: 'resepsi',
      title: 'Wedding Event',
      subTitle: 'Resepsi',
      dateText: 'Minggu, 11 Oktober 2026',
      timeText: 'Pukul 08:00 - Selesai',
      locationName: 'Simpang Nibung',
      address: 'Masuk arah persimpangan nibung',
      entertainment: 'OT. MNC',
      googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31886.561296601714!2d102.72878999999999!3d-2.56523605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e31cdee3bd595fb%3A0xf50fd31a2bd22f8d!2sSimpang%20Nibung%2C%20Kec.%20Singkut%2C%20Kabupaten%20Sarolangun%2C%20Jambi!5e0!3m2!1sid!2sid!4v1789544958052!5m2!1sid!2sid',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=-2.56523605,102.72878999999999',
    },
  ],
  loveStory: {
    title: 'Love Story',
    timeline: [
      {
        date: '2022 — Awal Pertemuan',
        description: 'Berawal dari sebuah perkenalan di tahun 2022, saat itu aku masih bekerja di sebuah konter. Ia mulai mencoba mendekat, namun aku belum memberikan respons dan masih menganggap semuanya biasa saja.',
        icon: '/icons/icon1.png',
      },
      {
        date: '2023 — Mulai Bersama',
        description: 'Memasuki awal tahun 2023, perlahan aku mulai membuka hati dan merespons pendekatannya. Seiring waktu berjalan, kami semakin dekat hingga akhirnya memutuskan untuk menjalani hubungan bersama.',
        icon: '/icons/icon2.png',
      },
      {
        date: 'Menuju Selamanya',
        description: 'Waktu terus berjalan dan hubungan ini semakin serius. Sampai akhirnya kami sampai pada satu percakapan tentang arah dan tujuan hubungan kami. Bukan lagi sekadar tentang bersama hari ini, tetapi tentang membangun kehidupan dan masa depan bersama. Dari perjalanan sederhana itu, kami akhirnya memilih untuk melangkah menuju pernikahan.',
        icon: '/icons/icon3.png',
      },
    ],
  },
  gallery: {
    title: 'Galeri Kami',
    portrait: [
      { src: '/images/1.webp', alt: 'Potret Mempelai' },
      { src: '/images/2.webp', alt: 'Potret Mempelai' },
      { src: '/images/3.webp', alt: 'Potret Mempelai' },
      { src: '/images/4.webp', alt: 'Potret Mempelai' },
      { src: '/images/5.webp', alt: 'Potret Mempelai' },
      { src: '/images/6.webp', alt: 'Potret Mempelai' },
      { src: '/images/7.webp', alt: 'Potret Mempelai' },
      { src: '/images/8.webp', alt: 'Potret Mempelai' },
      { src: '/images/9.webp', alt: 'Potret Mempelai' },
      { src: '/images/10.webp', alt: 'Potret Mempelai' },
      { src: '/images/11.webp', alt: 'Potret Mempelai' },
      { src: '/images/12.webp', alt: 'Potret Mempelai' },
    ],
  },
  gift: {
    title: 'Wedding Gift',
    message: 'Doa dan restu Anda adalah hadiah terbaik. Namun jika berkenan berbagi kasih, berikut adalah informasi rekening kami:',
    banks: [
      {
        name: 'Bank BRI',
        account: '760701013298538',
        owner: 'Asnani',
      },
      {
        name: 'Dana',
        account: '082281978957',
        owner: 'Sehla Marsela',
      },
    ],
  },
  audio: {
    src: '/audio/bg-music.mp3',
  },
  turutMengundang: {
    title: 'Turut Mengundang',
    subTitle: 'Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.',
    categories: [
      {
        title: 'Muda-mudi',
        names: [
          'Ita Nopilia',
          'Fira Mahesa',
          'Desy Rosdiana',
          'Atika Marzela',
          'Netta Forten',
          'Pipit Sulastri',
          'Aprilia Arinda Putri',
          'Sintia Oktarina',
          'Ajeng Anggraini',
        ],
      },
    ],
  },
  closing: {
    title: 'Terima Kasih',
    message: 'Terima kasih atas doa dan restu yang telah diberikan kepada kami. Semoga cinta dan kebahagiaan selalu menyertai langkah kita semua.',
    coupleText: 'Kami yang berbahagia',
    photo: '/images/closing.webp',
    musicAttribution: 'Musik: "You\'ll Be in My Heart" - Niki.',
    iconAttribution: {
      text: 'Ikon oleh',
      author: 'Freepik',
      url: 'https://www.freepik.com',
    },
    developerCredit: {
      text: 'Made with ♥ by',
      author: 'awanbeo.my.id',
      url: 'https://awanbeo.my.id',
    },
  },
}
