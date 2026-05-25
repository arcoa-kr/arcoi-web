import { useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'
import SectionChip from '../components/SectionChip'

const masters = [
  {
    name: 'Oracle',
    nameKo: '오라클',
    role: '지혜의 현자',
    quote: '인생이라는 긴 여정에서 잠시 쉬어가는 지혜도 필요하단다.',
    img: '/char-oracle.png',
    color: '#C4A0FF',
    locked: true,
    cats: [
      { name: '코코', img: '/char-coco.png' },
      { name: '비비', img: '/char-bibi.png' },
      { name: '애쉬', img: '/char-ash.png' },
    ],
  },
  {
    name: 'Ian',
    nameKo: '이안',
    role: '통찰의 용',
    quote: '지금 가장 중요한 변화는 이것이야.',
    img: '/char-ian.png',
    color: '#A0C4FF',
    locked: false,
  },
  {
    name: 'Luna',
    nameKo: '루나',
    role: '다정한 타로 마스터',
    quote: '마음이 무거울 때, 내가 함께 한다는 걸 기억해.',
    img: '/char-luna.png',
    color: '#F4A7BB',
    locked: false,
  },
  {
    name: 'Nova',
    nameKo: '노바',
    role: '행동의 별',
    quote: '고민하는 시간이 아까워, 바로 움직여!!!',
    img: '/char-nova.png',
    color: '#FFD07A',
    locked: false,
  },
  {
    name: 'Stella',
    nameKo: '스텔라',
    role: '희망의 빛',
    quote: '흔들려도 괜찮아. 그건 네가 약한 게 아니라 진심이라는 뜻이야.',
    img: '/char-stella.png',
    color: '#A0FFD0',
    locked: true,
  },
]

// 중앙 기준 순서 배열 생성
function getOrder(activeIdx: number, total: number) {
  const order: number[] = []
  for (let offset = -2; offset <= 2; offset++) {
    order.push(((activeIdx + offset) % total + total) % total)
  }
  return order // [왼2, 왼1, 중앙, 오1, 오2]
}

// 위치별 크기/투명도
const positionStyles = [
  { scale: 0.55, opacity: 0.4, z: 1 },  // 왼쪽 끝
  { scale: 0.75, opacity: 0.7, z: 2 },  // 왼쪽
  { scale: 1,    opacity: 1,   z: 5 },  // 중앙
  { scale: 0.75, opacity: 0.7, z: 2 },  // 오른쪽
  { scale: 0.55, opacity: 0.4, z: 1 },  // 오른쪽 끝
]
export default function Characters() {
  const [activeIdx, setActiveIdx] = useState(2) // 루나 시작
  const isMobile = useIsMobile()
  const positionX = isMobile ? [-38, -18, 0, 18, 38] : [-28, -13, 0, 13, 28]
  const baseW = isMobile ? 160 : 240  

  const order = getOrder(activeIdx, masters.length)

  return (
    <section
      id="characters" 
      style={{
        padding: 'clamp(100px, 10vw, 150px) 0',
        background: '#0D0B1E',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 배경 글로우 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at 50% 50%, ${masters[activeIdx].color}18 0%, transparent 70%)`,
          transition: 'background 0.6s ease',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* 제목 */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 48px)' }}>
        <SectionChip label="Characters" />
          <h2 style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800,
            letterSpacing: '-0.03em', color: '#F0EEFF', margin: 0,
          }}>arcoi의 세계</h2>
        </div>

        {/* 카드 캐러셀 */}
        <div style={{
          position: 'relative',
          height: isMobile ? '300px' : 'clamp(320px, 45vw, 480px)', // 모바일 높이 추가
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {order.map((charIdx, posIdx) => {
            const char = masters[charIdx]
            const pos = positionStyles[posIdx]

            return (
              <div
                key={char.name}
                onClick={() => setActiveIdx(charIdx)}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${positionX[posIdx]}vw), -50%) scale(${pos.scale})`,
                  width: `${baseW}px`,
                  height: `${baseW * 1.5}px`,
                  opacity: pos.opacity,
                  zIndex: pos.z,
                  cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: posIdx === 2
                    ? `2px solid ${char.color}70`
                    : '1px solid rgba(124,91,240,0.15)',
                  boxShadow: posIdx === 2
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
                        ? 'brightness(0.15) saturate(0)'
                        : posIdx === 2
                          ? 'brightness(1.05)'
                          : 'brightness(0.5) saturate(0.6)',
                      transition: 'filter 0.6s ease',
                    }}
                  />

                  {/* 하단 그라데이션 */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '45%',
                    background: 'linear-gradient(to top, rgba(13,11,30,0.9), transparent)',
                  }} />

                  {/* 잠금 */}
                  {char.locked && (
                    <div style={{
                      position: 'absolute',
                      top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '24px',
                      opacity: 0.5,
                    }}>🔒</div>
                  )}

                  {/* 이름 */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px', left: 0, right: 0,
                    textAlign: 'center',
                  }}>
                    <p style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '9px', fontWeight: 500,
                      letterSpacing: '0.15em',
                      color: char.locked ? 'rgba(255,255,255,0.2)' : char.color,
                      textTransform: 'uppercase',
                      marginBottom: '2px',
                    }}>{char.name}</p>
                    <p style={{
                      fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                      fontSize: '14px', fontWeight: 700,
                      color: char.locked ? 'rgba(255,255,255,0.15)' : '#F0EEFF',
                    }}>{char.locked ? '???' : char.nameKo}</p>
                  </div>

                  {/* 오라클 고양이 */}
                  {char.cats && (
                    <div style={{
                      position: 'absolute',
                      bottom: '52px', left: 0, right: 0,
                      display: 'flex', gap: '4px',
                      justifyContent: 'center',
                    }}>
                      {char.cats.map((cat, j) => (
                        <div key={j} style={{
                          width: '22px', height: '22px',
                          borderRadius: '50%', overflow: 'hidden',
                          border: '1.5px solid rgba(244,167,187,0.4)',
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
                fontSize: 'clamp(13px, 1.6vw, 15px)',
                fontWeight: 400,
                color: masters[activeIdx].color,
                marginBottom: '8px',
                opacity: 0.8,
              }}>{masters[activeIdx].role}</p>
              <p style={{
                fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
                fontSize: 'clamp(15px, 2vw, 19px)',
                fontWeight: 400,
                color: 'rgba(240,238,255,0.65)',
                fontStyle: 'italic',
              }}>"{masters[activeIdx].quote}"</p>
            </div>
          ) : (
            <p style={{
              fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              color: 'rgba(240,238,255,0.3)',
            }}>✦ 본앱에서 만나보세요</p>
          )}
        </div>
      </div>
    </section>
  )
}
