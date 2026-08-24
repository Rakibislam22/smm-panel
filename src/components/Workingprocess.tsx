"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { processSteps } from "@/data/content";

export default function WorkingProcess() {
    return (
        <section
            className="relative py-20 lg:py-28 overflow-hidden"
            style={{
                background: `
                    radial-gradient(circle at 100% 0%, rgba(254, 215, 187, 0.6) 0%, transparent 40%),
                    radial-gradient(circle at 0% 100%, rgba(254, 215, 187, 0.6) 0%, transparent 40%),
                    radial-gradient(circle at 100% 100%, rgba(254, 215, 187, 0.5) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, #ffffff 30%, #fff7f2 100%)
                `,
            }}
        >
            <div className="container px-4 relative mx-auto max-w-[1400px]">
                {/* Header Area */}
                <Reveal className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="flex flex-col items-center justify-center mb-3">
                        <span className="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-1">
                            WORKING PROCESS
                        </span>
                        <div className="flex items-center justify-center w-28">
                            <div className="h-[1.5px] w-full bg-orange-400"></div>
                            <div className="h-2 w-2 rounded-full bg-orange-500 mx-1 shrink-0"></div>
                            <div className="h-[1.5px] w-full bg-orange-400"></div>
                        </div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Grow Your <span className="text-orange-500">Socials in 4 Simple</span> Steps
                    </h2>

                    <p className="mt-4 text-gray-600 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl mx-auto">
                        A simple and efficient process designed to deliver fast and reliable results. Just
                        place your order, and our system will handle the rest to help grow your social
                        media presence smoothly.
                    </p>
                </Reveal>

                {/* 4 Steps Grid with Center Node */}
                <div className="relative mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10 items-stretch">

                    {/* Center Circle Image */}
                    <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:flex pointer-events-none">
                        <div className="relative w-34 h-34 drop-shadow-[0_15px_30px_rgba(249,115,22,0.2)]">
                            <Image
                                src="/assets/image.png"
                                alt="Center Circle Node"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Step Cards */}
                    {processSteps.map((step, i) => {
                        const isCard1 = i === 0;
                        const isCard4 = i === 3;

                        return (
                            <Reveal key={step.n} delay={i * 0.1}>
                                <div
                                    className={`relative min-h-[220px] h-full p-8 sm:p-9 transition-all duration-300 ${isCard1
                                        ? "rounded-[24px] rounded-br-[50px] bg-gradient-to-br from-white/95 via-white/85 to-[#ffeede]/60 border-t border-l border-b border-orange-200/50 shadow-[0_10px_30px_-15px_rgba(249,115,22,0.12)]"
                                        : isCard4
                                            ? "rounded-[24px] rounded-tl-[50px] bg-gradient-to-br from-white/95 via-white/85 to-[#ffeede]/60 border-t border-r border-b border-orange-200/50 shadow-[0_10px_30px_-15px_rgba(249,115,22,0.12)]"
                                            : "rounded-[24px] bg-white/70 border border-transparent shadow-[0_10px_25px_-15px_rgba(249,115,22,0.08)]"
                                        }`}
                                >
                                    {/* Dot Matrix Pattern for Card 01 (Top-Left) */}
                                    {isCard1 && (
                                        <div
                                            aria-hidden
                                            className="absolute top-3 left-3 w-14 h-14 opacity-40 pointer-events-none"
                                            style={{
                                                backgroundImage: "radial-gradient(#f97316 1.5px, transparent 1.5px)",
                                                backgroundSize: "6px 6px",
                                            }}
                                        />
                                    )}

                                    {/* Dot Matrix Pattern for Card 04 (Bottom-Right) */}
                                    {isCard4 && (
                                        <div
                                            aria-hidden
                                            className="absolute bottom-3 right-3 w-14 h-14 opacity-40 pointer-events-none"
                                            style={{
                                                backgroundImage: "radial-gradient(#f97316 1.5px, transparent 1.5px)",
                                                backgroundSize: "6px 6px",
                                            }}
                                        />
                                    )}

                                    {/* Step Number */}
                                    <div className="text-3xl font-extrabold text-orange-500 tracking-tight">
                                        {step.n}
                                    </div>

                                    {/* Step Title */}
                                    <h3 className="mt-2 text-[17px] font-bold text-orange-500">
                                        {step.title}
                                    </h3>

                                    {/* Step Description */}
                                    <p className="mt-3.5 text-[13.5px] leading-relaxed text-gray-600 font-normal">
                                        {step.desc}
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
