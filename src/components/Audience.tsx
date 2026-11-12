import { audience, contact, followers, period } from '../content'
import { compact, full, pct } from '../format'
import { useLang } from '../i18n'
import { adults25to54, greaterPorto, niceMax } from '../stats'
import { Track } from './ui'

export function Audience() {
  const { t, locale } = useLang()
  const ageMax = niceMax(Math.max(...audience.ages.map((a) => a.pct)), 10)
  const countryMax = niceMax(Math.max(...audience.countries.map((c) => c.pct)), 10)
  const cityMax = niceMax(Math.max(...audience.cities.map((c) => c.pct)), 5)
  const topAges = [...audience.ages].sort((a, b) => b.pct - a.pct).slice(0, 2).map((a) => a.range)

  const platforms = [
    { name: 'Instagram', handle: contact.handles.instagram, value: full(followers.instagram, locale) },
    { name: 'TikTok', handle: contact.handles.tiktok, value: compact(followers.tiktok, locale) },
    { name: 'YouTube', handle: contact.handles.youtube, value: compact(followers.youtube, locale) },
  ]

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <h2>{t({ pt: 'Audiência', en: 'Audience' })}</h2>
          <p className="label">
            {t({ pt: 'Seguidores do Instagram', en: 'Instagram followers' })} · {t(period.label)}
          </p>
        </div>
        <div className="aud">
          <div>
            <div className="plat">
              {platforms.map((p) => (
                <div key={p.name}>
                  <span className="name">
                    {p.name}
                    <span className="handle">{p.handle}</span>
                  </span>
                  <span className="num">{p.value}</span>
                </div>
              ))}
            </div>
            <div className="callout">
              <strong>{adults25to54}%</strong>
              <span>
                {t({
                  pt: 'dos seguidores têm entre 25 e 54 anos: adultos com poder de compra, interessados em equipamento, café e experiências.',
                  en: 'of followers are aged 25 to 54: adults with purchasing power, interested in gear, coffee and experiences.',
                })}
              </span>
            </div>
          </div>
          <div className="demo">
            <div>
              <p className="label" style={{ marginBottom: 12 }}>
                {t({ pt: 'Género', en: 'Gender' })}
              </p>
              <div className="split" aria-hidden="true">
                <i className="m" style={{ width: `${audience.gender.men}%` }} />
                <i className="f" style={{ width: `${audience.gender.women}%` }} />
              </div>
              <div className="split-legend">
                <div>
                  <div className="num">{pct(audience.gender.men, locale)}</div>
                  <div className="label">{t({ pt: 'Homens', en: 'Men' })}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="num" style={{ color: 'var(--accent)' }}>
                    {pct(audience.gender.women, locale)}
                  </div>
                  <div className="label">{t({ pt: 'Mulheres', en: 'Women' })}</div>
                </div>
              </div>
            </div>
            <div>
              <p className="label" style={{ marginBottom: 12 }}>
                {t({ pt: 'Faixa etária', en: 'Age range' })} · {t({ pt: 'escala', en: 'scale' })} 0–{ageMax}%
              </p>
              <div className="ages">
                {audience.ages.map((a) => (
                  <div className={`age${topAges.includes(a.range) ? ' hi' : ''}`} key={a.range}>
                    <span>{a.range}</span>
                    <Track value={a.pct} max={ageMax} />
                    <b>{pct(a.pct, locale)}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="geo">
          <div>
            <h3>{t({ pt: 'Países principais', en: 'Top countries' })}</h3>
            <ol>
              {audience.countries.map((c) => (
                <li key={c.name.en}>
                  <span>{t(c.name)}</span>
                  <b>{pct(c.pct, locale)}</b>
                  <Track value={c.pct} max={countryMax} />
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3>{t({ pt: 'Cidades principais', en: 'Top cities' })}</h3>
            <ol>
              {audience.cities.map((c) => (
                <li key={c.name.en}>
                  <span>{t(c.name)}</span>
                  <b>{pct(c.pct, locale)}</b>
                  <Track value={c.pct} max={cityMax} />
                </li>
              ))}
            </ol>
            <p className="label" style={{ marginTop: 14 }}>
              {t({
                pt: `Porto, Matosinhos, Gaia e Gondomar somam ${greaterPorto}% dos seguidores: ideal para marcas e eventos no Grande Porto.`,
                en: `Porto, Matosinhos, Gaia and Gondomar add up to ${greaterPorto}% of followers, a strong fit for brands and events in Greater Porto.`,
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
