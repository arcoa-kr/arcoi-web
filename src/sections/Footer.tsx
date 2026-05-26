import useIsMobile from '../hooks/useIsMobile'

export default function Footer() {
  const isMobile = useIsMobile()

  return (
    <footer style={{
      background: '#161923',
      padding: isMobile ? '60px 24px 56px' : '80px 28px 64px',
    }}>
      <div style={{
        maxWidth: '1080px', margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: isMobile ? '40px' : '48px',
      }}>

        {/* 로고 + 사업자 정보 */}
        <div style={{ order: isMobile ? 2 : 1 }}>
          <img src="/ARCOA.kr.png" alt="ARCOA" style={{ height: '80px', objectFit: 'contain', marginBottom: '12px' }} />
          <div style={{
            fontFamily: "'Pretendard Variable','Pretendard',sans-serif",
            fontSize: '13px', color: 'rgba(240,238,255,0.35)', lineHeight: 1.8,
          }}>
            <p style={{ margin: 0 }}>사업자등록번호 : 343-02-03607</p>
            <p style={{ margin: 0 }}>대표 : 박지안</p>
            <p style={{ margin: 0 }}>문의 : help@arcoa.kr</p>
          </div>
          <p style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '12px', color: 'rgba(240,238,255,0.25)',
            marginTop: '28px',
          }}>
            © 2026 arcoi by <a href="https://arcoa.kr" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(240,238,255,0.5)', textDecoration: 'underline' }}>ARCOA</a>
          </p>
        </div>

        {/* 링크 그룹 */}
        <div style={{
          display: 'flex', gap: isMobile ? '40px' : '60px',
          order: isMobile ? 1 : 2,
        }}>
          {/* Explore */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#F0EEFF', marginBottom: '4px' }}>Explore</h3>
            {[
              { label: 'Why arcoi', href: '#empathy' },
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Characters', href: '#characters' },
              { label: 'FAQ', href: '#faq' },
            ].map(link => (
              <a key={link.label} href={link.href} style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(240,238,255,0.4)', textDecoration: 'none' }}>{link.label}</a>
            ))}
          </div>

          {/* Support */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#F0EEFF', marginBottom: '4px' }}>Support</h3>
            <a href="https://arcoa-kr.notion.site/36bb0d619bef81b996f8c783454caa29" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(240,238,255,0.4)', textDecoration: 'none' }}>Contact</a>
            <a href="https://arcoa-kr.notion.site/arcoi-Terms-of-Service-36bb0d619bef81a0b508f91e907a5f30" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(240,238,255,0.4)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="https://arcoa-kr.notion.site/arcoi-Privacy-Policy-36bb0d619bef81a0856fc813591277a7" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(240,238,255,0.55)', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</a>
          </div>

          {/* Family */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#F0EEFF', marginBottom: '4px' }}>Family</h3>
            {[
              { label: 'ARCOA', href: 'https://arcoa.kr' },
              { label: 'peeca', href: 'https://peeca.arcoa.kr' },
            ].map(link => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'rgba(240,238,255,0.4)', textDecoration: 'none' }}>{link.label}</a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
