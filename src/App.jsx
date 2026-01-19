import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

export default function App() {
  return (
    <>
      <Navbar />

      {/* Global top padding for fixed navbar */}
      <main className="pt-16 max-w-7xl mx-auto px-6">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
