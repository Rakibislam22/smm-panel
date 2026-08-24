import type { Metadata } from "next";
import { Inter, Parkinsans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const parkinsans = Parkinsans({
  variable: "--font-parkinsans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "TrendEvo — Best SMM Panel in Bangladesh",
  description:
    "TrendEvo is Bangladesh's most reliable & cheap SMM panel for real social media growth. Fast delivery, safe methods, real results.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${parkinsans.variable} scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased bg-white text-ink-900">
        {children}
      </body>
    </html>
  );
}
