"use client";

import { motion } from "framer-motion";

export default function ScrollSlide({ children, direction = "up"}) {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // triggers once when 20% visible
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
