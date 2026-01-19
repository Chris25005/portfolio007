import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#020617] to-[#050B1E] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Profile */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Christu Divakar A
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full-Stack MERN Developer — building secure, scalable, and
              production-ready web applications.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="hover:text-cyan-400 transition"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Github className="h-4 w-4 text-cyan-400" />
                <a
                  href="https://github.com/Chris25005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  GitHub
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-cyan-400" />
                <a
                  href="https://www.linkedin.com/in/chris-diva-b25993188/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition"
                >
                  LinkedIn
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a
                  href="mailto:chriswakar@gmail.com"
                  className="hover:text-cyan-400 transition"
                >
                  chriswakar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Christu Divakar A. Built with React &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
