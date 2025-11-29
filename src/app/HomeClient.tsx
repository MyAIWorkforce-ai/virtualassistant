"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import FadeInOnScroll from "./_components/animations/FadeInScroll";
import HoverSlide from "./_components/animations/HoverSlider";
import HeroAnimation from "./_components/heroanimation";
import ScrollSlide from "./_components/animations/scrollslide";
import RotateIn from "./_components/animations/RotateIn";
import ScaleUp from "./_components/animations/ScaleUp";
import useScrollAnimation from "./_components/animations/scrolleranimation";

export default function HomeClient() {
  useScrollAnimation();

  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Example for Testimonials Slider
  const testimonials = [/* ...your testimonials array here... */];
  const [cardCount, setCardCount] = useState(3);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateCardCount = () => {
      if (window.innerWidth < 640) setCardCount(1);
      else if (window.innerWidth < 1024) setCardCount(2);
      else setCardCount(3);
    };
    updateCardCount();
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardCount);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1 >= totalSlides ? 0 : prev + 1));
    }, 9000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const [billingCycle, setBillingCycle] = useState("monthly");
  const plans = [/* ...your plans array here... */];
  const industries = [/* ...your industries array here... */];

  return (
    <>
      {/* Place all your interactive JSX here (Hero, Features, Industries, Pricing, How It Works, etc.) */}
      {/* Example Hero Section */}
      <main className="bg-[url('/image/Hero.png')] bg-cover bg-center bg-no-repeat w-full min-h-[600px] lg:h-[800px]">
        <section className="relative w-full h-auto overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/image/bg.png"
              alt="Background Image"
              width={1260}
              height={800}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          <div className="flex flex-col items-center justify-center text-center mt-8 px-4 py-24 md:py-20 lg:py-16 lg:flex-row lg:text-left lg:justify-between lg:px-8 max-w-7xl mx-auto gap-10">
            <motion.div
              className="w-full lg:w-1/2 flex flex-col pl-4 items-center lg:items-start text-center lg:text-left mt-4 lg:-mt-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#00A7DE] font-semibold tracking-wide">
                Your Business, Always Answered
              </h3>
              <motion.h1
                className="mt-3 text-3xl sm:text-3xl lg:text-[44px] font-extrabold text-black leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                AI Virtual Receptionist for Service Businesses in Australia.
              </motion.h1>
              <p className="mt-2 text-sm sm:text-base text-[#797A7D]">
                Never miss a call, booking or opportunity again!
              </p>

              <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start items-start">
                <Link
                  href="https://admin.virtualassistant.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-[#00A7DE] text-white px-6 py-3 rounded-full font-semibold
               transition-all duration-300 ease-in-out hover:py-5 hover:shadow-[0_0_15px_#00A7DE] hover:scale-105 overflow-hidden flex justify-center items-center group"
                >
                  <span className="block transition-opacity duration-300 group-hover:opacity-0">
                    Start 14 Day Free Trial
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center px-6 text-center leading-tight opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Create Your Own Virtual Receptionist in Under 5 Minutes.
                  </span>
                </Link>

                <Link
                  href="https://calendar.app.google/g5bCnhaSJocufjFr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black px-6 py-3 rounded-full font-semibold border-2 border-[#00A7DE]
               transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105 focus:shadow-[0_0_15px_#00A7DE] focus:scale-105 active:shadow-[0_0_15px_#00A7DE] active:scale-105"
                >
                  Book a Demo
                </Link>
              </div>
            </motion.div>

            <div className="flex flex-col items-center justify-center">
              <motion.div
                className="flex justify-center items-center w-full py-10 px-6"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <HeroAnimation>
                  {/* Hero Carousel */}
                </HeroAnimation>
              </motion.div>

              <Link
                href="/industries"
                className="text-black px-6 py-3 rounded-full font-semibold border-2 border-[#00A7DE] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
              >
                Explore Industries
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Add other sections here (Features, Industries, How It Works, Pricing, Testimonials) */}
    </>
  );
}
