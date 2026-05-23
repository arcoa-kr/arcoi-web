export default function StarParticles() {
  const particles = Array.from({ length: 21 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 6 + 4,
    delay: Math.random() * 10,
    duration: Math.random() * 5 + 6,
    sway: i % 3 === 0 ? 0 : Math.random() * 25 - 12,
  }))

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', overflow: 'hidden' }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-5%',
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            background: 'rgba(255, 226, 226, 0.8)',
            boxShadow: `0 0 ${p.size + 2}px rgba(196, 160, 255, 0.64)`,
            animation: `riseUp${p.id} ${p.duration}s ease-out ${p.delay}s infinite`,
          }}
        />
      ))}
      <style>{`
        ${particles.map((p) => `
          @keyframes riseUp${p.id} {
            0% {
              opacity: 0;
              transform: translateY(0px) translateX(0px);
            }
            10% {
              opacity: 0.93;
            }
            70% {
              opacity: 0.33;
            }
            100% {
              opacity: 0;
              transform: translateY(-55vh) translateX(${p.sway}px);
            }
          }
        `).join('')}
      `}</style>
    </div>
  )
}
