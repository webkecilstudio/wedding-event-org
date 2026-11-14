import { useEffect, useState } from 'react'
import { LuArrowUp } from 'react-icons/lu'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-24 right-6 z-[200] inline-flex size-14 items-center justify-end gap-0 overflow-hidden rounded-full border border-white/40 bg-white/70 px-4 text-charcoal shadow-lg backdrop-blur-md transition-[width,transform,background-color,border-color,color] duration-300 ease-out hover:-translate-y-0.5 hover:border-flame hover:bg-flame hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame/60 lg:hover:w-44 lg:hover:gap-1 lg:focus-visible:w-44 dark:border-white/15 dark:bg-ink/70 dark:text-white dark:hover:bg-flame ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <span className="hidden max-w-0 shrink-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-[max-width,opacity] duration-300 lg:block lg:group-hover:max-w-32 lg:group-hover:opacity-100 lg:group-focus-visible:max-w-32 lg:group-focus-visible:opacity-100">
        Kembali ke atas
      </span>
      <LuArrowUp className="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  )
}
