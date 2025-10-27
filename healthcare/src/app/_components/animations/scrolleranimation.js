import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};

export default useScrollAnimation;
