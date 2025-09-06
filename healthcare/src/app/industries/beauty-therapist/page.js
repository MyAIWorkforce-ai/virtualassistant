"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import { pageFadeIn } from "../../_components/animations/physo3";
import { staggeredList } from "../../_components/animations/physo3";
import { listItemFade } from "../../_components/animations/physo3";
import { slideUp } from "../../_components/animations/footer";
import { slideUpChild } from "../../_components/animations/footer";
import { staggerContainer } from "../../_components/animations/footer";
import { fadeUp } from "../../_components/animations/variantsphyso";
import { staggerFadeUp } from "../../_components/animations/variantsphyso";
import { fadeInItem } from "../../_components/animations/variantsphyso";
import { fadeInUp } from "../../_components/animations/physo5";
import { stagger } from "../../_components/animations/physo5";
import { cardMotion } from "../../_components/animations/physo6";
import { container } from "../../_components/animations/physo6";
import { staggerParent } from "../../_components/animations/physo7";
import { staggerChild } from "../../_components/animations/physo7";
import { formVariant } from "../../_components/animations/physo7";
import { containerVariants } from "../../_components/animations/physo77";
import { leftVariant } from "../../_components/animations/physo77";
import { rightVariant } from "../../_components/animations/physo77";
import useScrollAnimation from "../../_components/animations/scrolleranimation";
export default function Home() {
  useScrollAnimation();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [countryCode, setCountryCode] = useState("+1");

  // Email validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const valid = /\S+@\S+\.\S+/.test(value); // simple regex
    setIsEmailValid(valid || value === "");
  };

  // Phone validation (numbers 7–15 digits)
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    const valid = /^[0-9]{7,15}$/.test(value);
    setIsPhoneValid(valid || value === "");
  };
  return (
    <>
      {/* SEO Head */}
      <Head>
        {/* Basic SEO */}
        <title>AI Virtual Assistant for Physiotherapists | YourBrand</title>
        <meta
          name="description"
          content="AI-powered virtual assistant for physiotherapists. Automate bookings, reminders, and patient records to save time and improve care."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Social Sharing) */}
        <meta
          property="og:title"
          content="AI Virtual Assistant for Physiotherapists | YourBrand"
        />
        <meta
          property="og:description"
          content="Automate bookings, reminders, and patient records with an AI-powered assistant built for physiotherapists."
        />
        <meta property="og:image" content="/images/social-preview.png" />
        <meta
          property="og:url"
          content="https://virtual-assistant-website-aus-n7zq.vercel.app/industries/Physotherapist"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full bg-white shadow-sm">
          <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-4 md:px-6 z-[100]">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo1.png"
                alt="YourBrand Logo"
                width={177}
                height={40}
                className="pl-4"
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
                    <li>
                      <Link
                        href="/industries/podiatrist"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Podiatrist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/beauty-therapist"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Beauty Therapist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/hairdresser"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Hair Dresser
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
                   <li>
                    <Link
                      href="/industries/podiatrist"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Podiatrist
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

        {/* Main Banner Section */}
        <main>
          <section className="relative w-full bg-[url('/images/bg.png')] bg-cover bg-center overflow-visible">
            <div className="absolute inset-0 backdrop-blur-sm"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 py-16 border-b border-white">
              {/* Text on Left */}
              <motion.div
                className="text-white max-w-full md:max-w-xl pl-5 mb-10 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                viewport={{ once: false }}
              >
                <motion.div
                  className="inline-block bg-white text-[#00A7DE] font-medium px-7 py-2 rounded-full mb-4 shadow"
                  variants={fadeUp}
                >
                  Skin & Beauty Care
                </motion.div>

                <motion.h1
                  className="text-4xl font-bold mb-4"
                  variants={fadeUp}
                >
                  AI for Beauty Therapist
                </motion.h1>

                <motion.p className="text-lg mb-6" variants={fadeUp}>
                 Your virtual assistant streamlines beauty care by managing appointments, recording treatment notes, sending skincare or wellness reminders, and follow-ups.
                </motion.p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-[#ffffff] text-[#00A7DE] font-medium py-2 px-4 rounded flex items-center gap-2 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] group text-sm md:text-base"
                >
                  <span className="flex items-center gap-2">
                    Get Started
                    <Image
                      src="/images/svg.png"
                      alt="Start Icon"
                      width={12} // h-3 w-3 = 0.75rem ≈ 12px
                      height={12}
                    />
                  </span>
                </motion.button>
              </motion.div>

              {/* Image on Right */}
              <motion.div
                className="flex-shrink-0 flex justify-center md:justify-end items-end h-full overflow-hidden mt-8 md:mt-0"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                viewport={{ once: false }}
              >
                <Image
                  src="/images/beauty therapist.png"
                  alt="Beauty Therapist"
                  width={650}
                  height={650}
                  className="w-[90%] max-w-[650px] h-auto object-cover md:pl-19 md:-mb-25 md:pr-30"
                  style={{ objectPosition: "right center" }}
                />
              </motion.div>
            </div>
          </section>

          {/* Grid Section */}
          <section className="relative w-full h-32 -mt-16 md:h-40 bg-white">
            <div className="absolute inset-0 grid grid-cols-12 gap-3 opacity-10">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-l border-white/20 h-full"></div>
              ))}
            </div>
          </section>

          {/* Stats Section (Overlay Card) */}
          <section className="relative z-20 -mt-12 md:-mt-20 flex justify-center px-4 md:px-8">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl p-6 shadow-xl bg-white/95 backdrop-blur-md hover:shadow-2xl transition max-w-6xl w-full overflow-hidden"
              initial="hidden"
              variants={staggerFadeUp}
              whileInView="show"
              viewport={{ once: false }}
            >
              {/* Stat 1 */}
              <motion.div
                className="flex flex-col items-center  text-center p-4 md:p-6"
                variants={fadeInItem}
              >
                <Image
                  src="/images/clock.png"
                  alt="Clock icon showing 30% reduction"
                  width={28}
                  height={28}
                  className="mb-2"
                  priority
                />
                <h3 className="text-[#000000] font-bold text-2xl">30%</h3>
                <p className="text-[#797A7D] text-sm">
                  Fewer missed appointments with<br/> automated reminders.
                </p>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                className="flex flex-col items-center mt-2 text-center p-4 md:p-6"
                variants={fadeInItem}
              >
                <Image
                  src="/images/Frame.png"
                  alt="Patient satisfaction icon"
                  width={28}
                  height={28}
                  priority
                  className="mb-2"
                />
                <h3 className="text-[#000000] font-bold text-2xl">98%</h3>
                <p className="text-[#797A7D] text-sm">
                  Reduced hours spent on scheduling<br/> and note-taking.
                </p>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                className="flex flex-col items-center mt-2 text-center p-4 md:p-6"
                variants={fadeInItem}
              >
                <Image
                  src="/images/wave.png"
                  alt="Patient retention boost icon"
                  width={28}
                  height={28}
                  priority
                  className="mb-2"
                />
                <h3 className="text-[#000000] font-bold text-2xl">25%</h3>
                <p className="text-[#797A7D] text-sm">
                  Higher client adherence to post-<br/>treatment care and routines.
                </p>
              </motion.div>
            </motion.div>
          </section>
        </main>

        {/* =======================
         Key features
============================= */}
        <motion.section
          className="py-12 px-4 mt-15 md:px-8 lg:px-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          aria-labelledby="key-benefits-heading"
        >
          {/* Heading */}
          <motion.h2
            id="key-benefits-heading"
            className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 md:mb-8 text-black text-center"
            variants={fadeUp}
          >
            Key Benefits
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-xs sm:text-sm md:text-base font-normal -mt-2 md:-mt-6 mb-8 text-[#797A7D] text-center"
            variants={fadeUp}
          >
           Enhance your podiatry practice with intelligent automation that reduces<br/> admin work, streamlines patient care, and improves efficiency.
          </motion.p>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.article
              className="bg-gradient-to-br from-[#FAF5FF] to-[#F3E8FF] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="mb-4">
                <Image
                  src="/images/automated-scheduling.png"
                  alt="Automated Scheduling"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Automated Scheduling
              </h3>
              <p className="text-xs sm:text-sm text-[#797A7D] leading-relaxed">
Automatically manage appointments,<br/> follow-ups, and reminders without <br/>manual intervention.              </p>
            </motion.article>

            {/* Card 2 */}
            <motion.article
              className="bg-gradient-to-br from-[#ECFEFF] to-[#CFFAFE] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="mb-4">
                <Image
                  src="/images/client retention.png"
                  alt="Client Retention"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Improved Client Retention
              </h3>
              <p className="text-xs sm:text-sm text-[#797A7D] leading-relaxed">
Smart reminders and personalized <br/>care keep clients coming back for more treatments.              </p>
            </motion.article>

            {/* Card 3 */}
            <motion.article
              className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="mb-4">
                <Image
                  src="/images/treatment record.png"
                  alt="Treatment Record"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Centralized Treatment Records
              </h3>
              <p className="text-xs sm:text-sm text-[#797A7D] leading-relaxed">
                Easily access client history,<br/> preferences, and progress in one <br/>organized system.
              </p>
            </motion.article>

            {/* Card 4 */}
            <motion.article
              className="bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="mb-4">
                <Image
                  src="/images/care quality.png"
                  alt="Care Quality"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Enhanced Care Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#797A7D] leading-relaxed">
                Tailored post-treatment guidance<br/> ensures better results and client<br/> satisfaction.
              </p>
            </motion.article>

            {/* Card 5 */}
            <motion.article
              className="bg-gradient-to-br from-[#FFF1F2] to-[#FFE4E6] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="mb-4">
                <Image
                  src="/images/stress.png"
                  alt="stress"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Reduce Stress
              </h3>
              <p className="text-xs sm:text-sm text-[#797A7D] leading-relaxed">
Instant confirmations reduce back-<br/> and-forth communication with<br/> clients.              </p>
            </motion.article>
          </motion.div>
        </motion.section>

        {/* ======================
    Primary uses
======================     */}

        <div className="w-full h-[2px] bg-gray-200 my-12"></div>

        <div className="max-w-6xl mx-auto px-4 text-center"></div>

        <motion.section
          className="px-4 sm:px-6 md:px-8 py-12 max-w-6xl mx-auto"
          variants={pageFadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          aria-labelledby="primary-uses-heading"
        >
          {/* Centered Heading */}
          <motion.h2
            id="primary-uses-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#00A7DE] mb-12 -mt-12 sm:-mt-15"
            variants={listItemFade}
          >
            Primary Uses
          </motion.h2>

          {/* Two-column layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 p-6 sm:p-10 md:p-20 border rounded-lg transition-shadow max-w-5xl mx-auto"
            variants={staggeredList}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Item 1 */}
              <motion.article
                className="flex items-start gap-3 sm:gap-4"
                variants={listItemFade}
              >
                <Image
                  src="/images/skin care.png"
                  alt="Skin Care"
                  width={40}
                  height={40}
                  priority
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Skincare & Beauty Treatments
                  </h3>
                  <p className="text-xs sm:text-sm text-[#797A7D]">
                  Manage facials, hair treatments, manicures, pedicures,<br/> and wellness services with automated scheduling.
                  </p>
                </div>
              </motion.article>

              {/* Item 2 */}
              <motion.article
                className="flex items-start gap-3 sm:gap-4"
                variants={listItemFade}
              >
                <Image
                  src="/images/regular.png"
                  alt="Regular"
                  width={40}
                  height={40}
                  priority
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Regular Maintenance
                  </h3>
                  <p className="text-xs sm:text-sm text-[#797A7D]">
                    Encourage recurring visits for glowing skin, healthy hair,<br/> and overall beauty wellness through smart reminders.
                  </p>
                </div>
              </motion.article>

              {/* Item 3 */}
              <motion.article
                className="flex items-start gap-3 sm:gap-4"
                variants={listItemFade}
              >
                <Image
                  src="/images/wellness support.png"
                  alt="Wellness"
                  width={40}
                  height={40}
                  priority
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                   Client Wellness Support
                  </h3>
                  <p className="text-xs sm:text-sm text-[#797A7D]">
                   Provide guidance on at-home care, product usage, and<br/> personalized beauty routines for optimal results.
                  </p>
                </div>
              </motion.article>
            </div>

            {/* Right Column */}
            <div className="space-y-6 sm:space-y-8">
              {/* Item 4 */}
              <motion.article
                className="flex items-start gap-3 sm:gap-4"
                variants={listItemFade}
              >
                <Image
                  src="/images/tracking.png"
                  alt="Patient Progress Tracking"
                  width={40}
                  height={40}
                  priority
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Patient Progress Tracking
                  </h3>
                  <p className="text-xs sm:text-sm text-[#797A7D]">
                   Log client preferences, treatment history, results, and <br/>product reactions for personalized care.
                  </p>
                </div>
              </motion.article>

              {/* Item 5 */}
              <motion.article
                className="flex items-start gap-3 sm:gap-4"
                variants={listItemFade}
              >
                <Image
                  src="/images/tracking (2).png"
                  alt="AI Assistant"
                  width={40}
                  height={40}
                  priority
                />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    AI Assistant
                  </h3>
                  <p className="text-xs sm:text-sm text-[#797A7D]">
                    Answer common patient inquiries via AI chat or voice
                    assistant.
                  </p>
                </div>
              </motion.article>
            </div>
          </motion.div>
        </motion.section>

        {/* Productivity Gains */}
        
                <motion.section
                  id="productivity-gains"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeInUp}
                  className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#00A7DE] to-[#0578AC] px-4 sm:px-6 py-12 text-white"
                  aria-labelledby="productivity-heading"
                >
                  {/* Heading with SEO */}
                  <motion.h2
                    id="productivity-heading"
                    variants={fadeInUp}
                    className="text-5xl sm:text-5xl md:text-5xl pb-9 font-bold mb-8 mt-4 text-center"
                  >
                    Productivity Gains
                  </motion.h2>
        
                  {/* ✅ Responsive Grid */}
                  <motion.div
                    variants={stagger}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-10 lg:gap-1 justify-items-center max-w-6xl w-full text-center"
                    role="list"
                  >
                    {/* Card 1 */}
                    <motion.article
                      variants={fadeInUp}
                      className="flex flex-col items-center space-y-2"
                      role="listitem"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="transition-transform"
                      >
                        <Image
                          src="/images/automated follow.png"
                          alt="Automated Follow-up"
                          width={56}
                          height={56}
                          className="w-12 h-12 sm:w-14 sm:h-14"
                          priority
                        />
                      </motion.div>
                      <h3 className="text-sm sm:text-base font-medium">
                        Automated Follow-Ups
                      </h3>
                      <p className="text-xs sm:text-sm">Save time by letting AI schedule<br/> recurring beauty sessions<br/> automatically. </p>
                    </motion.article>
        
                    {/* Card 2 */}
                    <motion.article
                      variants={fadeInUp}
                      className="flex flex-col items-center space-y-2"
                      role="listitem"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="transition-transform"
                      >
                        <Image
                          src="/images/smart Reminder.png"
                          alt="Smart Reminders"
                          width={56}
                          height={56}
                          className="w-12 h-12 sm:w-14 sm:h-14"
                          priority
                        />
                      </motion.div>
        
                      <h3 className="text-sm sm:text-base font-medium">
                     Smart Reminders
                      </h3>
                      <p className="text-xs sm:text-sm">
                       Reduce missed visits with timely <br/>alerts and  preparation instructions.
                      </p>
                    </motion.article>
        
                    {/* Card 3 */}
                    <motion.article
                      variants={fadeInUp}
                      className="flex flex-col items-center space-y-2"
                      role="listitem"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="transition-transform"
                      >
                        <Image
                          src="/images/patient record.png"
                          alt="Patient Record"
                          width={56}
                          height={56}
                          className="w-12 h-12 sm:w-14 sm:h-14"
                          priority
                        />
                      </motion.div>
                      <h3 className="text-sm sm:text-base font-medium">
                         Patient Records
                      </h3>
                      <p className="text-xs sm:text-sm">
                       Quickly review treatment history<br/> without manual searches.
                      </p>
                    </motion.article>
                  </motion.div>
                </motion.section>
        

        {/* =====================
Example use cases
===================== */}

        <section className="px-4 py-12 max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-5xl font-bold text-center text-[#00A7DE] mb-10"
          >
            Example Use Case
          </motion.h2>

          {/* Top Full-Width Box */}
          <motion.div
            variants={cardMotion}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="rounded-xl p-6 text-black shadow-lg bg-gradient-to-br from-[#F9FAFB] to-[#F9FAFB] hover:scale-[1.03] transition-transform mb-6"
          >
            <h3 className="text-base font-semibold mb-2">
              Facial & Manicure Treatment
            </h3>
            <p className="text-sm text-[#797A7D] leading-relaxed">
A patient books facial and manicure treatment through your virtual assistant.            </p>
          </motion.div>

          {/* Bottom 4 Boxes */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              {
                icon: "/images/one.png",
                title: "Instant Confirmation",
               text: <> Appointment confirmed instantly with preparation<br/> advice like (&quot;avoid heavy makeup before facial&quot;).</>,
                bg: "bg-[#3B82F6]/8",
              },
              {
                icon: "/images/two.png",
                title: "Treatment Notes Logging",
                text:<>Records skin analysis, products used, and steps performed after<br/> each session</> ,
                bg: "bg-[#10B981]/8",
              },
              {
                icon: "/images/three.png",
                title: "Recurring Checkups",
                text: <>Automatically schedules follow-ups for facials, hair<br/> treatments, or wellness sessions.</>,
                bg: "bg-[#F5B80B]/8",
              },
              {
                icon: "/images/four.png",
                title: "Recovery Reminders",
                text: <>Sends tailored skincare tips, product reminders,<br/> and post-treatment guidance</>,
                bg: "bg-[#FAF5FF]/8",
              },
            ].map((box, i) => (
              <motion.div
                key={i}
                variants={cardMotion}
                whileHover={{ scale: 1.04, rotateZ: 1 }}
                className={`rounded-xl p-6 text-black shadow-lg ${box.bg} transition-transform`}
              >
                <div className="flex items-center gap-4 mb-2">
                 <Image
  src={box.icon}
  alt={box.title}
  width={40}
  height={40}
  priority
/>

                  <h3 className="text-base text-[#000000] font-semibold">
                    {box.title}
                  </h3>
                </div>
                <p className="text-sm text-[#797A7D] leading-relaxed">
                  {box.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
        {/* =======================
from
======================== */}

        <section className="w-full bg-[#00A7DE] py-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={formVariant}
            className="max-w-3xl mx-auto px-6 text-center"
          >
            <motion.h2
              variants={staggerChild}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              Get Your AI Assistant for Healthcare
            </motion.h2>
            <motion.p variants={staggerChild} className="text-white mt-2 mb-8">
              Join thousands of industries who are transforming patient care
              with our AI solutions.
            </motion.p>

            <motion.form
              variants={staggerParent}
              initial="hidden"
              animate="show"
              className="bg-white rounded-lg shadow-md p-8 text-left relative overflow-hidden"
              noValidate
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#00A7DE]/10 to-[#098DC9]/5 pointer-events-none"
                animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                  ease: "easeInOut",
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* Full Name */}
                <motion.div variants={staggerChild}>
                  <label
                    htmlFor="fullName"
                    className="block text-sm text-black font-medium mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-[#D1D5DB] placeholder-gray-300 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
                    required
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={staggerChild}>
                  <label
                    htmlFor="email"
                    className="block text-sm text-black font-medium mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    aria-invalid={!isEmailValid}
                    aria-describedby="email-error"
                    className={`w-full border rounded-md px-3 py-2 placeholder-gray-300 text-black focus:outline-none focus:ring-2 ${
                      isEmailValid
                        ? "border-[#D1D5DB] focus:ring-[#00A7DE]"
                        : "border-red-500 focus:ring-red-500"
                    }`}
                    required
                  />
                  {!isEmailValid && (
                    <p id="email-error" className="text-red-500 text-xs mt-1">
                      Please enter a valid email address
                    </p>
                  )}
                </motion.div>

                {/* Phone (merged with country code) */}
                <motion.div variants={staggerChild}>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-black font-medium mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="flex border border-[#D1D5DB] rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#00A7DE]">
                    {/* Country Code */}
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className=" text-black px-3 py-2 border-r border-[#D1D5DB] outline-none"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+92">🇵🇰 +92</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+86">🇨🇳 +86</option>
                    </select>

                    {/* Phone Input */}
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder="Enter your number"
                      aria-invalid={!isPhoneValid}
                      aria-describedby="phone-error"
                      className={`flex-1 px-3 py-2 text-black placeholder-gray-300 outline-none ${
                        isPhoneValid ? "" : "border-l border-red-500"
                      }`}
                      required
                    />
                  </div>
                  {!isPhoneValid && (
                    <p id="phone-error" className="text-red-500 text-xs mt-1">
                      Please enter a valid phone number
                    </p>
                  )}
                </motion.div>

                {/* Industry */}
                <motion.div variants={staggerChild}>
                  <label
                    htmlFor="industry"
                    className="block text-sm text-black font-medium mb-1"
                  >
                    Industry
                  </label>
                  <select
                    id="industry"
                    className="w-full border border-[#D1D5DB] placeholder-gray-300 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
                    required
                  >
                    <option value="" className="text-[#D1D5DB]">
                      Search or select your industry
                    </option>
                    <option>Healthcare</option>
                    <option>Pharmaceutical</option>
                    <option>Technology</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                variants={staggerChild}
                className="mt-6 relative z-10"
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-1"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your specific needs or challenges"
                  rows={4}
                  className="w-full border border-[#D1D5DB] text-black placeholder-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
                  required
                />
              </motion.div>

              {/* Submit */}
              <motion.div
                variants={staggerChild}
                className="mt-6 text-center relative z-10"
              >
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#098DC9" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#00A7DE] text-white font-medium px-6 py-2 rounded-md transition"
                >
                  Submit
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </section>
        {/* ======================
Explore other industries
========================== */}
        <section className="w-full bg-gray-50 py-16">
          <motion.div
            className="max-w-6xl mx-auto px-6 text-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
          >
            {/* Heading */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#00A7DE] mb-2"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Explore Other Industries
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover how our AI solutions are transforming various industries.
            </motion.p>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Personal Trainer */}
              <motion.div
                variants={leftVariant}
                className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/personal.png"
                    alt="Personal Trainer"
                    width={64}
                    height={64}
                    priority
                  />
                  <h3 className="text-lg text-black font-semibold">
                    Personal Trainer
                  </h3>
                </div>
                <p className="text-[#797A7D] mb-4">
                  Power Up Your Training Business Automates client scheduling,
                  payment reminders, and progress updates.
                </p>
                <a
                  href="/industries/personaltrainer"
                  className="text-[#00A7DE] font-medium hover:underline"
                >
                  Learn More
                </a>
              </motion.div>

              {/* Psychologist */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/psychologist.png"
                    alt="Psychologist"
                    width={64}
                    height={64}
                    priority
                  />
                  <h3 className="text-lg text-black font-semibold">
                    Psychologist
                  </h3>
                </div>
                <p className="text-[#797A7D] mb-4">
                  Automates client bookings, tracks therapy sessions, and keeps
                  your calendar organized.
                </p>
                <a
                  href="/industries/psychology"
                  className="text-[#00A7DE] font-medium hover:underline"
                >
                  Learn More
                </a>
              </motion.div>

              {/* Chiropractor */}
              <motion.div
                variants={rightVariant}
                className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src="/images/chiropractor.png"
                    alt="Chiropractor"
                    width={64}
                    height={64}
                    priority
                  />
                  <h3 className="text-lg text-black font-semibold">
                    Chiropractor
                  </h3>
                </div>
                <p className="text-[#797A7D] mb-4">
                  Precision Scheduling for Chiropractors. Organizes client
                  visits, recalls, and automates reminders.
                </p>
                <a
                  href="/industries/chiropractor"
                  className="text-[#00A7DE] font-medium hover:underline"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </motion.div>
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
            className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-6 sm:gap-y-8 md:gap-y-12 gap-x-6"
            variants={staggerContainer} // Stagger child animation for columns
          >
            {/* Logo & Info */}
            <motion.div className="col-span-1" variants={slideUpChild}>
              <Image
                src="/images/logo1.png"
                alt="Virtual Assistant Logo"
                width={180}
                height={60}
                priority
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
                    priority
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/linkedln.png"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    priority
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/facebook.png"
                    alt="Facebook"
                    width={20}
                    height={20}
                    priority
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={20}
                    height={20}
                    priority
                  />
                </Link>
              </div>
            </motion.div>

            {/* Pages */}
            <motion.div variants={slideUpChild}>
              <h3 className="font-semibold mb-3">Pages</h3>
              <ul className="space-y-2 text-gray-600">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Industries", href: "/industries" },
                  { name: "Pricing", href: "/pricing" },
                  { name: "Contact Us", href: "/contact" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="hover:text-[#00A7DE] transition-colors duration-300"
                    >
                      {item.name}
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
                  {
                    name: "Physiotherapist",
                    href: "/industries/Physotherapist",
                  },
                  { name: "Myotherapist", href: "/industries/myotherapist" },
                  {
                    name: "Massage Therapist",
                    href: "/industries/massagetherapist",
                  },
                  {
                    name: "Personal Trainer",
                    href: "/industries/personaltrainer",
                  },
                  { name: "Psychologist", href: "/industries/psychology" },
                  { name: "Chiropractor", href: "/industries/chiropractor" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="hover:text-[#00A7DE] transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries col 2 */}
            <motion.div
              variants={slideUpChild}
              className="space-y-2 sm:space-y-3"
            >
              <h3 className="font-semibold mb-2 sm:mb-3 hidden sm:block">
                &nbsp;
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-600">
                {[
                  { name: "Podiatrist", href: "/industries/podiatrist" },
                  {
                    name: "Beauty Therapist",
                    href: "/industries/beauty-therapist",
                  },
                  { name: "Hairdresser", href: "/industries/hairdresser" },
                  { name: "Dentist", href: "/industries/dentist" },
                  { name: "Accountant", href: "/industries/accountant" },
                  { name: "Lawyer", href: "/industries/lawyer" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="hover:text-[#00A7DE] transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries col 3 */}
            <motion.div
              variants={slideUpChild}
              className="space-y-2 sm:space-y-3"
            >
              <h3 className="font-semibold mb-2 sm:mb-3 hidden sm:block">
                &nbsp;
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-gray-600">
                {[
                  { name: "Consultant", href: "/industries/consultant" },
                  {
                    name: "Real Estate Agent",
                    href: "/industries/real-estate-agent",
                  },
                  { name: "Mechanic", href: "/industries/mechanic" },
                  { name: "Plumber", href: "/industries/plumber" },
                  { name: "Electrician", href: "/industries/electrician" },
                  {
                    name: "Window Cleaning",
                    href: "/industries/window-cleaning",
                  },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="hover:text-[#00A7DE] transition-colors duration-300"
                    >
                      {item.name}
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
      </div>
    </>
  );
}
