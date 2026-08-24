"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { advantages } from "@/data/content";

export default function Advantages() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[90px] -top-[125px] z-0 h-[250px] w-[430px] rounded-[0_0_55%_45%] bg-[#ffad78]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-[70px] -top-[82px] z-0 h-[145px] w-[390px] -rotate-[18deg] rounded-[0_0_60%_40%] bg-[#fff1e8]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[125px] -right-[90px] z-0 h-[250px] w-[430px] rounded-[55%_0_0_0] bg-[#ffad78]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[82px] -right-[70px] z-0 h-[145px] w-[390px] rotate-[18deg] rounded-[60%_0_0_0] bg-[#fff1e8]"
      />

      <Image
        src="/assets/pattern.svg"
        alt=""
        width={320}
        height={320}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 opacity-[0.035]"
        aria-hidden
      />

      <div className="container-px relative z-10 mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
              ADVANTAGES
            </span>

            <div className="mt-1 flex w-16 items-center justify-center">
              <div className="h-[1.5px] w-full bg-orange-400" />
              <div className="mx-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
              <div className="h-[1.5px] w-full bg-orange-400" />
            </div>
          </div>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Advantages of using{" "}
            <span className="text-brand-500">our panel services</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-relaxed text-ink-500 sm:text-[14px]">
            Find clear and simple explanations for the most common questions
            about our services, payments, orders, and account management.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-10 max-w-[1400px]">
          <div className="pointer-events-none absolute left-1/2 top-69 z-0 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <Image
              src="/assets/pattern.svg"
              alt=""
              width={170}
              height={170}
              className="h-[170px] w-[170px] "
              aria-hidden
            />
          </div>

          <div className="relative z-10 grid gap-5 md:grid-cols-2">
            {advantages.map((advantage, index) => (
              <Reveal key={advantage.title} delay={index * 0.08}>
                <article className="flex min-h-[168px] h-full flex-col rounded-[11px] border border-orange-100 bg-white px-10 py-8 shadow-[0_10px_25px_-14px_rgba(40,31,20,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_16px_32px_-15px_rgba(249,115,22,0.22)]">
                  <Image
                    src={advantage.image}
                    alt=""
                    width={72}
                    height={72}
                    className="mb-3 h-[72px] w-[72px] shrink-0 object-contain"
                  />

                  <h3 className=" font-extrabold leading-tight text-ink-900">
                    {advantage.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.55] text-ink-500">
                    {advantage.desc}{" "}
                    {advantage.highlight && (
                      <strong className="font-semibold text-brand-500">
                        {advantage.highlight}
                      </strong>
                    )}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
