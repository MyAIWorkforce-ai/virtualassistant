"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FormSection from "@/app/_components/FormSection"
import Link from "next/link";

interface FormProps {
  title: string;
  subtitle: string;
}

export default function Form({ title, subtitle }: FormProps) {
  return (
    <section className="w-full bg-[#00A7DE] py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-white mt-2 mb-4 text-base md:text-lg"
        >
          {subtitle}
        </motion.p>
     
         {/* BUTTONS */}
           <motion.div
             className="flex gap-4 m-6  justify-center items-center"
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
           >
             <motion.button
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
               className="w-[159px] h-[50px] bg-white  text-[#00A7DE] font-[500] text-[12px] leading-[22.5px] rounded-[6px] font-Poppins transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
             ><Link
                  href="https://admin.virtualassistant.com.au/register" target="_blank" rel="noopener noreferrer">
               Start 14 Day Free Trial
             </Link></motion.button>
             <motion.button
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.3 }}
               className="w-[159px] h-[50px] bg-white text-[#00A7DE] font-[500] text-[16px] leading-[100%] rounded-[6px]  flex items-center justify-center gap-2 font-Poppins transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
             ><Link
                  href="https://calendar.app.google/g5bCnhaSJocufjFr5" target="_blank" rel="noopener noreferrer">
               Book a Demo
               <Image
                 src="/industries-images/reuse-icons/demo-button.png"
                 alt="demo"
                 width={14}
                 height={14}
                 priority
               /></Link>
             </motion.button>
             
           </motion.div>

        <FormSection />
      </motion.div>
    </section>
  );
}
