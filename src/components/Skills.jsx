import { Code, Server, Database, Globe } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-b from-[#020617] to-[#050B1E] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Skills
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-16">
          Technologies and tools used to build secure, scalable, and
          production-ready full-stack applications.
        </p>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400/40 transition">
            <Code className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Frontend
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              HTML, CSS, JavaScript, React.js, React Router, Redux/Context API
            </p>
          </div>

          {/* Backend */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400/40 transition">
            <Server className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Backend
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Node.js, Express.js, REST APIs, JWT Authentication
            </p>
          </div>

          {/* Database */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400/40 transition">
            <Database className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Database
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              MongoDB, Mongoose, basic SQL / MySQL
            </p>
          </div>

          {/* Tools & Deployment */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400/40 transition">
            <Globe className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Tools & Deployment
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Git, GitHub, Postman, VS Code, Render, Netlify
            </p>
          </div>
        </div>

        {/* Extra Skills */}
        <div className="mt-14 max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm">
            <span className="text-white font-medium">Other Skills:</span>{" "}
            Responsive UI Design, API Integration, Socket.IO, Email Services,
            Debugging, Error Handling, Environment Configuration
          </p>
        </div>
      </div>
    </section>
  );
}
