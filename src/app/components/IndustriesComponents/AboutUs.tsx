"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutUsProps {
  heading: string;
  sections: {
    subheading: string;
    paragraph: string;
  }[];
}

const AboutUs: React.FC<AboutUsProps> = ({ heading, sections }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full py-20 px-6 md:px-12"
      style={{
        background: "linear-gradient(to bottom, #E5F2FF, #F4F8FD, #F9FAFB)",
      }}
    >
      {/* Top Heading */}
      <h2 className="text-center font-poppins font-semibold text-[36px] leading-[100%] text-[#00A7DE] mb-10">
        {heading}
      </h2>

      {/* Subheading + Paragraphs */}
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-poppins font-semibold text-[20px] leading-[40px] text-gray-800 mb-2">
              {section.subheading}
            </h3>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-gray-600">
              {section.paragraph}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default AboutUs;
