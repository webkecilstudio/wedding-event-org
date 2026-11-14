import { LuArrowRight, LuCheck } from 'react-icons/lu'
import { WA_LINK, packageComparison, weddingPackages } from '../data/content'
import { formatIDR } from '../lib/format'
import { btnGhostFull, btnPrimaryFull } from '../lib/styles'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

export default function WeddingPackages() {
  return (
    <Section id="packages">
      <Container>
        <SectionHeading
          kicker="Wedding Packages"
          title="Paket pernikahan yang bisa Anda hitung, bukan ditebak."
          desc="Tiga titik awal berdasarkan jumlah tamu dan cakupan produksi, serta opsi Custom untuk konsultasi langsung."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {weddingPackages.map((pack, index) => {
            const isCustom = pack.name.includes('Custom')
            return (
              <Reveal key={pack.name} delay={index * 80}>
                <article
                  className={`relative h-full rounded-lg border p-6 flex flex-col justify-between ${
                    pack.featured
                      ? 'border-flame bg-charcoal text-white shadow-xl lg:-mt-4'
                      : 'border-charcoal/10 bg-paper dark:border-white/10 dark:bg-ink'
                  }`}
                >
                  {pack.featured && (
                    <span className="absolute -top-3 left-6 rounded bg-flame px-2 py-1 font-mono text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-white">
                      Paling populer
                    </span>
                  )}
                  <div>
                    <h3
                      className={`text-lg font-bold ${
                        pack.featured ? 'text-white' : 'text-charcoal dark:text-white'
                      }`}
                    >
                      {pack.name}
                    </h3>
                    <p
                      className={`mt-1 text-sm ${
                        pack.featured ? 'text-mist' : 'text-concrete dark:text-mist'
                      }`}
                    >
                      {pack.desc}
                    </p>

                    <div className="mt-5 flex items-end gap-2">
                      <span
                        className={`font-mono text-xl font-bold ${
                          pack.featured ? 'text-white' : 'text-charcoal dark:text-white'
                        }`}
                      >
                        {typeof pack.price === 'string' ? pack.price : formatIDR(pack.price)}
                      </span>
                      {typeof pack.price !== 'string' && (
                        <span className="pb-1 text-xs text-concrete">/ acara</span>
                      )}
                    </div>

                    <ul className="mt-6 space-y-3 text-sm">
                      {pack.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <LuCheck
                            className={`mt-0.5 size-4 shrink-0 ${
                              pack.featured ? 'text-flame' : 'text-forest'
                            }`}
                          />
                          <span className={pack.featured ? 'text-mist' : 'text-ink dark:text-mist'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={isCustom ? WA_LINK : '#contact'}
                    target={isCustom ? '_blank' : undefined}
                    rel={isCustom ? 'noopener noreferrer' : undefined}
                    className={`mt-8 ${pack.featured ? btnPrimaryFull : btnGhostFull}`}
                  >
                    {isCustom ? 'Hubungi Kami' : `Pilih ${pack.name}`}
                    <LuArrowRight className="size-4" />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-xl font-bold text-charcoal dark:text-white">
              Bandingkan fasilitas
            </h3>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-concrete dark:text-mist">
              Comparison
            </p>
          </div>
          <div className="mt-4 overflow-x-auto rounded-lg border border-charcoal/10 dark:border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-charcoal text-white">
                <tr>
                  <th className="p-4 font-mono text-[0.65rem] uppercase tracking-[0.2em]">
                    Fasilitas
                  </th>
                  {weddingPackages.map((pack) => (
                    <th key={pack.name} className="p-4 font-semibold">
                      {pack.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packageComparison.map((row, index) => (
                  <tr
                    key={row.label}
                    className={
                      index % 2 === 0
                        ? 'bg-charcoal/[0.03] dark:bg-white/[0.03]'
                        : 'bg-transparent'
                    }
                  >
                    <td className="p-4 font-medium text-charcoal dark:text-white">{row.label}</td>
                    {row.values.map((value, column) => (
                      <td key={column} className="p-4 text-concrete dark:text-mist">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
