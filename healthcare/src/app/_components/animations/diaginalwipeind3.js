// animations/slideIn.js
export const slideInLeft = {
  hidden: { opacity: 0, x: -100 }, // start left
  visible: { opacity: 1, x: 0 },   // slide to position
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },  // start right
  visible: { opacity: 1, x: 0 },   // slide to position
};

export const slideInUp = {
  hidden: { opacity: 0, y: 50 },   // start below
  visible: { opacity: 1, y: 0 },   // slide up
};
