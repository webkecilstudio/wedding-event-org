import { useMemo, useState } from 'react'
import { FaInstagram } from 'react-icons/fa6'
import { LuArrowUpRight, LuHeart } from 'react-icons/lu'
import { instagramPhotos, portfolio } from '../data/content'
import type { PortfolioCategory } from '../data/content'
import { unsplash } from '../lib/images'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

type Filter = 'all' | PortfolioCategory

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'Semua' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'event', label: 'Event' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all')
  const [saved, setSaved] = useState<number[]>([])

  const visible = useMemo(
    () => (filter === 'all' ? portfolio : portfolio.filter((item) => item.category === filter)),
    [filter],
  )

  const savedItems = portfolio.filter((item) => saved.includes(item.id))

  const toggleSaved = (id: number) => {
    setSaved((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    )
  }

  return (
    <Section id="portfolio">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="Our Portfolio"
            title="Dokumentasi acara yang pernah kami pegang."
            desc="Pilih kategori untuk melihat sebagian hasil kerja. Simpan referensi yang Anda suka ke papan inspirasi."
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                aria-pressed={filter === option.id}
                className={`rounded-lg px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] transition ${
                  filter === option.id
                    ? 'bg-charcoal text-white dark:bg-flame dark:text-charcoal'
                    : 'border border-charcoal/15 text-concrete hover:border-flame hover:text-flame dark:border-white/15 dark:text-mist'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-lg border border-charcoal/10 bg-paper p-4 dark:border-white/10 dark:bg-ink">
          <span className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-charcoal dark:text-white">
            <LuHeart className="size-4 text-flame" />
            {savedItems.length} inspirasi tersimpan
          </span>
          {savedItems.length === 0 ? (
            <span className="text-xs text-concrete dark:text-mist">
              Tekan ikon hati pada portofolio untuk menyimpan referensi.
            </span>
          ) : (
            savedItems.map((item) => (
              <span
                key={item.id}
                className="rounded bg-flame/15 px-2 py-1 text-xs font-medium text-charcoal dark:text-white"
              >
                {item.title}
              </span>
            ))
          )}
        </div>

        <div className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4">
          {visible.map((item) => {
            const isSaved = saved.includes(item.id)
            return (
              <figure
                key={item.id}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg border border-charcoal/10 bg-charcoal dark:border-white/10"
              >
                <img
                  src={unsplash(item.photo, 800, item.tall ? 1120 : 720)}
                  alt={`Dokumentasi ${item.title} di ${item.location}`}
                  loading="lazy"
                  className="w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => toggleSaved(item.id)}
                  aria-label={isSaved ? `Hapus ${item.title} dari inspirasi` : `Simpan ${item.title}`}
                  aria-pressed={isSaved}
                  className="absolute right-3 top-3 grid size-9 place-items-center rounded-lg bg-paper/90 backdrop-blur transition hover:bg-flame"
                >
                  <LuHeart
                    className={`size-4 ${isSaved ? 'fill-flame text-flame' : 'text-charcoal'}`}
                  />
                </button>
                <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2 text-white">
                  <div>
                    <p className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-mist">
                      {item.category} · {item.location}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{item.title}</p>
                  </div>
                  <LuArrowUpRight className="size-4 shrink-0 opacity-0 transition group-hover:opacity-100" />
                </figcaption>
              </figure>
            )
          })}
        </div>

        <Reveal className="mt-14">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-concrete dark:text-mist">
              Instagram feed — @selaras.co
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal transition hover:text-flame dark:text-white"
            >
              Ikuti
              <FaInstagram className="size-4" />
            </a>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 md:grid-cols-6">
            {instagramPhotos.map((photo) => (
              <a
                key={photo}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-md border border-charcoal/10 dark:border-white/10"
              >
                <img
                  src={unsplash(photo, 500, 500)}
                  alt="Dokumentasi terbaru Selaras di Instagram"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-charcoal/0 text-white opacity-0 transition group-hover:bg-charcoal/50 group-hover:opacity-100">
                  <FaInstagram className="size-5" />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
