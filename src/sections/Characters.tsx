import { useState, useRef } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import SectionChip from '../components/SectionChip'

const masters = [
  {
    name: 'Oracle',
    nameKo: '오라클',
    role: '지혜와 직관',
    quote: '인생은 선택의 연속이지.',
    img: '/char-oracle.webp',
    color: '#C4A0FF',
    locked: true,
    cats: [
      { name: '코코', img: '/char-coco.webp' },
      { name: '비비', img: '/char-bibi.webp' },
      { name: '애쉬', img: '/char-ash.webp' },
    ],
  },
  {
    name: 'Ian',
    nameKo: '이안',
    role: '분석과 통찰',
    quote: '핵심은 이것이로군.',
    img: '/char-ian.webp',
    color: '#A0C4FF',
    locked: false,
  },
  {
    name: 'Luna',
    nameKo: '루나',
    role: '공감과 위로',
    quote: '괜찮아, 함께 있을게.',
    img: '/char-luna.webp',
    color: '#F4A7BB',
    locked: false,
  },
  {
    name: 'Nova',
    nameKo: '노바',
    role: 'YES or NO',
    quote: '지금 당장 GOGO',
    img: '/char-nova.webp',
    color: '#FFD07A',
    locked: false,
  },
  {
    name: 'Stella',
    nameKo: '스텔라',
    role: '확신과 희망',
    quote: '네가 약한 게 아니라 진심이라는 뜻이야.',
    img: '/char-stella.webp',
    color: '#A0FFD0',
    locked: true,
  },
]

export default function Characters() {
  const [activeIdx, setActiveIdx] = useState(2) // 루나 시작
  const isMobile = useIsMobile()
  const baseW = isMobile ? 160 : 280  
  const touchStartX = useRef(0)

  return (
    <section id="characters"
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
      onTouchEnd={(e) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > 50 && activeIdx < masters.length - 1) setActiveIdx(prev => prev + 1)
        else if (diff < -50 && activeIdx > 0) setActiveIdx(prev => prev - 1)
      }}
      style={{
        padding: 'clamp(120px, 10vw, 240px) 0',
        background: '#111111',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 배경 글로우 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at 50% 50%, ${masters[activeIdx].color}33 0%, transparent 88%)`,
          transition: 'background 0.6s ease',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>
        {/* 제목 */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 4px)' }}>
        <SectionChip label="Tarot Masters" />
          <h2 style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: 'clamp(26px,4vw,38px)', fontWeight: 700,
            letterSpacing: '-0.03em', color: '#F0EEFF', margin: 0,
          }}>아르코이의 마스터</h2>
        </div>

        {/* 캐러셀 */}
        <div className="fade-in" style={{
          position: 'relative',
          height: 'clamp(320px, 45vw, 480px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {masters.map((char, i) => {
          // 순환 offset 계산 — 항상 중앙 기준
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
              <div
                key={char.name}
                onClick={() => setActiveIdx(i)}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}vw), -50%) scale(${scale})`,
                  width: `${baseW}px`,
                  height: `${baseW * 1.65}px`,
                  opacity,
                  zIndex,
                  cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {/* 카드 내부는 기존 그대로 유지 */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: absOffset === 0
                    ? `2px solid ${char.color}70`
                    : '1px solid rgba(124,91,240,0.25)',
                  boxShadow: absOffset === 0
                    ? `0 0 40px ${char.color}30, 0 16px 48px rgba(0,0,0,0.5)`
                    : '0 4px 16px rgba(0,0,0,0.3)',
                  position: 'relative',
                  transition: 'all 0.6s ease',
                }}>
                  <img
                    src={char.img}
                    alt={char.nameKo}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: char.locked
                        ? 'brightness(0.5) saturate(0.15)'
                        : absOffset === 0
                          ? 'brightness(1.05)'
                          : 'brightness(0.7) saturate(0.88)',
                      transition: 'filter 0.6s ease',
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '45%',
                    background: 'linear-gradient(to top, rgba(13,11,30,0.8), transparent)',
                  }} />
                  {char.locked && (
                    <div style={{
                      position: 'absolute',
                      top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '28px',
                      opacity: 0.7,
                    }}>🔒</div>
                  )}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px', left: 0, right: 0,
                    textAlign: 'center',
                  }}>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 'clamp(16px, 2vw, 22px)',
                      fontWeight: 400,
                      letterSpacing: '0.05em',
                      color: char.locked ? 'rgba(255,255,255,0.21)' : char.color,
                      textTransform: 'uppercase',
                    }}>{char.name}</p>
                    <p style={{
                      fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                      fontSize: 'clamp(14px, 2vw, 15px)',
                      fontWeight: 300,
                      color: char.locked ? 'rgba(255,255,255,0.25)' : '#F0EEFF',
                    }}>{char.nameKo}</p>
                  </div>
                  {char.cats && (
                    <div style={{
                      position: 'absolute',
                      bottom: isMobile ? '72px' : '88px', 
                      left: 0, right: 0,
                      display: 'flex', gap: '8px',
                      justifyContent: 'center',
                    }}>
                      {char.cats.map((cat, j) => (
                        <div key={j} style={{
                          width: isMobile ? '33px' : '54px',
                          height: isMobile ? '33px' : '54px',
                          borderRadius: '50%', overflow: 'hidden',
                          border: '1px solid rgba(244,167,187)',
                        }}>
                          <img src={cat.img} alt={cat.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
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
        <div style={{
          textAlign: 'center',
          marginTop: 'clamp(16px, 3vw, 32px)',
          minHeight: '70px',
        }}>
          {!masters[activeIdx].locked ? (
            <div>
              <p style={{
                fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                fontSize: 'clamp(14px, 1.6vw, 15px)',
                fontWeight: 400,
                color: masters[activeIdx].color,
                marginBottom: '7px',
                opacity: 0.8,
              }}>{masters[activeIdx].role}</p>
              <p style={{
                fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
                fontSize: 'clamp(17px, 2vw, 18px)',
                fontWeight: 400,
                color: 'rgba(240,238,255)',
                fontStyle: 'italic',
              }}>"{masters[activeIdx].quote}"</p>
            </div>
          ) : (
            <p style={{
              fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              color: 'rgba(240,238,255,0.3)',
            }}>✦ coming soon</p>
          )}
        </div>
      </div>
    </section>
  )
}
