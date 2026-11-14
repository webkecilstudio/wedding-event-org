import { useState } from 'react'
import { LuArrowRight, LuChevronDown } from 'react-icons/lu'
import { faqs } from '../data/content'
import { Container, Section, SectionHeading } from '../components/ui'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              kicker="FAQ"
              title="Pertanyaan yang paling sering masuk."
              desc="Jika jawaban belum ada di sini, kirim pertanyaan lewat WhatsApp atau formulir konsultasi."
            />
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal underline decoration-flame decoration-2 underline-offset-4 transition hover:text-flame dark:text-white"
            >
              Ajukan pertanyaan lain
              <LuArrowRight className="size-4" />
            </a>
          </div>

          <div className="border-y border-charcoal/10 dark:border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = open === index
              return (
                <div
                  key={faq.q}
                  className="border-b border-charcoal/10 last:border-b-0 dark:border-white/10"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-charcoal md:text-base dark:text-white">
                      {faq.q}
                    </span>
                    <LuChevronDown
                      className={`size-5 shrink-0 transition duration-200 ${
                        isOpen ? 'rotate-180 text-flame' : 'text-concrete'
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-concrete dark:text-mist">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
