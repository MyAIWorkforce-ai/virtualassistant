export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

export const cardMotion = {
  hidden: { opacity: 0, y: 50, scale: 0.95, rotateX: 10 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
