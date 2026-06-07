import { useState } from 'react'
import SectionChip from '../components/SectionChip'
import useIsMobile from '../hooks/useIsMobile'

const faqs = [
  {
    q: '아르코이는 어떤 앱인가요?',
    a: '마스터 오라클이 키우는 고양이 코코, 비비, 애쉬가 활약하는 오리지널 타로카드를 사용하여, 마스터 루나가 당신의 하루를 다정하게 해설해 주는 마음 돌봄 앱입니다.<br />현재 앱인토스의 미니앱 [ <b style="color:#ffffff">아르코이: 타로 일기</b> ]로 미리 만날 수 있으며, 2026년 10월에 정식 출시될 예정입니다.',
  },
  {
    q: '타로를 몰라도 사용할 수 있나요?',
    a: '네. <br />질문을 준비하지 않아도 카드만 고르면, <br />타로 마스터 루나가 해설을 진행합니다.',
  },
  {
    q: '실물 타로카드도 사용할 수 있나요?',
    a: '네. <br />본인의 실물 카드로 직접 리딩할 수 있으며,<br />명상 타이머도 사용할 수 있습니다.<br />타로 번호를 입력하면 마스터 루나가 해설을 합니다.',
  },
  {
    q: '일기는 안전한가요?',
    a: '네. <br />일기는 매일 24시에 초기화되어 민감한 정보가 전혀 남지 않습니다. 걱정 없이 솔직하게 쓸 수 있어요. <br />[ <b style="color:#ffffff">해설 공유하기</b> ] 버튼으로 오늘의 일기와 해설을 예쁘게 간직해 보세요.',
  },
  {
    q: '타로 해설을 소장할 수 있나요?',
    a: '네. <br />[ <b style="color:#ffffff">해설 공유하기</b> ] 버튼을 사용하면<br />오늘의 일기와 해설을 예쁜 타로카드 배경과 함께 소장하거나 공유할 수 있습니다.',
  },
  {
    q: '어디서 사용해 볼 수 있나요?',
    a: '현재 앱인토스 미니앱에서 [ <b style="color:#ffffff">아르코이: 타로 일기</b> ]를 검색하면, 설치와 회원가입 없이 바로 사용할 수 있어요. <br />미니앱을 통해 마스터 루나를 먼저 경험해 볼 수 있으며, <br />루나를 포함한 5명의 마스터를 모두 만날 수 있는 앱은 2026년 10월에 정식 출시 예정입니다.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const isMobile = useIsMobile()

  return (
    <section id="faq" className={`${isMobile ? 'py-[60px] px-6' : 'px-6'} bg-bg-footer relative`}
      style={{ padding: isMobile ? undefined : 'clamp(120px, 12vw, 160px) 24px' }}
    >
      <div className="max-w-[700px] mx-auto">
        {/* 제목 */}
        <div className="fade-in text-center" style={{ marginBottom: 'clamp(32px, 6vw, 48px)' }}>
          <SectionChip label="FAQ" />
          <h2 className="font-display text-text font-bold tracking-[-0.03em] m-0" style={{ fontSize: 'clamp(32px, 4vw, 42px)' }}>
            자주 묻는 질문
          </h2>
        </div>

        {/* 아코디언 */}
        <div className="fade-in flex flex-col">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div key={i} className="border-b border-text/10">
                <button
                  onClick={() => {
                    // 펼칠 때만 이벤트 (접을 때는 안 보냄)
                    if (!isOpen) {
                      window.gtag?.('event', 'open_faq', {
                        app_name: 'arcoi',
                        faq_question: faq.q,
                      })
                    }
                    setOpenIdx(isOpen ? null : i)
                  }}                  
                  className="w-full py-5 bg-transparent border-none cursor-pointer flex justify-between items-center gap-4"
                >
                  <span className={`font-body font-normal text-left tracking-[-0.01em] transition-colors duration-300 ${isOpen ? 'text-pink' : 'text-text'}`}
                    style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}
                  >
                    {faq.q}
                  </span>
                  <span className={`text-[28px] shrink-0 transition-all duration-300 ${isOpen ? 'text-pink rotate-45' : 'text-text/30 rotate-0'}`}>
                    +
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="font-body font-light text-text-sub leading-[1.7] tracking-[-0.01em] pb-7"
                    style={{ fontSize: 'clamp(15px, 1.6vw, 16px)' }}
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
