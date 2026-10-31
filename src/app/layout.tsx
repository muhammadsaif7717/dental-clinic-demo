import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "প্রিমিয়াম ডেন্টাল ক্লিনিক ও কেয়ার | অনলাইন অ্যাপয়েন্টমেন্ট বুকিং",
  description:
    "ঢাকার শীর্ষস্থানীয় ডেন্টাল ক্লিনিকসমূহের বিশেষায়িত চিকিৎসা সেবা, অভিজ্ঞ ডেন্টাল সার্জন, ব্যথামুক্ত রুট ক্যানাল, ইমপ্ল্যান্ট ও আধুনিক স্কেলিং সেবা।",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">{children}</body>
    </html>
  );
}
