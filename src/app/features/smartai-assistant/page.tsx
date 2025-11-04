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

export default function SmartAIassistant() {
    const capabilities = [
        {
            icon: "/images/instant-answer.png",
            title: "Answers Questions Instantly:",
            description: "From pricing and services to directions and availability.",
        },
        {
            icon: "/images/scheduling.png",
            title: "Handles changes smoothly:",
            description: "Reschedules or cancels without disrupting your day.",
        },
        {
            icon: "/images/personalized.png",
            title: "Explains Your Services Clearly:",
            description: " Gives clients confidence in booking.",
        },
        {
            icon: "/images/escalation.png",
            title: "Customizable Personality: ",
            description: "You choose the tone and style — friendly, professional, casual, or a mix.",
        },
    ];

     const  clientBenefiits =[
        {title:"Instant Support",
            description:"Clients get the answers they need immediately, even after hours."
        },
          {title:"Consistent Messaging",
            description:"Every response aligns with your brand voice and standards."
        },
          {title:"Reduced Admin Load",
            description:"Fewer phone calls and emails for your team to handle."
        },
          {title:"Higher Conversion Rates",
            description:"Clients feel confident booking after getting clear, helpful information."
        }
    ]

   
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
            <motion.section
                className="relative flex items-center justify-center min-h-[100vh] bg-contain bg-center bg-no-repeat px-6 md:px-12"
                style={{
                    backgroundImage: "url('/images/smartai-assistant.png')",
                    backgroundSize: "120% auto",
                    //    backgroundSize: "contain",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Content Container */}
                <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row-reverse items-center justify-between gap-10 py-20">
                    <div className="text-white max-w-lg space-y-6">
                        <div className="inline-block bg-[#E8F6FF] text-[#00A7DE] px-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide shadow-sm">
                            AI that talks, helps, and converts
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                            Smart AI Assistant for Clients
                        </h1>
                        <p className="text-lg text-gray-200">
                            Your Smart AI Assistant answers questions, explains services, and manages client requests with a tone and personality that
                            fits your brand perfectly. Give your clients the clarity they need, right when they need it.
                        </p>
                        <button className="bg-white text-[#00A7DE] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-[#E8F6FF] transition text-sm sm:text-base">
                            Start your free trial
                        </button>
                    </div>
                </div>
            </motion.section>


            {/*  SECOND SECTION*/}
            <motion.section className="relative flex flex-col items-center justify-center w-full min-h-screen py-24 bg-[#F9FAFB]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-[90%] md:w-[759px] bg-gradient-to-b from-[#CAE7FF] to-[#EDF6F9] rounded-[20px] shadow-lg text-center p-10 mb-20"
                >
                    <h2 className="font-poppins font-bold text-3xl md:text-[36px] text-gray-900 mb-4">
                        Key Capabilities:
                    </h2>
                    <p className="font-poppins text-[#797A7D] text-base md:text-[16px] leading-relaxed max-w-2xl mx-auto">
                        Empower your clients with intelligent, responsive, and on-brand support.
                        Smart, adaptable, and always available — built to enhance every client interaction.
                    </p>
                </motion.div>

                {/* Capability Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[90%] max-w-5xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {capabilities.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-4 bg-gradient-to-b from-[#CAE7FF] to-[#EDF6F9] rounded-[20px] p-6 w-full h-[120px] shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex-shrink-0 w-14 h-14 relative">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-poppins font-semibold text-lg text-gray-800 mb-1">
                                    {item.title}
                                </h3>
                                <p className="font-poppins text-sm text-gray-600">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* THIRD SECTION */}
            <motion.section
                className="relative w-full py-24 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/smartai-instant2.svg')",
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-16 px-6 md:px-12 max-w-7xl mx-auto">

                    {/* LEFT SIDE CARD */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#CBE8FF]/90 border border-black/25 rounded-[20px] p-8 w-full md:w-[507px] shadow-md flex flex-col items-center text-center"
                    >
                        <div className="w-full h-64 relative mb-6 rounded-[16px] overflow-hidden">
                            <Image
                                src="/images/smartai-instant3.svg"
                                alt="AI Example"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3
                            className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4">
                            Real-World Example
                        </h3>

                        <p className="text-[#797A7D] font-poppins text-base md:text-[16px] leading-relaxed">
                            A new client visits your website late at night with questions about pricing and availability.
                            Your AI assistant instantly provides accurate details, suggests the best service package,
                            and offers to schedule an appointment. The client confirms on the spot — no waiting, no follow-up needed.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left max-w-2xl">
                        <h2 className="font-poppins font-bold text-[#00A7DE] text-3xl md:text-[48px] leading-[150%] mb-6">
                            Why Choose the Smart <br /> AI Assistant for Clients?
                        </h2>

                        <ul className="space-y-4 text-[#797A7D] text-lg md:text-[24px] font-poppins leading-[150%]">
                            <li>• 24/7 automated client engagement</li>
                            <li>• Personalized tone and experience</li>
                            <li>• Reduces staff workload</li>
                            <li>• Increases lead conversion</li>
                            <li>• Fits seamlessly into your current system</li>
                        </ul>
                    </motion.div>
                </div>
            </motion.section>


            {/* FOURTH SECTION */}
 <motion.section className="relative flex flex-col items-center justify-center w-full min-h-full py-10 bg-[#F9FAFB] "
  initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
  >
<motion.h1 className="font-[Poppins] text-[#000000] font-bold text-[36px] mb-10 ">
Productivity & Client Benefits  
</motion.h1>
 
 {/* cards Sections */}

<motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
    {capabilities.map((items, index)=>(
        <motion.div
        key={index}
         whileHover={{ scale: 1.05 }}
         transition={{ duration: 0.3 }}
         className="w-[494px] h-[162px] bg-white shadow-lg shadow-[rgba(0,0,0,0.25)] items-center justify-center p-4">
            <h2 className="font-poppins font-semibold text-[20px] text-black ">
                {items.title}
            </h2>
            <p className="font-poppins font-normal text-[16px] leading-[100%] tracking-[0] text-[#797A7D]">
                {items.description}
            </p>
            </motion.div>
    ))}

</motion.div>

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
    Ready to Empower Your Clients?
  </h1>

  {/* Subtext */}
  <p className="text-white/90 text-lg max-w-2xl leading-relaxed mb-10">
 Offer instant, intelligent, and on-brand assistance — anytime, anywhere. Let your AI handle questions and 
 interactions while you focus on delivering great service.
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



