import React from "react";
import Image from "next/image";
import ContainerImg from "@/public/images/container.png";
import { CircleCheckBig } from "lucide-react";

const SwiftCargoSolution = () => {
  return (
    <section className="py-20 bg-Biscay-50 flex flex-col items-center px-5 md:px-6">
      <div className="container mx-auto px-5 md:px-6 grid grid-cols-1 items-center md:grid-cols-2 gap-20 md:gap-12">
        <Image
          src={ContainerImg}
          alt="worryLady"
          className="w-full h-full max-h-[617px] object-cover order-last md:order-first rounded-lg"
        />
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl md:text-3xl font-medium text-Dark_One">
            “SwiftCargo: More Than Just a Delivery Service.“
          </h3>
          <p className="text-Dark_Paragraph text-lg font-normal">
            Your logistics should help your business grow—not slow it down. With
            real-time tracking, on-time deliveries, and transparent pricing, we
            take the stress out of shipping.
          </p>

          <p className="text-xl md:text-xl text-Dark_One font-normal">
            How We Solve Your Logistics Problems:
          </p>
          <ul className="flex flex-col gap-2.5 font-normal text-base md:text-lg text-Dark_Paragraph">
            <li>
              <CircleCheckBig className="pr-2 size-8 inline-block" />
              <span className="pr-2 font-medium text-Dark_Two">
                Always On Time:
              </span>
              Get your cargo delivered when you expect it.
            </li>
            <li>
              <CircleCheckBig className="pr-2 size-8 inline-block" />
              <span className="pr-2 font-medium text-Dark_Two">
                Seamless Tracking:
              </span>
              Know where your shipment is at all times.
            </li>
            <li>
              <CircleCheckBig className="pr-2 size-8 inline-block" />
              <span className="pr-2 font-medium text-Dark_Two">
                No Hidden Fees:
              </span>
              Transparent pricing, so you plan with confidence.
            </li>
            <li>
              <CircleCheckBig className="pr-2 size-8 inline-block" />
              <span className="pr-2 font-medium text-Dark_Two">
                One Platform for Everything:
              </span>
              Manage shipments without juggling multiple vendors.
            </li>
          </ul>
          <p className="text-lg text-Dark_Paragraph font-normal">
            It doesn&apos;t have to be this way. SwiftCargo simplifies your
            logistics, so you focus on growing your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SwiftCargoSolution;
