import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
// import Image from "next/image";

const Testimonies = () => {
  const testimonials = [
    {
      name: "Chloe Williams",
      role: "Operations Manager, Apex Retail Solutions",
      text: "Thanks to SwiftCargo, our delivery times have improved by 30%, and we've saved thousands in logistics costs.",
      // img: "path/to/chloe-image.jpg",
    },
    {
      name: "David Thompson",
      role: "Head of Logistics, GlobalTech Supplies",
      text: "The real-time tracking feature has completely transformed how we manage our supply chain. We no longer have to chase updates—it’s all at our fingertips.",
      // img: "path/to/david-image.jpg",
    },
    {
      name: "Sophia Martinez",
      role: "E-commerce Director, TrendyWear",
      text: "We used to struggle with delays and unpredictable costs, but SwiftCargo changed that. Their transparent pricing and on-time deliveries have streamlined our entire logistics process.",
      // img: "path/to/sophia-image.jpg",
    },
    {
      name: "Chloe Williams",
      role: "Operations Manager, Apex Retail Solutions",
      text: "Thanks to SwiftCargo, our delivery times have improved by 30%, and we've saved thousands in logistics costs.",
      // img: "path/to/chloe-image.jpg",
    },
    {
      name: "David Thompson",
      role: "Head of Logistics, GlobalTech Supplies",
      text: "The real-time tracking feature has completely transformed how we manage our supply chain. We no longer have to chase updates—it’s all at our fingertips.",
      // img: "path/to/david-image.jpg",
    },
    {
      name: "Sophia Martinez",
      role: "E-commerce Director, TrendyWear",
      text: "We used to struggle with delays and unpredictable costs, but SwiftCargo changed that. Their transparent pricing and on-time deliveries have streamlined our entire logistics process.",
      // img: "path/to/sophia-image.jpg",
    },
  ];
  return (
    <section className="py-20 flex flex-col md:items-center px-5 md:px-6 bg-Biscay-50">
      <div className="container flex flex-col gap-10 md:gap-10 mx-auto md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 px-4">
          <div className="flex w-full flex-col text-left gap-3 md:gap-5">
            <h2 className="text-2xl md:text-4xl font-medium text-Dark_One">
              See What Our Customers Say.
            </h2>
            <p className="text-Dark_Paragraph text-lg md:text-xl text-left max-w-[1120px]">
              Real businesses. Real results. Here&apos;s how SwiftCargo is
              transforming logistics for companies like yours.
            </p>
          </div>
          <div className="flex gap-2 items-center h-fit">
            <Button
              variant="default"
              size="lg"
              className="shadow-2xl w-fit hover:text-white/60 transition-all duration-300 ease-in-out"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="default"
              size="lg"
              className="shadow-2xl w-fit hover:text-white/60 transition-all duration-300 ease-in-out"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4 overflow-x-auto p-4 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-7 rounded-2xl w-3xs p-8 px-4 bg-white flex-shrink-0"
            >
              <div className="flex items-center gap-2.5">
                <div className="min-w-12 min-h-12 bg-gray-400 rounded-2xl object-cover"></div>
                <div className="flex items-center w-full">
                  <div className="flex flex-col w-full">
                    <p className="text-base font-medium text-Dark_One leading-6">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-Dark_Paragraph">
                      {testimonial.role}
                    </p>
                  </div>
                  <Quote className="w-5 h-5 fill-Black-950" />
                </div>
              </div>
              <p className="text-sm italic text-Dark_Two line-clamp-3">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
