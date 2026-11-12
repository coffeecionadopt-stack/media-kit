import { useState } from 'react'
import { press, type PressItem } from '../content'
import { img } from '../format'
import { useLang } from '../i18n'

/** The outlet's share image, falling back to a local photo if it can't load. */
function PressThumb({ item }: { item: PressItem }) {
  const [failed, setFailed] = useState(false)
  const src = !item.previewImage || failed ? img(item.fallbackImage) : item.previewImage
  return (
    <span className="press-thumb">
      <img
        src={src}
        alt={item.headline.pt}
        loading="lazy"
        referrerPolicy="no-referrer"
        width={770}
        height={403}
        onError={() => setFailed(true)}
      />
    </span>
  )
}

const formatDate = (iso: string, locale: string) =>
  new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${iso}T12:00:00`))

export function Press() {
  const { t, locale, lang } = useLang()
  if (press.length === 0) return null

  return (
    <section id="imprensa">
      <div className="wrap">
        <div className="sec-head">
          <h2>{t({ pt: 'Na imprensa', en: 'In the press' })}</h2>
        </div>
        <div className="press">
          {press.map((p) => (
            <a className="press-item" key={p.url} href={p.url} target="_blank" rel="noopener">
              <PressThumb item={p} />
              <div className="press-body">
                <div className="press-outlet">
                  {p.outlet}
                  <small className="label">{formatDate(p.date, locale)}</small>
                </div>
                <p className="press-headline">“{t(p.headline)}”</p>
                <blockquote className="press-quote">
                  {t(p.quote)} <span className="label">— José Correia</span>
                </blockquote>
                {lang === 'en' && <p className="label press-note">Article in Portuguese · headline translated</p>}
                <span className="watch" style={{ justifySelf: 'start' }}>
                  {t({ pt: `Ler o artigo na ${p.outlet} ↗`, en: `Read the article on ${p.outlet} ↗` })}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/** Small "as seen in" link for the hero, pointing to the press section. */
export function PressBadge() {
  const { t } = useLang()
  const first = press[0]
  if (!first) return null
  return (
    <a className="press-badge" href={first.url} target="_blank" rel="noopener">
      {t({ pt: 'Destaque na', en: 'Featured in' })} <b>{first.outlet}</b> ↗
    </a>
  )
}
