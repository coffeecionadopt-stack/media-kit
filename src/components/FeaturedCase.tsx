import { compact, seconds } from '../format'
import { useLang } from '../i18n'
import { featured, featuredReachMultiple, featuredRetention } from '../stats'
import { Photo, Track } from './ui'

export function FeaturedCase() {
  const { t, locale, lang } = useLang()
  const r = featured
  const date = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: 'numeric' }).format(
    new Date(`${r.published}T12:00:00`),
  )

  const stats = [
    { value: r.accounts, label: { pt: 'Contas', en: 'Accounts' } },
    { value: r.likes, label: { pt: 'Gostos', en: 'Likes' } },
    { value: r.shares, label: { pt: 'Partilhas', en: 'Shares' } },
    { value: r.saves, label: { pt: 'Guardados', en: 'Saves' } },
    { value: r.comments, label: { pt: 'Comentários', en: 'Comments' } },
    { value: r.reposts, label: { pt: 'Republicações', en: 'Reposts' } },
  ]

  return (
    <section>
      <div className="wrap case">
        <Photo
          image={r.image}
          href={r.url}
          alt={t({ pt: 'Ver o reel no Instagram', en: 'Watch the reel on Instagram' })}
          style={{ aspectRatio: '9/16', width: '100%' }}
        />
        <div className="case-body">
          <p className="label">
            {t({ pt: 'Caso em destaque · reel de', en: 'Featured case · reel from' })} {date}
          </p>
          <h2>{t({ pt: 'Café de especialidade na mala do carro', en: 'Specialty coffee from a car boot' })}</h2>
          <p className="lede">
            {lang === 'pt'
              ? `Em 20 minutos a estação está montada e o café pronto a servir. O reel chegou a ${compact(r.accounts, locale)} contas, ${featuredReachMultiple} vezes mais do que os seguidores da página, e ${compact(r.shares, locale)} pessoas enviaram-no a alguém.`
              : `Twenty minutes to set up, then the coffee is ready to serve. The reel reached ${compact(r.accounts, locale)} accounts, ${featuredReachMultiple} times the page's follower count, and ${compact(r.shares, locale)} people sent it to someone.`}
          </p>
          <div className="num huge">{compact(r.views, locale)}</div>
          <p className="label" style={{ marginTop: 4 }}>
            {t({ pt: 'visualizações', en: 'views' })}
          </p>
          <div className="case-stats">
            {stats.map((s) => (
              <div key={s.label.en}>
                <div className="num">{compact(s.value, locale)}</div>
                <div className="label">{t(s.label)}</div>
              </div>
            ))}
          </div>
          <div className="retention">
            <div className="row">
              <span>{t({ pt: 'Tempo médio de visualização', en: 'Average watch time' })}</span>
              <b>
                {seconds(r.avgWatchSec, locale)} {t({ pt: 'de', en: 'of' })} {r.durationSec} s · {featuredRetention}%
              </b>
            </div>
            <Track value={featuredRetention} />
          </div>
          <a className="watch" href={r.url} target="_blank" rel="noopener">
            {t({ pt: 'Ver o reel no Instagram ↗', en: 'Watch the reel on Instagram ↗' })}
          </a>
        </div>
      </div>
    </section>
  )
}
