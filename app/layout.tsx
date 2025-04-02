import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🚚 SwiftCargo | Fast & Reliable Logistics Solutions",
  description: "SwiftCargo provides seamless logistics solutions, including freight forwarding, cargo handling, warehousing, and last-mile delivery. Get real-time tracking, transparent pricing, and on-time deliveries—so you can focus on growing your business.",
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
