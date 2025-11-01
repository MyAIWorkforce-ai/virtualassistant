"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface Metric {
  icon: string;
  value: string;
  title: string;
}

interface HeroSectionProps {
  tag: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
  metrics: Metric[];
}

export default function HeroSection({
  tag,
  title,
  description,
  buttonText,
  image,
  metrics,
}: HeroSectionProps) {
  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
<motion.section
  className="relative w-full bg-cover bg-center overflow-visible"
  style={{
    background: "linear-gradient(to bottom, #0097DA, #00BAF2, #8FD8F8)",
  }}
>


  <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 py-16 border-b border-white">
    {/* LEFT CONTENT */}
    <motion.div
      className="text-white max-w-xl flex flex-col pb-9 items-center md:items-start text-center md:text-left"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Tag */}
      <motion.div className="inline-block bg-white text-[#00A7DE] font-medium px-7 py-2 rounded-full mb-4 shadow">
        {tag}
      </motion.div>

      {/* Title */}
      <motion.h1 className="text-5xl font-bold mb-4">{title}</motion.h1>

      {/* Description */}
      <motion.p className="text-2xl font-regular text-[#E0F2FE] mb-6">
        {description}
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="text-[#00A7DE] bg-[#FFFFFF] font-medium py-2 px-4 rounded flex items-center gap-2
        transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
      >
        {buttonText}
        <Image
          src="/images/svg.png"
          alt="arrow"
          width={12}
          height={12}
          priority
        />
      </motion.button>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      className="flex-shrink-0 flex justify-center md:justify-end items-end h-full overflow-hidden mt-8 md:mt-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Image
        src={image}
        alt={title}
        width={650}
        height={650}
        priority
        className="w-[90%] max-w-[650px] h-auto object-cover md:pl-19 md:-mb-25 md:pr-30"
        style={{ objectPosition: "right center" }}
      />
    </motion.div>
  </div>
</motion.section>


      {/* ---------------- GRID BACKGROUND ---------------- */}
      <motion.section className="relative w-full h-32 md:h-40 -mt-16 bg-white">
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-l border-white/20 h-full"></div>
          ))}
        </div>
      </motion.section>

      {/* ---------------- METRICS SECTION ---------------- */}
<motion.section className="relative z-20 -mt-12 md:-mt-20 flex justify-center px-4 md:px-8 mb-20">
  <motion.div
    className="flex flex-wrap justify-around items-center gap-8 border border-[#E5E7EB] rounded-lg p-6 md:p-8 bg-[#FFFFFF] shadow-[0_10px_15px_0px_#0000001A,0_4px_6px_0px_#0000001A] max-w-6xl w-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {metrics.map((item, index) => {
      const staticIcons = [
        "/industries-images/reuse-icons/clock.png",
        "/industries-images/reuse-icons/Frame.png",
        "/industries-images/reuse-icons/wave.png",
      ];

      return (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center min-w-[100px] flex-1"
        >
          <Image
            src={staticIcons[index] || "/images/clock.png"}
            alt={`icon-${index}`}
            width={32}
            height={32}
            className="mb-2"
            priority
          />
          <h2 className="text-[#000000] font-semibold text-3xl md:text-4xl">
            {item.value}
          </h2>
          <p className="text-[#797A7D] text-sm md:text-base mt-2 font-regular">
            {item.title}
          </p>
        </motion.div>
      );
    })}
  </motion.div>
</motion.section>


    </>
  );
}
