import Image from "next/image";
import React from "react";
import busLogo from "@/public/icons/bus.svg";
import boxes from "@/public/icons/boxes.svg";
import warehouse from "@/public/icons/warehouse.svg";
import routing from "@/public/icons/routing.svg";

const Solutions = () => {
  const logisticsServices = [
    {
      id: 1,
      icon: busLogo,
      title: "Freight Forwarding",
      bg: "bg-Biscay-100",
      hText: "text-Biscay-950",
      pText: "text-Biscay-900",
      description:
        "Effortless import/export logistics for smooth international trade.",
    },
    {
      id: 2,
      icon: boxes,
      title: "Real-Time Tracking",
      bg: "bg-Saffron-Mango-100",
      hText: "text-Saffron-Mango-950",
      pText: "text-Saffron-Mango-900",
      description: "Stay updated with live tracking of your shipments.",
    },
    {
      id: 3,
      icon: warehouse,
      title: "Warehousing Solutions",
      bg: "bg-Ironstone-100",
      hText: "text-Ironstone-950",
      pText: "text-Ironstone-900",
      description: "Secure storage facilities for your goods before delivery.",
    },
    {
      id: 4,
      icon: routing,
      title: "Customs Clearance",
      bg: "bg-Black-100",
      hText: "text-Black-950",
      pText: "text-Black-900",
      description: "Hassle-free customs processing to avoid delays.",
    },
  ];

  return (
    <section className="container mx-auto py-20 flex flex-col gap-10 md:gap-20 items-center px-5 md:px-6">
      <div className="flex flex-col md:items-center text-left md:text-center gap-4 md:gap-5">
        <h2 className="text-2xl md:text-3xl font-medium text-Dark_One">
          Logistics Solutions Tailored for Your Business
        </h2>
        <p className="text-Dark_Paragraph text-lg md:text-xl text-left md:text-center max-w-[1120px]">
          SwiftCargo delivers end-to-end logistics—from global freight to
          last-mile delivery. With secure cargo handling, flexible warehousing,
          and fast, reliable transport, we keep your business moving seamlessly.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {logisticsServices.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col gap-10 py-10 px-5 md:p-10 rounded-2xl ${service.bg}`}
          >
            <Image
              src={service.icon}
              alt={service.title}
              className={`w-12 h-12 ${service.hText}`}
            />
            <div className="flex flex-col gap-2.5">
              <h3 className={`font-medium text-2xl ${service.hText} `}>
                {service.title}
              </h3>
              <p
                className={`font-normal text-base md:text-lg text-Dark_Paragraph ${service.pText}`}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
