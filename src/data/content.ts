import type { ComponentType } from 'react'
import {
  LuAward,
  LuBuilding2,
  LuCake,
  LuCalendar,
  LuCalendarHeart,
  LuCamera,
  LuClock,
  LuFlower2,
  LuGem,
  LuHandshake,
  LuHeart,
  LuMusic,
  LuPartyPopper,
  LuShieldCheck,
  LuSparkles,
  LuUsers,
  LuWallet,
} from 'react-icons/lu'

export type IconType = ComponentType<{ className?: string }>

export const heroImage = 'photo-1770217649449-c53f7ce1f56b'

export const heroEventImage = 'photo-1756267237113-8e51341a21ff'

export const aboutImages = {
  preparation: 'photo-1659053656994-225f57f13d5c',
  detail: 'photo-1761115586938-22ac516698e2',
}

export const WA_NUMBER = '6282313153539'
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Selaras, saya ingin konsultasi acara.')}`

export const CONTACT = {
  email: 'hello@selaras.co',
  phone: '+62 823-1315-3539',
  phoneHref: 'tel:+6282313153539',
  address: 'Jl. Raya Blega No. 01, Bangkalan',
  mapsEmbed: 'https://www.google.com/maps?q=Jl.%20Raya%20Blega%20No.%2001%20Bangkalan&output=embed',
  instagram: 'https://instagram.com',
  tiktok: 'https://tiktok.com',
  facebook: 'https://facebook.com',
}

export const services: { title: string; desc: string; tag: string; icon: IconType; photo: string }[] = [
  {
    title: 'Wedding Organizer',
    desc: 'Perencanaan menyeluruh dari konsep, kurasi vendor, hingga pengawalan hari acara.',
    tag: 'Full service',
    icon: LuGem,
    photo: 'photo-1519741497674-611481863552',
  },
  {
    title: 'Engagement',
    desc: 'Lamaran yang intim dengan tata cara, dekorasi, dan alur keluarga yang Anda pilih.',
    tag: 'Intimate',
    icon: LuCalendarHeart,
    photo: 'photo-1511285560929-80b456fea0bc',
  },
  {
    title: 'Akad Nikah',
    desc: 'Pengaturan akad, dokumen, dan prosesi agar berjalan khidmat tanpa hambatan.',
    tag: 'Ceremony',
    icon: LuHeart,
    photo: 'photo-1583939003579-730e3918a45a',
  },
  {
    title: 'Resepsi',
    desc: 'Venue, katering, hiburan, dan alur tamu yang tertata dari pintu masuk hingga pulang.',
    tag: 'Reception',
    icon: LuSparkles,
    photo: 'photo-1519167758481-83f550bb49b3',
  },
  {
    title: 'Corporate Event',
    desc: 'Gathering, peluncuran produk, dan konferensi dengan alur kerja yang profesional.',
    tag: 'B2B',
    icon: LuBuilding2,
    photo: 'photo-1762968269894-1d7e1ce8894e',
  },
  {
    title: 'Ulang Tahun',
    desc: 'Perayaan personal untuk anak, remaja, dan dewasa sesuai tema yang Anda inginkan.',
    tag: 'Celebration',
    icon: LuCake,
    photo: 'photo-1765946025847-b2821cc25995',
  },
  {
    title: 'Private Party',
    desc: 'Anniversary, reuni, dan acara privat lain dengan konsep yang dirancang khusus.',
    tag: 'Bespoke',
    icon: LuPartyPopper,
    photo: 'photo-1648297346835-8a7f7dd44528',
  },
]

export type WeddingPackage = {
  name: string
  price: number | string
  desc: string
  features: string[]
  featured: boolean
}

