// animations/pageTransition.js
export const pageVariants = {
  hidden: { opacity: 0, scale: 0.9 }, // initial small & faded
  enter: { opacity: 1, scale: 1 },    // zoom in to full
  exit: { opacity: 0, scale: 0.9 },   // zoom out when leaving
};

export const pageTransition = {
  type: "spring",
  stiffness: 50,
  damping: 20,
  duration: 0.6,
};
