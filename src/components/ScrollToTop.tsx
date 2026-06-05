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
      className={`fixed bottom-[60px] right-[44px] w-11 h-11 rounded-full border-[1.5px] border-pink-soft/30 bg-bg-deep/80 backdrop-blur-md text-pink-soft text-xl cursor-pointer transition-opacity duration-300 z-[100] ${show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
    >
      ↑
    </button>
  )  
}
