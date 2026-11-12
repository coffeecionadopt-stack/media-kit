import { brands, certifications } from '../content'
import { useLang } from '../i18n'

export function BrandsCerts() {
  const { t } = useLang()
  return (
    <section>
      <div className="wrap two">
        <div>
          <h2 style={{ marginBottom: 28 }}>{t({ pt: 'Marcas e parceiros', en: 'Brands and partners' })}</h2>
          <div className="brands">
            {brands.map((b) => (
              <span className="chip" key={b.name.en}>
                {t(b.name)}
                {b.note && <small>{t(b.note)}</small>}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 style={{ marginBottom: 28 }}>{t({ pt: 'Certificações', en: 'Certifications' })}</h2>
          <div className="certs">
            {certifications.map((c) => (
              <div key={c.name}>
                <b>{c.name}</b>
                <span className="dot" style={{ background: c.color }} />
              </div>
            ))}
          </div>
          <p className="label" style={{ marginTop: 14 }}>
            SCA Coffee Skills Program · ABCoffee School, Porto
          </p>
        </div>
      </div>
    </section>
  )
}
