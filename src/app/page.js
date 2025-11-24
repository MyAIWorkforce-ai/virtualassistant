"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react"; 
import FadeInOnScroll from "./_components/animations/FadeInScroll";
import HoverSlide from "./_components/animations/HoverSlider";
import HeroAnimation from "./_components/heroanimation";
import ScrollSlide from "./_components/animations/scrollslide";
import RotateIn from "./_components/animations/RotateIn";
import ScaleUp from "./_components/animations/ScaleUp";
import useScrollAnimation from "./_components/animations/scrolleranimation";


export default function Home() {
  useScrollAnimation();
  const [expanded, setExpanded] = useState(false);
 
  // Hamburger Button
  const [isOpen, setIsOpen] = useState(false);
  // =======================
  // build 20+ industries
  // =======================
  const industries = [
    {
      slug: "physiotherapy",
      icon: "/industrymain-images/physio.png",
      title: "Physiotherapist",
      desc: "Your AI manages appointment bookings, reminders, follow-ups, and patient records so you spend more time on treatment.",
    },
    {
      slug: "myotherapist",
      icon: "/industrymain-images/mytho.png",
      title: "Myotherapist",
      desc:"Automates client bookings, tracks therapy sessions, and keeps your calendar organized.",
    },
    {
      slug: "massagetherapist",
      icon: "/industrymain-images/massage-thera.png",
      title: "Massage Therapist",
      desc: "Effortless Bookings for Massage Therapists. Relax your clients while we handle your schedule.",
    },
    {
      slug: "lawyer",
      icon: "/industrymain-images/laywer.png",
      title: "Lawyer",
      desc: "Your virtual assistant modernizes legal practice by managing appointments, recording case notes, tracking deadlines, sending client reminders, and scheduling follow-ups.",
    },
    {
      slug: "resturant",
      icon: "/industrymain-images/resturant.png",
      title: "Restaurant",
      desc: "Reservation Management Made Easy.  Manages table bookings, cancellations, and automated waitlists.",
    },
    {
      slug: "personaltrainer",
      icon: "/industrymain-images/personal-trainer.png",
      title: "Personal Trainer",
      desc: "Power Up Your Training Business Automates client scheduling, payment reminders, and progress updates.",
    },
    {
      slug: "psychology",
      icon: "/industrymain-images/psycolo.png",
      title: "Psychologist",
      desc: "Secure & Smooth Support for Psychologists. Handles patient reminders, intake forms, and secure follow-ups.",
    },
    {
      slug: "chiropractor",
      icon: "/industrymain-images/chiro.png",
      title: "Chiropractor",
      desc: "Precision Scheduling for Chiropractors. Organizes client visits, recalls, and automates reminders.",
    },
    {
      slug: "podiatrist",
      icon: "/industrymain-images/podia.png",
      title: "Podiatrist",
      desc: "Step into better practice management. Tracks appointments, follow-ups, and organizes treatment schedules.",
    },
  ];

  // ========================
  //   Transparent Pricing
  // ========================
const [billingCycle, setBillingCycle] = useState("monthly");

const plans = [
  {
    name: "SOLO",
    price: 300,
    description: "1 User",
    features: [
      "AI Virtual Assistant 24/7",
      "Advanced Dashboard with Analytics",
      "Advanced CRM for all Client Data and History",
      "AI Powered Smart Calendars",
      "New Dedicated Number or Call Forwarding Options",
      "Front End AI Prompt Training for your AI",
      "AI Appointment Scheduling ",
      "Unlimited Incoming Calls 24/7 ",
      "Unlimited Bookings 24/7",
      "Online Booking Script for Website",
      "Online Chatbot Script for Website",
      "Appointment Reminders via SMS and Email",
      "Calendar Syncing",
    ],
    button: "Start 14 Day Trial",
    highlighted: false,
  },
  {
    name: "PROFESSIONAL",
    price: 400,
    description: "Up to 3 Users",
    features: [
      "AI Virtual Assistant 24/7",
      "Advanced Dashboard with Analytics",
      "Advanced CRM for all Client Data and History",
      "AI Powered Smart Calendars",
      "New Dedicated Number or Call Forwarding Options",
      "Front End AI Prompt Training for your AI",
      "AI Appointment Scheduling",
      "Unlimited Incoming Calls 24/7",
      "Unlimited Bookings 24/7",
      "Online Booking Script for Website",
      "Online Chatbot Script for Website",
      "Appointment Reminders via SMS and Email",
      "Calendar Syncing",
    ],
    button: "Start 14 Day Trial",
    highlighted: true,
  },
  {
    name: "ENTERPRISE",
    price: 500,
    description: "Up to 5 Users",
    features: [
      "AI Virtual Assistant 24/7",
      "Advanced Dashboard with Analytics",
      "Advanced CRM for all Client Data and History",
      "AI Powered Smart Calendars",
      "New Dedicated Number or Call Forwarding Options",
      "Front End AI Prompt Training for your AI",
      "AI Appointment Scheduling",
      "Unlimited Incoming Calls 24/7",
      "Unlimited Bookings 24/7",
      "Online Booking Script for Website",
      "Online Chatbot Script for Website",
      "Appointment Reminders via SMS and Email",
      "Calendar Syncing"
    ],
    button: "Start 14 Day Trial",
    highlighted: false,
  },
];
  // =================================
  //   what our client says
  // ==================================
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Owner, BrightPath Wellness",
      quote:
        "Integrating the AI receptionist has completely streamlined our booking process. Clients love the instant responses, and I finally have time to focus on growing my business.",
      image: "/image/sarah.png",
      stars: "/image/star5.png",
    },
         {
      name: "Carlos Rivera",
      title: "Managing Partner, Rivera Legal Group",
      quote:
      "The accuracy and professionalism of the AI assistant have been remarkable. Our clients get immediate help, even after hours — it’s like having a full-time receptionist without the overhead",
      image: "/image/carlos.png",
      stars: "/image/star5.png",
    },
    {
      name: " Hannah Lee",
      title: "Founder, FitWithHannah Coaching",
      quote:
"The accuracy and professionalism of the AI assistant have been remarkable. Our clients get immediate help, even after hours — it’s like having a full-time receptionist without the overhead",
      image: "/image/hannah.png",
      stars: "/image/star5.png",
    },
    {
      name: "Daniel Cooper",
      title: "CEO, TechNova Consulting",
      quote:
        "We handle dozens of client calls daily, and this system has improved efficiency and response time. The AI assistant integrates perfectly with our CRM — a total game-changer.",
      image: "/image/daniel.png",
      stars: "/image/star4.png",
    },
    {
      name: "Olivia Grant",
      title: "Director, Harmony Therapy Clinic",
      quote:
        "The setup was simple, and within days our clients were interacting with the AI like it was a real person. It’s increased bookings and reduced missed calls dramatically.",
      image: "/image/olivia.png",
      stars: "/image/star5.png",
    },
    {
      name: "Mark Thompson",
      title: "Operations Manager, Summit Accounting",
      quote:
       "This AI receptionist handles our client inquiries flawlessly. It’s efficient, polite, and available 24/7 — exactly what we needed to modernize our client support.",
      image: "/image/mark.png",
      stars: "/image/star5.png",
    },
  
  ];

  const [cardCount, setCardCount] = useState(3);

  useEffect(() => {
    const updateCardCount = () => {
      if (window.innerWidth < 640) setCardCount(1); // mobile
      else if (window.innerWidth < 1024) setCardCount(2); // tablet
      else setCardCount(3); 
    };

    updateCardCount();
    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);


  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev + cardCount >= testimonials.length ? 0 : prev + cardCount
      );
    }, 9000);

    return () => clearInterval(interval);
  }, [testimonials.length, cardCount]);


  //  =========================
  //   //How it works section
  //  ==========================
  const sectionHeading =
    "text-3xl md:text-5xl font-bold  text-[#00A7DE] text-primary mb-2"; 
  const stepTitle = "font-semibold text-3sm text-black mb-2";
  const stepDesc = "text-[#797A7D] text-sm";
  // ============================
  //   //   Section 1 Home page
  // =============================
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Australia's Best AI Virtual Receptionist | http://virtualAssistant.com.au</title>
        <meta
          name="description"
          content="Tailored for every service-based industry. Designed to save time, cut costs, and boost productivity. Your AI receptionist sounds human and works, speaks, and feels just like your business. Let us take your calls 24/7 and streamline your admin effortlessly"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Transform Your Business with AI-Powered Assistants"
        />
        <meta
          property="og:description"
          content="Tailored solutions for every industry, designed to save time, cut costs, and boost productivity."
        />
        <meta property="og:image" content="/images/card.png" />
        <meta
          property="og:url"
          content="https://virtualassistant.com.au"
        />
      </Head>
      {/* Main section */}

      <main className="bg-[url('/image/Hero.png')] bg-cover bg-center bg-no-repeat w-full min-h-[600px] lg:h-[800px]">

        {/* HERO SECTION */}
        <section className=" relative w-full h-auto overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/image/bg.png"
              alt="Background Image"
              width={1260}
              height={800}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Content Container */}
          <div className=" flex flex-col items-center justify-center text-center px-4 py-24 md:py-20 lg:py-16 lg:flex-row lg:text-left lg:justify-between lg:px-8 max-w-7xl mx-auto gap-10">
           <motion.div
              className="w-full lg:w-1/2 flex flex-col pl-4 items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#00A7DE] font-semibold tracking-wide">
                Your Business, Always Answered
              </h3>
 <motion.h1 
  className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight"
  initial={{ opacity: 0, y: 30 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }} // Added slight delay to offset tag
   viewport={{ once: true }}
 >
   AI Virtual Assistant that works, speaks, and feels like your business — 24/7.
 </motion.h1>
 <p className="mt-2 text-sm sm:text-base text-[#797A7D]">
               Never miss a call. Never miss a booking.  Always stay one step ahead.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="https://admin.virtualassistant.com.au/register" target="_blank" rel="noopener noreferrer"
                  className="bg-[#00A7DE] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  href="/industries"
                  className="text-black px-6 py-3 rounded-full font-semibold border-2 border-[#00A7DE] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                >
                  Explore Industries
                </Link>
              </div>
            </motion.div>

        
