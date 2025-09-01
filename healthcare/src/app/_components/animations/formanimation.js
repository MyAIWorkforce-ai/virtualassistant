// animations/formAnimations.js
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // inputs animate one by one
    },
  },
};

export const fadeInItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const blinkButton = {
  rest: {
    scale: 1,
    boxShadow: "0 0 10px rgba(0,167,222,0.7)",
    transition: { duration: 1.8, yoyo: Infinity, ease: "easeInOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(0,167,222,1)",
  },
};
