interface PhoneFrameProps {
  src: string
  alt: string
  className?: string
}

export default function PhoneFrame({ src, alt, className = '' }: PhoneFrameProps) {
  return (
    <div className={`relative mx-auto w-[280px] ${className}`}>
      <div className="relative overflow-hidden rounded-[2.5rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl shadow-black/30">
        <div className="absolute left-1/2 top-0 z-10 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
        <div className="relative aspect-[9/19.5] w-full overflow-hidden bg-white">
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-b from-primary-200/40 to-primary-400/20 blur-xl" />
    </div>
  )
}
