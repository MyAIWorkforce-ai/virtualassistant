"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TopBox {
  heading: string;
  description: string;
}
interface UseCaseItem {
  title: string;
  text: string;
}
interface UseCaseProps {
  title: string;
  topBox: TopBox;
  useCases: UseCaseItem[];
}
export default function UseCase({ title, topBox, useCases }: UseCaseProps) {
  const icons = [
    "/images/one.png",
    "/images/two.png",
    "/images/three.png",
    "/images/four.png",
  ];
  const bgColors = [
    "bg-[#3B82F6]/8",
    "bg-[#10B981]/8",
    "bg-[#F5B80B]/8",
    "bg-[#FAF5FF]/8",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#F9FAFB] via-[#E6F8FA] to-[#DCF5F8] overflow-hidden"
    >
      {/* HEADING */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h2 className="font-[Poppins] font-semibold text-[#00A7DE] text-3xl sm:text-4xl md:text-[36px] leading-[150%] mb-4">
          {title}
        </h2>
      </div>

{/* TOP BOX */}
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 250, damping: 20 }}
  className="rounded-[20px] p-6 md:p-8 text-black shadow-lg bg-gradient-to-br from-[#F9FAFB] to-[#F9FAFB] max-w-5xl mx-auto mb-6"
>
  <h3 className="text-lg sm:text-xl font-semibold mb-2">
    {topBox.heading}
  </h3>
  <p className="text-sm sm:text-base text-[#797A7D] leading-relaxed">
    {topBox.description}
  </p>
</motion.div>

{/* GRID OF USE CASE CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 max-w-5xl mx-auto">
  {useCases.map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ scale: 1.04, rotateZ: 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={`w-full h-auto rounded-xl text-black shadow-md ${bgColors[index]} transition-transform flex flex-col justify-between p-4`}
    >
      <div className="flex items-center gap-3">
        <Image
          src={icons[index]}
          alt={item.title}
          width={32}
          height={32}
          priority
        />
        <h3 className="text-base text-[#000000] font-semibold">
          {item.title}
        </h3>
      </div>
      <p className="text-sm font-regular text-[#797A7D] leading-relaxed">
        {item.text}
      </p>
    </motion.div>
  ))}
</div>
    </motion.section>
  );
}
