import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  vx: number
  vy: number
}

export default function StarCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -999, y: -999 })
  const starsRef = useRef<Star[]>([])
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      starsRef.current = Array.from({ length: 120 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        speed: Math.random() * 0.3 + 0.05,
        vx: 0,
        vy: 0,
      }))
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mouse = mouseRef.current

      starsRef.current.forEach(star => {
        const dx = mouse.x - star.x
        const dy = mouse.y - star.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Gentle attraction toward cursor within 150px
        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.4
          star.vx += (dx / dist) * force
          star.vy += (dy / dist) * force
        }

        star.vx *= 0.92
        star.vy *= 0.92
        star.x += star.vx
        star.y += star.vy

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Twinkle
        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.1, Math.min(0.85, star.opacity))

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240, 230, 255, ${star.opacity})`
        ctx.fill()
      })

      animRef.current = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="star-canvas"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
    />
  )
}
