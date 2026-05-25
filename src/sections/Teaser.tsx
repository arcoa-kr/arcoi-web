export default function Teaser() {
  return (
    <section
      style={{
        padding: 'clamp(80px, 12vw, 140px) 24px',
        background: 'linear-gradient(160deg, #2D1B4E 0%, #1A1A2E 50%, #2D1B4E 100%)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Glow orbs */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 91, 240, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(244, 167, 187, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div
          className="fade-in"
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(124, 91, 240, 0.15)',
            border: '1px solid rgba(124, 91, 240, 0.3)',
            borderRadius: '50px',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.15em',
            color: 'rgba(196, 160, 255, 0.85)',
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
            fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
            fontSize: 'clamp(26px, 4.5vw, 44px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            color: '#F0EEFF',
            lineHeight: 1.3,
            marginBottom: '16px',
          }}
        >
          arcoi의 이야기는<br />
          <span
            style={{
              background: 'linear-gradient(90deg, #C4A0FF, #F4A7BB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            이제 시작이에요.
          </span>
        </h2>

        {/* Sub copy */}
        <p
          className="fade-in"
          style={{
            fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
            fontSize: 'clamp(14px, 2vw, 17px)',
            fontWeight: 400,
            color: 'rgba(240, 238, 255, 0.55)',
            letterSpacing: '-0.01em',
            marginBottom: '48px',
            lineHeight: 1.7,
          }}
        >
          2026년 여름, arcoi가 찾아갑니다.<br />
          5명의 마스터와 함께하는 더 넓은 세계를 기다려주세요.
        </p>

        {/* CTA buttons */}
        <div
          className="fade-in"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
          }}
        >
          <a
            href="https://arcoa.kr/wallpaper"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            월페이퍼 받으러 가기
          </a>
          <a
            href="https://toss.im/arcoi"
            className="btn-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            토스에서 아르코이 검색하기
          </a>
        </div>
      </div>
    </section>
  )
}
