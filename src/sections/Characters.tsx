const characters = [
  {
    name: 'Luna',
    nameKo: '루나',
    role: '타로 마스터',
    desc: '당신의 마음을 다정하게 읽어줘요.',
    img: 'placeholder-luna.png',
    color: '#C4A0FF',
  },
  {
    name: 'Coco',
    nameKo: '코코',
    role: '아기 고양이',
    desc: '귀여운 타로카드의 주인공이에요.',
    img: 'placeholder-coco.png',
    color: '#F4A7BB',
  },
  {
    name: 'Bibi & Ash',
    nameKo: '비비 & 애쉬',
    role: '코코의 친구들',
    desc: '함께 당신을 응원해요.',
    img: 'placeholder-friends.png',
    color: '#A0C4FF',
  },
]

export default function Characters() {
  return (
    <section
      style={{
        padding: 'clamp(72px, 10vw, 120px) 24px',
        background: 'linear-gradient(180deg, #16213E 0%, #0D0B1E 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background star dots */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(1.5px 1.5px at 15% 20%, rgba(196, 160, 255, 0.35) 0%, transparent 100%),
            radial-gradient(1px 1px at 40% 60%, rgba(244, 167, 187, 0.3) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 70% 15%, rgba(196, 160, 255, 0.25) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 75%, rgba(244, 167, 187, 0.2) 0%, transparent 100%),
            radial-gradient(2px 2px at 55% 40%, rgba(255, 255, 255, 0.15) 0%, transparent 100%)
          `,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1080px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section title */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 'clamp(48px, 7vw, 72px)' }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: 'rgba(196, 160, 255, 0.7)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Characters
          </p>
          <h2
            style={{
              fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
              fontSize: 'clamp(24px, 4vw, 38px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: '#F0EEFF',
              margin: 0,
            }}
          >
            arcoi의 세계
          </h2>
        </div>

        {/* Character cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'clamp(20px, 3vw, 32px)',
          }}
        >
          {characters.map((char, i) => (
            <div
              key={i}
              className="fade-in char-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 'clamp(32px, 4vw, 44px) 24px',
                background: 'rgba(13, 11, 30, 0.5)',
                border: `1px solid rgba(${char.color === '#C4A0FF' ? '196,160,255' : char.color === '#F4A7BB' ? '244,167,187' : '160,196,255'}, 0.15)`,
                borderRadius: '24px',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-6px)'
                el.style.borderColor = `rgba(${char.color === '#C4A0FF' ? '196,160,255' : char.color === '#F4A7BB' ? '244,167,187' : '160,196,255'}, 0.4)`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = `rgba(${char.color === '#C4A0FF' ? '196,160,255' : char.color === '#F4A7BB' ? '244,167,187' : '160,196,255'}, 0.15)`
              }}
            >
              {/* Circular image */}
              <div
                className="char-img-wrap"
                style={{
                  width: 'clamp(100px, 14vw, 140px)',
                  height: 'clamp(100px, 14vw, 140px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '24px',
                  border: `2px solid rgba(${char.color === '#C4A0FF' ? '196,160,255' : char.color === '#F4A7BB' ? '244,167,187' : '160,196,255'}, 0.3)`,
                  transition: 'box-shadow 0.3s ease',
                  flexShrink: 0,
                }}
              >
                <div
                  className="placeholder-img"
                  style={{ width: '100%', height: '100%', borderRadius: '50%', fontSize: '11px' }}
                >
                  {char.img}
                </div>
              </div>

              {/* Name */}
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  color: char.color,
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                  opacity: 0.85,
                }}
              >
                {char.name}
              </p>
              <h3
                style={{
                  fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                  fontSize: 'clamp(17px, 2.2vw, 20px)',
                  fontWeight: 700,
                  color: '#F0EEFF',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px',
                }}
              >
                {char.nameKo}
              </h3>
              <p
                style={{
                  fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                  fontSize: '13px',
                  fontWeight: 400,
                  color: char.color,
                  marginBottom: '12px',
                  opacity: 0.75,
                }}
              >
                {char.role}
              </p>
              <p
                style={{
                  fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                  fontSize: 'clamp(13px, 1.6vw, 15px)',
                  fontWeight: 400,
                  color: 'rgba(240, 238, 255, 0.6)',
                  lineHeight: 1.6,
                  letterSpacing: '-0.01em',
                }}
              >
                {char.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Teaser for more masters */}
        <div
          className="fade-in"
          style={{
            textAlign: 'center',
            marginTop: 'clamp(40px, 6vw, 60px)',
            padding: '24px',
            background: 'rgba(124, 91, 240, 0.06)',
            borderRadius: '16px',
            border: '1px solid rgba(124, 91, 240, 0.12)',
          }}
        >
          <p
            style={{
              fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
              fontSize: 'clamp(13px, 1.8vw, 15px)',
              color: 'rgba(240, 238, 255, 0.5)',
              letterSpacing: '-0.01em',
            }}
          >
            ✦ &nbsp;본앱에서 더 많은 마스터들이 기다리고 있어요
          </p>
        </div>
      </div>
    </section>
  )
}
