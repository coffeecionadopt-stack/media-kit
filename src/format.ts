/**
 * Number formatting in the viewer's language.
 * pt-PT: 499 mil · 1,1 M · 14,9 mil · 5,0%
 * en:    499K    · 1.1M  · 14.9K    · 5.0%
 */

/** One decimal while the shown number is below 100 (1,1 M · 14,9 mil), none from 100 up (561 mil). */
const compactDigits = (n: number) => {
  const shown = n >= 1_000_000 ? n / 1_000_000 : n >= 1_000 ? n / 1_000 : n
  return shown < 100 ? 1 : 0
}

/** Compact number in the viewer's language. */
export function compact(n: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    notation: 'compact',
    maximumFractionDigits: compactDigits(n),
  }).format(n)
}

/** Compact number split into value and unit, e.g. { value: "499", unit: "mil" }. */
export function compactParts(n: number, locale: string): { value: string; unit: string } {
  const parts = new Intl.NumberFormat(locale, {
    notation: 'compact',
    maximumFractionDigits: compactDigits(n),
  }).formatToParts(n)
  const unit = parts.filter((p) => p.type === 'compact').map((p) => p.value).join('')
  const value = parts
    .filter((p) => p.type !== 'compact' && p.type !== 'literal')
    .map((p) => p.value)
    .join('')
  return { value, unit }
}

/** Full number with thousands separator: 13 092 / 13,092. */
export function full(n: number, locale: string): string {
  return new Intl.NumberFormat(locale).format(n)
}

/** Percentage from a 0–100 value: 31,6% / 31.6%. */
export function pct(n: number, locale: string, digits = 1): string {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n / 100)
}

/** Seconds with one decimal: 25,7 s / 25.7 s. */
export function seconds(n: number, locale: string): string {
  return `${new Intl.NumberFormat(locale, { maximumFractionDigits: 1, minimumFractionDigits: 1 }).format(n)} s`
}

/** "0:48" from 48 seconds. */
export function duration(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = Math.round(totalSeconds % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

/** Asset path that respects Vite's base URL. */
export const img = (file: string) => `${import.meta.env.BASE_URL}img/${file}`
