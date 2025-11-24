"use client";
import Head from "next/head";
import { motion } from "framer-motion";
const capabilities = [
    {
        title: "Always Available",
        desc: "Every call is answered instantly, day or night. No more missed clients, no more lost bookings.",
        icon: "/feature-images/always.png",
    },
    {
        title: "Unlimited Capacity",
        desc: "Handles unlimited incoming calls and bookings 24/7, so your business is always open.",
        icon: "/feature-images/unlimited.png",
    },
    {
        title: "Call Recording & Transcripts",
        desc: "Every conversation is recorded, summarised, and transcribed, giving you a clear record to review at any time.",
        icon: "/feature-images/recording.png",
    },
    {
        title: "Professional, Consistent Service",
        desc: "Your AI greets clients politely, provides accurate information, and represents your brand exactly the way you want.",
        icon: "/feature-images/consistent.png",
    },
    {
        title: "New Dedicated Number Provided",
        desc: "Each business receives its own dedicated number for a professional setup.",
        icon: "/feature-images/dedicatednumber.png",
    },
    {
        title: "Call Forwarding Option",
        desc: "Prefer to keep your existing number? No problem, we provide clear step-by-step instructions.",
        icon: "/feature-images/call.png",
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
            {/*  FIRST SECTION  */}
            {/* ----------- HERO SECTION ----------- */}
      <motion.section
  className="relative flex items-center justify-between min-h-[100vh] px-0"
  style={{
    background: "linear-gradient(to right, #2A8FE0, #9BC7ED, #9BC7EC)",
    overflow: "hidden",
  }}
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
<div className="z-10 flex flex-col justify-center max-w-md md:max-w-lg px-4 md:px-6 py-20 text-white space-y-6">
  <div className="inline-block bg-[#E0F4FB] text-[#0086B3] px-3 py-1 rounded-full text-xs font-medium font-poppins mb-4 max-w-max">
    Your Business, Always Open
  </div>
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
    AI Receptionist-24/7 Coverage
  </h1>
  <p className="text-base md:text-lg text-gray-100 max-w-md">
    Never miss a Call, Booking or Opportunity again. Deliver instant, professional phone support—day or night—with our intelligent AI receptionist answering every customer, every time.
  </p>

  <a
    href="https://admin.virtualassistant.com.au/register"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-[#00A7DE] px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold shadow-md hover:bg-[#E8F6FF] transition text-sm font-poppins inline-block text-center max-w-max"
  >
    Start your free trial
  </a>
</div>
{/* Right Image */}
<div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full mt-10 md:mt-16 overflow-hidden rounded-tl-3xl">
  <img
    src="/feature-images/AI-receptionist.png"
    alt="AI Receptionist"
    className="w-full h-full object-cover"
  />
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
     <div className="w-full max-w-7xl bg-gradient-to-r from-[#bde8f8] to-[#FFFFFF] rounded-3xl p-4 md:p-6 flex flex-col items-center text-center">
       <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Key Capabilities:
                        </h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
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
      className={`w-full max-w-[384px] h-[240px] mx-auto p-6 rounded-2xl py-0 shadow-md flex flex-col justify-center items-start text-left ${
        index % 2 === 0
          ? "bg-[rgba(180,229,245,1)]"
          : "bg-[rgba(217,242,255,1)]"
      }`}
    >
      {/* ICON */}
      <img
        src={item.icon}
        alt={item.title}
        className="w-10 h-10 mb-4 object-contain"
      />

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  ))}
</div>
 </div>
            </motion.section>;

