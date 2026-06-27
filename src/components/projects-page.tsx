"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ProjectGallery = {
  id: string;
  title: string;
  images: string[];
};

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

function ProjectJumpCard({ gallery }: { gallery: ProjectGallery }) {
  const cover = gallery.images[0];

  return (
    <a
      href={`#${gallery.id}`}
      className="group block overflow-hidden rounded-[24px] border border-white/20 bg-white/95 shadow-[0_14px_34px_rgba(0,0,0,0.14)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(0,0,0,0.22)]"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={cover}
          alt={gallery.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover object-center transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.62))]" />
        <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {gallery.images.length} Images
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="rounded-[18px] border border-white/12 bg-black/28 p-4 backdrop-blur-sm transition duration-500 group-hover:bg-black/40">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b9d5e4]">
              Project Folder
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase leading-tight tracking-[0.06em] text-white">
              {gallery.title}
            </h2>
            <div className="mt-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-white/92">
              View Gallery
              <span className="transition duration-300 group-hover:translate-x-1.5">→</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

function ProjectGallerySection({ gallery }: { gallery: ProjectGallery }) {
  return (
    <section
      id={gallery.id}
      className="rounded-[28px] border border-black/6 bg-white/96 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-7 lg:p-8"
    >
      <div className="flex flex-col gap-4 border-b border-[#d7dde2] pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#748596] sm:text-[11px] sm:tracking-[0.34em]">
            Project Gallery
          </p>
          <h2 className="mt-3 text-2xl font-black uppercase leading-tight tracking-[0.06em] text-[#44586a] sm:text-3xl">
            {gallery.title}
          </h2>
        </div>
        <div className="rounded-full bg-[#eef3f6] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#53697b]">
          {gallery.images.length} Images
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {gallery.images.map((image, index) => (
          <Reveal key={image} delay={index * 35}>
            <div className="group overflow-hidden rounded-[16px] border border-black/5 bg-[#eef3f6] shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,0,0,0.14)]">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={image}
                  alt={`${gallery.title} ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ProjectsPageContent({
  galleries,
}: {
  galleries?: ProjectGallery[];
}) {
  const safeGalleries = galleries ?? [];

  return (
    <main className="bg-[#7d8991] text-[#2b2f36]">
      <section className="border-b border-[#44586a] bg-[#425565]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-start gap-8 overflow-x-auto px-4 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white sm:justify-center sm:gap-14 sm:px-6 sm:tracking-[0.24em] lg:px-8">
          {safeGalleries.map((gallery) => (
            <a
              key={gallery.id}
              href={`#${gallery.id}`}
              className="whitespace-nowrap transition duration-300 hover:text-[#d8e4ea]"
            >
              {gallery.title}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-[#eef3f6] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl px-1 sm:px-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#748596] sm:text-[11px] sm:tracking-[0.36em]">
              Built Around Real Delivery
            </p>
            <h1 className="mt-4 text-[2rem] font-black uppercase leading-[1.06] tracking-[0.06em] text-[#44586a] sm:text-5xl sm:tracking-[0.08em]">
              Project folders transformed into visual galleries
            </h1>
            <p className="mt-4 max-w-5xl text-base leading-7 text-[#31414d] sm:mt-6 sm:text-[19px] sm:leading-9">
              Each folder from the projects library is shown here by name, with all available
              images arranged in a clean responsive gallery for easy browsing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {safeGalleries.map((gallery, index) => (
              <Reveal key={gallery.id} delay={index * 55}>
                <ProjectJumpCard gallery={gallery} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8">
            {safeGalleries.map((gallery, index) => (
              <Reveal key={gallery.id} delay={index * 50}>
                <ProjectGallerySection gallery={gallery} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
