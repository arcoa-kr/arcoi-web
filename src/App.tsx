import { useEffect } from 'react'
import Hero from './sections/Hero'
import Empathy from './sections/Empathy'
import HowItWorks from './sections/HowItWorks'
import Characters from './sections/Characters'
import FAQ from './sections/FAQ'
import Teaser from './sections/Teaser'
import Footer from './sections/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
  
    const observe = () => {
      document.querySelectorAll<HTMLElement>('.fade-in:not(.visible)').forEach(el => {
        observer.observe(el)
      })
    }
  
    observe()
  
    // 새로 추가되는 .fade-in 요소도 감지
    const mutation = new MutationObserver(observe)
    mutation.observe(document.body, { childList: true, subtree: true })
  
    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])  

  return (
    <div style={{ minHeight: '100svh', background: '#0C0F1D' }}>
      <Hero />
      <Empathy />
      <HowItWorks />
      <Characters />
      <FAQ />
      <Teaser />
      <Footer />
    </div>
  )
}

export default App
