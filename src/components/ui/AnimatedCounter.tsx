import { useEffect, useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'

interface AnimatedCounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  label: string
  sublabel?: string
  theme?: 'default' | 'inverted'
}

export default function AnimatedCounter({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  label,
  sublabel,
  theme = 'default',
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 })
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-center">
      <div className={`text-5xl font-black tracking-tight lg:text-6xl ${theme === 'inverted' ? 'text-primary-200' : 'text-primary-700'}`}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className={`mt-2 text-base font-semibold ${theme === 'inverted' ? 'text-white' : 'text-text-primary'}`}>{label}</p>
      {sublabel && (
        <p className={`mt-1 text-sm ${theme === 'inverted' ? 'text-primary-200/80' : 'text-text-muted'}`}>{sublabel}</p>
      )}
    </div>
  )
}
