/**
 * All media kit data in one place.
 * To update the stats, change the raw numbers below: formatting
 * (499 mil / 499K, 5,0% / 5.0%) and derived figures (reach multiple,
 * interaction rate, averages) are computed automatically.
 */
import type { T } from './i18n'

const IG = 'https://www.instagram.com/coffeecionado.pt/reel/'

export const period = {
  label: { pt: '12 out – 11 nov 2026', en: '12 Oct – 11 Nov 2026' } as T,
  exportedOn: '12/11/2026',
}

export const followers = {
  instagram: 13_092,
  tiktok: 1_600,
  youtube: 246,
}

/** Instagram account totals for the period (Edits export). */
export const last30 = {
  views: 1_000_000,
  accountsReached: 499_000,
  reels: 13,
  likes: 36_000,
  comments: 1_100,
  reposts: 483,
  shares: 10_000,
  saves: 2_500,
}

export type Reel = {
  id: string
  image: string
  url: string
  title: T
  published: string
  durationSec: number
  views: number
  accounts: number
  avgWatchSec: number
  likes: number
  comments: number
  reposts: number
  shares: number
  saves: number
}

export const reels: Reel[] = [
  {
    id: 'cart',
    image: 'cart.jpg',
    url: `${IG}DfbzzyguS5z/`,
    title: { pt: 'Coffee cart na mala do carro', en: 'Coffee cart in the car boot' },
    published: '2026-11-07',
    durationSec: 48,
    views: 581_000,
    accounts: 416_000,
    avgWatchSec: 25.71,
    likes: 22_000,
    comments: 661,
    reposts: 315,
    shares: 6_400,
    saves: 1_200,
  },
  {
    id: 'marathon',
    image: 'marathon.jpg',
    url: `${IG}Dfkm3ycyZAN/`,
    title: { pt: 'Pop-up de café na Maratona do Porto', en: 'Coffee pop-up at the Porto Marathon' },
    published: '2026-11-10',
    durationSec: 90,
    views: 35_000,
    accounts: 29_000,
    avgWatchSec: 17.31,
    likes: 953,
    comments: 26,
    reposts: 14,
    shares: 68,
    saves: 38,
  },
  {
    id: 'lamarzocco',
    image: 'lamarzocco.jpg',
    url: `${IG}DfZ1ve8IbDK/`,
    title: { pt: 'Espresso em viagem, sem La Marzocco', en: 'Espresso on the road, no La Marzocco' },
    published: '2026-11-06',
    durationSec: 68,
    views: 19_000,
    accounts: 13_000,
    avgWatchSec: 28.41,
    likes: 522,
    comments: 36,
    reposts: 9,
    shares: 160,
    saves: 40,
  },
]

/** The reel shown as the featured case study. */
export const featuredReelId = 'cart'

export const audience = {
  gender: { men: 69.5, women: 30.5 },
  ages: [
    { range: '13–17', pct: 0.2 },
    { range: '18–24', pct: 2.7 },
    { range: '25–34', pct: 31.6 },
    { range: '35–44', pct: 40.5 },
    { range: '45–54', pct: 19.6 },
    { range: '55–64', pct: 4.4 },
    { range: '65+', pct: 1.1 },
  ],
  countries: [
    { name: { pt: 'Portugal', en: 'Portugal' }, pct: 75.6 },
    { name: { pt: 'Brasil', en: 'Brazil' }, pct: 6.8 },
    { name: { pt: 'Espanha', en: 'Spain' }, pct: 2.2 },
    { name: { pt: 'Suíça', en: 'Switzerland' }, pct: 1.9 },
    { name: { pt: 'Reino Unido', en: 'United Kingdom' }, pct: 1.8 },
  ],
  cities: [
    { name: { pt: 'Porto', en: 'Porto' }, pct: 11.4, greaterPorto: true },
    { name: { pt: 'Lisboa', en: 'Lisbon' }, pct: 9.1, greaterPorto: false },
    { name: { pt: 'Matosinhos', en: 'Matosinhos' }, pct: 7.6, greaterPorto: true },
    { name: { pt: 'Vila Nova de Gaia', en: 'Vila Nova de Gaia' }, pct: 6.7, greaterPorto: true },
    { name: { pt: 'Gondomar', en: 'Gondomar' }, pct: 5.7, greaterPorto: true },
  ],
}

export const tastingCard: { label: T; value: T }[] = [
  { label: { pt: 'Origem', en: 'Origin' }, value: { pt: 'Porto, Portugal', en: 'Porto, Portugal' } },
  { label: { pt: 'Produtor', en: 'Producer' }, value: { pt: 'José Correia', en: 'José Correia' } },
  { label: { pt: 'Processo', en: 'Process' }, value: { pt: 'Reels, YouTube, eventos ao vivo', en: 'Reels, YouTube, live events' } },
  { label: { pt: 'Notas', en: 'Notes' }, value: { pt: 'honesto · técnico · bem-disposto', en: 'honest · technical · good-humoured' } },
  { label: { pt: 'Língua', en: 'Language' }, value: { pt: 'PT, com legendas EN', en: 'PT, with EN captions' } },
]

export const heroFilm = [
  { image: 'p6.jpg', alt: 'José a vaporizar leite' },
  { image: 'p3.jpg', alt: 'Estação de café em casa' },
  { image: 'p4.jpg', alt: 'Cappuccino com latte art' },
  { image: 'p5.jpg', alt: 'José a preparar um espresso' },
  { image: 'p8.jpg', alt: 'José a preparar café de filtro' },
]

