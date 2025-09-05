"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import FadeInOnScroll from "./_components/animations/FadeInScroll";
import HoverSlide from "./_components/animations/HoverSlider";
import HeroAnimation from "./_components/heroanimation";
import ScrollSlide from "./_components/animations/scrollslide";
import RotateIn from "./_components/animations/RotateIn";
import ScaleUp from "./_components/animations/ScaleUp";
import ReviewSlider from "./_components/animations/reviewslider";
import { ScrollAnimation, fadeInUp } from "./_components/animations/demo";
import { slideUp } from "./_components/animations/footer";
import useScrollAnimation from "./_components/animations/scrolleranimation";
import { slideUpChild } from "./_components/animations/footer";
import { staggerContainer } from "./_components/animations/footer";
import { Menu, X } from "lucide-react"; // hamburger & close icons

export default function Home({}) {
  useScrollAnimation();

  const [isOpen, setIsOpen] = useState(false);
  // =======================
  // build 20+ industries
  // =======================
  const industries = [
    {
      icon: "/images/physiotherapist.png",
      title: "Physiotherapist",
      desc: "Your AI manages appointment bookings, reminders, follow-ups, and patient records so you spend more time on treatment.",
    },
    {
      icon: "/images/myotherapist.png",
      title: "Myotherapist",
      desc: (
        <>
          Automates client bookings, tracks therapy sessions, and keeps your
          calendar
          <br /> organized.
        </>
      ),
    },
    {
      icon: "/images/massage-therapist.png",
      title: "Massage Therapist",
      desc: (
        <>
          Effortless Bookings for Massage Therapists. Relax your clients while
          we handle your schedule.
        </>
      ),
    },
    {
      icon: "/images/lawyer.png",
      title: "Lawyer",
      desc: "Smarter Scheduling for Consultants. Books client calls, manages packages, and tracks deliverables.",
    },
    {
      icon: "/images/restaurant.png",
      title: "Restaurant",
      desc: "Reservation Management Made Easy. Manages table bookings, cancellations, and automated waitlists.",
    },
    {
      icon: "/images/personal-trainer.png",
      title: "Personal Trainer",
      desc: "Power Up Your Training Business. Automates client scheduling, payment reminders, and progress updates.",
    },
    {
      icon: "/images/psychologist.png",
      title: "Psychologist",
      desc: "Secure & Smooth Support for Psychologists. Handles patient reminders, intake forms, and secure follow-ups.",
    },
    {
      icon: "/images/chiropractor.png",
      title: "Chiropractor",
      desc: "Precision Scheduling for Chiropractors. Organizes client visits, recalls, and automates reminders.",
    },
    {
      icon: "/images/podiatrist.png",
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
      price: "$300",
      cycle: "/month",
      description: "1 User",
      features: [
        "AI call answering",
        "10 hours of call time/month",
        "Basic appointment booking",
        "Email notifications",
        "Call transcriptions",
      ],
      button: "Start Now",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$400",
      cycle: "/month",
      description: "Upto 3 Users",
      features: [
        "AI Virtual Assistant 24/7",
        "Advanced Dashboard with Analytics",
        "Advanced CRM for all Client Data and History",
        "AI Powered Smart Calendars",
        "New Dedicated Number or Call Forwarding Options",
        "Front End AI Prompt Training for your AI",
        "AI Appointment Scheduling",
        "Unlimited Incoming Calls 24/7",
      ],
      button: "Start Now",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$500",
      cycle: "/month",
      description: "Upto 5 Users",
      features: [
        "Everything in Pro",
        "Multiple phone lines",
        "API access",
        "Custom integrations",
        "White-labeled solution",
        "Dedicated account manager",
        "99.9% uptime SLA",
      ],
      button: "Start Now",
      highlighted: false,
    },
    {
      name: "Custom Package",
      price: "",
      cycle: "",
      description: "",
      features: [],
      button: "Start Now",
      highlighted: false,
    },
  ];

  // =================================
  //   what our client says
  // ==================================
  const sectionHeading1 =
    "text-4xl md:text-4xl font-bold text-black text-primary relative inline-block";
  const subHeading = "text-muted text-[#797A7D] text-base mb-12";

  const testimonials = [
    {
      name: "Dr. James Wilson",
      title: "Wellness Clinic Owner",
      quote:
        "Since implementing this virtual receptionist, we've increased our appointment bookings by 35% and reduced no-shows. The system is incredibly intuitive and our clients love it!",
      image: "/images/avatar1.png",
      stars: "/images/star5.png",
    },
    {
      name: "Emily Rodriguez",
      title: "Law Firm Partner",
      quote:
        "The white-label feature is a game-changer. Our clients think they're talking to our in-house receptionists, which maintains our professional image while saving us thousands in staffing costs.",
      image: "/images/avatar2.png",
      stars: "/images/star5.png",
    },
    {
      name: "Robert Chen",
      title: "Tech Startup Founder",
      quote:
        "The AI technology is impressive. It handles complex scheduling requests and even manages to answer basic questions about our services. It's like having an extra team member who never takes a day off.",
      image: "/images/avatar3.png",
      stars: "/images/star4.png",
    },
  ];
  //  =========================
  //   //How it works section
  //  ==========================
  const sectionHeading =
    "text-3xl md:text-5xl font-bold  text-[#00A7DE] text-primary mb-2"; // update once  applies everywhere
  const stepTitle = "font-semibold text-3sm text-black mb-2";
  const stepDesc = "text-[#797A7D] text-sm";
  const stepBox =
    "bg-white rounded-lg shadow-md p-6 border-t-4 border-[#0097DA] text-center relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl";
  //   Section 1 Home page
  return (
    <>
      {/* Meta Tags */}
      <Head>
        <title>Transform Your Business with AI-Powered Assistants</title>
        <meta
          name="description"
          content="Tailored solutions for every industry, designed to save time, cut costs, and boost productivity."
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
          content="https://virtual-assistant-uwfn.vercel.app/"
        />
      </Head>
      {/* Main section */}

      <main className="bg-[url('/images/Hero.png')] bg-cover bg-center bg-no-repeat w-full min-h-[600px] lg:h-[800px]">
        {/* HEADER */}
        <header className="w-full bg-white shadow-lg">
          <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-4 sm:px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                width={177.01}
                height={40}
                className="pl-2 sm:pl-4"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
                <li>
                  <Link href="/" className="text-[#00A7DE]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    Features
                  </Link>
                </li>
                <li className="relative group">
                  <Link
                    href="/industries"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    Industries
                  </Link>
                  {/* Dropdown */}
                  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100]">
                    <li>
                      <Link
                        href="/industries/Physotherapist"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Physiotherapist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/myotherapist"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Myotherapist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/personaltrainer"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Personal Trainer
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/massagetherapist"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Massage Therapist
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/psychology"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Psychology
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/industries/chiropractor"
                        className="block px-4 py-2 text-black hover:text-[#00A7DE]"
                      >
                        Chiropractor
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-black hover:text-[#00A7DE]"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="bg-[#00A7DE] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                width={150}
                height={40}
              />
              <button onClick={() => setIsOpen(false)}>
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col space-y-4 p-6 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="/industries"
                  className="text-black hover:text-[#00A7DE]"
                >
                  Industries
                </Link>
                {/* Dropdown */}
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100]">
                  <li>
                    <Link
                      href="/industries/Physotherapist"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Physiotherapist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/myotherapist"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Myotherapist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/personaltrainer"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Personal Trainer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/massagetherapist"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Massage Therapist
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/psychology"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Psychology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/chiropractor"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Chiropractor
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-black hover:text-[#00A7DE]"
                  onClick={() => setIsOpen(false)}
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="bg-[#00A7DE] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105 w-full sm:w-auto text-center sm:text-left"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </header>

        {/* HERO SECTION */}
        <section className="relative w-full h-auto overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/bg.png"
              alt="Background"
              width={1260}
              height={800}
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Content Container */}
          <div className="flex flex-col items-center justify-center text-center px-4 py-16 sm:py-20 lg:flex-row lg:text-left lg:justify-between lg:px-8 max-w-7xl mx-auto gap-10">
            {/* Left Content */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col pl-4 items-center lg:items-start text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#00A7DE] font-semibold tracking-wide">
                Take Your Business Into The Future
              </h3>

              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
                <Typewriter
                  words={[
                    "Transform Your Business with AI-Powered Virtual Assistants",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={50}
                />
              </h1>

              <p className="mt-4 text-sm sm:text-base text-[#797A7D]">
                Tailored solutions for every industry, designed to save time,
                cut costs, and boost productivity.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/get-started"
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

            {/* Right side image with animation */}
            <motion.div
              className="flex justify-center items-center  w-full  lg:w-1/2"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <HeroAnimation>
                <Image
                  src="/images/card.png"
                  alt="AI Business Assistant"
                  width={640}
                  height={360}
                  quality={100}
                  priority
                  className="max-w-full translate-x-[50px] h-auto"
                />
              </HeroAnimation>
            </motion.div>
          </div>
        </section>
      </main>

      {/* KEY FEATURES SECTION  */}

      <section
        className="py-16 bg-[#F9FAFB]"
        aria-labelledby="key-features-heading"
        role="region"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Title */}
          <h2
            id="key-features-heading"
            className="text-3xl sm:text-4xl font-semibold text-[#00A7DE] mb-2"
          >
            Key Features
          </h2>
          <div
            className="w-12 h-0.5 bg-[#098DC9] mx-auto mb-6 rounded-full"
            aria-hidden="true"
          ></div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <FadeInOnScroll>
              <article
                className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col h-full"
                aria-labelledby="feature-1-title"
              >
                <HoverSlide>
                  <figure className="m-0">
                    <Image
                      src="/images/ai-phone.png"
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
                <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/ai-phone-icon.png"
                      alt="AI phone icon"
                      width={20}
                      height={28}
                       priority
                    />
                    <h3
                      id="feature-1-title"
                      className="text-lg sm:text-1xl font-bold text-black"
                    >
                      AI Phone Handling
                    </h3>
                  </div>
                  <p className="text-[#797A7D] font-medium mt-2 text-sm">
                    Professional call answering with natural responses and
                    context awareness (like “We’re right next to the post
                    office”).
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up.png"
                      alt="Thumbs Up"
                      width={16}
                      height={16}
                       priority
                    />

                    <p className="ml-1 text-xs text-[#6B7280]">
                      98% Satisfaction
                    </p>
                  </div>
                </div>
              </article>
            </FadeInOnScroll>

            {/* Feature 2 */}
            <FadeInOnScroll>
              <article
                className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col h-full"
                aria-labelledby="feature-2-title"
              >
                <HoverSlide>
                  <figure className="m-0">
                    <Image
                      src="/images/calender3.png"
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
                <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/appointment-icon.png"
                      alt="Appointment icon"
                      width={20}
                      height={28}
                       priority
                    />
                    <h3
                      id="feature-2-title"
                      className="text-lg sm:text-1xl font-bold text-black"
                    >
                      Appointment Scheduling
                    </h3>
                  </div>
                  <p className="text-[#797A7D] font-medium mt-2 text-sm">
                    Direct bookings with Google Calendar or Cal.com integration,
                    eliminating scheduling conflicts and back-and-forth emails.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up.png"
                      alt="thumbs-up"
                      width={16}

                      height={16}
                       priority
                      aria-hidden="true"
                    />
                    <p className="ml-1 text-xs text-[#6B7280]">
                      95% Satisfaction
                    </p>
                  </div>
                </div>
              </article>
            </FadeInOnScroll>

            {/* Feature 3 */}
            <FadeInOnScroll>
              <article
                className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col h-full"
                aria-labelledby="feature-3-title"
              >
                <HoverSlide>
                  <figure className="m-0">
                    <Image
                      src="/images/transcription.png"
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
                <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/transcription-icon.png"
                      alt="Transcription icon"
                      width={20}
                      height={28}
                       priority
                    />
                    <h3
                      id="feature-3-title"
                      className="text-lg sm:text-1xl font-bold text-black"
                    >
                      Smart Transcription
                    </h3>
                  </div>
                  <p className="text-[#797A7D] font-medium mt-2 text-sm">
                    Conversations, Call summary and recordings transcribed
                    instantly, stored with notes for easy searchability.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up.png"
                      alt="thumbs-up"
                      width={16}
                      height={16}
                       priority
                      aria-hidden="true"
                    />
                    <p className="ml-1 text-xs text-[#6B7280]">
                      92% Satisfaction
                    </p>
                  </div>
                </div>
              </article>
            </FadeInOnScroll>

            {/* Feature 4 */}
            <FadeInOnScroll>
              <article
                className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col h-full"
                aria-labelledby="feature-4-title"
              >
                <HoverSlide>
                  <figure className="m-0">
                    <Image
                      src="/images/voice-memo.png"
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
                <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/voice-memo-icon.png"
                      alt="Voice memo icon"
                      width={20}
                      height={28}
                       priority
                    />
                    <h3
                      id="feature-4-title"
                      className="text-lg sm:text-1xl font-bold text-black"
                    >
                      Voice Memo Capture
                    </h3>
                  </div>
                  <p className="text-[#797A7D] font-medium mt-2 text-sm">
                    Record voice memos after appointments and automatically link
                    them to client files for comprehensive record-keeping.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up.png"
                      alt="thumbs-up"
                      width={16}
                      height={16}
                       priority
                      aria-hidden="true"
                    />
                    <p className="ml-1 text-xs text-[#6B7280]">
                      89% Satisfaction
                    </p>
                  </div>
                </div>
              </article>
            </FadeInOnScroll>

            {/* Feature 5 */}
            <FadeInOnScroll>
              <article
                className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col h-full"
                aria-labelledby="feature-5-title"
              >
                <HoverSlide>
                  <figure className="m-0">
                    <Image
                      src="/images/branded.png"
                      alt="Branded dashboard showcasing company colors and logo"
                      width={400}
                      height={250}
                       priority
                      className="rounded-t-lg w-full h-auto object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <figcaption className="sr-only">
                      Branded Dashboard image
                    </figcaption>
                  </figure>
                </HoverSlide>
                <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/branded-icon.png"
                      alt="Branded dashboard icon"
                      width={20}
                      height={28}
                       priority
                    />
                    <h3
                      id="feature-5-title"
                      className="text-lg sm:text-1xl font-bold text-black"
                    >
                      Branded Dashboard
                    </h3>
                  </div>
                  <p className="text-[#797A7D] font-medium mt-2 text-sm">
                    Easy-to-use backend customized for your business with your
                    logo, colors, and preferred layout options.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up.png"
                      alt="thumbs-up"
                      width={16}
                      height={16}
                       priority
                      aria-hidden="true"
                    />
                    <p className="ml-1 text-xs text-[#6B7280]">
                      96% Satisfaction
                    </p>
                  </div>
                </div>
              </article>
            </FadeInOnScroll>

            {/* Feature 6 */}
            <FadeInOnScroll>
              <article
                className="rounded-lg shadow-md border hover:shadow-lg transition flex flex-col h-full"
                aria-labelledby="feature-6-title"
              >
                <HoverSlide>
                  <figure className="m-0">
                    <Image
                      src="/images/booking1.png"
                      alt="White-labeled booking page frontend preview"
                      width={400}
                      height={250}
                       priority
                      className="rounded-t-lg w-full h-auto object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <figcaption className=" text-3xl sr-only">
                      White-Labeled Booking Page image
                    </figcaption>
                  </figure>
                </HoverSlide>
                <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/booking-icon.png"
                      alt="Booking icon"
                      width={20}
                      height={28}
                       priority
                    />
                    <h3
                      id="feature-6-title"
                      className="text-lg sm:text-1xl font-bold text-black"
                    >
                      White-Labeled Booking Page
                    </h3>
                  </div>
                  <p className="text-[#797A7D] font-medium mt-2 text-sm">
                    Seamless, branded booking experience for your clients that
                    matches your company’s visual identity.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up.png"
                      alt="thumb-up"
                      width={16}
                      height={16}
                       priority
                      aria-hidden="true"
                    />
                    <p className="ml-1 text-xs text-[#6B7280]">
                      94% Satisfaction
                    </p>
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
          bg-[linear-gradient(120deg,#e6f0ff_0%,#ffffff_100%),url('/images/choose.png')] 
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
                  icon: "/images/Tick-icon.png",
                },
                {
                  title: "Seamless Scheduling",
                  description:
                    "Works with your existing calendars to automate appointment booking and reduce scheduling conflicts.",
                  icon: "/images/Tick-icon.png",
                },
                {
                  title: "Industry Ready",
                  description:
                    "From healthcare to wellness, our solution adapts to your industry’s specific needs and requirements.",
                  icon: "/images/Tick-icon.png",
                },
                {
                  title: "Branded For You",
                  description:
                    "White-label dashboard & booking interfaces that seamlessly integrate with your brand identity.",
                  icon: "/images/Tick-icon.png",
                },
                {
                  title: "Future-Proof Tech",
                  description:
                    "Built on Twilio, AI, & automation to ensure your business stays at the forefront of communication technology.",
                  icon: "/images/Tick-icon.png",
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
                  href="/free-trial"
                  className="bg-[#00A7DE] text-white px-6 py-3 rounded-lg shadow font-medium
                  transition-all duration-300 ease-in-out
                  hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                >
                  Start Free Trial
                </Link>

                <Link
                  href="/schedule-demo"
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
        <section
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
              Built for 20+ Industries
            </h2>
            {/* underline bar */}
            <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-6 rounded-full"></div>

            <p className="text-[#797A7D] text-base mb-12">
              Our AI receptionist adapts to your specific industry needs with
              specialized vocabulary and workflows.
            </p>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              {industries.map((item, index) => (
                <ScaleUp key={index} delay={index * 0.1}>
                  <article className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
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
                        href={`/industries/${item.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
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
        </section>
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
              src="/images/phone.png"
              alt="Client calling phone icon"
              width={68.97}
              height={68.97}
              priority
            />
          </div>

          {/* Box */}
          <div
            className="relative mt-6 bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between 
                       border-t-4 border-[#00A7DE] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            style={{ width: "309.19px", height: "116.38px", minWidth: "100%" }}
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
              src="/images/calender1.png"
              alt="Calendar booking icon"
              width={68.97}
              height={68.97}
              priority
            />
          </div>

          <div
            className="relative mt-6 bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between 
                       border-t-4 border-[#00A7DE] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            style={{ width: "309.19px", height: "116.38px", minWidth: "100%" }}
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
              src="/images/doc.png"
              alt="Notes and transcript document icon"
              width={68.97}
              height={68.97}
              priority
            />
          </div>

          <div
            className="relative mt-6 bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between 
                       border-t-4 border-[#00A7DE] hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
            style={{ width: "309.19px", height: "116.38px", minWidth: "100%" }}
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
        <section className="bg-[#F9FAFB] py-20 ">
          <div className="max-w-6xl mx-auto px-6 text-center">
            {/* Heading */}
            <h2 className="text-5xl md:text-4xl font-bold text-[#00A7DE] relative inline-block">
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {plans.map((plan, index) => (
                <ScaleUp key={index} delay={index * 0.1}>
                  <div
                    className={`relative bg-white border rounded-2xl shadow-md p-8 flex flex-col text-left transition-transform transform hover:-translate-y-2 hover:shadow-xl h-full min-h-[600px] ${
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
                    <div className="text-3xl font-bold text-gray-800 mb-6">
                      {plan.price}
                      <span className="text-base font-normal text-gray-500">
                        {plan.cycle}
                      </span>
                    </div>
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start space-x-2 text-gray-600"
                        >
                          <Image
                            src="/images/check.png"
                            alt="check"
                            width={23}
                            height={23}
                             priority
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`mt-8 w-full py-3 rounded-lg font-medium transition-all duration-300 ease-in-out ${
                        plan.highlighted
                          ? "bg-[#00A7DE] text-white hover:bg-[#098DC9] hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md hover:scale-105"
                      }`}
                    >
                      {plan.button}
                    </button>
                  </div>
                </ScaleUp>
              ))}
            </div>
          </div>
        </section>
      </ScaleUp>
      {/* WHAT OUR CLIENT SAY SECTION */}
      <>
        <section
          className="bg-gradient-to-r from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8"
          aria-labelledby="testimonials-title"
        >
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Heading */}
            <h2 id="testimonials-title" className={sectionHeading1}>
              What Our Clients Say
              <span className="block w-16 h-1 bg-[#098DC9] rounded-full mx-auto mt-4 mb-5"></span>
            </h2>
            {/* Subheading */}
            <p className={subHeading}>
              Businesses across industries are saving time and improving
              customer satisfaction
              <br /> with our virtual receptionist solution.
            </p>

            {/* Review Slider */}
            <ReviewSlider testimonials={testimonials} />
          </div>
        </section>

        {/* ===== DEMO SECTION ===== */}
        <section
          className="w-full bg-gradient-to-b from-[#0097DA] via-[#00BAF2] to-[#8FD8F8] py-20 text-center"
          aria-labelledby="demo-title"
        >
          <div className="max-w-3xl mx-auto px-4">
            <ScrollAnimation variant={fadeInUp}>
              <h2
                id="demo-title"
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                Ready to Transform Your Business?
              </h2>
            </ScrollAnimation>

            <ScrollAnimation variant={fadeInUp} threshold={0.1}>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of businesses already using our AI receptionist
              </p>
            </ScrollAnimation>

            {/* CTA Button */}
            <ScrollAnimation variant={fadeInUp} threshold={0.1}>
              <motion.a
                href="#book-demo"
                className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-sky-600 font-medium shadow-md overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-sky-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

                <motion.span
                  className="absolute inset-0 rounded-lg bg-sky-300 opacity-20"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                ></motion.span>

                <span className="relative flex items-center gap-2 z-10">
                  <Image
                    src="/images/calender.png"
                    alt="Calendar icon for demo booking"
                    width={20}
                    height={20}
                     priority
                  />
                  Book a Demo
                </span>
              </motion.a>
            </ScrollAnimation>
          </div>
        </section>
      </>
      {/* FOOTER SECTION */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={slideUp} // Footer slides up as a whole
        className="bg-[#FFFFFF] text-black py-10"
      >
        <motion.div
          className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8"
          variants={staggerContainer} // Stagger child animation for columns
        >
          {/* Logo & Info */}
          <motion.div className="col-span-1" variants={slideUpChild}>
            <Image
              src="/images/logo1.png"
              alt="Virtual Assistant Logo"
              width={180}
              height={60}
               priority
              className="mb-4"
            />
            <p className="text-sm mb-4 text-gray-500">
              Transforming industries with intelligent virtual assistants.
            </p>

            <div className="flex space-x-4">
              <Link href="#">
                <Image
                  src="/images/twitter.png"
                  alt="Twitter"
                  width={20}
                  height={20}
                   priority
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/linkedln.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                   priority
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                   priority
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                   priority
                />
              </Link>
            </div>
          </motion.div>

          {/* Pages */}
          <motion.div variants={slideUpChild}>
            <h3 className="font-semibold mb-3">Pages</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                "Home",
                "About",
                "Industries",
                "Pricing",
                "About",
                "Contact Us",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[#00A7DE] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries col 1 */}
          <motion.div variants={slideUpChild}>
            <h3 className="font-semibold mb-3">Industries</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                "Physiotherapist",
                "Myotherapist",
                "Massage Therapist",
                "Personal Trainer",
                "Psychologist",
                "Chiropractor",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[#00A7DE] 0 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries col 2 */}
          <motion.div variants={slideUpChild}>
            <h3 className="font-semibold mb-3">Industries</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                "Podiatrist",
                "Beauty Therapist",
                "Hairdresser",
                "Dentist",
                "Accountant",
                "Lawyer",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[#00A7DE] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries col 3 */}
          <motion.div variants={slideUpChild}>
            <h3 className="font-semibold mb-3">Industries</h3>
            <ul className="space-y-2 text-gray-600">
              {[
                "Consultant",
                "Real Estate Agent",
                "Mechanic",
                "Plumber",
                "Electrician",
                "Window Cleaning",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[#00A7DE] 0 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          variants={slideUpChild}
          className="border-t border-gray-300 mt-8 pt-4 text-center text-sm"
        >
          © 2025 VirtualAssistant. All rights reserved.
        </motion.div>
      </motion.footer>
    </>
  );
}
