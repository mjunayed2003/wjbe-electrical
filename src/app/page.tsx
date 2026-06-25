import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="bg-[linear-gradient(180deg,#0d1120_0%,#f4efea_100%)]">
      <Hero />
      <section className="mx-auto grid w-full max-w-7xl gap-5 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          ["Fast-moving visuals", "The hero cycles through your local images like a branded video loop."],
          ["Premium look", "Dark overlays, warm highlights, and motion make the site feel established."],
          ["Easy to extend", "You can keep adding sections below without changing the hero structure."],
        ].map(([title, desc]) => (
          <article
            key={title}
            className="rounded-3xl border border-black/5 bg-white/90 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(143,7,7,0.12)]"
          >
            <h2 className="text-lg font-semibold text-[#1f1a18]">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#635954]">{desc}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
