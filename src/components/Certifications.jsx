import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-gradient-to-b from-[#020617] to-[#050B1E] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Certification
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-16">
          Industry-recognized certification validating full-stack development
          skills and real-world project experience.
        </p>

        {/* Certification Card */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 hover:border-cyan-400/40 transition">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-400/10 border border-cyan-400/30">
              <Award className="h-8 w-8 text-cyan-400" />
            </div>
          </div>

          {/* Content */}
          <h3 className="text-2xl font-semibold text-white mb-3">
            IIT-M Pravarttak Certified Full Stack Development (With AI Tools)
          </h3>

          <p className="text-gray-400 mb-2">
            Issued by <span className="text-white">GUVI</span> (An IIT-M
            Incubated Company)
          </p>

          <p className="text-gray-500 mb-6">
            March 2025 – September 2025
          </p>

          {/* Action */}
          <a
            href="/images/guvi-iitm-certificate.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            Click to view certificate
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
