import { useEffect, useRef, useState } from 'react'
import StarParticles from '../components/StarParticles'
import StoreButtons from '../components/StoreButtons'
import useIsMobile from '../hooks/useIsMobile'

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const content = contentRef.current
      if (!content) return
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      content.style.transform = `translate(${x * 6}px, ${y * 4}px)`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative min-h-svh flex items-center justify-center overflow-hidden">

      {/* Luna background image */}
      <div className="absolute inset-0 bg-cover z-0"
        style={{ backgroundImage: 'url(/hero-luna.webp)', backgroundPosition: isMobile ? '62% bottom' : 'center bottom' }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to right, rgba(13,11,30,0.1) 0%, rgba(13,11,30,0.1) 35%, transparent 55%)' }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-[2]"
        style={{ background: 'linear-gradient(to bottom, transparent, #24213C)' }}
      />

      {/* Firefly particles */}
      <StarParticles />

      {/* Main content */}
      <div ref={contentRef}
        className="relative z-[4] text-left px-9 pb-12 max-w-[950px] w-full will-change-transform"
        style={{
          transition: 'transform 0.2s ease-out',
          transform: `translateY(${-scrollY * 0.3}px)`,
        }}
      >
        <p className="fade-in font-accent text-sm font-light tracking-[1px] text-pink mb-5 ml-1">
          arcoi by ARCOA
        </p>

        <h1 className="fade-in font-display font-bold leading-[1.4] tracking-[-0.03em] text-text mb-10"
          style={{
            fontSize: 'clamp(42px, 4.5vw, 58px)',
            textShadow: '0 2px 32px rgba(13,11,30,0.8)',
          }}
        >
          하루 한 장,
          <p style={{ fontSize: 'clamp(45px, 4.7vw, 60.5px)' }}>타로 일기</p>
        </h1>

        <p className="fade-in font-body font-light text-[#DAD0EF] tracking-[-0.01em] ml-1.5 mb-10"
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: 'clamp(27px, 2vw, 33px)',
          }}
        >
          궁금한 오늘 하루.<br />
          번거롭지 않게 케어하고 싶을 때<br />
          타로 한 장이 나를 알아줘요.
        </p>

        <div className="fade-in ml-1">
          <StoreButtons />
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="bounce-down absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] text-text/40">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
