import { useEffect, useRef, useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import SectionChip from '../components/SectionChip'
import StoreButtons from '../components/StoreButtons'

const steps = [
  { num: '01', title: '마음계절을 골라요', desc: '오늘 나는 봄, 여름, 가을, 겨울?\n지금 내 마음의 온도를 계절로 표현해요.', img: '/step-1.webp' },
  { num: '02', title: '리딩 방법을 선택해요', desc: '나의 타로카드와 스마트폰 중에서\n리딩 방법을 선택합니다.', img: '/step-2.webp' },
  { num: '03', title: '고양이 타로 1장을 뽑아요', desc: '실물 카드 사용 시 명상 타이머를 제공합니다.\n마음을 가라앉히고 천천히 뽑아요.', img: '/step-3.webp' },
  { num: '04', title: '루나의 해설과 함께 짧은 일기를 써요', desc: '부담 없이, 가볍게.\n한 줄도 괜찮아요.', img: '/step-4.webp' },
  { num: '05', title: '6시간 뒤, 회고 타로로 돌아봐요', desc: '오늘의 감정 변화를 다시 한번.\n하루의 흐름을 부드럽게 정리해요.', img: '/step-5.webp' },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const stickyRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const isMobile = useIsMobile()
  const mockupRef = useRef<HTMLDivElement>(null)
  const [mockupH, setMockupH] = useState(0)

  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      const el = stickyRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const stickyHeight = el.scrollHeight - window.innerHeight
      const scrolled = -rect.top
      if (scrolled < 0) { setActiveStep(0); return }
      if (scrolled > stickyHeight) { setActiveStep(steps.length - 1); return }
      const stepHeight = stickyHeight / steps.length
      const idx = Math.min(Math.floor(scrolled / stepHeight), steps.length - 1)
      setActiveStep(idx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  useEffect(() => {
    if (mockupRef.current) {
      setMockupH(mockupRef.current.offsetHeight)
    }
  }, [])


  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50 && activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1)
    } else if (diff < -50 && activeStep > 0) {
      setActiveStep(prev => prev - 1)
    }
  }

  // ── 모바일 ──
  if (isMobile) {
    return (
      <section id="how-it-works" 
        style={{ padding: '100px 24px', background: '#131123', overflow: 'hidden' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div style={{ maxWidth: '480px', margin: '0 auto', textAlign: 'center'}}>
          <div className="fade-in">
          <SectionChip label="How it works" />
          <h2 style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: 'clamp(26px,4vw,38px)', fontWeight: 700,
            letterSpacing: '-0.03em', color: '#F0EEFF',
            marginBottom: '24px',
          }}>이렇게 사용해요</h2>

          <div className="fade-in" style={{ display: 'flex', gap: '6px', marginBottom: '24px', justifyContent: 'center' }}>
            {steps.map((_, i) => (
              <div key={i} onClick={() => setActiveStep(i)} style={{
                width: activeStep === i ? '28px' : '8px',
                height: '8px', borderRadius: '4px',
                background: activeStep === i
                  ? 'linear-gradient(90deg, #7C5BF0, #F4A7BB)'
                  : 'rgba(124,91,240,0.2)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
              }} />
            ))}
          </div>
          </div>

          <div className="fade-in" style={{
            width: '100%', maxWidth: '210px',
            margin: '0 auto 24px', 
            aspectRatio: '9 / 19', borderRadius: '28px',
            background: 'linear-gradient(160deg, #2D1B4E, #1A1A2E)',
            border: '1.5px solid rgba(124,91,240,0.25)',
            boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(124,91,240,0.15)',
            overflow: 'hidden', position: 'relative',
          }}>
            {steps.map((step, i) => (
              <img key={i} src={step.img} alt={step.title} style={{
                position: 'absolute', top: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', borderRadius: '28px',
                opacity: activeStep === i ? 1 : 0,
                transition: 'opacity 0.5s ease',
              }} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '40px', fontWeight: 700,
              background: 'linear-gradient(135deg, #7C5BF0, #F4A7BB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1, marginBottom: '12px',
            }}>{steps[activeStep].num}</div>
            <h3 style={{
              fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
              fontSize: '18px', fontWeight: 700,
              color: '#F0EEFF', letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}>{steps[activeStep].title}</h3>
            <p style={{
              fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
              fontSize: '14px', fontWeight: 400,
              color: 'rgba(240,238,255,0.55)',
              lineHeight: 1.65, whiteSpace: 'pre-line',
            }}>{steps[activeStep].desc}</p>
          </div>
        </div>
      </section>
    )
  }

  // PC
  return (
    <div
      ref={stickyRef}
      id="how-it-works"
      style={{
        height: `${steps.length * 60}vh`,
        position: 'relative',
        background: 'linear-gradient(180deg, #131123 0%, #111111 100%)',
      }}
    >
      <div style={{
        position: 'sticky', top: 0, height: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'visible',
      }}>
        <div style={{
          maxWidth: '1080px', width: '100%', padding: '0 24px',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 5vw, 64px)', alignItems: 'center',
        }}>

        {/* 왼쪽: 폰 목업 — 다이얼 */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative' }}>
            {/* 이미지 스트립 */}
            <div style={{
              position: 'absolute',
              width: '100%',
              left: 0,
              top: `${-activeStep * (mockupH + 16)}px`,
              transition: 'top 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
              display: 'flex', flexDirection: 'column',
              gap: '16px', alignItems: 'center',
            }}>
              {steps.map((step, i) => (
                <img key={i} src={step.img} alt={step.title} style={{
                  width: '100%',
                  aspectRatio: '9 / 19',
                  objectFit: 'cover',
                  borderRadius: '36px',
                  opacity: activeStep === i ? 1 : 0.3,
                  transform: activeStep === i ? 'scale(1)' : 'scale(0.9)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }} />
              ))}
            </div>
            {/* 목업 프레임 */}
            <div ref={mockupRef} style={{
              width: 'clamp(210px, 28vw, 280px)',
              aspectRatio: '9 / 19',
              borderRadius: '36px',
              border: '3px solid rgba(124,91,240,0.25)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(124,91,240,0.15)',
              position: 'relative', zIndex: 2,
              pointerEvents: 'none',
            }} />
          </div>
        </div>

          {/* 오른쪽: 텍스트 */}
          <div className="fade-in">
            <SectionChip label="How it works" />
            <h2 style={{
              fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
              fontSize: 'clamp(26px,4vw,38px)', fontWeight: 700,
              letterSpacing: '-0.03em', color: '#F0EEFF',
              marginBottom: 'clamp(32px, 5vw, 48px)',
            }}>이렇게 사용해요</h2>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
              {steps.map((_, i) => (
                <div key={i} style={{
                  width: activeStep === i ? '32px' : '8px',
                  height: '8px', borderRadius: '4px',
                  background: activeStep === i
                    ? 'linear-gradient(90deg, #7C5BF0, #F4A7BB)'
                    : 'rgba(124,91,240,0.2)',
                  transition: 'all 0.4s ease',
                }} />
              ))}
            </div>

            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 700,
              background: 'linear-gradient(135deg, #7C5BF0, #F4A7BB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1, marginBottom: '16px',
            }}>{steps[activeStep].num}</div>

            <div style={{ position: 'relative', minHeight: '120px' }}>
              {steps.map((step, i) => (
                <div key={i} style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  top: 0, left: 0,
                  opacity: activeStep === i ? 1 : 0,
                  transform: activeStep === i ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.5s ease',
                  pointerEvents: activeStep === i ? 'auto' : 'none',
                }}>
                  <h3 style={{
                    fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                    fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700,
                    color: '#F0EEFF', letterSpacing: '-0.02em', marginBottom: '12px',
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                    fontSize: 'clamp(14px, 1.8vw, 16px)', fontWeight: 400,
                    color: 'rgba(240,238,255,0.55)',
                    lineHeight: 1.65, whiteSpace: 'pre-line',
                  }}>{step.desc}</p>
                </div> 
              ))}
            </div>
            <div className='mt-8'><StoreButtons /></div>
          </div>
        </div>
      </div>
    </div>
  )

}
