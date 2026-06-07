import StoreButtons from '../components/StoreButtons'
import SectionChip from '../components/SectionChip'
import useIsMobile from '../hooks/useIsMobile'

export default function Teaser() {
  const isMobile = useIsMobile()

  return (
    <section id="teaser"
      className="relative overflow-hidden text-center"
      style={{ padding: isMobile ? '120px 24px' : 'clamp(200px, 12vw, 260px) 24px' }}
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/teaser-bg.webp)' }}
      />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-[rgba(8,8,16,0.33)] z-1" />

      {/* 상단 페이드 */}
      <div className="absolute top-0 left-0 right-0 h-[120px] z-2"
        style={{ background: 'linear-gradient(to bottom, #161923, transparent)' }}
      />

      <div className="fade-in max-w-[640px] mx-auto relative z-3">
        <SectionChip label="Coming Soon" />

        {/* Main copy */}
        <h2 className="fade-in font-display font-bold tracking-[-0.03em] text-text leading-[1.3] mb-4"
          style={{ fontSize: 'clamp(33px, 4.5vw, 48px)' }}
        >
          아르코이의 이야기는<br />
          <span className="bg-gradient-to-r from-purple-soft to-pink-soft bg-clip-text text-transparent">
            이제 시작이에요.
          </span>
        </h2>

        {/* Sub copy */}
        <p className="fade-in font-body font-light text-[#DAD0EF] tracking-[-0.01em] leading-[1.65] mt-8 mb-5"
          style={{ fontSize: 'clamp(14px, 2vw, 17px)' }}
        >
          2026년 10월, 정식으로 만나요.<br />
          5명의 마스터와 함께하는 더 넓은 세계가 시작됩니다.
        </p>

        {/* 스토어 버튼 */}
        <div className="fade-in flex justify-center mb-12">
          <StoreButtons />
        </div>

        {/* 메인 CTA — 월페이퍼 */}
        <div className="fade-in flex justify-center mb-7">
          <a
            href="https://arcoa.kr/wallpaper"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.('event', 'click_wallpaper', {
                app_name: 'arcoi',
                link_location: 'main_cta',
              });
            }}
          >
            월페이퍼 둘러보기
          </a>
        </div>
      </div>
    </section>
  )
}
