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


const capabilities = [
    {
        title: "Always Available",
        desc: "Every call is answered instantly, day or night. No more missed clients, no more lost bookings.",
        icon: "/images/always.png",
    },
    {
        title: "Unlimited Capacity",
        desc: "Handles unlimited incoming calls and bookings 24/7, so your business is always open.",
        icon: "/images/unlimited.png",
    },
    {
        title: "Call Recording & Transcripts",
        desc: "Every conversation is recorded, summarised, and transcribed, giving you a clear record to review at any time.",
        icon: "/images/recording.png",
    },
    {
        title: "Professional, Consistent Service",
        desc: "Your AI greets clients politely, provides accurate information, and represents your brand exactly the way you want.",
        icon: "/images/consistent.png",
    },
    {
        title: "New Dedicated Number Provided",
        desc: "Each business receives its own dedicated number for a professional setup.",
        icon: "/images/dedicatednumber.png",
    },
    {
        title: "Call Forwarding Option",
        desc: "Prefer to keep your existing number? No problem, we provide clear step-by-step instructions.",
        icon: "/images/call.png",
    },
];


export default function AiReceptionist() {
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
            {/* ----------- HERO SECTION ----------- */}
            <motion.section
                className="relative flex items-center justify-center min-h-[100vh] bg-cover bg-center px-6 md:px-12"
                style={{
                    backgroundImage: "url('/images/ai-recep-frame1.svg')",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >


                {/* Content Container */}
                <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 py-20">
                    <div className="text-white max-w-lg space-y-6">
                        <div className="inline-block bg-[#E8F6FF] text-[#00A7DE] px-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide shadow-sm">
                            Smart, Seamless, Always On
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            AI Receptionist-24/7 Coverage
                        </h1>
                        <p className="text-lg text-gray-200">
                            Never miss a call or opportunity again. Deliver instant, professional phone support—day or night—with our
                            intelligent AI receptionist answering every customer, every time.
                        </p>
                        <button className="bg-white text-[#00A7DE] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-[#E8F6FF] transition text-sm sm:text-base">
                            Start your free trial
                        </button>
                    </div>
                </div>
            </motion.section>


            {/* SECOND SECTION */}
            <motion.section
                className="bg-[rgba(249,250,251,1)] py-16 md:py-18 flex justify-center px-4 mb:0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {/* Inner Container */}
                <div className="w-full max-w-7xl bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(221,243,251,1)] rounded-3xl p-4 md:p-16 flex flex-col items-center text-center">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Key Capabilities:
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
                            Empower your business with intelligent call management — always on,
                            always professional.
                        </p>
                    </div>

                    {/* Cards Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {capabilities.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className={`w-full max-w-[384px] h-[276px] mx-auto p-6 rounded-2xl shadow-md flex flex-col text-left ${index % 2 === 0
                                        ? "bg-[rgba(180,229,245,1)]"
                                        : "bg-[rgba(217,242,255,1)]"
                                    }`}
                            >
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="w-10 h-10 mb-4 object-contain"
                                />
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>;

            {/* THIRD SECTION */}

<motion.section className="bg-gradient-to-r from-[#B9E6F6] to-[#FEFFFF] py-20 "
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">

    <div className="md:w-[65%] space-y-6 text-center md:text-left">
       <h1 className="text-[#00A7DE]  font-poppins font-semibold text-[51px] leading-[40px] tracking-[0] text-center">
                            Integrations
                        </h1>
                        <h2 className="font-poppins font-semibold text-[51px] text-[#000000] leading-[40px] text-center">
                            Connect Seamlessly with  Your Favorite Tools
                        </h2>
                        <p className="font-poppins font-normal text-[16.71px] leading-[25.99px] tracking-[0] text-center text-[#797A7D]">
                            Sync your AI Receptionist with CRMs, booking apps, and communication platforms like:
                        </p>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
  
  <div className="space-y-3">
    <div className="flex items-center bg-gradient-to-r from-[#74D3F7] to-[#0097DA] rounded-lg p-2 shadow-md hover:shadow-lg transition w-[85%] sm:w-[75%]">
      <img src="/images/gc.png" alt="Icon 1" className="w-8 h-8 mr-2" />
      <p className="font-poppins text-white font-medium text-sm">Google Calendar</p>
    </div>

    <div className="flex items-center bg-gradient-to-r from-[#74D3F7] to-[#0097DA] rounded-lg p-2 shadow-md hover:shadow-lg transition w-[85%] sm:w-[75%]">
      <img src="/images/zoho.png" alt="Icon 2" className="w-8 h-8 mr-2" />
      <p className="font-poppins text-white font-medium text-sm">Zoho CRM</p>
    </div>

    <div className="flex items-center bg-gradient-to-r from-[#74D3F7] to-[#0097DA] rounded-lg p-2 shadow-md hover:shadow-lg transition w-[85%] sm:w-[75%]">
      <img src="/images/slack.png" alt="Icon 3" className="w-8 h-8 mr-2" />
      <p className="font-poppins text-white font-medium text-sm">Slack Notifications</p>
    </div>
  </div>

  <div className="space-y-3 mt-3 sm:mt-8">
    <div className="flex items-center bg-gradient-to-r from-[#74D3F7] to-[#0097DA] rounded-lg p-2 shadow-md hover:shadow-lg transition w-[85%] sm:w-[75%]">
      <img src="/images/hs.png" alt="Icon 4" className="w-8 h-8 mr-2" />
      <p className="font-poppins text-white font-medium text-sm">HubSpot</p>
    </div>

    <div className="flex items-center bg-gradient-to-r from-[#74D3F7] to-[#0097DA] rounded-lg p-2 shadow-md hover:shadow-lg transition w-[85%] sm:w-[75%]">
      <img src="/images/BW.png" alt="Icon 5" className="w-8 h-8 mr-2" />
      <p className="font-poppins text-white  font-medium text-sm">WhatsApp Business</p>
    </div>
  </div>
</div>
    </div>

    <div className="md:w-[35%] pl:0 mt-10 md:mt-0 flex justify-center">
      <img src="/images/integration-image.png" alt="Integration" className="rounded-2xl shadow-lg w-full max-w-[400px]" />
    </div>

  </div>
  </motion.section>

{/* FOURTH SECTION */}
<motion.section
  className="w-full bg-cover bg-center py-20 px-6 flex flex-col items-center justify-center"
  style={{
    backgroundImage: "url('/images/AI-Receptionist-frame3.svg')",
  }}
>

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="font-[Poppins] font-semibold text-[51px] leading-[43px] text-[#00A7DE] text-center mb-6"
  >
    How It Works
  </motion.h1>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="font-[Poppins] font-normal text-[16px] leading-[30px] text-[#797A7D] text-center max-w-2xl mb-16"
  >
    Seamless Call Handling with Human-Like Precision.
  </motion.p>

  {/* 3 Combined Icon + Card Columns */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
    {/* Column 1 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex flex-col items-center text-center"
    >
      <img
        src="/images/cr.png"
        alt="Step 1"
        className="w-[120px] h-[120px] mb-6 rounded-[12px] border-t-[2px] border-[#00BAF2]"
      />
      <div className="bg-white rounded-[12px] border-t-[4px] border-[#00BAF2] shadow-lg p-6">
        <h3 className="font-[Poppins] font-semibold text-xl text-[#00A7DE] mb-2">
          Step 1: Connect
        </h3>
        <p className="font-[Poppins] text-[#797A7D] text-sm leading-relaxed">
          Link your calendar and communication tools seamlessly for automation.
        </p>
      </div>
    </motion.div>

    {/* Column 2 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex flex-col items-center text-center"
    >
      <img
        src="/images/ts.png"
        alt="Step 2"
        className="w-[120px] h-[120px] mb-6 rounded-[12px] border-t-[2px] border-[#00BAF2]"
      />
      <div className="bg-white rounded-[12px] border-t-[4px] border-[#00BAF2] shadow-lg p-6">
        <h3 className="font-[Poppins] font-semibold text-xl text-[#00A7DE] mb-2">
          Step 2: Automate
        </h3>
        <p className="font-[Poppins] text-[#797A7D] text-sm leading-relaxed">
          Our AI intelligently manages calls, bookings, and reminders 24/7.
        </p>
      </div>
    </motion.div>

    {/* Column 3 */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="flex flex-col items-center text-center"
    >
      <img
        src="/images/fu.png"
        alt="Step 3"
        className="w-[120px] h-[120px] mb-6 rounded-[12px] border-t-[2px] border-[#00BAF2]"
      />
      <div className="bg-white rounded-[12px] border-t-[4px] border-[#00BAF2] shadow-lg p-6">
        <h3 className="font-[Poppins] font-semibold text-xl text-[#00A7DE] mb-2">
          Step 3: Grow
        </h3>
        <p className="font-[Poppins] text-[#797A7D] text-sm leading-relaxed">
          Save time, reduce cancellations, and focus on scaling your business.
        </p>
      </div>
    </motion.div>
  </div>
</motion.section>



{/* FIFTH SECTION */}
 <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center text-center py-20 px-6 font-[Poppins]"
      style={{
        background:
          "linear-gradient(to bottom, #0097DA 0%, #00BAF2 50%, #8FDAF8 100%)",
      }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-white text-4xl sm:text-5xl font-bold mb-6"
      >
        Ready to Automate Your Scheduling?
      </motion.h1>

      {/* 4 Subtitles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white/90 text-lg font-medium mt-8 mb-10 max-w-5xl"
      >
        <p>No training downtime or onboarding needed</p>
        <p>Works in multiple languages and accents</p>
        <p>Learns from every conversation</p>
        <p>Scales with your business automatically</p>
      </motion.div>

  <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="flex items-center gap-3 bg-white text-[#01A0E0] font-semibold text-lg px-8 py-4 rounded-lg shadow-md hover:bg-[#E8F6FF] transition-all duration-300"
>
  <img
    src="/images/cb.png"
    alt="Start Icon"
    className="w-6 h-6"
  />
  Start Today
</motion.button>

    </motion.section>




            <Footer />
        </>
    );
}
