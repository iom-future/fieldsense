import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import HeroStatsStrip from './components/HeroStatsStrip.jsx'
import Problem from './sections/Problem.jsx'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <HeroStatsStrip />
        <Problem />
      </main>
    </div>
  )
}

export default App
