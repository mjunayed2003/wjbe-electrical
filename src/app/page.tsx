export default function Home() {
  return (
    <main className="min-h-[calc(100vh-80px)] bg-[linear-gradient(180deg,#faf7f3_0%,#f4efea_100%)]">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-[fadeUp_700ms_ease-out_both]">
          <p className="mb-4 inline-flex rounded-full border border-[#8f0707]/15 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#8f0707] shadow-sm">
            Corporate Layout Preview
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[#191515] sm:text-5xl">
            Clean navbar, strong brand presence, and ready for future admin
            dashboard placement.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#5e5551] sm:text-lg">
            I built this as a flexible starter shell: the header stays fixed at
            the top, the navigation is responsive, and the page structure can
            later hold a public site or an admin dashboard without reworking the
            whole layout.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Brand-first header", "Logo block, service links, and a clear CTA area."],
            ["Dashboard-ready", "Easy to reuse the shell for admin routes later."],
            ["Mobile friendly", "The nav collapses into a simple menu on small screens."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-2xl border border-black/5 bg-white/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(143,7,7,0.12)] animate-[fadeUp_700ms_ease-out_both]"
            >
              <h2 className="text-lg font-semibold text-[#1f1a18]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#635954]">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
