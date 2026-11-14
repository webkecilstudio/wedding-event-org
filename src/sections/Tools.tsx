import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { LuCalendar, LuCheck, LuWallet } from 'react-icons/lu'
import { addons, bookedDates, budgetTiers } from '../data/content'
import { formatDate, formatIDR } from '../lib/format'
import { btnPrimary, inputCls, labelCls } from '../lib/styles'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

export default function Tools() {
  const [guests, setGuests] = useState(300)
  const [tierId, setTierId] = useState('gold')
  const [extra, setExtra] = useState<string[]>([])
  const [checkDate, setCheckDate] = useState('')
  const [result, setResult] = useState<boolean | null>(null)

  const tier = budgetTiers.find((item) => item.id === tierId) ?? budgetTiers[1]

  const total = useMemo(() => {
    const addonTotal = addons
      .filter((addon) => extra.includes(addon.id))
      .reduce((sum, addon) => sum + addon.price, 0)
    return tier.base + tier.perGuest * guests + addonTotal
  }, [tier, guests, extra])

  const toggleAddon = (id: string) => {
    setExtra((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    )
  }

  const checkAvailability = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!checkDate) return
    setResult(!bookedDates.includes(checkDate))
  }

  return (
    <Section id="tools" className="bg-charcoal/[0.03] dark:bg-white/[0.02]">
      <Container>
        <SectionHeading
          kicker="Event Tools"
          title="Hitung anggaran dan cek tanggal sebelum menghubungi kami."
          desc="Dua alat kecil untuk memberi gambaran awal. Angka final tetap disusun dalam proposal setelah konsultasi."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-charcoal/10 bg-paper p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:p-8 dark:border-white/10 dark:bg-ink">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-charcoal text-flame dark:bg-flame dark:text-charcoal">
                  <LuWallet className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal dark:text-white">
                    Kalkulator anggaran
                  </h3>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-concrete dark:text-mist">
                    Estimasi awal
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <label htmlFor="guests" className={labelCls}>
                    Jumlah tamu
                  </label>
                  <span className="font-mono text-sm font-semibold text-charcoal dark:text-white">
                    {guests} pax
                  </span>
                </div>
                <input
                  id="guests"
                  type="range"
                  min={50}
                  max={1000}
                  step={10}
                  value={guests}
                  onChange={(event) => setGuests(Number(event.target.value))}
                  className="w-full accent-flame"
                />
              </div>

              <div className="mt-5">
                <span className={labelCls}>Tingkat paket</span>
                <div className="grid grid-cols-3 gap-2">
                  {budgetTiers.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setTierId(option.id)}
                      aria-pressed={tierId === option.id}
                      className={`rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                        tierId === option.id
                          ? 'border-flame bg-flame text-white'
                          : 'border-charcoal/15 text-concrete hover:border-flame hover:text-flame dark:border-white/15 dark:text-mist'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <span className={labelCls}>Tambahan</span>
                <div className="grid gap-2 sm:grid-cols-2">
                  {addons.map((addon) => {
                    const Icon = addon.icon
                    const active = extra.includes(addon.id)
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        aria-pressed={active}
                        className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs font-medium transition ${
                          active
                            ? 'border-forest/60 bg-forest/10 text-charcoal dark:text-white'
                            : 'border-charcoal/15 text-concrete hover:border-forest/60 dark:border-white/15 dark:text-mist'
                        }`}
                      >
                        <span
                          className={`grid size-5 shrink-0 place-items-center rounded ${
                            active ? 'bg-forest text-white' : 'bg-charcoal/10 dark:bg-white/10'
                          }`}
                        >
                          {active ? <LuCheck className="size-3" /> : <Icon className="size-3" />}
                        </span>
                        {addon.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-charcoal p-5 text-white">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-mist">
                  Estimasi total
                </p>
                <p className="mt-1 font-mono text-2xl font-bold text-flame">{formatIDR(total)}</p>
                <p className="mt-1 text-xs text-mist">
                  Belum termasuk venue dan perizinan. Estimasi bergantung pada vendor terpilih.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="h-full rounded-lg border border-charcoal/10 bg-paper p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:p-8 dark:border-white/10 dark:bg-ink">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-charcoal text-flame dark:bg-flame dark:text-charcoal">
                  <LuCalendar className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal dark:text-white">
                    Ketersediaan tanggal
                  </h3>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-concrete dark:text-mist">
                    Cek jadwal
                  </p>
                </div>
              </div>

              <form onSubmit={checkAvailability} className="mt-6">
                <label htmlFor="event-date" className={labelCls}>
                  Tanggal acara
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    id="event-date"
                    type="date"
                    value={checkDate}
                    onChange={(event) => {
                      setCheckDate(event.target.value)
                      setResult(null)
                    }}
                    className={inputCls}
                  />
                  <button type="submit" className={`${btnPrimary} shrink-0`}>
                    Cek tanggal
                  </button>
                </div>
              </form>

              {result !== null && (
                <div
                  className={`mt-4 rounded-lg border p-4 text-sm ${
                    result
                      ? 'border-forest/40 bg-forest/10 text-charcoal dark:text-white'
                      : 'border-flame/40 bg-flame/10 text-charcoal dark:text-white'
                  }`}
                >
                  <p className="font-semibold">
                    {result ? 'Tanggal masih tersedia.' : 'Tanggal sudah dibooking.'}
                  </p>
                  <p className="mt-1 text-xs text-concrete dark:text-mist">
                    {result
                      ? 'Kami bisa menandai tanggal ini sebagai prioritas setelah konsultasi.'
                      : 'Pilih tanggal lain atau hubungi kami untuk daftar tunggu.'}
                  </p>
                </div>
              )}

              <div className="mt-6">
                <p className={labelCls}>Tanggal yang sudah terisi</p>
                <div className="flex flex-wrap gap-2">
                  {bookedDates.map((date) => (
                    <span
                      key={date}
                      className="rounded border border-charcoal/10 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-concrete dark:border-white/10 dark:text-mist"
                    >
                      {formatDate(date)}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-6 border-t border-charcoal/10 pt-4 text-xs leading-relaxed text-concrete dark:border-white/10 dark:text-mist">
                Jadwal diperbarui manual setiap minggu. Konfirmasi final diberikan setelah
                konsultasi dan pengecekan venue.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