export const weddingPackages: WeddingPackage[] = [
  {
    name: 'Essential',
    price: 18_000_000,
    desc: 'Koordinasi hari-H untuk pernikahan intim hingga 150 tamu; katering dan venue di luar paket.',
    features: [
      'Koordinasi hari-H',
      '1 lokasi acara',
      'Dekorasi standar',
      'Dokumentasi foto',
      'MC & sound system',
      'Kurasi vendor',
    ],
    featured: false,
  },
  {
    name: 'Signature',
    price: 75_000_000,
    desc: 'Paket produksi lengkap hingga 300 tamu; venue dan perizinan dihitung terpisah.',
    features: [
      'Semua fasilitas Essential',
      '2 lokasi acara',
      'Dekorasi premium',
      'Foto & video',
      'Katering 300 pax',
      'Rundown detail',
      'Tim 12 orang',
    ],
    featured: true,
  },
  {
    name: 'Royale',
    price: 185_000_000,
    desc: 'Produksi penuh hingga 500 tamu dengan konsep custom dan vendor premium.',
    features: [
      'Semua fasilitas Signature',
      '3 lokasi atau konsep',
      'Dekorasi custom',
      'Dokumentasi sinematik',
      'Katering 500 pax',
      'Entertainment & band',
      'Tim 24 orang',
    ],
    featured: false,
  },
  {
    name: 'Custom Package',
    price: 'Sesuai Kebutuhan',
    desc: 'Rancang konsep, venue, dan anggaran sepenuhnya dari nol bersama tim ahli kami.',
    features: [
      'Konsultasi langsung via WhatsApp',
      'Bebas pilih semua vendor',
      'Custom rundown & lokasi',
      'Direktur acara khusus',
      'Fleksibilitas penuh',
    ],
    featured: false,
  },
]

export const packageComparison: { label: string; values: [string, string, string, string] }[] = [
  { label: 'Jumlah tamu', values: ['150', '300', '500+', 'Bebas / Custom'] },
  { label: 'Lokasi', values: ['1 lokasi', '2 lokasi', '3 lokasi', 'Multi venue'] },
  { label: 'Dekorasi', values: ['Standar', 'Premium', 'Custom', 'Sesuai Request'] },
  { label: 'Dokumentasi', values: ['Foto', 'Foto + video', 'Sinematik', 'Full Crew & Drone'] },
  { label: 'Katering', values: ['Tidak termasuk', '300 pax', '500 pax', 'Bisa disesuaikan'] },
  { label: 'Entertainment', values: ['MC + sound', 'MC + sound', 'Band + MC', 'Sesuai Kebutuhan'] },
  { label: 'Tim hari-H', values: ['6 orang', '12 orang', '24 orang', 'Tim Khusus'] },
  { label: 'Harga', values: ['Rp 18 jt', 'Rp 75 jt', 'Rp 185 jt', 'Hubungi Tim'] },
]

export type EventPackage = {
  name: string
  tag: string
  price: string
  desc: string
  points: string[]
  icon: IconType
  photo: string
}

export const eventPackages: EventPackage[] = [
  {
    name: 'Corporate & Gathering',
    tag: 'B2B',
    price: 'Mulai Rp 55 jt',
    desc: 'Rapat tahunan, peluncuran produk, dan gathering hingga 150 peserta dengan alur rapi serta produksi panggung yang siap.',
    points: [
      'Venue & vendor',
      'Registrasi tamu',
      'AV & panggung',
      'Rundown & MC',
      'Dokumentasi',
      'Tim koordinasi',
    ],
    icon: LuBuilding2,
    photo: 'photo-1762968269894-1d7e1ce8894e',
  },
  {
    name: 'Birthday & Celebration',
    tag: 'Personal',
    price: 'Mulai Rp 15 jt',
    desc: 'Perayaan ulang tahun hingga 80 tamu dengan tema, dekorasi, dan hiburan yang disesuaikan dengan kepribadian pemilik acara.',
    points: [
      'Konsep & dekorasi',
      'Katering & cake',
      'Hiburan',
      'Dokumentasi',
      'Goodie bag',
      'Koordinasi hari-H',
    ],
    icon: LuCake,
    photo: 'photo-1765946025847-b2821cc25995',
  },
  {
    name: 'Private & Anniversary',
    tag: 'Bespoke',
    price: 'Mulai Rp 25 jt',
    desc: 'Anniversary, reuni, dan acara privat hingga 60 tamu dengan atmosfer tenang, dekorasi custom, dan daftar tamu yang dikurasi.',
    points: [
      'Konsep privat',
      'Dekorasi custom',
      'Katering',
      'Playlist & sound',
      'Dokumentasi',
      'Vendor management',
    ],
    icon: LuPartyPopper,
    photo: 'photo-1648297346835-8a7f7dd44528',
  },
]

