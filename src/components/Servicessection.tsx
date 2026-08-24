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
        <section id="services" className="bg-white py-20 lg:py-24">
            <div className="container-px">
                <Reveal className="text-center max-w-2xl mx-auto mb-14">
                    <span className="eyebrow">Our Services</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-ink-900">
                        Powerful <span className="text-brand-500">SMM Services</span> for Fast Growth
                    </h2>
                    <p className="mt-4 text-ink-500 text-[15px]">
                        Explore our comprehensive range of social media marketing services designed to
                        help you grow your presence across all major platforms. From Facebook to TikTok,
                        we&apos;ve got you covered.
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
                        {platforms.map((p) => (
                            <button
                                key={p.label}
                                onClick={() => setActive(p.label)}
                                className={`flex items-center gap-2.5 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all border ${active === p.label
                                        ? "text-white border-transparent shadow-lg shadow-orange-500/25"
                                        : "bg-brand-50/70 text-ink-900 border-transparent hover:bg-brand-100/70"
                                    }`}
                                style={
                                    active === p.label
                                        ? { background: "linear-gradient(135deg, #f2892e 0%, #dd4f0c 100%)" }
                                        : undefined
                                }
                            >
                                <PlatformBadge icon={p.icon} />
                                <span className="truncate">{p.label}</span>
                            </button>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <div className="rounded-3xl border border-brand-200/70 p-5 sm:p-8 grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-white to-brand-50/40">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active + "-img"}
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 16 }}
                                transition={{ duration: 0.35 }}
                                className="rounded-2xl overflow-hidden bg-gradient-to-br from-brand-100 to-brand-50 aspect-[4/3] flex items-center justify-center relative"
                            >
                                <Image
                                    src="/assets/service-section-image.png"
                                    alt={`${active} marketing services`}
                                    width={420}
                                    height={420}
                                    className="drop-shadow-xl"
                                />
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active + "-content"}
                                initial={{ opacity: 0, x: 16 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -16 }}
                                transition={{ duration: 0.35 }}
                            >
                                <h3 className="text-2xl font-extrabold text-brand-500">
                                    {active} Marketing Services
                                </h3>
                                <p className="mt-3 text-ink-500 text-[15px] leading-relaxed">
                                    Boost your brand visibility, connect with your ideal audience, and drive
                                    more traffic, engagement, and sales through strategic {active} marketing
                                    campaigns.
                                </p>

                                <ul className="mt-5 space-y-3">
                                    {facebookServices.map((s, i) => (
                                        <li key={s.title} className="flex gap-3 text-sm">
                                            <span className="shrink-0 h-6 w-6 rounded-md bg-gradient-to-br from-brand-500 to-brand-600 text-white text-xs font-bold flex items-center justify-center">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-ink-700">
                                                <span className="text-brand-500 font-semibold">{s.title}</span> –{" "}
                                                {s.desc}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <a href="#services" className="btn-primary inline-block mt-7 text-sm">
                                    View {active} Services
                                </a>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
