import Image from "next/image";
import Reveal from "./Reveal";
import { heroStats } from "@/data/content";

export default function StatsBar() {
    return (
        <section className="bg-[#f8f9fa] py-20 lg:py-28">
            <div className="container px-4 mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
                {heroStats.map((s, i) => (
                    <Reveal key={s.label} delay={i * 0.08}>
                        <div className="flex flex-col items-center justify-center h-full rounded-2xl bg-white p-8 text-center shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
                            <Image
                                src={s.icon}
                                alt={s.label}
                                width={80}
                                height={80}
                                className="mb-4 h-20 w-20 object-contain"
                            />

                            {/* Value */}
                            <div className="text-[28px] font-extrabold text-gray-900 tracking-tight lg:text-[32px]">
                                {s.value}
                            </div>

                            {/* Label */}
                            <div className="mt-2 text-[15px] font-semibold text-orange-500">
                                {s.label}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
