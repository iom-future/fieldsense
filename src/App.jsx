import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import HeroStatsStrip from './components/HeroStatsStrip.jsx'
import Problem from './sections/Problem.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import Features from './sections/Features.jsx'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <HeroStatsStrip />
        <Problem />
        <HowItWorks />
        <Features />
      </main>
    </div>
  )
}

export default App
