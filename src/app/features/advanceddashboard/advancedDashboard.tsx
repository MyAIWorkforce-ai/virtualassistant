"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export default function AdvancedDashboard() {
    const cards = [
    {
      icon: "/feature-images/booking.png",
      title: "Advanced CRM:",
      desc: "All client data, history, and interactions in one place.",
    },
    {
      icon: "/feature-images/chatbot.png",
      title: "AI Smart Calendar:",
      desc: "Color-coded, automatically updated, and synced across all devices.",
    },
    {
      icon: "/feature-images/online.png",
      title: "Analytics & Insights:",
      desc: "See daily call volumes, number of bookings, cancellations, no-show rates, and assistant performance.",
    },
    {
      icon: "/feature-images/transcripts.png",
      title: "Voice Memo & Transcripts Section:",
      desc: "Quickly review what was said in any call or memo.",
    },
    {
      icon: "/feature-images/training.png",
      title: "Settings & Training:",
      desc: "Tailor your AI to match your services, prices, and tone.",
    },
    {
      icon: "/feature-images/front-end.png",
      title: "Front-End Prompts:",
      desc: "Easily update what your AI says to clients on the phone, website, or chat — no tech skills required.",
    },
    {
      icon: "/feature-images/coverage.png",
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

           {/*  FIRST SECTION  */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
>
  {/* Background Image */}
  <Image
    src="/feature-images/dashboard-image1.png"
    alt="dashboard-image"
    fill
    priority
    sizes="100vw"
    className="object-cover object-left"
  />

  {/* Card */}
  <div
    className="bg-[#1055A3]/[0.51] backdrop-blur-xl mt-12 p-8 text-white shadow-lg 
               max-w-full md:max-w-xl
               rounded-tr-[40px] rounded-br-[40px]
               mx-auto md:mx-0"   // <-- mx-auto for small devices, md:mx-0 keeps large screen layout
  >
    <div className="inline-block bg-white/80 text-[#0086B3] px-4 py-1 rounded-full text-xs font-medium mb-4 font-poppins">
      The heart of your AI operations
    </div>

    <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 font-poppins text-center md:text-left">
      Advanced Dashboard<br/> – Your Control Centre
    </h1>

    <p className="text-white/90 leading-relaxed mb-6 font-poppins text-center md:text-left">
      Take command of your AI operations with one simple, intelligent dashboard. Your Advanced Dashboard brings together client management, analytics, customization, and real-time control — giving you full visibility over how your AI communicates, books, and performs every day.
      It’s not just software — it’s your business’s central control hub.
    </p>

    {/* Buttons */}
    <motion.div
      className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Link href="https://admin.virtualassistant.com.au/register" target="_blank" rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-[230px] h-[50px] bg-white text-[#00A7DE] font-[500] text-[16px] leading-[100%] rounded-[6px] font-Poppins transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
        >
          Start your 14 Day Free Trial
        </motion.button>
      </Link>

      <Link href="https://calendar.app.google/g5bCnhaSJocufjFr5" target="_blank" rel="noopener noreferrer">
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
  <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
    <div></div>
  </div>
</motion.section>

{/* SECOND SECTION */}
 <motion.section
                className="relative flex flex-col md:flex-row items-center justify-between w-full min-h-screen bg-cover bg-center px-6 md:px-12 py-20"
                style={{
                    backgroundImage: "url('/feature-images/dashboard-image2.svg')",
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
                            src="/feature-images/dashboard-image3.png"
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
  <motion.div className="max-w-5xl mx-auto text-center mb-8">
    <h2 className="font-Poppins font-bold text-[36px] text-[#000000] leading-[100%]">
      Key Capabilities
    </h2>
    <p className="font-Poppins font-normal text-[16px] text-[#797A7D] leading-[100%] mt-2">
      Your dashboard pulls everything together into one powerful, easy-to-use system.
    </p>
  </motion.div>

  {/* Cards Section */}
  <div className="max-w-[1296px] mx-auto flex flex-col gap-2">
   {cards.map((card, index) => {
  const bgColors = ["#FFFFFF", "#F1FAFD", "#E9F6FF", "#F8FCFE"];
  const bgColor = bgColors[index % bgColors.length];

  return (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{ backgroundColor: bgColor }}
      className="
        w-full 
        rounded-[20px] 
        shadow-md 
        flex 
        items-start md:items-center 
        gap-3 sm:gap-6 
        px-4 sm:px-6 md:px-8 
        py-4 
      "
    >
      <div className="w-10 h-10 shrink-0 flex items-center justify-center">
        <Image src={card.icon} alt={card.title} width={40} height={40} />
      </div>

      <div className="flex flex-col">
        <h3 className="font-Poppins font-semibold text-[18px] sm:text-[20px] text-[#000] leading-[120%]">
          {card.title}
        </h3>

        <p className="font-Poppins text-[14px] sm:text-[16px] text-[#333] leading-[140%] mt-1">
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
  className="relative w-full py-15 bg-cover bg-center bg-gradient-to-r from-[#afd7f5] to-[#FFFFFF]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px]" />

  <div
    className="
      relative z-10 
      flex flex-col md:flex-row 
      items-center md:items-center
      justify-center 
      gap-10 md:gap-16 
      px-4 sm:px-6 md:px-12 
      py-10 md:py-20
      max-w-7xl mx-auto
    "
  >
    {/* RIGHT TEXT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        text-left 
        max-w-2xl
        w-full
        md:w-auto
      "
    >
      <h2 className="font-poppins font-bold text-[#00A7DE] 
        text-2xl sm:text-3xl md:text-[48px] 
        leading-[150%] mb-3 md:mb-3">
        Why Choose the Advanced <br /> Dashboard?
      </h2>

      <ul className="
        text-[#797A7D] 
        font-poppins 
        text-[14px] sm:text-[16px] md:text-[20px] 
        leading-[150%]
      ">
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
      className="
        bg-[#D2EDFD]/90 
        border border-black/25 
        rounded-[20px] 
        p-6 sm:p-8 md:p-12 
        w-full sm:w-[90%] md:w-[400px] 
        shadow-md 
        flex flex-col 
        items-center text-center
      "
    >
      <h3
        className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-4"
      >
        Customization & Branding
      </h3>

      <p className="
        text-[#797A7D] 
        font-poppins 
        text-left 
        text-sm sm:text-base md:text-[16px] 
        leading-relaxed
      ">
        Your dashboard isn’t just functional — it’s an extension of your brand.
        Change themes, upload assets, and adjust language so every touchpoint 
        feels consistent with your identity. Your clients see professionalism. 
        You see total control.
      </p>
    </motion.div>
  </div>
</motion.section>

            {/* FIFTH SECTION */}
 <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col items-center justify-center text-center py-16 px-6 font-Poppins"
                style={{
                    background: "linear-gradient(to bottom, #0097DA 0%, #00BAF2 50%, #8FDAF8 100%)",
                }}
            >
                <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
                 Ready to Take Control?
                </h1>
                <p className="text-white/90 text-lg max-w-2xl leading-relaxed mb-8">
Your business runs better when everything connects. With the Advanced Dashboard, your AI assistant, analytics, and brand management come together — seamlessly.
                </p>
<a
  href="https://admin.virtualassistant.com.au/register"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-[#00A7DE] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#E8F6FF] transition text-sm font-poppins inline-block text-center"
>
  Start your 14 Day Free Trial
</a>
</motion.section>

        </>
    )
}



