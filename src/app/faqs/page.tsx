"use client"
import React from "react";
import data from "@/app/data/faqs.json";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqsData {
  page_title: string;
  span_title: string;
  introduction: string;
  faqs: FaqItem[];
}

const Faqs = () => {
  const { page_title, span_title, introduction, faqs } = data as FaqsData;

  return (
    <section className="py-30 px-6 md:px-36 bg-gradient-to-b from-[#E8F6FF] to-[#F0F9FF] flex flex-col items-center">
      
      <motion.div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl mb-12"
        initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          viewport={{once:false}}>
        <h1 className="text-4xl md:text-5xl font-Poppins font-bold mb-6">
          <span className="text-black">{page_title} </span>
          <span className="text-[#00A7DE]">{span_title}</span>
        </h1>
        <p className="font-Poppins text-[#797A7D] text-justify text-lg leading-relaxed">
          {introduction}
        </p>
      </motion.div>

      <motion.div className="bg-white rounded-xl border-b-4 border-[#E5E7EB] shadow-2xl shadow-[#00000040] p-8 md:p-12 w-full max-w-5xl"  initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 ,delay:0.3}}
          viewport={{once:false}}>
        <div className="flex flex-col gap-10">
          {faqs.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              
              <h3 className="font-Poppins font-semibold text-xl text-black  md:text-left">
                {index + 1}. {item.question}
              </h3>

              <p className="font-Poppins text-[#797A7D] font-normal leading-relaxed md:text-left">
                {item.answer}
              </p>

            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Faqs;
