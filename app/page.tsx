import Hero from "@/components/features/landing/Hero";
import LogisticsProblems from "@/components/features/landing/LogisticsProblems";
import OurPartners from "@/components/features/landing/OurPartners";
import Solutions from "@/components/features/landing/Solutions";
import SwiftCargoSolution from "@/components/features/landing/SwiftCargoSolution";

export default function Home() {
  return (
    <>
      <Hero />
      <OurPartners />
      <LogisticsProblems />
      <SwiftCargoSolution />
      <Solutions />
    </>
  );
}
