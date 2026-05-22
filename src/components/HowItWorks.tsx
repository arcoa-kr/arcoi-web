import { useState, useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: '마음계절을 골라요',
    desc: '오늘 나는 봄, 여름, 가을, 겨울?\n지금 내 마음의 온도를 계절로 표현해요.',
    img: 'placeholder-step1.png',
    label: 'Step 1 — 마음계절 선택',
  },
  {
    num: '02',
    title: '리딩 방법을 선택해요',
    desc: '나의 타로카드와 스마트폰 중에서\n리딩 방법을 선택합니다.',
    img: 'placeholder-step2.png',
    label: 'Step 2 — 리딩 방법 선택',
  },
  {
    num: '03',
    title: '고양이 타로 1장을 뽑아요',
    desc: '실물 카드 사용 시 명상 타이머를 제공합니다.\n마음을 가라앉히고 천천히 뽑아요.',
    img: 'placeholder-step3.png',
    label: 'Step 3 — 타로 카드 뽑기',
  },
  {
    num: '04',
    title: '루나의 해설과 함께 짧은 일기를 써요',
    desc: '부담 없이, 가볍게.\n한 줄도 괜찮아요.',
    img: 'placeholder-step4.png',
    label: 'Step 4 — 해설 & 일기',
  },
  {
    num: '05',
    title: '6시간 뒤, 회고 타로로 돌아봐요',
    desc: '오늘의 감정 변화를 다시 한번.\n하루의 흐름을 부드럽게 정리해요.',
    img: 'placeholder-step5.png',
    label: 'Step 5 — 회고 타로',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stepEls = document.querySelectorAll('.step-item')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = Number((entry.target as HTMLElement).dataset.idx)
            setActiveStep(idx)
          }
        })
      },
      { threshold: 0.6 }
    )
    stepEls.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'clamp(72px, 10vw, 120px) 24px',
        background: '#1A1A2E',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* Section title */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 7vw, 72px)' }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: 'rgba(244, 167, 187, 0.7)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            How it works
          </p>
          <h2
            style={{
              fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
              fontSize: 'clamp(24px, 4vw, 38px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#F0EEFF',
              margin: 0,
            }}
          >
            이렇게 사용해요
          </h2>
        </div>

        {/* Desktop: sticky mockup + steps / Mobile: stacked */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'start',
          }}
        >
          {/* Steps list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <div
                key={i}
                className={`step-item fade-in`}
                data-idx={i}
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '28px 0',
                  borderBottom: i < steps.length - 1 ? '1px solid rgba(124, 91, 240, 0.12)' : 'none',
                  opacity: activeStep === i ? 1 : 0.5,
                  transition: 'opacity 0.4s ease',
                }}
              >
                {/* Step dot + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div
                    className="step-dot"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: activeStep === i
                        ? 'linear-gradient(135deg, #7C5BF0, #F4A7BB)'
                        : 'rgba(124, 91, 240, 0.15)',
                      border: activeStep === i ? 'none' : '1.5px solid rgba(124, 91, 240, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '12px',
                      fontWeight: 600,
                      color: activeStep === i ? 'white' : 'rgba(124, 91, 240, 0.6)',
                      transition: 'all 0.4s ease',
                      boxShadow: activeStep === i ? '0 0 16px rgba(124, 91, 240, 0.5)' : 'none',
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                      fontSize: 'clamp(16px, 2vw, 19px)',
                      fontWeight: 700,
                      color: activeStep === i ? '#F0EEFF' : 'rgba(240, 238, 255, 0.6)',
                      letterSpacing: '-0.02em',
                      marginBottom: '8px',
                      transition: 'color 0.4s ease',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                      fontSize: 'clamp(13px, 1.6vw, 15px)',
                      fontWeight: 400,
                      color: 'rgba(240, 238, 255, 0.5)',
                      lineHeight: 1.65,
                      letterSpacing: '-0.01em',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Phone mockup (sticky on desktop) */}
          <div
            style={{
              position: 'sticky',
              top: '80px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 'clamp(200px, 28vw, 300px)',
                aspectRatio: '9/19',
                borderRadius: '36px',
                background: 'linear-gradient(160deg, #2D1B4E, #1A1A2E)',
                border: '1.5px solid rgba(124, 91, 240, 0.25)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(124, 91, 240, 0.15)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                className="placeholder-img"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '36px',
                  fontSize: '12px',
                }}
              >
                {steps[activeStep].label}
                <br />
                <span style={{ opacity: 0.5, fontSize: '11px' }}>({steps[activeStep].img})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
