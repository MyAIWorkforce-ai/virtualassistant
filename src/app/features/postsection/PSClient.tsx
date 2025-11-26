"use client";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export default function PSClient() {

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

            {/*  FIRST SECTION  */}
        <motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative min-h-[100vh] flex items-end justify-start overflow-hidden"
>
  {/* Background Image */}
  <Image
    src="/feature-images/post-section.png"
    alt="AI Assistant"
    fill
    priority
    sizes="100vw"
    className="object-cover object-left"
  />
  {/* Card */}
  <div className="bg-[#59727B]/15 backdrop-blur-xl py-8 px-14 text-white shadow-lg
                  max-w-md 
                  rounded-tr-[80px] 
                   mb-0 mx-auto ml-0">
    
 <div className="inline-block bg-white/80 text-[#0086B3] px-4 py-1 rounded-full text-xs font-medium mb-4 font-poppins">
    Wrap Up Every Session with Ease
  </div>

{/* Heading */}
<h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 font-poppins">
 Post-Session Tools
</h1>

<p className="text-white/90 leading-relaxed mb-6 font-poppins">
Keep every client interaction organized, documented, and accessible. Your Virtual AI Assistant makes it effortless to record notes, voice memos, and attachments after each session — building a complete client history that improves service quality and saves you time.
</p>
 <motion.div className="flex gap-4" 
                   initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.2 }} >
 <motion.button 
 whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }} 
  className="w-[159px] h-[50px] bg-white text-[#00A7DE] font-[500] text-[12px] leading-[22.5px] rounded-[6px] font-Poppins transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]" > 
  Start 14 Day Free Trial
   </motion.button> 
   <motion.button 
   whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }} 
    className="w-[159px] h-[50px] bg-white text-[#00A7DE] font-[500] text-[16px] leading-[100%] rounded-[6px] flex items-center justify-center gap-2 font-Poppins transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]" >
     Book a Demo 
     <Image src="/industries-images/reuse-icons/demo-button.png" alt="demo" width={14} height={14} priority /> 
     </motion.button>
      </motion.div>
  </div>
</motion.section>
            {/*  SECOND SECTION*/}
            <motion.section className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 bg-[#F9FAFB]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                   style={{
        backgroundImage: "url('/feature-images/post-section-bg.png')",
    }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-[90%] md:w-[759px] bg-white rounded-[20px] shadow-lg text-center p-10 mb-20"
                >
                    <h2 className="font-poppins font-bold text-3xl md:text-[36px] text-gray-900 mb-4">
                        Key Capabilities:
                    </h2>
                    <p className="font-poppins text-[#797A7D] text-base md:text-[16px] leading-relaxed max-w-2xl mx-auto">