{/* THIRD SECTION */}
<motion.section
  className="bg-gradient-to-r from-[#EBF8FF] to-[#B9E6F6] py-20"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pl-20">

    {/* LEFT SIDE - 60% */}
    <div className="md:w-[60%] space-y-6 text-center">

      {/* H1 with bottom gradient line */}
      <h1 className="relative font-poppins font-semibold text-[51px] mb-10 text-[#00A7DE] leading-[40px] inline-block mx-auto">
        Integrations
         <span className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-[#0097DA]"></span>
      </h1>

      {/* H2 */}
      <h2 className="font-poppins font-semibold text-[51px] px-10 text-[#000000] leading-[40px]">
        Connect Seamlessly with Your Favorite Tools
      </h2>

      {/* Paragraph */}
      <p className="font-poppins font-normal text-[16.71px] px-30 leading-[25.99px] text-[#797A7D]">
        Sync your AI Receptionist with CRMs, booking apps, and communication platforms like:
      </p>

      {/* INTEGRATION CONTAINERS */}
      <div className="mt-8 flex flex-col items-center space-y-4">

        {/* Container 1 */}
        <div className="flex items-center justify-center bg-gradient-to-r from-[#74D3F7] to-[#0097DA] rounded-lg shadow-md hover:shadow-lg transition w-[252px] h-[62px] p-3">
          <img src="/feature-images/calender.png" alt="Google Calendar" className="w-[35px] h-[35px] mr-3" />
          <p className="font-poppins font-semibold text-[18px] text-white">
            Google Calendar
          </p>
        </div>

        {/* Container 2 */}
        <div className="flex items-center justify-center bg-gradient-to-r from-[#74D3F7] to-[#0097DA] rounded-lg shadow-md hover:shadow-lg transition w-[252px] h-[62px] p-3">
          <img src="/feature-images/outlook.png" alt="Zoho CRM" className="w-[35px] h-[35px] mr-3" />
          <p className="font-poppins font-semibold text-[18px] text-white">
          Outlook Calender 
          </p>
        </div>

        {/* Container 3 */}
        <div className="flex items-center justify-center bg-gradient-to-r from-[#74D3F7] to-[#0097DA] rounded-lg shadow-md hover:shadow-lg transition w-[252px] h-[62px] p-3">
          <img src="/feature-images/cal.png" alt="Slack Notifications" className="w-[35px] h-[35px] mr-3" />
          <p className="font-poppins font-semibold text-[18px] text-white">
            Cal.com
          </p>
        </div>

      </div>
    </div>

    {/* RIGHT SIDE - 40% IMAGE */}
<div className="md:w-[40%] mr-0 mt-10 md:mt-0 flex justify-end">
  <img
    src="/feature-images/integration.png"
    alt="Integration"
    className="rounded-2xl w-full max-w-[400px]"
    style={{
      boxShadow: `-20px 20px 15px #000000`, 
    }}
  />
</div>
  </div>
</motion.section>
{/* FOURTH SECTION */}
<motion.section
  className="w-full bg-cover bg-center py-20 px-6 flex flex-col items-center justify-center"
  style={{
    backgroundImage: "url(/feature-images/back-ground.png)",
  }}
>

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative font-Poppins font-semibold text-[51px] leading-[43px] text-[#00A7DE] text-center mb-6 inline-block
    after:content-[''] after:absolute after:left-[38%] after:bottom-[-10px] after:w-[24%] after:h-[4px] after:bg-[#0097DA] after:rounded-full"
>
  How It Works
</motion.h1>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
    className="font-Poppins font-normal text-[16px] leading-[30px] text-[#797A7D] text-center max-w-2xl mb-16"
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
        src="/feature-images/cr.png"
        alt="Step 1"
        className="w-[120px] h-[120px] mb-6"
      />
      <div className="bg-white rounded-[12px] border-t-[4px] border-[#00BAF2] shadow-lg p-6">
        <h3 className="font-Poppins font-semibold text-xl text-[#00A7DE] mb-2">
          Connect
        </h3>
        <p className="font-Poppins text-[#797A7D] text-sm leading-relaxed">
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
        src="/feature-images/ts.png"
        alt="Step 2"
        className="w-[120px] h-[120px] mb-6"
      />
      <div className="bg-white rounded-[12px] border-t-[4px] border-[#00BAF2] shadow-lg p-6">
        <h3 className="font-Poppins font-semibold text-xl text-[#00A7DE] mb-2">
         Automate
        </h3>
        <p className="font-Poppins text-[#797A7D] text-sm leading-relaxed">
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
        src="/feature-images/fu.png"
        alt="Step 3"
        className="w-[120px] h-[120px] mb-6"
      />
      <div className="bg-white rounded-[12px] border-t-[4px] border-[#00BAF2] shadow-lg p-6">
        <h3 className="font-Poppins font-semibold text-xl text-[#00A7DE] mb-2">
         Grow
        </h3>
        <p className="font-Poppins text-[#797A7D] text-sm leading-relaxed">
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
      className="w-full flex flex-col items-center justify-center text-center py-20 px-6 font-Poppins"
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
        <p>•No training downtime or onboarding needed</p>
        <p>•Works in multiple languages and accents</p>
        <p>•Learns from every conversation</p>
        <p>•Scales with your business automatically</p>
      </motion.div>

  <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="flex items-center gap-3 bg-white text-[#01A0E0] font-semibold text-lg px-8 py-4 rounded-lg shadow-md hover:bg-[#E8F6FF] transition-all duration-300"
>
  <img
    src="/feature-images/cb.png"
    alt="Start Icon"
    className="w-6 h-6"
  />
  Start Today
</motion.button>

    </motion.section>
        </>
    );
}
