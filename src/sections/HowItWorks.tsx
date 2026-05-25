import { useEffect, useRef, useState } from 'react'

const steps = [
  {
    num: '01',
    title: '마음계절을 골라요',
    desc: '오늘 나는 봄, 여름, 가을, 겨울?\n지금 내 마음의 온도를 계절로 표현해요.',
    img: '/step-1.webp',
  },
  {
    num: '02',
    title: '리딩 방법을 선택해요',
    desc: '나의 타로카드와 스마트폰 중에서\n리딩 방법을 선택합니다.',
    img: '/step-2.webp',
  },
  {
    num: '03',
    title: '고양이 타로 1장을 뽑아요',
    desc: '실물 카드 사용 시 명상 타이머를 제공합니다.\n마음을 가라앉히고 천천히 뽑아요.',
    img: '/step-3.webp',
  },
  {
    num: '04',
    title: '루나의 해설과 함께 짧은 일기를 써요',
    desc: '부담 없이, 가볍게.\n한 줄도 괜찮아요.',
    img: '/step-4.webp',
  },
  {
    num: '05',
    title: '6시간 뒤, 회고 타로로 돌아봐요',
    desc: '오늘의 감정 변화를 다시 한번.\n하루의 흐름을 부드럽게 정리해요.',
    img: '/step-5.webp',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const stickyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const el = stickyRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const stickyHeight = el.scrollHeight - window.innerHeight
      const scrolled = -rect.top

      if (scrolled < 0) {
        setActiveStep(0)
        return
      }
      if (scrolled > stickyHeight) {
        setActiveStep(steps.length - 1)
        return
      }

      const stepHeight = stickyHeight / steps.length
      const idx = Math.min(Math.floor(scrolled / stepHeight), steps.length - 1)
      setActiveStep(idx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={stickyRef}
      style={{
        height: `${steps.length * 50}vh`,
        position: 'relative',
        background: '#1A1A2E',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1080px',
            width: '100%',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
          }}
        >
          {/* 오른쪽: 폰 목업 */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: 'clamp(220px, 28vw, 300px)',
                aspectRatio: '9 / 19',
                borderRadius: '36px',
                background: 'linear-gradient(160deg, #2D1B4E, #1A1A2E)',
                border: '1.5px solid rgba(124,91,240,0.25)',
                boxShadow:
                  '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(124,91,240,0.15)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {steps.map((step, i) => (
                <img
                  key={i}
                  src={step.img}
                  alt={step.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '36px',
                    opacity: activeStep === i ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}
                />
              ))}
            </div>
          </div>

          {/* 왼쪽: 텍스트 */}
          <div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.18em',
                color: 'rgba(244,167,187,0.7)',
                textTransform: 'uppercase',
                marginBottom: '12px',
              }}
            >
              How it works
            </p>
            <h2
              style={{
                fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
                fontSize: 'clamp(24px,4vw,38px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#F0EEFF',
                marginBottom: 'clamp(32px, 5vw, 48px)',
              }}
            >
              이렇게 사용해요
            </h2>

            {/* 인디케이터 */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
              {steps.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: activeStep === i ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background:
                      activeStep === i
                        ? 'linear-gradient(90deg, #7C5BF0, #F4A7BB)'
                        : 'rgba(124,91,240,0.2)',
                    transition: 'all 0.4s ease',
                  }}
                />
              ))}
            </div>

            {/* 스텝 넘버 */}
            <div
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 'clamp(48px, 8vw, 72px)',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #7C5BF0, #F4A7BB)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: '16px',
              }}
            >
              {steps[activeStep].num}
            </div>

            {/* 스텝 내용 */}
            <div style={{ position: 'relative', minHeight: '120px' }}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    opacity: activeStep === i ? 1 : 0,
                    transform: activeStep === i ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease',
                    pointerEvents: activeStep === i ? 'auto' : 'none',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                      fontSize: 'clamp(18px, 2.5vw, 24px)',
                      fontWeight: 700,
                      color: '#F0EEFF',
                      letterSpacing: '-0.02em',
                      marginBottom: '12px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      fontWeight: 400,
                      color: 'rgba(240,238,255,0.55)',
                      lineHeight: 1.65,
                      letterSpacing: '-0.01em',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
