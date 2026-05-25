import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const links = [
    { label: 'Problems', href: '#problem' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Example', href: '#example' },
    { label: 'FAQ', href: '#faq' },
  ]

  const handleClick = () => setOpen(false)

  return (
    <>
      {/* PC 헤더 */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="hidden md:block fixed top-3 left-0 right-1.5 z-50"
      >
        <div className="mx-auto flex items-center justify-between h-16 px-5">
          <a href="#">
            <img src="/assets/peeca.png" alt="peeca logo" className="h-11" />
          </a>
          <div className="flex items-center rounded-full
            bg-(--color-neutral-4)/33 backdrop-blur-xl px-1.5 py-1
            border-b border-(--color-line)/60
            shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          >
            <div className="flex items-center gap-5.5
              bg-white/88 rounded-full pl-7 pr-3 py-1.5"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-base font-medium text-(--color-text-2) hover:text-(--color-primary) transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                className="text-sm font-medium px-4 py-1.5 rounded-full bg-(--color-primary) text-white hover:opacity-90 transition-opacity"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* 모바일 헤더 */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="md:hidden fixed top-1 left-1 right-1 z-50">
        <div className="flex items-center justify-between h-14 px-1.5 pt-1">
          <div className="bg-(--color-primary)/60 backdrop-blur-md border border-white/30 rounded-full px-1 py-1">
            <a href="#">
              <img src="/assets/peeca.png" alt="peeca logo" className="h-9" />
            </a>
          </div>
          <div className="bg-(--color-primary)/60 backdrop-blur-md border border-white/30 rounded-full px-1 py-1">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-[6px] p-2"
            aria-label="menu"
            aria-expanded={open} 
          >
            <span className={`block w-5 h-[2px] bg-(--color-white) transition-all duration-300 ${open ? 'rotate-45 translate-y-[8px] bg-(--color-white)' : ''}`} />
            <span className={`block w-5 h-[2px] bg-(--color-white) transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-(--color-white) transition-all duration-300 ${open ? '-rotate-45 -translate-y-[8px] bg-(--color-white)' : ''}`} />
          </button>
          </div>
        </div>
      </motion.header>

      {/* 모바일 풀스크린 메뉴 */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-(--color-primary)/88 backdrop-blur-xl
              flex flex-col items-center justify-center gap-8
              px-8 py-16
              md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={handleClick}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06 }}
                className="text-xl font-semibold text-white hover:text-(--color-primary-light) transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#cta"
              onClick={handleClick}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg font-semibold px-6 py-3 rounded-full bg-(--color-mint) text-(--color-primary) mt-3"
            >
              Download
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
