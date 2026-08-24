import Reveal from "./Reveal";
import { faqs } from "@/data/content";

export default function FaqSection() {
  return <section className="bg-white py-20 lg:py-28"><div className="container-px mx-auto max-w-6xl"><Reveal className="mx-auto max-w-2xl text-center"><span className="eyebrow">FAQ</span><h2 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">Frequently Asked <span className="text-brand-500">Questions</span></h2><p className="mt-4 text-sm text-ink-500">Find clear answers to the most common questions about our SMM services.</p></Reveal><div className="mt-12 grid gap-3 md:grid-cols-2 md:gap-x-6">{faqs.map((faq, index) => <details key={faq.q} className={`group rounded-lg border ${index === 0 ? "border-brand-500 bg-brand-500 text-white" : "border-brand-100 bg-[#fafafa] text-ink-800"} px-4 py-3`}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xs font-semibold marker:hidden">{faq.q}<span className="text-base transition-transform group-open:rotate-45">+</span></summary><p className={`pt-3 text-xs leading-relaxed ${index === 0 ? "text-white/85" : "text-ink-500"}`}>{faq.a}</p></details>)}</div></div></section>;
}
