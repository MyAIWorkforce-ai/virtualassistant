"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface LeftBox {
  heading: string;
  description: string;
}

interface WhyChooseProps {
  heading: string;
  description: string;
  leftbox: LeftBox;
  image: string;
}

export default function WhyChoose({ heading, description, leftbox, image }: WhyChooseProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-[#F9FAFB] via-[#E6F8FA] to-[#DCF5F8] overflow-hidden"
    >
      {/* TOP TEXT */}
  <div className="max-w-4xl mx-auto text-center mb-10">
  <h2 className="font-poppins font-semibold text-[#00A7DE] text-3xl sm:text-4xl md:text-[36px] leading-[150%] ">
    {heading}
  </h2>
  <p className="font-poppins font-medium text-[20px] text-[#797A7D] text-lg sm:text-xl leading-[150%] text-center">
    {description}
  </p>
</div>

      {/* CONTENT SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* LEFT BOX */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="bg-[#C5EEFF] rounded-[30px] shadow-sm text-center md:text-left px-8 py-10 md:py-12 md:px-12 w-full md:w-[696px] min-h-[302px] flex flex-col justify-center"
        >
          <h3 className="font-Poppins font-bold text-[24px] leading-[100%] text-black mb-4">
            {leftbox.heading}
          </h3>
          <p className="text-[#797A7D] font-Poppins text-base sm:text-lg md:text-xl leading-relaxed">
            {leftbox.description}
          </p>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="rounded-[30px] shadow-md w-full md:w-[473px] h-auto overflow-hidden flex justify-center"
        >
          <Image
            src={image}
            alt="Why Choose Us"
            width={478}
            height={309}
            className="rounded-[30px] object-cover w-full h-[302px]"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
