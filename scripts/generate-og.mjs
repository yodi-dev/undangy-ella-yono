import sharp from 'sharp'

async function createOgImage() {
  const width = 1200
  const height = 630

  // We can use closing.webp or countdown.webp
  const coupleImageBuffer = await sharp('public/images/closing.webp')
    .resize(600, 630, { fit: 'cover', position: 'top' })
    .toBuffer()

  const leftFadeSvg = `
  <svg width="240" height="630" viewBox="0 0 240 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fadeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#230a10" stop-opacity="1" />
        <stop offset="40%" stop-color="#230a10" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#230a10" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect width="240" height="630" fill="url(#fadeGrad)" />
  </svg>
  `

  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#230a10" />
        <stop offset="50%" stop-color="#2A0D14" />
        <stop offset="100%" stop-color="#150508" />
      </linearGradient>
    </defs>

    <style>
      .eyebrow { font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 500; letter-spacing: 0.35em; fill: #C4A46C; text-anchor: middle; text-transform: uppercase; }
      .names { font-family: 'Georgia', 'Cormorant Garamond', serif; font-size: 60px; font-weight: 400; fill: #F6EFE5; text-anchor: middle; letter-spacing: 0.04em; }
      .amp { font-family: 'Georgia', 'Cormorant Garamond', serif; font-style: italic; fill: #C4A46C; }
      .date { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.3em; fill: #C4A46C; text-anchor: middle; text-transform: uppercase; }
      .location { font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 400; letter-spacing: 0.15em; fill: rgba(246, 239, 229, 0.75); text-anchor: middle; }
      .brand { font-family: 'Montserrat', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.4em; fill: rgba(246, 239, 229, 0.45); text-anchor: middle; }
      .divider-line { stroke: #C4A46C; stroke-opacity: 0.4; stroke-width: 1; }
    </style>

    <!-- Subtle Outer Border Frame -->
    <rect x="24" y="24" width="${width - 48}" height="${height - 48}" fill="none" stroke="#C4A46C" stroke-opacity="0.25" stroke-width="1" />
    <rect x="30" y="30" width="${width - 60}" height="${height - 60}" fill="none" stroke="#C4A46C" stroke-opacity="0.12" stroke-width="0.5" />

    <!-- Corner Decorative Accents -->
    <path d="M 24 44 L 24 24 L 44 24" fill="none" stroke="#C4A46C" stroke-width="2" />
    <path d="M ${width - 24} 44 L ${width - 24} 24 L ${width - 44} 24" fill="none" stroke="#C4A46C" stroke-width="2" />
    <path d="M 24 ${height - 44} L 24 ${height - 24} L 44 ${height - 24}" fill="none" stroke="#C4A46C" stroke-width="2" />
    <path d="M ${width - 24} ${height - 44} L ${width - 24} ${height - 24} L ${width - 44} ${height - 24}" fill="none" stroke="#C4A46C" stroke-width="2" />

    <!-- Left Content Column (Center is x=300) -->
    <g transform="translate(300, 0)">
      <!-- Eyebrow -->
      <text x="0" y="195" class="eyebrow">THE WEDDING OF</text>

      <!-- Thin Gold Accent Line -->
      <line x1="-80" y1="215" x2="80" y2="215" class="divider-line" />

      <!-- Main Names -->
      <text x="0" y="295" class="names">Ella <tspan class="amp">&amp;</tspan> Yono</text>

      <!-- Date -->
      <text x="0" y="365" class="date">MINGGU, 11 OKTOBER 2026</text>

      <!-- Location -->
      <text x="0" y="405" class="location">Simpang Nibung • Sarolangun, Jambi</text>

      <!-- Bottom Brand Tag -->
      <line x1="-40" y1="455" x2="40" y2="455" class="divider-line" />
      <text x="0" y="485" class="brand">UNDANGY</text>
    </g>
  </svg>
  `

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 35, g: 10, b: 16, alpha: 1 },
    },
  })
    .composite([
      {
        input: coupleImageBuffer,
        left: 600,
        top: 0,
      },
      {
        input: Buffer.from(leftFadeSvg),
        left: 600,
        top: 0,
      },
      {
        input: Buffer.from(svgOverlay),
        left: 0,
        top: 0,
      },
    ])
    .jpeg({ quality: 88, progressive: true })
    .toFile('public/images/og-image.jpg')

  console.log('og-image.jpg created successfully!')
}

createOgImage().catch(console.error)
