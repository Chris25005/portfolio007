import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

export default function Certifications() {
  const [open, setOpen] = useState(false);

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

        {/* Certificate Card */}
        <div
          onClick={() => setOpen(true)}
          className="group cursor-pointer max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-cyan-400/40 transition"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="/images/guvi-iitm-certificate.png"
              alt="GUVI IIT-M Pravartak Full Stack Certificate"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Info */}
          <div className="p-8 text-left">
            <h3 className="text-xl font-semibold text-white mb-2">
              IIT-M Pravartak Certified Full Stack Development (With AI Tools)
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              Issued by GUVI (An IIT-M Incubated Company)
            </p>

            <p className="text-gray-500 text-sm">
              March 2025 – September 2025
            </p>

            <div className="mt-4 inline-flex items-center gap-2 text-cyan-400 text-sm">
              Click to view certificate
              <ExternalLink className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative max-w-5xl w-full bg-[#020617] rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white transition"
            >
              <X className="h-6 w-6" />
            </button>

            <img
              src="/images/guvi-iitm-certificate.png"
              alt="Full Stack Certificate Full View"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
