export default function Footer() {
  return (
    <footer
      style={{
        padding: 'clamp(40px, 6vw, 64px) 24px',
        background: '#0D0B1E',
        borderTop: '1px solid rgba(124, 91, 240, 0.1)',
      }}
    >
      <div
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
        }}
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              color: '#F0EEFF',
              letterSpacing: '-0.01em',
              marginBottom: '4px',
            }}
          >
            arcoi
          </p>
          <p
            style={{
              fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
              fontSize: '12px',
              color: 'rgba(240, 238, 255, 0.35)',
              letterSpacing: '0.02em',
            }}
          >
            by ARCOA
          </p>
        </div>

        {/* Links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 24px',
            alignItems: 'center',
          }}
        >
          {[
            { label: 'arcoa.kr', href: 'https://arcoa.kr' },
            { label: 'Threads', href: 'https://www.threads.com/@arcoa.kr' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/arcoa-kr/' },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Pretendard Variable', 'Pretendard', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                color: 'rgba(240, 238, 255, 0.45)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(196, 160, 255, 0.85)')}
              onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = 'rgba(240, 238, 255, 0.45)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '11px',
            color: 'rgba(240, 238, 255, 0.25)',
            letterSpacing: '0.02em',
            width: '100%',
            textAlign: 'center',
            marginTop: '8px',
          }}
        >
          © 2026 ARCOA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
