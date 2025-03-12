import React from "react";
import Image from "next/image";
import timer from "@/public/icons/timer.svg";
import map from "@/public/icons/map-pin.svg";
import dollar from "@/public/icons/dollar-sign.svg";
import laptop from "@/public/icons//laptop.svg";
import devices from "@/public/devices.png";

const WhyCooseUs = () => {
  return (
    <section className="container mx-auto py-20 flex flex-col gap-10 md:gap-20 md:items-center px-5 md:px-6">
      <div className="flex flex-col md:items-center text-left md:text-center gap-2 md:gap-5">
        <h2 className="text-2xl md:text-3xl font-medium text-Dark_One">
          Why Choose SwiftCargo
        </h2>
        <p className="text-Dark_Paragraph text-lg md:text-xl text-left md:text-center max-w-[1120px]">
          Reliable Solutions That Deliver Results
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 text-center justify-items-center">
        <div className="grid gap-5 lg:gap-12 w-full lg:max-w-[257.34px] items-center">
          <div className="flex flex-col gap-7 text-left md:text-center md:items-center p-5 py-10 lg:p-0 bg-Biscay-100 lg:bg-transparent rounded-lg">
            <Image src={timer} alt="" className="w-14 h-14" />
            <div className="flex flex-col gap-2.5">
              <h3 className="text-lg md:text-2xl font-medium text-Biscay-950 lg:text-Black-950">
                On-Time Deliveries:
              </h3>
              <p className="text-base font-normal text-Biscay-900 lg:text-Black-950">
                Get your goods where they need to be—right on schedule.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7 text-left md:text-center md:items-center p-5 py-10 lg:p-0 bg-Saffron-Mango-100 lg:bg-transparent rounded-lg">
            <Image src={map} alt="" className="w-14 h-14" />
            <div className="flex flex-col gap-2.5">
              <h3 className="text-lg md:text-2xl font-medium text-Saffron-Mango-950 lg:text-Black-950">
                Real-Time Tracking
              </h3>
              <p className="text-base font-normal text-Saffron-Mango-900 lg:text-Black-950">
                Stay informed at every step with seamless access on mobile or
                desktop.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <Image src={devices} alt="devices" className="w-full" />
        </div>
        <div className="grid gap-5 lg:gap-12 w-full lg:max-w-[257.34px] items-center">
          <div className="flex flex-col gap-7 text-left md:text-center md:items-center p-5 py-10 lg:p-0 bg-Ironstone-100 lg:bg-transparent rounded-lg">
            <Image src={laptop} alt="" className="w-14 h-14" />
            <div className="flex flex-col gap-2.5">
              <h3 className="text-lg md:text-2xl font-medium text-Ironstone-950 lg:text-Black-950">
                Simple Dashboard
              </h3>
              <p className="text-base font-normal text-Ironstone-900 lg:text-Black-950">
                Manage all your logistics needs from one intuitive platform.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-7 text-left md:text-center md:items-center p-5 py-10 lg:p-0 bg-Black-100 lg:bg-transparent rounded-lg">
            <Image src={dollar} alt="" className="w-14 h-14" />
            <div className="flex flex-col gap-2.5">
              <h3 className="text-lg md:text-2xl font-medium text-Black-95">
                Transparent Pricing
              </h3>
              <p className="text-base font-normal text-Black-900 lg:text-Black-950">
                Plan with confidence, knowing there are no hidden fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCooseUs;
