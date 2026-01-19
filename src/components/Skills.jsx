import { motion } from "framer-motion"
import { Code, Database, Cloud, Box } from "lucide-react"

const skills = [
  { name: "React", icon: Code },
  { name: "Node.js", icon: Code },
  { name: "MongoDB", icon: Database },
  { name: "Tailwind", icon: Code },
  { name: "AWS", icon: Cloud },
  { name: "Docker", icon: Box },
]

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-10 text-white">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, i) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="
                bg-gradient-to-br from-slate-900 to-slate-800
                rounded-2xl p-6
                border border-slate-700
                shadow-lg hover:shadow-indigo-500/20
                flex items-center gap-4
              "
            >
              <div className="p-3 bg-indigo-500/10 rounded-xl">
                <Icon className="text-indigo-400" size={28} />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {skill.name}
              </h3>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