export const reasons: { title: string; desc: string; icon: IconType; highlights?: string[] }[] = [
  {
    title: 'Tim yang menangani langsung',
    desc: 'Tidak ada vendor perantara. Perencana yang Anda temui saat konsultasi adalah tim yang hadir di hari acara.',
    icon: LuUsers,
  },
  {
    title: 'Sembilan tahun pengalaman',
    desc: 'Lebih dari 120 acara pernikahan dan event korporat di Jawa Timur, Bogor, Depok, Tangerang, dan Bekasi.',
    icon: LuAward,
  },
  {
    title: 'Rundown yang terukur',
    desc: 'Setiap sesi punya durasi, penanggung jawab, dan rencana cadangan yang diuji saat gladi resik.',
    icon: LuClock,
    highlights: ['Gladi resik H-7', 'Buffer 15 menit per sesi', 'PIC khusus tiap vendor'],
  },
  {
    title: 'Perizinan & asuransi',
    desc: 'Dokumen venue, izin keramaian, dan proteksi acara kami urus agar Anda tidak perlu mengejar berkas.',
    icon: LuShieldCheck,
    highlights: ['Surat izin kepolisian', 'Asuransi liabilitas acara', 'Standard venue NDA'],
  },
  {
    title: 'Satu koordinator untuk Anda',
    desc: 'Satu orang menjadi titik hubung keluarga, vendor, dan venue sepanjang proses persiapan.',
    icon: LuHandshake,
  },
  {
    title: 'Anggaran yang transparan',
    desc: 'Rincian biaya terbuka sejak proposal. Tidak ada biaya tambahan yang muncul di menit terakhir.',
    icon: LuWallet,
  },
]

export type PortfolioCategory = 'wedding' | 'event'

export type PortfolioItem = {
  id: number
  title: string
  category: PortfolioCategory
  location: string
  photo: string
  tall: boolean
}

export const portfolio: PortfolioItem[] = [
  { id: 1, title: 'Alya & Bima', category: 'wedding', location: 'Bangkalan', photo: 'photo-1696271026682-f54a41e9605f', tall: true },
  { id: 2, title: 'Rangkaian Akad', category: 'wedding', location: 'Bogor', photo: 'photo-1769230387621-4336859143c9', tall: false },
  { id: 3, title: 'Nada & Reza', category: 'wedding', location: 'Bangkalan', photo: 'photo-1772945492325-2fc6528cb547', tall: true },
  { id: 4, title: 'Launching Nusantara', category: 'event', location: 'Bangkalan', photo: 'photo-1544531586-fde5298cdd40', tall: false },
  { id: 5, title: 'Ulang Tahun Kana', category: 'event', location: 'Depok', photo: 'photo-1777332547120-e7ec407b5ed6', tall: false },
  { id: 6, title: 'Intimate Dinner', category: 'wedding', location: 'Bangkalan', photo: 'photo-1673001015039-b4c646ef7aee', tall: true },
  { id: 7, title: 'Annual Gathering', category: 'event', location: 'Tangerang', photo: 'photo-1564522365984-c08ed1f78893', tall: true },
  { id: 8, title: 'Lamaran Seren', category: 'wedding', location: 'Bandung', photo: 'photo-1558599308-acc9feb34773', tall: false },
]

export const instagramPhotos = [
  'photo-1559373098-e1caaccae791',
  'photo-1648297346835-8a7f7dd44528',
  'photo-1659053656994-225f57f13d5c',
  'photo-1768508663476-66c16cd52c7d',
  'photo-1642604533402-8d8a96cd678c',
  'photo-1741887845577-bbe0dd3ebfe2',
]

export const team: { name: string; role: string; photo: string }[] = [
  { name: 'Ayu Prameswari', role: 'Founder & Lead Planner', photo: 'photo-1769636929130-56648d6e9c6d' },
  { name: 'Bagas Nurhadi', role: 'Production Director', photo: 'photo-1675916008015-b7c9a5e0912c' },
  { name: 'Citra Larasati', role: 'Client Relations', photo: 'photo-1724128194895-de4301fc3fa6' },
  { name: 'Dimas Aditya', role: 'Creative & Decor', photo: 'photo-1673981942265-1a6d7f7fc961' },
]

