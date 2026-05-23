import StarCanvas from './StarCanvas'
import StoreButtons from './StoreButtons'

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
      }}
    >
      {/* Luna background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-luna.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          zIndex: 0,
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(13,11,30,0.7) 0%, rgba(13,11,30,0.3) 35%, transparent 55%)',
          zIndex: 1,
        }}
      />

      {/* Bottom fade into next section */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to bottom, transparent, #1A1A2E)',
          zIndex: 2,
        }}
      />

      {/* Star particles */}
      <StarCanvas />

      {/* Main content — left aligned */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'left',
          padding: '0 48px 100px',
          maxWidth: '950px',
          width: '100%',
        }}
      >
        {/* Brand badge */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '15px',
            fontWeight: 300,
            letterSpacing: '1px',
            color: '#F4A7BB',
            marginBottom: '20px',
            marginLeft: '4px'
          }}
        >
          arcoi by ARCOA
        </p>

        {/* Main copy */}
        <h1
          style={{
            fontFamily: "'Nanum Myeongjo', 'Pretendard Variable', serif",
            fontSize: 'clamp(48px, 4.5vw, 50px)',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '-0.03em',
            color: '#F0EEFF',
            marginBottom: '40px',
            textShadow: '0 2px 32px rgba(13,11,30,0.8)',
          }}
        >
          하루 한 장, 타로 일기
        </h1>

        {/* Sub copy */}
        <p
          style={{
            fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 300,
            color: '#dddddd',
            marginBottom: '40px',
            letterSpacing: '-0.01em',
          }}
        >
          딱히 슬프진 않아도<br />
          괜찮지도 않은 하루하루...<br />
          타로 한 장이<br />
          오늘의 말문을 열어줘.
        </p>

        {/* CTA */}
        <div>    
              <StoreButtons />
        </div>
          
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
