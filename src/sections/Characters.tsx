import { useState, useRef } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import SectionChip from '../components/SectionChip'

const masters = [
  {
    name: 'Oracle', nameKo: '오라클', role: '지혜와 직관',
    quote: '인생은 선택의 연속이지.', img: '/char-oracle.webp',
    color: '#C4A0FF', locked: true,
    cats: [
      { name: '코코', img: '/char-coco.webp' },
      { name: '비비', img: '/char-bibi.webp' },
      { name: '애쉬', img: '/char-ash.webp' },
    ],
  },
  { name: 'Ian', nameKo: '이안', role: '분석과 통찰', quote: '핵심은 이것이로군.', img: '/char-ian.webp', color: '#A0C4FF', locked: false },
  { name: 'Luna', nameKo: '루나', role: '공감과 위로', quote: '괜찮아, 함께 있을게.', img: '/char-luna.webp', color: '#F4A7BB', locked: false },
  { name: 'Nova', nameKo: '노바', role: 'YES or NO', quote: '지금 당장 GOGO', img: '/char-nova.webp', color: '#FFD07A', locked: false },
  { name: 'Stella', nameKo: '스텔라', role: '확신과 희망', quote: '네가 약한 게 아니라 진심이라는 뜻이야.', img: '/char-stella.webp', color: '#A0FFD0', locked: true },
]

export default function Characters() {
  const [activeIdx, setActiveIdx] = useState(2)
  const isMobile = useIsMobile()
  const baseW = isMobile ? 160 : 280
  const touchStartX = useRef(0)

  return (
    <section id="characters"
      className="bg-char relative overflow-hidden"
      style={{ padding: 'clamp(120px, 10vw, 240px) 0' }}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > 50 && activeIdx < masters.length - 1) setActiveIdx(p => p + 1)
        else if (diff < -50 && activeIdx > 0) setActiveIdx(p => p - 1)
      }}
    >
      {/* 배경 글로우 */}
      <div className="absolute inset-0 pointer-events-none transition-all duration-600"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${masters[activeIdx].color}33 0%, transparent 88%)` }}
      />

      <div className="relative z-[1] max-w-[1080px] mx-auto px-6">
        {/* 제목 */}
        <div className="fade-in text-center" style={{ marginBottom: 'clamp(32px, 5vw, 4px)' }}>
          <SectionChip label="Tarot Masters" />
          <h2 className="font-display font-bold tracking-[-0.03em] text-text m-0"
            style={{ fontSize: 'clamp(32px,4vw,42px)' }}
          >
            아르코이의 마스터
          </h2>
        </div>

        {/* 캐러셀 */}
        <div className="fade-in relative flex items-center justify-center"
          style={{ height: 'clamp(320px, 45vw, 480px)' }}
        >
          {masters.map((char, i) => {
            let offset = i - activeIdx
            const half = Math.floor(masters.length / 2)
            if (offset > half) offset -= masters.length
            if (offset < -half) offset += masters.length

            const absOffset = Math.abs(offset)
            const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.75 : 0.55
            const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.6
            const zIndex = 5 - absOffset
            const x = offset * (isMobile ? 18 : 11)

            return (
              <div key={char.name}
                className="absolute cursor-pointer"
                onClick={() => setActiveIdx(i)}
                style={{
                  left: '50%', top: '50%',
                  transform: `translate(calc(-50% + ${x}vw), -50%) scale(${scale})`,
                  width: `${baseW}px`, height: `${baseW * 1.65}px`,
                  opacity, zIndex,
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <div className="w-full h-full rounded-3xl overflow-hidden relative transition-all duration-600"
                  style={{
                    border: absOffset === 0 ? `2px solid ${char.color}70` : '1px solid rgba(124,91,240,0.25)',
                    boxShadow: absOffset === 0 ? `0 0 40px ${char.color}30, 0 16px 48px rgba(0,0,0,0.5)` : '0 4px 16px rgba(0,0,0,0.3)',
                  }}
                >
                  <img src={char.img} alt={char.nameKo}
                    className="w-full h-full object-cover object-top transition-[filter] duration-600"
                    style={{
                      filter: char.locked
                        ? 'brightness(0.5) saturate(0.15)'
                        : absOffset === 0 ? 'brightness(1.05)' : 'brightness(0.7) saturate(0.88)',
                    }}
                  />

                  {/* 하단 그라데이션 */}
                  <div className="absolute bottom-0 left-0 right-0 h-[45%]"
                    style={{ background: 'linear-gradient(to top, rgba(13,11,30,0.8), transparent)' }}
                  />

                  {/* 잠금 아이콘 */}
                  {char.locked && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28px] opacity-70">
                      🔒
                    </div>
                  )}

                  {/* 이름 */}
                  <div className="absolute bottom-5 left-0 right-0 text-center">
                    <p className="font-display font-normal tracking-[0.05em] uppercase"
                      style={{
                        fontSize: 'clamp(16px, 2vw, 24px)',
                        color: char.locked ? 'rgba(255,255,255,0.21)' : char.color,
                      }}
                    >
                      {char.name}
                    </p>
                    <p className="font-display font-light"
                      style={{
                        fontSize: 'clamp(14px, 2vw, 16px)',
                        color: char.locked ? 'rgba(255,255,255,0.25)' : '#F0EEFF',
                      }}
                    >
                      {char.nameKo}
                    </p>
                  </div>

                  {/* 고양이 아이콘 */}
                  {char.cats && (
                    <div className="absolute left-0 right-0 flex gap-2 justify-center"
                      style={{ bottom: isMobile ? '72px' : '88px' }}
                    >
                      {char.cats.map((cat, j) => (
                        <div key={j}
                          className="rounded-full overflow-hidden border border-pink"
                          style={{
                            width: isMobile ? '33px' : '54px',
                            height: isMobile ? '33px' : '54px',
                          }}
                        >
                          <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* 선택된 캐릭터 정보 */}
        <div className="text-center min-h-[70px]" style={{ marginTop: 'clamp(10px, 3vw, 24px)' }}>
          {!masters[activeIdx].locked ? (
            <div>
              <p className="font-body font-normal mb-[7px] opacity-80"
                style={{ fontSize: 'clamp(14px, 1.6vw, 15px)', color: masters[activeIdx].color }}
              >
                {masters[activeIdx].role}
              </p>
              <p className="font-display font-normal italic text-text"
                style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
              >
                "{masters[activeIdx].quote}"
              </p>
            </div>
          ) : (
            <p className="font-body text-text/30" style={{ fontSize: 'clamp(13px, 1.6vw, 15px)' }}>
              ✦ coming soon
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
