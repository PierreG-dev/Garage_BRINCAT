interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
      {eyebrow && (
        <p
          className={`font-display text-xs uppercase tracking-widest mb-3 ${
            light ? 'text-accent-light' : 'text-accent'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-bold text-4xl lg:text-5xl uppercase leading-tight ${
          light ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-4 w-12 h-0.5 bg-accent ${centered ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      {subtitle && (
        <p
          className={`mt-6 text-base lg:text-lg leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-brand-muted'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
