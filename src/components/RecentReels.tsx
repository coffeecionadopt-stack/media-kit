import { compact, duration, seconds } from '../format'
import { useLang } from '../i18n'
import { reelsByViews } from '../stats'
import { Photo, Track } from './ui'

export function RecentReels() {
  const { t, locale } = useLang()
  const max = reelsByViews[0]?.views ?? 1

  return (
    <section>
      <div className="wrap">
        <div className="sec-head">
          <h2>{t({ pt: 'Reels recentes', en: 'Recent reels' })}</h2>
          <p className="label">{t({ pt: 'Visualizações, na mesma escala', en: 'Views, on the same scale' })}</p>
        </div>
        <div className="reels">
          {reelsByViews.map((r) => (
            <a className="reel" href={r.url} target="_blank" rel="noopener" key={r.id}>
              <Photo image={r.image} alt="" className="play" />
              <div>
                <div className="t">{t(r.title)}</div>
                <div className="label">
                  {duration(r.durationSec)} · {t({ pt: 'tempo médio', en: 'avg watch' })} {seconds(r.avgWatchSec, locale)} ·{' '}
                  {compact(r.shares, locale)} {t({ pt: 'partilhas', en: 'shares' })}
                </div>
                <Track value={r.views} max={max} className="bar" />
              </div>
              <div className="v">
                {compact(r.views, locale)}
                <span className="go">{t({ pt: 'Ver ↗', en: 'Watch ↗' })}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
