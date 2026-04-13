import Image from 'next/image'

interface SeparatorBandProps {
  src: string
  alt?: string
  height?: number
}

export default function SeparatorBand({
  src,
  alt = '',
  height = 300,
}: SeparatorBandProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height }}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        quality={75}
      />
      <div className="absolute inset-0 bg-brand-dark/40" />
    </div>
  )
}
