import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Header() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col justify-center text-center"
    >
      <h1 className="text-5xl font-bold mb-4">
        Christu <span className="text-accent">Divakar</span> 
      </h1>
      <p className="text-slate-400 text-lg mb-6">
        Full Stack Developer • MERN • Cloud • UI Engineer
      </p>

      <div className="flex justify-center gap-6">
        <Github className="hover:text-accent cursor-pointer" />
        <Linkedin className="hover:text-accent cursor-pointer" />
        <Mail className="hover:text-accent cursor-pointer" />
      </div>
    </motion.section>
  )
}