<motion.div
  className="flex justify-center items-center w-full py-20 px-6 lg:w-1/2"
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <HeroAnimation>
    <div
      className=" relative w-[300px] h-[200px] sm:w-[400px] sm:h-[260px] md:w-[500px] md:h-[320px] lg:w-[620px] lg:h-[400px] max-w-full -rotate-5 bg-[#00A7DE] py-2 px-2 rounded-2xl overflow-hidden  mx-auto"
    >
      {(() => {
        const [index, setIndex] = React.useState(0);
        const images = ["/image/tab.png", "/image/tab1.png", "/image/tab2.png"];

        React.useEffect(() => {
          const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
          }, 4000);
          return () => clearInterval(interval);
        }, []);

        return (
          <div className="relative w-full h-full">
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Carousel Image ${i + 1}`}
                fill
                priority
                quality={100}
                className={`object-contain transition-opacity duration-1000 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        );
      })()}
    </div>
  </HeroAnimation>
</motion.div>

          </div>
        </section>
      </main>

      {/* KEY FEATURES SECTION  */}
   <section
  id="features"
  className="scroll-mt-[72px] pt-16 pb-16 bg-[#F9FAFB]"
  aria-labelledby="key-features-heading"
  role="region"
><div className="scroll-mt-[150px] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2
            
            className="text-3xl sm:text-4xl font-semibold text-[#00A7DE] mb-2"
          >
            Key Features
          </h2>
          <div
            className="w-12 h-0.5 bg-[#098DC9] mx-auto mb-6 rounded-full"
            aria-hidden="true"
          ></div>

          {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
  {/* Feature 1 */}
  <FadeInOnScroll>
    <article className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col">
      <HoverSlide>
        <figure className="m-0">
          <Image
            src="/image/ai-receptionist.png"
            alt="Receptionist using AI phone handling interface"
            width={400}
            height={250}
            priority
            className="rounded-t-lg w-full h-auto object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <figcaption className="sr-only">
            AI Phone Handling illustration
          </figcaption>
        </figure>
      </HoverSlide>
      <div className="p-4 sm:p-6 flex flex-col text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/image/ai-phone-icon.png"
            alt="AI phone icon"
            width={20}
            height={28}
            priority
          />
          <h3 className="text-lg sm:text-1xl font-bold text-black">
            AI Receptionist - 24/7
          </h3>
        </div>
        <p className="text-[#797A7D] font-medium mt-2 text-sm">
          - Answers every call instantly, day or night<br/>
          - Unlimited calls & bookings, 24/7<br/>
          - Call recordings, summaries & transcripts<br/>
          - Professional, consistent service every time<br/>
          - Dedicated business number included<br/>
          - Call forwarding option with clear step-by-step instructions<br/>
        </p>
        <div className="flex items-center mt-3">
          <Image
            src="/image/thumbs-up.png"
            alt="Thumbs Up"
            width={16}
            height={16}
            priority
          />
          <p className="ml-1 text-xs text-[#6B7280]">98% Satisfaction</p>
        </div>
      </div>
    </article>
  </FadeInOnScroll>

  {/* Feature 2 */}
  <FadeInOnScroll>
    <article className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col">
      <HoverSlide>
        <figure className="m-0">
          <Image
            src="/image/calender3.png"
            alt="Appointment scheduling interface with calendar slots"
            width={400}
            height={250}
            priority
            className="rounded-t-lg w-full h-auto object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <figcaption className="sr-only">
            Appointment Scheduling image
          </figcaption>
        </figure>
      </HoverSlide>
      <div className="p-4 sm:p-6 flex flex-col text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/image/appointment-icon.png"
            alt="Appointment icon"
            width={20}
            height={28}
            priority
          />
          <h3 className="text-lg sm:text-1xl font-bold text-black">
            AI Appointment Scheduling
          </h3>
        </div>
        <p className="text-[#797A7D] font-medium mt-2 text-sm">
          - Fully automated: books, reschedules & cancels appointments<br/>
          - Works seamlessly with Google Calendar, Outlook Calendar & Cal.com<br/>
          - Sends SMS & email confirmations and reminders<br/>
        </p>
        <div className="flex items-center mt-3">
          <Image
            src="/image/thumbs-up.png"
            alt="thumbs-up"
            width={16}
            height={16}
            priority
            aria-hidden="true"
          />
          <p className="ml-1 text-xs text-[#6B7280]">95% Satisfaction</p>
        </div>
      </div>
    </article>
  </FadeInOnScroll>

  {/* Feature 3 */}
  <FadeInOnScroll>
    <article className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col">
      <HoverSlide>
        <figure className="m-0">
          <Image
            src="/image/transcription.png"
            alt="Transcription interface showing text from conversation"
            width={400}
            height={250}
            priority
            className="rounded-t-lg w-full h-auto object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <figcaption className="sr-only">
            Smart Transcription image
          </figcaption>
        </figure>
      </HoverSlide>
      <div className="p-4 sm:p-6 flex flex-col text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/image/transcription-icon.png"
            alt="Transcription icon"
            width={20}
            height={28}
            priority
          />
          <h3 className="text-lg sm:text-1xl font-bold text-black">
            Smart AI Assistant For Clients
          </h3>
        </div>
        <p className="text-[#797A7D] font-medium mt-2 text-sm">
          - Answers questions about your services instantly<br/>
          - Explains pricing, availability & directions<br/>
          - Handles reschedules or cancellations smoothly<br/>
          - Customisable personality: friendly, professional, or casual<br/>
        </p>
        <div className="flex items-center mt-3">
          <Image
            src="/image/thumbs-up.png"
            alt="thumbs-up"
            width={16}
            height={16}
            priority
            aria-hidden="true"
          />
          <p className="ml-1 text-xs text-[#6B7280]">92% Satisfaction</p>
        </div>
      </div>
    </article>
  </FadeInOnScroll>

  {/* Feature 4 */}
  <FadeInOnScroll>
    <article className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col">
      <HoverSlide>
        <figure className="m-0">
          <Image
            src="/image/voice-memo.png"
            alt="Voice memo capture linked to client file"
            width={400}
            height={250}
            priority
            className="rounded-t-lg w-full h-auto object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <figcaption className="sr-only">
            Voice Memo Capture image
          </figcaption>
        </figure>
      </HoverSlide>
      <div className="p-4 sm:p-6 flex flex-col text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/image/voice-memo-icon.png"
            alt="Voice memo icon"
            width={20}
            height={28}
            priority
          />
          <h3 className="text-lg sm:text-1xl font-bold text-black">
            Post-Session Tools
          </h3>
        </div>
        <p className="text-[#797A7D] font-medium mt-2 text-sm">
          - Add client notes after each appointment<br/>
          - Record voice memos that are auto-Transcribed & Summarised<br/>
          - Upload photos or documents linked to appointments<br/>
          - Build a complete client history file automatically<br/>
        </p>
        <div className="flex items-center mt-3">
          <Image
            src="/image/thumbs-up.png"
            alt="thumbs-up"
            width={16}
            height={16}
            priority
            aria-hidden="true"
          />
          <p className="ml-1 text-xs text-[#6B7280]">89% Satisfaction</p>
        </div>
      </div>
    </article>
  </FadeInOnScroll>

  {/* Feature 5 - Dashboard Card */}
  <FadeInOnScroll>
    <article className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col">
      <HoverSlide>
        <figure className="m-0">
          <Image
            src="/image/branded.png"
            alt="Branded dashboard"
            width={400}
            height={250}
            priority
            className="rounded-t-lg w-full h-auto object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <figcaption className="sr-only">Branded Dashboard image</figcaption>
        </figure>
      </HoverSlide>

      <div className="p-4 sm:p-6 flex flex-col text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/image/branded-icon.png"
            alt="Branded dashboard icon"
            width={20}
            height={28}
            priority
          />
          <h3 className="text-lg sm:text-1xl font-bold text-black">
            Advanced Dashboard
          </h3>
        </div>

        <p className="text-[#797A7D] font-medium mt-2 text-sm">
          Your control centre gives you everything in one place:<br/>
          - Advanced CRM with client data & history<br/>
          - AI Smart Calendar: colour-coded & auto-updating<br/>
            - One clean dashboard replaces multiple tools.<br/>
        </p>

        {expanded && (
          <div className="mt-3 text-[#797A7D] text-sm transition-all duration-300 ease-in-out">
            - Front-End Prompts: Update what your AI says across phone, site, and chat.<br/>
            - Fully Customisable Branding: Upload logo, set theme colours, and personalise your system.<br/>
          </div>
        )}

        <button
          className="mt-2 text-sm font-poppins text-[#098DC9] hover:underline self-start"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide" : "Read more..."}
        </button>

        <div className="flex items-center mt-1">
          <Image
            src="/image/thumbs-up.png"
            alt="thumbs-up"
            width={16}
            height={16}
            priority
            aria-hidden="true"
          />
          <p className="ml-1 text-xs text-[#6B7280]">96% Satisfaction</p>
        </div>
      </div>
    </article>
  </FadeInOnScroll>

  {/* Feature 6 */}
  <FadeInOnScroll>
    <article className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col">
      <HoverSlide>
        <figure className="m-0">
          <Image
            src="/image/booking1.png"
            alt="White-labeled booking page frontend preview"
            width={400}
            height={250}
            priority
            className="rounded-t-lg w-full h-auto object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <figcaption className="sr-only">White-Labeled Booking Page image</figcaption>
        </figure>
      </HoverSlide>
      <div className="p-4 sm:p-6 flex flex-col text-left">
        <div className="flex items-center gap-2">
          <Image
            src="/image/booking-icon.png"
            alt="Booking icon"
            width={20}
            height={28}
            priority
          />
          <h3 className="text-lg sm:text-1xl font-bold text-black">Online Integration</h3>
        </div>
        <p className="text-[#797A7D] font-medium mt-2 text-sm">
          - Website booking widget (simple copy & paste script)<br/>
          - Website Chatbot for real-time answering queries, booking appointments or conversations (simple copy & paste script)<br/>
          - 24/7 online + phone coverage for clients<br/>
        </p>
        <div className="flex items-center mt-3">
          <Image
            src="/image/thumbs-up.png"
            alt="thumbs-up"
            width={16}
            height={16}
            priority
            aria-hidden="true"
          />
          <p className="ml-1 text-xs text-[#6B7280]">94% Satisfaction</p>
        </div>
      </div>
    </article>
  </FadeInOnScroll>
</div>

        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Key Features",
              description:
                "Key features like AI phone handling, appointment scheduling, smart transcription, voice memo capture, branded dashboards and white-labeled booking pages.",
              mainEntity: [
                { "@type": "Feature", name: "AI Phone Handling" },
                { "@type": "Feature", name: "Appointment Scheduling" },
                { "@type": "Feature", name: "Smart Transcription" },
                { "@type": "Feature", name: "Voice Memo Capture" },
                { "@type": "Feature", name: "Branded Dashboard" },
                { "@type": "Feature", name: "White-Labeled Booking Page" },
              ],
            }),
          }}
        />

 </section>

      
      {/* =============================     
         {/* WHY CHOOSE US SECTION */}
      {/* ===============================*/}
      <main>
        <section
          className="py-16 relative w-full bg-background- min-h-screen
          bg-[linear-gradient(120deg,#e6f0ff_0%,#ffffff_100%),url('/image/choose.png')] 
          bg-cover bg-center bg-no-repeat"
          aria-labelledby="why-choose-heading"
        >
          {/* Decorative Quarter Circles */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-20 h-20 bg-[#e6f0ff] rounded-bl-[100%]"
          ></div>
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-20 h-20 bg-[#e6f0ff] rounded-tr-[100%]"
          ></div>
          <div className="max-w-5xl mx-auto px-6 text-center p-10">
            {/* Heading */}
            <RotateIn>
              <h2
                id="why-choose-heading"
                className="text-3xl md:text-5xl font-bold text-[#00A7DE] mb-2"
              >
                Why Choose Us?
              </h2>
            </RotateIn>
            {/* Bar */}
            <RotateIn delay={0.2}>
              <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-6 rounded-full"></div>
            </RotateIn>
            {/* Subheading + Description */}
            <RotateIn delay={0.4}>
              <h3 className="text-xl md:text-4xl font-semibold text-gray-800 mb-4">
                Why Businesses Trust Our <br />
                Virtual Receptionist
              </h3>
              <p className="text-[#797A7D] max-w-2xl font-normal text-base mx-auto mb-10">
                We combine human-like AI with powerful automation so you can
                focus on growing your business.
              </p>
            </RotateIn>
            {/* Features List */}
            <ul className="space-y-6 text-left max-w-2xl mx-auto">
              {[
                {
                  title: "Always Available",
                  description:
                    "Never miss a call again. Our virtual receptionist works 24/7, ensuring your business is always accessible to clients.",
                  icon: "/image/Tick-icon.png",
                },
                {
                  title: "Seamless Scheduling",
                  description:
                    "Works with your existing calendars to automate appointment booking and reduce scheduling conflicts.",
                  icon: "/image/Tick-icon.png",
                },
                {
                  title: "Industry Ready",
                  description:
                    "From healthcare to wellness, our solution adapts to your industry’s specific needs and requirements.",
                  icon: "/image/Tick-icon.png",
                },
                {
                  title: "Branded For You",
                  description:
                    "Fully customisable to your business - upload your logo, choose your brand colours, and tailor the interface to perfectly match your theme.",
                  icon: "/image/Tick-icon.png",
                },
                {
                  title: "Future-Proof Tech",
                  description:
                    "Built with advanced AI and automation to ensure your business stays at the forefront of communication technology.",
                  icon: "/image/Tick-icon.png",
                },
              ].map((item, idx) => (
                <RotateIn key={idx} delay={0.2 * idx}>
                  <li className="flex items-start space-x-3">
                    <Image
                      src={item.icon}
                      alt={`${item.title} feature icon`}
                      width={24}
                      height={24}
                      className="mt-1"
                      priority
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-[#000000]">
                        {item.title}
                      </h4>
                      <p className="text-[#797A7D] text-sm">
                        {item.description}
                      </p>
                    </div>
                  </li>
                </RotateIn>
              ))}
            </ul>
            {/* Buttons */}
            <RotateIn delay={1.2}>
              <div className="mt-10 flex justify-center space-x-4">
                <Link
                  href="https://admin.virtualassistant.com.au/register" target="_blank" rel="noopener noreferrer"
                  className="bg-[#00A7DE] text-white px-6 py-3 rounded-lg shadow font-medium
                  transition-all duration-300 ease-in-out
                  hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                >
                  Start Free Trial
                </Link>

                <Link
                  href="https://calendar.app.google/g5bCnhaSJocufjFr5" target="_blank" rel="noopener noreferrer"
                  className="border border-[#00A7DE] text-[#00A7DE] px-6 py-3 rounded-lg font-medium
                  transition-all duration-300 ease-in-out
               hover:bg-[#00A7DE] hover:text-white
                 hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                >
                  Schedule Demo
                </Link>
              </div>
            </RotateIn>
          </div>
        </section>

        {/* BUILT FOR 20+ INDUSTRIES */}
        <motion.section
          className="w-full bg-[#F9FAFB] py-16 relative"
          aria-labelledby="industries-heading"
        >
          {/* Decorative Quarter Circle */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 w-20 h-20 bg-[#e6f0ff] rounded-br-[100%]"
          ></div>

          <div className="max-w-6xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2
              id="industries-heading"
              className="text-3xl md:text-5xl font-bold text-[#00A7DE] mb-2"
            >
              Built for all service based Industries
            </h2>
            {/* underline bar */}
            <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-6 rounded-full"></div>

            <p className="text-[#797A7D] text-base mb-12">
              Our AI receptionist adapts to your specific industry needs with specialized vocabulary and  workflows.
            </p>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              {industries.map((item, index) => (
                <ScaleUp key={index} delay={index * 0.1}>
                  <article className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition h-full flex flex-col justify-between">
                    {/* Flex container for icon and heading */}
                    <div className="flex items-center gap-4 mb-4">
                      <Image
                        src={item.icon}
                        alt={`${item.title} industry icon`}
                        width={64}
                        height={64}
                        priority
                      />
                      <h3 className="text-lg text-black font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description and link */}
                    <div className="text-left">
                      <p className="text-[#797A7D] text-sm mb-4">{item.desc}</p>
                      <Link
                        href={`/industries/${item.slug}`}
                        className="text-[#00A7DE] font-medium hover:underline"
                      >
                        Learn More
                      </Link>
                    </div>
                  </article>
                </ScaleUp>
              ))}
            </div>
            {/* Button */}
            <div className="mt-12">
              <Link
                href="/industries"
                className="px-6 py-3 bg-[#EFF6FF] text-black font-medium rounded-md shadow
             transition-all duration-300 ease-in-out
             hover:bg-[#00A7DE] hover:text-white
             hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
              >
                View All Industries
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
      {/* HOW IT WORKS SECTION */}
      <section
        id="how-it-works"
        className="w-full bg-gradient-to-r from-white to-blue-50 py-16"
      >
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* ==== Heading ==== */}
          <h2 className={sectionHeading}>How It Works</h2>

          {/* underline bar */}
          <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-3 rounded-full"></div>

          <p className="text-[#797A7D] mb-12 max-w-2xl mx-auto">
            Our AI assistant handles your calls from start to finish, just like
            a human receptionist.
          </p>

          {/* ==== Steps ==== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 items-stretch justify-center">
            {/* Step 1 */}
            <ScrollSlide direction="left">
              <article className="flex flex-col items-center">
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 animation-blink">
                  <Image
                    src="/feature-images/cr.png"
                    alt="Client calling phone icon"
                    width={68.97}
                    height={68.97}
                    priority
                  />
                </div>

                {/* Box */}
                <div
                  className="relative mt-6 bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between 
             border-t-4 border-[#00A7DE] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out
             w-[309.19px] h-[116.38px] min-w-full"
                >
                  <h3 className={stepTitle}>Client calls</h3>
                  <p className={stepDesc}>
                    AI answers with your business
                    <br /> greeting
                  </p>
                  <span
                    className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 
                     w-8 h-8 flex items-center justify-center text-sm font-semibold 
                     text-[#00A7DE] border border-[#00A7DE] bg-white rounded-full shadow-sm"
                    aria-label="Step 1"
                  >
                    1
                  </span>
                </div>
              </article>
            </ScrollSlide>

            {/* Step 2 */}
            <ScrollSlide direction="up" delay={0.2}>
              <article className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="/feature-images/ts.png"
                    alt="Calendar booking icon"
                    width={68.97}
                    height={68.97}
                    priority
                  />
                </div>

                <div
                  className="relative mt-6 bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between
             border-t-4 border-[#00A7DE] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out
             w-[309.19px] h-[116.38px] min-w-full"
                >
                  <h3 className={stepTitle}>Appointment booked</h3>
                  <p className={stepDesc}>Syncs with your calendar instantly</p>
                  <span
                    className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 
                     w-8 h-8 flex items-center justify-center text-sm font-semibold 
                     text-[#00A7DE] border border-[#00A7DE] bg-white rounded-full shadow-sm"
                    aria-label="Step 2"
                  >
                    2
                  </span>
                </div>
              </article>
            </ScrollSlide>

            {/* Step 3 */}
            <ScrollSlide direction="right" delay={0.4}>
              <article className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="/feature-images/fu.png"
                    alt="Notes and transcript document icon"
                    width={68.97}
                    height={68.97}
                    priority
                  />
                </div>

                <div
                  className="relative mt-6 bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between
             border-t-4 border-[#00A7DE] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out
             w-[309.19px] h-[116.38px] min-w-full"
                >
                  <h3 className={stepTitle}>
                    Call Summary, Transcript &<br /> Recordings
                  </h3>
                  <p className={stepDesc}>Saved in your CRM automatically</p>
                  <span
                    className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 
                     w-8 h-8 flex items-center justify-center text-sm font-semibold 
                     text-[#00A7DE] border border-[#00A7DE] bg-white rounded-full shadow-sm"
                    aria-label="Step 3"
                  >
                    3
                  </span>
                </div>
              </article>
            </ScrollSlide>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
<ScaleUp>
  <section id="pricing" className="scroll-mt-[150px] md:scroll-mt-[90px] lg:scroll-mt-[72px] bg-[#F9FAFB] py-20">
    <div className="max-w-6xl mx-auto px-6 text-center">
      {/* Heading */}
      <h2 className="text-5xl md:text-5xl font-bold text-[#00A7DE] relative inline-block">
        Simple, Transparent Pricing
        <span className="block w-16 h-1 bg-[#098DC9] rounded-full mx-auto mt-5 mb-5"></span>
      </h2>
      <p className="text-[#797A7D] mb-6">
        Choose the perfect plan for your business needs.
      </p>

      {/* Toggle */}
      <div className="flex justify-center items-center mb-12 space-x-2">
        <span
          className={`cursor-pointer text-sm ${
            billingCycle === "monthly"
              ? "text-blue-400 font-semibold"
              : "text-[#797A7D]"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={billingCycle === "yearly"}
            onChange={() =>
              setBillingCycle(
                billingCycle === "monthly" ? "yearly" : "monthly"
              )
            }
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#098DC9] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
        </label>
        <span
          className={`cursor-pointer text-sm ${
            billingCycle === "yearly"
              ? "text-[#098DC9] font-semibold"
              : "text-[#797A7D]"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly <span className="text-green-600 ml-1">Save 20%</span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => {
          const isYearly = billingCycle === "yearly";
          const monthlyPrice = plan.price;
          const yearlyPrice =
            monthlyPrice && (monthlyPrice * 12 * 0.8).toFixed(0); // 20% off
          const displayPrice = isYearly ? yearlyPrice : monthlyPrice;
          const cycleText = isYearly ? "/year" : monthlyPrice ? "/month" : "";

          return (
            <ScaleUp key={index} delay={index * 0.1}>
              <div
                className={`relative bg-white border rounded-2xl shadow-md p-8 flex flex-col text-left transition-transform transform hover:-translate-y-2 hover:shadow-xl h-full min-h-[600px] w-full sm:w-80 ${
                  plan.highlighted
                    ? "border-[#00A7DE] scale-105"
                    : "border-[#797A7D]"
                } hover:border-[#00A7DE]`}
              >
                {plan.highlighted && (
                  <span className="absolute top-0 right-0 bg-[#00A7DE] text-white text-[11px] font-semibold tracking-wide px-3 py-1 rounded-tr-lg rounded-bl-md shadow-sm">
                    MOST POPULAR
                  </span>
                )}

                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>

                {/* Dynamic Price */}
                <div className="text-3xl font-bold text-gray-800 mb-6">
                  {displayPrice ? `$${displayPrice}` : "Custom"}
                  <span className="text-base font-normal text-gray-500">
                    {cycleText}
                  </span>

                  {billingCycle === "yearly" && monthlyPrice && (
                    <span className="block text-sm text-gray-400 mt-1">
                      (${(monthlyPrice * 0.8).toFixed(0)} / month)
                    </span>
                  )}
                </div>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-2 text-gray-600"
                    >
                      <Image
                        src="/image/check.png"
                        alt="check"
                        width={23}
                        height={23}
                        priority
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="https://admin.virtualassistant.com.au/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`mt-8 w-full py-3 rounded-lg font-medium transition-all duration-300 ease-in-out ${
                      plan.highlighted
                        ? "bg-[#00A7DE] text-white hover:bg-[#098DC9] hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105"
                    }`}
                  >
                    {plan.button}
                  </button>
                </Link>
              </div>
            </ScaleUp>
          );
        })}
      </div>
    </div>
  </section>
</ScaleUp>

      {/* WHAT OUR CLIENT SAY SECTION */}

<section className="bg-gradient-to-r from-blue-50 to-white py-16 px-15 sm:px-6 lg:px-8 font-poppins">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-[#00A7DE] relative inline-block mb-6">
      What Our Clients Say
      <span className="block w-16 h-1 bg-[#098DC9] rounded-full mx-auto mt-4"></span>
    </h2>
    <p className="text-gray-500 mb-12">
      Businesses across industries are saving time and improving customer satisfaction
      <br /> with our virtual receptionist solution.
    </p>

    <div className="overflow-hidden text-left">
      <motion.div
        className="flex gap-6"
        animate={{
          x: `-${(100 / cardCount) * activeIndex}%`,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] bg-white p-6 rounded-xl shadow-md flex flex-col justify-between`}
          >
            <div className="flex flex-col mb-6">
              <div className="mb-5">
                <Image src={t.stars} alt="Stars" width={300} height={80} />
              </div>
              <p className="text-gray-700 text-[16px]">{t.quote}</p>
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover border-2 border-sky-200"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-semibold text-lg text-[#000000]">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
</section>
    </>
  );
}
