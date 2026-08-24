import Image from "next/image";
import Reveal from "./Reveal";
import { advantages, faqs, footerLinks, growthTimeline, paymentMethods } from "@/data/content";

const paymentIcons: Record<string, string> = {
  Visa: "VISA",
  Mastercard: "MC",
  SEPA: "SEPA",
  GPay: "G Pay",
  ApplePay: "Pay",
  PayPal: "Pay",
  Crypto: "₿",
};

export default function LandingSections() {
  return (
    <>
      <section id="api" className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="container-px relative mx-auto max-w-6xl text-center">
          <Reveal>
            <span className="eyebrow">Payment Methods</span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Multiple <span className="text-brand-500">Payment Methods</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-ink-500">
              We accept Visa, Mastercard, American Express, PayPal and more, so you can pay with confidence and start growing right away.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto mt-10 h-[290px] max-w-4xl sm:h-[390px]">
            <Image src="/assets/maph.png" alt="Worldwide payment coverage" fill className="object-contain opacity-15" />
            <div className="absolute inset-x-[8%] top-[36%] h-[55%] rounded-t-full border-2 border-brand-200/70 border-b-0" />
            <div className="absolute inset-x-[22%] top-[51%] h-[38%] rounded-t-full border-2 border-brand-100 border-b-0" />
            {paymentMethods.map((method) => (
              <span
                key={method.name}
                className="absolute z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[8px] font-extrabold text-ink-700 shadow-lg ring-4 ring-brand-50 sm:h-12 sm:w-12 sm:text-[10px]"
                style={{ top: method.top, left: method.left }}
              >
                {paymentIcons[method.name]}
              </span>
            ))}
            <p className="absolute inset-x-0 bottom-1 text-3xl font-extrabold tracking-[0.16em] text-brand-100/60 sm:text-6xl">MULTIPLE PAYMENTS</p>
          </Reveal>
        </div>
      </section>

      <section id="blog" className="bg-[#fffdfb] py-20 lg:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Growth</span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">Growing on Social Media in <span className="text-brand-500">Bangladesh</span></h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-500">The smartest way to grow is using SMM support with real content, consistency, and a clear plan.</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {growthTimeline.map((item, index) => (
              <Reveal key={item.period} delay={index * 0.08}>
                <article className="h-full rounded-2xl border border-brand-200 bg-white p-4 shadow-[0_12px_30px_-22px_rgba(145,63,8,0.45)]">
                  <div className="rounded-lg bg-gradient-to-r from-brand-400 to-brand-600 px-3 py-2 text-center text-xs font-bold text-white">{item.period}</div>
                  <div className="mt-4 space-y-3 text-xs leading-relaxed">
                    <Info title="What You Do" text={item.what} />
                    <Info title="Why It Works" text={item.why} />
                    <Info title="Estimated Cost / Time" text={item.cost} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50/50 to-white py-20 lg:py-28">
        <div aria-hidden className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-brand-300/50 blur-3xl" />
        <div aria-hidden className="absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-brand-300/40 blur-3xl" />
        <div className="container-px relative mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Advantages</span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">Advantages of using our <span className="text-brand-500">panel services</span></h2>
            <p className="mt-4 text-sm text-ink-500">Find clear and simple explanations for the most common questions about our services, payments, orders, and account management.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {advantages.map((advantage, index) => (
              <Reveal key={advantage.title} delay={index * 0.08}>
                <article className="card-hover flex h-full gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_14px_28px_-22px_rgba(40,31,20,0.45)]">
                  <Image src={advantage.image} alt="" width={58} height={58} className="h-14 w-14 shrink-0 object-contain" />
                  <div>
                    <h3 className="text-sm font-extrabold text-ink-900">{advantage.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ink-500">{advantage.desc} {advantage.highlight && <strong className="text-brand-500">{advantage.highlight}</strong>}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl font-extrabold text-ink-900 sm:text-4xl">Frequently Asked <span className="text-brand-500">Questions</span></h2>
            <p className="mt-4 text-sm text-ink-500">Find clear answers to the most common questions about our SMM services.</p>
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-2 md:gap-x-6">
            {faqs.map((faq, index) => (
              <details key={faq.q} className={`group rounded-lg border ${index === 0 ? "border-brand-500 bg-brand-500 text-white" : "border-brand-100 bg-[#fafafa] text-ink-800"} px-4 py-3`}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xs font-semibold marker:hidden">{faq.q}<span className="text-base transition-transform group-open:rotate-45">+</span></summary>
                <p className={`pt-3 text-xs leading-relaxed ${index === 0 ? "text-white/85" : "text-ink-500"}`}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white pb-20">
        <Reveal className="container-px mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-50 via-[#fff7ef] to-brand-100 px-7 py-8 sm:px-12 sm:py-10">
            <Image src="/assets/maph.png" alt="" fill className="object-cover opacity-[0.08]" />
            <div className="relative max-w-md">
              <h2 className="text-2xl font-extrabold text-ink-900">Ready to Grow Your Social Media in <span className="text-brand-500">Bangladesh?</span></h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">Join thousands of creators, businesses, and agencies growing with safe, reliable social media services.</p>
              <div className="mt-6 flex flex-wrap gap-3"><a href="#signup" className="btn-outline !px-5 !py-2.5 text-sm">See All Services</a><a href="#signup" className="btn-primary !px-5 !py-2.5 text-sm">Create Free Account</a></div>
            </div>
            <Image src="/assets/cta-woman.png" alt="TrendEvo specialist" width={240} height={260} className="absolute bottom-0 right-5 hidden h-[235px] w-auto object-contain sm:block" />
          </div>
        </Reveal>
      </section>

      <footer className="bg-gradient-to-br from-[#b74408] to-[#8e2a05] py-14 text-white">
        <div className="container-px mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div><div className="inline-block rounded bg-white px-4 py-2 text-sm font-extrabold text-ink-900">TREND<span className="text-brand-500">EVO</span></div><p className="mt-5 max-w-xs text-xs leading-relaxed text-white/75">Best SMM panel in Bangladesh for creators, businesses, and agencies. Safe growth, simple ordering, and reliable delivery.</p></div>
          <FooterColumn title="Quick Links" links={footerLinks.quick} />
          <FooterColumn title="Services Pages" links={footerLinks.services} />
          <div><h3 className="text-sm font-bold">Contact Info</h3><ul className="mt-4 space-y-2 text-xs text-white/75"><li>info@trendevo.com</li><li>+880 123 456 7890</li><li>Serving all of Bangladesh</li><li>Support 24/7</li></ul></div>
        </div>
        <div className="container-px mx-auto mt-10 max-w-6xl border-t border-white/15 pt-5 text-center text-[11px] text-white/60">© 2026 TrendEvo. All Rights Reserved.</div>
      </footer>
    </>
  );
}

function Info({ title, text }: { title: string; text: string }) {
  return <div className="rounded-lg bg-brand-50/70 p-3"><h4 className="font-bold text-brand-600">{title}</h4><p className="mt-1 text-ink-500">{text}</p></div>;
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return <div><h3 className="text-sm font-bold">{title}</h3><ul className="mt-4 space-y-2 text-xs text-white/75">{links.map((link) => <li key={link}><a href="#home" className="transition hover:text-white">{link}</a></li>)}</ul></div>;
}
