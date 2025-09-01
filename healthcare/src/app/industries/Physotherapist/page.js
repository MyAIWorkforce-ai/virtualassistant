"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { pageFadeIn } from "../../_components/animations/physo3";
import { staggeredList } from "../../_components/animations/physo3";
import { listItemFade } from "../../_components/animations/physo3";
import { slideUp } from "../../_components/animations/footer";
import { slideUpChild } from "../../_components/animations/footer";
import { staggerContainer } from "../../_components/animations/footer";
import { fadeUp } from "../../_components/animations/variantsphyso";
import { staggerFadeUp } from "../../_components/animations/variantsphyso";
import { fadeInItem } from "../../_components/animations/variantsphyso";
import { buttonHover } from "../../_components/animations/variantsphyso";
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
export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col">
      <header className="w-full  bg-white shadow-sm">
        <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-6 z-[100]">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo1.png"
              alt="Logo"
              width={177}
              height={40}
              className="pl-4"
            />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center space-x-8 text-sm font-medium">
              <li>
                <Link href="/home" className="text-black hover:text-[#00A7DE]">
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
                <Link href="/" className="text-[#00A7DE] hover:text-[#00A7DE]">
                  Industries
                </Link>

                {/* Dropdown */}
                <ul
                  
  className="
    absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-300 ease-in-out delay-200
    z-[100]
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
                  Contact
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
                  className="relative inline-block px-5 py-2 rounded-full font-semibold text-white overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-[#00A7DE] transition-transform duration-300 ease-out group-hover:translate-x-full"></span>
                  <span className="absolute inset-0 bg-[#050607] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                  <span className="relative">Sign Up</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Banner Section */}
      <>
        {/* Hero Section */}
        <section className="relative w-full bg-[url('/images/bg.png')] bg-cover bg-center overflow-visible">

  <div className="absolute inset-0 backdrop-blur-sm"></div>

  <div className="relative z-10 flex flex-col md:flex-row pl-30 items-center justify-between px-8 py-16 border-b border-white">
    {/* Text on Left */}
    <motion.div
      className="text-white max-w-xl"
      variants={fadeUp}
      initial="hidden"
      animate="show"
      viewport={{ once: false }}
    >
      <motion.div
        className="inline-block bg-white text-[#00A7DE] font-medium px-7 py-2 rounded-full mb-4 shadow"
        variants={fadeUp}
      >
        Physio Therapy
      </motion.div>

      <motion.h1 className="text-4xl font-bold mb-4" variants={fadeUp}>
        AI for Physiotherapists
      </motion.h1>

      <motion.p className="text-lg mb-6" variants={fadeUp}>
        A virtual assistant that books, reminds, and <br /> records,
        while you work on your patients.
      </motion.p>

      {/* Flipper Button */}
      <motion.button
        variants={buttonHover}
        initial="initial"
        whileHover="hover"
        viewport={{ once: false }}
        className="font-medium py-2 px-4 rounded flex items-center gap-2"
      >
        Get Started
        <img src="/images/svg.png" alt="Start Icon" className="h-3 w-3" />
      </motion.button>
    </motion.div>

    {/* Image on Right */}
    <motion.div
      className="flex-shrink-0 flex justify-center items-end h-full overflow-hidden"
      variants={fadeUp}
      initial="hidden"
      animate="show"
      viewport={{ once: false }}
    >
      <img
        src="/images/doctor.png"
        alt="Doctor"
        className="w-[650px] h-auto object-cover relative -mb-39 pr-30"
        style={{ objectPosition: "right center" }}
      />
    </motion.div>
  </div>
</section>

{/* 🌟 New Background Section with Gradient/Grid */}
<section className="relative w-full h-32 -mt-16  md:h-40 bg-white">
  {/* Optional: Add grid overlay */}
  <div className="absolute inset-0 grid grid-cols-12  gap-4 opacity-10">
    {Array.from({ length: 12 }).map((_, i) => (
      <div key={i} className="border-l border-white/20 h-full"></div>
    ))}
  </div>
</section>

