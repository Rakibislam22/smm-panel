"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <Reveal className="container px-4 mx-auto max-w-[1400px]">

        {/* Main Card Container - No overflow-hidden so the woman can pop out */}
        <div className="relative rounded-[24px] bg-[#fff8f0] shadow-sm">

          {/* Background Map Layer - This is clipped strictly inside the card */}
          <div className="absolute inset-0 overflow-hidden rounded-[24px] flex items-center justify-center pointer-events-none">
            <Image
              src="/assets/maph.png"
              alt="Background Map"
              fill
              className="object-cover sm:object-contain opacity-[0.35] "
              priority
            />
          </div>

          {/* Text & Button Content Layer */}
          <div className="relative z-10 max-w-[580px] px-6 py-12 sm:px-14 sm:py-16">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-bold text-gray-900 leading-[1.2] tracking-tight">
              Ready to Grow Your Social <br className="hidden sm:block" />
              Media <span className="text-orange-500">in Bangladesh?</span>
            </h2>

            <p className="mt-5 text-[14px] sm:text-[15px] leading-[1.7] text-gray-600 font-medium">
              Join over 68,000 users who are already using SMM to grow faster on Facebook, Instagram, YouTube, TikTok, and more. Getting started is free and takes less than 60 seconds.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-lg border-[1.5px] border-orange-400 bg-white text-orange-500 px-7 py-3 text-[14.5px] font-semibold hover:bg-orange-50 transition-colors"
              >
                See All Services
              </a>
              <a
                href="#signup"
                className="rounded-lg bg-[#c6550d] hover:bg-[#a8460a] text-white px-7 py-3 text-[14.5px] font-semibold shadow-md transition-colors"
              >
                Create Free Account
              </a>
            </div>
          </div>

          {/* Woman Image Layer - Positioned absolute at bottom so it pops out of the top */}
          <div className="absolute bottom-0 right-4 lg:right-20 z-20 hidden md:block pointer-events-none">
            <Image
              src="/assets/second-model.png"
              alt="TrendEvo specialist"
              width={450}
              height={550}
              className="h-[380px] lg:h-[480px] w-auto object-contain origin-bottom"
            />
          </div>

        </div>
      </Reveal>
    </section>
  );
}
