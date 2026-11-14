import { FaWhatsapp } from 'react-icons/fa6'
import { LuArrowRight } from 'react-icons/lu'
import { WA_LINK } from '../data/content'
import { btnGhostLight, btnPrimary } from '../lib/styles'
import { Container, Reveal, Section } from '../components/ui'

export default function CtaSection() {
  return (
    <Section className="bg-charcoal text-white">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-ink p-8 md:p-14">
            <div className="pointer-events-none absolute inset-0 text-white/[0.05] grid-lines" />
            <div className="absolute -right-10 -top-10 size-40 rotate-12 border border-flame/40" />
            <div className="absolute -bottom-14 right-24 hidden size-28 -rotate-12 bg-flame/10 md:block" />

            <div className="relative grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
              <div>
                <p className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.28em] text-mist">
                  <span className="h-px w-10 bg-flame" />
                  Mulai
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
                  Acara impian dimulai dari satu percakapan.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-mist">
                  Ceritakan tanggal, jumlah tamu, dan gambaran acara Anda. Kami akan menyiapkan
                  proposal awal dalam tiga hari kerja.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a href="#contact" className={btnPrimary}>
                  Konsultasi gratis
                  <LuArrowRight className="size-4" />
                </a>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className={btnGhostLight}>
                  WhatsApp kami
                  <FaWhatsapp className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
