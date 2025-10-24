"use client";

import { motion } from "framer-motion";

export default function HeroAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}   // start hidden, slightly lower & smaller
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // animate when in viewport
      viewport={{ once: false, amount: 0.3 }}      // run every time (scroll up/down), trigger when 30% visible
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
