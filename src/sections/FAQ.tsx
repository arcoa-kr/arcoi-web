import { useState } from 'react'
import SectionChip from '../components/SectionChip'

const faqs = [
  {
    q: '아르코이는 어떤 앱인가요?',
    a: '하루 한 장 타로카드를 뽑고 감정과 짧은 일기를 기록하는 셀프케어 앱이에요. 귀여운 고양이 타로카드와 마스터 루나가 마음을 읽어줍니다.',
  },
  {
    q: '타로를 몰라도 사용할 수 있나요?',
    a: '네. 질문을 준비하지 않아도 카드만 뽑으면 루나가 다정한 해설을 제공합니다.',
  },
  {
    q: '실물 타로카드도 사용할 수 있나요?',
    a: '네. 온라인 뽑기 외에 직접 가진 실물 카드로도 리딩할 수 있으며, 명상 타이머도 제공됩니다.',
  },
  {
    q: '일기가 다른 사람에게 보이나요?',
    a: '아니요. 일기는 매일 24시에 초기화되어 민감한 정보가 남지 않습니다. 걱정 없이 솔직하게 쓸 수 있어요.',
  },
  {
    q: '기록을 저장할 수 있나요?',
    a: '네. 공유하기 기능으로 타로카드 배경의 고해상도 이미지를 저장하여 일기와 해설을 소장할 수 있습니다.',
  },
  {
    q: '어디서 사용할 수 있나요?',
    a: '토스 앱에서 "아르코이"를 검색하면 설치 없이 바로 사용할 수 있어요. 2026년 여름에 독립 앱으로도 출시 예정입니다.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" 
      style={{
        padding: 'clamp(100px, 12vw, 150px) 24px',
        background: '#080810',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* 제목 */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
        <SectionChip label="FAQ" />
          <h2 style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800,
            letterSpacing: '-0.03em', color: '#F0EEFF', margin: 0,
          }}>자주 묻는 질문</h2>
        </div>

        {/* 아코디언 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i

            return (
              <div
                key={i}
                style={{
                  borderBottom: '1px solid rgba(240,238,255,0.08)',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    padding: '24px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <span style={{
                    fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                    fontSize: 'clamp(15px, 2vw, 17px)',
                    fontWeight: 600,
                    color: isOpen ? '#F4A7BB' : '#F0EEFF',
                    textAlign: 'left',
                    letterSpacing: '-0.02em',
                    transition: 'color 0.3s ease',
                  }}>{faq.q}</span>
                  <span style={{
                    fontSize: '20px',
                    color: isOpen ? '#F4A7BB' : 'rgba(240,238,255,0.3)',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'all 0.3s ease',
                    flexShrink: 0,
                  }}>+</span>
                </button>

                <div style={{
                  maxHeight: isOpen ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  opacity: isOpen ? 1 : 0,
                }}>
                  <p style={{
                    fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
                    fontSize: 'clamp(13px, 1.6vw, 15px)',
                    fontWeight: 400,
                    color: 'rgba(240,238,255,0.55)',
                    lineHeight: 1.7,
                    letterSpacing: '-0.01em',
                    padding: '0 0 24px 0',
                  }}>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
