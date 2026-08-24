"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { PlatformBadge } from "./Platformicon";
import { platforms, facebookServices } from "@/data/content";

export default function ServicesSection() {
    const [active, setActive] = useState("Facebook");

    return (
        <section id="services" className="bg-[#fafafc] py-20 lg:py-24">
            <div className="container px-4 mx-auto max-w-[1400px]">
                {/* Header Area */}
                <Reveal className="text-center max-w-3xl mx-auto mb-12">
                    <div className="flex flex-col items-center justify-center mb-4">
                        <span className="text-orange-500 font-medium text-[15px] mb-1">our services</span>
                        <div className="flex items-center justify-center w-24">
                            <div className="h-[2px] w-full bg-orange-500 rounded-l-full"></div>
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mx-1 shrink-0"></div>
                            <div className="h-[2px] w-full bg-orange-500 rounded-r-full"></div>
                        </div>
                    </div>
                    <h2 className="mt-4 text-[32px] sm:text-[40px] font-bold text-gray-900 tracking-tight leading-tight">
                        Powerful <span className="text-orange-500">SMM Services</span> for Fast Growth
                    </h2>
                    <p className="mt-4 text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
                        Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok. we've got you covered.
                    </p>
                </Reveal>

                {/* Platforms Grid */}
                <Reveal delay={0.1}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
                        {platforms?.map((p) => (
                            <button
                                key={p.label}
                                onClick={() => setActive(p.label)}
                                className={`flex items-center justify-center gap-3 rounded-xl px-4 py-3 text-[14px] font-medium transition-all border ${
                                    active === p.label
                                        ? "text-white border-transparent shadow-[0_8px_20px_-6px_rgba(234,88,12,0.4)]"
                                        : "bg-[#fdfaf7] text-gray-700 border-[#f2e7dc] hover:border-orange-300 hover:bg-orange-50/50"
                                }`}
                                style={
                                    active === p.label
                                        ? { background: "linear-gradient(135deg, #f97316 0%, #c2410c 100%)" }
                                        : undefined
                                }
                            >
                                <PlatformBadge icon={p.icon} />
                                <span className="truncate">{p.label}</span>
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Main Content Box */}
                <Reveal delay={0.15}>
                    <div className="rounded-[24px] border border-orange-400 p-6 lg:p-10 grid lg:grid-cols-2 gap-10 items-start bg-white">
                        
                        {/* Left Image Side */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active + "-img"}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.35 }}
                                className="rounded-2xl overflow-hidden bg-gradient-to-t from-[#fae8d4] to-transparent aspect-[4/3.5] flex items-center justify-center relative w-full h-full"
                            >
                                <Image
                                    src="/assets/service-section-image.png" 
                                    alt={`${active} marketing services`}
                                    
                                    width={500}
                                    height={500}
                                    className="w-full h-full"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Right Content Side */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active + "-content"}
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -16 }}
                                transition={{ duration: 0.35 }}
                                className="flex flex-col justify-center h-full pt-2"
                            >
                                <h3 className="text-[26px] font-semibold text-orange-500 tracking-tight">
                                    {active} Marketing Services
                                </h3>
                                <p className="mt-3 text-gray-600 text-[14px] leading-[1.6]">
                                    Boost your brand visibility, connect with your ideal audience, and drive more traffic, engagement, and sales through strategic {active} marketing campaigns.
                                </p>

                                <ul className="mt-6 space-y-4">
                                    {facebookServices?.map((s, i) => (
                                        <li key={s.title} className="flex gap-3 text-[14px] items-start">
                                            {/* Hexagon Badge */}
                                            <span 
                                                className="shrink-0 h-[26px] w-[26px] mt-0.5 bg-gradient-to-br from-orange-400 to-orange-600 text-white text-[11px] font-bold flex items-center justify-center shadow-sm"
                                                style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-gray-600 leading-[1.6]">
                                                <span className="text-orange-500 font-medium">{s.title}- </span>
                                                {s.desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div>
                                    <a
                                        href="#services"
                                        className="inline-block mt-8 rounded-lg bg-gradient-to-r from-orange-400 to-orange-700 px-6 py-2.5 text-[14px] font-medium text-white shadow-md hover:shadow-lg transition-all"
                                    >
                                        View {active} Services
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </Reveal>
            </div>
        </section>
    );
}
