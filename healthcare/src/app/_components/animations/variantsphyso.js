// fadeUp
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// staggerFade (renamed to staggerFadeUp)
export const staggerFadeUp = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const fadeInItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// buttonFlip
export const buttonHover = {
  initial: { backgroundColor: "#FFFFFF", color: "#00A7DE" }, // default white bg, blue text
  hover: {
    backgroundColor: "#ffffff", // black bg
    color: "#00A7DE",           // white text
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};