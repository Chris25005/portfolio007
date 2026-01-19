import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="max-w-6xl mx-auto px-6 space-y-24">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}
