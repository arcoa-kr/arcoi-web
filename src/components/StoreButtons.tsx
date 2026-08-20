const STORE_LINKS = {
  toss: 'https://minion.toss.im/NyLEEyVc',
}

export default function StoreButtons() {
  return (
    <div>
      {/* 모바일: 토스 버튼 */}
      <div className="block sm:hidden">
        <a
          href={STORE_LINKS.toss}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            window.gtag?.('event', 'click_store', {
              app_name: 'arcoi',
              store: 'toss',
              device: 'mobile',
            });
          }}
        >
          <img src="/Toss.png" alt="토스에서 열기" className="h-10" />
        </a>
      </div>

      {/* 데스크톱: 안내 문구 */}
      <div className="hidden sm:flex items-center text-[#cccccc] text-sm">
        <img src="/toss_w.png" alt="toss" className="h-[18px] mr-1" />
        <p>미니앱에서 <b className="text-[#eeeeee] text-[15px]">아르코이</b>를 검색해 보세요.</p>
      </div>
    </div>
  )
}
