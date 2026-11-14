import { reasons } from '../data/content'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

const spans = [
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-6',
  'lg:col-span-6',
  'lg:col-span-3',
  'lg:col-span-3',
]

export default function WhyChooseUs() {
  return (
    <Section id="why">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            kicker="Why Choose Us"
            title="Alasan tim ini layak memegang hari penting Anda."
            desc="Bukan karena kami paling besar, tapi karena cara kerja kami bisa Anda periksa sejak hari pertama."
          />

          <div className="max-w-xs border-l-2 border-flame pl-4 md:mb-1">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-concrete dark:text-mist">
              Kapasitas bulanan
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal dark:text-white">
              Maksimal 3 acara per bulan agar satu koordinator utama bisa fokus pada setiap klien.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const wide = index === 2 || index === 3
            return (
              <Reveal key={reason.title} delay={index * 70} className={spans[index]}>
                <article className="relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-charcoal/10 bg-paper p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-flame/50 hover:shadow-md dark:border-white/10 dark:bg-ink">
                  <span className="absolute right-5 top-4 font-mono text-xs text-charcoal/20 dark:text-white/20">
                    0{index + 1}
                  </span>
                  <div>
                    <div
                      className={
                        wide
                          ? 'flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5'
                          : ''
                      }
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-charcoal text-flame dark:bg-flame dark:text-charcoal">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3
                          className={`text-base font-semibold text-charcoal dark:text-white ${
                            wide ? '' : 'mt-5'
                          }`}
                        >
                          {reason.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-concrete dark:text-mist">
                          {reason.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {reason.highlights && (
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-charcoal/10 pt-4 dark:border-white/10">
                      {reason.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded bg-charcoal/5 px-2.5 py-1 font-mono text-xs text-charcoal dark:bg-white/10 dark:text-mist"
                        >
                          • {h}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
