import { useEffect, useState } from 'react'
import { LuCalendar } from 'react-icons/lu'
import { pad2 } from '../lib/format'
import { labelCls } from '../lib/styles'
import { Container, Section } from '../components/ui'

export default function Countdown() {
  const [target, setTarget] = useState('2027-06-12')
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const targetTime = new Date(`${target}T09:00:00`).getTime()
  const diff = Number.isNaN(targetTime) ? 0 : Math.max(0, targetTime - now)

  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff / 3_600_000) % 24)
  const minutes = Math.floor((diff / 60_000) % 60)
  const seconds = Math.floor((diff / 1000) % 60)

  const units = [
    { label: 'Hari', value: String(days) },
    { label: 'Jam', value: pad2(hours) },
    { label: 'Menit', value: pad2(minutes) },
    { label: 'Detik', value: pad2(seconds) },
  ]

  return (
    <Section className="relative overflow-hidden bg-flame text-white">
      <div className="pointer-events-none absolute inset-0 text-white/10 grid-lines" />
      <Container className="relative">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.28em]">
              <span className="h-px w-10 bg-white" />
              Event Countdown
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-[2.6rem]">
              Menuju hari bahagia Anda.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
              Masukkan tanggal acara untuk melihat sisa waktu. Simpan halaman ini dan lihat
              hitungannya berjalan setiap hari.
            </p>
            <div className="mt-6 max-w-xs">
              <label htmlFor="countdown-date" className={`${labelCls} text-white dark:text-white`}>
                Tanggal acara
              </label>
              <div className="relative">
                <LuCalendar className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-charcoal/60" />
                <input
                  id="countdown-date"
                  type="date"
                  value={target}
                  onChange={(event) => setTarget(event.target.value)}
                  className="w-full rounded-lg border border-charcoal/30 bg-paper/80 py-3 pl-10 pr-4 text-sm font-medium text-charcoal outline-none transition focus:border-charcoal focus:ring-2 focus:ring-charcoal/20"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="rounded-lg border border-charcoal/15 bg-charcoal/10 p-4 text-center backdrop-blur-sm"
              >
                <p className="font-mono text-3xl font-bold tabular-nums md:text-4xl">
                  {unit.value}
                </p>
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/70">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
