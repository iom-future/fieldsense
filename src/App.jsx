import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-forest">
            AI-powered agricultural intelligence
          </p>

          <h1 className="max-w-3xl font-heading text-5xl font-bold tracking-tight text-ink md:text-7xl">
            Grow With Foresight.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Turn crop observations, local weather, and agricultural data
            into practical insights for better-informed farming decisions.
          </p>

          <a
            href="#how-it-works"
            className="mt-8 inline-flex rounded-lg bg-forest px-6 py-3 font-semibold text-white transition-colors hover:bg-forest-dark"
          >
            Discover FieldSense
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
