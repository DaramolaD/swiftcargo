import React from "react";
import Image from "next/image";
import ctaImg from "@/public/ctaImg.png";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 flex flex-col md:items-center px-5 md:px-6">
      <div className="container mx-auto px-5 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">
          <div className="flex flex-col gap-7 justify-center px-6 lg:px-14 py-14 bg-Biscay-950 text-left">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-medium text-white">
                Take Control of Your Logistics Today
              </h2>
              <p className="text-white text-sm md:text-base text-left">
                Get started in minutes—no hidden fees, no delays, just reliable
                shipping.
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="shadow-2xl w-fit hover:text-white/60 transition-all duration-300 ease-in-out"
            >
              Track Your Shipment
            </Button>
          </div>
          <Image src={ctaImg} alt="cta_img" className="w-full h-full"/>
        </div>
      </div>
    </section>
  );
};

export default CTA;
