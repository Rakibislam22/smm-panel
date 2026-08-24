import Image from "next/image";
import Reveal from "./Reveal";
import { paymentMethods } from "@/data/content";

const paymentIcons: Record<string, React.ReactNode> = {
  Visa: (
    <span className="text-[#1a1f71] font-bold text-[10px] sm:text-sm italic">
      VISA
    </span>
  ),
  Mastercard: (
    <div className="flex -space-x-1.5 sm:-space-x-2">
      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#eb001b] mix-blend-multiply"></div>
      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#f79e1b] mix-blend-multiply"></div>
    </div>
  ),
  SEPA: (
    <span className="text-blue-800 font-bold text-[8px] sm:text-[11px]">
      S<span className="text-green-500">€</span>PA
    </span>
  ),
  GPay: (
    <span className="text-gray-600 font-medium text-[9px] sm:text-[13px] flex items-center">
      <span className="text-blue-500 font-bold mr-0.5">G</span> Pay
    </span>
  ),
  ApplePay: (
    <span className="text-black font-semibold text-[10px] sm:text-[13px]">
       Pay
    </span>
  ),
  PayPal: (
    <span className="text-[#00457C] font-bold text-xs sm:text-lg italic">
      P
    </span>
  ),
  Crypto: (
    <svg
      className="w-3 h-3 sm:w-5 sm:h-5 text-gray-800"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  ),
};

const iconPositions = [
  { left: "31%", top: "75%" },
  { left: "68%", top: "55%" },
  { left: "43%", top: "37%" },
  { left: "37%", top: "55%" },
  { left: "53%", top: "32%" },
  { left: "61%", top: "42%" },
  { left: "72%", top: "75%" },
];

export default function PaymentMethods() {
  return (
    <section
      id="api"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="container px-4 relative mx-auto max-w-[1400px] text-center">
        <Reveal>
          <div className="flex flex-col items-center justify-center mb-3 z-20 relative">
            <span className="text-orange-500 font-semibold text-xs tracking-widest mb-1">
              Payment Methods
            </span>

            <div className="flex items-center justify-center w-28">
              <div className="h-[1.5px] w-full bg-orange-400"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mx-1 shrink-0"></div>
              <div className="h-[1.5px] w-full bg-orange-400"></div>
            </div>
          </div>

          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl relative z-20">
            Multiple Payment <span className="text-orange-500">Methods</span>
          </h2>

          <p className="mx-auto mt-4 max-w-5xl text-[14px] sm:text-[15px] leading-relaxed text-gray-600 relative z-20">
            We accept Visa, Mastercard, American Express, Bkash, Nagad,
            Rocket, and more, so you are never stuck at checkout. Deposits are
            instant, and you can start with as little as $1, which means there
            is no reason to wait before placing your first order.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative mx-auto mt-7 h-[350px] max-w-5xl sm:h-[430px]"
        >
          <div className="absolute inset-x-0 top-0 h-full z-0">
            <Image
              src="/assets/maph.png"
              alt="Worldwide payment coverage"
              fill
              className="object-contain object-top"
              priority
            />

            <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-white via-white/75 to-transparent"></div>
          </div>

          <div className="absolute left-[17%] right-[17%] sm:left-[22%] sm:right-[22%] top-[22%] h-[68%] rounded-t-full bg-gradient-to-b from-orange-50/65 via-orange-50/30 to-white/15 border-t border-orange-100/70 shadow-[0_-8px_35px_rgba(249,115,22,0.06),inset_0_8px_35px_rgba(255,255,255,0.8)] z-[5]" />

          <div className="absolute left-[20%] right-[20%] sm:left-[25%] sm:right-[25%] top-[25%] h-[65%] rounded-t-full border-[1.5px] border-orange-100/90 border-b-0 z-10" />

          <div className="absolute left-[31%] right-[31%] sm:left-[36%] sm:right-[36%] top-[48%] h-[42%] rounded-t-full border-[1.5px] border-orange-100/80 border-b-0 z-10" />

          <div className="absolute left-[42%] right-[42%] sm:left-[45%] sm:right-[45%] top-[67%] h-[23%] rounded-t-full border-[1.5px] border-orange-100/60 border-b-0 z-10" />

          <div className="absolute left-[24%] right-[24%] sm:left-[29%] sm:right-[29%] top-[29%] h-[62%] rounded-t-full bg-gradient-to-t from-orange-50/20 via-transparent to-white/20 blur-xl z-[6]" />

          <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 w-[65%] h-[38%] rounded-t-full bg-gradient-to-t from-orange-50/70 via-orange-50/25 to-transparent blur-2xl z-[5]" />

          {paymentMethods.map((method, index) => {
            const position = iconPositions[index] || iconPositions[0];

            return (
              <span
                key={method.name}
                className="absolute z-40 flex h-11 w-11 sm:h-14 sm:w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white border border-orange-200/90 shadow-[0_12px_28px_-5px_rgba(249,115,22,0.22),0_6px_14px_-4px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-[calc(50%+5px)] hover:scale-110"
                style={{
                  top: position.top,
                  left: position.left,
                }}
              >
                {paymentIcons[method.name]}
              </span>
            );
          })}

          <p
            className="absolute bottom-[-7px] sm:bottom-[-35px] left-1/2 -translate-x-1/2 w-full text-[48px] sm:text-[88px] md:text-[112px] font-extrabold tracking-tight leading-none pointer-events-none select-none z-10 whitespace-nowrap"
            style={{
              color: "rgba(255, 237, 226, 0.82)",
            }}
          >
            MULTIPLE PAYMENTS
          </p>
        </Reveal>
      </div>
    </section>
  );
}
