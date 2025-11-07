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
} from "../../_components/animations/variantsphyso"

export default function OnlineIntegration() {


    const cards = [
    {
      icon: "/images/advan.png",
      title: "Advan CRM:",
      desc: "All client data, history, and interactions in one place.",
    },
    {
      icon: "/images/smart-calender.png",
      title: "AI Smart Calendar:",
      desc: "Color-coded, automatically updated, and synced across all devices.",
    },
    {
      icon: "/images/analytics.png",
      title: "Analytics & Insights:",
      desc: "See daily call volumes, number of bookings, cancellations, no-show rates, and assistant performance.",
    },
    {
      icon: "/images/transcripts.png",
      title: "Voice Memo & Transcripts Section:",
      desc: "Quickly review what was said in any call or memo.",
    },
    {
      icon: "/images/training.png",
      title: "Settings & Training:",
      desc: "Tailor your AI to match your services, prices, and tone.",
    },
    {
      icon: "/images/front-end.png",
      title: "Front-End Prompts:",
      desc: "Easily update what your AI says to clients on the phone, website, or chat — no tech skills required.",
    },
    {
      icon: "/images/customisble.png",
      title: "Fully Customisable Branding:",
      desc: "Upload your business logo, set your theme colours, and brand the dashboard to feel like your own system — not just another generic tool.",
    },
  ];

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

           {/*  FIRST SECTION  */}
            {/* Hero Section */}
            <motion.section className="relative flex  w-full min-h-screen bg-cover bg-center px-6 md:px-12 py-20"
                style={{
                    backgroundImage: "url('/images/dashboard-image1.png')",
                }}
                 initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Context Container */}
                <motion.div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 pt-50 mx-auto"
                 initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                    <motion.div className="text-white max-w-lg space-y-6">
                        <motion.div className="inline-block bg-[#E8F6FF] text-[#00A7DE] p-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide shadow-sm">
                            The heart of your AI operations
                        </motion.div>
                        <motion.h1 className="text-3xl md:text-5xl font-bold eading-tight">
                          Advanced Dashboard – Your Control Centre
                        </motion.h1>
                        <motion.p className="text-lg  text-gray-200">
                        Take command of your AI operations with one simple, intelligent dashboard. Your Advanced Dashboard brings together client management, analytics, customization, and real-time control — giving you full visibility over how your AI communicates, books, and performs every day.
It’s not just software — it’s your business’s central control hub.
                        </motion.p>
                        <motion.button className="bg-white text-[#00A7DE] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-[#E8F6FF] transition text-sm sm:text-base">
                            Start your free trial
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.section>


