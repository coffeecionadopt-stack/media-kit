import type { CSSProperties, ReactNode } from 'react'
import { img } from '../format'

type PhotoProps = {
  image: string
  alt: string
  className?: string
  style?: CSSProperties
  /** When set, the photo is a link to this URL and shows a play button. */
  href?: string
  children?: ReactNode
}

/** A background-image tile, optionally linking out to a video. */
export function Photo({ image, alt, className = '', style, href, children }: PhotoProps) {
  const bg: CSSProperties = { backgroundImage: `url(${img(image)})`, ...style }
  if (href) {
    return (
      <a
        className={`photo play ${className}`}
        href={href}
        target="_blank"
        rel="noopener"
        aria-label={alt}
        style={bg}
      >
        {children}
      </a>
    )
  }
  return (
    <div className={`photo ${className}`} role="img" aria-label={alt} style={bg}>
      {children}
    </div>
  )
}

/** A horizontal bar whose fill is `value` out of `max`. */
export function Track({ value, max = 100, className = 'track' }: { value: number; max?: number; className?: string }) {
  const width = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className={className}>
      <i style={{ width: `${width.toFixed(1)}%` }} />
    </div>
  )
}

export function Label({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <p className="label" style={style}>
      {children}
    </p>
  )
}
