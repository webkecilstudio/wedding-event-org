import { useState } from 'react'
import { LuArrowRight, LuArrowUpRight, LuStar } from 'react-icons/lu'
import { heroEventImage, heroImage } from '../data/content'
import { unsplash } from '../lib/images'
import { btnGhost, btnPrimary, eyebrowCls } from '../lib/styles'
import { Container, Reveal } from '../components/ui'

const stats = [
  { value: '120+', label: 'Acara' },
  { value: '10', label: 'Tahun' },
  { value: '4.9', label: 'Rating' },
]

export default function Hero() {
  const [eventFront, setEventFront] = useState(false)

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-charcoal/10 dark:border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 text-charcoal/[0.06] grid-lines dark:text-white/[0.05]" />
      <Container className="relative grid items-center gap-12 py-16 md:py-24 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <Reveal>
            <div className={`flex items-center gap-3 ${eyebrowCls} text-concrete`}>
              <span className="h-px w-10 bg-flame" />
              <span>Wedding &amp; Event Organizer</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-charcoal dark:text-white">
              Hari besar Anda
              <span className="relative ml-2 inline-block">
                <span className="relative z-10">dirancang</span>
                <span className="absolute inset-x-0 bottom-1 z-0 h-3 -skew-x-6 bg-flame/35" />
              </span>
              <br />
              dengan perfect
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-concrete dark:text-mist">
              Selaras merancang pernikahan dan acara korporat di Jawa Timur dengan struktur kerja
              yang jelas: konsep, vendor, rundown, dan tim yang hadir sampai tamu terakhir pulang.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className={btnPrimary}>
                Konsultasi gratis
                <LuArrowRight className="size-4" />
              </a>
              <a href="#packages" className={btnGhost}>
                Lihat paket
                <LuArrowUpRight className="size-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-charcoal/10 pt-6 dark:border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-concrete dark:text-mist">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-bold text-charcoal dark:text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative mt-6 lg:mt-0">
            <button
              type="button"
              onClick={() => setEventFront((value) => !value)}
              aria-pressed={eventFront}
              aria-label="Tukar posisi gambar depan dan belakang"
              title="Tukar posisi gambar depan dan belakang"
              className={`absolute -top-20 left-1/2 z-50 w-[70%] -translate-x-1/2 p-1 text-charcoal/60 transition-[color,scale] duration-300 hover:text-flame focus:outline-none focus-visible:text-flame lg:-top-[6.5rem] dark:text-mist/70 dark:hover:text-flame ${
                eventFront ? '-scale-x-100' : ''
              }`}
            >
              <svg viewBox="0 0 240 52" fill="none" className="w-full" aria-hidden="true">
                <defs>
                  <marker
                    id="hero-arrow-head"
                    viewBox="0 0 12 12"
                    refX="10"
                    refY="6"
                    markerWidth="8"
                    markerHeight="8"
                    markerUnits="userSpaceOnUse"
                    orient="auto"
                  >
                    <path
                      d="M3 2L10 6L3 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </marker>
                </defs>
                <path
                  d="M14 40C64 4 176 4 226 40"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  markerEnd="url(#hero-arrow-head)"
                />
                <circle cx="14" cy="40" r="3.5" fill="currentColor" />
              </svg>
            </button>

            <div
              className={`absolute -right-10 -top-7 w-[72%] overflow-hidden rounded-lg border-4 border-paper bg-charcoal shadow-xl transition-all duration-500 ease-out dark:border-charcoal ${
                eventFront ? 'z-30 rotate-0' : 'z-0 rotate-[6deg]'
              }`}
            >
              <img
                src={unsplash(heroEventImage, 700, 875)}
                alt="Suasana resepsi acara malam dengan tamu dan lampu gala"
                className="aspect-[4/5] w-full object-cover"
              />
              <span className="absolute bottom-2 left-2 rounded bg-flame px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-charcoal">
                Event
              </span>
            </div>

            <div
              className={`relative z-20 aspect-[4/5] overflow-hidden rounded-lg border border-charcoal/10 shadow-lg transition-all duration-500 ease-out dark:border-white/10 ${
                eventFront ? 'lg:translate-x-2 lg:translate-y-4 lg:-rotate-2 lg:scale-[0.97]' : ''
              }`}
            >
              <img
                src={unsplash(heroImage, 900, 1120)}
                alt="Pengantin berjalan bersama menuju altar di lorong acara pernikahan"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist">
                    Featured · JKT 2026
                  </p>
                  <p className="mt-1 text-lg font-semibold">Alya &amp; Bima</p>
                </div>
                <LuArrowUpRight className="size-5" />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 z-40 w-40 rounded-lg bg-flame p-4 text-white shadow-lg">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em]">Sejak 2016</p>
              <p className="mt-1 text-2xl font-bold">120+</p>
              <p className="text-xs font-medium">acara terselenggara</p>
            </div>

            <div className="absolute -right-4 bottom-24 z-40 hidden w-28 rounded-lg border border-charcoal/10 bg-paper p-3 shadow-md sm:block dark:border-white/10 dark:bg-charcoal">
              <div className="flex gap-0.5 text-gold">
                {[0, 1, 2, 3, 4].map((star) => (
                  <LuStar key={star} className="size-3 fill-current" />
                ))}
              </div>
              <p className="mt-2 font-mono text-[0.55rem] uppercase tracking-[0.15em] text-concrete dark:text-mist">
                Client rating
              </p>
              <p className="text-lg font-bold text-charcoal dark:text-white">4.9/5</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
