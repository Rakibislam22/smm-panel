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
            className="relative overflow-hidden min-h-screen flex items-center pt-20"
            style={{
                background: 'url("/assets/hero-bg.png") center / cover no-repeat',
            }}
        >
            <div className="container px-4 mx-auto grid max-w-[1400px] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Rating Badge */}
                    <div className="flex items-center gap-2 mb-6">
                        <FaStar className="text-emerald-500 text-xl" />
                        <span className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="bg-orange-500 p-1 rounded-sm flex items-center justify-center">
                                    <FaStar className="text-white text-[10px]" />
                                </div>
                            ))}
                        </span>
                        <span className="font-bold text-gray-900 text-sm ml-1">Excellent</span>
                        <span className="text-gray-600 text-sm">4.8 out of 5</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-[2.9rem] font-bold leading-[1.15] tracking-tight text-gray-900">
                        <span className="text-orange-500">Best SMM Panel</span>
                        <br />
                        in Bangladesh – <span className="text-orange-500">Fast ,Safe</span> &amp;
                        <br />
                        Growth in Social Media.
                    </h1>

                    {/* Subtitle/Paragraph */}
                    <p className="mt-6 text-gray-600 text-[15px] leading-relaxed max-w-[90%] font-medium">
                        SMM is Bangladesh's most reliable &amp; cheap SMM panel for real social media
                        growth. We built this platform for Bangladeshi businesses, creators, and
                        agencies. You get fast delivery, safe methods, and followers that actually stay.
                        No fake bots. No account risks. Just real results. Most panels chase big numbers.
                        We focus on keeping those numbers. You get retention guarantees, delivery control,
                        and long-term credibility.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#services"
                            className="rounded-lg border border-orange-300 bg-white px-8 py-3.5 text-[15px] font-semibold text-orange-500 hover:border-orange-500 transition-colors shadow-sm"
                        >
                            View Services
                        </a>
                        <a
                            href="#signup"
                            className="rounded-lg bg-gradient-to-r from-orange-400 to-orange-700 px-8 py-3.5 text-[15px] font-semibold text-white shadow-md hover:shadow-lg transition-all"
                        >
                            Create an Account
                        </a>
                    </div>
                </motion.div>

                {/* Right Content (Image & Icons) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                    className="relative mx-auto w-full max-w-[500px] lg:max-w-none lg:ml-auto"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        {/* Replace with your specific hero composite image from the screenshot */}
                        <Image
                            src="/assets/hero-woman.png"
                            alt="SMM Panel Growth Specialist"
                            width={700}
                            height={700}
                            priority
                            className="w-full h-auto object-contain select-none pointer-events-none"
                        />
                    </motion.div>

                    
                </motion.div>
            </div>
        </section>
    );
}
