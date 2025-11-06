"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Card {
  icon: string;
  title: string;
  description: string;
}

interface ProductivityGainsProps {
  heading: string;
  cards: Card[];
}

export default function ProductivityGains({ heading, cards }: ProductivityGainsProps) {
  return (
    <motion.section
      id="productivity-gains"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#00A7DE] to-[#0578AC] px-4 sm:px-6 py-16 text-white"
      aria-labelledby="productivity-heading"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2
          id="productivity-heading"
          className="text-4xl sm:text-5xl font-bold mb-4 font-Poppins"
        >
          {heading}
        </h2>
      </div>
{/* Cards */}
<div
  className={`grid gap-8 sm:gap-10 md:gap-12 px-20 justify-items-center max-w-6xl w-full text-center mx-auto ${
    cards.length === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center"
  }`}
>
  {cards.map((card, index) => (
    <motion.article
      key={index}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="flex flex-col items-center space-y-3"
    >
      <Image
        src={card.icon}
        alt={card.title}
        width={56}
        height={56}
        className="w-12 h-12 sm:w-14 sm:h-14 mb-1"
        priority
      />
      <h3 className="text-lg font-semibold font-Poppins">{card.title}</h3>
      <p className="text-sm font-Poppins text-[#E0F2FE] leading-relaxed">
        {card.description}
      </p>
    </motion.article>
  ))}
</div>


    </motion.section>
  );
}
