"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Card {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

interface KeyBenefitsProps {
  heading: string;
  subheading: string;
  cards: Card[];
}

export default function KeyBenefits({ heading, subheading, cards }: KeyBenefitsProps) {
  return (
    <motion.section
      className="py-12 px-4 mt-10 md:px-8 lg:px-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="key-benefits-heading"
    >
      {/* Heading */}
      <h2
        id="key-benefits-heading"
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-black text-center"
      >
        {heading}
      </h2>

      {/* Subheading */}
      <p className="text-lg sm:text-xl font-normal -mt-2 md:-mt-6 mb-8 text-[#797A7D] text-center">
        {subheading}
      </p>

      {/* Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 justify-center items-stretch max-w-7xl mx-auto"
      >
        {cards.map((card, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`bg-gradient-to-br ${card.gradient} text-black rounded-[16px] p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full min-h-[260px]`}
          >
            <div>
              <Image
                src={card.icon}
                alt={card.title}
                width={56}
                height={56}
                className="object-contain mb-3"
                priority
              />
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-[#797A7D] leading-relaxed text-justify">
                {card.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
