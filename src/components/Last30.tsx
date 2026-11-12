import { last30, period } from '../content'
import { compact, compactParts, pct } from '../format'
import { useLang } from '../i18n'
import { avgViewsPerReel, interactionRate, interactions, reachMultiple, sharesAndSaves } from '../stats'

export function Last30() {
  const { t, locale, lang } = useLang()

  const big = [
    {
      value: last30.views,
      title: { pt: 'Visualizações de reels', en: 'Reel views' },
      note: {
        pt: `${last30.reels} reels · média de ${compact(avgViewsPerReel, 'pt-PT')} por reel`,
        en: `${last30.reels} reels · ${compact(avgViewsPerReel, 'en')} average per reel`,
      },
    },
    {
      value: last30.accountsReached,
      title: { pt: 'Contas alcançadas', en: 'Accounts reached' },
      note: { pt: `${reachMultiple}× o número de seguidores`, en: `${reachMultiple}× the follower count` },
    },
    {
      value: interactions,
      title: { pt: 'Interações', en: 'Interactions' },
      note: {
        pt: 'gostos, partilhas, guardados, comentários e republicações',
        en: 'likes, shares, saves, comments and reposts',
      },
    },
  ]

  const mini = [
    { value: last30.likes, label: { pt: 'Gostos', en: 'Likes' } },
    { value: last30.shares, label: { pt: 'Partilhas', en: 'Shares' } },
    { value: last30.saves, label: { pt: 'Guardados', en: 'Saves' } },
    { value: last30.comments, label: { pt: 'Comentários', en: 'Comments' } },
    { value: last30.reposts, label: { pt: 'Republicações', en: 'Reposts' } },
  ]

  const sharesSavesFloor = Math.floor(sharesAndSaves / 1000) * 1000

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <h2>{t({ pt: 'Últimos 30 dias', en: 'Last 30 days' })}</h2>
          <p className="label">
            {t(period.label)} · Instagram
          </p>
        </div>
        <div className="big-grid">
          {big.map((b) => {
            const { value, unit } = compactParts(b.value, locale)
            return (
              <div className="big" key={b.title.en}>
                <div className="num">
                  {value}
                  {unit && <small>{unit}</small>}
                </div>
                <p>{t(b.title)}</p>
                <p className="note">{t(b.note)}</p>
              </div>
            )
          })}
        </div>
        <div className="mini-grid">
          {mini.map((m) => (
            <div className="mini" key={m.label.en}>
              <div className="num">{compact(m.value, locale)}</div>
              <div className="label">{t(m.label)}</div>
            </div>
          ))}
        </div>
        <div className="callout">
          <strong>{pct(interactionRate, locale)}</strong>
          <span>
            {lang === 'pt'
              ? `de interação por visualização. Mais de ${compact(sharesSavesFloor, locale)} pessoas partilharam ou guardaram um reel para mais tarde.`
              : `interaction rate per view. More than ${compact(sharesSavesFloor, locale)} people shared a reel or saved it for later.`}
          </span>
        </div>
        <p className="label source">
          {t({
            pt: `Fonte: estatísticas do Instagram exportadas do Edits a ${period.exportedOn}. Valores arredondados pelo Instagram.`,
            en: `Source: Instagram insights exported from Edits on ${period.exportedOn}. Figures rounded by Instagram.`,
          })}
        </p>
      </div>
    </section>
  )
}
