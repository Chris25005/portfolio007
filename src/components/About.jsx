import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <div className="bg-slate-900 rounded-2xl p-8 text-slate-300">
        Passionate Full Stack Developer with experience building scalable
        applications, authentication systems, real-time chat apps, and
        performance-optimized UI.
      </div>
    </motion.section>
  )
}
