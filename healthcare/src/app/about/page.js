"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimation, fadeInUp } from "../_components/animations/demo";
import { slideUp } from "../_components/animations/footer";
import { slideUpChild } from "../_components/animations/footer";
import { staggerContainer } from "../_components/animations/footer";
import ZoomTransition from "../_components/animations/zoomabout1";
import { fadeUp } from "../_components/animations/variants";
import { fadeRight } from "../_components/animations/variants";
import { scaleFade } from "../_components/animations/variants";
export default function HomePage() {
  // ===========================
  //        section 1
  // ===========================

  return (
    <main className="min-h-screen  bg-gradient-to-r from-white to-sky-100">
      <ZoomTransition routeKey="home">
        <header className="w-full bg-white ">
          <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo1.png"
                alt="Logo"
                width={177.01}
                height={40}
                className="pl-4"
              />
            </div>

            {/* Navigation */}
            <nav>
              <ul className="flex items-center space-x-8 text-sm font-medium ">
                <li>
                  <Link
                    href="/home"
                    className="text-black hover:text-[#00A7DE]"
                  >
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
                <Link href="/" className="text-[#000000] hover:text-[#00A7DE]">
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
                  <Link href="/" className="text-[#00A7DE]">
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
                    className="relative inline-block px-5 py-2 rounded-full font-semibold text-white overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-[#00A7DE] transition-transform duration-300 ease-out group-hover:translate-x-full"></span>
                    <span className="absolute inset-0 bg-[#050607] -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                    <span className="relative">Sign Up</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col-reverse pl-13 lg:flex-row items-center max-w-7xl mx-auto px-6 py-16 gap-12">
          {/* Left Content */}
          <div className="flex-1 pl-6  ">
            <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Technology Behind{" "}
              <span className="text-[#00A7DE]">the Assistant</span>
            </h1>
            <p className="text-[#797A7D] mb-8 max-w-lg">
              We've combined leading technologies to create a <br /> reliable,
              secure, and human-like assistant that works <br /> seamlessly for
              your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex space-x-3">
              {/* Swiper Get Started Button */}
              <Link
                href="/get-started"
                className="relative inline-block px-6 py-2.5 font-semibold text-white rounded-lg overflow-hidden group"
              >
                {/* Background Slide */}
                <span className="absolute inset-0 bg-[#00A7DE] transition-transform duration-500 ease-out group-hover:-translate-x-full"></span>
                <span className="absolute inset-0 bg-[#050607] translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>

                {/* Text + Icon */}
                <span className="relative flex items-center gap-2">
                  Get Started
                  <Image
                    src="/images/arrow.png"
                    alt="Get Started"
                    width={12.25}
                    height={20}
                  />
                </span>
              </Link>

              {/* Swiper Watch Demo Button */}
              <button className="relative inline-block px-6 py-2.5 font-medium text-gray-700 rounded-lg overflow-hidden group border border-gray-300">
                {/* Background Slide */}
                <span className="absolute inset-0 bg-[#F9FAFB] transition-transform duration-500 ease-out group-hover:-translate-x-full"></span>
                <span className="absolute inset-0 bg-gray-300 translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>

                {/* Text + Icon */}
                <span className="relative flex items-center gap-2">
                  <Image
                    src="/images/play.png"
                    alt="Watch Demo"
                    width={12.25}
                    height={20}
                  />
                  Watch Demo
                </span>
              </button>
            </div>
          </div>

          {/* Right Image (Chat widget screenshot) */}
          <motion.div
            className="flex-1 flex pr-5 justify-center items-center"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/images/assistant.png"
              alt="AI Chat"
              width={608}
              height={430}
            />
          </motion.div>
        </section>
      </ZoomTransition>

      {/* Technology Section */}
     <>
      {/* ==== Powered by Leading Technologies ==== */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-[#00A7DE] mb-4">
            Powered by Leading Technologies
          </h2>
          <p className="text-[#797A7D] mb-10 max-w-1xl mx-auto">
            Our assistant combines best-in-class technologies to deliver a
            seamless, intelligent <br /> experience that adapts to your business
            needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              {
                title: "Twilio",
                description:
                  "Enabling seamless communication through calls and SMS to keep you connected with clients.",
                bgColor: "bg-white",
                icon: "/images/twillio.png",
              },
              {
                title: "Speech Recognition",
                description:
                  "Whisper, AssemblyAI, and Google Speech-to-Text for accurate transcriptions.",
                bgColor: "bg-white",
                icon: "/images/speech.png",
              },
              {
                title: "Automation",
                description:
                  "n8n and Make.com to automate workflows between calendar, CRM, and client records.",
                bgColor: "bg-white",
                icon: "/images/automation.png",
              },
              {
                title: "CRM Integration",
                description:
                  "HubSpot and custom CRM solutions to manage and track client relationships.",
                bgColor: "bg-white",
                icon: "/images/CRM.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col items-start justify-start w-[280px] h-[256px] p-6 rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl ${item.bgColor}`}
              >
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-medium text-black mb-2 text-left">
                  {item.title}
                </h3>
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
          {/* Centered Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-[#00A7DE] mb-3">
              How Our Technology Works
            </h2>
            <p className="text-[#797A7D]">
              A seamless integration of technologies working behind the scenes,
              so you can
              <br /> focus on what matters most – your clients.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 pr-14 md:grid-cols-2 gap-12 items-center">
            {/* Left Side Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="flex justify-center pl-7"
            >
              <Image
                src="/images/div.png"
                alt="AI Assistant Technology Flow"
                width={500}
                height={400}
              />
            </motion.div>

            {/* Right Side Features */}
            <div className="space-y-8">
              {[
                {
                  icon: "/images/div (1).png",
                  title: "Communication Handling",
                  text: "Twilio processes incoming calls and messages, routing them to our AI system for appropriate handling and response.",
                },
                {
                  icon: "/images/div (2).png",
                  title: "Speech Recognition",
                  text: "Advanced speech recognition technology converts voice to text with high accuracy, understanding context and nuance.",
                },
                {
                  icon: "/images/div (3).png",
                  title: "Workflow Automation",
                  text: "Automation tools connect your calendar, email, and other systems to schedule meetings and manage tasks without manual intervention.",
                },
                {
                  icon: "/images/div (4).png",
                  title: "CRM Integration",
                  text: "All interactions are logged in your CRM, providing a complete history of client communications and enabling data-driven insights.",
                },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once:false, amount: 0.3 }}
                  transition={{ delay: i * 0.3 }}
                  className="flex items-start gap-4"
                >
                  <Image src={f.icon} alt={f.title} width={40} height={40} />
                  <div>
                    <h3 className="font-semibold text-gray-800">{f.title}</h3>
                    <p className="text-gray-600 text-sm">{f.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==== Why Our Technology Matters ==== */}
      <section className="w-full bg-[#F9FAFB] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#00A7DE] mb-3">
              Why Our Technology Matters
            </h2>
            <p className="text-[#797A7D]">
              Our technology stack is designed to work seamlessly in the
              background,
              <br />
              delivering tangible benefits to your business.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: "/images/secure.png",
                title: "Secure & Reliable",
                text: "Enterprise-grade security protocols protect  your data and ensure consistent uptime for mission-critical operations.",
              },
              {
                icon: "/images/saving.png",
                title: "Time-Saving",
                text: "Automate routine tasks freeing up your  team to focus on high-value activities  and strategic initiatives.",
              },
              {
                icon: "/images/data.png",
                title: "Data-Driven",
                text: "Gain valuable insights from client  interactions to improve service delivery and  identify new business opportunities.",
              },
              {
                icon: "/images/hand.png",
                title: "Client-Focused",
                text: "Deliver personalized experiences that make clients feel valued and understood, strengthening relationships.",
              },
              {
                icon: "/images/arrows.png",
                title: "Centralized",
                text: "Bring together all your communication channels, client data, and business tools in one unified system.",
              },
              {
                icon: "/images/div (5).png",
                title: "Scalable",
                text: "Grow your business without proportionally increasing overhead, as our technology scales with your needs.",
              },
            ].map((c, index) => (
              <motion.div
                key={index}
                variants={scaleFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
              >
                <Image src={c.icon} alt={c.title} width={48} height={48} />
                <h3 className="mt-4 font-semibold text-gray-800">{c.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{c.text}</p>
              </motion.div>
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
    </main>
  );
}
