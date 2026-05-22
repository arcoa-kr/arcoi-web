import { useEffect } from 'react'
import Hero from './components/Hero'
import Empathy from './components/Empathy'
import HowItWorks from './components/HowItWorks'
import Characters from './components/Characters'
import Teaser from './components/Teaser'
import Footer from './components/Footer'

function App() {
  // Scroll reveal
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
      <Teaser />
      <Footer />
    </div>
  )
}

export default App
