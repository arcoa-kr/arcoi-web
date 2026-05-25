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
    const elements = document.querySelectorAll<HTMLElement>('.fade-in')
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
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ minHeight: '100svh', background: '#1A1A2E' }}>
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
