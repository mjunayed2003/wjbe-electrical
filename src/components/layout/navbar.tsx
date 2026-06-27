"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Safety", href: "/safety" },
  { label: "Contact Us", href: "/contact" },
];

const planRoomHref = "/contact";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-[#5c8fbb]/18 bg-[#2f5f85] text-white shadow-[0_14px_50px_rgba(0,0,0,0.22)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(210,164,71,0.1),transparent_28%),radial-gradient(circle_at_top_left,rgba(151,208,255,0.18),transparent_32%),linear-gradient(90deg,rgba(255,255,255,0.08),transparent_25%,transparent_75%,rgba(255,255,255,0.05))] opacity-95" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#9ad9ff_0%,#d2a447_52%,#9ad9ff_100%)] opacity-95" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="mb-3 flex items-center justify-between gap-3 text-[10px] font-medium uppercase tracking-[0.32em] text-white/78">
          <p>Founded in 1932</p>
          <p className="hidden sm:block">Specialty electrical services company</p>
          <p>24/7 Support</p>
        </div>

        <div className="flex items-center justify-between gap-4 pb-3">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-md px-1 py-1 transition duration-300 hover:-translate-y-0.5 hover:bg-white/5"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-sm border border-white/18 bg-[#f8fafc] p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition duration-300 group-hover:rotate-[-4deg] group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]">
              <Image
                src="/images/logo.png"
                alt="Walter J. Barnes Electric logo"
                width={64}
                height={64}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <div className="hidden leading-tight sm:block">
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/80">
                WALTER J. BARNES ELECTRIC
              </p>
              <p className="text-[15px] font-semibold uppercase tracking-[0.2em]">
                ELECTRICAL CONTRACTORS
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-3 xl:flex">
            <nav className="flex items-center gap-1" aria-label="Primary">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                className={`relative rounded-sm px-3 py-2 text-sm font-medium tracking-wide transition duration-300 hover:-translate-y-0.5 after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-[#ffd44d] after:transition-transform after:duration-300 ${
                    pathname === item.href
                      ? "text-white after:scale-x-100"
                      : "text-white/90 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href={planRoomHref}
              className="inline-flex rounded-full bg-[#ffd44d] px-5 py-2.5 text-sm font-bold uppercase tracking-[0.16em] text-[#16222f] shadow-[0_10px_24px_rgba(255,212,77,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffe27b]"
            >
              Plan Room
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/18 text-white/92 transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 xl:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`origin-top border-t border-white/10 bg-[#2a587d] transition-all duration-300 ease-out xl:hidden ${
          open
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href={planRoomHref}
            className="mb-2 rounded-full bg-[#ffd44d] px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-[#16222f] transition duration-300 hover:bg-[#ffe27b]"
            onClick={() => setOpen(false)}
          >
            Plan Room
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-md px-3 py-3 text-sm font-medium transition duration-300 hover:translate-x-1 hover:bg-white/10 ${
                pathname === item.href
                  ? "bg-white/10 text-white"
                  : "text-white/90 hover:text-white"
              }`}
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
