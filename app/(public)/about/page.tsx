import React from "react";
import Image from "next/image";
import aboutBg from "@/public/images/aboutBg.png";
import OurPartners from "@/components/features/landing/OurPartners";
import OurStory from "@/components/features/about/OurStory";
import OurPurpose from "@/components/features/about/OurPurpose";
import CTA from "@/components/features/landing/CTA";
import PageHeader from "@/components/features/PageHeader";
import TeamMate from "@/components/features/about/TeamMate";

const About = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-12 pb-12">
        <PageHeader title="About Page" />
        <div className="container mx-auto flex flex-col px-5">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl max-w-xl font-medium text-Dark_One">
              SwiftCargo - Delivering More Than Goods, We Deliver Peace of Mind
            </h2>
            <p className="text-xl text-Dark_Paragraph leading-8">
              At SwiftCargo, we&apos;re more than just a logistics provider—we&apos;re
              your growth partner. Our mission is to simplify supply chains with
              fast, transparent, and cost-effective logistics solutions, helping
              businesses meet deadlines, reduce costs, and exceed customer
              expectations.
            </p>
          </div>
        </div>
      </section>
      <Image
        src={aboutBg}
        className="w-full mx-auto max-w-[1500px]"
        alt="aboutImg"
      />
      <OurPartners />
      <OurStory />
      <OurPurpose />
      <TeamMate />
      <CTA />
    </>
  );
};

export default About;
