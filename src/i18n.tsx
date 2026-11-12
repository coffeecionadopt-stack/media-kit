import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'pt' | 'en'
/** A piece of copy in both languages. */
export type T = { pt: string; en: string }

const STORAGE_KEY = 'mk-lang'
const locales: Record<Lang, string> = { pt: 'pt-PT', en: 'en' }

function readInitialLang(): Lang {
  const hash = window.location.hash.replace('#', '')
  if (hash === 'pt' || hash === 'en') return hash
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'pt' || stored === 'en') return stored
  } catch {
    /* storage may be unavailable */
  }
  return 'pt'
}

type Ctx = { lang: Lang; setLang: (l: Lang) => void; locale: string }
const LangContext = createContext<Ctx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    if (window.location.hash !== `#${l}`) history.replaceState(null, '', `#${l}`)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.body.dataset.lang = lang
  }, [lang])

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '')
      if (h === 'pt' || h === 'en') setLangState(h)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return <LangContext.Provider value={{ lang, setLang, locale: locales[lang] }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  const t = (copy: T) => copy[ctx.lang]
  return { ...ctx, t }
}
