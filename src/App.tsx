import Header from './sections/Header'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import About from './sections/About'
import Approach from './sections/Approach'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Speaking from './sections/Speaking'
import Achievements from './sections/Achievements'
import Services from './sections/Services'
import Cta from './sections/Cta'
import Footer from './sections/Footer'
import Lightbox from './sections/Lightbox'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="stack" style={{ paddingTop: 28 }}>
        <Stats />
        <About />
        <Approach />
        <Experience />
        <Projects />
        <Speaking />
        <Achievements />
        <Services />
        <Cta />
      </main>
      <Footer />
      <Lightbox />
    </>
  )
}
