"use client";

import { motion } from "framer-motion";

// Scale-Up / Pop-In animation
export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function ScaleUp({ children, delay = 0 }) {
  return (
    <motion.div
      variants={scaleUpVariants}
      initial="hidden"
      whileInView="visible"                 // 
      viewport={{ once: false, amount: 0.3 }} //
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
}
