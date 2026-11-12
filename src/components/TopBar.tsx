import { img } from '../format'
import { useLang, type Lang } from '../i18n'

export function TopBar() {
  const { lang, setLang } = useLang()
  const langs: Lang[] = ['pt', 'en']
  return (
    <header className="top">
      <div className="wrap">
        <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img className="logo logo-l" src={img('logo-light.svg')} alt="coffeecionado.pt" width={150} height={56} />
          <img className="logo logo-d" src={img('logo-dark.svg')} alt="coffeecionado.pt" width={150} height={56} />
          <small className="label">Media Kit 2026</small>
        </div>
        <div className="lang" role="group" aria-label="Idioma / Language">
          {langs.map((l) => (
            <button key={l} type="button" id={`btn-${l}`} aria-pressed={lang === l} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
