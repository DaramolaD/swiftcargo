import React from "react";

const OurPurpose = () => {
  return (
    <section className="w-full flex flex-col gap-12 py-20">
      <div className="container mx-auto flex flex-col px-5">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="text-4xl font-medium text-Dark_One">
            What We Stand For
          </h1>
          <div className="grid gap-6 md:gap-8">
            <div className="flex flex-col gap-2 px-5 md:px-10 py-10 md:py-16 md:max-w-[75%] lg:max-w-[80%] border rounded-xl bg-Biscay-100 text-Biscay-950 border-Biscay-950">
              <h3 className="text-2xl text-Biscay-950 font-medium leading-8">
                Our Mission
              </h3>
              <p className="text-xl text-Biscay-950 font-normal leading-8">
                To simplify and optimize logistics for businesses, ensuring
                seamless deliveries with complete transparency and reliability.
              </p>
            </div>
            <div className="flex flex-col gap-2 px-5 md:px-10 py-10 md:py-16 md:max-w-[75%] lg:max-w-[80%] justify-self-end border rounded-xl bg-[#ffe3b3] border-orange-950">
              <h3 className="text-2xl text-orange-950 font-medium leading-8">
                Our Vision
              </h3>
              <p className="text-xl text-orange-950 font-normal leading-8">
                A world where businesses never have to worry about missed
                deadlines, lost shipments, or hidden fees—because logistics just
                works.
              </p>
            </div>
            <div className="flex flex-col gap-4 px-5 md:px-10 py-10 md:py-16 md:max-w-[75%] lg:max-w-[80%] border rounded-xl bg-fuchsia-200 border-fuchsia-950">
              <h3 className="text-2xl text-fuchsia-950 font-medium leading-8">
                Our Core Values
              </h3>
              <ul className="text-xl text-fuchsia-950 font-normal list-disc pl-6">
                <li>Reliability - Delivering on time, every time.</li>
                <li>Transparency - No hidden fees, no surprises.</li>
                <li>
                  Innovation - Leveraging technology for smarter logistics
                </li>
                <li>Customer Focus - Your success is our priority.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