{/* SECOND SECTION */}
 <motion.section
                className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen bg-cover bg-center px-6 md:px-12 py-20"
                style={{
                    backgroundImage: "url('/images/dashboard-image2.svg')",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-2">
      {/* Right Section */}
                    <div className="w-full md:w-3/5 flex justify-center relative">
                        <Image
                            src="/images/dashboard-image3.png"
                            alt="Productivity Illustration"
                            width={500}
                            height={500}
                        />
                    </div>
                    {/* Left Section */}
<div className="w-full md:w-2/5 text-left mr-10 space-y-6">
<h2 className="font-[Poppins] font-bold text-[36px] md:text-[45px] text-[#00A7DE] whitespace-nowrap">
  Productivity Benefits
</h2>

  <ul className="space-y-2 px-1">
    {[
      {
        heading: "Complete Control:",
        desc: "Save hours every week by replacing manual note-taking and filing.",
      },
      {
        heading: "Total Visibility:",
        desc: "Adjust, monitor, and train your AI anytime.",
      },
      {
        heading: "Full Cusomization:",
        desc: "Access all client data, analytics, and performance reports in one place.",
      },
      {
        heading: "Smart Operations:",
        desc: "Analyze results, optimize processes, and continually improve.",
      },
      {
        heading: "Seamless Experience:",
        desc: "One clean dashboard replaces multiple tools and platforms.",
      },
    ].map((item, index) => (
      <motion.li
        key={index}
        className="flex items-baseline gap-2"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <div className="w-[6px] h-[6px] bg-[#000] rounded-full shrink-0 mt-[3px]" />
        <p className="text-[#333] font-Poppins text-[15px] leading-[22px]">
          <span className="font-semibold text-[#000]">{item.heading}</span>{" "}
          {item.desc}
        </p>
      </motion.li>
    ))}
  </ul>
</div>
          
  </div>
  </motion.section>

{/* THIRD SECTION */}
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="w-full py-20 px-6 md:px-12 bg-gradient-to-r from-[#FFFFFF] to-[#c2ddf1]"
>
  {/* Header Section */}
  <motion.div className="max-w-5xl mx-auto text-center mb-16">
    <h2 className="font-Poppins font-bold text-[36px] text-[#000000] leading-[100%]">
      Key Capabilities
    </h2>
    <p className="font-Poppins font-normal text-[16px] text-[#797A7D] leading-[100%] mt-4">
      Your dashboard pulls everything together into one powerful, easy-to-use system.
    </p>
  </motion.div>

  {/* Cards Section */}
  <div className="max-w-[1296px] mx-auto flex flex-col gap-6">
    {cards.map((card, index) => {
      // Define your custom colors
      const bgColors = ["#FFFFFF", "#F1FAFD", "#E9F6FF", "#F8FCFE"];
      const bgColor = bgColors[index % bgColors.length]; // cycle through colors

      return (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02, y: -3 }}
          transition={{ type: "spring", stiffness: 200 }}
          style={{ backgroundColor: bgColor }}
          className="w-full md:w-[1200px] h-[80px] rounded-[20px] shadow-md flex items-center gap-4 px-6 md:px-8"
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 shrink-0">
            <Image src={card.icon} alt={card.title} width={40} height={40} />
          </div>

          {/* Text Content */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-3 text-left">
            <h3 className="font-Poppins font-semibold text-[20px] text-[#000000] leading-[100%]">
              {card.title}
            </h3>
            <p className="font-Poppins font-normal text-[16px] text-[#333] leading-[100%] md:pl-3">
              {card.desc}
            </p>
          </div>
        </motion.div>
      );
    })}
  </div>
</motion.section>

  
         {/* FORTH SECTION */}
 <motion.section
                  className="relative w-full py-24 bg-cover bg-center bg-gradient-to-r from-[#afd7f5] to-[#FFFFFF]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 p-20 md:px-12 max-w-7xl mx-auto">



                      {/* RIGHT SIDE CONTENT */}
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          className="text-left max-w-2xl">
                          <h2 className="font-poppins font-bold text-[#00A7DE] text-3xl md:text-[48px] leading-[150%] mb-6">
                            Why Choose the Advanced  <br />Dashboard? 
                          </h2>
  
                          <ul className="space-y-4 text-[#797A7D] text-[16px] text-lg md:text-[20px] font-poppins leading-[150%]">
                              <li>• Combines CRM, analytics, and customization in one hub</li>
                              <li>• Empowers you to manage and train your AI in real time</li>
                              <li>• Gives you transparency into every client and assistant interaction</li>
                              <li>• Adapts to your business — from solo use to large-scale deployment</li>
                              <li>• Keeps your brand identity front and center</li>
                          </ul>
                      </motion.div>
    {/* LEFT SIDE CARD */}
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
         className="bg-[#D2EDFD]/90 border border-black/25 rounded-[20px] p-12 w-full md:w-[400px] shadow-md flex flex-col items-center text-center"
                      >
                          <h3
                              className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4">
                            Customization & Branding
                          </h3>
  
                          <p className="text-[#797A7D] font-poppins  text-base md:text-[16px] leading-relaxed">
Your dashboard isn’t just functional — it’s an extension of your brand. Change themes, upload assets, and adjust language so every touchpoint feels consistent with your identity.
Your clients see professionalism. You see total control.
                          </p>
                      </motion.div>
  
                  </div>
 </motion.section>

            {/* FIFTH SECTION */}
 <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col items-center justify-center text-center py-20 px-6 font-[Poppins]"
                style={{
                    background: "linear-gradient(to bottom, #0097DA 0%, #00BAF2 50%, #8FDAF8 100%)",
                }}
            >
                {/* Heading */}
                <h1 className="text-white text-4xl sm:text-5xl font-bold mb-6">
                 Ready to Take Control?
                </h1>

                {/* Subtext */}
                <p className="text-white/90 text-lg max-w-2xl leading-relaxed mb-10">
Your business runs better when everything connects. With the Advanced Dashboard, your AI assistant, analytics, and brand management come together — seamlessly.
                </p>

                <button className="bg-white text-[#01A0E0] font-semibold text-lg px-8 py-4 rounded-lg shadow-md hover:bg-[#E8F6FF] transition-all duration-300">
                    Start Your Free Trial
                </button>
</motion.section>

            {/* Footer */}
<Footer />
        </>
    )
}



