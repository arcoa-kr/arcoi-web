import { useEffect, useRef, useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import SectionChip from '../components/SectionChip'

const cards = [
  {
    image: '/tarot-1.webp',
    name: 'The High Priestess',
    situation: '궁금한 오늘의 나,',
    detail: '어떤 마음이 좋을지 알고 싶을 때',
    answer: '비비가 조용히 알려줘요.',
  },
  {
    image: '/tarot-2.webp',
    name: 'Strength',
    situation: '대단하지 않아도,',
    detail: '오늘 하루 잘 버틴 나에게',
    answer: '코코가 다정하게 응원해요.',
  },
  {
    image: '/tarot-3.webp',
    name: 'The Hermit',
    situation: '혼자만의 시간,',
    detail: '조용히 나를 돌보고 싶을 때',
    answer: '애쉬가 곁에 있어줘요.',
  },
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
        background: 'linear-gradient(180deg, #201A2E 0%, #0C0F1D 100%)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* 제목 */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : 'clamp(32px, 5vw, 48px)' }}>
          <SectionChip label="Why arcoi" />
          <h2 style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: 'clamp(26px,4vw,38px)', fontWeight: 700,
            letterSpacing: '-0.03em', color: '#F0EEFF', margin: 0,
          }}>이런 날 있지 않나요?</h2>
        </div>

          {/* 카드 3장 */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: isMobile ? '48px' : 'clamp(55px, 3vw, 60px)',
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
                      width: isMobile ? '53vw' : 'clamp(200px, 22vw, 240px)',
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
                    borderRadius: isMobile ? '12px' : '16px',
                    padding: isMobile ? '12px 36px' : 'clamp(20px,3vw,40px) clamp(16px,2vw,40px)',
                    display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center', textAlign: 'center',
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    overflow: 'hidden',
                  }}>
                    {/* 어두운 오버레이 — 텍스트 가독성 */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(10,10,20,0.8)',
                      borderRadius: isMobile ? '8px' : '12px',
                    }} />

                    {/* 텍스트 — zIndex 올리기 */}
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <p style={{
                        fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                        fontSize: isMobile ? '16px' : 'clamp(16px,1.8vw,18px)',
                        fontWeight: 500, color: '#F0EEFF',
                        lineHeight: 1.5, letterSpacing: '-0.02em',
                        marginBottom: isMobile ? '12px' : '20px',
                      }}>
                        {card.situation}<br />{card.detail}
                      </p>
                      <div style={{
                        width: isMobile ? '21px' : '28px',
                        height: '1.5px',
                        background: '#7C5BF0',
                        borderRadius: '2px',
                        marginBottom: isMobile ? '8px' : '16px',
                        margin: '28px auto 36px',
                      }} />
                      <p style={{
                        fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                        fontSize: isMobile ? '15px' : 'clamp(15px,1.6vw,16px)',
                        fontWeight: 400, color: '#F4A7BB',
                        letterSpacing: '-0.01em',
                        marginTop: isMobile ? '8px' : '16px',
                      }}>{card.answer}</p>
                    </div>
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
