"use client";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import {
  fadeUp,
  fadeInItem,
  staggerFadeUp,
} from "../../_components/animations/variantsphyso";

export default function AppointmentScheduling() {
  return (
    <>
      {/* SEO Meta */}
      <Head>
        <title>AI Appointment Scheduling — Smart Calendar & Productivity</title>
        <meta
          name="description"
          content="AI Appointment Scheduling — Automatically book, confirm and manage meetings using intelligent automation to improve productivity and efficiency."
        />
        <meta
          name="keywords"
          content="AI Appointment Scheduling, Smart Calendar, Productivity Gains, Meeting Automation, Booking Assistant"
        />
      </Head>

      <Navbar />


{/* FIRST SECTION */}
<motion.section
  initial="hidden"
  animate="show"
  className="relative flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 overflow-hidden font-[Poppins]"
  style={{
    backgroundImage: "url('/images/appointmentimage.png')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left Side - Image */}
  <motion.div
    className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-start md:mt-0"
  >
    <div className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]  -mb-6 sm:-mb-8 -ml-0 md:-ml-10">
      <Image
        src="/images/scheduling.png"
        alt="AI Appointment Calendar"
        fill
        className="object-contain drop-shadow-lg opacity-95"
      />
    </div>
  </motion.div>

  {/* Right Half - Content Box */}
  <motion.div>
    {/* Badge */}
    <div className="inline-block bg-[#E8F6FF] text-[#00A7DE] px-5 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide  shadow-sm">
      Smart, Seamless, Always On
    </div>

    {/* Heading */}
    <h1
      className="text-2xl sm:text-4xl md:text-[48px] py-10 text-white leading-[110%] font-bold "
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      AI Appointment Scheduling
    </h1>

    {/* Subtext */}
    <p className="text-sm sm:text-base md:text-lg text-white text-[24px] leading-relaxed max-w-sm sm:max-w-md">
      Never miss an appointment or double-book again. Your AI assistant
      automatically manages scheduling, reminders, and rescheduling — keeping
      your calendar full and your clients happy.
    </p>

    {/* CTA Button */}
    <button className="bg-[#00A7DE] text-white px-6 sm:px-7 py- sm:py-3.5 rounded-lg font-semibold shadow-md hover:bg-[#008FCC] transition text-sm sm:text-base">
      Start your free trial
    </button>
  </motion.div>
</motion.section>



{/* SECOND SECTION */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#D4EFFF] via-[#EEF8FF] to-[#FFFFFF] overflow-hidden font-[Poppins]"
>
 
  <div className="absolute top-12 left-8 w-20 h-20 bg-[#BCE2FF]/40 rounded-full blur-xl"></div>
  <div className="absolute bottom-16 right-16 w-32 h-32 bg-[#7CD6F8]/30 rounded-full blur-2xl"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
    {/* Left Text Card */}
    <motion.div
      className="md:w-1/2 flex justify-center md:justify-start"
    >
      <div
        className="bg-white shadow-lg rounded-[20px] p-8 w-[466px] h-[314px] flex flex-col justify-center"
        style={{
          boxShadow: "0 6px 30px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h2
          className="text-[36px] font-bold text-[#000000] mb-4"
          style={{ fontFamily: "Poppins, sans-serif", lineHeight: "100%" }}
        >
          Key Capabilities:
        </h2>
        <p className="text-[#797A7D] text-lg leading-relaxed">
          Streamline your client scheduling process with intelligent automation
          that saves time, reduces no-shows, and ensures a smoother customer
          experience.
        </p>
      </div>
    </motion.div>


    {/* Right Icon Cards */}
<motion.div
  className="md:w-1/2 flex flex-col gap-6 justify-center"
>
  {[
    {
      icon: "images/fully-automated.png",
      title: "Fully Automated:",
      desc: "Books, reschedules, and cancels appointments directly into your calendar.",
    },
    {
      icon: "images/calender-syncing.png",
      title: "Calendar Syncing:",
      desc: "Works seamlessly with Google Calendar or Outlook.",
    },
    {
      icon: "images/smart-reminders.png",
      title: "Smart Reminders:",
      desc: "Clients automatically receive SMS and email confirmations — cutting down no-shows.",
    },
    {
      icon: "images/flexible-options.png",
      title: "Flexible Options:",
      desc: "Choose whether to use your new dedicated number or keep your current one with forwarding.",
    },
  ].map((card, i) => (
    <motion.div
      key={i}
      className="w-full md:w-[670px] bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition-all flex items-center gap-4"

    >
      {/* Icon */}
      <div className="text-[28px]   w-12 h-12 flex items-center justify-center  shadow-sm shrink-0">
        {card.icon}
      </div>

      {/* Text (Horizontal - Bold title + desc inline) */}
      <div className="text-[#797A7D] text-base leading-snug">
        <span className="font-semibold text-[#000]">{card.title}</span>{" "}
        {card.desc}
      </div>
    </motion.div>
  ))}
</motion.div>
  </div>
</motion.section>




      {/*  THIRD SECTION */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="py-0 px-6 md:px-16 bg-white"
>
  {/* Top Part */}
  <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-5">
    {/* Left Text */}
  <motion.div
      className="md:w-1/2 bg-[#BCE2FF] rounded-2xl p-8 shadow-[4px_4px_20px_#00000040] hover:shadow-[6px_6px_25px_#00000040] transition-all duration-300 flex flex-col justify-center w-[250px] h-[250px]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-3">
        Save Hours of Manual Work: 
      </h2>
      <p className="text-[#797A7D] text-lg leading-relaxed">

Your team no longer needs to manage calls or track appointments manually.
      </p>
    </motion.div>

    {/* Right Image */}
    <motion.div
      className="md:w-1/2 flex justify-center md:justify-end items-start"
    >
      <div className="relative w-[700px] h-[600px] md:mr-0 md:mt-0">
        <Image
          src="/images/productivity.png"
          alt="Productivity Chart"
          fill
          className="object-contain drop-shadow-lg"
        />
      </div>
    </motion.div>
  </div>

  {/* Bottom Cards */}
  <motion.div

    className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center"
  >
    {[
      {
        title: "Reduce No-Shows by 40%:",
        desc: "Automated reminders and confirmations keep your schedule full and reliable.",
      },
      {
        title: "AI-Powered Insights:",
        desc: "Get smart analytics on appointment trends to optimize team efficiency.",
      },
      {
        title: "Seamless Team Coordination:",
        desc: "Easily sync team calendars and assign tasks without manual tracking.",
      },
    ].map((card, i) => (
      <motion.div
        key={i}
        className="bg-[#BCE2FF] w-[350px] h-[250px] rounded-2xl p-8 text-left mb-2 shadow-[4px_4px_20px_#00000040] hover:shadow-[6px_6px_25px_#00000040] transition-all duration-300 flex flex-col justify-center"
      >
        <h3 className="text-xl font-semibold text-[#000000] mb-2">
          {card.title}
        </h3>
        <p className="text-[#797A7D] text-base leading-relaxed">{card.desc}</p>
      </motion.div>
    ))}
  </motion.div>
</motion.section>





<section
  className="w-full flex flex-col items-center justify-center text-center py-20 px-6 font-[Poppins]"
  style={{
    background: "linear-gradient(to bottom, #0097DA 0%, #00BAF2 50%, #8FDAF8 100%)",
  }}
>
  {/* Heading */}
  <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6">
    Ready to Automate Your Scheduling?
  </h1>

  {/* Subtext */}
  <p className="text-white/90 text-lg max-w-2xl leading-relaxed mb-10">
    Empower your business with intelligent appointment automation. Save time,
    reduce cancellations, and deliver a seamless experience to every client.
  </p>

  {/* CTA Button */}
  <button className="bg-white text-[#01A0E0] font-semibold text-lg px-8 py-4 rounded-lg shadow-md hover:bg-[#E8F6FF] transition-all duration-300">
    Start Your Free Trial
  </button>
</section>

      <Footer />
    </>
  );
}
