import BusinessStats from "@/components/features/landing/BusinessStats";
import CTA from "@/components/features/landing/CTA";
import Hero from "@/components/features/landing/Hero";
import HowItWorks from "@/components/features/landing/HowItWorks";
import LogisticsProblems from "@/components/features/landing/LogisticsProblems";
import OurPartners from "@/components/features/landing/OurPartners";
import Solutions from "@/components/features/landing/Solutions";
import SwiftCargoSolution from "@/components/features/landing/SwiftCargoSolution";
import Testimonies from "@/components/features/landing/Testimonies";
import WhyCooseUs from "@/components/features/landing/WhyCooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <OurPartners />
      <LogisticsProblems />
      <SwiftCargoSolution />
      <Solutions />
      <WhyCooseUs />
      <HowItWorks />
      <BusinessStats />
      <Testimonies />
      <CTA />
    </>
  );
}
