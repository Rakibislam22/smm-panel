"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";
import { HeroPlatformIcon } from "./Platformicon";

const heroIcons = ["facebook", "instagram", "linkedin", "spotify", "telegram", "tiktok"];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden"
            style={{ backgroundImage: "url(/assets/hero-bg.png)", backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="container-px mx-auto grid max-w-[1400px] items-center gap-8 pt-10 pb-16 lg:grid-cols-2 lg:gap-12 lg:pt-12 lg:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex items-center gap-2 mb-5">
                        <FaStar className="text-emerald-500" />
                        <span className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className="h-4 w-4 rounded-[3px] bg-brand-500 inline-block" />
                            ))}
                        </span>
                        <span className="font-semibold text-ink-900 text-sm">Excellent</span>
                        <span className="text-ink-500 text-sm">4.8 out of 5</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold leading-[1.12] tracking-tight">
                        <span className="text-brand-500">Best SMM Panel</span>
                        <br />
                        <span className="text-ink-900">in Bangladesh – </span>
                        <span className="text-brand-500">Fast ,Safe</span>
                        <span className="text-ink-900"> &amp;</span>
                        <br />
                        <span className="text-ink-900">Growth in Social Media.</span>
                    </h1>

                    <p className="mt-6 text-ink-500 text-[15px] leading-relaxed max-w-xl">
                        TrendEvo is Bangladesh&apos;s most reliable &amp; cheap SMM panel for real social
                        media growth. We built this platform for Bangladeshi businesses, creators, and
                        agencies. You get fast delivery, safe methods, and followers that actually stay.
                        No fake bots. No account risks. Just real results. Most panels chase big numbers.
                        We focus on keeping those numbers. You get retention guarantees, delivery control,
                        and long-term credibility.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="#services" className="btn-outline">
                            View Services
                        </a>
                        <a href="#signup" className="btn-primary">
                            Create an Account
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className="relative mx-auto max-w-[420px] lg:max-w-none"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative"
                    >
                        <Image
                            src="/assets/hero-woman.png"
                            alt="TrendEvo social media growth specialist"
                            width={635}
                            height={650}
                            priority
                            className="w-full h-auto select-none pointer-events-none"
                        />
                    </motion.div>

                    <div className="absolute left-1/2 -translate-x-1/2 bottom-2 sm:bottom-4 bg-white rounded-2xl shadow-xl px-3 py-2.5 flex gap-2 sm:gap-3">
                        {heroIcons.map((icon, i) => (
                            <motion.span
                                key={icon}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                                whileHover={{ y: -4, scale: 1.08 }}
                            >
                                <HeroPlatformIcon icon={icon} />
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
