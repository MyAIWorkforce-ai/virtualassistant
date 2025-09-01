"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ReviewSlider({ testimonials }) {
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 20, // speed (lower = faster)
          repeat: Infinity,
        }}
      >
        {/* Duplicate testimonials to make loop seamless */}
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] min-h-[300px] bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Stars */}
            <div className="mb-4">
              <Image
                src={t.stars}
                alt="5 star rating"
                width={357.33}
                height={24}
                className="mx-auto"
              />
            </div>

            {/* Quote */}
            <p className="text-gray-700 text-left text-sm flex-grow">
  &quot;{t.quote}&quot;
</p>


            {/* Client Info */}
            <div className="mt-6 flex items-center text-left justify-start">
              <Image
                src={t.image}
                alt={t.name}
                width={48}
                height={48}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
