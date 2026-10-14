const STORE_LINKS = {
  toss: 'https://tossminiapp.com/d/arcoi/launch?referrer=appsintoss.common_module_share',
}

export default function StoreButtons() {
  return (
    <div>
      <a
        href={STORE_LINKS.toss}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          window.gtag?.('event', 'click_store', {
            app_name: 'arcoi',
            store: 'toss',
            device: window.innerWidth < 640 ? 'mobile' : 'desktop',
          })
        }}
      >
        <img
          src="/Toss.png"
          alt="토스에서 열기"
          className="h-10"
        />
      </a>
    </div>
  )
}
