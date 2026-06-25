"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const principles = [
  {
    title: "Zero-compromise mindset",
    copy:
      "Every project starts with the expectation that safe planning, communication, and execution come first.",
  },
  {
    title: "Field-led accountability",
    copy:
      "Foremen, supervisors, and crews are empowered to raise concerns and protect the job before risk grows.",
  },
  {
    title: "Client confidence",
    copy:
      "Strong safety performance supports reliable schedules, cleaner coordination, and better outcomes on site.",
  },
];

const stats = [
  { value: "24/7", label: "Safety Awareness" },
  { value: "100%", label: "Stop Work Authority" },
  { value: "Daily", label: "Field Planning" },
  { value: "Ongoing", label: "Training Focus" },
];

const practices = [
  {
    step: "01",
    title: "Pre-task planning",
    text:
      "We review scope, site conditions, tools, and work access before crews begin the task.",
  },
  {
    step: "02",
    title: "Hazard recognition",
    text:
      "Electrical, access, material-handling, and coordination hazards are identified early and discussed clearly.",
  },
  {
    step: "03",
    title: "Protective controls",
    text:
      "Work methods, PPE, barricades, lockout practices, and communication controls are applied to fit the activity.",
  },
  {
    step: "04",
    title: "Review and improve",
    text:
      "We capture lessons from the field so teams can adjust quickly and strengthen the next phase of work.",
  },
];

const commitments = [
  "Open reporting culture",
  "Craft-specific training",
  "Jobsite housekeeping discipline",
  "Supervisor-led field walkthroughs",
  "Clear emergency readiness",
  "Shared responsibility across crews",
];

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hiddenClass =
    direction === "left"
      ? "-translate-x-8 opacity-0"
      : direction === "right"
      ? "translate-x-8 opacity-0"
      : "translate-y-8 opacity-0";

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClass
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[22px] border border-white/12 bg-white/8 px-5 py-5 text-center backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/14">
      <p className="text-3xl font-black tracking-tight text-white">{value}</p>
      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/68">
        {label}
      </p>
    </div>
  );
}

function PrincipleCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(15,23,42,0.12)]">
      <div className="h-1.5 w-16 rounded-full bg-[#c6932d]" />
      <h3 className="mt-5 text-xl font-black tracking-tight text-[#16202b]">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-[#4c5b67]">{copy}</p>
    </div>
  );
}

