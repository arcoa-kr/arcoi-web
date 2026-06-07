import useIsMobile from '../hooks/useIsMobile'
import StibeeForm from '../components/StibeeForm'

export default function Footer() {
  const isMobile = useIsMobile()

  const linkStyle = "font-accent text-[13.5px] text-text/55 font-light no-underline hover:text-text/90 transition-colors duration-300"
  const headingStyle = "font-accent text-sm font-medium text-text/90 mb-1"

  return (
    <footer className="bg-bg-footer px-6 md:px-7 pt-10 md:pt-10 pb-[54px] md:pb-[62px]">
      <div className={`max-w-[1080px] mx-auto flex ${isMobile ? 'flex-col' : 'flex-row'} justify-between ${isMobile ? 'gap-10' : 'gap-12'} mb-7`}>

        {/* 로고 + 사업자 정보 */}
        <div className={isMobile ? 'order-2' : 'order-1'}>
          <img src="/ARCOA.kr.png" alt="ARCOA" className="h-20 object-contain mb-3" />
          <div className="font-body text-sm font-light text-text/55 leading-[1.7]">
            <p className="m-0">사업자등록번호 : 343-02-03607</p>
            <p className="m-0">대표 : 박지안</p>
            <p className="m-0">문의 : help@arcoa.kr</p>
          </div>
        </div>

        {/* 링크 그룹 */}
        <div className={`flex ${isMobile ? 'gap-10' : 'gap-[60px]'} ${isMobile ? 'order-1' : 'order-2'}`}>
          {/* Explore */}
          <div className="flex flex-col gap-3.5">
            <h3 className={headingStyle}>Explore</h3>
            {[
              { label: 'Why arcoi', href: '#empathy' },
              { label: 'How it works', href: '#how-it-works' },
              { label: 'Characters', href: '#characters' },
              { label: 'FAQ', href: '#faq' },
            ].map(link => (
              <a key={link.label} href={link.href} className={linkStyle}>{link.label}</a>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3.5">
            <h3 className={headingStyle}>Support</h3>
            <a
              href="https://arcoa-kr.notion.site/36bb0d619bef81b996f8c783454caa29"
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyle}
              onClick={() => {
                window.gtag?.('event', 'click_contact', {
                  app_name: 'arcoi',
                  link_location: 'footer',
                });
              }}
            >
              Contact
            </a>
            <a href="https://arcoa-kr.notion.site/arcoi-Terms-of-Service-36bb0d619bef81a0b508f91e907a5f30" target="_blank" rel="noopener noreferrer" className={linkStyle}>Terms of Service</a>
            <a href="https://arcoa-kr.notion.site/arcoi-Privacy-Policy-36bb0d619bef81a0856fc813591277a7" target="_blank" rel="noopener noreferrer" className={`${linkStyle} font-medium !text-text/80 hover:!text-text`}>Privacy Policy</a>
          </div>

          {/* Family */}
          <div className="flex flex-col gap-3.5">
            <h3 className={headingStyle}>Family</h3>
            {[
              { label: 'ARCOA', href: 'https://arcoa.kr' },
              { label: 'peeca', href: 'https://peeca.arcoa.kr' },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>{link.label}</a>
            ))}
          </div>
        </div>
      </div>

      {/* 카피라이트 + 메일링 */}
      <div className={`max-w-[1080px] mx-auto border-t border-text/15 mt-2 pt-6 flex ${isMobile ? 'flex-col items-start' : 'flex-row items-center'} justify-between gap-5`}>
        <p className="font-accent text-sm font-light text-text/55 m-0">
          © 2026 arcoi by <a href="https://arcoa.kr" target="_blank" rel="noopener noreferrer"  className="text-text/77 underline underline-offset-[2.5px] decoration-[0.5px]">ARCOA</a>
        </p>

        <div className="flex items-center gap-3">
          <span className="font-body text-[15px] leading-5 text-text/55">
            소식 받기
          </span>
          <StibeeForm />
        </div>
      </div>
    </footer>
  )
}
