import { ExternalLink, Github, Server, Globe } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-[#050B1E] to-[#020617] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Full-stack MERN applications built with real-world authentication,
            analytics, and cloud deployment.
          </p>
        </div>

        <div className="space-y-16">
          {/* ================= Project 1 ================= */}
          <ProjectCard
            image="/images/recipe-platform.png"
            title="Recipe Sharing Platform"
            description="A full-stack MERN application that allows users to create, manage, and explore recipes securely. Implements JWT authentication, protected routes, REST APIs, and MongoDB Atlas for persistent storage with cloud deployment."
            tech={[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "JWT",
              "REST APIs",
              "Render",
              "Netlify",
            ]}
            frontend="https://jolly-basbousa-3cadfa.netlify.app/"
            backend="https://recipe-sharing-platform-be-1.onrender.com/"
            feRepo="https://github.com/Chris25005/Recipe-Sharing-Platform-FE"
            beRepo="https://github.com/Chris25005/Recipe-Sharing-Platform-BE"
          />

          {/* ================= Project 2 ================= */}
          <ProjectCard
            image="/images/expense-tracker.png"
            title="Expense Tracker (MERN Stack)"
            description="A comprehensive financial management system that helps users track income and expenses with category-wise analysis, interactive charts, and detailed reports. Features JWT authentication, real-time dashboard stats, and secure user-specific data handling."
            tech={[
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "JWT",
              "Recharts",
              "Bootstrap",
              "Render",
              "Netlify",
            ]}
            frontend="https://superb-pony-da8703.netlify.app/login"
            backend="https://expensetrackerbe-rkgb.onrender.com"
            feRepo="https://github.com/Chris25005/ExpenseTrackerFrontend"
            beRepo="https://github.com/Chris25005/ExpenseTrackerBE"
          />

          {/* ================= Project 3 ================= */}
          <ProjectCard
            image="/images/chat-app.png"
            title="Real-Time Chat Application"
            description="A real-time chat application enabling authenticated users to send and receive messages instantly. Built using Socket.IO for real-time communication, JWT for secure access, and MongoDB for message persistence."
            tech={[
              "React",
              "Node.js",
              "Socket.IO",
              "JWT",
              "MongoDB",
              "Render",
              "Netlify",
            ]}
            frontend="https://chatapp008.netlify.app/"
            backend="https://chatapp-be-1-jety.onrender.com"
            feRepo="https://github.com/Chris25005/ChatApp-FE"
            beRepo="https://github.com/Chris25005/ChatApp-BE"
          />
        </div>
      </div>
    </section>
  );
}

/* ================= Reusable Project Card ================= */

function ProjectCard({
  image,
  title,
  description,
  tech,
  frontend,
  backend,
  feRepo,
  beRepo,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-cyan-400/40 transition">
      {/* Image */}
      <div className="w-full h-[260px] md:h-[320px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-10">
        <h3 className="text-2xl font-semibold text-white mb-4">
          {title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href={frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:border-cyan-400/40 transition"
          >
            <Globe className="h-4 w-4 text-cyan-400" />
            Live Frontend
            <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href={backend}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:border-cyan-400/40 transition"
          >
            <Server className="h-4 w-4 text-cyan-400" />
            Live Backend
            <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href={feRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:border-cyan-400/40 transition"
          >
            <Github className="h-4 w-4 text-cyan-400" />
            Frontend Repo
          </a>

          <a
            href={beRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:border-cyan-400/40 transition"
          >
            <Github className="h-4 w-4 text-cyan-400" />
            Backend Repo
          </a>
        </div>
      </div>
    </div>
  );
}
