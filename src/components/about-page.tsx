"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const solutions = [
  { title: "Electrical contracting", icon: "⚡", desc: "Full-scope electrical project delivery from design to commissioning." },
  { title: "Project management", icon: "📋", desc: "End-to-end coordination across complex multi-phase build programs." },
  { title: "Engineering & integration", icon: "🔧", desc: "Systems integration with precision design and technical oversight." },
  { title: "Low-voltage systems", icon: "📡", desc: "Data, security, fire alarm, and communication infrastructure." },
  { title: "Safety-first delivery", icon: "🛡️", desc: "OSHA-compliant safety culture embedded across every project." },
  { title: "24/7 emergency support", icon: "🚨", desc: "Round-the-clock emergency response with rapid field deployment." },
];

const sectors = [
  "Commercial",
  "Industrial",
  "Healthcare",
  "Education",
  "Transportation",
  "Utilities",
];

const clients = [
  "NASA-ogo.png",
  "Honeywell-logo-1024x366.png",
  "Williams-logo.png",
  "Phillips-66.png",
  "Weeks-Marine-logo-1024x269.jpg",
  "Vulcan.png",
  "UNO-logo-1024x300.png",
  "Terrebonne-Parish-logo.png",
  "Stepan-logo.png",
  "Tuesday-Morning.png",
  "The-Walsh-Group-Logo.jpg",
  "St-Charles-Parish-logo-1024x290.png",
  "RTA.png",
  "Rhodia.png",
  "St-Tammany-seal-1024x994.jpg",
  "Port-of-NOLA-logo.jpg",
  "Shell.png",
  "Cargill.png",
  "Citgo.png",
  "Fluor.png",
  "Entergy-Nuclear.png",
  "Air-Liquide.png",
  "BP1.png",
  "Jacobs.png",
  "Monsanto-logo.png",
  "Harrahs.png",
  "LBC.png",
  "Kinder-Morgan-logo.gif",
  "International-Paper-1024x155.png",
  "CF-Industries.png",
];

const stats = [
  { value: "90+", label: "Years in Business" },
  { value: "30+", label: "Trusted Clients" },
  { value: "6", label: "Sectors Served" },
  { value: "24/7", label: "Emergency Support" },
];

function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const initial =
    direction === "up"
      ? "translate-y-8 opacity-0"
      : direction === "left"
      ? "-translate-x-8 opacity-0"
      : direction === "right"
      ? "translate-x-8 opacity-0"
      : "opacity-0";

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out will-change-transform ${
        visible ? "translate-y-0 translate-x-0 opacity-100" : initial
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/8 px-6 py-5 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/14">
      <span className="text-3xl font-black tracking-tight text-white">{value}</span>
      <span className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">{label}</span>
    </div>
  );
}

