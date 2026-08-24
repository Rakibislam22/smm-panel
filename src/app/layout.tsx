import type { Metadata } from "next";
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
  title: "TrendEvo — Best SMM Panel in Bangladesh",
  description:
    "TrendEvo is Bangladesh's most reliable & cheap SMM panel for real social media growth. Fast delivery, safe methods, real results.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-ink-900">
        {children}
      </body>
    </html>
  );
}
