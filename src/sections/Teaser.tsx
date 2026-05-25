import StoreButtons from '../components/StoreButtons'

export default function Teaser() {
  return (
    <section
      style={{
        padding: 'clamp(80px, 12vw, 140px) 24px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* 배경 이미지 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(/teaser-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0,
      }} />

      {/* 어두운 오버레이 */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(8,8,16,0.7)',
        zIndex: 1,
      }} />

      {/* 상단 페이드 */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '120px',
        background: 'linear-gradient(to bottom, #080810, transparent)',
        zIndex: 2,
      }} />

      {/* 하단 페이드 */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '120px',
        background: 'linear-gradient(to top, #080810, transparent)',
        zIndex: 2,
      }} />

      <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
        {/* Badge */}
        <div
          className="fade-in"
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(244,167,187,0.1)',
            border: '1px solid rgba(244,167,187,0.25)',
            borderRadius: '50px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            color: 'rgba(244,167,187,0.85)',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}
        >
          Coming Soon
        </div>

        {/* Main copy */}
        <h2
          className="fade-in"
          style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: 'clamp(26px, 4.5vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#F0EEFF',
            lineHeight: 1.3,
            marginBottom: '16px',
          }}
        >
          arcoi의 이야기는<br />
          <span style={{
            background: 'linear-gradient(90deg, #C4A0FF, #F4A7BB)',
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
            fontWeight: 400,
            color: 'rgba(240,238,255,0.55)',
            letterSpacing: '-0.01em',
            marginBottom: '48px',
            lineHeight: 1.7,
          }}
        >
          2026년 여름, arcoi가 찾아갑니다.<br />
          5명의 마스터와 함께하는 더 넓은 세계를 기다려주세요.
        </p>

        {/* CTA */}
        <div
          className="fade-in"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <a href="https://arcoa.kr/wallpaper" className="btn-outline" target="_blank" rel="noopener noreferrer">
            월페이퍼 받으러 가기
          </a>
        </div>

        <StoreButtons />
      </div>
    </section>
  )
}
