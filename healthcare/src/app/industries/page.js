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
import { slideUp } from "../_components/animations/footer";
import { slideUpChild } from "../_components/animations/footer";
import { staggerContainer } from "../_components/animations/footer";
import { Menu, X } from "lucide-react"; // hamburger & close icons

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

// professional Services
const professionalServicesData = [
  {
    title: "Accountant",
    description:
      "Smarter Scheduling for Consultants. Books client calls, manages packages, and tracks deliverables.",
    iconSrc: "/icons/accountant.png",
  },
  {
    title: "Lawyer",
    description:
      "Smarter Scheduling for Consultants. Books client calls, manages packages, and tracks deliverables.",
    iconSrc: "/icons/lawyer.png",
  },
  {
    title: "Consultant",
    description:
      "Power Up Your Training Business. Automates client scheduling, reminders, and progress updates.",
    iconSrc: "/icons/consultant.png",
  },
  {
    title: "Real Estate Agent",
    description:
      "Smarter Scheduling for Consultants. Books client calls, manages packages, and tracks deliverables.",
    iconSrc: "/icons/real-estate.png",
  },
];

// ================
//  First section
//  ===============
export default function Home() {
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
          content="https://www.yourdomain.com/industries"
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
        <header className="w-full bg-white shadow-lg">
          <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-4 md:px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo1.png"
                alt="Company Logo - Smart Scheduling AI"
                width={177}
                height={40}
                className="pl-2 md:pl-4"
                priority
              />
            </div>
            {/* Navigation */}
            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
                <li>
                  <Link href="/" className="text-black hover:text-[#00A7DE]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    Features
                  </Link>
                </li>
                <li className="relative group">
                  <Link href="/industries" className="text-[#00A7DE]">
                    Industries
                  </Link>
                  {/* Dropdown */}
                  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100]">
                    <li>
                      <Link
                        href="/industries/Physotherapist"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Physiotherapist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/myotherapist"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Myotherapist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/personaltrainer"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Personal Trainer
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/massagetherapist"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Massage Therapist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/psychology"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Psychology
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/chiropractor"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Chiropractor
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="bg-[#00A7DE] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>
            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {/* Mobile Sidebar */}
          <div
            className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                width={150}
                height={40}
              />
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col space-y-4 p-6 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/industries"
                  className="text-black hover:text-[#00A7DE]"
                >
                  Industries
                </Link>
                {/* Dropdown */}
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100]">
                  <li>
                    <Link
                      href="/industries/Physotherapist"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Physiotherapist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/myotherapist"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Myotherapist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/personaltrainer"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Personal Trainer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/massagetherapist"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Massage Therapist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/psychology"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Psychology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/chiropractor"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Chiropractor
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="bg-[#00A7DE] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105 w-full sm:w-auto text-center sm:text-left"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </header>

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
              AI Powered Assistants  & <br /> Smart Scheduling for
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
          viewport={{ once: false, amount: 0.2 }}
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
                transition={{ ...slideFadeTransition, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={service.icon}
                    alt={`${service.title} scheduling AI`}
                    width={64}
                    height={64}
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
                      src="/images/mechanic.png"
                      alt="Accountant AI scheduling icon"
                      width={64}
                      height={64}
                    />
                    <h2 className="text-lg text-black font-semibold">
                      Accountant
                    </h2>
                  </div>
                  <p className="text-[#797A7D] text-sm mt-3">
                    Smarter Scheduling for Consultants. Books client calls,
                    manages packages, and tracks deliverables.
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
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/plumver.png"
                      alt="Lawyer AI scheduling icon"
                      width={64}
                      height={64}
                    />
                    <h2 className="text-lg text-black font-semibold">Lawyer</h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Smarter Scheduling for Consultants. Books client calls,
                    manages packages, and tracks deliverables.
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
                      src="/images/window.png"
                      alt="Consultant AI scheduling icon"
                      width={64}
                      height={64}
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
                    />
                    <h2 className="text-lg text-black font-semibold">
                      Real Estate Agent
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Smarter Scheduling for Consultants. Books client calls,
                    manages packages, and tracks deliverables.
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
                    />
                    <h2 className="text-lg text-black font-semibold">
                      Mechanic
                    </h2>
                  </div>
                  <p className="text-[#797A7D] text-sm mt-3">
                    Reliable auto repair and maintenance. Book mechanic services
                    with easy scheduling, cancellations, and reminders.
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
                    />
                    <h2 className="text-lg font-semibold">Plumber</h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Trusted plumbing solutions for leaks, repairs, and
                    installations. Get fast service with automated booking.
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
                    />
                    <h2 className="text-lg font-semibold">Window Cleaning</h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Affordable and professional window cleaning services. Book
                    appointments and enjoy sparkling results.
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
                    />
                    <h2 className="text-lg font-semibold">Electrician</h2>
                  </div>
                  <p className="text-gray-600 text-sm mt-3">
                    Licensed electrician for installations, repairs, and safety
                    inspections. Easy booking and reliable support.
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
                  />
                  <h2 className="text-lg text-black font-semibold">
                    Restaurant Reservation
                  </h2>
                </div>
                <p className="text-[#797A7D] text-sm mt-3">
                  Simplify reservation management with automated bookings,
                  cancellations, and waitlists. Improve customer experience with
                  seamless table scheduling.
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
                  />
                  <h2 className="text-lg text-black font-semibold">Lawyer</h2>
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  Automate legal workflows with client scheduling, payment
                  reminders, and progress updates. Streamline case management
                  while saving time.
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
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={slideUp} // Footer slides up as a whole
          className="bg-[#FFFFFF] text-black py-10"
        >
          <motion.div
            className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8"
            variants={staggerContainer} // Stagger child animation for columns
          >
            {/* Logo & Info */}
            <motion.div className="col-span-1" variants={slideUpChild}>
              <Image
                src="/images/logo1.png"
                alt="Virtual Assistant Logo"
                width={180}
                height={60}
                className="mb-4"
              />
              <p className="text-sm mb-4 text-gray-500">
                Transforming industries with intelligent virtual assistants.
              </p>

              <div className="flex space-x-4">
                <Link href="#">
                  <Image
                    src="/images/twitter.png"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="transition duration-300 hover:brightness-0 hover:invert hover:hue-rotate-180"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/linkedln.png"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </motion.div>

            {/* Pages */}
            <motion.div variants={slideUpChild}>
              <h3 className="font-semibold mb-3">Pages</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Home",
                  "About",
                  "Industries",
                  "Pricing",
                  "About",
                  "Contact Us",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-[#00A7DE] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries col 1 */}
            <motion.div variants={slideUpChild}>
              <h3 className="font-semibold mb-3">Industries</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Physiotherapist",
                  "Myotherapist",
                  "Massage Therapist",
                  "Personal Trainer",
                  "Psychologist",
                  "Chiropractor",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-[#00A7DE] 0 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries col 2 */}
            <motion.div variants={slideUpChild}>
              <h3 className="font-semibold mb-3">Industries</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Podiatrist",
                  "Beauty Therapist",
                  "Hairdresser",
                  "Dentist",
                  "Accountant",
                  "Lawyer",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-[#00A7DE] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries col 3 */}
            <motion.div variants={slideUpChild}>
              <h3 className="font-semibold mb-3">Industries</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  "Consultant",
                  "Real Estate Agent",
                  "Mechanic",
                  "Plumber",
                  "Electrician",
                  "Window Cleaning",
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="hover:text-[#00A7DE] 0 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Line */}
          <motion.div
            variants={slideUpChild}
            className="border-t border-gray-300 mt-8 pt-4 text-center text-sm"
          >
            © 2025 VirtualAssistant. All rights reserved.
          </motion.div>
        </motion.footer>
      </motion.main>
    </>
    // Healthcare & Wellness
  );
}
