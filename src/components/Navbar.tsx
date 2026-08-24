"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import { HiBars3, HiXMark } from "react-icons/hi2";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("Home");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(0,0,0,0.12)]" : "bg-transparent"
                }`}
        >
            <div className="container-px flex items-center justify-between py-4">
                <a href="#home" className="shrink-0">
                    <div className="rounded-lg bg-white shadow-sm border border-black/5 px-5 py-2.5 font-extrabold tracking-tight text-ink-900">
                        TREND<span className="text-brand-500">EVO</span>
                    </div>
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setActive(link.label)}
                            className={`text-[15px] font-medium transition-colors relative py-1 ${active === link.label ? "text-brand-500" : "text-ink-700 hover:text-brand-500"
                                }`}
                        >
                            {link.label}
                            {active === link.label && (
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-brand-500" />
                            )}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <a href="#signin" className="btn-outline !py-2.5 !px-5 text-sm">
                        Sign In
                    </a>
                    <a href="#signup" className="btn-primary !py-2.5 !px-5 text-sm">
                        Sign Up
                    </a>
                </div>

                <button
                    className="lg:hidden text-2xl text-ink-900"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {open ? <HiXMark /> : <HiBars3 />}
                </button>
            </div>

            {open && (
                <div className="lg:hidden bg-white border-t border-black/5 shadow-lg">
                    <div className="container-px py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => {
                                    setActive(link.label);
                                    setOpen(false);
                                }}
                                className="text-ink-700 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex gap-3 pt-2">
                            <a href="#signin" className="btn-outline flex-1 text-center text-sm !py-2.5">
                                Sign In
                            </a>
                            <a href="#signup" className="btn-primary flex-1 text-center text-sm !py-2.5">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
