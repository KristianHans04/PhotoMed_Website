import { cn } from '@/lib/utils'

interface ParallaxSectionProps {
  children: React.ReactNode
  imageUrl: string
  overlayOpacity?: number
  className?: string
  overlayColor?: string
}

export default function ParallaxSection({
  children,
  imageUrl,
  overlayOpacity = 0.6,
  className = '',
  overlayColor = 'from-primary-950/90 via-primary-900/70 to-primary-950/90',
}: ParallaxSectionProps) {
  return (
    <section className={cn('relative overflow-hidden', className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div
        className={cn('absolute inset-0 bg-gradient-to-b', overlayColor)}
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  )
}
