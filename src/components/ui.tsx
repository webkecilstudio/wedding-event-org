import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { eyebrowCls } from '../lib/styles'

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>{children}</div>
}

export function Section({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-[clamp(4rem,8vw,8rem)] ${className}`}>
      {children}
    </section>
  )
}

export function SectionHeading({
  kicker,
  title,
  desc,
  light = false,
}: {
  kicker: string
  title: string
  desc?: string
  light?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <div
        className={`flex items-center gap-3 ${eyebrowCls} ${
          light ? 'text-mist' : 'text-concrete'
        }`}
      >
        <span className="h-px w-10 bg-flame" />
        <span>
          {kicker}
        </span>
      </div>
      <h2
        className={`mt-5 text-3xl font-bold leading-tight tracking-tight md:text-[2.6rem] ${
          light ? 'text-white' : 'text-charcoal dark:text-white'
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-4 max-w-xl text-base leading-relaxed ${
            light ? 'text-mist' : 'text-concrete dark:text-mist'
          }`}
        >
          {desc}
        </p>
      )}
    </div>
  )
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[transform,opacity] duration-500 ease-out ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}
