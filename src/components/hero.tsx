"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero1.png",
    eyebrow: "Founded in 1932",
    title: "Walter J. Barnes Electric for electrical service, safety, and support.",
    description:
      "A full-service electrical contractor serving the New Orleans area with project management, safety-first crews, and 24/7 emergency support.",
  },
  {
    image: "/images/hero2.jpg",
    eyebrow: "24/7 Emergency Service",
    title: "Reliable response when the job cannot wait.",
    description:
      "The site content highlights emergency availability, estimating support, and a solution-oriented approach.",
  },
  {
    image: "/images/hero3.jpg",
    eyebrow: "Project Management",
    title: "Comprehensive electrical work from planning through completion.",
    description:
      "Barnes Electric is positioned as a specialty contractor for complex commercial and industrial needs.",
  },
  {
    image: "/images/hero4.png",
    eyebrow: "Safety First",
    title: "A culture built around electrical and construction safety standards.",
    description:
      "The brand places strong emphasis on communication, concern reporting, and a safe work environment.",
  },
  {
    image: "/images/hero5.png",
    eyebrow: "Trusted Since 1932",
    title: "Third-generation family roots with long-term Gulf Coast experience.",
    description:
      "The company history describes a long-standing family-owned electrical services business.",
  },
  {
    image: "/images/hero6.png",
    eyebrow: "Solutions Oriented",
    title: "Electrical contracting across complex facilities and sectors.",
    description:
      "The company profile references commercial, industrial, healthcare, education, transportation, and utility-style work.",
  },
  {
    image: "/images/hero7.png",
    eyebrow: "New Orleans Area",
    title: "Built for clients who need dependable service and project confidence.",
    description:
      "This hero combines the WJBE information with a different design direction for your own site.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[index];
  const xShift = (pointer.x - 50) / 50;
  const yShift = (pointer.y - 50) / 50;

  return (
    <section
      className="relative isolate overflow-hidden bg-[#10131f] text-white"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPointer({ x, y });
      }}
      onPointerLeave={() => setPointer({ x: 50, y: 50 })}
      style={
        {
          "--pointer-x": `${pointer.x}%`,
          "--pointer-y": `${pointer.y}%`,
        } as CSSProperties
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,212,77,0.18),transparent_28%),linear-gradient(180deg,rgba(7,10,18,0.2),rgba(7,10,18,0.78))]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-80 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${xShift * 14}px, ${yShift * 10}px, 0)`,
        }}
      >
        <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-[#ffd44d]/10 blur-3xl animate-softPulse" />
        <div className="absolute right-[10%] top-[8%] h-64 w-64 rounded-full bg-white/10 blur-3xl animate-softPulse" />
      </div>

      <div className="absolute inset-0 opacity-40">
        {slides.map((item, idx) => (
          <Image
            key={item.image}
            src={item.image}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover transition-all duration-1000 ease-out ${
              idx === index
                ? "scale-110 opacity-100 blur-0"
                : "scale-105 opacity-0 blur-[2px]"
            }`}
            style={{
              transform:
                idx === index
                  ? `scale(1.1) translate3d(${xShift * -18}px, ${yShift * -12}px, 0)`
                  : undefined,
            }}
            priority={idx === 0}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-84px)] w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-16">
        <div className="flex items-end">
          <div
            className="max-w-3xl pb-8 pt-10 transition-transform duration-200 ease-out"
            style={{
              transform: `translate3d(${xShift * 10}px, ${yShift * 8}px, 0)`,
            }}
          >
            <p className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.34em] text-white/85 backdrop-blur-md animate-[fadeUp_700ms_ease-out_both]">
              {slide.eyebrow}
            </p>
            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white drop-shadow-[0_8px_22px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl animate-[fadeUp_800ms_ease-out_both]">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/82 sm:text-lg animate-[fadeUp_950ms_ease-out_both]">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 animate-[fadeUp_1100ms_ease-out_both]">
              <a
                href="#contact"
                className="rounded-full bg-[#ffd44d] px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#14162a] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffe27b]"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/16"
              >
                View Services
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end">
          <div
            className="w-full max-w-md rounded-[28px] border border-white/15 bg-white/10 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-200 ease-out animate-[fadeUp_900ms_ease-out_both]"
            style={{
              transform: `translate3d(${xShift * -8}px, ${yShift * 10}px, 0)`,
            }}
          >
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#0e1320]">
              <div className="relative h-[420px] sm:h-[500px]">
                {slides.map((item, idx) => (
                  <Image
                    key={item.image}
                    src={item.image}
                    alt={item.eyebrow}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className={`object-cover transition-all duration-1000 ease-out ${
                      idx === index
                        ? "scale-100 opacity-100"
                        : "scale-110 opacity-0"
                    }`}
                    style={{
                      transform:
                        idx === index
                          ? `translate3d(${xShift * 12}px, ${yShift * 10}px, 0) scale(1)`
                          : undefined,
                    }}
                    priority={idx === 0}
                  />
                ))}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.68))]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffd44d]">
                      Live project reel
                    </p>
                    <div className="flex gap-1">
                      {slides.map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-2 rounded-full transition-all duration-500 ${
                            idx === index ? "w-7 bg-[#ffd44d]" : "w-2 bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/86">
                    Motion-driven hero using local images from `public/images`
                    and WJBE-inspired company information.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                ["24/7", "Support"],
                ["7", "Hero Frames"],
                ["100%", "Local Assets"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/12 bg-white/8 px-3 py-4 text-center"
                >
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.24em] text-white/65">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
