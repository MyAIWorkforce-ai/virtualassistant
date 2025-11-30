"use client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { useLayoutEffect } from "react";

export default function MainIndustry() {

  useLayoutEffect(() => {
    // wait until next paint to ensure DOM is ready
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }, []);

const HealthCarecards = [
  {
    icon: "/industrymain-images/physio.png",
    title: "Physiotherapist",
    desc: "Your AI manages appointment bookings, reminders, follow-ups, and patient records so you spend more time on treatment.",
    link: "/industries/physiotherapy",
  },
  {
    icon: "/industrymain-images/mytho.png",
    title: "Myotherapist",
    desc: "Automates client bookings, tracks therapy sessions, and keeps your calendar organized.",
    link: "/industries/myotherapist",
  },
  {
    icon: "/industrymain-images/massage-thera.png",
    title: "Massage Therapist",
    desc: "Effortless bookings for massage therapists. Relax your clients while we handle your schedule.",
    link: "/industries/massagetherapist",
  },
  {
    icon: "/industrymain-images/personal-trainer.png",
    title: "Personal Trainer",
    desc: "Power up your training business with automated scheduling, payment reminders, and progress tracking.",
    link: "/industries/personaltrainer",
  },
  {
    icon: "/industrymain-images/psycolo.png",
    title: "Psychologist",
    desc: "Automates client bookings, tracks therapy sessions, and keeps your calendar organized.",
    link: "/industries/psychology",
  },
  {
    icon: "/industrymain-images/chiro.png",
    title: "Chiropractor",
    desc: "Precision scheduling for chiropractors — organizes client visits, recalls, and automates reminders.",
    link: "/industries/chiropractor",
  },
  {
    icon: "/industrymain-images/podia.png",
    title: "Podiatrist",
    desc: "Your AI manages appointment bookings, reminders, and patient records for efficient workflow.",
    link: "/industries/podiatrist",
  },
  {
    icon: "/industrymain-images/beauty-thera.png",
    title: "Beauty Therapist",
    desc: "Streamlines beauty care scheduling, treatment notes, skincare or wellness reminders, and follow-ups.",
    link: "/industries/beautytherapist",
  },
  {
    icon: "/industrymain-images/hair-dresser.png",
    title: "Hairdresser",
    desc: "Effortless salon scheduling — manages appointments, client preferences, and reminders seamlessly.",
    link: "/industries/hairdresser",
  },
  {
    icon: "/industrymain-images/dentist.png",
    title: "Dentist",
    desc: "Modernizes dental care by managing appointments, hygiene reminders, and scheduling follow-ups.",
    link: "/industries/dentist",
  },
  {
    icon: "/industrymain-images/physio.png",
    title: "Osteopath",
    desc: "Modernizes osteopathic care by managing appointments, recording treatment notes, and organizing follow-ups.",
    link: "/industries/osteopaths",
  },
  {
    icon: "/industrymain-images/other.png",
    title: "Other",
    desc: "Handles bookings, cancellations, and important calls — ensuring your business stays responsive 24/7.",
    link: "/industries/forother",
  },
];

const PerfesstionalServicescards = [
  {
    icon: "/industrymain-images/accountant.png",
    title: "Accountant",
    desc: "Simplify and automates bookkeeping, generates financial reports, and streamlines client invoicing.",
    link: "/industries/accountant",
  },
  {
    icon: "/industrymain-images/laywer.png",
    title: "Lawyer",
    desc: "Organizes case files, legal practices, tracks deadlines, and automates client communications..",
    link: "/industries/lawyer",
  },
  {
    icon: "/industrymain-images/consultant.png",
    title: "Consultant",
    desc: "Your virtual assistant modernizes consulting by managing appointments, recording meeting notes, tracking project deadlines, and streamlining client communication.",
    link: "/industries/consultant",
  },
  {
    icon: "/industrymain-images/real-estate.png",
    title: "Real Estate Agent",
    desc: "From Listings to Closings, Streamlines property management, client communication, and sales tracking.",
    link: "/industries/realestateagent",
  },
];

const TradesServicescards = [
  {
    icon: "/industrymain-images/mechanic.png",
    title: "Mechanic",
    desc: "Service Scheduling Simplified – Organizes repair appointments, reschedules with ease, and manages waitlists for busy Workshops.",
    link: "/industries/mechanic",
  },
  {
    icon: "/industrymain-images/plumber.png",
    title: "Plumber",
    desc: "Schedules service calls, manages emergency repairs, and tracks work orders with ease.",
    link: "/industries/plumber",
  },
  {
    icon: "/industrymain-images/window.png",
    title: "Window Cleaning",
    desc: "Manages cleaning appointments, handles rescheduling, and tracks repeat clients with ease.",
    link: "/industries/cleaning",
  },
    {
    icon: "/industrymain-images/electrician.png",
    title: "Electrician",
    desc: "Assigns electrical service calls, tracks technician availability, and reduces missed appointments.",
    link: "/industries/electricians",
  },
];

const HospitalityOther = [
  {
    icon: "/industrymain-images/resturant.png",
    title: "Restaurant & Takeaway Businesses",
    desc: "Reservation Management Made Easy.  Manages table bookings, cancellations, and automated waitlists.",
    link: "/industries/resturant",
  },
  {
    icon: "/industrymain-images/hotel.png",
    title: "Hotels and Accommodation",
    desc: "Your virtual assistant modernizes hospitality operations by managing bookings, guest communication, and follow-up services.",
    link: "/industries/hotelsaccommodation",
  },
  {
    icon: "/industrymain-images/other.png",
    title: "Others",
    desc: " It can also collect client details, take bookings, handle cancellations, important calls — ensuring your business stays responsive 24/7 for all businesses.",
    link: "/industries/forother",
  },
];
    return (
        <div className="scroll-mt-[50px] md:scroll-mt-[10px] lg:scroll-mt-[10px]">
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
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex flex-col items-center justify-center mt-10 text-center 
             bg-gradient-to-r from-[#F0F9FF] to-[#E8F6FF] 
             py-20 px-4 md:py-24 md:px-6"
>
  <h1
    className="font-Poppins font-bold mt-8 
               text-[32px] sm:text-[40px] md:text-[45px] lg:text-[48px]
               leading-tight md:leading-none 
               text-[#000000] pt-[5px] mb-6 sm:mb-8"
  >
    AI Virtual Receptionists & <br/>Smart Scheduling for{" "}
    <span className="text-[#00A7DE]">Every <br/>Industry</span>
  </h1>

  {/* Subtitle */}
  <p
    className="font-Poppins 
               text-[14px] sm:text-[16px] md:text-[16px] 
               text-gray-700 
               max-w-xl sm:max-w-2xl md:max-w-3xl 
               mb-8 md:mb-10 px-2"
  >
    Choose your profession and discover how AI can automate your bookings,
    reminders, and client management
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
    {/* Trial Button */}
    <Link
      href="https://admin.virtualassistant.com.au/register"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#0097DA] text-white font-Poppins font-medium
                   text-[14px] sm:text-[16px] md:text-[18px]
                   px-6 py-2.5 sm:px-8 sm:py-3
                   rounded-full shadow-md
                   hover:bg-[#007EB8] transition"
      >
        Start 14 Day Free Trial
      </motion.button>
    </Link>

    {/* Demo Button */}
    <Link
      href="https://calendar.app.google/g5bCnhaSJocufjFr5"
      target="_blank"
      rel="noopener noreferrer"
      className="text-black font-Poppins font-medium 
                 text-[14px] sm:text-[16px] md:text-[18px]
                 px-6 py-2.5 sm:px-8 sm:py-3
                 rounded-full border-2 border-[#00A7DE]
                 transition-all duration-300 ease-in-out
                 hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
    >
      Book a Demo
    </Link>
  </div>
</motion.section>

 <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center py-15 px-6 md:px-12 lg:px-24 bg-white font-Poppins"
    >
 <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[38px] md:text-[48px] font-bold text-[#0097DA] mb-2 text-center"
      >
        Healthcare & Wellness
      </motion.h2>
      <div className="w-24 h-[3px] bg-[#0097DA] rounded-full mb-12"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {HealthCarecards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col bg-white rounded-[12px] shadow-md hover:shadow-xl p-6 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={card.icon}
                alt={card.title}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-[17px] font-poppins font-semibold text-[#000000]">
                {card.title}
              </h3>
            </div>
            <p className="text-[12px] font-poppins text-gray-600 leading-relaxed mb-4">
              {card.desc}
            </p>
            <Link
              href={card.link}
              className="text-[#0097DA] font-medium text-[12px] hover:underline self-start"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>


      <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center py-15 px-6 md:px-12 lg:px-24 bg-white font-Poppins"
    >
 <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[38px] md:text-[48px] font-bold text-[#0097DA] mb-2 text-center"
      >
        Professional Services
      </motion.h2>
      <div className="w-24 h-[3px] bg-[#0097DA] rounded-full mb-12"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {PerfesstionalServicescards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col bg-white rounded-[12px] shadow-md hover:shadow-xl p-6 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={card.icon}
                alt={card.title}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-[17px] font-poppins font-semibold text-[#000000]">
                {card.title}
              </h3>
            </div>
            <p className="text-[12px] font-poppins text-gray-600 leading-relaxed mb-4">
              {card.desc}
            </p>
            <Link
              href={card.link}
              className="text-[#0097DA] font-medium text-[12px] hover:underline self-start"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>  

      <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center py-15 px-6 md:px-12 lg:px-24 bg-white font-Poppins"
    >
 <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[38px] md:text-[48px] font-bold text-[#0097DA] mb-2 text-center"
      >
        Trades & Services
      </motion.h2>
      <div className="w-24 h-[3px] bg-[#0097DA] rounded-full mb-12"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {TradesServicescards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col bg-white rounded-[12px] shadow-md hover:shadow-xl p-6 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={card.icon}
                alt={card.title}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-[17px] font-poppins font-semibold text-[#000000]">
                {card.title}
              </h3>
            </div>
            <p className="text-[12px] font-poppins text-gray-600 leading-relaxed mb-4">
              {card.desc}
            </p>
            <Link
              href={card.link}
              className="text-[#0097DA] font-medium text-[12px] hover:underline self-start"
            >
              Learn More
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section> 

 <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center py-15 px-6 md:px-12 lg:px-24 bg-white font-Poppins"
    >
 <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-[38px] md:text-[48px] font-bold text-[#0097DA] mb-2 text-center"
      >
        Hospitality & Other
      </motion.h2>
      <div className="w-24 h-[3px] bg-[#0097DA] rounded-full mb-12"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {HospitalityOther.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col bg-white rounded-[12px] shadow-md hover:shadow-xl p-6 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={card.icon}
                alt={card.title}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-[17px] font-poppins font-semibold text-[#000000]">
                {card.title}
              </h3>
            </div>
            <p className="text-[12px] font-poppins text-gray-600 leading-relaxed mb-4">
              {card.desc}
            </p>
            <Link
              href={card.link}
              className="text-[#0097DA] font-medium text-[12px] hover:underline self-start"
            >
              Learn More
            </Link>
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
                <h1 className="text-white text-4xl sm:text-5xl  font-poppins font-bold mb-4">
                  Ready to Transform Your Business?
                </h1>

                {/* Subtext */}
                <p className="text-white/90 text-lg max-w-2xl  font-poppins leading-relaxed mb-4">
                 Join thousands of businesses already using our AI receptionist
                </p>


                   {/* BUTTONS */}
                   <motion.div
                     className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start"
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                   >
                       <Link
                        href="https://admin.virtualassistant.com.au/register"
                        target="_blank"
                        rel="noopener noreferrer"
  >
                     <motion.button
                       whileHover={{ scale: 1.05 }}
                       transition={{ duration: 0.3 }}
                       className="w-[230px] h-[50px] bg-white font-poppins text-[#00A7DE] font-[500] text-[16px] leading-[100%] rounded-[6px] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
                     >
                       Start Your 14 Day Free Trial
                     </motion.button>
                         </Link>
              <Link
                      href="https://calendar.app.google/g5bCnhaSJocufjFr5"
                      target="_blank"
                      rel="noopener noreferrer"
                             >
                     <motion.button
                       whileHover={{ scale: 1.05 }}
                       transition={{ duration: 0.3 }}
                       className="w-[159px] h-[50px] bg-white text-[#00A7DE] font-poppins font-[500] text-[16px] leading-[100%] rounded-[6px] flex items-center justify-center gap-2 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
                     >  <Image
                         src="/industries-images/reuse-icons/demo-button.png"
                         alt="demo"
                         width={14}
                         height={14}
                         priority
                       />
                       Book a Demo
                     </motion.button>
                     </Link>
                   </motion.div>
            </motion.section>

        </div>
    )
}
