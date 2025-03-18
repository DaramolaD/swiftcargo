import React from "react";

const OurStory = () => {
  return (
    <section className="w-full flex flex-col gap-12 py-10">
      <div className="container mx-auto flex flex-col px-5">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="text-4xl font-medium text-Dark_One">Our Story</h1>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-Dark_Two font-medium leading-8">
                How We Started
              </h3>
              <p className="text-xl text-Dark_Paragraph font-normal leading-8">
                SwiftCargo was founded with a simple mission: to eliminate the
                inefficiencies in logistics that slow businesses down. We saw
                companies struggling with late shipments, unpredictable costs,
                and poor tracking—and we knew there had to be a better way.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl text-Dark_Two font-medium leading-8">
                Where We Are Today
              </h3>
              <p className="text-xl text-Dark_Paragraph font-normal leading-8">
                Now, SwiftCargo is a trusted logistics partner for businesses of
                all sizes. With advanced technology, a dedicated team, and a
                network of reliable carriers, we provide real-time tracking,
                on-time deliveries, and cost-effective solutions tailored to
                your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
