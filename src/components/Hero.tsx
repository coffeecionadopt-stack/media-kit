import { Fragment } from 'react'
import { followers, heroFilm, last30, tastingCard } from '../content'
import { compact } from '../format'
import { useLang } from '../i18n'
import { Photo } from './ui'

export function Hero() {
  const { t, locale } = useLang()
  const stats = [
    { value: last30.views, label: { pt: 'Visualizações · 30 dias', en: 'Views · 30 days' } },
    { value: last30.accountsReached, label: { pt: 'Contas alcançadas', en: 'Accounts reached' } },
    { value: followers.instagram, label: { pt: 'Seguidores Instagram', en: 'Instagram followers' } },
  ]

  return (
    <div className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="label">{t({ pt: 'Criador de conteúdo · Porto, Portugal', en: 'Content creator · Porto, Portugal' })}</p>
          <h1 style={{ marginTop: 14 }}>
            Coffee<span>cionado</span>
          </h1>
          <p className="who">
            José Correia — {t({ pt: 'café de especialidade, formação SCA', en: 'specialty coffee, SCA-trained' })}
          </p>
          <p className="pitch">
            {t({
              pt: 'Café de especialidade explicado por quem o faz todos os dias. Conteúdo honesto, técnico e próximo, para uma audiência que quer beber melhor café.',
              en: 'Specialty coffee, explained by someone who brews it every day. Honest, technical, down-to-earth content for an audience that wants to drink better coffee.',
            })}
          </p>
          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label.en}>
                <div className="num">{compact(s.value, locale)}</div>
                <div className="label">{t(s.label)}</div>
              </div>
            ))}
          </div>
          <div className="card" aria-label={t({ pt: 'Ficha de prova', en: 'Tasting card' })}>
            <div className="card-title">
              <span>{t({ pt: 'Ficha de prova', en: 'Tasting card' })}</span>
              <span>{t({ pt: 'Lote 2026', en: 'Lot 2026' })}</span>
            </div>
            <dl>
              {tastingCard.map((row) => (
                <Fragment key={row.label.en}>
                  <dt>{t(row.label)}</dt>
                  <dd>{t(row.value)}</dd>
                </Fragment>
              ))}
            </dl>
          </div>
        </div>
        <Photo image="p7.jpg" className="portrait" alt="José Correia com um cappuccino com latte art">
          <span className="tag label">{t({ pt: 'Formação SCA · Porto', en: 'SCA-trained · Porto' })}</span>
        </Photo>
      </div>
      <div className="wrap">
        <div className="film">
          {heroFilm.map((p) => (
            <Photo key={p.image} image={p.image} alt={p.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}