export function AboutPageContent() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const xShift = (pointer.x - 50) / 50;
  const yShift = (pointer.y - 50) / 50;

  return (
    <main className="bg-white text-[#171717]">

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#f0f2f8]"
        onPointerMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setPointer({
            x: ((e.clientX - r.left) / r.width) * 100,
            y: ((e.clientY - r.top) / r.height) * 100,
          });
        }}
        onPointerLeave={() => setPointer({ x: 50, y: 50 })}
        style={{ "--pointer-x": `${pointer.x}%`, "--pointer-y": `${pointer.y}%` } as CSSProperties}
      >
        {/* ambient blobs */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ transform: `translate3d(${xShift * 14}px, ${yShift * 10}px, 0)`, transition: "transform 0.25s ease-out" }}
        >
          <div className="absolute left-[5%] top-[8%] h-72 w-72 rounded-full bg-[#1090d7]/12 blur-3xl animate-softPulse" />
          <div className="absolute right-[6%] top-[12%] h-80 w-80 rounded-full bg-[#ff9d00]/10 blur-3xl animate-softPulse [animation-delay:1.2s]" />
          <div className="absolute bottom-[10%] left-[40%] h-56 w-56 rounded-full bg-[#1090d7]/8 blur-3xl animate-softPulse [animation-delay:2.4s]" />
        </div>

        <div className="mx-auto w-full max-w-[1700px] px-4 pt-4 sm:px-6 lg:px-8">
          <div className="relative h-[82vh] min-h-[680px] overflow-hidden rounded-[28px] shadow-[0_32px_90px_rgba(0,0,0,0.18)]">

            {/* background image */}
            <Image
              src="/images/hero5.png"
              alt="Workers inside a commercial building"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
              style={{
                transform: `scale(1.04) translate3d(${xShift * -10}px, ${yShift * -8}px, 0)`,
                transition: "transform 0.3s ease-out",
              }}
            />

            {/* overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

            {/* floating info card — top-left, only large screens */}
            <Reveal className="absolute left-[5%] top-[12%] hidden lg:block" direction="left" delay={200}>
              <div className="w-[260px] rounded-[20px] border border-white/20 bg-[#1090d7] p-7 text-white shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">Our focus</p>
                <p className="mt-2 text-2xl font-black uppercase leading-tight tracking-[0.08em]">Many Markets</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">Individual attention</p>
                <div className="mt-4 h-px w-full bg-white/20" />
                <p className="mt-4 text-[13px] leading-6 text-white/85">
                  Commercial, industrial, and specialized customers served with dependable electrical contracting and a strong safety culture.
                </p>
              </div>
            </Reveal>

            {/* bottom accent bars */}
            <div className="absolute inset-x-0 bottom-0 h-[6px] bg-[#1090d7]" />
            <div className="absolute bottom-0 left-0 h-[4px] w-[55%] bg-[#ff9d00]" />

            {/* hero text card — bottom */}
            <div className="absolute inset-x-0 bottom-0 px-4 pb-10 lg:left-[8%] lg:bottom-[8%] lg:right-auto lg:px-0">
              <Reveal delay={100}>
                <div className="max-w-[660px] rounded-[26px] border border-white/25 bg-white/90 p-8 shadow-[0_28px_80px_rgba(0,0,0,0.18)] backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[#1090d7]">
                    About Walter J. Barnes Electric
                  </p>
                  <h1 className="mt-4 text-4xl font-black leading-[1.1] tracking-tight text-[#0f172a] sm:text-5xl">
                    Built for projects that need experience, scale, and confidence.
                  </h1>
                  <p className="mt-5 text-base leading-7 text-[#4b5563] sm:text-[17px]">
                    Founded in 1932, Walter J. Barnes Electric serves the New Orleans area with full-service electrical contracting, project management, emergency response, and safety-focused field execution.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* stats row */}
          <div className="mx-4 -mt-6 overflow-hidden rounded-[20px] bg-[#2b2d5e] px-6 py-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] sm:mx-8 lg:mx-12">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80} direction="up">
                  <StatCard {...s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[#1090d7]">Complete Solutions</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-[#0f172a] sm:text-5xl">
            We&apos;ve got what you need.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#374151]">
            From planning and coordination through installation, maintenance, and emergency response — one team, full capability.
          </p>
          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#f97316] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_20px_rgba(249,115,22,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ea6c10] hover:shadow-[0_8px_28px_rgba(249,115,22,0.36)]"
          >
            View Our Services
            <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </Reveal>
      </section>

      {/* ── ABOUT + SIDEBAR ──────────────────────────────────────── */}
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 pb-10 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">

        {/* main about card */}
        <Reveal direction="left">
          <div className="rounded-[28px] border border-black/6 bg-gradient-to-b from-white to-[#f8faff] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[#1090d7]">About Us</p>
            <h2 className="mt-4 text-3xl font-black leading-[1.15] tracking-tight text-[#0f172a] sm:text-4xl">
              Founded in 1932 — a full-service electrical design, build, and maintenance contractor.
            </h2>
            <p className="mt-5 text-[15px] leading-8 text-[#4b5563]">
              Barnes Electric is a third-generation, family-owned specialty services company providing comprehensive project management and execution strategies to heavy industrial markets. Opened in the New Orleans area, the company continues to deliver customer-focused electrical solutions with a strong emphasis on safety, communication, and schedule discipline.
            </p>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {[
                "Space Facilities",
                "Heavy Industrial",
                "Petrochemical",
                "Marine Navigation Aids",
                "Oil & Gas",
                "Health & Hospitals",
                "Learning/Training Facilities",
                "Transportation",
                "Bridges",
                "Wastewater/Sewer Systems",
              ].map((item, index) => (
                <li
                  key={item}
                  className="group flex items-center gap-3 rounded-xl border border-black/5 bg-white px-4 py-3 text-[14px] font-medium text-[#1f2937] shadow-[0_4px_14px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-[#1090d7]/30 hover:shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#1090d7] transition duration-300 group-hover:scale-125" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* sidebar */}
        <div className="flex flex-col gap-6">
          {/* nav card */}
          <Reveal delay={80} direction="right">
            <div className="rounded-[26px] border border-white/10 bg-gradient-to-b from-[#2b2d5e] to-[#222449] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#ffd44d]">About Us</p>
              <ul className="mt-5 space-y-2.5">
                {["History", "Our Team", "News", "Quick Facts"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/6 px-4 py-3 text-[15px] font-semibold text-white transition duration-300 hover:translate-x-1.5 hover:bg-white/14 hover:border-white/20"
                    >
                      <svg className="h-4 w-4 shrink-0 text-[#ffd44d]" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* mission card */}
          <Reveal delay={160} direction="right">
            <div className="overflow-hidden rounded-[26px] border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.07)]">
              <div className="flex items-center justify-between bg-[#2b2d5e] px-6 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#ffd44d]">Mission</p>
                <div className="h-1.5 w-1.5 rounded-full bg-[#ffd44d] animate-pulse" />
              </div>
              <div className="p-6">
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src="/about/Cajun-logo-1024x235.jpg"
                    alt="Mission"
                    width={700}
                    height={420}
                    className="h-36 w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <p className="mt-5 text-[14px] leading-7 text-[#4b5563]">
                  Safety takes precedence over all business pursuits and work practices. Walter J. Barnes Electric is committed to the health and safety of our employees, customers, contractors, and the communities in which we work.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CLIENTS ──────────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-[28px] border border-white/10 bg-gradient-to-b from-[#2b2d5e] to-[#1f2147] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#ffd44d]">Our Clients</p>
              <p className="text-[11px] uppercase tracking-[0.26em] text-white/45">Hover to animate</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
              {clients.map((file, index) => (
                <div
                  key={file}
                  className="group flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white p-3 shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1.5 hover:scale-[1.06] hover:border-[#1090d7]/30 hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)]"
                  style={{ transitionDelay: `${index * 18}ms` }}
                >
                  <Image
                    src={`/about/${file}`}
                    alt={file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ")}
                    width={160}
                    height={80}
                    className="max-h-full w-auto object-contain transition duration-300 group-hover:scale-108"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── NATIONWIDE REACH ─────────────────────────────────────── */}
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-16">
        <Reveal direction="left">
          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-light uppercase tracking-[0.36em] text-[#6b7280]">Experienced teams with</p>
            <h2 className="mt-2 max-w-md text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#1090d7] sm:text-6xl">
              Nationwide Reach
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#3f3f46]">
              Barnes Electric&apos;s story centers on long-term service, dependable project delivery, and a team that can support complex work across multiple sectors.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-sm bg-[#f97316] px-7 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_4px_20px_rgba(249,115,22,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ea6c10]"
            >
              Contact Us
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={80} direction="right">
          <div className="relative">
            <div className="overflow-hidden rounded-[24px] border border-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
              <Image
                src="/images/hero6.png"
                alt="Nationwide reach visual"
                width={1200}
                height={900}
                className="h-[520px] w-full object-cover object-center transition duration-[1600ms] hover:scale-[1.04]"
              />
            </div>
            <div className="absolute -bottom-5 left-6 h-3 w-[72%] rounded-r-full bg-[#1090d7]" />
          </div>
        </Reveal>
      </section>

      {/* ── INTEGRITY SECTION ─────────────────────────────────────── */}
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal direction="left">
          <div className="relative h-[560px] overflow-hidden rounded-[34px] shadow-[0_28px_80px_rgba(0,0,0,0.16)] lg:h-[620px]">
            <Image
              src="/images/hero4.png"
              alt="Company leadership"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />

            {/* quote overlay — right-aligned inside the image */}
            <div className="absolute inset-y-0 right-0 flex w-[62%] items-center p-8">
              <div className="w-full rounded-[24px] border border-white/12 bg-black/70 p-7 text-white backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">Integrity</p>
                <blockquote className="mt-5 text-[1.9rem] font-light leading-[1.2] text-white sm:text-[2.2rem]">
                  Built on a long history of honest, fair, and dependable work.
                </blockquote>
                <div className="mt-6 h-px w-12 bg-[#1090d7]" />
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">Company mindset</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col justify-center gap-5">
          {[
            {
              title: "Safety First",
              text: "Electrical and construction safety remain a core part of the company&apos;s public identity.",
              color: "bg-[#1090d7]",
            },
            {
              title: "Project Confidence",
              text: "The business positions itself around scalable project delivery and steady execution.",
              color: "bg-[#ff9d00]",
            },
            {
              title: "Trusted Support",
              text: "Emergency service and estimating support stay visible in the contact strategy.",
              color: "bg-[#2b2d5e]",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 110} direction="right">
              <div className="group flex gap-4 rounded-[22px] border border-black/5 bg-white p-5 shadow-[0_10px_36px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.09)]">
                <div className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.color} text-sm font-black text-white`}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight text-[#0f172a]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-[#4b5563]">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SOLUTIONS GRID ────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[#1090d7]">What we do</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl">Our core capabilities.</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, index) => (
            <Reveal key={item.title} delay={index * 65}>
              <div className="group flex flex-col rounded-[22px] border border-black/5 bg-gradient-to-b from-white to-[#f8fafc] p-6 shadow-[0_10px_36px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[#1090d7]/25 hover:shadow-[0_20px_48px_rgba(15,23,42,0.09)]">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-4 text-[17px] font-black text-[#0f172a] transition duration-300 group-hover:text-[#1090d7]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#4b5563]">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT + SECTORS ─────────────────────────────────────── */}
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 pb-24 pt-8 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Reveal direction="left">
          <div className="flex h-full flex-col justify-between rounded-[26px] border border-white/10 bg-gradient-to-b from-[#1090d7] to-[#0c7bbf] p-8 text-white shadow-[0_24px_70px_rgba(16,144,215,0.25)]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-white/75">Contact</p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Emergency service available 24/7.
              </h2>
              <div className="mt-6 space-y-3 text-[15px] text-white/90">
                <p className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 opacity-70" viewBox="0 0 16 16" fill="none">
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h1.379a.75.75 0 01.707.49l.928 2.716a.75.75 0 01-.168.79l-.727.728a10.024 10.024 0 004.657 4.656l.728-.727a.75.75 0 01.79-.168l2.716.928a.75.75 0 01.49.707V12.5A1.5 1.5 0 0113 14c-6.075 0-11-4.925-11-10.5z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Emergency: 504.835.1756
                </p>
                <p className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 opacity-70" viewBox="0 0 16 16" fill="none">
                    <path d="M2.5 3h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-9A.5.5 0 012.5 3zM2 3.5l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  General: info@wjbe.com
                </p>
                <p className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 opacity-70" viewBox="0 0 16 16" fill="none">
                    <path d="M2.5 3h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-9A.5.5 0 012.5 3zM2 3.5l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Estimating: estimating@wjbe.com
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-sm border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-white/15 hover:-translate-y-0.5"
            >
              Get in touch
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((item, index) => (
            <Reveal key={item} delay={index * 55} direction="right">
              <div className="group flex flex-col rounded-[22px] border border-black/5 bg-gradient-to-b from-white to-[#f8fafc] p-5 shadow-[0_10px_36px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1.5 hover:border-[#1090d7]/25 hover:shadow-[0_18px_44px_rgba(15,23,42,0.09)]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#1090d7]">Sector</p>
                <h3 className="mt-3 text-[17px] font-black text-[#0f172a] transition duration-300 group-hover:text-[#1090d7]">
                  {item}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#4b5563]">Electrical support tailored to project demands.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
