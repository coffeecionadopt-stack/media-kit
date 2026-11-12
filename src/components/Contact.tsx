import { useRef, useState } from 'react'
import { contact } from '../content'
import { img } from '../format'
import { useLang } from '../i18n'

export function Contact() {
  const { t } = useLang()
  const [copied, setCopied] = useState(false)
  const emailRef = useRef<HTMLSpanElement>(null)

  const selectEmail = () => {
    const el = emailRef.current
    if (!el) return
    const range = document.createRange()
    range.selectNodeContents(el)
    const sel = window.getSelection()
    sel?.removeAllRanges()
    sel?.addRange(range)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      selectEmail()
    }
  }

  return (
    <section className="contact">
      <div className="wrap">
        {/* The contact band inverts the theme, so it shows the opposite logo variant. */}
        <img className="logo logo-c ci-a" src={img('logo-dark.svg')} alt="coffeecionado.pt" width={320} height={120} />
        <img className="logo logo-c ci-b" src={img('logo-light.svg')} alt="coffeecionado.pt" width={320} height={120} />
        <p className="label">{t({ pt: 'Contactos', en: 'Contact' })}</p>
        <h2 style={{ marginTop: 14 }}>{t({ pt: 'Vamos criar juntos', en: "Let's work together" })}</h2>
        <div className="mail">
          <span id="email" ref={emailRef}>
            {contact.email}
          </span>
          <button className="btn" type="button" id="copy" onClick={copy}>
            {copied ? t({ pt: 'Copiado', en: 'Copied' }) : t({ pt: 'Copiar email', en: 'Copy email' })}
          </button>
        </div>
        <div className="socials">
          {contact.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener">
              {l.label}
            </a>
          ))}
        </div>
        <p className="label foot">José Correia · Coffeecionado · Media Kit 2026</p>
      </div>
    </section>
  )
}
