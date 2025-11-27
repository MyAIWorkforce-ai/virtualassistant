"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


interface UseItem {
  icon: string;
  title: string;
  description: string;
}
interface PrimaryUsesProps {
  heading: string;
  items: UseItem[];
}

export default function PrimaryUses({ heading, items }: PrimaryUsesProps) {
  const midIndex = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midIndex);
  const rightColumn = items.slice(midIndex);

  return (
    <motion.section
      className="px-4 sm:px-6 md:px-8 py-12 max-w-6xl mt-10 mx-auto"
   initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="primary-uses-heading"
    >
      {/* Centered Heading */}
      <motion.h2
        id="primary-uses-heading"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#00A7DE] mb-12 -mt-12 sm:-mt-15" >
        {heading}
      </motion.h2>

      {/* Two-column layout */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 p-6 sm:p-10 md:p-10 border rounded-lg transition-shadow max-w-5xl mx-auto bg-white/30 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* LEFT COLUMN */}
        <div className="space-y-6 sm:space-y-8">
          {leftColumn.map((item, index) => (
            <motion.article
              key={index}
              className="flex items-start gap-3 sm:gap-4">
            <Image
  src={item.icon}
  alt={item.title}
  width={40}
  height={40}
  priority
  className="shrink-0 w-10 h-10 sm:w-12 sm:h-12"
/>
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-base font-normal text-[#797A7D]">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

    {/* RIGHT COLUMN */}
<div className="space-y-6 sm:space-y-8">
  {rightColumn.map((item, index) => (
    <motion.article
      key={index}
      className="flex items-start gap-3 sm:gap-4"
    >
    <Image
  src={item.icon}
  alt={item.title}
  width={40}
  height={40}
  priority
  className="shrink-0 w-10 h-10 sm:w-12 sm:h-12"
/>
      <div>
        <h3 className="text-base font-medium text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-base font-normal text-[#797A7D]">
          {item.description}
        </p>
      </div>
    </motion.article>
  ))}
  <div className="flex items-center gap-2 mt-2"> 
<p
  className="text-[14px] font-poppins pl-5 text-center mt-10"
  style={{
    color: "#0090CC",
    textShadow: "0 0 4px rgba(0, 144, 204, 0.25)",
  }}
>
  Get you AI Virtual <br />
Receptionist set up in <br />
  under 5 minutes.
</p>

    <Image
      src="/industries-images/reuse-icons/arrow.png" 
      alt="Arrow Vector"
      width={90}
      height={90}
      
    />
  <Link
                  href="https://admin.virtualassistant.com.au/register" target="_blank" rel="noopener noreferrer"><button
  className="bg-[#00A7DE] text-white text-[14px] mb-18 font-medium rounded-md px-4 py-2
             transition-all duration-300 ease-in-out
             hover:bg-[#0798c9] hover:shadow-lg hover:scale-105"
>
  Start 14 Day Free Trial
</button></Link>
  </div>
</div>


      </motion.div>
    </motion.section>
  );
}
