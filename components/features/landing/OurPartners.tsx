"use client";
import React from "react";
import Dribble from "@/public/images/Dribbble.png";
import Facebook from "@/public/images/Facebook.png";
import Google from "@/public/images/Google.png";
import Webflow from "@/public/images/Webflow.png";
import Youtube from "@/public/images/Youtube.png";
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
          className="flex items-center gap-10 min-w-max"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
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
