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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="container px-4 mx-auto max-w-[1400px] flex items-center justify-between py-4">
                {/* Logo */}
                <a href="#home" className="shrink-0">
                    <div className="rounded-2xl bg-white shadow-sm px-8 py-2.5 font-bold text-lg tracking-wide text-orange-500">
                        LOGO
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks?.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setActive(link.label)}
                            className={`text-[15px] font-semibold transition-colors ${active === link.label
                                ? "text-orange-500"
                                : "text-gray-600 hover:text-orange-500"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="#signin"
                        className="rounded-lg border border-orange-200 bg-white text-orange-500 px-6 py-2 text-sm font-semibold hover:border-orange-500 transition-colors"
                    >
                        Sign In
                    </a>
                    <a
                        href="#signup"
                        className="rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-2 text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                        Sign Up
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-2xl text-gray-800"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    {open ? <HiXMark /> : <HiBars3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
                    <div className="container px-4 py-4 mx-auto flex flex-col gap-4">
                        {navLinks?.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => {
                                    setActive(link.label);
                                    setOpen(false);
                                }}
                                className={`font-semibold ${active === link.label ? "text-orange-500" : "text-gray-600"}`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex gap-3 pt-4 border-t border-gray-100">
                            <a href="#signin" className="flex-1 text-center rounded-lg border border-orange-200 text-orange-500 py-2.5 text-sm font-semibold">
                                Sign In
                            </a>
                            <a href="#signup" className="flex-1 text-center rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2.5 text-sm font-semibold">
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
