import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { BackgroundBeams } from './components/BackgroundBeams'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-full bg-jade-400 px-4 py-2 font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      {/* Atmosphere: soft jade and brown-sugar light over a faint grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
        <div className="absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-jade-500/[0.11] blur-[120px]" />
        <div className="absolute -left-40 top-1/2 h-[520px] w-[520px] rounded-full bg-sugar-400/[0.06] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at 50% 20%, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 20%, black 20%, transparent 70%)',
          }}
        />
        <BackgroundBeams />
      </div>

      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
