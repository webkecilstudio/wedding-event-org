import { LuQuote, LuStar } from 'react-icons/lu'
import { testimonials } from '../data/content'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${count} dari 5 bintang`}>
      {Array.from({ length: count }).map((_, index) => (
        <LuStar key={index} className="size-3.5 fill-current" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials

  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          kicker="Testimonials"
          title="Kata klien setelah acara selesai."
          desc="Ulasan dari klien yang acaranya kami tangani dalam dua tahun terakhir."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <blockquote className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg bg-charcoal p-8 text-white">
              <div className="pointer-events-none absolute -right-6 -top-6 size-32 border border-flame/30" />
              <div>
                <LuQuote className="size-8 text-flame" />
                <p className="mt-6 text-xl font-medium leading-relaxed md:text-2xl">
                  “{featured.quote}”
                </p>
              </div>
              <footer className="mt-8 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                <div>
                  <p className="text-sm font-semibold">{featured.name}</p>
                  <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mist">
                    {featured.event}
                  </p>
                </div>
                <Stars count={featured.rating} />
              </footer>
            </blockquote>
          </Reveal>

          <div className="grid gap-4">
            {rest.map((item, index) => (
              <Reveal key={item.name} delay={(index + 1) * 90}>
                <blockquote className="h-full rounded-lg border border-charcoal/10 bg-paper p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-ink">
                  <div className="flex items-center justify-between gap-4">
                    <LuQuote className="size-5 text-flame" />
                    <Stars count={item.rating} />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink dark:text-mist">
                    “{item.quote}”
                  </p>
                  <footer className="mt-5 border-t border-charcoal/10 pt-4 dark:border-white/10">
                    <p className="text-sm font-semibold text-charcoal dark:text-white">
                      {item.name}
                    </p>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-concrete dark:text-mist">
                      {item.event}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
