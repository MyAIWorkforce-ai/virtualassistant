export const formVariant = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const staggerChild = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
export const swipeOverlay = {
  rest:  { x: "-140%" },
  hover: { x: "140%", transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};
