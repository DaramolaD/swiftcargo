"use client";
import React from "react";
import Dribble from "@/public/Dribbble.png";
import Facebook from "@/public/Facebook.png";
import Google from "@/public/Google.png";
import Webflow from "@/public/Webflow.png";
import Youtube from "@/public/Youtube.png";
import { motion } from "framer-motion";
import Image from "next/image";

const OurPartners = () => {
  const brands = [
    { src: Dribble, alt: "dribble logo" },
    { src: Facebook, alt: "facebook" },
    { src: Google, alt: "google" },
    { src: Webflow, alt: "webflow" },
    { src: Youtube, alt: "youtube" },
  ];
  return (
    <section className="container mx-auto py-12 flex flex-col items-center px-5 md:px-6">
      <h2 className="text-xl md:text-2xl font-medium">
        Our solution is trusted by businesses
      </h2>
      <div className="w-full overflow-hidden relative py-10">
        <motion.div
          className="flex space-x-10 min-w-max"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 10, // Adjust speed here
          }}
        >
           {[...brands, ...brands].map((brand, index) => (
            <Image
              key={index}
              src={brand.src}
              alt={brand.alt}
              width={80}
              height={40}
              className="shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPartners;
