import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts optimisées par Next.js
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata SEO
export const metadata: Metadata = {
  title: {
    default: "Corentin Dechamps | FullStack Developer",
    template: "%s | Corentin Dechamps",
  },
  description:
    "Portfolio of Corentin Dechamps, FullStack Developer and 42 Belgium graduate. Discover my projects built with React, Next.js, Node.js and more.",
  keywords: [
    "developer",
    "fullstack",
    "frontend",
    "backend",
    "react",
    "next.js",
    "node.js",
    "typescript",
    "42 belgium",
    "proximus",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Corentin Dechamps" }],
  creator: "Corentin Dechamps",
  metadataBase: new URL("https://corentindechamps.dev"), // Replace with your actual domain
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corentindechamps.dev",
    siteName: "Corentin Dechamps Portfolio",
    title: "Corentin Dechamps | FullStack Developer",
    description:
      "FullStack Developer and 42 Belgium graduate. Passionate about modern web development.",
    images: [
      {
        url: "/og-image.png", // To be created later
        width: 1200,
        height: 630,
        alt: "Corentin Dechamps - FullStack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corentin Dechamps | FullStack Developer",
    description:
      "FullStack Developer and 42 Belgium graduate. Check out my portfolio.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}