export function SafetyPageContent() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const xShift = (pointer.x - 50) / 50;
  const yShift = (pointer.y - 50) / 50;

  return (
    <main className="bg-[#f6f2eb] text-[#18222d]">
      <section
        className="relative overflow-hidden bg-[#0f1b27]"
        onPointerMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          setPointer({
            x: ((event.clientX - rect.left) / rect.width) * 100,
            y: ((event.clientY - rect.top) / rect.height) * 100,
          });
        }}
        onPointerLeave={() => setPointer({ x: 50, y: 50 })}
        style={
          {
            "--pointer-x": `${pointer.x}%`,
            "--pointer-y": `${pointer.y}%`,
          } as CSSProperties
        }
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            transform: `translate3d(${xShift * 12}px, ${yShift * 10}px, 0)`,
            transition: "transform 0.25s ease-out",
          }}
        >
          <div className="absolute left-[8%] top-[10%] h-64 w-64 rounded-full bg-[#c6932d]/18 blur-3xl animate-softPulse" />
          <div className="absolute right-[10%] top-[12%] h-72 w-72 rounded-full bg-[#6fa0bf]/14 blur-3xl animate-softPulse [animation-delay:1.3s]" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,22,32,0.9),rgba(12,22,32,0.52)_45%,rgba(12,22,32,0.78))]" />

        <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
          <div className="relative z-10 flex items-center">
            <div className="max-w-3xl">
              <Reveal direction="left">
                <p className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80">
                  Safety First
                </p>
              </Reveal>
              <Reveal delay={100} direction="left">
                <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Safety is not a department. It is how every job gets done.
                </h1>
              </Reveal>
              <Reveal delay={180} direction="left">
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
                  We build our field culture around planning, communication, accountability,
                  and the confidence to pause work when conditions do not feel right.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-[#c6932d] px-7 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-[#111822] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8a33a]"
                  >
                    Report a Concern
                  </Link>
                  <Link
                    href="/projects"
                    className="rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
                  >
                    View Projects
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <Reveal delay={120} direction="right" className="w-full max-w-[560px]">
              <div className="overflow-hidden rounded-[30px] border border-white/15 bg-white/8 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <div className="relative h-[360px] overflow-hidden rounded-[24px] sm:h-[470px]">
                  <Image
                    src="/images/hero4.png"
                    alt="Safety-focused field team"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center"
                    style={{
                      transform: `scale(1.04) translate3d(${xShift * -8}px, ${yShift * -6}px, 0)`,
                      transition: "transform 0.3s ease-out",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/70" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-[20px] border border-white/12 bg-black/45 p-5 backdrop-blur-sm">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#d2a447]">
                        Culture of Care
                      </p>
                      <p className="mt-3 text-2xl font-black leading-tight text-white">
                        Safer planning supports stronger execution.
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/78">
                        Crews, clients, and supervisors all share responsibility for recognizing
                        hazards early and responding clearly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {stats.map((item, index) => (
                    <Reveal key={item.label} delay={220 + index * 70}>
                      <StatCard {...item} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,147,45,0.08),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.7),rgba(246,242,235,0.96))]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#9a7629]">
              Our Commitment
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#16202b] sm:text-5xl">
              The standard is simple: no task is successful unless it is safe.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#43525e]">
              Safety performance is built through habits, preparation, and follow-through,
              not slogans. We design the page around that same clarity.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <PrincipleCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1d2a36] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="left">
            <div className="flex h-full flex-col justify-between rounded-[30px] border border-white/10 bg-white/6 p-8 backdrop-blur-sm">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d2a447]">
                  Field Practice
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Built to support crews before, during, and after the work.
                </h2>
                <p className="mt-5 text-[15px] leading-8 text-white/78">
                  Good safety programs are practical. They help crews think ahead, stay aligned,
                  and respond fast when jobsite conditions change.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-[22px] border border-white/10">
                <div className="relative h-72">
                  <Image
                    src="/images/hero6.png"
                    alt="Safety planning meeting"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d2a447]">
                      Jobsite readiness
                    </p>
                    <p className="mt-2 max-w-sm text-sm leading-7 text-white/82">
                      Briefings, role clarity, and protective controls reduce confusion before tools ever move.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {practices.map((item, index) => (
              <Reveal key={item.title} delay={index * 90} direction="right">
                <div className="rounded-[24px] border border-white/10 bg-white/6 p-6 shadow-[0_14px_30px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c6932d] text-lg font-black text-[#111822]">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-white">{item.title}</h3>
                      <p className="mt-2 text-[15px] leading-7 text-white/78">{item.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf2f4] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal direction="left">
            <div className="rounded-[30px] bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#9a7629]">
                What Teams Can Expect
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#16202b] sm:text-4xl">
                A culture where people can speak up early and act with support.
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {commitments.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-[#e3e7ea] bg-[#f8fafb] px-4 py-4 text-sm font-semibold text-[#2b3945] transition duration-300 hover:-translate-y-0.5 hover:border-[#c6932d]/35"
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} direction="right">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(15,23,42,0.16)]">
              <Image
                src="/images/hero5.png"
                alt="Crew working with safety focus"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#15202b]/85 via-[#15202b]/40 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex max-w-[70%] items-center p-8">
                <div className="rounded-[24px] border border-white/14 bg-white/10 p-7 text-white backdrop-blur-md">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d2a447]">
                    Shared Responsibility
                  </p>
                  <p className="mt-4 text-2xl font-black leading-tight">
                    Strong safety culture grows when everyone owns the outcome.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/80">
                    From leadership to field crews, the expectation is clear communication,
                    respectful intervention, and disciplined follow-through.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(90deg,rgba(22,32,43,0.08)_1px,transparent_1px),linear-gradient(rgba(22,32,43,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative mx-auto max-w-5xl rounded-[34px] bg-[#16202b] px-8 py-12 text-center text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)] sm:px-12">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d2a447]">
              Ready to Connect
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Want a partner that treats safety as part of project quality?
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
              Let&apos;s talk about how your team, schedule, and jobsite expectations can align with
              a safety-first delivery approach.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#c6932d] px-7 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-[#111822] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8a33a]"
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-white/18 bg-white/8 px-7 py-3.5 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/14"
              >
                Learn About Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
