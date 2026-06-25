"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const filters = ["All Projects", "Services & Solutions", "Market"];

const projects = [
  {
    location: "Ridgeland, MS",
    title: "Confidential Client: Duct Bank",
    image: "/images/hero1.png",
    desc:
      "Electrical coordination and infrastructure delivery for a confidential industrial project.",
  },
  {
    location: "Ennis, TX",
    title: "FreshPet",
    image: "/images/hero2.jpg",
    desc:
      "Essential electrical infrastructure for continuous production and system integration.",
  },
  {
    location: "Peachtree Corners, GA",
    title: "Intuitive Parking Deck",
    image: "/images/hero3.jpg",
    desc:
      "Electrical, lighting, fire alarm, and EV charging scope for a campus expansion.",
  },
  {
    location: "Russellville, KY",
    title: "Logan Aluminum",
    image: "/images/hero4.png",
    desc:
      "An active-facility outage upgrade for furnace controls and new raceways/conductors.",
  },
  {
    location: "Guthrie, KY",
    title: "Novelis",
    image: "/images/hero5.png",
    desc:
      "Power and control systems for large-scale conveyance and process equipment.",
  },
  {
    location: "Perry, GA",
    title: "Jack Link’s Production Facility",
    image: "/images/hero6.png",
    desc:
      "Preconstruction, electrical installation, and process control work for new production lines.",
  },
  {
    location: "Columbus, MS",
    title: "Aluminum Dynamics",
    image: "/images/hero1.png",
    desc:
      "Complex systems for aluminum recycling machines and filtration operations.",
  },
  {
    location: "Lebanon, TN",
    title: "Ferguson Distribution",
    image: "/images/hero2.jpg",
    desc:
      "Electrical installation in a warehouse with elevated work and complex pathways.",
  },
  {
    location: "Clarksville, TN",
    title: "Confidential Client: Battery Manufacturing Facility",
    image: "/images/hero3.jpg",
    desc:
      "Budget-managed electrical infrastructure for an EV battery production facility.",
  },
];

const marketTiles = [
  "Industrial",
  "Commercial",
  "Renewable",
  "Healthcare",
  "Science & Tech",
  "Transportation",
];

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
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
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function ProjectCard({
  location,
  title,
  desc,
  image,
}: {
  location: string;
  title: string;
  desc: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-[4px] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.26)]">
      <div className="relative h-56 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 bg-[rgba(132,145,153,0.55)] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white/70">
          Confidential Project
        </div>
      </div>
      <div className="px-5 py-5">
        <p className="text-[15px] font-black text-[#2b2f36]">{location}</p>
        <h3 className="mt-3 min-h-[4rem] text-[1.2rem] font-black leading-7 text-[#2b2f36]">
          {title}
        </h3>
        <p className="mt-6 text-[15px] leading-7 text-[#39444f]">{desc}</p>
        <div className="mt-8 border-t border-[#d2d8dd] pt-4">
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-[#445d75]">
            Read More
            <span className="text-[#9cbad0]">→</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectsPageContent() {
  return (
    <main className="bg-[#7d8991] text-[#2b2f36]">
      <section className="border-b border-[#44586a] bg-[#425565]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-14 overflow-x-auto px-4 py-4 text-sm font-bold uppercase tracking-[0.24em] text-white sm:px-6 lg:px-8">
          {filters.map((filter, index) => (
            <a
              key={filter}
              href={`#section-${index}`}
              className={`whitespace-nowrap transition duration-300 hover:text-[#d8e4ea] ${
                index === 0 ? "border-b-4 border-[#9ecbd7] pb-1" : ""
              }`}
            >
              {filter}
            </a>
          ))}
          <span className="ml-4 text-2xl leading-none text-white/95">⌕</span>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((item, index) => (
              <Reveal key={item.title} delay={index * 45}>
                <ProjectCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {marketTiles.map((item, index) => (
              <Reveal key={item} delay={index * 50}>
                <div className="group overflow-hidden rounded-[4px] bg-white shadow-[0_8px_18px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1">
                  <div className="relative h-56">
                    <Image
                      src={index % 2 === 0 ? "/images/hero5.png" : "/images/hero6.png"}
                      alt={item}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5" />
                    <div className="absolute inset-x-0 bottom-0 bg-[rgba(232,236,239,0.75)] px-4 py-4 text-center text-[#474b4f] backdrop-blur-[2px]">
                      <p className="text-[1rem] font-black uppercase tracking-[0.2em]">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex items-center justify-center gap-3 text-white/90">
            <span className="uppercase tracking-[0.24em]">Prev</span>
            <span className="text-xl">‹</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#9ecbd7]" />
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span className="text-xl">›</span>
            <span className="uppercase tracking-[0.24em]">Next</span>
          </div>
        </div>
      </section>
    </main>
  );
}
