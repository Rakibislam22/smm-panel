import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/Servicessection";
import StatsBar from "@/components/Statsbar";
import WorkingProcess from "@/components/Workingprocess";
import Advantages from "@/components/Advantages";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import GrowthTimeline from "@/components/GrowthTimeline";
import PaymentMethods from "@/components/PaymentMethods";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ServicesSection />
        <WorkingProcess />
        <PaymentMethods />
        <GrowthTimeline />
        <Advantages />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
