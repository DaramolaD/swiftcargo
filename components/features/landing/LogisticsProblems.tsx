import React from "react";
import Image from "next/image";
import worryLady from "@/public/images/worrrylady.png";

const LogisticsProblems = () => {
  return (
    <section className="container mx-auto py-20 flex flex-col items-center px-5 md:px-6">
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-20 md:gap-12">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl md:text-3xl font-medium text-Dark_One">
            “Are These Logistics Problems Slowing You Down?“
          </h3>
          <ul className="flex flex-col gap-2.5 list-disc font-normal text-base md:text-lg text-Dark_Paragraph pl-5">
            <li>
              <span className="font-medium text-Dark_Two">
                Missed Deadlines?
              </span>{" "}
              Late shipments cost you time and money.
            </li>
            <li>
              <span className="font-medium text-Dark_Two">No Visibility?</span>{" "}
              Unclear tracking leaves you in the dark.
            </li>
            <li>
              <span className="font-medium text-Dark_Two">
                Unexpected Costs?
              </span>{" "}
              Hidden fees eat into your profits.
            </li>
            <li>
              <span className="font-medium text-Dark_Two">
                Too Many Vendors?
              </span>{" "}
              Juggling multiple logistics partners is exhausting.
            </li>
          </ul>
          <p className="text-lg text-Dark_Paragraph font-normal">
            It doesn&apos;t have to be this way. SwiftCargo simplifies your
            logistics, so you focus on growing your business.
          </p>
        </div>
        <Image
          src={worryLady}
          alt="worryLady"
          className="w-full h-full max-h-[617px] object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default LogisticsProblems;
