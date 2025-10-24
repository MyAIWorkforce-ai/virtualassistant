"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { pageTransition } from "../_components/animations/pagetransitionind1";
import { pageVariants } from "../_components/animations/pagetransitionind1";
import { slideFadeVariants } from "../_components/animations/slidefadeind2";
import { slideFadeTransition } from "../_components/animations/slidefadeind2";
import { slideInLeft } from "../_components/animations/diaginalwipeind3";
import { slideInRight } from "../_components/animations/diaginalwipeind3";
import { slideInUp } from "../_components/animations/diaginalwipeind3";
import { ScrollAnimation, fadeInUp } from "../_components/animations/demo";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import useScrollAnimation from "../_components/animations/scrolleranimation";

// Healthcare and wellness
const services = [
  {
    title: "Physiotherapist",
    description:
      "Your AI manages appointment bookings, reminders, follow-ups, and patient records so you spend more time on treatment.",
    icon: "/images/physiotherapist.png",
  },
  {
    title: "Myotherapist",
    description:
      "Automates client bookings, tracks therapy sessions, and keeps your calendar organized.",
    icon: "/images/myotherapist.png",
  },
  {
    title: "Massage Therapist",
    description:
      "Effortless Bookings for Massage Therapists. Relax your clients while we handle your schedule.",
    icon: "/images/massage.png",
  },
  {
    title: "Personal Trainer",
    description:
      "Power Up Your Training Business Automates client scheduling, payment reminders, and progress updates.",
    icon: "/images/personal.png",
  },
  {
    title: "Psychologist",
    description:
      "Automates client bookings, tracks therapy sessions, and keeps your calendar organized.",
    icon: "/images/psychologist.png",
  },
  {
    title: "Chiropractor",
    description:
      "Precision Scheduling for Chiropractors. Organizes client visits, recalls, and automates reminders.",
    icon: "/images/chiropractor.png",
  },
  {
    title: "Podiatrist",
    description:
      "Your AI manages appointment bookings, reminders, follow-ups, and patient records so you spend more time on treatment.",
    icon: "/images/podiatrist.png",
  },
  {
    title: "Beauty Therapist",
    description:
      "Automates client bookings, tracks therapy sessions, and keeps your calendar organized.",
    icon: "/images/beauty.png",
  },
  {
    title: "Hair Dresser",
    description:
      "Precision Scheduling for Chiropractors. Organizes client visits, recalls, and automates reminders.",
    icon: "/images/hair.png",
  },
  {
    title: "Dentist",
    description:
      "Reservation Management Made Easy.  Manages table bookings, cancellations, and automated waitlists.",
    icon: "/images/dentist.png",
    width: 64,
    height: 64,
  },
];



