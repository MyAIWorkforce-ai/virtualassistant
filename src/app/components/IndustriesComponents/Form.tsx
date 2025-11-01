"use client";

import { motion } from "framer-motion";
import FormSection from "@/app/_components/FormSection"

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
          className="text-white mt-2 mb-8 text-base md:text-lg"
        >
          {subtitle}
        </motion.p>

        <FormSection />
      </motion.div>
    </section>
  );
}
