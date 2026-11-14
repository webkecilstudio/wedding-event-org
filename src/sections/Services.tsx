import { services } from '../data/content'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'
import { unsplash } from '../lib/images'

export default function Services() {
  return (
    <Section id="services" className="bg-ink text-white">
      <Container>
        <SectionHeading
          kicker="Our Services"
          title="Layanan yang disusun setiap kebutuhan acara"
          desc="Dari prosesi intimate hingga produksi korporat, setiap layanan punya cakupan kerja dan penanggung jawab yang jelas."
          light
        />

        {/* 12-column grid: 3 cards top (col-span-4), 4 cards bottom (col-span-3) */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const isTopRow = index < 3
            const spanClass = isTopRow ? 'lg:col-span-4' : 'lg:col-span-3'

            return (
              <Reveal key={service.title} delay={index * 60} className={spanClass}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:border-flame/60 hover:bg-white/[0.07]">
                  {/* Image container */}
                  <div className={`relative w-full overflow-hidden ${isTopRow ? 'h-48' : 'h-40'}`}>
                    <img
                      src={unsplash(service.photo, isTopRow ? 700 : 500, 400)}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

                    {/* Top overlay badges */}
                    <div className="absolute left-4 top-4 flex items-center gap-2">
                      <span className="grid size-9 place-items-center rounded-lg bg-flame text-white shadow-md">
                        <Icon className="size-4" />
                      </span>
                      <span className="rounded bg-ink/80 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-flame backdrop-blur-sm border border-white/10">
                        {service.tag}
                      </span>
                    </div>

                    <span className="absolute right-4 top-4 font-mono text-xs text-mist/60">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-flame transition duration-200">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-mist">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-concrete">
                        Webkecil Standard
                      </span>
                      <span className="text-xs text-flame opacity-0 transition duration-200 group-hover:opacity-100 font-medium">
                        Detail &rarr;
                      </span>
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
