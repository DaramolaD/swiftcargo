import React from "react";
import { LifeBuoy, ShieldCheck, TruckIcon, Warehouse } from "lucide-react";

const Solutions = () => {
  const logisticsServices = [
    {
      id: 1,
      icon: TruckIcon,
      title: "Freight & Transportation",
      bg: "bg-Biscay-200",
      hText: "text-Biscay-950",
      pText: "text-Biscay-900",
      description:
        "Comprehensive freight solutions including air, sea, road, and rail transportation for seamless cargo movement.",
    },
    {
      id: 2,
      icon: Warehouse,
      title: "Warehousing & Distribution",
      bg: "bg-Ironstone-200",
      hText: "text-Ironstone-950",
      pText: "text-Ironstone-900",
      description:
        "Secure storage solutions with inventory management, order fulfillment, and last-mile delivery options.",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "Customs & Compliance",
      bg: "bg-Black-200",
      hText: "text-Black-950",
      pText: "text-Black-900",
      description:
        "Expert customs clearance and regulatory compliance services to avoid delays and ensure smooth operations.",
    },
    {
      id: 4,
      icon: LifeBuoy,
      title: "Marine & Offshore Logistics",
      bg: "bg-Saffron-Mango-200",
      hText: "text-Saffron-Mango-950",
      pText: "text-Saffron-Mango-900",
      description:
        "Specialized offshore support, vessel supply, and marine transportation for oil & gas operations.",
    },
  ];

  return (
    <section
      id="solutions"
      className="container mx-auto py-20 flex flex-col gap-10 md:gap-20 items-center px-5 md:px-6"
    >
      <div className="flex flex-col md:items-center text-left md:text-center gap-4 md:gap-5">
        <h2 className="text-2xl md:text-3xl font-medium text-Dark_One">
          Comprehensive Logistics Solutions
        </h2>
        <p className="text-Dark_Paragraph text-lg md:text-xl text-left md:text-center max-w-[1120px]">
          From global freight services to offshore marine support, we provide
          tailored logistics solutions to streamline your supply chain.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {logisticsServices.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col gap-10 py-10 px-5 md:p-10 rounded-2xl ${service.bg}`}
          >
            {/* <Image
              src={service.icon}
              alt={service.title}
              className={`w-12 h-12 ${service.hText}`}
            /> */}
            <service.icon
              className={`w-12 h-12 ${service.hText}`}
              strokeWidth={1.1}
            />
            <div className="flex flex-col gap-2.5">
              <h3 className={`font-medium text-2xl ${service.hText}`}>
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
