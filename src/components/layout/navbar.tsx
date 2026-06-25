"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Safety", href: "/safety" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-[#d1a54a]/12 bg-[#16222f] text-white shadow-[0_14px_50px_rgba(0,0,0,0.22)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(210,164,71,0.12),transparent_28%),radial-gradient(circle_at_top_left,rgba(16,144,215,0.12),transparent_32%),linear-gradient(90deg,rgba(255,255,255,0.05),transparent_25%,transparent_75%,rgba(255,255,255,0.04))] opacity-80" />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#1090d7_0%,#d2a447_52%,#1090d7_100%)] opacity-85" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.32em] text-white/68">
          <p>Founded in 1932</p>
          <p className="hidden sm:block">Specialty electrical services company</p>
          <p>24/7 Support</p>
        </div>

        <div className="flex items-center justify-between gap-4 pb-3">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-md px-1 py-1 transition duration-300 hover:-translate-y-0.5 hover:bg-white/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-sm border border-white/18 bg-[#f8fafc] p-1 shadow-[0_8px_20px_rgba(0,0,0,0.14)] transition duration-300 group-hover:rotate-[-4deg] group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Walter J. Barnes Electric logo"
                width={52}
                height={52}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="hidden leading-tight sm:block">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/62">
                WALTER J. BARNES ELECTRIC
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                ELECTRICAL CONTRACTORS
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative rounded-sm px-3 py-2 text-sm font-medium tracking-wide text-white/84 transition duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[#d2a447] after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/16 px-3 py-2 text-sm font-medium text-white/88 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>
      </div>

      <div
        className={`origin-top border-t border-white/10 bg-[#13202c] transition-all duration-300 ease-out xl:hidden ${
          open
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-3 text-sm font-medium text-white/90 transition duration-300 hover:translate-x-1 hover:bg-white/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
