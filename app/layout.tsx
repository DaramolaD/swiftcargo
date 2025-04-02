import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🚚 SwiftCargo | Fast & Reliable Logistics Solutions",
  description:
    "SwiftCargo provides seamless logistics solutions, including freight forwarding, cargo handling, warehousing, and last-mile delivery. Get real-time tracking, transparent pricing, and on-time deliveries—so you can focus on growing your business.",
  keywords: [
    "logistics",
    "freight forwarding",
    "cargo handling",
    "warehousing",
    "last-mile delivery",
    "supply chain management",
    "shipping solutions",
    "real-time tracking",
    "business logistics",
    "transport services",
  ],
  openGraph: {
    title: "SwiftCargo | Fast & Reliable Logistics Solutions",
    description:
      "Simplify your shipping with SwiftCargo's end-to-end logistics services. Real-time tracking, secure cargo handling, and seamless deliveries—every time.",
    url: "https://swift-cargo.vercel.app",
    siteName: "SwiftCargo",
    images: [
      {
        url: "https://swift-cargo.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SwiftCargo - Fast & Reliable Logistics Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SwiftCargo - Logistics, On Time, Every Time",
    description:
      "Your trusted partner for freight forwarding, cargo handling, and last-mile delivery. Experience fast, reliable logistics with real-time tracking.",
    images: ["https://swift-cargo.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased relative`}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
