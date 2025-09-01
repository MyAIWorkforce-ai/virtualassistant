"use client";

import { motion } from "framer-motion";

export default function FadeUp({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}       // start slightly below and invisible
      whileInView={{ opacity: 1, y: 0 }}   // fade in and move up
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
