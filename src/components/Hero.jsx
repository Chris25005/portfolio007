import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import profile from "../assets/profile.jpg"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-sky-950/40" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            variants={item}
            className="text-sky-400 text-xs tracking-widest mb-4"
          >
            WELCOME TO MY PORTFOLIO
          </motion.p>

          <motion.h1
            variants={item}
            className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
          >
            Hi, I&apos;m{" "}
            <span className="text-sky-400">Christu Divakar A</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-gray-400 max-w-xl"
          >
            I spend most of my time thinking of product ideas I really wish existed.
            You'll find me taking long walks, observing how people think & act, and
            sometimes being brave with whatever I craft.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="bg-sky-500 hover:bg-sky-400 transition px-6 py-3 rounded-xl text-white font-medium"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-sky-400 transition px-6 py-3 rounded-xl text-white font-medium"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={item}
            className="mt-10 flex gap-4"
          >
            <a
              href="https://github.com/Chris25005"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-sky-500/20 transition"
            >
              <Github className="text-white" />
            </a>

            <a
              href="https://www.linkedin.com/in/chris-diva-b25993188/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-sky-500/20 transition"
            >
              <Linkedin className="text-white" />
            </a>

            <a
              href="mailto:chriswakar@gmail.com"
              className="p-3 rounded-xl bg-white/5 hover:bg-sky-500/20 transition"
            >
              <Mail className="text-white" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={item}
          className="relative flex justify-center md:justify-end"
        >
          {/* Fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black via-black/40 to-transparent z-10" />

          <img
            src={profile}
            alt="Christu Divakar A"
            className="relative z-0 w-[320px] md:w-[420px] rounded-2xl object-cover shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
