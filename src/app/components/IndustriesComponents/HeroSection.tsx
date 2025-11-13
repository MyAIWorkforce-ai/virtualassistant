"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
  className="relative w-full bg-cover bg-center overflow-hidden"
  style={{
    background: "linear-gradient(to bottom, #0097DA, #00BAF2, #8FD8F8)",
  }}
>
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 border-b border-white">
    
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
      <motion.h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</motion.h1>

      {/* Description */}
      <motion.p className="text-lg sm:text-2xl text-[#E0F2FE] mb-6">
        {description}
      </motion.p>

           {/*  NEW CLIENT-APPROVED CTA BUTTONS */}
    <motion.div
       className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start"
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.8, delay: 0.2 }}
    >
       {/* Start Trial Button */}
       <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
         <Link
           href="https://admin.virtualassistant.com.au/register"
           target="_blank"
           rel="noopener noreferrer"
           className="bg-[#00A7DE] text-white px-6 py-2.5 rounded-lg font-semibold 
           flex items-center gap-2 justify-center 
           transition-all duration-300 ease-in-out 
           hover:shadow-[0_0_15px_#00A7DE]"
         >
         Start 14 Day Free Trial
          <Image
            src="/about-images/arrow.png"
            alt="Arrow icon"
            width={12}
            height={20}
            priority
          />
        </Link>
      </motion.div>

       {/* Book Demo Button */}
       <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
         <Link
           href="https://calendar.app.google/g5bCnhaSJocufjFr5"
           target="_blank"
           rel="noopener noreferrer"
           className="relative px-6 py-2.5 font-medium text-gray-700 rounded-lg 
           border border-gray-300 flex items-center gap-2 justify-center
           transition-all duration-300 ease-in-out 
           hover:shadow-[0_0_10px_rgba(0,0,0,0.2)]"
         >
          <Image
             src="/about-images/play.png"
             alt="Play icon"
             width={12}
            height={20}
            priority
           />
           Book a Demo
         </Link>
      </motion.div>
    </motion.div>
    </motion.div>

{/* RIGHT IMAGE */}
<div className="relative mt-10 md:mt-0 w-full md:flex-1 h-[280px] sm:h-[360px] md:h-[420px] lg:h-[450px] xl:h-[460px] overflow-visible">
  <motion.div
    className="absolute -mb-12 bottom-0 flex justify-center md:justify-end items-end w-full h-full z-0"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <Image
      src={image}
      alt={title}
      width={500}
      height={500}
      priority
      className="
        w-full
        max-w-[300px]
        sm:max-w-[400px]
        md:max-w-[450px]
        lg:max-w-[470px]
        xl:max-w-[480px]
        2xl:max-w-[500px]
        h-auto
        object-contain
      "
      style={{ objectPosition: 'right bottom' }}
    />
  </motion.div>
</div>
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
