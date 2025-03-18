import React from "react";

const OurPurpose = () => {
  return (
    <section className="w-full flex flex-col gap-12 py-10">
      <div className="container mx-auto flex flex-col px-5">
        <div className="flex flex-col gap-5 md:gap-10">
          <h1 className="text-4xl font-medium text-Dark_One">
            What We Stand For
          </h1>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-2 px-5 py-10 border rounded-md bg-Biscay-100 text-Biscay-950">
              <h3 className="text-2xl text-Dark_Two font-medium leading-8">
                Our Mission
              </h3>
              <p className="text-xl text-Dark_Paragraph font-normal leading-8">
                To simplify and optimize logistics for businesses, ensuring
                seamless deliveries with complete transparency and reliability.
              </p>
            </div>
            <div className="flex flex-col gap-2 px-5 py-10 border rounded-md bg-orange-200 text-orange-950">
              <h3 className="text-2xl text-Dark_Two font-medium leading-8">
                Our Vision
              </h3>
              <p className="text-xl text-Dark_Paragraph font-normal leading-8">
                A world where businesses never have to worry about missed
                deadlines, lost shipments, or hidden fees—because logistics just
                works.
              </p>
            </div>
            <div className="flex flex-col gap-2 px-5 py-10 border rounded-md bg-fuchsia-200 text-fuchsia-950">
              <h3 className="text-2xl text-Dark_Two font-medium leading-8">
                Our Core Values
              </h3>
              <ul className="text-xl text-Dark_Paragraph font-normal list-disc pl-6">
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
