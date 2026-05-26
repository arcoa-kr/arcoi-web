import { useEffect, useState } from 'react'
import useIsMobile from '../hooks/useIsMobile'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isMobile) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '60px',
        right: '44px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '1.5px solid rgba(255,202,222,0.3)',
        background: 'rgba(12,15,29,0.8)',
        backdropFilter: 'blur(8px)',
        color: '#FDCADE',
        fontSize: '20px',
        cursor: 'pointer',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
        zIndex: 100,
      }}
    >
      ↑
    </button>
  )
}
