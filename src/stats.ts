/** Figures derived from the raw numbers in content.ts. */
import { audience, featuredReelId, followers, last30, reels } from './content'

export const interactions =
  last30.likes + last30.comments + last30.reposts + last30.shares + last30.saves

/** Interactions per view, 0–100. */
export const interactionRate = (interactions / last30.views) * 100

export const reachMultiple = Math.round(last30.accountsReached / followers.instagram)
export const avgViewsPerReel = last30.views / last30.reels
export const sharesAndSaves = last30.shares + last30.saves

export const featured = reels.find((r) => r.id === featuredReelId) ?? reels[0]
export const featuredReachMultiple = Math.round(featured.accounts / followers.instagram)
export const featuredRetention = Math.round((featured.avgWatchSec / featured.durationSec) * 100)

export const reelsByViews = [...reels].sort((a, b) => b.views - a.views)

export const adults25to54 = Math.round(
  audience.ages
    .filter((a) => ['25–34', '35–44', '45–54'].includes(a.range))
    .reduce((sum, a) => sum + a.pct, 0),
)

export const greaterPorto = Math.round(
  audience.cities.filter((c) => c.greaterPorto).reduce((sum, c) => sum + c.pct, 0),
)

/** Round a maximum up to a tidy scale end (e.g. 40.5 → 50 with step 10). */
export const niceMax = (max: number, step: number) => Math.ceil(max / step) * step
