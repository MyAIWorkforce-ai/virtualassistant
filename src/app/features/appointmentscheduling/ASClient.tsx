"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
 const cards = [
    {
      title: "Save Hours of Manual Work:",
      desc: "You and your team no longer need to manage calls or track appointments manually.",
    },
    {
      title: "Reduce No-Shows by 40%:",
      desc: "Automated reminders and confirmations keep your schedule full and reliable.",
    },
    {
      title: "Improve Client Experience:",
      desc: "Clients enjoy instant, accurate booking interactions anytime, anywhere.",
    },
    {
      title: "Boost Efficiency:",
      desc: "Focus your time on delivering services instead of managing logistics.",
    },
  ];

export default function ASClient() {
  return (
    <div className="mt-15">
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

{/* FIRST SECTION */}
<motion.section
  initial="hidden"
  animate="show"
  className="relative flex flex-col md:flex-row items-center overflow-hidden font-Poppins py-6 sm:py-16 md:py-8"
  style={{
    backgroundImage: "url('/feature-images/appointmentimage.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

<motion.div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-start">
  <div
   className="
    relative
    w-[220px] h-[220px]
    sm:w-[320px] sm:h-[320px]
    md:w-[550px] md:h-[550px]
    lg:w-[600px] lg:h-[600px]
    mb-4 sm:-mb-8           
    md:mb-0 md:-ml-10
    overflow-visible   
  "
>
    <Image
      src="/feature-images/scheduling-hero.png"
      alt="AI Appointment Calendar"
      fill
      className="object-contain drop-shadow-lg opacity-95"
    />
  </div>
</motion.div>

<motion.div
  className="relative z-20 p-8 sm:p-10 md:p-12  text-white shadow-lg rounded-l-[30px] w-full md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 md:ml-0 max-h-[500px]"
  style={{
    background: "linear-gradient(to bottom, #3596D3, #72D0FF)",
  }}
>
  <div className="text-white max-w-lg space-y-6">
    <div className="inline-block bg-[#E8F6FF]  text-[#00A7DE] px-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm tracking-wide shadow-sm">
      Smart, Seamless, Always On
    </div>
    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
      AI Appointment Scheduling
    </h1>
    <p className="text-lg font-poppins text-gray-200">
      Never miss an appointment or double-book again. Your AI assistant
      automatically manages scheduling, reminders, and rescheduling —
      keeping your calendar full and your clients happy.
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
          Start Your 14 Day Free Trial
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
</motion.div>
</motion.section>


{/* SECOND SECTION */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#D4EFFF] via-[#EEF8FF] to-[#FFFFFF] overflow-hidden font-Poppins"
>
  {/* Content */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
    {/* Left Text Card */}
    <motion.div className="md:w-1/2 flex justify-center text-center md:justify-start">
      <div
        className="bg-white rounded-[20px] text-center p-20 w-[466px] h-[314px] flex flex-col justify-center"
        style={{
          boxShadow: "0 0 14px rgba(0, 0, 0, 0.14)",
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
    <motion.div className="md:w-1/2 flex flex-col gap-12 justify-center pr-8 md:pr-12">
      {[
        {
          icon: "/feature-images/fully-automated.png",
          title: "Fully Automated:",
          desc: "Books, reschedules, and cancels appointments directly into your calendar.",
        },
        {
          icon: "/feature-images/calender-syncing.png",
          title: "Calendar Syncing:",
          desc: "Works seamlessly with Google Calendar, Outlook Calendar, and Cal.com.",
        },
        {
          icon: "/feature-images/smart-reminders.png",
          title: "Smart Reminders:",
          desc: "Clients automatically receive SMS and email confirmations and reminders, cutting down no-shows.",
        },
        {
          icon: "/feature-images/flexible-options.png",
          title: "Flexible Options:",
          desc: "Choose whether to use your new dedicated number or keep your current one with forwarding.",
        },
      ].map((card, i) => (
        <motion.div
          key={i}
          className="w-full md:w-[520px] bg-white p-5 hover:shadow-xl transition-all flex items-center gap-4"
          style={{
            boxShadow: "0 0 14px rgba(0, 0, 0, 0.14)",
          }}
        >
          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <img src={card.icon} alt={card.title} className="w-10 h-10 object-contain" />
          </div>

          {/* Text */}
          <div className="text-[#797A7D] text-base leading-snug">
            <span className="font-semibold text-[#000]">{card.title}</span>{" "}
            {card.desc}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>
{/* THIRD SECTION */}
<motion.section className="w-full flex flex-col items-center bg-white py-16 px-6 lg:px-24">
  <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-15 mb-12">
    <div className="lg:w-auto flex justify-center lg:justify-start">
      <div
        className="w-[313px] h-[223px] rounded-[20px] p-15 flex flex-col justify-center 
                   border border-[#DADADA]
                   shadow-[-4px_3px_6px_rgba(172,169,169,0.25)]"
        style={{
          background:
            "linear-gradient(to bottom, #F9FAFB, #FAFDFF, #F4F6F8, #E8EAEB)",
        }}
      >
        <h3 className="font-semibold text-[17px] text-[#000000] mb-2 leading-tight">
          Save Hours of Manual Work:
        </h3>
        <p className="text-[15px] text-[#5E5F60] leading-[22px]">
          You and your team no longer need to manage calls or track appointments manually.
        </p>
      </div>
    </div>
    <div className="flex-1 flex justify-center lg:justify-end">
 <div className="flex-1 flex justify-center lg:justify-end">
  <div
    className="hidden lg:block relative w-full max-w-[850px] h-[400px] bg-white overflow-hidden rounded-[20px] rounded-bl-[110px] shadow-[-4px_3px_6px_rgba(172,169,169,0.25)]"
  >
    <img
      src="/feature-images/productivity-gains.png"
      alt="Productivity Gains"
      className="w-full h-full object-cover"
    />
  </div>
</div>
    </div>
  </div>

  {/* Row 2: Three Cards */}
  <div className="w-full flex justify-center">
    <div className="flex flex-col sm:flex-row items-center gap-30">
      {[
        {
          title: "Reduce No-Shows by 40%",
          desc: "Automated reminders and confirmations keep your schedule full and reliable.",
        },
        {
          title: "Improve Client Experience",
          desc: "Clients enjoy instant, accurate booking interactions anytime, anywhere.",
        },
        {
          title: "Boost Efficiency",
          desc: "Focus your time on delivering services instead of managing logistics.",
        },
      ].map((c, idx) => (
        <div
          key={idx}
          className="w-[313px] h-[223px] rounded-[20px] p-12 flex flex-col justify-center text-left 
                     border border-[#DADADA]
                     shadow-[-4px_3px_6px_rgba(172,169,169,0.25)]"
          style={{
            background:
              "linear-gradient(to bottom, #F9FAFB, #FAFDFF, #F4F6F8, #E8EAEB)",
          }}
        >
          <h4 className="font-semibold text-[16px] text-[#000000] mb-2 leading-tight">
            {c.title}
          </h4>
          <p className="text-[14.5px] text-[#5E5F60] leading-[20px]">
            {c.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</motion.section>

<section
  className="w-full flex flex-col items-center justify-center text-center py-20 px-6 font-Poppins"
  style={{
    background: "linear-gradient(to bottom, #0097DA 0%, #00BAF2 50%, #8FDAF8 100%)",
  }}
>
  <h1 className="text-white text-4xl sm:text-5xl font-bold mb-2">
    Ready to Automate Your Scheduling?
  </h1>

  <p className="text-white/90 text-lg max-w-2xl leading-relaxed mb-10">
    Empower your business with intelligent appointment automation. Save time,
    reduce cancellations, and deliver a seamless experience to every client.
  </p>

<a
  href="https://admin.virtualassistant.com.au/register"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-[#00A7DE] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#E8F6FF] transition text-sm font-poppins inline-block text-center"
>
  Start Your 14 Day Free Trial
</a>
</section>

    </div>
  );
}
