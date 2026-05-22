import StarCanvas from './StarCanvas'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #0D0B1E 0%, #1A1A2E 40%, #2D1B4E 70%, #1A1A2E 100%)',
      }}
    >
      {/* Video background (placeholder — hero-bg.mp4 will be added manually) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.6,
        }}
      >
        <source src="./hero-bg.mp4" type="video/mp4" />
        {/* Fallback: gradient background already set on section */}
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,11,30,0.55) 0%, rgba(26,26,46,0.45) 50%, rgba(13,11,30,0.7) 100%)',
          zIndex: 2,
        }}
      />

      {/* Star particles */}
      <StarCanvas />

      {/* Luna image placeholder */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: '8%',
          width: 'clamp(220px, 32vw, 480px)',
          height: 'clamp(320px, 50vw, 680px)',
          zIndex: 3,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        <div
          className="placeholder-img"
          style={{ width: '100%', height: '100%', borderRadius: '24px 24px 0 0', fontSize: '13px' }}
        >
          Luna Image Here<br />(hero-luna.png)
        </div>
      </div>

      {/* Main content */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '680px',
        }}
      >
        {/* Brand badge */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            color: 'rgba(244, 167, 187, 0.8)',
            marginBottom: '28px',
            textTransform: 'uppercase',
          }}
        >
          arcoi by ARCOA
        </p>

        {/* Main copy */}
        <h1
          style={{
            fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
            fontSize: 'clamp(28px, 5.5vw, 52px)',
            fontWeight: 700,
            lineHeight: 1.35,
            letterSpacing: '-0.03em',
            color: '#F0EEFF',
            marginBottom: '20px',
            textShadow: '0 2px 24px rgba(124, 91, 240, 0.3)',
          }}
        >
          딱히 슬프진 않은데<br />
          괜찮지도 않은 날,<br />
          <span
            style={{
              background: 'linear-gradient(90deg, #C4A0FF, #F4A7BB)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            타로 한 장이
          </span>
          <br />
          오늘의 말문을 열어줘요.
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
            fontSize: 'clamp(14px, 2vw, 17px)',
            fontWeight: 400,
            color: 'rgba(240, 238, 255, 0.65)',
            marginBottom: '40px',
            letterSpacing: '-0.01em',
          }}
        >
          arcoi — 하루 한 장, 타로일기
        </p>

        {/* CTA */}
        <a
          href="https://toss.im/arcoi"
          className="btn-glow"
          target="_blank"
          rel="noopener noreferrer"
        >
          토스에서 아르코이 검색하기
        </a>
      </div>

      {/* Scroll arrow */}
      <div
        className="bounce-down"
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          color: 'rgba(240, 238, 255, 0.4)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}
