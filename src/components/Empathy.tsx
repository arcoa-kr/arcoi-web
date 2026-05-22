const cards = [
  {
    icon: '🌙',
    situation: '오늘 기분이 어때?',
    detail: '물으면 멈칫하게 되는 날',
    answer: '타로가 대신 말해줘요.',
  },
  {
    icon: '✦',
    situation: '적어야 할 것 같은데',
    detail: '뭘 쓸지 모르겠는 날',
    answer: '한 줄이면 충분해요.',
  },
  {
    icon: '🌸',
    situation: '괜찮은 것 같은데',
    detail: '계속 밋밋한 날',
    answer: '마음계절로 돌아봐요.',
  },
]

export default function Empathy() {
  return (
    <section
      style={{
        padding: 'clamp(72px, 10vw, 120px) 24px',
        background: 'linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)',
      }}
    >
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        {/* Section title */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: 'rgba(244, 167, 187, 0.7)',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            Why arcoi
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
            이런 날 있지 않나요?
          </h2>
        </div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="fade-in glass-card"
              style={{
                padding: 'clamp(28px, 4vw, 40px) clamp(24px, 3vw, 32px)',
                cursor: 'default',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(124, 91, 240, 0.2)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div style={{ fontSize: '28px', marginBottom: '20px' }}>{card.icon}</div>

              {/* Situation */}
              <p
                style={{
                  fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                  fontSize: 'clamp(16px, 2.2vw, 19px)',
                  fontWeight: 600,
                  color: '#F0EEFF',
                  lineHeight: 1.45,
                  marginBottom: '4px',
                  letterSpacing: '-0.02em',
                }}
              >
                "{card.situation}
              </p>
              <p
                style={{
                  fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                  fontSize: 'clamp(16px, 2.2vw, 19px)',
                  fontWeight: 600,
                  color: '#F0EEFF',
                  lineHeight: 1.45,
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                }}
              >
                {card.detail}"
              </p>

              {/* Divider */}
              <div
                style={{
                  width: '32px',
                  height: '1.5px',
                  background: 'linear-gradient(90deg, #7C5BF0, #F4A7BB)',
                  borderRadius: '2px',
                  marginBottom: '16px',
                }}
              />

              {/* Answer */}
              <p
                style={{
                  fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                  fontSize: 'clamp(14px, 1.8vw, 16px)',
                  fontWeight: 400,
                  color: 'rgba(244, 167, 187, 0.9)',
                  letterSpacing: '-0.01em',
                }}
              >
                {card.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
