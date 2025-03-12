import React from "react";
import Image from "next/image";
import Box from "@/public/icons/box.svg";
import Timer from "@/public/icons/timer.svg";
import Map from "@/public/icons/map-pin.svg";
import Bus from "@/public/icons/bus.svg";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Box,
      title: "Book a Shipment -",
      bgColor: "bg-Biscay-100",
      textColor: "text-Biscay-950",
      description: "Enter pickup & delivery details in seconds.",
    },
    {
      number: "02",
      icon: Bus,
      title: "We Handle Everything",
      bgColor: "bg-Saffron-Mango-100",
      textColor: "text-Saffron-Mango-950",
      description: "Our trusted drivers ensure secure pickup.",
    },
    {
      number: "03",
      icon: Map,
      title: "Track in Real-Time -",
      bgColor: "bg-Ironstone-200",
      textColor: "text-Ironstone-950",
      description: "Get live updates from pickup to delivery.",
    },
    {
      number: "04",
      icon: Timer,
      title: "On-Time Arrival",
      bgColor: "bg-[#CFF7D3]",
      textColor: "text-Black-950",
      description: "Your package gets there—guaranteed.",
    },
  ];

  return (
    <section className="py-20 flex flex-col md:items-center px-5 md:px-6 bg-Biscay-50">
      <div className="container flex flex-col gap-10 md:gap-20 mx-auto px-5 md:px-6">
        <div className="flex flex-col md:items-center text-left md:text-center gap-4 md:gap-5">
          <h2 className="text-2xl md:text-3xl font-medium text-Dark_One">
            How It Works - Simple & Hassle-Free
          </h2>
          <p className="text-Dark_Paragraph text-lg md:text-xl text-left md:text-center max-w-[1120px]">
            Fast, Simple, and Efficient.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col bg-white md:items-center gap-8 py-10 px-5 md:p-10 border rounded-lg"
            >
              <p
                className={`w-fit text-2xl md:text-3xl p-5 font-medium flex items-center justify-center ${step.textColor} ${step.bgColor} rounded-full`}
              >
                {step.number}
              </p>

              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row items-center gap-2.5">
                  <Image src={step.icon} alt="Step icon" className="size-10" />
                  <p className="text-xl md:text-2xl font-medium text-Dark_One">
                    {step.title}
                  </p>
                </div>
                <p className="text-sm md:text-base text-Dark_Paragraph">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <Button
            variant="default"
            size="lg"
            className="shadow-2xl w-fit hover:text-white/60 transition-all duration-300 ease-in-out"
          >
            Start Shipping Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
