"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { faqs } from "@/data/content";

export default function FaqSection() {
  const leftFaqs = faqs.filter((_, index) => index % 2 === 0);
  const rightFaqs = faqs.filter((_, index) => index % 2 !== 0);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-[150px] w-[420px] rotate-[5deg] rounded-[0_0_0_55%] bg-[#fff0e7]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-[100px] w-[330px] rotate-[5deg] rounded-[0_0_0_55%] bg-[#ffad78]"
      />

      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-[1200px] text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              FAQ
            </span>

            <div className="mt-1 flex w-6 items-center justify-center">
              <div className="h-[1.5px] w-full bg-orange-400" />
              <div className="mx-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
              <div className="h-[1.5px] w-full bg-orange-400" />
            </div>
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Frequently Asked{" "}
            <span className="text-brand-500">Questions</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-ink-500 sm:text-[14px]">
            Find clear and simple explanations to the most common questions
            about our services, payments, orders, and account management.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[850px] gap-3 md:grid-cols-2 md:gap-x-3.5">
          <div className="flex flex-col gap-3">
            {leftFaqs.map((faq, index) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                defaultOpen={index === 0}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {rightFaqs.map((faq) => (
              <FaqItem
                key={faq.q}
                faq={faq}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  faq,
  defaultOpen = false,
}: {
  faq: { q: string; a: string };
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className={`group rounded-[10px] border px-4 py-3 transition-all duration-300 ease-out ${isOpen
        ? "border-orange-600 bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_8px_18px_-10px_rgba(249,115,22,0.55)]"
        : "border-orange-100 bg-[#F7F7F7] text-ink-800"
        }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-[11px] font-semibold leading-5 outline-none"
        aria-expanded={isOpen}
      >
        <span>{faq.q}</span>

        <svg
          className={`h-3 w-3 shrink-0 transition-transform duration-300 ease-out ${isOpen ? "rotate-180 text-white" : "text-gray-800"
            }`}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen
          ? "grid-rows-[1fr] opacity-100"
          : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <p
            className={`pt-2.5 text-[10.5px] leading-[1.5] ${isOpen ? "text-white/90" : "text-ink-500"
              }`}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}
