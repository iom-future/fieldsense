import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import HeroStatsStrip from './components/HeroStatsStrip.jsx'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <HeroStatsStrip />
      </main>
    </div>
  )
}

export default App
