"use client";

import { motion } from "framer-motion";

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function ScaleUp({ children, delay = 0 }) {
  return (
    <motion.div
      variants={scaleUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}   // 👈 trigger earlier (10%)
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}

