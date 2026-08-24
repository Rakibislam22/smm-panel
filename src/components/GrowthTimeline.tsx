"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { growthTimeline } from "@/data/content";

export default function GrowthTimeline() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto max-w-[1240px] px-4">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex flex-col items-center justify-center">
            <span className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              GROWTH
            </span>

            <div className="flex w-24 items-center justify-center">
              <div className="h-[1.5px] w-full bg-orange-400" />
              <div className="mx-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
              <div className="h-[1.5px] w-full bg-orange-400" />
            </div>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Growing on Social Media in{" "}
            <span className="text-orange-500">Bangladesh</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-relaxed text-gray-600 sm:text-[15px]">
            The smartest way to grow is by combining SMM support with real
            content. You use SMM at the beginning for momentum, then let organic
            growth take over.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {growthTimeline.map((item, index) => (
            <Reveal key={item.period} delay={index * 0.08}>
              <article className="relative flex h-full min-h-[436px] flex-col rounded-[17px] border border-orange-200 bg-white p-3 shadow-[0_7px_22px_-15px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-15px_rgba(249,115,22,0.3)]">
                <div className="mb-5 flex justify-center">
                  <div className="w-[72%] rounded-[8px] bg-gradient-to-r from-orange-400 to-orange-700 py-2.5 text-center text-[11px] font-semibold text-white shadow-[0_6px_14px_-5px_rgba(249,115,22,0.45)]">
                    {item.period}
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col gap-3">
                  <InfoItem
                    step="01"
                    title="What You Do"
                    text={item.what}
                  />

                  <Connector />

                  <InfoItem
                    step="02"
                    title="Why it Works"
                    text={item.why}
                  />

                  <Connector />

                  <InfoItem
                    step="03"
                    title="Estimated Cost/Time"
                    text={item.cost}
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Connector() {
  return (
    <div className="relative z-30 -my-[1px] flex h-3 items-center">
      <div className="ml-[12px] h-38 w-[35px] pb-12">
        <Image
          src="/assets/group-decor.svg"
          alt=""
          width={35}
          height={30}
          className="h-full w-full object-contain"
          aria-hidden
        />
      </div>
    </div>
  );
}

function InfoItem({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative min-h-[110px] rounded-[15px] bg-[#F7F7FA] px-3.5 py-3.5">
      <div className="relative z-30 flex items-start gap-2.5">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] border border-orange-200 bg-white text-[10px] font-bold text-orange-500">
          {step}
        </span>

        <h3 className="pt-[3px] text-[13.5px] font-bold leading-5 text-orange-500">
          {title}
        </h3>
      </div>

      <div className="relative z-30 ml-[32px] mt-2.5 pr-1">
        <p className="text-[11px] leading-[1.45] text-gray-600">
          {text}
        </p>
      </div>

    
    </div>
  );
}
