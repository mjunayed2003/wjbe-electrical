"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const tabs = ["Core Services", "Value-Added Services", "Solutions Delivered", "Markets Served"];

const topCards = [
  {
    title: "Electrical Installation",
    image: "/images/hero1.png",
  },
  {
    title: "Systems Integration",
    image: "/images/hero2.jpg",
  },
  {
    title: "Preconstruction",
    image: "/images/hero3.jpg",
  },
  {
    title: "Critical Power",
    image: "/images/hero4.png",
  },
];

const valueAddedCards = [
  {
    title: "Electrical Risk Management",
    image: "/images/hero5.png",
    copy:
      "Planning, coordination, and field-ready safety practices that keep electrical work organized and controlled.",
  },
  {
    title: "National Solution Services",
    image: "/images/hero6.png",
    copy:
      "Support for clients who need consistent electrical service across multiple locations or ongoing programs.",
  },
  {
    title: "Engineer, Procure, Construct",
    image: "/images/hero7.png",
    copy:
      "Integrated delivery that helps align design intent, material procurement, and construction execution.",
  },
];

const solutionCards = [
  {
    title: "Industrialized Construction Builds",
    image: "/images/hero1.png",
  },
  {
    title: "Electrical Assemblies",
    image: "/images/hero2.jpg",
  },
  {
    title: "Distributed Energy Resources",
    image: "/images/hero3.jpg",
  },
  {
    title: "EV Charging Infrastructure",
    image: "/images/hero4.png",
  },
];

const marketCards = [
  { title: "Data Center", image: "/images/hero5.png" },
  { title: "Entertainment", image: "/images/hero6.png" },
  { title: "Healthcare", image: "/images/hero7.png" },
  { title: "Industrial", image: "/images/hero1.png" },
  { title: "Renewable Energy", image: "/images/hero2.jpg" },
  { title: "Science & Technology", image: "/images/hero3.jpg" },
];

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
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

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-4xl px-1 text-center sm:px-4">
      {eyebrow ? (
        <p
          className={`text-[10px] font-semibold uppercase tracking-[0.28em] sm:text-[11px] sm:tracking-[0.34em] ${
            dark ? "text-white/70" : "text-[#7d8891]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 text-[1.9rem] font-black uppercase leading-tight tracking-[0.08em] sm:mt-4 sm:text-4xl sm:tracking-[0.12em] ${
          dark ? "text-white" : "text-[#2f3c47]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mx-auto mt-4 max-w-3xl text-base leading-7 sm:mt-5 sm:text-[19px] sm:leading-8 ${
          dark ? "text-white/88" : "text-[#33414b]"
        }`}
      >
        {copy}
      </p>
    </div>
  );
}

function TopCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-[4px] bg-white shadow-[0_10px_22px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,0.28)]">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover object-center transition duration-500 hover:scale-105"
        />
      </div>
      <div className="border-t border-[#e6ebef] bg-white px-4 py-5 text-center">
        <p className="text-[1.15rem] font-black leading-8 text-[#26343f]">{title}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#47647c]">
          Learn More
          <span className="text-[#8dbbd1]">→</span>
        </span>
      </div>
    </div>
  );
}

function SplitCard({
  title,
  copy,
  image,
}: {
  title: string;
  copy: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-[4px] bg-[#4c5f6f] shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.28)]">
      <div className="grid min-h-[180px] grid-cols-[1fr_1.2fr]">
        <div className="relative overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 78% 100%, 0 100%)" }}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col justify-between px-5 py-5 text-white">
          <h3 className="max-w-[12ch] text-[1.35rem] font-black leading-[1.15] tracking-tight">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/82">{copy}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-white">
            Learn More
            <span className="text-[#9dc9db]">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function OverlayCard({
  title,
  image,
  dark = false,
}: {
  title: string;
  image: string;
  dark?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[4px] bg-white shadow-[0_10px_24px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.28)]">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/8" />
        <div
          className={`absolute inset-x-0 bottom-0 px-4 py-4 text-center backdrop-blur-[2px] ${
            dark
              ? "bg-[rgba(206,214,220,0.78)] text-[#3d454c]"
              : "bg-[rgba(232,236,239,0.78)] text-[#3d454c]"
          }`}
        >
          <p className="text-[1rem] font-black uppercase tracking-[0.2em]">{title}</p>
        </div>
      </div>
    </div>
  );
}

