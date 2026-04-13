import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  external?: boolean
}

const variants = {
  primary:
    'bg-accent hover:bg-accent-hover text-white border border-accent hover:border-accent-hover',
  outline:
    'bg-transparent border border-accent text-accent hover:bg-accent hover:text-white',
  ghost: 'bg-transparent text-accent hover:text-accent-hover underline underline-offset-4',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  type = 'button',
  disabled = false,
  className = '',
  external = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center gap-2 font-sans font-medium uppercase tracking-wider transition-all duration-200 rounded-xl ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5 active:translate-y-0'} ${className}`

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  )
}
