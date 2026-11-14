import { useState } from 'react'
import type { FormEvent } from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import { LuCheck, LuMail, LuMapPin, LuPhone, LuSend } from 'react-icons/lu'
import { CONTACT, budgetRanges, eventTypes, WA_LINK } from '../data/content'
import type { IconType } from '../data/content'
import { btnPrimary, inputCls, labelCls } from '../lib/styles'
import { Container, Reveal, Section, SectionHeading } from '../components/ui'

type Mode = 'booking' | 'inquiry'

const channels: {
  label: string
  value: string
  href: string
  icon: IconType
  external?: boolean
}[] = [
  {
    label: 'WhatsApp',
    value: '+62 812 3456 7890',
    href: WA_LINK,
    icon: FaWhatsapp,
    external: true,
  },
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: LuMail },
  { label: 'Telepon', value: CONTACT.phone, href: CONTACT.phoneHref, icon: LuPhone },
  {
    label: 'Kantor',
    value: CONTACT.address,
    href: 'https://maps.google.com/?q=Jl.+Kemang+Raya+88+Bangkalan',
    icon: LuMapPin,
    external: true,
  },
]

const socials = [
  { label: 'Instagram', href: CONTACT.instagram, Icon: FaInstagram },
  { label: 'TikTok', href: CONTACT.tiktok, Icon: FaTiktok },
  { label: 'Facebook', href: CONTACT.facebook, Icon: FaFacebookF },
]

export default function Contact() {
  const [mode, setMode] = useState<Mode>('booking')
  const [sent, setSent] = useState(false)

  const switchMode = (next: Mode) => {
    setMode(next)
    setSent(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <Section id="contact">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              kicker="Contact & Location"
              title="Mulai dari jadwal konsultasi atau kebutuhan acara."
              desc="Pilih jenis formulir yang sesuai. Kami membalas pada hari kerja, paling lambat 1x24 jam."
            />

            <Reveal className="mt-8">
              <div className="rounded-lg border border-charcoal/10 bg-paper shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-ink">
                <div className="grid grid-cols-2 border-b border-charcoal/10 dark:border-white/10">
                  {(
                    [
                      { id: 'booking', label: 'Booking konsultasi' },
                      { id: 'inquiry', label: 'Inquiry kebutuhan' },
                    ] as { id: Mode; label: string }[]
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => switchMode(tab.id)}
                      aria-pressed={mode === tab.id}
                      className={`px-4 py-3 text-sm font-semibold transition ${
                        mode === tab.id
                          ? 'border-b-2 border-flame text-charcoal dark:text-white'
                          : 'border-b-2 border-transparent text-concrete hover:text-charcoal dark:hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  {sent ? (
                    <div className="py-8 text-center">
                      <span className="mx-auto grid size-14 place-items-center rounded-full bg-forest/15 text-forest">
                        <LuCheck className="size-7" />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-charcoal dark:text-white">
                        {mode === 'booking'
                          ? 'Jadwal konsultasi diterima.'
                          : 'Kebutuhan acara diterima.'}
                      </h3>
                      <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-concrete dark:text-mist">
                        Tim kami akan menghubungi Anda melalui WhatsApp dalam 1x24 jam kerja untuk
                        konfirmasi.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSent(false)}
                        className="mt-5 text-sm font-semibold text-charcoal underline decoration-flame decoration-2 underline-offset-4 dark:text-white"
                      >
                        Kirim formulir lain
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label htmlFor="contact-name" className={labelCls}>
                          Nama lengkap
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          required
                          placeholder="Nama Anda"
                          className={inputCls}
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-wa" className={labelCls}>
                          Nomor WhatsApp
                        </label>
                        <input
                          id="contact-wa"
                          name="whatsapp"
                          required
                          inputMode="tel"
                          placeholder="0812 3456 7890"
                          className={inputCls}
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-type" className={labelCls}>
                          Jenis acara
                        </label>
                        <select id="contact-type" name="type" required className={inputCls}>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      {mode === 'booking' ? (
                        <>
                          <div className="sm:col-span-2">
                            <label htmlFor="booking-date" className={labelCls}>
                              Tanggal konsultasi
                            </label>
                            <input
                              id="booking-date"
                              name="date"
                              type="date"
                              required
                              className={inputCls}
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label htmlFor="booking-note" className={labelCls}>
                              Catatan (opsional)
                            </label>
                            <textarea
                              id="booking-note"
                              name="note"
                              rows={3}
                              placeholder="Ceritakan singkat rencana acara Anda"
                              className={inputCls}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <label htmlFor="inquiry-date" className={labelCls}>
                              Tanggal acara
                            </label>
                            <input
                              id="inquiry-date"
                              name="date"
                              type="date"
                              required
                              className={inputCls}
                            />
                          </div>
                          <div>
                            <label htmlFor="inquiry-budget" className={labelCls}>
                              Estimasi budget
                            </label>
                            <select
                              id="inquiry-budget"
                              name="budget"
                              required
                              className={inputCls}
                            >
                              {budgetRanges.map((range) => (
                                <option key={range} value={range}>
                                  {range}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="sm:col-span-2">
                            <label htmlFor="inquiry-location" className={labelCls}>
                              Lokasi acara
                            </label>
                            <input
                              id="inquiry-location"
                              name="location"
                              required
                              placeholder="Kota atau venue"
                              className={inputCls}
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label htmlFor="inquiry-message" className={labelCls}>
                              Kebutuhan acara
                            </label>
                            <textarea
                              id="inquiry-message"
                              name="message"
                              rows={4}
                              required
                              placeholder="Jumlah tamu, konsep, dan hal penting lainnya"
                              className={inputCls}
                            />
                          </div>
                        </>
                      )}

                      <button type="submit" className={`${btnPrimary} sm:col-span-2`}>
                        {mode === 'booking' ? 'Ajukan jadwal konsultasi' : 'Kirim kebutuhan acara'}
                        <LuSend className="size-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="space-y-5">
            <Reveal>
              <div className="grid gap-3 sm:grid-cols-2">
                {channels.map((channel) => {
                  const Icon = channel.icon
                  return (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noreferrer' : undefined}
                      className="group rounded-lg border border-charcoal/10 bg-paper p-4 transition hover:border-flame/60 dark:border-white/10 dark:bg-ink"
                    >
                      <span className="grid size-9 place-items-center rounded-lg bg-charcoal text-flame dark:bg-flame dark:text-charcoal">
                        <Icon className="size-4" />
                      </span>
                      <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-concrete dark:text-mist">
                        {channel.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-charcoal transition group-hover:text-flame dark:text-white">
                        {channel.value}
                      </p>
                    </a>
                  )
                })}
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="overflow-hidden rounded-lg border border-charcoal/10 dark:border-white/10">
                <iframe
                  title="Lokasi kantor Selaras di Kemang, Bangkalan"
                  src={CONTACT.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-96 w-full border-0"
                />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-charcoal/10 bg-paper p-4 dark:border-white/10 dark:bg-ink">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-concrete dark:text-mist">
                  Sosial media
                </p>
                <div className="flex gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="grid size-9 place-items-center rounded-lg border border-charcoal/15 text-concrete transition hover:border-flame hover:text-flame dark:border-white/15 dark:text-mist"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
