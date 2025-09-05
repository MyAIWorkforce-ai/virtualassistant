// src/animations/ScaleUpAnimation.js
import { motion } from "framer-motion";

export const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const ScaleUp = ({ children}) => (
  <motion.div
    className="bg-white" // ensures no black flash
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={scaleUpVariant}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
