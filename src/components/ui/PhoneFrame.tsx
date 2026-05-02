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
      <div className="relative overflow-hidden rounded-[1.8rem] border-[5px] border-gray-900 bg-gray-900 shadow-2xl shadow-black/30">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-xl bg-gray-900" />
        <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-white">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
