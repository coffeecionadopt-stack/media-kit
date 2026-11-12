import { About } from './components/About'
import { Audience } from './components/Audience'
import { BrandsCerts } from './components/BrandsCerts'
import { Contact } from './components/Contact'
import { FeaturedCase } from './components/FeaturedCase'
import { Hero } from './components/Hero'
import { Last30 } from './components/Last30'
import { Offer } from './components/Offer'
import { RecentReels } from './components/RecentReels'
import { TopBar } from './components/TopBar'
import { LangProvider } from './i18n'

export default function App() {
  return (
    <LangProvider>
      <TopBar />
      <main>
        <Hero />
        <Last30 />
        <FeaturedCase />
        <RecentReels />
        <Audience />
        <About />
        <Offer />
        <BrandsCerts />
        <Contact />
      </main>
    </LangProvider>
  )
}
