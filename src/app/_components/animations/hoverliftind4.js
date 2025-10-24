// components/animations/hoverLift.js

// components/animations/cardAnimations.js

// Hover animation (Tailwind classes)
export const hoverLift =
  "transition-transform transform hover:-translate-y-2  hover:shadow-xl duration-300";

// Scroll animation (Framer Motion variants)
export const fadeSlideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // stagger effect
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
