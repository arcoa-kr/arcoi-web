import { useState } from 'react'
import SectionChip from '../components/SectionChip'
import useIsMobile from '../hooks/useIsMobile'

const faqs = [
  {
    q: '아르코이는 어떤 앱인가요?',
    a: '고양이 코코, 비비, 애쉬가 등장하는 <br />귀여운 타로카드와 함께 마스터 루나가 다정하게 리딩하는 마음 돌봄 앱입니다.<br />현재 앱인토스의 미니앱 [ <b style="color:#ffffff">아르코이: 타로 일기</b> ]로 출시되어 있으며, 2026년 여름에 정식 출시될 예정입니다.',
  },
  {
    q: '타로를 몰라도 사용할 수 있나요?',
    a: '네. <br />질문을 준비하지 않아도 카드만 고르면, <br />타로 마스터 루나가 다정한 해설을 제공합니다.',
  },
  {
    q: '실물 타로카드도 사용할 수 있나요?',
    a: '네. <br />본인의 실물 카드로 직접 리딩할 수 있으며, 명상 타이머를 사용할 수 있습니다. <br />타로 번호를 알려주면 마스터 루나가 다정한 해설을 제공합니다.',
  },
  {
    q: '일기가 노출되나요?',
    a: '아니요. <br />일기는 매일 24시에 초기화되어 민감한 정보가 남지 않습니다. 걱정 없이 솔직하게 쓸 수 있어요. <br />[ <b style="color:#ffffff">해설 공유하기</b> ] 버튼으로 오늘의 일기와 해설을 간직해 보세요.',
  },
  {
    q: '타로 해설을 소장할 수 있나요?',
    a: '네. <br />[ <b style="color:#ffffff">해설 공유하기</b> ] 버튼을 사용하면 <br />오늘의 일기와 해설을 고품질 타로카드 배경과 함께 개인 소장할 수 있습니다.',
  },
  {
    q: '어디서 사용할 수 있나요?',
    a: '현재 앱인토스 미니앱에서 [ <b style="color:#ffffff">아르코이: 타로 일기</b> ]를 검색하면 설치와 회원가입 없이 바로 사용할 수 있어요. <br />미니앱에서 타로 마스터 루나를 먼저 경험해 볼 수 있으며, <br />2026년 8월. 각 스토어에 정식 출시 예정입니다.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const isMobile = useIsMobile()

  return (
    <section id="faq" 
      style={{
        padding: isMobile ? '60px 24px' : 'clamp(120px, 12vw, 160px) 24px',
        background: '#161923',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* 제목 */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 6vw, 48px)' }}>
        <SectionChip label="FAQ" />
          <h2 style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: 'clamp(26px,4vw,38px)', fontWeight: 700,
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
                  borderBottom: '1px solid rgba(240,238,255,0.1)',
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    padding: '20px 0',
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
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    fontWeight: 500,
                    color: isOpen ? '#F4A7BB' : '#F0EEFF',
                    textAlign: 'left',
                    letterSpacing: '-0.01em',
                    transition: 'color 0.3s ease',
                  }}>{faq.q}</span>
                  <span style={{
                    fontSize: '28px',
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
                  fontSize: 'clamp(15px, 1.6vw, 16px)',
                  fontWeight: 300,
                  color: 'rgba(240,238,255,0.7)',
                  lineHeight: 1.7,
                  letterSpacing: '-0.01em',
                  padding: '0 0 28px 0',
                }} dangerouslySetInnerHTML={{ __html: faq.a }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
