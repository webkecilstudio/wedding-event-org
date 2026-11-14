import { processSteps } from '../data/content'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

export default function Process() {
  return (
    <Section id="process">
      <Container>
        <SectionHeading
          kicker="Our Process"
          title="Empat tahap, tanpa lompatan yang tidak jelas."
          desc="Setiap tahap punya output yang bisa Anda tinjau sebelum lanjut ke tahap berikutnya."
        />

        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="absolute inset-x-0 top-6 hidden h-px bg-charcoal/15 md:block dark:bg-white/15" />
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal key={step.step} delay={index * 90} className="relative">
                <div className="relative z-10 grid size-12 place-items-center rounded-lg bg-charcoal text-flame ring-4 ring-paper dark:bg-flame dark:text-charcoal dark:ring-charcoal">
                  <Icon className="size-5" />
                </div>
                <p className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-concrete dark:text-mist">
                  Tahap {step.step}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-charcoal dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete dark:text-mist">
                  {step.desc}
                </p>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
