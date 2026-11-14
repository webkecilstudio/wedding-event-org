import { LuArrowRight, LuCheck } from 'react-icons/lu'
import { aboutImages } from '../data/content'
import { unsplash } from '../lib/images'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

const points = [
  'Tim inti 8 orang dengan pengalaman 10 tahun di Jawa Timur.',
  'Kurasi vendor berdasarkan rekam jejak, bukan komisi.',
  'Rundown dan rencana cadangan ditulis, bukan dihafal.',
]

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={unsplash(aboutImages.preparation, 640, 860)}
                alt="Rombongan pengantin bersiap sebelum prosesi acara"
                className="mt-8 aspect-[3/4] w-full rounded-lg border border-charcoal/10 object-cover dark:border-white/10"
              />
              <img
                src={unsplash(aboutImages.detail, 640, 860)}
                alt="Detail kue pernikahan dengan dekorasi bunga di meja resepsi"
                className="aspect-[3/4] w-full rounded-lg border border-charcoal/10 object-cover dark:border-white/10"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 w-[85%] -translate-x-1/2 rounded-lg bg-charcoal px-5 py-4 text-center text-white shadow-lg dark:bg-flame dark:text-charcoal">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em]">Visi</p>
              <p className="mt-1 text-sm font-semibold">
                Setiap acara terasa milik Anda, bukan milik vendor.
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              kicker="Tentang Kami"
              title="Studio yang merakit cerita, bukan sekadar acara."
              desc="Selaras berdiri pada 2016 dari satu keyakinan sederhana: acara yang baik lahir dari struktur yang rapi. Kami menggabungkan perencanaan teknis dengan kepekaan terhadap cerita setiap keluarga."
            />

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-concrete dark:text-mist">
              Selama sembilan tahun, kami menangani lebih dari 120 pernikahan, lamaran, dan event
              korporat. Setiap proyek dimulai dengan mendengar, lalu menerjemahkannya menjadi
              rundown, anggaran, dan daftar keputusan yang bisa Anda periksa kapan saja.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-ink dark:text-mist">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-forest/15 text-forest">
                    <LuCheck className="size-3.5" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#process"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-charcoal underline decoration-flame decoration-2 underline-offset-4 transition hover:text-flame dark:text-white"
            >
              Lihat cara kerja kami
              <LuArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
