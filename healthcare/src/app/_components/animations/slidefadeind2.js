// animations/slideFade.js
export const slideFadeVariants = {
  hidden: { opacity: 0, x: 50 }, // start off-screen + transparent
  visible: { opacity: 1, x: 0 }, // slide into place
  exit: { opacity: 0, x: -50 },  // optional: exit animation
};

export const slideFadeTransition = {
  duration: 0.1,
  ease: "easeOut",
};