Smart tools that help you stay organized, informed, and always ready for the next appointment.
                    </p>
                </motion.div>

                {/* Capability Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
                    {[
                        {
                            icon: "/feature-images/client-notes.png",
                            title: "1. Client Notes",
                            desc: "Add written notes after each appointment."
                        },
                        {
                            icon: "/feature-images/coverage.png",
                            title: "2. Voice Memos ",
                            desc: "Record a quick voice memo instead of typing, it’s transcribed, summerised and attached automatically"
                        },
                        {
                            icon: "/feature-images/documents.png",
                            title: "3. Photos & Documents",
                            desc: "Upload forms, images, or documents directly to the client’s record."
                        },
                        {
                            icon: "/feature-images/history.png",
                            title: "4. Complete Client History",
                            desc: "All notes, memos, and documents stay attached to each appointment, making future sessions smoother and more personalised"
                        },
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="flex flex-col items-center   text-center"
                        >
                            <div
                                className="bg-white rounded-[15px]  shadow-lg p-6 flex flex-col justify-center"
                                style={{
                                    width: "278px",
                                    height: "260px",
                                    boxShadow: "0 4px 15px rgba(115, 113, 113, 0.25)",
                                }}
                            >
                                <div className="flex justify-center mb-3">
                                    <img
                                        src={card.icon}
                                        alt={card.title}
                                        className="w-12 h-12 object-contain mx-auto"
                                    />
                                </div>
                                <h3 className="font-Poppins font-semibold text-[20px] text-[#000000] mb-2">
                                    {card.title}
                                </h3>
                                <p className="font-Poppins text-[16px] text-[#797A7D] leading-[24px]">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* THIRD SECTION */}
            <motion.section
                className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen bg-cover bg-center px-6 md:px-12 py-20"
                style={{
                    backgroundImage: "url('/feature-images/postsection-bg.svg')",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
     <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-2">
                    {/* Left Section */}
                  <div className="w-full md:w-2/5   space-y-8">
    <h2 className="font-Poppins font-bold text-[36px] md:text-[48px] leading-[150%] text-[#00A7DE]">
      Productivity & Business Impact
    </h2>

    <ul className=" pl-2"> 
      {[
        {
          heading: "Reduce Admin Time:",
          desc: "Save hours every week by replacing manual note-taking and filing.",
        },
        {
          heading: "Improve Accuracy:",
          desc: "Automatic organization reduces the risk of missing or misplaced data.",
        },
        {
          heading: "Enhance Client Trust:",
          desc: "Clients appreciate your precision and recall in follow-ups.",
        },
        {
          heading: "Ensure Continuity:",
          desc: "Perfect for multi-staff environments or long-term client relationships.",
        },
        {
          heading: "Boost Professionalism:",
          desc: "Arrive at every session prepared and informed.",
        },
      ].map((item, index) => (
        <motion.li
          key={index}
          className="flex items-baseline gap-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="w-[6px] h-[6px] bg-[#000] rounded-full shrink-0 mt-[3px]" />
          <p className="text-[#333] font-Poppins text-[15px] leading-[26px]">
            <span className="font-semibold text-[#000]">{item.heading}</span>{" "}
            {item.desc}
          </p>
        </motion.li>
      ))}
    </ul>
  </div>

                    {/* Right Section */}
                    <div className="w-full md:w-4/5 flex justify-center relative">
                        <Image
                            src="/feature-images/productivity-image.svg"
                            alt="Productivity Illustration"
                            width={650}
                            height={500}
                        />
                    </div>
                </div>

            </motion.section>


            {/* FOURTH SECTION */}
            <motion.section
                className="w-full bg-cover bg-center py-20 px-6 flex flex-col items-center justify-center"
                style={{
                    background: "linear-gradient(#FFFFFF, #E9F6FF)",
                }}
            >
                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-Poppins font-semibold text-[51px] leading-[43px] text-[#00A7DE] text-center mb-2"
                >
                    How It Works
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="font-Poppins font-normal text-[16px] leading-[30px] text-[#797A7D] text-center max-w-2xl mb-16"
                >
                    A simple three-step process to keep every session organized.
                </motion.p>

                {/* 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl">
                    {[
                        {
                            title: "Instant Support",
                            desc: "Clients get the answers they need immediately, even after hours.",
                        },
                        {
                            title: "Reduced Admin Load",
                            desc: "Fewer phone calls and emails for your team to handle.",
                        },
                        {
                            title: "Higher Conversion Rates",
                            desc: "Clients feel confident booking after getting clear, helpful information.",
                        },
                    ].map((card, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div
                                className="bg-white  shadow-lg p-6 flex flex-col justify-center"
                                style={{
                                    width: "278px",
                                    height: "202px",
                                    boxShadow: "0 4px 15px rgba(115, 113, 113, 0.25)",
                                }}
                            >
                                <h3 className="font-Poppins font-semibold text-[20px] text-[#000000] mb-3">
                                    {card.title}
                                </h3>
                                <p className="font-Poppins text-[16px] text-[#797A7D] leading-[24px]">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
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
                <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
                    Ready to Streamline Your Follow-Ups?
                </h1>

                {/* Subtext */}
                <p className="text-white/90 text-lg max-w-2xl leading-relaxed mb-8">
                    Let your AI handle post-session management — from note-taking to file organization. Focus on your clients, not your paperwork.
                </p>
<a
  href="https://admin.virtualassistant.com.au/register"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-[#00A7DE] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#E8F6FF] transition text-sm font-poppins inline-block text-center"
>
  Start your free trial
</a>
            </motion.section>

        </>
    )
}



