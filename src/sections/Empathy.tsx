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
      className="bg-empathy overflow-hidden"
      style={{ padding: isMobile ? '120px 16px' : 'clamp(120px, 10vw, 240px) 24px' }}
    >
      <div className="max-w-[1080px] mx-auto">
        {/* 제목 */}
        <div className="fade-in text-center"
          style={{ marginBottom: isMobile ? '32px' : 'clamp(32px, 5vw, 48px)' }}
        >
          <SectionChip label="Why arcoi" />
          <h2 className="font-display font-bold tracking-[-0.03em] text-text m-0"
            style={{ fontSize: 'clamp(32px,4vw,42px)' }}
          >
            오늘의 나를 만나요
          </h2>
        {/* Sub copy */}
        <p className="fade-in font-body font-light text-[#DAD0EF] tracking-[-0.01em] leading-[1.65] mt-3 mb-5"
          style={{ fontSize: 'clamp(16px, 2vw, 17px)' }}
        >
          비비, 코코, 애쉬가 활약하는<br />
          아르코이의 오리지널 고양이 타로로 만나요.
        </p>
        </div>
        

        {/* 카드 3장 */}
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-center`}
          style={{ gap: isMobile ? '48px' : 'clamp(55px, 3vw, 60px)' }}
        >
          {cards.map((card, i) => {
            const isUp = phase >= 1
            const showText = phase === 2

            return (
              <div key={i}
                style={{
                  opacity: isUp ? 1 : 0,
                  transform: isUp ? 'translateY(0)' : 'translateY(120px)',
                  transition: `all 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 200}ms`,
                }}
              >
                <div style={{ perspective: '1000px' }}>
                  <div
                    className="relative cursor-pointer"
                    style={{
                      width: isMobile ? '53vw' : 'clamp(200px, 22vw, 240px)',
                      aspectRatio: '2 / 3',
                      transformStyle: 'preserve-3d',
                      transform: showText ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      transition: `transform 0.8s cubic-bezier(0.4,0,0.2,1) ${showText ? i * 400 : i * 300}ms`,
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
                    <div className={`absolute inset-0 ${isMobile ? 'rounded-lg' : 'rounded-xl'} overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                    </div>

                    {/* 앞면 = 텍스트 */}
                    <div className={`absolute inset-0 ${isMobile ? 'rounded-xl px-[30px] py-3' : 'rounded-2xl'} flex flex-col justify-center items-center text-center overflow-hidden`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                        padding: isMobile ? undefined : 'clamp(20px,3vw,30px) clamp(16px,2vw,30px)',
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* 어두운 오버레이 */}
                      <div className={`absolute inset-0 bg-[rgba(10,10,20,0.8)] ${isMobile ? 'rounded-lg' : 'rounded-xl'}`} />

                      {/* 텍스트 */}
                      <div className="relative z-[1]">
                        <p className="font-body font-medium text-text leading-[1.5] tracking-[-0.02em]"
                          style={{
                            fontSize: isMobile ? '16px' : 'clamp(16px,1.8vw,18px)',
                            marginBottom: isMobile ? '12px' : '20px',
                          }}
                        >
                          {card.situation}<br />{card.detail}
                        </p>
                        <div className="bg-purple rounded-sm mx-auto"
                          style={{
                            width: isMobile ? '21px' : '28px',
                            height: '1.5px',
                            margin: '28px auto 36px',
                          }}
                        />
                        <p className="font-body font-normal text-pink-soft tracking-[-0.01em]"
                          style={{
                            fontSize: isMobile ? '15px' : 'clamp(15px,1.6vw,16px)',
                            marginTop: isMobile ? '8px' : '16px',
                          }}
                        >
                          {card.answer}
                        </p>
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
