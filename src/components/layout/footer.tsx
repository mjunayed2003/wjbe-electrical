import Link from "next/link";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Safety", href: "/safety" },
  { label: "Contact Us", href: "/contact" },
];

const contactLinks = [
  { label: "504.835.1756", href: "tel:5048351756" },
  { label: "info@wjbe.com", href: "mailto:info@wjbe.com" },
  { label: "estimating@wjbe.com", href: "mailto:estimating@wjbe.com" },
];

const planRoomHref =
  "https://www.dropbox.com/scl/fo/n1he026ssayq6wlc3a5v9/AMd63XTaLxdpeNQSZvX79oU?rlkey=gwu3talcf1g1zpsd8gwpm44uk&e=1&dl=0";

export function Footer() {
  return (
    <footer className="border-t border-[#cdd8e3] bg-[linear-gradient(180deg,#1f4b70_0%,#173a58_100%)] text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#ffd44d]">
            Walter J. Barnes Electric
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl">
            Trusted electrical contracting with a strong safety-first culture.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-7 text-white/78">
            Serving New Orleans and surrounding areas with project management,
            construction, emergency response, and long-term support.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#ffd44d] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#16222f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffe27b]"
            >
              Contact Us
            </Link>
            <Link
              href={planRoomHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/25 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Plan Room
            </Link>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#ffd44d]">
            Quick Links
          </p>
          <div className="mt-5 grid gap-3">
            {footerLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="w-fit text-[15px] text-white/84 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#ffd44d]">
            Contact
          </p>
          <div className="mt-5 grid gap-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="w-fit text-[15px] text-white/84 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/6 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#ffd44d]">
              Office Hours
            </p>
            <p className="mt-3 text-[15px] leading-7 text-white/82">
              Monday - Friday
              <br />
              8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Walter J. Barnes Electric. All rights reserved.</p>
          <p>Built for service, safety, and dependable delivery.</p>
        </div>
      </div>
    </footer>
  );
}
