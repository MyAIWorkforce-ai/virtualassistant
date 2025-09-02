"use client";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
import { slideUpChild } from "./_components/animations/footer";
import { staggerContainer } from "./_components/animations/footer";
// import { Pricing } from "../_components/animations/pricing";

export default function Home() {
  // build 20+ industries
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

  // Transparent Pricing
  const [billingCycle, setBillingCycle] = useState("monthly");
  const plans = [
    {
      name: "Starter",
      price: "$29",
      cycle: "/month",
      description: "Perfect for small businesses",
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
      name: "Pro",
      price: "$59",
      cycle: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Everything in Starter",
        "Unlimited call time",
        "Advanced appointment booking",
        "SMS notifications",
        "CRM integrations",
        "Custom greeting",
        "Priority support",
      ],
      button: "Start Now",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      cycle: "",
      description: "For larger organizations",
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
  ];

  //   what our client says
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

  //   Section 1 Home page
  return (
    <div className="bg-[url('/images/Hero.png')] bg-cover bg-center bg-no-repeat w-[1260px] h-[800px]">
      {/* HEADER */}
      <header className="w-full bg-white shadow-lg">
        <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo1.png" // image of the 1st grid feature
              alt="Logo"
              width={177.01}
              height={40}
              className="pl-4"
            ></Image>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center space-x-8 text-sm font-medium ">
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
              {/* Dropdown list */}
              <li className="relative group">
                {/* Parent Link */}
                <Link
                  href="/industries"
                  className="text-[#000000] hover:text-[#00A7DE]"
                >
                  Industries
                </Link>

                {/* Dropdown */}
                <ul
                  className="
    absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-300 ease-in-out delay-200
    z-[100]
  "
                >
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
                      personal Trainer
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
                      psychology
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
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-[#00A7DE]">
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
                <Link href="/login" className="text-black hover:text-[#00A7DE]">
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="bg-[#00A7DE] text-white px-5 py-2 rounded-full font-semibold 
             transition-all duration-300 ease-in-out
             hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* HERO SECTION */}
      <section className="relative  w-full overflow-hidden">
        {/* Background dots */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/dots-bg.png"
            alt="Background"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* Hero content */}
        <div className="max-w-full mx-auto px-0 py-20 pl-25 flex flex-col lg:flex-row items-center justify-between">
          {" "}
          {/* Left content */}
          <motion.div
            className="text-center lg:text-left max-w-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#00A7DE] font-semibold tracking-wide">
              Take Your Business Into The Future
            </h3>

            {/* Typewriter Heading */}
            <h1 className="mt-3 text-4xl lg:text-5xl font-extrabold text-black leading-tight">
              <Typewriter
                words={["Transform Your Business with AI-Powered Assistants"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
              />
            </h1>
            <p className="mt-4 text-base text-[#797A7D]">
              Tailored solutions for every industry, designed to save time, cut
              costs, and boost productivity.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* Primary button with slide hover */}
              <Link
                href="/get-started"
                className="bg-[#00A7DE] text-white px-6 py-3 rounded-full font-semibold
             transition-all duration-300 ease-in-out
             hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
              >
                Get Started
              </Link>

              {/* Outline button with slide hover */}
              <Link
                href="/industries"
                className=" text-black px-6 py-3 rounded-full font-semibold border-2 border-[#00A7DE] 
             transition-all duration-300 ease-in-out
             hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
              >
                Explore Industries
              </Link>
            </div>
          </motion.div>
          {/* Right side image */}
          <div className="flex justify-center items-center h-screen">
            <HeroAnimation>
              <Image
                src="/images/card.png"
                alt="AI Business Assistant"
                className="border-0 rotate-0dg"
                width={640}
                height={360}
                quality={100}
                loading="lazy"
                layout="intrinsic"
              />
            </HeroAnimation>
          </div>
        </div>
      </section>
      {/* KEY FEATURES SECTION  */}

      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Section Title */}
          <h2 className="text-4xl md:text-3xl font-semibold text-[#00A7DE] mb-2">
            Key Features
          </h2>
          <div className="w-12 h-0.5 bg-[#098DC9] mx-auto mb-6 rounded-full"></div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {/* Feature 1 */}
            <FadeInOnScroll>
              <div className="rounded-lg shadow-md border p-0 hover:shadow-lg transition">
                <HoverSlide>
                  <Image
                    src="/images/ai-phone.png"
                    alt="AI Phone Handling"
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                </HoverSlide>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/ai-phone-icon.png"
                      alt="AI Phone Icon"
                      width={20}
                      height={28}
                    />
                    <h3 className="text-xl font-bold text-black">
                      AI Phone Handling
                    </h3>
                  </div>
                  <p className="text-[#797A7D] text-left font-medium mt-2 text-sm">
                    Professional call answering with natural responses and
                    context awareness (like “We’re right next to the post
                    office”).
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up-icon.png"
                      alt="Thumbs Up"
                      width={16}
                      height={16}
                    />
                    <p className="mt-0 ml-1 text-xs text-[#6B7280]">
                      98% Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Feature 2 */}
            <FadeInOnScroll>
              <div className="rounded-lg shadow-md border p-0 hover:shadow-lg transition">
                <HoverSlide>
                  <Image
                    src="/images/Appointment.png"
                    alt="Appointment Scheduling"
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                </HoverSlide>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/appointment-icon.png"
                      alt="Appointment Icon"
                      width={20}
                      height={28}
                    />
                    <h3 className="text-xl font-bold text-black">
                      Appointment Scheduling
                    </h3>
                  </div>
                  <p className="text-[#797A7D] font-medium text-left mt-2 text-sm">
                    Direct bookings with Google Calendar or Cal.com integration,
                    eliminating scheduling conflicts and back-and-forth emails.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up-icon.png"
                      alt="Thumbs Up"
                      width={16}
                      height={16}
                    />
                    <p className="mt-0 ml-1 text-xs text-[#6B7280]">
                      95% Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Feature 3 */}
            <FadeInOnScroll>
              <div className="rounded-lg shadow-md border p-0 hover:shadow-lg transition">
                <HoverSlide>
                  <Image
                    src="/images/transcription.png"
                    alt="Smart Transcription"
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                </HoverSlide>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/transcription-icon.png"
                      alt="Transcription Icon"
                      width={20}
                      height={28}
                    />
                    <h3 className="text-xl font-bold text-black">
                      Smart Transcription
                    </h3>
                  </div>
                  <p className="text-[#797A7D] text-left font-medium mt-2 text-sm">
                    Conversations transcribed instantly, stored with session
                    notes for easy reference and searchability.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up-icon.png"
                      alt="Thumbs Up"
                      width={16}
                      height={16}
                    />
                    <p className="mt-0 ml-1 text-xs text-[#6B7280]">
                      92% Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Feature 4 */}
            <FadeInOnScroll>
              <div className="rounded-lg shadow-md border p-0 hover:shadow-lg transition">
                <HoverSlide>
                  <Image
                    src="/images/voice-memo.png"
                    alt="Voice Memo Capture"
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                </HoverSlide>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/voice-memo-icon.png"
                      alt="Voice Memo Icon"
                      width={20}
                      height={28}
                    />
                    <h3 className="text-xl font-bold text-black">
                      Voice Memo Capture
                    </h3>
                  </div>
                  <p className="text-[#797A7D] text-left font-medium mt-2 text-sm">
                    Record voice memos after appointments and automatically link
                    them to client files for comprehensive record-keeping.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up-icon.png"
                      alt="Thumbs Up"
                      width={16}
                      height={16}
                    />
                    <p className="mt-0 ml-1 text-xs text-[#6B7280]">
                      89% Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Feature 5 */}
            <FadeInOnScroll>
              <div className="rounded-lg shadow-md border p-0 hover:shadow-lg transition">
                <HoverSlide>
                  <Image
                    src="/images/branded.png"
                    alt="Branded Dashboard"
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                </HoverSlide>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/branded-icon.png"
                      alt="Branded Dashboard Icon"
                      width={20}
                      height={28}
                    />
                    <h3 className="text-xl font-bold text-black">
                      Branded Dashboard
                    </h3>
                  </div>
                  <p className="text-[#797A7D] text-left font-medium mt-2 text-sm">
                    Easy-to-use backend customized for your business with your
                    logo, colors, and preferred layout options.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up-icon.png"
                      alt="Thumbs Up"
                      width={16}
                      height={16}
                    />
                    <p className="mt-0 ml-1 text-xs text-[#6B7280]">
                      96% Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            {/* Feature 6 */}
            <FadeInOnScroll>
              <div className="rounded-lg shadow-md border p-0 hover:shadow-lg transition">
                <HoverSlide>
                  <Image
                    src="/images/booking.png"
                    alt="White-Labeled Booking Page"
                    width={400}
                    height={250}
                    className="rounded-t-lg"
                  />
                </HoverSlide>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/booking-icon.png"
                      alt="Booking Icon"
                      width={20}
                      height={28}
                    />
                    <h3 className="text-lg font-bold text-black">
                      White-Labeled Booking Page
                    </h3>
                  </div>
                  <p className="text-[#797A7D] font-medium text-left mt-2 text-sm">
                    Seamless, branded booking experience for your clients that
                    matches your company’s visual identity.
                  </p>
                  <div className="flex items-center mt-3">
                    <Image
                      src="/images/thumbs-up-icon.png"
                      alt="Thumbs Up"
                      width={16}
                      height={16}
                    />
                    <p className="mt-0 ml-1 text-xs text-[#6B7280]">
                      94% Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
      {/* Why choose us  */}
      <section
        className="py-16 relative w-full bg-background- min-h-screen
    bg-[linear-gradient(120deg,#e6f0ff_0%,#ffffff_100%),url('/images/choose.png')] 
    bg-cover bg-center bg-no-repeat"
      >
        {/* Top-right quarter circle */}
        <div className="absolute top-0 right-0  w-32 h-32 bg-[#e6f0ff] rounded-bl-[100%]"></div>

        {/* Bottom-left quarter circle */}
        <div className="absolute bottom-0 left-0  w-32 h-32 bg-[#e6f0ff] rounded-tr-[100%]"></div>

        <div className="max-w-5xl mx-auto px-6 text-center p-10">
          {/* Heading */}
          <RotateIn>
            <h2 className="text-3xl md:text-5xl font-bold text-[#00A7DE] mb-2">
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
            <p className="text-[#797A7D] max-w-2xl font-regular text-base mx-auto mb-10">
              We combine human-like AI with powerful automation so you can focus
              on growing your business.
            </p>
          </RotateIn>

          {/* Features List */}
          <div className="space-y-6 text-left max-w-2xl mx-auto">
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
                <div className="flex items-start space-x-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 flex-shrink-0 mt-1"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#000000]">
                      {item.title}
                    </h4>
                    <p className="text-[#797A7D] text-sm">{item.description}</p>
                  </div>
                </div>
              </RotateIn>
            ))}
          </div>

          {/* Buttons */}
          <RotateIn delay={1.2}>
            <div className="mt-10 flex justify-center space-x-4">
              <a
                href="#"
                className="bg-[#00A7DE] text-white px-6 py-3 rounded-lg shadow font-medium
             transition-all duration-300 ease-in-out
             hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
              >
                Start Free Trial
              </a>

              <a
                href="#"
                className="border border-[#00A7DE] text-[#00A7DE] px-6 py-3 rounded-lg font-medium
             transition-all duration-300 ease-in-out
             hover:bg-[#00A7DE] hover:text-white
             hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
              >
                Schedule Demo
              </a>
            </div>
          </RotateIn>
        </div>
      </section>
      {/* BUILT FOR 20+ INDUSTRIES */}
      <section className="w-full bg-[#F9FAFB] py-16 relative">
        {/* <!-- Top-left quarter circle --> */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#e6f0ff] rounded-br-[100%]"></div>
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#00A7DE] mb-2">
            Built for 20+ Industries
          </h2>

          {/* underline bar */}
          <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-6 rounded-full"></div>

          <p className="text-[#797A7D] text-base mb-12">
            Our AI receptionist adapts to your specific industry needs with
            specialized vocabulary and ,<br /> workflows.
          </p>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {industries.map((item, index) => (
              <ScaleUp key={index} delay={index * 0.1}>
                <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                  {/* Flex container for icon and heading only */}
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={64}
                      height={64}
                    />
                    <h3 className="text-lg text-black font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description and link remain left-aligned */}
                  <div className="text-left">
                    <p className="text-[#797A7D] text-sm mb-4">{item.desc}</p>
                    <a
                      href="#"
                      className="text-[#00A7DE] font-medium hover:underline"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </ScaleUp>
            ))}
          </div>

          {/* Button */}
          <div className="mt-12">
            <button
              className="px-6 py-3 bg-[#EFF6FF] text-black font-medium rounded-md shadow
             transition-all duration-300 ease-in-out
             hover:bg-[#00A7DE] hover:text-white
             hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
            >
              View All Industries
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="w-full bg-gradient-to-r from-white to-blue-50 py-16">
        <div className="max-w-5xl mx-auto text-center px-4">
          {/* ==== Heading ==== */}
          <h2 className="text-3xl md:text-5xl font-bold text-[#00A7DE] mb-2">
            How It Works
          </h2>

          {/* underline bar */}
          <div className="w-20 h-1 bg-[#098DC9] mx-auto mb-3 rounded-full"></div>
          <p className="text-[#797A7D] mb-12">
            Our AI assistant handles your calls from start to finish, just like
            a human receptionist.
          </p>

          {/* ==== Steps ==== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <ScrollSlide direction="left">
              <div className="flex flex-col items-center">
                {/* Icon */}

                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 animation-blink ">
                  <Image
                    src="/images/phone.png"
                    alt="Phone Icon"
                    width={68.97}
                    height={68.97}
                  />
                </div>

                {/* Box */}
                <div
                  className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#0097DA] text-center relative 
                            transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Client calls
                  </h3>
                  <p className="text-[#797A7D] text-sm">
                    AI answers with your business greeting
                  </p>

                  {/* Step Number */}
                  <span
                    className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center 
                               text-sm font-semibold text-[#00A7DE] border border-[#00A7DE] bg-white rounded-full shadow-sm"
                  >
                    1
                  </span>
                </div>
              </div>
            </ScrollSlide>

            {/* Step 2 */}
            <ScrollSlide direction="up" delay={0.2}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center  rounded-full transition-transform duration-300 ease-in-out hover:scale-105">
                  <Image
                    src="/images/calender1.png"
                    alt="Calendar Icon"
                    width={68.97}
                    height={68.97}
                  />
                </div>

                <div
                  className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#0097DA] text-center relative 
                            transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Appointment booked
                  </h3>
                  <p className="text-[#797A7D] text-sm">
                    Syncs with your calendar instantly
                  </p>

                  <span
                    className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center 
                               text-sm font-semibold text-[#00A7DE] border border-[#00A7DE] bg-white rounded-full shadow-sm"
                  >
                    2
                  </span>
                </div>
              </div>
            </ScrollSlide>

            {/* Step 3 */}
            <ScrollSlide direction="right" delay={0.4}>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 ">
                  <Image
                    src="/images/doc.png"
                    alt="Notes Icon"
                    width={68.97}
                    height={68.97}
                  />
                </div>

                <div
                  className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#0097DA] text-center relative 
                            transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Notes & transcript
                  </h3>
                  <p className="text-[#797A7D] text-sm">
                    Saved in your CRM automatically
                  </p>

                  <span
                    className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center 
                               text-sm font-semibold text-[#00A7DE] border border-[#00A7DE] bg-white rounded-full shadow-sm"
                  >
                    3
                  </span>
                </div>
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <ScaleUp key={index} delay={index * 0.1}>
                  <div
                    className={`relative bg-white border rounded-lg shadow-md p-8 flex flex-col text-left transition-transform transform hover:-translate-y-2 hover:shadow-xl ${
                      plan.highlighted
                        ? "border-[#00A7DE] scale-105"
                        : "border-gray-200"
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
                            alt=""
                            width={23.71}
                            height={23.71}
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
      <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-4xl font-bold text-[#00A7DE] relative inline-block">
            What Our Clients Say
            <span className="block w-16 h-1 bg-[#098DC9] rounded-full mx-auto mt-4 mb-5"></span>
          </h2>

          {/* Subheading */}
          <p className="text-[#797A7D] text-base mb-12">
            Businesses across industries are saving time and improving customer
            satisfaction
            <br /> with our virtual receptionist solution.
          </p>

          {/* Review Slider (instead of static grid) */}
          <ReviewSlider testimonials={testimonials} />
        </div>
      </section>

      {/* demo section */}
      <section className="w-full bg-gradient-to-b from-[#0097DA] via-[#00BAF2] to-[#8FD8F8] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          {/* Heading */}
          <ScrollAnimation variant={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
          </ScrollAnimation>

          {/* Subheading */}
          <ScrollAnimation variant={fadeInUp} threshold={0.1}>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of businesses already using our AI receptionist
            </p>
          </ScrollAnimation>

          {/* Button with animation */}
          <ScrollAnimation variant={fadeInUp} threshold={0.1}>
            <motion.a
              href="#"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-sky-600 font-medium shadow-md overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Slider overlay */}
              <span className="absolute inset-0 bg-sky-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>

              {/* Blink / Glow Animation */}
              <motion.span
                className="absolute inset-0 rounded-lg bg-sky-300 opacity-20"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              ></motion.span>

              {/* Button content */}
              <span className="relative flex items-center gap-2 z-10">
                <Image
                  src="/images/calender.png"
                  alt="Calendar Icon"
                  width={20}
                  height={20}
                />
                Book a Demo
              </span>
            </motion.a>
          </ScrollAnimation>
        </div>
      </section>
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
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/linkedln.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/images/instagram.png"
                  alt="Instagram"
                  width={20}
                  height={20}
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
    </div>
  );
}
