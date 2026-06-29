import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://immikellis.com"),
  title: {
    default: "J. BARNES ELECTRRIC",
    template: "%s | J. BARNES ELECTRRIC",
  },
  description:
    "J. BARNES ELECTRRIC provides professional electrical contracting, project delivery, safety-focused support, and dependable service for commercial and industrial clients.",
  applicationName: "J. BARNES ELECTRRIC",
  authors: [{ name: "J. BARNES ELECTRRIC" }],
  creator: "J. BARNES ELECTRRIC",
  publisher: "J. BARNES ELECTRRIC",
  keywords: [
    "J. BARNES ELECTRRIC",
    "electrical contracting",
    "commercial electrical services",
    "industrial electrical services",
    "project delivery",
    "safety support",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "J. BARNES ELECTRRIC",
    description:
      "Professional electrical contracting, project delivery, and safety-focused service for commercial and industrial clients.",
    url: "/",
    siteName: "J. BARNES ELECTRRIC",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Immikellis logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "J. BARNES ELECTRRIC",
    description:
      "Professional electrical contracting, project delivery, and safety-focused service for commercial and industrial clients.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
