import Reveal from "./Reveal";
import { growthTimeline } from "@/data/content";

export default function GrowthTimeline() {
  return <section id="blog" className="bg-[#fffdfb] py-20 lg:py-28"><div className="container-px mx-auto max-w-6xl"><Reveal className="mx-auto max-w-2xl text-center"><span className="eyebrow">Growth</span><h2 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">Growing on Social Media in <span className="text-brand-500">Bangladesh</span></h2><p className="mt-4 text-sm leading-relaxed text-ink-500">The smartest way to grow is using SMM support with real content, consistency, and a clear plan.</p></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{growthTimeline.map((item, index) => <Reveal key={item.period} delay={index * 0.08}><article className="h-full rounded-2xl border border-brand-200 bg-white p-4 shadow-[0_12px_30px_-22px_rgba(145,63,8,0.45)]"><div className="rounded-lg bg-gradient-to-r from-brand-400 to-brand-600 px-3 py-2 text-center text-xs font-bold text-white">{item.period}</div><div className="mt-4 space-y-3 text-xs leading-relaxed"><Info title="What You Do" text={item.what} /><Info title="Why It Works" text={item.why} /><Info title="Estimated Cost / Time" text={item.cost} /></div></article></Reveal>)}</div></div></section>;
}

function Info({ title, text }: { title: string; text: string }) { return <div className="rounded-lg bg-brand-50/70 p-3"><h3 className="font-bold text-brand-600">{title}</h3><p className="mt-1 text-ink-500">{text}</p></div>; }
