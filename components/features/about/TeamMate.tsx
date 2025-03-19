import Image from "next/image";
import React from "react";
import team1 from "@/public/images/team1.png"
import team2 from "@/public/images/team2.png"
import team3 from "@/public/images/team3.png"
import team4 from "@/public/images/team4.png"
import team5 from "@/public/images/team5.png"
import team6 from "@/public/images/team6.png"
import team7 from "@/public/images/team7.png"
import team8 from "@/public/images/team8.png"

const TeamMate = () => {
  const teamMembers = [
    {
      name: "Brandon Shaw",
      role: "Founder & CEO",
      img: team1,
    },
    {
      name: "Floyd Stephens",
      role: "Chief Technology Officer",
      img: team2,
    },
    {
      name: "Kate Clark",
      role: "Director of People",
      img: team3,
    },
    {
      name: "Eunice Doyle",
      role: "Software Engineer",
      img: team4,
    },
    {
      name: "Virginia Aguilar",
      role: "Software Engineer",
      img: team5,
    },
    {
      name: "Jeffrey Goodwin",
      role: "Sr. Manager, Content & Growth",
      img: team6,
    },
    {
      name: "Beatrice Williamson",
      role: "Product Designer",
      img: team7,
    },
    {
      name: "Roger Dawson",
      role: "Senior Account Executive",
      img: team8,
    },
  ];

  return (
    <section className="w-full flex flex-col gap-12 py-20 bg-blue-100">
      <div className="container mx-auto flex flex-col px-5">
        <div className="flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-medium text-Dark_One">
              Meet Our Team
            </h1>
            <p className="text-xl text-Dark_Paragraph leading-8">
              Our team is the backbone of SwiftCargo. We bring together industry
              experts, technologists, and customer-focused professionals to
              deliver excellence
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {teamMembers.map((member, index) => (
              <div className="relative flex flex-col gap-2 rounded-xl overflow-hidden" key={index}>
                <Image src={member.img} alt={member.role} className="w-full h-auto"/>
                <div className="absolute bottom-0 px-5 gap-0 w-full py-4 flex flex-col text-white bg-blue-950">
                  <h4 className="text-base font-medium">{member.name}</h4>
                  <p className="text-sm">({member.role})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMate;
