import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import HeroStatsStrip from './components/HeroStatsStrip.jsx'
import Problem from './sections/Problem.jsx'
import Features from './sections/Features.jsx'
import IntelligenceLoop from './sections/IntelligenceLoop.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Team from './sections/Team.jsx'
import FAQ from './sections/FAQ.jsx'
import EarlyAccess from './sections/EarlyAccess.jsx'
import Footer from './sections/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <HeroStatsStrip />
        <Problem />
        <Features />
        <IntelligenceLoop />
        <Testimonials />
        <Team />
        <FAQ />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  )
}

export default App
