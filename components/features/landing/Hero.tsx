import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroBg from "@/public/heroBg.png";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center py-40 pt-48 w-full">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={HeroBg}
          alt="swiftcargo hero background"
          className="object-cover"
          fill
          priority
        />
      </div>

      {/* Content */}
      <div className="relative w-6xl z-10 flex flex-col md:items-center justify-center gap-3 md:text-center px-5 md:px-6">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium text-white leading-tight">
            SwiftCargo - Reliable Logistics, On Time, Every Time.
          </h1>
          <p className="text-base md:text-2xl font-normal text-white leading-tight">
            When your business depends on fast and secure deliveries, we make
            sure it happens—without delays, hidden fees, or guesswork.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button
            variant="default"
            size="lg"
            className="shadow-2xl w-fit hover:text-white/60 transition-all duration-300 ease-in-out"
          >
            Track Your Shipment
          </Button>
          <Button variant="secondary" size="lg" className="shadow-2xl w-fit">
            Get a Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
