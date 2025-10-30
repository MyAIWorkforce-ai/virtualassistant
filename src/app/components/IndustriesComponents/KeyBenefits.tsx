"use client";

import Image from "next/image";
import { motion } from "framer-motion";


interface CardData {
  title: string;
  description: string;
}

interface KeyBenefitsProps {
  heading: string;
  subheading: string;
  cards: CardData[];
}

const defaultCards = [
  {
    icon: "/images/automated-scheduling.png",
    gradient: "from-[#FAF5FF] to-[#F3E8FF]",
  },
  {
    icon: "/images/client retention.png",
    gradient: "from-[#ECFEFF] to-[#CFFAFE]",
  },
  {
    icon: "/images/treatment record.png",
    gradient: "from-[#FFFBEB] to-[#FEF3C7]",
  },
  {
    icon: "/images/care quality.png",
    gradient: "from-[#F0FDF4] to-[#DCFCE7]",
  },
  {
    icon: "/images/stress.png",
    gradient: "from-[#FFF1F2] to-[#FFE4E6]",
  },
];

export default function KeyBenefits({ heading, subheading, cards }: KeyBenefitsProps) {
  return (
    <motion.section
      className="py-12 px-4 mt-15 md:px-8 lg:px-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      aria-labelledby="key-benefits-heading"
    >
      {/* Heading */}
      <motion.h2
        id="key-benefits-heading"
        className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 md:mb-8 text-black text-center" >
        {heading}
      </motion.h2>

      {/* Paragraph*/}
      <motion.p
        className="text-xl font-normal -mt-2 md:-mt-6 mb-8 text-[#797A7D] text-center" >
        {subheading}
      </motion.p>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}  >
        {cards.map((card, index) => {
          const visuals = defaultCards[index] || defaultCards[0];
          return (
            <motion.article
              key={index}
              className={`bg-gradient-to-br ${visuals.gradient} text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300`}

            >
              <div className="mb-4">
                <Image
                  src={visuals.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-base font-regular text-[#797A7D] leading-relaxed">
                {card.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.section>
  );
}