{/* Stats Section (Overlay Card) */}
<section className="relative z-20 -mt-20 flex justify-center px-8">
  <motion.div
            className="flex items-center justify-center gap-45 border rounded-2xl p-6 shadow-xl bg-white/90 backdrop-blur-md hover:shadow-2xl transition max-w-6xl w-full"
    variants={staggerFadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false }}
  >
    {/* Stat 1 */}
    <motion.div
      className="flex flex-col items-center"
      variants={fadeInItem}
    >
      <img src="/images/clock.png" alt="Icon 1" className="h-7 w-7 mb-2" />
      <h3 className="text-[#000000] font-bold text-2xl">30%</h3>
      <p className="text-[#797A7D] text-sm text-center">
        Reduction in admin time for therapy <br /> professionals.
      </p>
    </motion.div>

    {/* Stat 2 */}
    <motion.div
      className="flex flex-col items-center"
      variants={fadeInItem}
    >
      <img src="/images/frame.png" alt="Icon 2" className="h-7 w-7 mb-2" />
      <h3 className="text-[#000000] font-bold text-2xl">98%</h3>
      <p className="text-[#797A7D] text-sm text-center">
        Patient satisfaction with AI-assisted <br /> therapy
      </p>
    </motion.div>

    {/* Stat 3 */}
    <motion.div
      className="flex flex-col items-center"
      variants={fadeInItem}
    >
      <img src="/images/wave.png" alt="Icon 3" className="h-7 w-7 mb-2" />
      <h3 className="text-[#000000] font-bold text-2xl">25%</h3>
      <p className="text-[#797A7D] text-sm text-center">
        Boost in patient retention
      </p>
    </motion.div>
  </motion.div>
