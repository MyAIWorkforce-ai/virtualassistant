"use client";

import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
export default function SAIAClient() {
    const capabilities = [
        {
            icon: "/feature-images/instant-answer.png",
            title: "Answers Questions Instantly:",
            description: "From pricing and services to directions and availability.",
        },
        {
            icon: "/feature-images/schedulinggg.png",
            title: "Handles changes smoothly:",
            description: "Reschedules or cancels without disrupting your day.",
        },
        {
            icon: "/feature-images/personalized.png",
            title: "Explains Your Services Clearly:",
            description: " Gives clients confidence in booking.",
        },
        {
            icon: "/feature-images/escalation.png",
            title: "Customizable Personality: ",
            description: "You choose the tone and style — friendly, professional, casual, or a mix.",
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


            {/*  FIRST SECTION  */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
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

  <div className="relative z-10 w-full max-w-6xl mx-auto mt-20 px-4 sm:px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
    <div className="w-full h-full"></div>

    <div className="bg-[rgba(82,85,90,0.35)] backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-[30px] text-white shadow-lg max-w-full md:max-w-xl mx-auto md:mx-0">
      <div className="inline-block bg-white/80 text-[#0086B3] px-4 py-1 rounded-full text-xs font-medium mb-4 font-poppins">
        AI that talks, helps, and converts
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-tight md:leading-tight mb-4 font-poppins">
        Smart AI Assistant<br />for Clients
      </h1>

      <p className="text-white/90 leading-relaxed mb-6 font-poppins text-sm sm:text-base">
        Your Smart AI Assistant answers questions, explains services, and 
        manages client requests with a tone and personality that fits your 
        brand perfectly. Give your clients the clarity they need, right when 
        they need it.
      </p>

{/* BUTTONS */}
<motion.div
  className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <Link
    href="https://admin.virtualassistant.com.au/register" target="_blank" rel="noopener noreferrer"
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-[159px] h-[50px] bg-white text-[#00A7DE] font-[500] text-[12px] leading-[22.5px] rounded-[6px] font-Poppins transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
    >
      Start 14 Day Free Trial
    </motion.button>
  </Link>

  <Link
    href="https://calendar.app.google/g5bCnhaSJocufjFr5" target="_blank" rel="noopener noreferrer"
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-[159px] h-[50px] bg-white text-[#00A7DE] font-[500] text-[16px] leading-[100%] rounded-[6px] flex items-center justify-center gap-2 font-Poppins transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
    >
      Book a Demo
      <Image
        src="/industries-images/reuse-icons/demo-button.png"
        alt="demo"
        width={14}
        height={14}
        priority
      />
    </motion.button>
  </Link>
</motion.div>

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
  className="relative w-full py-20 bg-cover bg-center"
  style={{ backgroundImage: "url('/feature-images/smartai-instant2.svg')" }}
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
      className="
        bg-[#CBE8FF]/90 border border-black/25 rounded-[20px]
        p-6 sm:p-10 md:p-16     /* smaller padding mobile */
        w-full md:w-[450px]
        h-auto md:h-[370px]     /* auto height mobile */
        shadow-md flex flex-col items-center text-center
      "
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4">
        Real-World Example
      </h3>

      <p className="text-[#797A7D] font-poppins text-sm sm:text-base md:text-[16px] leading-relaxed">
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
      className="text-left max-w-2xl"
    >
      <h2 className="font-poppins font-bold text-[#00A7DE]
        text-2xl sm:text-3xl md:text-[48px]
        leading-[150%] mb-5"
      >
        Why Choose the Smart <br /> AI Assistant for Clients?
      </h2>

      <ul className="text-[#797A7D]
        text-base sm:text-lg md:text-[24px]
        font-poppins leading-[150%]"
      >
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
<motion.section
  className="relative flex flex-col items-center justify-center w-full min-h-full py-10 bg-[#F9FAFB]"
  style={{ backgroundImage: "url('/feature-images/forth-section-bg.png')" }}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <motion.h1
    className="
      font-Poppins text-[#000000] font-bold 
      text-[24px] sm:text-[28px] md:text-[36px]   {/* mobile smaller */}
      mb-10 text-center
    "
  >
    Productivity & Client Benefits
  </motion.h1>

  {/* Cards Section */}
  <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
    {capabilities.map((items, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="
          bg-white shadow-lg shadow-[rgba(0,0,0,0.25)]
          px-6 py-6 rounded-xl
          mx-auto                      {/* center mobile */}
          w-[90%] sm:w-[350px] md:w-[494px]   {/* smaller on mobile */}
          h-auto                       {/* allow auto height for mobile */}
          text-center sm:text-left
        "
      >
        <h2 className="font-poppins font-semibold text-[18px] sm:text-[20px] mb-2 text-black">
          {items.title}
        </h2>
        <p className="font-poppins font-normal text-[14px] sm:text-[16px] text-[#797A7D] leading-relaxed">
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
  className="w-full flex flex-col items-center justify-center text-center py-20 px-6 font-Poppins"
  style={{
    background: "linear-gradient(to bottom, #0097DA 0%, #00BAF2 50%, #8FDAF8 100%)",
  }}
>
  {/* Heading */}
  <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
    Ready to Empower Your Clients?
  </h1>

  {/* Subtext */}
  <p className="text-white/90 text-lg max-w-2xl leading-relaxed mb-8">
 Offer instant, intelligent, and on-brand assistance — anytime, anywhere. Let your AI handle questions and 
 interactions while you focus on delivering great service.
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



