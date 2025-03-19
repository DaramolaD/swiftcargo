import React from "react";

const OurStory = () => {
  return (
    <section className="w-full flex flex-col gap-12 py-20 bg-blue-50">
      <div className="container mx-auto flex flex-col px-5">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="text-4xl font-medium text-Dark_One">Our Story</h1>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-Dark_Two font-medium leading-8">
                How We Started
              </h3>
              <p className="text-xl text-Dark_Paragraph font-normal leading-8">
                We founded SwiftCargo to solve critical inefficiencies in
                logistics—delayed shipments, unpredictable costs, and lack of
                visibility. Businesses needed a better way to move goods, and we
                set out to create it.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-Dark_Two font-medium leading-8">
                Where We Are Today
              </h3>
              <p className="text-xl text-Dark_Paragraph font-normal leading-8">
                Today, SwiftCargo is a trusted logistics partner, leveraging
                advanced technology and a vast carrier network to provide
                real-time tracking, on-time deliveries, and cost-efficient
                solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
