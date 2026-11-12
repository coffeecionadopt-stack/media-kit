import { offers } from '../content'
import { useLang } from '../i18n'

export function Offer() {
  const { t } = useLang()
  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <h2>{t({ pt: 'Como posso ajudar a tua marca', en: 'What I can do for your brand' })}</h2>
        </div>
        <div className="offer">
          {offers.map((o) => (
            <article key={o.title.en}>
              <span className="label">{t(o.tag)}</span>
              <h3>{t(o.title)}</h3>
              <p>{t(o.body)}</p>
            </article>
          ))}
        </div>
        <p className="rates">{t({ pt: 'Pacotes e valores sob pedido.', en: 'Packages and rates on request.' })}</p>
      </div>
    </section>
  )
}
