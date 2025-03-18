import React from "react";
import Image from "next/image";
import aboutBg from "@/public/aboutBg.png";
import OurPartners from "@/components/features/landing/OurPartners";
import OurStory from "@/components/features/about/OurStory";
import OurPurpose from "@/components/features/about/OurPurpose";
import CTA from "@/components/features/landing/CTA";

const About = () => {
  return (
    <>
      <section className="w-full flex flex-col gap-12 pt-48 pb-12">
        <div className="container mx-auto flex flex-col px-5">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-medium text-Dark_One">
              About SwiftCargo
            </h1>
            <p className="text-xl text-Dark_Paragraph leading-8">
              Delivering More Than Goods—We Deliver Peace of Mind At SwiftCargo,
              we&apos;re not just a logistics company; we&apos;re your partner
              in building a supply chain that fuels your business growth. We
              specialize in fast, reliable, and transparent logistics solutions
              tailored to help businesses of all sizes meet deadlines, optimize
              costs, and exceed customer expectations.
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
      <CTA />
    </>
  );
};

export default About;