export function ServicesPageContent() {
  return (
    <main className="bg-white text-[#2b2f36]">
      <section className="border-b border-[#d9dee3] bg-[#465968] text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-start gap-8 overflow-x-auto px-4 py-4 text-[12px] font-black uppercase tracking-[0.18em] sm:justify-center sm:gap-12 sm:px-6 sm:text-[13px] sm:tracking-[0.24em] lg:px-8">
          {tabs.map((tab, index) => (
            <a
              key={tab}
              href={`#section-${index}`}
              className="whitespace-nowrap transition duration-300 hover:text-[#d8e4ea]"
            >
              {tab}
            </a>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eef4f7]">
        <div className="mx-auto w-full max-w-[1700px] px-4 pt-4 sm:px-6 lg:px-8">
          <div className="relative h-[340px] overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.16)] sm:h-[410px] lg:h-[460px]">
            <Image
              src="/images/hero7.png"
              alt="Services hero"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.08))]" />
          </div>
          <div className="border-b border-[#d7dde2] bg-[#eceff1] px-4 py-3 text-sm font-semibold text-[#42586c] sm:px-6">
            <div className="mx-auto flex max-w-7xl items-center gap-3">
              <Link href="/" className="underline decoration-[#7ca8bf] underline-offset-2">
                Home
              </Link>
              <span className="text-[#8bb2c6]">›</span>
              <span>Services &amp; Solutions</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-[#3f4f5d]" />
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,rgba(64,80,92,0.08)_1px,transparent_1px),linear-gradient(rgba(64,80,92,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 max-w-4xl px-1 sm:px-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7e8e9c] sm:text-[11px] sm:tracking-[0.36em]">
              Where vision meets expertise
            </p>
            <h1 className="mt-4 max-w-4xl text-[2rem] font-black uppercase leading-[1.06] tracking-[0.06em] text-[#748595] sm:mt-5 sm:text-5xl sm:tracking-[0.08em]">
              Where vision meets expertise
            </h1>
            <p className="mt-4 max-w-5xl text-base leading-7 text-[#31414d] sm:mt-6 sm:text-[19px] sm:leading-9">
              Whether working with a single vertical or leveraging strengths across our markets,
              each project allows you the flexibility to select services and solutions unique to
              your project requirements.
            </p>
          </div>
        </div>
      </section>

      <section id="section-0" className="bg-[#546779] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core Services"
            title="Core Services"
            copy="Core electrical services delivered with a focus on safety, coordination, quality, and dependable field execution."
            dark
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {topCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <TopCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="section-1" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Value-Added Services"
            title="Value-Added Services"
            copy="These services support project planning, execution, and long-term electrical system performance."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {valueAddedCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <SplitCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="section-2" className="bg-[#eef6f9] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Solutions Delivered"
            title="Solutions Delivered"
            copy="Project solutions built around real jobsite needs, client coordination, and dependable delivery."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {solutionCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <OverlayCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="section-3" className="bg-[#465968] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Markets Served"
            title="Markets Served"
            copy="Electrical work for industrial, commercial, institutional, and specialized facility environments."
            dark
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {marketCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 65}>
                <OverlayCard {...item} dark />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,rgba(64,80,92,0.08)_1px,transparent_1px),linear-gradient(rgba(64,80,92,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-[2rem] font-black uppercase tracking-[0.12em] text-[#7d8891]">
              Ready to Connect?
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-[#34424b]">
              Contact us to learn how our dynamic end-to-end capabilities can benefit you.
            </p>
            <a
              href="/contact"
              className="mt-10 inline-flex -skew-x-6 rounded-sm bg-[#465968] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_10px_22px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#374959]"
            >
              <span className="skew-x-6">Contact Us</span>
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
