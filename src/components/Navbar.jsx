import { useEffect, useState } from "react"

export default function Navbar() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    localStorage.setItem("theme", nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 dark:bg-[#020617]/80 backdrop-blur border-b border-slate-300 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}

        <span className="text-sky-400 text-2xl font-extrabold tracking-wide"> CD  </span>
                       
        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {["about", "skills", "projects", "certifications", "experience", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-lg
            border border-slate-300 dark:border-slate-700
            hover:bg-slate-200 dark:hover:bg-slate-800 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* Resume (External Link) */}
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:66d2cf3a-d46e-4eef-8874-b831021aa8b2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700
            hover:border-sky-400 transition"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
