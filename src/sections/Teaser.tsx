import StoreButtons from '../components/StoreButtons'
import SectionChip from '../components/SectionChip'
import useIsMobile from '../hooks/useIsMobile'

export default function Teaser() {
  const isMobile = useIsMobile()

  return (
    <section id="teaser" 
      style={{
        padding: isMobile ? '120px 24px' : 'clamp(200px, 12vw, 260px) 24px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* 배경 이미지 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/teaser-bg.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }} />

      {/* 어두운 오버레이 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(8,8,16,0.33)',
        zIndex: 1,
      }} />

      {/* 상단 페이드 */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '120px',
        background: 'linear-gradient(to bottom, #161923, transparent)',
        zIndex: 2,
      }} />

      <div className="fade-in" style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
        {/* Badge */}
        <SectionChip label="Coming Soon" />

        {/* Main copy */}
        <h2
          className="fade-in"
          style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: 'clamp(32px, 4.5vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#F0EEFF',
            lineHeight: 1.3,
            marginBottom: '16px',
          }}
        >
          아르코이의 이야기는<br />
          <span style={{
            background: 'linear-gradient(90deg, #C4A0FF, #FDCADE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            이제 시작이에요.
          </span>
        </h2>

        {/* Sub copy */}
        <p
          className="fade-in"
          style={{
            fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
            fontSize: 'clamp(14px, 2vw, 17px)',
            fontWeight: 300,
            color: '#DAD0EF',
            letterSpacing: '-0.01em',
            margin: '33px 0 20px',
            lineHeight: 1.65,
          }}
        >
          2026년 8월, 정식으로 만나요.<br />
          5명의 마스터와 함께하는 더 넓은 세계를 기다려 주세요.
        </p>

        {/* 스토어 버튼 */}
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '48px',
          }}
        >
          <StoreButtons />
        </div>

        {/* 메인 CTA — 월페이퍼 */}
        <div
          className="fade-in"
          style={{
            justifyContent: 'center',
            marginBottom: '28px',
          }}
        >
          <a href="https://arcoa.kr/wallpaper" className="btn-outline" target="_blank" rel="noopener noreferrer">
            월페이퍼 둘러보기
          </a>
        </div>

      </div>
    </section>

  )
}
