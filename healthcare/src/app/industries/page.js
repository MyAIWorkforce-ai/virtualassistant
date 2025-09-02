"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { pageTransition } from "../_components/animations/pagetransitionind1";
import { pageVariants } from "../_components/animations/pagetransitionind1";
import { slideFadeVariants } from "../_components/animations/slidefadeind2";
import { slideFadeTransition } from "../_components/animations/slidefadeind2";
import { slideInLeft } from "../_components/animations/diaginalwipeind3";
import { slideInRight } from "../_components/animations/diaginalwipeind3";
import { slideInUp } from "../_components/animations/diaginalwipeind3";
import { hoverLift } from "../_components/animations/hoverliftind4";
import { fadeSlideUp } from "../_components/animations/hoverliftind4";
import { ScrollAnimation, fadeInUp } from "../_components/animations/demo";
import { slideUp } from "../_components/animations/footer";
import { slideUpChild } from "../_components/animations/footer";
import { staggerContainer } from "../_components/animations/footer";

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
  return (
    <motion.main
      className="w-full min-h-screen  bg-white"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageVariants} // ✅ Only page-level
      transition={pageTransition}
    >
      {/* Navbar */}
      <header className="w-full bg-white shadow-lg">
        <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo1.png"
              alt="Logo"
              width={177.01}
              height={40}
              className="pl-4"
            />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center space-x-8 text-sm font-medium ">
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

              {/* Dropdown list */}
              <li className="relative group">
                {/* Parent Link */}
                <Link
                  href="/industries"
                  className="text-[#00A7DE] hover:text-[#00A7DE]"
                >
                  Industries
                </Link>

                {/* Dropdown */}
                <ul
                  className="
      absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-300 ease-in-out delay-200
    "
                >
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
                      personal Trainer
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
                      psychology
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
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-[#00A7DE]">
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
                <Link href="/login" className="text-black hover:text-[#00A7DE]">
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="bg-[#00A7DE] text-white px-5 py-2 rounded-full font-semibold 
                    transition-all duration-300 ease-in-out
                  hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center text-center px-6 py-20 bg-blue-50 min-h-[calc(100vh-80px)]"
        variants={slideFadeVariants}
        initial="hidden"
        whileInView="visible" // ✅ triggers only when in view
        viewport={{ once: false, amount: 0.2 }}
        transition={slideFadeTransition}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-black">
            Smart Scheduling <br /> for
          </span>{" "}
          <span className="text-[#00A7DE]"> Every Industry</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-400">
          Choose your profession and discover how AI can automate your <br />{" "}
          bookings, reminders, and client management
        </p>

        {/* Button */}
        <button
          className="bg-[#00A7DE] text-white px-6 py-3 rounded-lg text-lg font-medium 
          transition-all duration-300 ease-in-out
          hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
        >
          Find Your Solution
        </button>
      </motion.section>

      {/* Healthcare Section */}

      <motion.section
        className="py-16 px-6 bg-white"
        variants={slideFadeVariants}
        initial="hidden"
        whileInView="visible" // ✅ triggers separately when scrolled
        viewport={{ once: false, amount: 0.2 }}
        transition={slideFadeTransition}
      >
        {/* Section Title with Bar */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#00A7DE] mb-2">
            Healthcare & Wellness
          </h2>
          <div className="h-1 w-36  bg-[#00A7DE] mx-auto mb-6 rounded-full" />
        </div>
        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-[352px] h-[218px] bg-[#FFFFFF] shadow shadow-gray-300 rounded-lg p-4 flex flex-col justify-between transition-transform hover:scale-[1.02] hover:shadow-md"
              variants={slideFadeVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ ...slideFadeTransition, delay: index * 0.2 }}
            >
              {/* Icon + Title Row */}
              <div className="flex items-center gap-3">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-[#797A7D] mt-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href="#"
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

      <section className="w-full bg-white py-16">
        {/* Divider */}
        <div className="w-full h-[2px] bg-gray-200 my-12"></div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* ==== Heading ==== */}
          <h2 className="text-5xl font-bold text-[#00A7DE] mb-2">
            Professional Services
          </h2>
          <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-12"></div>

          {/* ==== Services Flex ==== */}
          <div className="flex flex-wrap justify-center gap-9">
            {/* Mechanic */}
            <motion.div
              className="w-80 bg-white shadow-md rounded-lg p-6 gap-5 text-left hover:shadow-lg transition"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/mechanic.png"
                  alt="Accountant"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg text-black font-semibold">Accountant</h3>
              </div>
              <p className="text-[#797A7D] text-sm mt-3">
                Smarter Scheduling for Consultants. Books client calls, manages
                packages, and tracks deliverables.
              </p>
              <a
                href="#"
                className="text-[#00A7DE] text-sm font-medium mt-3 inline-block hover:underline"
              >
                Learn More
              </a>
            </motion.div>

            {/* Plumber */}
            <motion.div
              className="w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/plumver.png"
                  alt="Lawyer"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg text-black font-semibold">Lawyer</h3>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Smarter Scheduling for Consultants. Books client calls, manages
                packages, and tracks deliverables.
              </p>
              <a
                href="#"
                className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
              >
                Learn More
              </a>
            </motion.div>

            {/* Window Cleaning */}
            <motion.div
              className="w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/window.png"
                  alt="Consultant"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg text-black font-semibold">Consultant</h3>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Power Up Your Training Business Automates client scheduling,
                payment reminders, and progress updates.
              </p>
              <a
                href="#"
                className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
              >
                Learn More
              </a>
            </motion.div>

            {/* Electrician */}
            <motion.div
              className="w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/electrician.png"
                  alt="Real Estate Agent"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg text-black font-semibold">
                  Real Estate Agent
                </h3>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Smarter Scheduling for Consultants. Books client calls, manages
                packages, and tracks deliverables.
              </p>
              <a
                href="#"
                className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================
      Trades and Services
      =================== */}
      <section className="w-full bg-white py-16">
        {/* Divider */}
        <div className="w-full h-[2px] bg-gray-200 my-12"></div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* ==== Heading ==== */}
          <h2 className="text-5xl font-bold text-[#00A7DE] mb-2">
            Trades & Services
          </h2>
          <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-12"></div>

          {/* ==== Services Flex ==== */}
          <div className="flex flex-wrap justify-center gap-9">
            {/* Mechanic */}
            <motion.div
              className="w-80 bg-white shadow-md rounded-lg p-6 gap-5 text-left hover:shadow-lg transition"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/mechanic.png"
                  alt="Accountant"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg text-black font-semibold">Mechanic</h3>
              </div>
              <p className="text-[#797A7D] text-sm mt-3">
                Reservation Management Made Easy. Manages table bookings,
                cancellations, and automated waitlists.
              </p>
              <a
                href="#"
                className="text-[#00A7DE] text-sm font-medium mt-3 inline-block hover:underline"
              >
                Learn More
              </a>
            </motion.div>

            {/* Plumber */}
            <motion.div
              className="w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <div className="flex text-black  items-center gap-3">
                <Image
                  src="/images/plumver.png"
                  alt="Lawyer"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg font-semibold">Plumber</h3>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Power Up Your Training Business Automates client scheduling,
                payment reminders, and progress updates.
              </p>
              <a
                href="#"
                className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
              >
                Learn More
              </a>
            </motion.div>

            {/* Window Cleaning */}
            <motion.div
              className="w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <div className="flex text-black  items-center gap-3">
                <Image
                  src="/images/window.png"
                  alt="Consultant"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg font-semibold">Window Cleaning</h3>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Smarter Scheduling for Consultants. Books client calls, manages
                packages, and tracks deliverables.
              </p>
              <a
                href="#"
                className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
              >
                Learn More
              </a>
            </motion.div>

            {/* Electrician */}
            <motion.div
              className="w-80 bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition"
              variants={slideInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <div className="flex text-black  items-center gap-3">
                <Image
                  src="/images/electrician.png"
                  alt="Real Estate Agent"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg font-semibold">Electrician</h3>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Reservation Management Made Easy. Manages table bookings,
                cancellations, and automated waitlists.
              </p>
              <a
                href="#"
                className="text-sky-500 text-sm font-medium mt-3 inline-block hover:underline"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Divider */}

      {/* =====================
      Hospitality & others
      =================== */}

      <section className="w-full bg-white py-16">
        {/* Divider */}
        <div className="w-full h-[2px] bg-gray-200 my-12"></div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* ==== Heading ==== */}
          <h2 className="text-5xl ht-3 font-bold text-[#00A7DE] mb-2">
            Hospitality & Others
          </h2>
          <div className="w-20 h-1 mt-5 bg-[#098DC9] mx-auto mb-15"></div>

          {/* ==== Services Grid ==== */}
          <div className="flex flex-wrap justify-center gap-9">
            {/* Accountant */}
            <motion.div
              className={`max-w-sm w-full bg-white shadow-md rounded-lg p-6 text-left ${hoverLift}`}
              variants={fadeSlideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={0}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/resturant.png"
                  alt="Accountant"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg text-black font-semibold">Accountant</h3>
              </div>
              <p className="text-[#797A7D] text-sm mt-3">
                Reservation Management Made Easy.
                <br /> Manages table bookings, cancellations, and <br />{" "}
                automated waitlists.
              </p>
              <a
                href="#"
                className="text-[#00A7DE] text-sm font-medium mt-3 inline-block hover:underline"
              >
                Learn More
              </a>
            </motion.div>

            {/* Lawyer */}
            <motion.div
              className={`max-w-sm w-full bg-white shadow-md rounded-lg p-6 text-left ${hoverLift}`}
              variants={fadeSlideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              custom={1}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/images/others.png"
                  alt="Lawyer"
                  width={64}
                  height={64}
                />
                <h3 className="text-lg text-black font-semibold">Lawyer</h3>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Power Up Your Training Business Automates client scheduling,
                payment reminders, and progress updates.
              </p>
              <a
                href="#"
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

    // Healthcare & Wellness
  );
}
