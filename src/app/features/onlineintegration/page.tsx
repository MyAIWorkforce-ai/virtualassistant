"use client";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";


export default function OnlineIntegration() {

     const leftCards = [
    {
      icon: "/feature-images/booking.png",
      title: "Website Booking Script:",
      desc: "Engage clients insA simple copy-paste snippet lets clients book straight from your website.",
    },
    {
      icon: "/feature-images/online.png",
      title: "24/7 online:",
      desc: "Your clients can reach you anytime — and get answers instantly.",
    },
  ];

  const rightCards = [
    {
      icon: "/feature-images/chatbot.png",
      title: "Website Chatbot:",
      desc: "Seamlessly connect Clients can chat with your AI in real-time, get answers, and make bookings instantly.",
    },
    {
      icon: "/feature-images/coverage.png",
      title: "Phone coverage:",
      desc: "24/7 phone coverage that works as hard as you do. Never send a client to voicemail again.",
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
           
        <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative min-h-[100vh] flex items-end justify-start overflow-hidden"
>
  {/* Background Image */}
  <Image
    src="/feature-images/smartai-assistant.png"
    alt="AI Assistant"
    fill
    priority
    sizes="100vw"
    className="object-cover object-left"
  />
  <div className="absolute inset-0 bg-[#0FB4D8]/50"></div>

  <div className="bg-white/15 backdrop-blur-xl p-10 text-white shadow-lg
                  max-w-xl
                  rounded-tr-[45px] rounded-br-[45px]
                  mb-0">
    
    <div className="inline-block bg-white/80 text-[#0086B3] px-4 py-1 rounded-full text-xs font-medium mb-4 font-poppins">
     Connect Everywhere, Anytime
    </div>

    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 font-poppins">
      Online Integration
    </h1>

    <p className="text-white/90 leading-relaxed mb-6 font-poppins">
     Your AI assistant goes beyond calls — it seamlessly integrates with your website to deliver real-time bookings, instant responses, and 24/7 engagement.
    </p>

    <button className="bg-white text-[#00A7DE] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#E8F6FF] transition text-sm font-poppins">
      Start your free trial
    </button>
  </div>
</motion.section>





        {/*  SECOND SECTION*/}
 <motion.section
     className="relative flex flex-col md:flex-row bg-[#F9FAFB] items-center justify-between w-full min-h-screen bg-cover bg-center px-6 md:px-12 py-20"
                
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >

<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto ">
  {/* Left Section */}
  <div className="w-full md:w-1/2 px-15  align-center space-y-6">
    <h2 className="font-Poppins font-bold text-[36px] md:text-[48px] leading-[130%] text-[#00A7DE]">
      Productivity Benefits
    </h2>

    <ul className="space-y-2 pl-5">
      {[
        {
          heading: "Save Time:",
          desc: "Let your AI handle online bookings and messages automatically.",
        },
        {
          heading: "Increase Conversions:",
          desc: "Turn website visitors into confirmed clients 24/7.",
        },
        {
          heading: "Improve Customer Experiences:",
          desc: "Provide immediate, accurate responses on any platform.",
        },
        {
          heading: "Stay Connected:",
          desc: "Unify all client communication channels into one system.",
        },
      ].map((item, index) => (
        <motion.li
          key={index}
          className="flex items-baseline gap-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
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

<div className="w-full md:w-1/2 flex items-center justify-center relative">
  <Image
    src="/feature-images/on-image1.svg"
    alt="Productivity Illustration"
    width={500}
    height={480}
    className="object-contain"
  />
</div>
</div>

 </motion.section>
           

{/* THIRD SECTION */}
 <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full py-10 px-6 md:px-12 bg-gradient-to-r from-[#bdd8ec] to-[#FFFFFF]"
    >
      {/* Top Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="font-Poppins font-bold text-[36px] md:text-[48px] text-[#00A7DE] leading-[140%]">
          Key Capabilities
        </h2>
        <p className="text-[#333] font-Poppins text-[18px] mt-2">
          Your AI doesn’t just answer the phone — it works online too.
        </p>
      </motion.div>

    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
  {/* Left Column (White Cards) */}
  <div className="space-y-8 flex flex-col items-center">
    {leftCards.map((card, index) => (
      <motion.div
        key={index}
        className="w-[364px] h-[270px] bg-[#FFFFFF] rounded-[20px] shadow-md p-6 flex flex-col"
      >
        {/* Center Icon */}
        <div className="w-14 h-14 mb-4 flex items-center justify-center self-center">
          <Image
            src={card.icon}
            alt={card.title}
            width={56}
            height={56}
            className="object-contain object-center block"
          />
        </div>

        {/* Text Content */}
        <h3 className="text-[#000] font-Poppins text-left font-semibold text-[20px] mb-2">
          {card.title}
        </h3>
        <p className="text-[#333] font-Poppins text-left text-[15px] leading-[24px]">
          {card.desc}
        </p>
      </motion.div>
    ))}
  </div>

  {/* Right Column (Light Blue Cards) */}
  <div className="space-y-8 flex flex-col items-center">
    {rightCards.map((card, index) => (
      <motion.div
        key={index}
        className="w-[364px] h-[270px] bg-[#F1FAFD] rounded-[20px] shadow-md p-6 flex flex-col"
      >
        {/* Center Icon */}
        <div className="w-14 h-14 mb-4 flex items-center justify-center self-center">
          <Image
            src={card.icon}
            alt={card.title}
            width={56}
            height={56}
            className="object-contain object-center block"
          />
        </div>

        {/* Text Content */}
        <h3 className="text-[#000] font-Poppins text-left font-semibold text-[20px] mb-2">
          {card.title}
        </h3>
        <p className="text-[#333] font-Poppins text-left text-[15px] leading-[24px]">
          {card.desc}
        </p>
      </motion.div>
    ))}
  </div>
</div>

    </motion.section>

  
         {/* FORTH SECTION */}
              <motion.section
                  className="relative w-full py-15 bg-cover bg-center bg-gradient-to-r from-[#afd7f5] to-[#FFFFFF]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
              >
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 p-20 md:px-12 max-w-7xl mx-auto">
    {/* LEFT SIDE CARD */}
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
         className="bg-[#D2EDFD]/90 border border-black/25 rounded-[20px] p-8 w-full md:w-[400px] shadow-md flex flex-col items-center text-center"
                      >
                          <h3
                              className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4">
                              Real-World Example
                          </h3>
 <p className="text-[#797A7D] font-poppins text-base px-6 text-left md:text-[16px] leading-relaxed">
A physiotherapy clinic installs the AI booking script on their website.Clients now book sessions directly online, receive instant confirmations, and chat with the AI for pre-visit questions.Within weeks, the clinic sees a 25% increase in bookings and fewer
 missed calls — all while staff focus more on care and less on admin.
                          </p>
                      </motion.div>
  
                      {/* RIGHT SIDE CONTENT */}
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                          className="text-left max-w-2xl">
                          <h2 className="font-poppins font-bold text-[#00A7DE] text-3xl md:text-[48px] leading-[150%] mb-4">
                             Why Choose Online <br />Integration? 
                          </h2>
  
                          <ul className=" text-[#797A7D] text-[16px] text-lg md:text-[20px] font-poppins leading-[150%]">
                              <li>• Keeps your business accessible 24/7</li>
                              <li>• Turns your website into a fully functional virtual assistant</li>
                              <li>• Reduces manual admin work and missed opportunities</li>
                              <li>• Integrates easily with existing tools and systems</li>
                              <li>• Enhances client satisfaction with instant support</li>
                          </ul>
                      </motion.div>
                  </div>
              </motion.section>

            {/* FIFTH SECTION */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col items-center justify-center text-center py-20 px-6 font-Poppins"
                style={{
                    background: "linear-gradient(to bottom, #0097DA 0%, #00BAF2 50%, #8FDAF8 100%)",
                }}
            >
                {/* Heading */}
                <h1 className="text-white text-4xl sm:text-5xl  font-poppins font-bold mb-4">
                  Ready to Bring Your AI Online?
                </h1>

                {/* Subtext */}
                <p className="text-white/90 text-lg max-w-2xl  font-poppins leading-relaxed mb-10">
                  Let your website do more — answer questions, take bookings, and connect clients with your business anytime, anywhere.
                </p>

                <button className="bg-white text-[#01A0E0]  font-poppins font-semibold text-lg px-8 py-4 rounded-lg shadow-md hover:bg-[#E8F6FF] transition-all duration-300">
                    Start Your Free Trial
                </button>
            </motion.section>

            {/* Footer */}
            <Footer />
        </>
    )
}