export const processSteps: { step: string; title: string; desc: string; icon: IconType }[] = [
  {
    step: '01',
    title: 'Konsultasi',
    desc: 'Kami mendengar kebutuhan, tanggal, jumlah tamu, dan anggaran Anda.',
    icon: LuHandshake,
  },
  {
    step: '02',
    title: 'Perencanaan',
    desc: 'Konsep, vendor, dan rundown disusun bersama dalam proposal rinci.',
    icon: LuCalendar,
  },
  {
    step: '03',
    title: 'Persiapan',
    desc: 'Dekorasi, produksi, dan gladi resik diuji sebelum hari acara.',
    icon: LuFlower2,
  },
  {
    step: '04',
    title: 'Pelaksanaan',
    desc: 'Tim mengawal acara dari persiapan pagi hingga tamu terakhir pulang.',
    icon: LuClock,
  },
]

export const testimonials: { quote: string; name: string; event: string; rating: number }[] = [
  {
    quote: 'Rundown berjalan tepat waktu. Kami hanya perlu hadir dan menikmati hari itu.',
    name: 'Alya & Bima',
    event: 'Resepsi, Bangkalan',
    rating: 5,
  },
  {
    quote: 'Detail dekorasi sesuai referensi, dan koordinator selalu bisa dihubungi saat kami panik.',
    name: 'Nada & Reza',
    event: 'Akad & resepsi, Bogor',
    rating: 5,
  },
  {
    quote: 'Gathering perusahaan kami berjalan rapi dari registrasi sampai penutupan.',
    name: 'PT Nusantara Digital',
    event: 'Corporate event, Bangkalan',
    rating: 5,
  },
]

export const faqs: { q: string; a: string }[] = [
  {
    q: 'Berapa lama sebelumnya sebaiknya melakukan booking?',
    a: 'Idealnya 6 sampai 12 bulan sebelum acara, terutama untuk venue populer. Untuk paket tertentu kami masih dapat menangani 2 sampai 3 bulan sebelumnya selama tanggal masih tersedia.',
  },
  {
    q: 'Apakah paket bisa disesuaikan?',
    a: 'Bisa. Paket di halaman ini adalah titik awal. Kami menyusun proposal custom berdasarkan jumlah tamu, konsep, dan anggaran Anda tanpa mengubah standar koordinasi.',
  },
  {
    q: 'Apakah harga paket sudah termasuk venue?',
    a: 'Paket dasar belum termasuk biaya venue dan perizinan. Keduanya kami cantumkan terpisah dalam proposal agar rincian pengeluaran tetap jelas.',
  },
  {
    q: 'Bagaimana sistem pembayaran?',
    a: 'Uang muka 30 persen saat kontrak, 40 persen saat persiapan vendor dimulai, dan 30 persen dilunasi paling lambat tujuh hari sebelum acara.',
  },
  {
    q: 'Apakah melayani acara di luar Bangkalan?',
    a: 'Ya. Kami melayani Pulau Jawa secara rutin dan luar kota dengan tambahan biaya akomodasi tim yang dihitung transparan dalam proposal.',
  },
  {
    q: 'Bagaimana cara mulai konsultasi?',
    a: 'Isi formulir konsultasi di halaman ini atau hubungi WhatsApp kami. Konsultasi awal 30 menit tanpa biaya, baik daring maupun di kantor Kemang.',
  },
]

export const budgetTiers: { id: string; label: string; base: number; perGuest: number }[] = [
  { id: 'silver', label: 'Silver', base: 25_000_000, perGuest: 250_000 },
  { id: 'gold', label: 'Gold', base: 55_000_000, perGuest: 450_000 },
  { id: 'platinum', label: 'Platinum', base: 120_000_000, perGuest: 850_000 },
]

export const addons: { id: string; label: string; price: number; icon: IconType }[] = [
  { id: 'decor', label: 'Dekorasi premium', price: 15_000_000, icon: LuFlower2 },
  { id: 'doc', label: 'Dokumentasi sinematik', price: 12_000_000, icon: LuCamera },
  { id: 'music', label: 'Entertainment & band', price: 8_000_000, icon: LuMusic },
  { id: 'catering', label: 'Upgrade katering', price: 20_000_000, icon: LuCake },
]

export const bookedDates = [
  '2026-12-12',
  '2026-12-24',
  '2026-12-31',
  '2027-06-12',
  '2027-07-07',
]

export const eventTypes = [
  'Pernikahan',
  'Lamaran',
  'Akad',
  'Resepsi',
  'Corporate event',
  'Ulang tahun',
  'Lainnya',
]

export const budgetRanges = [
  'Di bawah Rp 50 juta',
  'Rp 50 - 100 juta',
  'Rp 100 - 200 juta',
  'Di atas Rp 200 juta',
]
