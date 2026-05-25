import { useEffect, useRef, useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import SectionChip from '../components/SectionChip'

const cards = [
  { image: '/tarot-1.webp', name: 'The Moon', situation: '오늘 기분이 어때?', detail: '물으면 멈칫하게 되는 날', answer: '타로가 대신 말해줘요.' },
  { image: '/tarot-2.webp', name: 'The Hermit', situation: '적어야 할 것 같은데', detail: '뭘 쓸지 모르겠는 날', answer: '한 줄이면 충분해요.' },
  { image: '/tarot-3.webp', name: 'Temperance', situation: '괜찮은 것 같은데', detail: '계속 밋밋한 날', answer: '마음계절로 돌아봐요.' },
]

export default function Empathy() {
  const sectionRef = useRef<HTMLElement>(null)
  const [phase, setPhase] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && phase === 0) {
          setPhase(1)
          setTimeout(() => setPhase(2), 1200)
          setTimeout(() => setPhase(3), 4000)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [phase])

  return (
    <section
      ref={sectionRef}
      id="empathy"
      style={{
        padding: isMobile ? '120px 16px' : 'clamp(120px, 10vw, 240px) 24px',
        background: 'linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* 제목 */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : 'clamp(32px, 5vw, 48px)' }}>
          <SectionChip label="Why arcoi" />
          <h2 style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: isMobile ? '26px' : 'clamp(26px,4vw,38px)',
            fontWeight: 700,
            letterSpacing: '-0.03em', color: '#F0EEFF', margin: 0,
          }}>이런 날 있지 않나요?</h2>
        </div>

          {/* 카드 3장 */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '28px' : 'clamp(16px, 3vw, 32px)',
          }}>

          {cards.map((card, i) => {
            const isUp = phase >= 1
            const showText = phase === 2

            return (
              <div
                key={i}
                style={{
                  opacity: isUp ? 1 : 0,
                  transform: isUp ? 'translateY(0)' : 'translateY(120px)',
                  transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 200}ms`,
                }}
              >
                <div style={{ perspective: '1000px' }}>
                  <div
                    style={{
                      width: isMobile ? '55vw' : 'clamp(140px, 22vw, 200px)',
                      aspectRatio: '2 / 3',
                      position: 'relative',
                      transformStyle: 'preserve-3d',
                      transform: showText ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      transition: `transform 0.8s cubic-bezier(0.4,0,0.2,1) ${showText ? i * 400 : i * 300}ms`,
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      if (phase >= 3) e.currentTarget.style.transform = 'rotateY(180deg)'
                    }}
                    onMouseLeave={e => {
                      if (phase >= 3) e.currentTarget.style.transform = 'rotateY(0deg)'
                    }}
                    {...(isMobile ? {
                      onClick: (e: React.MouseEvent<HTMLDivElement>) => {
                        if (phase >= 3) {
                          const el = e.currentTarget
                          const isFlipped = el.style.transform === 'rotateY(180deg)'
                          el.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)'
                        }
                      }
                    } : {})}
                  >
                    {/* 뒷면 = 타로카드 이미지 */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backfaceVisibility: 'hidden',
                      borderRadius: isMobile ? '8px' : '12px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                    }}>
                      <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    {/* 앞면 = 텍스트 */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      borderRadius: isMobile ? '8px' : '12px',
                      padding: isMobile ? '12px 8px' : 'clamp(20px,3vw,32px) clamp(16px,2vw,24px)',
                      display: 'flex', flexDirection: 'column',
                      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                      background: 'linear-gradient(135deg, rgba(124,91,240,0.15), rgba(244,167,187,0.1))',
                      border: '1px solid rgba(124,91,240,0.2)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(124,91,240,0.1)',
                      backdropFilter: 'blur(12px)',
                    }}>
                      <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: isMobile ? '8px' : 'clamp(10px,1.4vw,12px)',
                        fontWeight: 500, letterSpacing: '0.12em',
                        color: 'rgba(196,160,255,0.6)',
                        textTransform: 'uppercase',
                        marginBottom: isMobile ? '8px' : '16px',
                      }}>{card.name}</p>
                      <p style={{
                        fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                        fontSize: isMobile ? '11px' : 'clamp(14px,1.8vw,17px)',
                        fontWeight: 600, color: '#F0EEFF',
                        lineHeight: 1.5, letterSpacing: '-0.02em',
                        marginBottom: isMobile ? '12px' : '20px',
                      }}>
                        "{card.situation}<br />{card.detail}"
                      </p>
                      <div style={{
                        width: isMobile ? '20px' : '32px',
                        height: '1.5px',
                        background: 'linear-gradient(90deg,#7C5BF0,#F4A7BB)',
                        borderRadius: '2px',
                        marginBottom: isMobile ? '8px' : '16px',
                      }} />
                      <p style={{
                        fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                        fontSize: isMobile ? '10px' : 'clamp(13px,1.6vw,15px)',
                        fontWeight: 400, color: '#F4A7BB',
                        letterSpacing: '-0.01em',
                      }}>{card.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
