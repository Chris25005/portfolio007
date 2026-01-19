import { Briefcase, CheckCircle, Activity } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-b from-[#050B1E] to-[#020617] py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-400">
            Professional experience across healthcare technology, quality
            assurance, and enterprise systems.
          </p>
        </div>

        <div className="space-y-10">
          {/* Experience 1 */}
          <ExperienceCard
            icon={<Activity className="h-6 w-6 text-cyan-400" />}
            title="Benefits Analyst"
            company="Carelon Global Solutions"
            period="Apr 2024 – Present"
            points={[
              "Conduct SPIDER PC and UAT testing to validate benefit configurations and system behavior.",
              "Mentor associates while ensuring SLA, quality, and compliance standards.",
              "Utilize JIRA and SPIDER tools for defect tracking and validation.",
            ]}
          />

          {/* Experience 2 */}
          <ExperienceCard
            icon={<CheckCircle className="h-6 w-6 text-cyan-400" />}
            title="Associate Benefits Analyst"
            company="Carelon Global Solutions"
            period="Jul 2020 – Mar 2024"
            points={[
              "Executed model testing to ensure accurate benefit setup across systems.",
              "Logged, tracked, and validated defects during SIT and UAT phases.",
              "Supported successful release cycles through structured testing workflows.",
            ]}
          />

          {/* Experience 3 */}
          <ExperienceCard
            icon={<Briefcase className="h-6 w-6 text-cyan-400" />}
            title="Medical Coding & Billing Analyst"
            company="Omega Healthcare"
            period="Apr 2017 – Nov 2018"
            points={[
              "Managed U.S. healthcare billing and ICD-10 coding with strict CMS guideline adherence.",
              "Maintained high accuracy and regulatory compliance standards.",
              "Supported revenue cycle operations through precise documentation.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ================= Reusable Card ================= */

function ExperienceCard({ icon, title, company, period, points }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-10 hover:border-cyan-400/40 transition">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>

      <p className="text-gray-300 font-medium">{company}</p>
      <p className="text-gray-500 text-sm mb-6">{period}</p>

      <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
        {points.map((point, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="text-cyan-400">•</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