// ================
//  First section
//  ===============
export default function Home() {
  useScrollAnimation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          Smart Scheduling for Every Industry | AI Booking Solutions
        </title>
        <meta
          name="description"
          content="Discover smart AI scheduling solutions for healthcare, wellness, and more industries. Automate bookings, reminders, and client management with ease."
        />
        <meta
          name="keywords"
          content="AI scheduling, healthcare automation, smart booking, wellness scheduling software, appointment reminders"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Smart Scheduling for Every Industry | AI Booking Solutions"
        />
        <meta
          property="og:description"
          content="Discover AI-powered scheduling for healthcare, wellness, and more. Automate bookings, reminders, and client management with ease."
        />
        <meta property="og:image" content="/images/social-preview.png" />
        <meta
          property="og:url"
          content="https://virtual-assistant-website-aus-n7zq.vercel.app/industries"
        />
        <meta property="og:type" content="website" />
      </Head>
      <motion.main
        className="w-full min-h-screen bg-white"
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {/* Navbar */}
      <Navbar/>

        {/* Hero Section */}
        <motion.section
          className="flex flex-col items-center justify-center text-center px-4 md:px-6 py-20 bg-blue-50 min-h-[calc(100vh-80px)]"
          variants={slideFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={slideFadeTransition}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-black">
              AI Powered Assistants & <br /> Smart Scheduling for
            </span>{" "}
            <span className="text-[#00A7DE]">Every Industry</span>
          </h1>
          <p className="text-base md:text-xl max-w-2xl mb-8 text-[#797A7D]">
            Choose your profession and discover how AI can automate your
            bookings, reminders, and client management.
          </p>

          <Link
            href="/features"
            className="bg-[#00A7DE] text-white px-6 py-3 rounded-lg text-base md:text-lg font-medium transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
          >
            Find Your Solution
          </Link>
        </motion.section>

        {/* ========================
Healthcare Section
========================= */}

        <motion.section
          className="py-16 px-4 md:px-6 bg-white"
          variants={slideFadeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={slideFadeTransition}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#00A7DE] mb-2">
              Healthcare & Wellness
            </h2>
            <div className="h-1 w-24 md:w-36 bg-[#00A7DE] mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Explore AI-powered scheduling solutions designed for healthcare
              and wellness professionals.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-[352px] h-auto bg-white shadow shadow-gray-300 rounded-lg p-6 flex flex-col justify-between transition-transform hover:scale-[1.02] hover:shadow-md"
                variants={slideFadeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ ...slideFadeTransition, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={service.icon}
                    alt={`${service.title} scheduling AI`}
                    width={64}
                    height={64}
                    priority
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-[#797A7D] mt-4">
                  {service.description}
                </p>

                <Link
                  href={`/industries/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, "")}`}
                  className="text-sm text-[#00A7DE] mt-4 hover:underline transition-all duration-200"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* =====================
      professional Services
      =================== */}

        <>
          {/* ==== Section ==== */}
          <section className="w-full bg-white py-16">
            {/* Divider */}
            <div className="w-full h-[2px] bg-gray-200 my-12"></div>
            <div className="max-w-6xl mx-auto px-4 text-center">
              {/* ==== Heading ==== */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#00A7DE] mb-2">
                Professional Services
              </h1>
              <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-12"></div>
              {/* ==== Services Grid ==== */}
              <div className="flex flex-wrap justify-center gap-9">
                {/* Accountant */}
                <motion.div
                  className="w-full sm:w-72 md:w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/accountant.png"
                      alt="Accountant AI scheduling icon"
                      width={64}
                      height={64}
                      priority
                    />
                    <h2 className="text-lg text-black font-semibold">
                      Accountant
                    </h2>
                  </div>
                  <p className="text-[#797A7D] text-sm mt-3">
                   Simplify and automates bookkeeping, generates financial reports, and streamlines client invoicing.
                  </p>
                  <a
                    href="/services/accountant"
                    className="text-[#00A7DE] text-sm font-medium mt-3 inline-block hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>

                {/* Lawyer */}
                <motion.div
                  className="w-full sm:w-72 md:w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.3 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/lawyer.png"
                      alt="Lawyer AI scheduling icon"
                      width={64}
                      height={64}
                      priority
                    />
                    <h2 className="text-lg text-black font-semibold">Lawyer</h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                   Organizes case files, legal practices, tracks deadlines, and automates client communications.
                  </p>
                  <a
                    href="/services/lawyer"
                    className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>

                {/* Consultant */}
                <motion.div
                  className="w-full sm:w-72 md:w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/container.png"
                      alt="Consultant AI scheduling icon"
                      width={64}
                      height={64}
                      priority
                    />
                    <h2 className="text-lg text-black font-semibold">
                      Consultant
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Power Up Your Training Business. Automates client
                    scheduling, payment reminders, and progress updates.
                  </p>
                  <a
                    href="/services/consultant"
                    className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>

                {/* Real Estate Agent */}
                <motion.div
                  className="w-full sm:w-72 md:w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
                  variants={slideInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/estate.png"
                      alt="Real Estate Agent AI scheduling icon"
                      width={64}
                      height={64}
                      priority
                    />
                    <h2 className="text-lg text-black font-semibold">
                      Real Estate Agent
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    From Listings to Closings, Streamlines property management, client communication, and sales tracking.
                  </p>
                  <a
                    href="/services/real-estate-agent"
                    className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        </>
        {/* =====================
      Trades and Services
      =================== */}
        <>
          <section className="w-full bg-white py-16">
            {/* Divider */}
            <div className="w-full h-[2px] bg-gray-200 my-12"></div>

            <div className="max-w-6xl mx-auto px-4 text-center">
              {/* ==== Main Heading (SEO H1) ==== */}
              <h1 className="text-4xl md:text-5xl font-bold text-[#00A7DE] mb-2">
                Trades & Services
              </h1>
              <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-12"></div>

              {/* ==== Services Grid ==== */}
              <div className="flex flex-wrap justify-center gap-9">
                {/* Mechanic */}
                <motion.div
                  className="w-full sm:w-72 md:w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/mechanic.png"
                      alt="Professional mechanic service icon"
                      width={64}
                      height={64}
                      priority
                    />
                    <h2 className="text-lg text-black font-semibold">
                      Mechanic
                    </h2>
                  </div>
                  <p className="text-[#797A7D] text-sm mt-3">
                    Service Scheduling Simplified – Organizes repair appointments, reschedules with ease, and manages waitlists for busy garages.
                  </p>
                  <a
                    href="/services/mechanic"
                    className="text-[#00A7DE] text-sm font-medium mt-3 inline-block hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>

                {/* Plumber */}
                <motion.div
                  className="w-full sm:w-72 md:w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <div className="flex text-black items-center gap-3">
                    <Image
                      src="/images/plumver.png"
                      alt="Certified plumber service icon"
                      width={64}
                      height={64}
                      priority
                    />
                    <h2 className="text-lg font-semibold">Plumber</h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                   Schedules service calls, manages emergency repairs, and tracks work orders with ease.
                  </p>
                  <a
                    href="/services/plumber"
                    className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>

                {/* Window Cleaning */}
                <motion.div
                  className="w-full sm:w-72 md:w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <div className="flex text-black items-center gap-3">
                    <Image
                      src="/images/window.png"
                      alt="Window cleaning service icon"
                      width={64}
                      height={64}
                      priority
                    />
                    <h2 className="text-lg font-semibold">Window Cleaning</h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Manages cleaning appointments, handles rescheduling, and tracks repeat clients with ease.
                  </p>
                  <a
                    href="/services/window-cleaning"
                    className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>

                {/* Electrician */}
                <motion.div
                  className="w-full sm:w-72 md:w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
                  variants={slideInUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: false }}
                >
                  <div className="flex text-black items-center gap-3">
                    <Image
                      src="/images/Electrician.png"
                      alt="Licensed electrician service icon"
                      width={64}
                      height={64}
                      priority
                    />
                    <h2 className="text-lg font-semibold">Electrician</h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Assigns electrical service calls, tracks technician availability, and reduces missed appointments.
                  </p>
                  <a
                    href="/services/electrician"
                    className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        </>
        {/* =====================
      Hospitality & others
      =================== */}

        <section className="w-full bg-white py-16">
          {/* Divider */}
          <div className="w-full h-[2px] bg-gray-200 my-12"></div>

          <div className="max-w-6xl mx-auto px-4 text-center">
            {/* Main Heading (H1 for SEO) */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#00A7DE] mb-2">
              Hospitality & Professional Services
            </h1>
            <div className="w-20 h-1 mt-5 bg-[#098DC9] mx-auto mb-12"></div>
            {/* Services Grid */}
            <div className="flex flex-wrap justify-center gap-9">
              {/* Accountant / Restaurant Reservation */}
              <motion.div
                className="max-w-sm w-full bg-white shadow-md rounded-lg p-6 text-left transition-transform duration-300 hover:scale-[1.02]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={0}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/resturant.png"
                    alt="Restaurant reservation management system"
                    width={64}
                    height={64}
                    priority
                  />
                  <h2 className="text-lg text-black font-semibold">
                    Restaurant Reservation
                  </h2>
                </div>
                <p className="text-[#797A7D] text-sm mt-3">
                 Reservation Management Made Easy.<br/>  Manages table bookings, cancellations, and automated waitlists.
                </p>
                <a
                  href="/restaurant-reservation"
                  className="text-[#00A7DE] text-sm font-medium mt-3 inline-block hover:underline"
                >
                  Learn More
                </a>
              </motion.div>

              {/* Lawyer Automation */}
              <motion.div
                className="max-w-sm w-full bg-white shadow-md rounded-lg p-6 text-left transition-transform duration-300 hover:scale-[1.02]"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={1}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/others.png"
                    alt="Lawyer client scheduling automation"
                    width={64}
                    height={64}
                    priority
                  />
                  <h2 className="text-lg text-black font-semibold">Lawyer</h2>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Power Up Your Training Business Automates client scheduling, payment reminders, and progress updates.
                </p>
                <a
                  href="/lawyer-automation"
                  className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </div>
        </section>
        {/* =====================
               Demo
      =================== */}
        <section className="w-full bg-gradient-to-b from-[#0097DA] via-[#00BAF2] to-[#8FD8F8] py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            {/* Heading */}
            <ScrollAnimation variant={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
            </ScrollAnimation>

            {/* Subheading */}
            <ScrollAnimation variant={fadeInUp} threshold={0.1}>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of businesses already using our AI receptionist
              </p>
            </ScrollAnimation>

            {/* Button with animation */}
            <ScrollAnimation variant={fadeInUp} threshold={0.1}>
              <motion.a
                href="#"
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-sky-600 font-medium shadow-md overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Slider overlay */}
                <span className="absolute inset-0 bg-sky-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

                {/* Blink / Glow Animation */}
                <motion.span
                  className="absolute inset-0 rounded-lg bg-sky-300 opacity-20"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                ></motion.span>

                {/* Button content */}
                <span className="relative flex items-center gap-2 z-10">
                  <Image
                    src="/images/calender.png"
                    alt="Calendar Icon"
                    width={20}
                    height={20}
                    priority
                  />
                  Book a Demo
                </span>
              </motion.a>
            </ScrollAnimation>
          </div>
        </section>
        {/* =====================
            FOOTER SECTION
            =================== */}
       ,<Footer/>
      </motion.main>
    </>
  );
}
