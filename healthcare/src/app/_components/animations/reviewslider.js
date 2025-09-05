"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

export default function ReviewSlider({ testimonials }) {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [totalWidth, setTotalWidth] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const slides = container.querySelectorAll(".slide");
    let width = 0;
    slides.forEach((slide) => {
      width += slide.offsetWidth + 24; // 24 = gap-6
    });
    setTotalWidth(width / 2); // half because we duplicated slides
  }, [testimonials]);

  useEffect(() => {
    if (!totalWidth) return;

    controls.start({
      x: [0, -totalWidth],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: 40, // adjust speed here
      },
    });
  }, [totalWidth, controls]);

  const slides = [...testimonials, ...testimonials];

  return (
    <div ref={containerRef} className="overflow-hidden w-full">
      <motion.div className="flex gap-6" animate={controls}>
        {slides.map((t, index) => (
          <div
            key={index}
            className="slide min-w-[300px] min-h-[300px] bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4">
              <Image
                src={t.stars}
                alt="5 star rating"
                width={357.33}
                height={24}
                className="mx-auto"
              />
            </div>

            <p className="text-gray-700 text-left text-sm flex-grow">
              &quot;{t.quote}&quot;
            </p>

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
