"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ZoomTransition({ children, routeKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        viewport={{ once: false}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
