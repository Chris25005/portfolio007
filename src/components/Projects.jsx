import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>

      <motion.div
        whileHover={{ y: -8 }}
        className="bg-slate-900 rounded-2xl p-6"
      >
        <h3 className="text-xl font-bold mb-2">Chat Application</h3>
        <p className="text-slate-400">
          Real-time MERN chat app with JWT auth, sockets & cloud deployment.
        </p>
      </motion.div>
    </section>
  )
}
