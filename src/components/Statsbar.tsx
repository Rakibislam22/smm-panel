import Reveal from "./Reveal";
import { heroStats } from "@/data/content";

export default function StatsBar() {
    return (
        <section className="bg-[#f7f7f9] py-16">
            <div className="container-px mx-auto grid max-w-[1400px] grid-cols-2 gap-5 lg:grid-cols-4">
                {heroStats.map((s, i) => (
                    <Reveal key={s.label} delay={i * 0.08}>
                        <div className="card-hover h-full rounded-xl border border-black/5 bg-white p-5 text-center shadow-[0_5px_15px_-7px_rgba(0,0,0,0.16)] lg:p-7">
                            <div className="mb-3 text-3xl">{s.icon}</div>
                            <div className="text-xl font-extrabold text-ink-900 lg:text-2xl">{s.value}</div>
                            <div className="mt-1 text-xs font-semibold text-brand-500">{s.label}</div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
