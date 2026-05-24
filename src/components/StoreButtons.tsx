const STORE_LINKS = {
  toss: 'https://toss.im/arcoi',
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
        >
          <img src="/Toss.png" alt="토스에서 열기" style={{ height: '40px' }} />
        </a>
      </div>

      {/* 데스크톱: 안내 문구 */}
      <div className="hidden sm:flex items-center" style={{ color: '#cccccc', fontSize: '14px' }}>
        <img src="/toss_w.png" alt="toss" style={{ height: '18px', marginRight: '4px' }} />
        <p>미니앱에서 <b style={{ color: '#eeeeee', fontSize: '15px' }}>아르코이</b>를 검색해 보세요.</p>
      </div>
    </div>
  )
}
