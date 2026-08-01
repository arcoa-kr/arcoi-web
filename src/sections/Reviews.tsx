import { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import useIsMobile from '../hooks/useIsMobile'
import SectionChip from '../components/SectionChip'

const reviews = [
  {
    rating: 5,
    quote: '오늘의 마음을 차분하게 정리하는 한마디를 건네받는 기분이에요.',
    detail: '’오늘은 이렇게 하루를 보내보자’ 하는 작은 방향이 생겨서 더 만족스러워요.',
    name: '이*영',
  },
  {
    rating: 5,
    quote: '타로를 잘 몰라도 멋진 카드들이랑 시작할 수 있어요.',
    detail: '매일 다른 카드를 모으고, 어떤 카드가 나올지 기대되는 재미가 있어요.',
    name: '김*영',
  },
  {
    rating: 5,
    quote: '타로카드도 너무 예쁘고, 자기 전 마음이 편안해져요.',
    detail: '카드를 보는 즐거움까지 있어 하루의 끝에 자주 열어보게 돼요.',
    name: '이*린',
  },
]

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className="overflow-hidden bg-[#191424]"
      style={{
        padding: isMobile ? '120px 16px' : 'clamp(120px, 10vw, 240px) 24px',
      }}
    >
      <div className="max-w-[1080px] mx-auto">
        {/* 제목 */}
        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
            marginBottom: isMobile ? '48px' : 'clamp(48px, 6vw, 72px)',
          }}
        >
          <SectionChip label="Dear arcoi" />

          <h2
            className="font-display font-bold tracking-[-0.03em] text-text m-0"
            style={{ fontSize: 'clamp(32px, 4vw, 42px)' }}
          >
            아르코이를 만난 마음들
          </h2>

          <p
            className="font-body font-light text-[#DAD0EF] tracking-[-0.01em] leading-[1.65] mt-3 mb-0"
            style={{ fontSize: 'clamp(16px, 2vw, 17px)' }}
          >
            하루의 시작과 끝에,
            <br />
            아르코이가 건넨 작은 이야기예요.
          </p>
        </div>

        {/* 리뷰 3장 */}
        <div
          className={`flex ${
            isMobile ? 'flex-col' : 'flex-row'
          } items-stretch justify-center`}
          style={{ gap: isMobile ? '16px' : 'clamp(24px, 2vw, 32px)' }}
        >
          {reviews.map((review, i) => (
            <article
              key={review.name}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10"
              style={{
                width: isMobile ? '100%' : 'calc((100% - 56px) / 3)',
                minHeight: isMobile ? '260px' : '340px',
                padding: isMobile ? '32px 28px' : 'clamp(28px, 3vw, 36px)',
                background:
                  'linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.035) 100%)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(56px)',
                transition: `all 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${
                  180 + i * 180
                }ms`,
              }}
            >
              {/* 카드별 포인트 */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: '180px',
                  height: '180px',
                  top: '-90px',
                  right: '-80px',
                  borderRadius: '50%',
                  background:
                    i === 0
                      ? 'rgba(182, 143, 255, 0.18)'
                      : i === 1
                        ? 'rgba(255, 160, 202, 0.13)'
                        : 'rgba(129, 180, 255, 0.13)',
                  filter: 'blur(22px)',
                }}
              />

              <div className="relative z-[1]">
              <div
                className="flex items-center"
                style={{
                  gap: '3px',
                  marginBottom: '28px',
                }}
                aria-label={`평점 ${review.rating}점`}
              >
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={isMobile ? 16 : 17}
                    strokeWidth={1.8}
                    className="text-pink-soft"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

                <p
                  className="font-body font-medium text-text tracking-[-0.025em] leading-[1.55] m-0"
                  style={{ fontSize: 'clamp(18px, 2vw, 21px)' }}
                >
                  {review.quote}
                </p>

                <p
                  className="font-body font-light text-[#DAD0EF] tracking-[-0.01em] leading-[1.65] mb-0"
                  style={{
                    fontSize: '16px',
                    marginTop: '20px',
                  }}
                >
                  {review.detail}
                </p>
              </div>

              <div
                className="relative z-[1] mt-auto flex items-center"
                style={{ paddingTop: '28px' }}
              >
                <div
                  className="bg-purple"
                  style={{
                    width: '24px',
                    height: '1px',
                    marginRight: '12px',
                  }}
                />
                <span
                  className="font-body text-pink-soft tracking-[-0.01em]"
                  style={{ fontSize: '15px' }}
                >
                  {review.name} 님
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* 리뷰 근거 */}
        <p
          className="font-body text-center text-[#9B90AE] tracking-[-0.01em] mb-0"
          style={{
            fontSize: '14.5px',
            marginTop: isMobile ? '28px' : '36px',
            opacity: isVisible ? 0.5 : 0,
            transition: 'opacity 0.7s ease 800ms',
          }}
        >
          앱인토스 미니앱 사용자 리뷰 발췌  ·  <strong>4.5</strong> / 5 점
        </p>
      </div>
    </section>
  )
}