export const projectMedia = [
  {
    kind: 'photo' as const,
    image: 'carproj.jpg',
    alt: 'Coffee cart montado na mala do carro, na serra ao entardecer',
    caption: { pt: 'O coffee cart montado na serra', en: 'The coffee cart set up in the hills' },
  },
  {
    kind: 'video' as const,
    image: 'sunset.jpg',
    url: `${IG}DdHbj4uOlyz/`,
    alt: 'Reel Sunset coffee spot',
    caption: { pt: 'Sunset coffee spot', en: 'Sunset coffee spot' },
  },
  {
    kind: 'video' as const,
    image: 'fridge.jpg',
    url: `${IG}Dc_BWQ0oaY-/`,
    alt: 'Reel da arca frigorífica do coffee cart',
    caption: { pt: 'Frio a bordo para o leite', en: 'On-board cooling for the milk' },
  },
]

export const offers: { tag: T; title: T; body: T }[] = [
  {
    tag: { pt: 'Instagram · TikTok', en: 'Instagram · TikTok' },
    title: { pt: 'Reel dedicado', en: 'Dedicated reel' },
    body: {
      pt: 'O teu produto em uso real, numa receita ou rotina, com opinião honesta e legendas PT/EN.',
      en: 'Your product in real use, inside a recipe or routine, with an honest take and PT/EN captions.',
    },
  },
  {
    tag: { pt: 'YouTube · Instagram', en: 'YouTube · Instagram' },
    title: { pt: 'Review e unboxing', en: 'Review and unboxing' },
    body: {
      pt: 'Testes com método: extração, sabor, construção e relação qualidade/preço.',
      en: 'Methodical testing: extraction, taste, build quality and value for money.',
    },
  },
  {
    tag: { pt: 'Ao vivo', en: 'Live' },
    title: { pt: 'Pop-up de café no teu evento', en: 'Coffee pop-up at your event' },
    body: {
      pt: 'O coffee cart serve café de especialidade no local, e o evento ganha conteúdo para as redes.',
      en: 'The coffee cart serves specialty coffee on site, and your event gets content for social media.',
    },
  },
  {
    tag: { pt: 'UGC', en: 'UGC' },
    title: { pt: 'Conteúdo para os teus canais', en: 'Content for your channels' },
    body: {
      pt: 'Vídeo e fotografia com estética de café, prontos a usar nas tuas redes ou anúncios.',
      en: 'Video and photography with a coffee-bar look, ready for your social channels or ads.',
    },
  },
]

export const brands: { name: T; note?: T }[] = [
  { name: { pt: 'Outin', en: 'Outin' }, note: { pt: 'pago', en: 'paid' } },
  { name: { pt: 'Schweppes', en: 'Schweppes' }, note: { pt: 'pago', en: 'paid' } },
  { name: { pt: 'Senzu Coffee Roasters', en: 'Senzu Coffee Roasters' } },
  { name: { pt: 'Transparente Vivo', en: 'Transparente Vivo' } },
  { name: { pt: 'Maratona do Porto', en: 'Porto Marathon' }, note: { pt: 'evento', en: 'event' } },
]

export const certifications = [
  { name: 'Sensory Skills · Foundation', color: '#F5C518' },
  { name: 'Roasting · Foundation', color: '#F05A1E' },
  { name: 'Brewing · Intermediate', color: '#1FA3E0' },
]

export const contact = {
  email: 'coffeecionado.pt@gmail.com',
  links: [
    { label: 'Instagram @coffeecionado.pt', href: 'https://www.instagram.com/coffeecionado.pt/' },
    { label: 'TikTok @coffeecionadopt', href: 'https://www.tiktok.com/@coffeecionadopt' },
    { label: 'YouTube @coffeecionado.pt', href: 'https://www.youtube.com/@coffeecionado.pt' },
    { label: 'coffeecionado.pt', href: 'https://coffeecionado.pt' },
  ],
  handles: { instagram: '@coffeecionado.pt', tiktok: '@coffeecionadopt', youtube: '@coffeecionado.pt' },
}

export const project = {
  buildCostEur: 660,
  quotedEur: 1500,
  setupMinutes: 20,
}

export type PressItem = {
  outlet: string
  outletFull: T
  url: string
  date: string
  headline: T
  /** A short line of José's own words quoted in the article. */
  quote: T
  /** The outlet's own share image (og:image), loaded from their site. */
  previewImage?: string
  /** Local image shown if the outlet's image fails to load. */
  fallbackImage: string
}

export const press: PressItem[] = [
  {
    outlet: 'NiT',
    outletFull: { pt: 'NiT — New in Town', en: 'NiT — New in Town' },
    url: 'https://www.nit.pt/comida/cafes-e-bares/trabalhou-primeiro-unicornio-portugues-agora-serve-cafes-a-partir-da-mala-do-carro',
    date: '2026-11-12',
    headline: {
      pt: 'Trabalhou no primeiro unicórnio português. Agora, serve cafés a partir da mala do carro',
      en: "He worked at Portugal's first unicorn. Now he serves coffee from the boot of his car",
    },
    quote: {
      pt: 'Levar o café para, literalmente, qualquer lugar.',
      en: 'Take coffee literally anywhere.',
    },
    previewImage:
      'https://www.nit.pt/wp-content/plugins/madmen-opengraph-image-v2/madmen-opengraph-image.php?post_id=1724439&ts=20261112161102',
    fallbackImage: 'cart.jpg',
  },
]
