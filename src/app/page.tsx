import { Hero } from "@/components/hero";

const services = [
  "Electrical construction",
  "Project management",
  "Engineering and integration",
  "Low-voltage systems",
  "Maintenance and support",
  "Emergency service",
];

const highlights = [
  {
    title: "Founded in 1932",
    desc: "A long-established family business with third-generation roots.",
  },
  {
    title: "New Orleans Area",
    desc: "Built around the market the company has served for decades.",
  },
  {
    title: "24/7 Contact",
    desc: "Emergency service line: 504.835.1756.",
  },
];

export default function Home() {
  return (
    <main className="bg-[linear-gradient(180deg,#0d1120_0%,#f4efea_100%)]">
      <Hero />

      <section id="about" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <article className="rounded-[32px] border border-black/5 bg-white/90 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#8f0707]">
              About Walter J. Barnes Electric
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#1f1a18] sm:text-4xl">
              Full-service electrical contractor with a strong safety and project
              management focus.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#635954] sm:text-base">
              The company’s public information emphasizes comprehensive project
              management, specialty electrical services, and a solution-oriented
              team that works across complex commercial and industrial projects.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/5 bg-[#faf7f3] p-5"
                >
                  <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#1f1a18]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#635954]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[32px] border border-black/5 bg-[#171b2a] p-8 text-white shadow-[0_18px_60px_rgba(15,23,42,0.16)]">
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-[#ffd44d]">
              Core Services
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight">
              Services shaped around real jobsite needs.
            </h2>
            <div className="mt-6 grid gap-3">
              {services.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="safety" className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            [
              "Safety standards",
              "The company explicitly highlights communication, concerns, and safe work practices.",
            ],
            [
              "Service request",
              "A dedicated service request flow supports new work and follow-up needs.",
            ],
            [
              "Contact ready",
              "Public contact details include 504.835.1756 and info@wjbe.com.",
            ],
          ].map(([title, desc]) => (
            <article
              key={title}
              className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-[#1f1a18]">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#635954]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-[#8f0707] px-8 py-10 text-white shadow-[0_20px_70px_rgba(143,7,7,0.28)]">
          <p className="text-xs font-bold uppercase tracking-[0.34em] text-white/70">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Walter J. Barnes Electric
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                Emergency service: 504.835.1756
                {"  "}
                General: info@wjbe.com
                {"  "}
                Estimating: estimating@wjbe.com
              </p>
            </div>
            <a
              href="#service-request"
              className="inline-flex rounded-full bg-[#ffd44d] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#14162a] transition hover:bg-[#ffe27b]"
            >
              Service Request
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
