interface PhoneFrameProps {
  src: string
  alt: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'w-[140px]',
  md: 'w-[200px]',
  lg: 'w-[240px]',
}

export default function PhoneFrame({ src, alt, className = '', size = 'md' }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto ${sizes[size]} shrink-0 ${className}`}>
      <div className="relative overflow-hidden rounded-[1.8rem] border-[4px] border-gray-900 bg-black shadow-2xl shadow-black/30">
        <div className="relative aspect-[6/11] w-full overflow-hidden bg-black">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
