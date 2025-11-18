"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { ScrollAnimation, fadeInUp } from "../_components/animations/demo";
import ZoomTransition from "../_components/animations/zoomabout1";
import { fadeUp } from "../_components/animations/variants";
import useScrollAnimation from "../_components/animations/scrolleranimation";
import { fadeRight } from "../_components/animations/variants";
import { scaleFade } from "../_components/animations/variants";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
export default function HomePage() {
  useScrollAnimation();
  // Hamnburger Button
  const [isOpen, setIsOpen] = useState(false);
  // ===========================
  //        section 1
  // ===========================

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>
          AI Business Assistant | Smart Technology for Your Workflow
        </title>
        <meta
          name="description"
          content="Discover the AI-powered assistant combining top technologies to streamline, secure, and simplify your business operations. Get started today!"
        />
        <meta
          name="keywords"
          content="AI Assistant, Business Automation, Smart Chat, Workflow Technology, Digital Assistant"
        />
        <meta property="og:title" content="My about Page" />
        <meta
          property="og:description"
          content="This is a description of my page."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta
          property="og:url"
          content="https://virtual-assistant-website-aus-n7zq.vercel.app/about"
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gradient-to-r from-white to-sky-100">
        <ZoomTransition routeKey="home">
          {/* Navbar */}
    <Navbar/>
          {/* Hero Section */}
          <section className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto px-6 py-16 gap-4">
            {/* Left Content */}
            <div className="flex-1 pl-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                The Technology Behind{" "}
                <span className="text-[#00A7DE]">the AI Assistant</span>
              </h1>
              <p className="text-[#797A7D] mb-8 max-w-lg">
                We’ve combined leading technologies to create a reliable,
                secure, and human-like assistant that works seamlessly for your
                business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://admin.virtualassistant.com.au/register" target="_blank" rel="noopener noreferrer"
                  className="bg-[#00A7DE] text-white px-6 py-2.5 rounded-lg font-semibold 
                  flex items-center gap-2 justify-center 
                  transition-all duration-300 ease-in-out 
                  hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
                >
                  Start 14 Day Free Trial
                  <Image
                    src="/about-images/arrow.png"
                    alt="Arrow icon for Get Started"
                    width={12}
                    height={20}
                    priority
                  />
                </Link>
<Link href="https://calendar.app.google/g5bCnhaSJocufjFr5"
                      target="_blank"
                      rel="noopener noreferrer">
                <button
                  className="relative px-6 py-2.5 font-medium text-gray-700 rounded-lg 
                  bg-white border border-gray-300 flex items-center gap-2 justify-center
                  transition-all duration-300 ease-in-out 
                  hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:scale-105"
                >
                  <Image
                    src="/about-images/play.png"
                    alt="Play icon for Watch Demo"
                    width={12}
                    height={20}
                    priority
                  />
                  Book a Demo
                </button></Link>
              </div>
            </div>

            {/* Right Image */}
            <motion.div
              className="flex-1 flex pr-5 justify-center hover items-center mt-12"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/about-images/about-hero-image.png"
                alt="AI Assistant Chat Interface"
                width={608}
                height={430}
                className="max-w-full h-auto "
                priority
              />
            </motion.div>
          </section>
        </ZoomTransition>

        {/* Technology Section */}
        <>
          {/* ==== Powered by Leading Technologies ==== */}
          <section
            className="w-full bg-white py-16"
            aria-labelledby="leading-tech-title"
          >
            <div className="max-w-7xl mx-auto px-6 text-center">
              {/* Main H1 for SEO */}
              <h1
                id="leading-tech-title"
                className="text-3xl md:text-5xl font-bold text-[#00A7DE] mb-4"
              >
                Powered by Leading Technologies
              </h1>

              {/*  intro text */}
              <p className="text-[#797A7D] mb-10 max-w-2xl mx-auto text-base md:text-lg">
                Our AI Assistant combines best-in-class technologies to deliver a
                seamless, intelligent experience that adapts to your business
                needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8 gap-3 justify-items-center">
                {[
                  {
                    title: "Voice & Messaging",
                    description:
                      "Enabling seamless communication through voice calls and messages to keep you connected with clients.",
                    bgColor: "bg-white",
                    icon: "/about-images/twillio.png",
                  },
                  {
                    title: "Speech Recognition",
                    description:
                      "Enabling seamless communication through voice calls and messages to keep you connected with clients.",
                    bgColor: "bg-white",
                    icon: "/about-images/speech.png",
                  },
                  {
                    title: "Automation",
                    description:
                      "Smart workflow automation to streamline scheduling, client management and data processing.",
                    bgColor: "bg-white",
                    icon: "/about-images/automation.png",
                  },
                  {
                    title: "CRM Integration",
                    description:
                      "Built-in tools to manage client relationships, track interactions, and maintain organized records.",
                    bgColor: "bg-white",
                    icon: "/about-images/CRM.png",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex flex-col items-start justify-start w-[270px] h-[246px] py-10 px-5 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl ${item.bgColor}`}
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.title} technology logo`}
                      width={48}
                      height={48}
                      priority
                      className="mb-3"
                    />
                    <h2 className="text-base font-normal text-black mb-2 text-left">
                      {item.title}
                    </h2>
                    <p className="text-sm text-[#797A7D] text-left">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ==== How Our Technology Works ==== */}

          <section className="w-full bg-gradient-to-r from-sky-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-6">
              {/* ==== Centered Heading ==== */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-2xl md:text-5xl font-bold text-[#00A7DE] mb-3">
                  How Our Technology Works
                </h1>
                <p className="text-[#797A7D]">
                  A seamless integration of technologies working behind the
                  scenes, so you can <br /> focus on what matters most – your
                  clients.
                </p>
              </div>

              {/* ==== Content Grid ==== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Side Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false }}
                  className="flex justify-center px-4 md:px-0"
                >
                  <Image
                    src="/about-images/div.png"
                    alt="AI assistant technology flow diagram"
                    width={500}
                    height={400}
                    className="w-full max-w-[500px] h-auto"
                    priority
                  />
                </motion.div>

                {/* Right Side Features */}
                <div className="  space-y-8">
                  {[
                    {
                      icon: "/about-images/div (1).png",
                      title: "Communication Handling",
                      text: "AI Receptionist processes incoming calls and messages, routing them to our AI system for appropriate handling and response.",
                    },
                    {
                      icon: "/about-images/div (2).png",
                      title: "Speech Recognition",
                      text: "Advanced speech recognition technology converts voice to text with high accuracy, understanding context and nuance.",
                    },
                    {
                      icon: "/about-images/div (3).png",
                      title: "Workflow Automation",
                      text: "Automation tools connect your calendar, email, and other systems to schedule meetings and manage tasks without manual intervention.",
                    },
                    {
                      icon: "/about-images/div (4).png",
                      title: "CRM Integration",
                      text: "All interactions are logged in your CRM, providing a complete history of client communications and enabling data-driven insights.",
                    },
                  ].map((f, i) => (
                    <motion.div
                      key={i}
                      variants={fadeRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <Image
                        src={f.icon}
                        alt={`${f.title} icon`}
                        width={40}
                        height={40}
                        priority
                        className="w-10 h-10"
                      />
                      <div>
                        <h2 className="font-semibold text-gray-800  text-lg">
                          {f.title}
                        </h2>
                        <p className="text-[#797A7D] mr-19 text-sm">{f.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ==== Why Our Technology Matters ==== */}
          <section className="w-full bg-[#F9FAFB] py-20 px-10">
            <div className="max-w-7xl mx-auto px-6">
              {/* Section Heading */}
              <div className="text-center max-w-3xl mx-auto mb-16">
              
                <h1 className="text-3xl md:text-5xl font-bold text-[#00A7DE] mb-3">
                  Why Our Technology Matters
                </h1>
                <p className="text-[#797A7D] text-lg ">
                  Our technology stack is designed to work seamlessly in the
                  background,
                  <br /> delivering tangible benefits to your business.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pr-5 pl-5 gap-6">
                {[
                  {
                    icon: "/about-images/secure.png",
                    title: "Secure & Reliable",
                    text: "Enterprise-grade security protocols protect your data and ensure consistent uptime for mission-critical operations.",
                    alt: "Secure technology icon",
                  },
                  {
                    icon: "/about-images/saving.png",
                    title: "Time-Saving",
                    text: "Automate routine tasks, freeing up your team to focus on high-value activities and strategic initiatives.",
                    alt: "Time-saving automation icon",
                  },
                  {
                    icon: "/about-images/data.png",
                    title: "Data-Driven",
                    text: "Gain valuable insights from client interactions to improve service delivery and identify new business opportunities.",
                    alt: "Data analytics technology icon",
                  },
                  {
                    icon: "/about-images/shakehand.png",
                    title: "Client-Focused",
                    text: "Deliver personalized experiences that make clients feel valued and understood, strengthening relationships.",
                    alt: "Client-focused handshake icon",
                  },
                  {
                    icon: "/about-images/arrows.png",
                    title: "Centralized",
                    text: "Bring together all your communication channels, client data, and business tools in one unified system.",
                    alt: "Centralized business system icon",
                  },
                  {
                    icon: "/about-images/div (5).png",
                    title: "Scalable",
                    text: "Grow your business without proportionally increasing overhead, as our technology scales with your needs.",
                    alt: "Scalable growth technology icon",
                  },
                ].map((c, index) => (
                  <motion.article
                    key={index}
                    variants={scaleFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 text-center md:text-left"
                  >
                    <Image
                      src={c.icon}
                      alt={`${c.alt} icon`}
                      width={64}
                      height={64}
                      priority
                      className="mx-auto md:mx-0"
                    />
                    <h3 className="mt-4 font-semibold text-gray-800 text-lg">
                      {c.title}
                    </h3>
                    <p className="text-[#797A7D] text-sm md:text-base mt-2 leading-relaxed">
                      {c.text}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </>
        {/* demo section */}
        <section className="w-full bg-gradient-to-b from-[#0097DA] via-[#00BAF2] to-[#8FD8F8] py-20 text-center">
          <div className="max-w-3xl mx-auto px-4">
            {/* Heading */}
            <ScrollAnimation variant={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our tech works behind the scenes, so you can focus on clients.
              </h2>
            </ScrollAnimation>

            {/* Subheading */}
            <ScrollAnimation variant={fadeInUp} threshold={0.1}>
              <p className="text-white/90 text-lg mb-8">
                Experience the power of intelligent automation and seamless
                integration today.
              </p>
            </ScrollAnimation>


                               {/* BUTTONS */}
                   <motion.div
                     className="flex flex-wrap gap-4 mt-4 justify-center md:justify-center"
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
                       className="w-[159px] h-[50px] bg-white font-poppins text-[#00A7DE] font-[500] text-[12px] leading-[22.5px] rounded-[6px] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE]"
                     >
                       Start 14 Day Free Trial
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
          </div>
        </section>
        {/* FOOTER SECTION */}
     <Footer/>
      </main>
    </>
  );
}
