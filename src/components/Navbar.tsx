import { useEffect, useState } from 'react'
import { LuArrowRight, LuMenu, LuMoon, LuSun, LuX } from 'react-icons/lu'
import { btnPrimary } from '../lib/styles'

const links = [
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Paket', href: '#packages' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Tim', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="sticky top-0 z-[100] border-b border-charcoal/10 bg-paper/90 backdrop-blur-md dark:border-white/10 dark:bg-ink/90">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-6">
        <a href="#top" className="flex shrink-0 items-center gap-3" aria-label="Selaras, ke atas">
          <span className="grid size-9 place-items-center rounded-lg bg-flame font-mono text-lg font-bold text-charcoal">
            S
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold tracking-[0.25em] text-charcoal dark:text-white">
              SELARAS
            </span>
            <span className="mt-1 block font-mono text-[0.55rem] uppercase tracking-[0.3em] text-concrete dark:text-mist">
              Wedding &amp; Event
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-flame dark:text-mist dark:hover:text-flame"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
            className="grid size-10 place-items-center rounded-lg border border-charcoal/15 text-charcoal transition hover:bg-charcoal/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            {dark ? <LuSun className="size-5" /> : <LuMoon className="size-5" />}
          </button>
          <a href="#contact" className={`${btnPrimary} hidden sm:inline-flex`}>
            Konsultasi
            <LuArrowRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-lg border border-charcoal/15 text-charcoal lg:hidden dark:border-white/15 dark:text-white"
          >
            {open ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-charcoal/10 bg-paper px-6 py-4 lg:hidden dark:border-white/10 dark:bg-ink">
          <nav className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-charcoal/10 py-3 text-sm font-medium text-ink dark:border-white/10 dark:text-mist"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={`${btnPrimary} mt-4`}
            >
              Konsultasi gratis
              <LuArrowRight className="size-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
