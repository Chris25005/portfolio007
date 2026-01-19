import { Layers, ShieldCheck, Globe } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-[#050B1E] to-[#020617] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Me
        </h2>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
          I’m a{" "}
          <span className="text-cyan-400 font-semibold">
            Full-Stack MERN Developer
          </span>{" "}
          experienced in building production-ready applications, including an{" "}
          <span className="text-white font-medium">
            Authentication System with Password Reset
          </span>
          , a{" "}
          <span className="text-white font-medium">
            Real-Time Chat Application
          </span>
          , and a{" "}
          <span className="text-white font-medium">
            MERN Stack Recipe Sharing Platform
          </span>
          .
          <br />
          <br />
          I specialize in{" "}
          <span className="text-cyan-400">
            JWT authentication, email integrations, real-time communication,
            MongoDB Atlas, REST APIs
          </span>{" "}
          and cloud deployments using{" "}
          <span className="text-white font-medium">
            Render and Netlify
          </span>
          .
        </p>

        {/* Feature Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400/40 transition">
            <Layers className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Full-Stack MERN
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              End-to-end development using React, Node.js, Express, and MongoDB
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400/40 transition">
            <ShieldCheck className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Auth & Security
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              JWT authentication, password hashing, validation, and secure APIs
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-cyan-400/40 transition">
            <Globe className="mx-auto mb-4 h-10 w-10 text-cyan-400" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Real-World Deployment
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              REST APIs, MongoDB Atlas, Render backend, Netlify frontend hosting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
