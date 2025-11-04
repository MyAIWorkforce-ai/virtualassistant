"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/* -------------------------
   Scroll Animation Variants
------------------------- */
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* -------------------------
   Scroll Animation Wrapper
------------------------- */
export function ScrollAnimation({ children, variant = fadeInUp, threshold = 0.2 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  if (inView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variant}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}
