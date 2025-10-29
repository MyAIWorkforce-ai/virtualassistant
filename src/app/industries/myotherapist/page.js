"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../../_components/Navbar";
import { pageFadeIn } from "../../_components/animations/physo3";
import { staggeredList } from "../../_components/animations/physo3";
import { listItemFade } from "../../_components/animations/physo3";
import Footer from "../../_components/Footer";
import { fadeUp } from "../../_components/animations/variantsphyso";
import { staggerFadeUp } from "../../_components/animations/variantsphyso";
import { fadeInItem } from "../../_components/animations/variantsphyso";
import { buttonHover } from "../../_components/animations/variantsphyso";
import { fadeInUp } from "../../_components/animations/physo5";
import { stagger } from "../../_components/animations/physo5";
import { cardMotion } from "../../_components/animations/physo6";
import { container } from "../../_components/animations/physo6";
import FormSection from "../../_components/FormSection";
import { staggerChild } from "../../_components/animations/physo7";
import { formVariant } from "../../_components/animations/physo7";
import { containerVariants } from "../../_components/animations/physo77";
import { leftVariant } from "../../_components/animations/physo77";
import { rightVariant } from "../../_components/animations/physo77";
import useScrollAnimation from "../../_components/animations/scrolleranimation";
export default function Home() {
  useScrollAnimation();
  // hamburger Button
  const [isOpen, setIsOpen] = useState(false);
  // Form
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
       {/* SEO Meta */}
                <Head>
                    <title>AI Virtual Receptionist for Myotherapists</title>
                    <meta
                        name="description"
                        content="Streamline your myotherpy clinic with our AI Virtual Receptionist.Book, reschedule, 
                        and manage appointments automatically while delivering professional service 24/7."
                    />
                    <meta
                        name="keywords"
                        content="AI Virtual Receptionist for Myotherapists, 
                        AI receptionist for myotherapy clinic, 
                        myotherapy call answering service, 
                        virtual assistant for myotherapists,
                         automated appointment booking for myotherapy, 
                         Al phone answering for allied health, 
                         24/7 receptionist for myotherapists,
                         VirtualAssistant.com.au"
                    />
                </Head>

      <div className="min-h-screen flex flex-col">
       <Navbar />
        {/* Hero Section */}
        <section className="relative w-full bg-[url('/images/bg.png')] bg-cover bg-center overflow-visible">
          {/* Overlay blur */}
          <div className="absolute inset-0 backdrop-blur-sm"></div>

          <div
            className="relative z-10 flex flex-col md:flex-row  pl-2 items-center justify-center md:justify-between 
      px-6 md:px-12 py-16 border-b border-white"
          >
            {/* Text on Left */}
            <motion.div
              className="text-white max-w-xl flex flex-col pb-9 items-center md:items-start text-center md:text-left"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              viewport={{ once: false }}
            >
              <motion.div
                className="inline-block bg-white text-[#00A7DE] font-medium px-7 py-2 rounded-full mb-4 shadow"
                variants={fadeUp}
              >
                Muscle Therapy
              </motion.div>

              <motion.h1 className="text-5xl font-bold mb-4" variants={fadeUp}>
                AI for Myotherapist
              </motion.h1>

              <motion.p className="text-2xl font-regular text-[#E0F2FE] mb-6" variants={fadeUp}>
                Your Virtual Assistant for Stress-Free Therapy Management.
              </motion.p>

              {/* Flipper Button */}
              <motion.button
                variants={buttonHover}
                initial="initial"
                whileHover={{ scale: 1.05 }}
                viewport={{ once: false }}
                className="bg-[#00A7DE] text-white font-medium py-2 px-4 rounded flex items-center gap-2
        transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
              >
                Get Started
                <Image
                  src="/images/svg.png"
                  alt="Start Icon"
                  width={12} // convert h-3/w-3 (Tailwind) to px, 1rem = 16px, so 0.75rem = 12px
                  height={12}
                  priority
                />
              </motion.button>
            </motion.div>

            {/* Session Confirmed Notification - Responsive */}
            <motion.div
              className="bg-white text-gray-800 rounded-xl shadow-lg flex items-center justify-center gap-4 z-20
transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer
absolute bottom-19 
left-1/2 -translate-x-1/2      /* mobile: center */
md:left-1/2 md:-translate-x-1/3 /* desktop: 1/3 */
w-[265px] h-[76px]"
            >
              <Image
                src="/images/Tick-icon.png"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />

              <div className="text-center">
                <div className="font-semibold text-[#000000]">
                  Session Confirmed
                </div>
                <div className="text-xs text-gray-500">
                  Auto-scheduled & reminded
                </div>
              </div>
            </motion.div>

            {/* image on right side */}
            <motion.div
              className="flex-shrink-0 flex justify-center md:justify-end items-end h-full overflow-hidden mt-8 md:mt-0"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              viewport={{ once: false }}
            >
              <Image
                src="/images/myso.png"
                alt="myotherapist"
                width={650}
                height={650}
                priority
                className="w-[90%] max-w-[650px] h-auto object-cover md:pl-19 md:-mb-25 md:pr-30"
                style={{ objectPosition: "right center" }}
              />
            </motion.div>
          </div>
        </section>

        {/* Grid Background */}
        <section className="relative w-full h-32 md:h-40 -mt-16   bg-white">
          <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-white/20 h-full"></div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
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
              className="flex flex-col items-center text-center p-4 md:p-6"
              variants={fadeInItem}
            >
              <Image
                src="/images/clock.png"
                alt="Missed Appointments"
                width={28}
                height={28}
                className="mb-2"
                priority
              />

              <h2 className="text-[#000000] font-semibold text-4xl">30%</h2>
              <p className="text-[#797A7D] text-base font-regular mt-2">
                Reduction in admin time for therapy
                <br /> professionals.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              className="flex flex-col items-center mt-2 text-center p-4 md:p-6"
              variants={fadeInItem}
            >
              <Image
                src="/images/Frame.png"
                alt="Scheduling Automation"
                width={28}
                height={28}
                className="mb-2"
                priority
              />

              <h2 className="text-[#000000] font-semibold text-4xl">98%</h2>
              <p className="text-[#797A7D] text-base font-regular mt-2">
                increase in client retention with timely
                <br /> reminders and follow-ups.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              className="flex flex-col items-center text-center p-4 md:p-6"
              variants={fadeInItem}
            >
              <Image
                src="/images/wave.png"
                alt="Patient Recovery"
                width={28}
                height={28}
                className="mb-2"
                priority // Preloads the image for faster above-the-fold rendering
              />
              <h2 className="text-[#000000] font-semibold text-4xl">25%</h2>
              <p className="text-[#797A7D] text-base font-regular mt-2">
                improvement in appointment <br />
                consistency.
              </p>
            </motion.div>
          </motion.div>
        </section>

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
            className="text-5xl font-bold mb-8 text-black text-center"
            variants={fadeUp}
          >
            Key Benefits
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-xl font-light -mt-6 mb-8 text-[#797A7D] text-center"
            variants={fadeUp}
          >
            Streamline your practice with intelligent automation that enhances
            patient<br/> care and reduces administrative burden.
          </motion.p>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-gradient-to-br from-[#FAF5FF] to-[#F3E8FF] text-black rounded-xl p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
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
              <h3 className="text-xl font-semibold mb-2">
                Automated Scheduling
              </h3>
              <p className="text-base font-regular text-[#797A7D] leading-relaxed">
                Session scheduling, reminders, and
                <br /> follow-ups handled automatically,
                <br /> reducing no-shows and improving
                <br /> patient adherence.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-gradient-to-br from-[#ECFEFF] to-[#CFFAFE] text-black rounded-xl p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="mb-4">
                <Image
                  src="/images/secure-records.png"
                  alt="Secure Patient Records"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Organized Records</h3>
              <p className="text-base font-regular text-[#797A7D] leading-relaxed">
                Secure storage of muscle therapy <br /> notes and progress
                records, accessible
                <br /> anytime for better treatment
                <br /> continuity.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] text-black rounded-xl p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="mb-4">
                <Image
                  src="/images/personalized-care.png"
                  alt="Personalized Care"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-base font-regular text-[#797A7D] leading-relaxed">
                {`Custom treatment plans and exercise
  logs tailored to each patient's specific
  muscle therapy needs.`}
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] text-black rounded-xl p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="mb-4">
                <Image
                  src="/images/better-adherence.png"
                  alt="Better Adherence"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Better Outcomes</h3>
              <p className="text-base font-regular text-[#797A7D] leading-relaxed">
                Improved treatment results through
                <br /> timely follow-ups and consistent
                <br /> patient engagement.
              </p>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              className="bg-gradient-to-br from-[#FFF1F2] to-[#FFE4E6] text-black rounded-xl p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
              variants={fadeInItem}
            >
              <div className="mb-4">
                <Image
                  src="/images/stress.png"
                  alt="Smooth Communication"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reduced Stress</h3>
              <p className="text-base font-regular text-[#797A7D] leading-relaxed">
                Less administrative burden means
                <br /> more time dedicated to hands-on
                <br /> therapy and patient care.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ======================
                Primary uses
         ======================     */}

        <div className="w-full h-[2px] bg-gray-200 my-12"></div>
        <div className="max-w-6xl mx-auto px-4 text-center"></div>

        <motion.section
          className="px-4 sm:px-6 md:px-8 lg:px-16 py-12 max-w-6xl mx-auto"
          variants={pageFadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          aria-labelledby="primary-uses-heading"
        >
          {/* Centered Heading */}
          <motion.h2
            id="primary-uses-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#00A7DE] mb-12 -mt-15"
            variants={listItemFade}
          >
            Primary Uses
          </motion.h2>

          {/* Two-column layout */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-10 border rounded-lg transition max-w-5xl mx-auto"
            variants={staggeredList}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            {/* Left Column */}
            <div className="space-y-8">
              {/* Item 1 */}
              <motion.div
                className="flex items-start gap-4"
                variants={listItemFade}
              >
                <Image
                  src="/images/reminder.png"
                  alt="Automated Reminders"
                  width={40}
                  height={40}
                  priority
                />
                <div>
                  <h3 className="text-base  font-semibold text-gray-900">
                    Automated Reminders
                  </h3>
                  <p className="text-regular text-[#797A7D] leading-relaxed">
                    Book and manage manual therapy or soft-tissue treatment
                    sessions without back-and-forth messaging.
                  </p>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                className="flex items-start gap-4"
                variants={listItemFade}
              >
                <Image
                  src="/images/exercise.png"
                  alt="Exercise Routines"
                  width={40}
                  height={40}
                  priority
                />
                <div>
                  <h3 className="text-base  font-semibold text-gray-900">
                    Exercise Reminder
                  </h3>
                  <p className="text-regular text-[#797A7D] leading-relaxed">
                    Send patients automated reminders for stretches and
                    corrective exercises to improve recovery.
                  </p>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                className="flex items-start gap-4"
                variants={listItemFade}
              >
                <Image
                  src="/images/calendar1.png"
                  alt="Calendar Sync"
                  width={40}
                  height={40}
                  priority
                />
                <div>
                  <h3 className="text-base  font-semibold text-gray-900">
                    Calendar Sync
                  </h3>
                  <p className="text-regular text-[#797A7D] leading-relaxed">
                    Sync with calendars to avoid overlapping bookings and
                    conflicts.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Item 4 */}
              <motion.div
                className="flex items-start gap-4"
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
                  <h3 className="text-base  font-semibold text-gray-900">
                    Patient Progress Tracking
                  </h3>
                  <p className="text-regular text-[#797A7D] leading-relaxed">
                    Record treatment notes, track muscle function improvements,
                    and monitor recovery timelines.
                  </p>
                </div>
              </motion.div>

              {/* Item 5 */}
              <motion.div
                className="flex items-start gap-4"
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
                  <h3 className="text-base  font-semibold text-[#000000]">
                    AI Assistant
                  </h3>
                  <p className="text-regular text-gray-600 leading-relaxed">
                    Answer common patient inquiries via AI chat or voice
                    assistant.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* ==========================
             Productivity Gains
            ========================== */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUp}
          className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#00A7DE] to-[#0578AC] px-4 sm:px-6 md:px-12 py-12 text-white"
          aria-labelledby="productivity-gains-heading"
        >
          {/* Heading */}
          <motion.h2
            id="productivity-gains-heading"
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 mt-4 text-center"
          >
            Productivity Gains
          </motion.h2>

          {/* Grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl w-full text-center"
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center space-y-2"
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <Image
                  src="/images/time.png"
                  alt="Time Savings"
                  width={56}
                  height={56}
                  priority
                />
              </motion.div>

              <h3 className="text-base font-semibold">Time Savings</h3>
              <p className="text-sm leading-relaxed">
                Save hours weekly by automated
                <br /> scheduling and admin tasks
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center space-y-2"
            >
              <motion.div whileHover={{ scale: 1.2 }}>
                <Image
                  src="/images/bells.png"
                  alt="Reduced Drop-offs"
                  width={56}
                  height={56}
                  priority
                />
              </motion.div>
              <h3 className="text-base font-semibold">Reduced Drop-offs</h3>
              <p className="text-sm leading-relaxed">
                Reduces missed appointments with
                <br /> smart confirmation and tracking
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center space-y-2"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="transition-transform"
              >
                <Image
                  src="/images/care.png"
                  alt="Better Care"
                  width={56}
                  height={56}
                  priority
                />
              </motion.div>
              <h3 className="text-base font-semibold">Better Care</h3>
              <p className="text-sm leading-relaxed">
                Improve consistency in patient care with
                <br /> accurate records
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center space-y-2"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="transition-transform"
              >
                <Image
                  src="/images/hand.png"
                  alt="More Face Time"
                  width={56}
                  height={56}
                  priority
                />
              </motion.div>
              <h3 className="text-base font-semibold">More Patient Focus</h3>
              <p className="text-sm leading-relaxed">
                Frees up time for hands-on
                <br /> therapy instead of admin work
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

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
              Chronic Back Pain Consultation
            </h3>
            <p className="text-sm text-[#797A7D] leading-relaxed">
              A patient recovering from chronic muscle tension books a
              consultation through your AI assistant.
            </p>
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
                text: "Confirms their appointments instantly with available time slots.",
                bg: "bg-[#3B82F6]/8",
              },
              {
                icon: "/images/two.png",
                title: "Smart Reminders",
                text: 'Sends reminders with prep instructions like "wear flexible clothing".',
                bg: "bg-[#10B981]/8",
              },
              {
                icon: "/images/three.png",
                title: "Treatment Logging",
                text: "Logs treatment updates after each session automatically.",
                bg: "bg-[#F5B80B]/8",
              },
              {
                icon: "/images/four.png",
                title: "Home Care Support",
                text: "Personalized stretching reminders between the sessions.",
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
                    width={40} // Tailwind w-10 = 40px
                    height={40} // Tailwind h-10 = 40px
                    priority // optional, for important above-the-fold images
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
<FormSection />
          </motion.div>
        </section>
        {/* ======================
Explore other industries
========================== 
        =================== */}
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
              className="text-3xl md:text-4xl font-bold text-[#00A7DE] mb-2"
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
       <Footer />
      </div>
    </>
  );
}
