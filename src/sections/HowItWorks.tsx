import { useEffect, useRef, useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import SectionChip from '../components/SectionChip'
import StoreButtons from '../components/StoreButtons'

const steps = [
  { num: '01', title: '마음계절을 골라요.', desc: '오늘 나는 봄, 여름, 가을, 겨울?\n지금 내 마음의 온도를 계절로 선택해요.', img: '/step-1.webp' },
  { num: '02', title: '리딩 방법을 선택해요.', desc: '나의 타로카드와 스마트폰 중에서\n선호하는 방법을 선택합니다.', img: '/step-2.webp' },
  { num: '03', title: '타로카드 1장을 선택해요.', desc: '실물 카드 사용 시 명상 타이머가 제공돼요.\n마음을 가라앉히고 한 장을 선택합니다.', img: '/step-3.webp' },
  { num: '04', title: '루나의 해설을 보고 일기를 써요.', desc: '일기는 24시에 초기화 되어서 부담없어요.\n해설 공유하기를 통해 개인 소장해 보세요.', img: '/step-4.webp' },
  { num: '05', title: '회고 타로를 통해 하루를 돌아봐요.', desc: '6시간 뒤, 하루를 돌아보는 타로가 가능해요.\n오늘 하루도 정말 수고 많았어요.', img: '/step-5.webp' },
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
    if (mockupRef.current) setMockupH(mockupRef.current.offsetHeight)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 50 && activeStep < steps.length - 1) setActiveStep(p => p + 1)
    else if (diff < -50 && activeStep > 0) setActiveStep(p => p - 1)
  }

  // ── 모바일 ──
  if (isMobile) {
    return (
      <section id="how-it-works"
        className="bg-[#131123] overflow-hidden py-[100px] px-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="max-w-[480px] mx-auto text-center">
          <div className="fade-in">
            <SectionChip label="How it works" />
            <h2 className="font-display font-bold tracking-[-0.03em] text-text mb-6"
              style={{ fontSize: 'clamp(26px,4vw,38px)' }}
            >
              이렇게 사용해요
            </h2>

            <div className="fade-in flex gap-1.5 mb-6 justify-center">
              {steps.map((_, i) => (
                <div key={i} onClick={() => setActiveStep(i)}
                  className="h-2 rounded-full cursor-pointer transition-all duration-400"
                  style={{
                    width: activeStep === i ? '28px' : '8px',
                    background: activeStep === i
                      ? 'linear-gradient(90deg, #7C5BF0, #FDCADE)'
                      : 'rgba(124,91,240,0.33)',
                  }}
                />
              ))}
            </div>
          </div>

          <div className="fade-in w-full max-w-[210px] mx-auto mb-6 rounded-[28px] overflow-hidden relative"
            style={{
              aspectRatio: '9 / 19',
              background: 'linear-gradient(160deg, #2D1B4E, #1A1A2E)',
              border: '1.5px solid rgba(124,91,240,0.25)',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5), 0 0 30px rgba(124,91,240,0.15)',
            }}
          >
            {steps.map((step, i) => (
              <img key={i} src={step.img} alt={step.title}
                className="absolute top-0 w-full h-full object-cover rounded-[28px] transition-opacity duration-500"
                style={{ opacity: activeStep === i ? 1 : 0 }}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="font-accent text-[40px] font-semibold text-purple leading-none mb-3">
              {steps[activeStep].num}
            </div>
            <h3 className="font-body text-lg font-bold text-text tracking-[-0.02em] mb-2">
              {steps[activeStep].title}
            </h3>
            <p className="font-body text-sm font-normal text-text/65 leading-[1.65] whitespace-pre-line">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>
      </section>
    )
  }

  // ── PC ──
  return (
    <div ref={stickyRef} id="how-it-works"
      className="relative"
      style={{
        height: `${steps.length * 60}vh`,
        background: 'linear-gradient(180deg, #131123 0%, #111111 100%)',
      }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-visible">
        <div className="max-w-[1080px] w-full px-6 grid grid-cols-2 items-center"
          style={{ gap: 'clamp(32px, 5vw, 64px)' }}
        >
          {/* 왼쪽: 폰 목업 — 다이얼 */}
          <div className="fade-in flex justify-center">
            <div className="relative">
              {/* 이미지 스트립 */}
              <div className="absolute w-full left-0 flex flex-col gap-4 items-center"
                style={{
                  top: `${-activeStep * (mockupH + 16)}px`,
                  transition: 'top 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {steps.map((step, i) => (
                  <img key={i} src={step.img} alt={step.title}
                    className="w-full rounded-[36px]"
                    style={{
                      aspectRatio: '9 / 19',
                      objectFit: 'cover',
                      opacity: activeStep === i ? 1 : 0.3,
                      transform: activeStep === i ? 'scale(1)' : 'scale(0.9)',
                      transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                ))}
              </div>
              {/* 목업 프레임 */}
              <div ref={mockupRef}
                className="relative z-2 pointer-events-none rounded-[36px]"
                style={{
                  width: 'clamp(210px, 28vw, 280px)',
                  aspectRatio: '9 / 19',
                  border: '3px solid rgba(124,91,240,0.25)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(124,91,240,0.15)',
                }}
              />
            </div>
          </div>

          {/* 오른쪽: 텍스트 */}
          <div className="fade-in">
            <SectionChip label="How it works" />
            <h2 className="font-display font-semibold tracking-[-0.03em] text-text"
              style={{ fontSize: 'clamp(26px,4vw,38px)', marginBottom: 'clamp(32px, 5vw, 48px)' }}
            >
              이렇게 사용해요
            </h2>

            <div className="flex gap-2 mb-8">
              {steps.map((_, i) => (
                <div key={i}
                  className="h-2 rounded-full transition-all duration-400"
                  style={{
                    width: activeStep === i ? '32px' : '8px',
                    background: activeStep === i
                      ? 'linear-gradient(90deg, #7C5BF0, #FDCADE)'
                      : 'rgba(124,91,240,0.33)',
                  }}
                />
              ))}
            </div>

            <div className="font-accent font-semibold text-purple leading-none mb-4"
              style={{ fontSize: 'clamp(48px, 8vw, 72px)' }}
            >
              {steps[activeStep].num}
            </div>

            <div className="relative min-h-[120px]">
              {steps.map((step, i) => (
                <div key={i}
                  style={{
                    position: i === 0 ? 'relative' : 'absolute',
                    top: 0, left: 0,
                    opacity: activeStep === i ? 1 : 0,
                    transform: activeStep === i ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.5s ease',
                    pointerEvents: activeStep === i ? 'auto' : 'none',
                  }}
                >
                  <h3 className="font-body font-semibold text-text tracking-[-0.02em] mb-3"
                    style={{ fontSize: 'clamp(18px, 2.5vw, 24px)' }}
                  >
                    {step.title}
                  </h3>
                  <p className="font-body font-normal text-text/65 leading-[1.65] whitespace-pre-line"
                    style={{ fontSize: 'clamp(14px, 1.8vw, 16px)' }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="fade-in mt-8"><StoreButtons /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
