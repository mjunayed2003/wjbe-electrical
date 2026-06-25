"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

const inquiryOptions = [
  "Nature of Your Inquiry*",
  "Emergency service",
  "General inquiry",
  "Estimating support",
  "Project conversation",
  "Service request",
];

const serviceHighlights = [
  "Electrical construction",
  "Project management",
  "Engineering and integration",
  "Low-voltage systems",
  "Maintenance and support",
  "Emergency service",
];

const quickFacts = [
  "Founded in 1932",
  "New Orleans Area",
  "24/7 Contact",
];

const supportCards = [
  {
    title: "Emergency Support",
    copy:
      "For urgent electrical issues, the fastest path is the emergency line so your team can get immediate attention.",
  },
  {
    title: "Estimating Requests",
    copy:
      "Budget planning, bid coordination, and preconstruction conversations can be routed directly to estimating.",
  },
  {
    title: "General Contact",
    copy:
      "For partnerships, company information, or broader project conversations, use the general contact path.",
  },
];

const responseItems = [
  {
    label: "Best for",
    value: "Emergency service and urgent field needs",
  },
  {
    label: "Also for",
    value: "Estimating support and project coordination",
  },
  {
    label: "Home page info used",
    value: "Founded in 1932, New Orleans Area, 24/7 Contact",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
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
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Field({
  placeholder,
  className = "",
}: {
  placeholder: string;
  className?: string;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`h-14 w-full border border-[#d9dde3] bg-white px-5 text-[15px] text-[#31507d] outline-none transition duration-300 placeholder:text-[#4f678b] focus:border-[#0f4db6] ${className}`}
    />
  );
}

export function ContactPageContent() {
  return (
    <main className="bg-[#f1f2f4] text-[#24364e]">
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="h-1 w-full max-w-[500px] bg-[#d6dbe1]" />

          <div className="mt-10 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="max-w-xl">
                <p className="text-[13px] uppercase tracking-[0.08em] text-[#0f4db6]">
                  Company Contact
                </p>

                <h1 className="mt-6 text-4xl font-light uppercase leading-[1.08] tracking-tight text-[#0f4db6] sm:text-5xl">
                  Walter J. Barnes Electric
                  <span className="block">New Orleans Area</span>
                </h1>

                <div className="mt-8 h-1 w-24 bg-[#58606a]" />

                <p className="mt-8 max-w-lg text-[16px] leading-8 text-[#3c4f67]">
                  Full-service electrical contractor with a strong safety and project
                  management focus. Reach out for emergency service, estimating support,
                  or a general project conversation.
                </p>

                <div className="mt-10 space-y-4 text-[15px] text-[#0f4db6]">
                  <a
                    href="tel:5048351756"
                    className="flex w-fit items-center gap-3 underline underline-offset-4 transition duration-300 hover:text-[#08398a]"
                  >
                    <span className="text-lg">◦</span>
                    504.835.1756
                  </a>
                  <a
                    href="mailto:info@wjbe.com"
                    className="flex w-fit items-center gap-3 underline underline-offset-4 transition duration-300 hover:text-[#08398a]"
                  >
                    <span className="text-lg">◦</span>
                    info@wjbe.com
                  </a>
                  <a
                    href="mailto:estimating@wjbe.com"
                    className="flex w-fit items-center gap-3 underline underline-offset-4 transition duration-300 hover:text-[#08398a]"
                  >
                    <span className="text-lg">◦</span>
                    estimating@wjbe.com
                  </a>
                </div>

                <Link
                  href="/services"
                  className="mt-10 inline-flex bg-[#1246a8] px-7 py-4 text-sm font-semibold uppercase tracking-[0.06em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d3d92]"
                >
                  All Services
                </Link>

                <div className="mt-12 grid gap-3 sm:grid-cols-3">
                  {quickFacts.map((item, index) => (
                    <Reveal key={item} delay={index * 80}>
                      <div className="border border-[#d7dce3] bg-white px-4 py-4 text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-[#53657d] shadow-[0_10px_24px_rgba(15,27,45,0.04)]">
                        {item}
                      </div>
                    </Reveal>
                  ))}
                </div>

              <div className="mt-10 border-l-4 border-[#0f4db6] pl-5">
                  <p className="text-[13px] uppercase tracking-[0.08em] text-[#0f4db6]">
                    Core Services
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {serviceHighlights.map((item) => (
                      <span
                        key={item}
                        className="border border-[#d5dbe3] bg-white px-3 py-2 text-[12px] uppercase tracking-[0.08em] text-[#4f678b]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {supportCards.map((item, index) => (
                    <Reveal key={item.title} delay={120 + index * 70}>
                      <div className="h-full border border-[#d7dce3] bg-white px-5 py-6 shadow-[0_10px_24px_rgba(15,27,45,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#bfd0ea]">
                        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#0f4db6]">
                          {item.title}
                        </p>
                        <p className="mt-3 text-[14px] leading-7 text-[#55657a]">
                          {item.copy}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="lg:pt-2">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[13px] uppercase tracking-[0.08em] text-[#0f4db6]">
                    Request For Information
                  </p>
                  <p className="text-[13px] text-[#55657a]">*Required Field</p>
                </div>

                <form className="mt-6 space-y-4">
                  <select className="h-14 w-full border border-[#d9dde3] bg-white px-5 text-[15px] text-[#4f678b] outline-none transition duration-300 focus:border-[#0f4db6]">
                    {inquiryOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field placeholder="First Name*" />
                    <Field placeholder="Last Name*" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field placeholder="Email*" />
                    <Field placeholder="Phone*" />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Field placeholder="Title / Role" />
                    <Field placeholder="Company" />
                  </div>

                  <textarea
                    rows={8}
                    placeholder="Message*"
                    className="w-full border border-[#d9dde3] bg-white px-5 py-5 text-[15px] text-[#31507d] outline-none transition duration-300 placeholder:text-[#4f678b] focus:border-[#0f4db6]"
                  />

                  <div className="pt-2">
                    <a
                      href="mailto:info@wjbe.com?subject=Request%20For%20Information"
                      className="inline-flex bg-[#1246a8] px-7 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d3d92]"
                    >
                      Submit
                    </a>
                  </div>
                </form>

                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {responseItems.map((item, index) => (
                    <Reveal key={item.label} delay={200 + index * 70}>
                      <div className="border border-[#d7dce3] bg-white px-5 py-5 shadow-[0_10px_24px_rgba(15,27,45,0.05)]">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f4db6]">
                          {item.label}
                        </p>
                        <p className="mt-3 text-[14px] leading-7 text-[#55657a]">
                          {item.value}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8dde4] bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="max-w-lg">
                <p className="text-[13px] uppercase tracking-[0.08em] text-[#0f4db6]">
                  Why Reach Out
                </p>
                <h2 className="mt-5 text-3xl font-light uppercase leading-[1.15] tracking-tight text-[#0f4db6] sm:text-4xl">
                  One page for service, estimating, and project conversations.
                </h2>
                <p className="mt-6 text-[16px] leading-8 text-[#55657a]">
                  Instead of a minimal contact page, this section gives visitors more
                  confidence about where to go, what to send, and how the company supports
                  different types of requests.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              <Reveal delay={60}>
                <div className="border border-[#d7dce3] bg-[#f7f8fa] px-6 py-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f4db6]">
                    Service Request
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-[#55657a]">
                    Best for active job needs, support follow-up, and situations where timing matters.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div className="border border-[#d7dce3] bg-[#f7f8fa] px-6 py-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f4db6]">
                    Project Planning
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-[#55657a]">
                    Helpful when your team wants to discuss scope, capabilities, or early-stage coordination.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="border border-[#d7dce3] bg-[#f7f8fa] px-6 py-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f4db6]">
                    Company Background
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-[#55657a]">
                    Home page details such as founding year, service focus, and market presence reinforce trust.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="border border-[#d7dce3] bg-[#f7f8fa] px-6 py-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0f4db6]">
                    Direct Contact Paths
                  </p>
                  <p className="mt-3 text-[15px] leading-7 text-[#55657a]">
                    Emergency phone, general email, and estimating email are all visible without extra clicks.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
