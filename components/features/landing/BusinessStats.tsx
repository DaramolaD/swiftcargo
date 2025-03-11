import React from "react";

const BusinessStats = () => {
  const stats = [
    {
      value: "5,000+",
      label: "Shipments Delivered",
      description: "Every package, handled with care.",
      bgColor: "bg-Ironstone-200",
      textColor: "text-Ironstone-950",
      pColor: "text-Ironstone-900",
    },
    {
      value: "98%",
      label: "On-Time Rate",
      description: "Logistics you can count on.",
      bgColor: "bg-green-200",
      textColor: "text-green-950",
      pColor: "text-green-900",
    },
    {
      value: "100+",
      label: "Cities Covered",
      description: "Expanding your reach effortlessly.",
      bgColor: "bg-Dark_One/20",
      textColor: "text-Dark_One",
      pColor: "text-Dark_Paragraph",
    },
    {
      value: "4.8/5",
      label: "Satisfaction",
      description: "Businesses love our service.",
      bgColor: "bg-yellow-200",
      textColor: "text-yellow-950",
      pColor: "text-yellow-900",
    },
  ];
  return (
    <section className="py-20 flex flex-col md:items-center px-5 md:px-6">
      <div className="container flex flex-col gap-10 md:gap-14 mx-auto px-5 md:px-6">
        <div className="flex flex-col md:items-center text-left md:text-center gap-4 md:gap-5">
          <h2 className="text-2xl md:text-3xl font-medium text-Dark_One">
            Trusted by Businesses Nationwide.
          </h2>
          <p className="text-Dark_Paragraph text-lg md:text-xl text-left md:text-center max-w-[1120px]">
            Reliable Solutions That Deliver Results
          </p>
        </div>
        <div className="grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-14">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-5 items-center">
                <p
                  className={`w-fit text-3xl px-4 py-8 rounded-full ${stat.bgColor} ${stat.textColor}`}
                >
                  {stat.value}
                </p>
                <div className="flex flex-col gap-1 text-center items-center w-fit">
                  <p className={`font-semibold ${stat.textColor}`}>{stat.label}</p>
                  <p className={`text-sm ${stat.pColor}`}>{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