</section>

      </>
      {/* =======================
         Key features
============================= */}
      <motion.section
        className="py-12 px-4 mt-15 md:px-8 lg:px-16"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }} // triggers once when 20% visible
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold mb-8 text-black text-center"
          variants={fadeUp}
        >
          Key Benefits
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-sm font-regular -mt-6 mb-8 text-[#797A7D] text-center"
          variants={fadeUp}
        >
          Streamline your practice with intelligent automation and patient care
          tools
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
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Automated Scheduling</h3>
            <p className="text-sm text-[#797A7D] leading-relaxed">
              Automated appointment bookings,
              <br /> reminders, and follow-ups to keep <br /> your schedule
              organized.
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
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Secure Patient Records
            </h3>
            <p className="text-sm text-[#797A7D] leading-relaxed">
              Secure storage of patient progress <br /> notes, treatment
              history, and exercise <br /> routines.
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
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
            <p className="text-sm text-[#797A7D] leading-relaxed">
              Personalized scheduling for rehab <br /> plans and recurring
              therapy sessions.
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
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Better Adherence</h3>
            <p className="text-sm text-[#797A7D] leading-relaxed">
              Fewer no-shows and better <br /> treatment adherence tracking for{" "}
              <br /> improved outcomes.
            </p>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            className="bg-gradient-to-br from-[#F2FFFC] to-[#CCFBF1] text-black rounded-xl p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            variants={fadeInItem}
          >
            <div className="mb-4">
              <Image
                src="/Images/smooth-communication.png"
                alt="Smooth Communication"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smooth Communication</h3>
            <p className="text-sm text-[#797A7D] leading-relaxed">
              Seamless communication with <br /> patients about home exercises
              and <br /> care instructions.
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
        className="px-6 py-12 max-w-6xl mx-auto"
        variants={pageFadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        {/* Centered Heading */}
        <motion.h2
          className="text-5xl font-bold text-center -mt-15 text-[#00A7DE] mb-12"
          variants={listItemFade}
        >
          Primary Uses
        </motion.h2>

        {/* Two-column layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 p-20 border rounded-lg shadow-none hover:shadow-lg transition max-w-5xl mx-auto"
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
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Automated Reminders
                </h3>
                <p className="text-sm text-gray-600">
                  Send automated reminders for upcoming physio sessions <br />{" "}
                  and appointments.
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
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Exercise Routines
                </h3>
                <p className="text-sm text-gray-600">
                  Provide patients with personalized exercise routines and{" "}
                  <br /> reminders.
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
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Calendar Sync
                </h3>
                <p className="text-sm text-gray-600">
                  Sync with calendars to avoid overlapping bookings and <br />{" "}
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
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Patient Progress Tracking
                </h3>
                <p className="text-sm text-gray-600">
                  Track rehabilitation milestones and log patient progress{" "}
                  <br /> digitally.
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
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  AI Assistant
                </h3>
                <p className="text-sm text-gray-600">
                  Answer common patient inquiries via AI chat or voice <br />{" "}
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
        className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#00A7DE] to-[#0578AC] px-6 py-12 text-white"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-8 mt-4 text-center"
        >
          Productivity Gains
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 -gap-14 max-w-7xl w-full text-center"
        >
          {/* Card 1 */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center space-y-2"
          >
            <motion.img
              src="/images/time.png"
              alt="Time Savings"
              className="w-14 h-14 transition-transform"
              whileHover={{ scale: 1.2 }}
            />
            <h3 className="text-lg font-semibold">Time Savings</h3>
            <p className="text-sm">
              Save hours weekly on scheduling and <br /> admin tasks.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center space-y-2"
          >
            <motion.img
              src="/images/member.png"
              alt="Reduced Drop-offs"
              className="w-14 h-14 transition-transform"
              whileHover={{ scale: 1.2 }}
            />
            <h3 className="text-lg font-semibold">Reduced Drop-offs</h3>
            <p className="text-sm">
              Reduce patient drop-off with smart<br/> reminders.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center space-y-2"
          >
            <motion.img
              src="/images/heart.png"
              alt="Better Care"
              className="w-14 h-14 transition-transform"
              whileHover={{ scale: 1.2 }}
            />
            <h3 className="text-lg font-semibold">Better Care</h3>
            <p className="text-sm">
              Improve consistency in patient care with <br /> accurate records.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center space-y-2"
          >
            <motion.img
              src="/images/hand.png"
              alt="More Face Time"
              className="w-14 h-14 transition-transform"
              whileHover={{ scale: 1.2 }}
            />
            <h3 className="text-lg font-semibold">More Face Time</h3>
            <p className="text-sm">Get more face-to-face time with patients.</p>
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
          <h3 className="text-lg font-semibold mb-2">
            Sports Injury Recovery Patient
          </h3>
          <p className="text-sm text-[#797A7D] leading-relaxed">
            A patient recovering from a sports injury books recurring sessions
            through your AI assistant.
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
              icon: "/images/three.png",
              title: "Smart Reminders",
              text: 'Sends reminders with prep instructions like "wear flexible clothing".',
              bg: "bg-[#10B981]/8",
            },
            {
              icon: "/images/three.png",
              title: "Progress Logging",
              text: "Logs treatment updates after each session automatically.",
              bg: "bg-[#F5B80B]/8",
            },
            {
              icon: "/images/four.png",
              title: "Exercise Reminders",
              text: "Reminds the patient daily about prescribed home exercises.",
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
                <img src={box.icon} alt={box.title} className="w-10 h-10" />
                <h3 className="text-lg text-[#000000] font-semibold">
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
          {/* Heading */}
          <motion.h2
            variants={staggerChild}
            className="text-2xl md:text-3xl font-bold text-white"
          >
            Get Your AI Assistant for Healthcare
          </motion.h2>
          <motion.p variants={staggerChild} className="text-white mt-2 mb-8">
            Join thousands of industries who are transforming patient care with
            our AI solutions.
          </motion.p>

          {/* Form */}
          <motion.form
            variants={staggerParent}
            initial="hidden"
            animate="show"
            className="bg-white rounded-lg shadow-md p-8 text-left relative overflow-hidden"
          >
            {/* Floating gradient background effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#00A7DE]/10 to-[#098DC9]/5 pointer-events-none"
              animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {/* Full Name */}
              <motion.div variants={staggerChild}>
                <label className="block text-sm text-black font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-[#D1D5DB] placeholder-[#D1D5DB] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={staggerChild}>
                <label className="block text-sm text-black font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-[#D1D5DB] placeholder-[#D1D5DB] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={staggerChild}>
                <label className="block text-sm text-black font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter your organization"
                  className="w-full border border-[#D1D5DB] placeholder-[#D1D5DB] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
                />
              </motion.div>

              {/* Industry */}
              <motion.div variants={staggerChild}>
                <label className="block text-sm text-black font-medium mb-1">
                  Industry
                </label>
                <select className="w-full border border-[#D1D5DB] text-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]">
                  <option value=""  className="text-[#D1D5DB]"> Search or select your industry </option>
                  <option>Healthcare</option>
                  <option>Pharmaceutical</option>
                  <option>Technology</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </motion.div>
            </div>

            {/* Message */}
            <motion.div variants={staggerChild} className="mt-6 relative z-10">
              <label className="block text-sm font-medium text-black mb-1">
                How can we help?
              </label>
              <textarea
                placeholder="Tell us about your specific needs or challenges"
                rows={4}
                className="w-full border border-[#D1D5DB] placeholder-[#D1D5DB] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
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
            transition={{ duration: 0.8, delay: 0.2 }}
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
                href="#"
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
                href="#"
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
                />
                <h3 className="text-lg text-black font-semibold">
                  Chiropractor
                </h3>
              </div>
              <p className="text-[#797A7D] mb-4">
                Precision Scheduling for Chiropractors. Organizes client visits,
                recalls, and automates reminders.
              </p>
              <a
                href="#"
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
    </div>
  );
}
