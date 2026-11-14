import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { CONTACT, WA_LINK } from '../data/content'
import { Container } from './ui'

const navLinks = [
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Paket', href: '#packages' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Tim', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

const serviceLinks = [
  'Wedding Organizer',
  'Engagement',
  'Akad & Resepsi',
  'Corporate Event',
  'Ulang Tahun',
]

const socials = [
  { label: 'Instagram', href: CONTACT.instagram, Icon: FaInstagram },
  { label: 'TikTok', href: CONTACT.tiktok, Icon: FaTiktok },
  { label: 'Facebook', href: CONTACT.facebook, Icon: FaFacebookF },
  { label: 'WhatsApp', href: WA_LINK, Icon: FaWhatsapp },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal text-white">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.8fr_1.1fr]">
          <div>
            <a href="#top" className="flex items-center gap-3" aria-label="Selaras, ke atas">
              <span className="grid size-9 place-items-center rounded-lg bg-flame font-mono text-lg font-bold text-charcoal">
                S
              </span>
              <span className="text-sm font-bold tracking-[0.25em]">SELARAS</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
              Wedding dan event organizer di Bangkalan. Setiap detail punya tempat, setiap momen
              punya makna.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg border border-white/15 text-mist transition hover:border-flame hover:text-flame"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-concrete">
              Navigasi
            </h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-mist transition hover:text-flame"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-concrete">
              Layanan
            </h2>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#services"
                    className="text-sm text-mist transition hover:text-flame"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-concrete">
              Kontak
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-mist">
              <li className="flex gap-3">
                <LuMapPin className="mt-0.5 size-4 shrink-0 text-flame" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-3">
                <LuPhone className="mt-0.5 size-4 shrink-0 text-flame" />
                <a href={CONTACT.phoneHref} className="transition hover:text-flame">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <LuMail className="mt-0.5 size-4 shrink-0 text-flame" />
                <a href={`mailto:${CONTACT.email}`} className="transition hover:text-flame">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist">
            © {new Date().getFullYear()} Selaras Wedding &amp; Event. Created by{' '}
            <a
              href="https://webkecilstudio.github.io/catalogue/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-flame hover:underline"
            >
              Webkecil Studio
            </a>
            .
          </p>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-mist">
            Bangkalan · Indonesia
          </p>
        </Container>
      </div>
    </footer>
  )
}
