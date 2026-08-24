import Reveal from "./Reveal";
import { processSteps } from "@/data/content";

export default function WorkingProcess() {
    return (
        <section
            className="relative py-20 lg:py-24 overflow-hidden"
            style={{
                background: "linear-gradient(120deg, #fdfaf7 40%, #fbe3cc 100%)",
            }}
        >
            <div className="container-px relative mx-auto max-w-[1400px]">
                <Reveal className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="eyebrow">Working Process</span>
                    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-ink-900">
                        Grow Your <span className="text-brand-500">Socials in 4 Simple</span> Steps
                    </h2>
                    <p className="mt-4 text-ink-500 text-[15px]">
                        A simple and efficient process designed to deliver fast and reliable results. Just
                        place your order, and our system will handle the rest to help grow your social
                        media presence smoothly.
                    </p>
                </Reveal>

                <div className="relative mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-6">
                    <div className="absolute left-1/2 top-1/2 z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-[#fff9f4] bg-brand-500 text-xl text-white shadow-lg sm:flex">↕</div>
                    {processSteps.map((step, i) => (
                        <Reveal key={step.n} delay={i * 0.1}>
                            <div className={`relative min-h-48 rounded-xl bg-white/75 p-7 shadow-[0_12px_30px_-28px_rgba(89,42,9,0.65)] ${i === 0 || i === 3 ? "sm:translate-x-5" : "sm:-translate-x-5"}`}>
                                {i === 0 && (
                                    <div
                                        aria-hidden
                                        className="absolute -top-6 -left-6 w-16 h-16 opacity-40 hidden sm:block"
                                        style={{
                                            backgroundImage: "url(/assets/pattern.svg)",
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                    />
                                )}
                                <div className="text-3xl font-extrabold text-brand-500/90">{step.n}</div>
                                <h3 className="mt-1 text-base font-bold text-brand-500">{step.title}</h3>
                                <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-ink-500">
                                    {step.desc}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
