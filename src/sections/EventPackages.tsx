import { LuArrowRight, LuCheck } from 'react-icons/lu'
import { eventPackages } from '../data/content'
import { unsplash } from '../lib/images'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

export default function EventPackages() {
  return (
    <Section id="events" className="bg-charcoal text-white">
      <Container>
        <SectionHeading
          kicker="Event Packages"
          title="Acara non-pernikahan, dengan standar kerja yang sama."
          desc="Produksi korporat, ulang tahun, dan acara privat ditangani tim yang sama dengan pernikahan: terukur dan transparan."
          light
        />

        <div className="mt-12 space-y-5">
          {eventPackages.map((pack, index) => {
            const Icon = pack.icon
            return (
              <Reveal key={pack.name}>
                <article className="grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] md:grid-cols-[0.8fr_1.2fr]">
                  <div
                    className={`relative min-h-56 md:min-h-full ${
                      index % 2 === 1 ? 'md:order-2' : ''
                    }`}
                  >
                    <img
                      src={unsplash(pack.photo, 900, 700)}
                      alt={`Dokumentasi ${pack.name}`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent md:bg-gradient-to-r" />
                    <span className="absolute left-4 top-4 rounded bg-flame px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-charcoal">
                      {pack.tag}
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-lg bg-flame/15 text-flame">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-xl font-bold text-white md:text-2xl">{pack.name}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-mist">{pack.desc}</p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {pack.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm text-mist">
                          <LuCheck className="mt-0.5 size-4 shrink-0 text-forest" />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                      <span className="font-mono text-sm font-semibold text-white">
                        {pack.price}
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-flame transition hover:text-white"
                      >
                        Diskusikan
                        <LuArrowRight className="size-4" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
