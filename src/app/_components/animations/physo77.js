export const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

export const leftVariant = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const rightVariant = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};