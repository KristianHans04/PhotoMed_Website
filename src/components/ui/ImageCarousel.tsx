import { useState, useEffect, useCallback } from 'react'

interface ImageCarouselProps {
  images: { src: string; alt: string; caption?: string }[]
  interval?: number
  className?: string
}

export default function ImageCarousel({
  images,
  interval = 5000,
  className = '',
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [next, interval])

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <div className="relative aspect-[16/10] w-full">
        {images.map((image, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            {image.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16">
                <p className="text-sm font-medium text-white">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-white' : 'w-2 bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
