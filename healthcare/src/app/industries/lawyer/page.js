"use client";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import { pageFadeIn } from "../../_components/animations/physo3";
import { staggeredList } from "../../_components/animations/physo3";
import { listItemFade } from "../../_components/animations/physo3";
import { fadeUp } from "../../_components/animations/variantsphyso";
import { staggerFadeUp } from "../../_components/animations/variantsphyso";
import { fadeInItem } from "../../_components/animations/variantsphyso";
import { fadeInUp } from "../../_components/animations/physo5";
import { stagger } from "../../_components/animations/physo5";
import { cardMotion } from "../../_components/animations/physo6";
import { container } from "../../_components/animations/physo6";
import FormSection from "../../_components/FormSection";
import { staggerChild } from "../../_components/animations/physo7";
import { formVariant } from "../../_components/animations/physo7";
import { containerVariants } from "../../_components/animations/physo77";
import { leftVariant } from "../../_components/animations/physo77";
import { rightVariant } from "../../_components/animations/physo77";
import useScrollAnimation from "../../_components/animations/scrolleranimation";
export default function Home() {
    useScrollAnimation();
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [phone, setPhone] = useState("");
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [countryCode, setCountryCode] = useState("+1");

    // Email validation
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        const valid = /\S+@\S+\.\S+/.test(value); // simple regex
        setIsEmailValid(valid || value === "");
    };

    // Phone validation (numbers 7–15 digits)
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        const valid = /^[0-9]{7,15}$/.test(value);
        setIsPhoneValid(valid || value === "");
    };
    return (
        <>
            {/* SEO Head */}
            <Head>
                {/* Basic SEO */}
                <title>AI Virtual Assistant for Physiotherapists | YourBrand</title>
                <meta
                    name="description"
                    content="AI-powered virtual assistant for physiotherapists. Automate bookings, reminders, and patient records to save time and improve care."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph (Social Sharing) */}
                <meta
                    property="og:title"
                    content="AI Virtual Assistant for Physiotherapists | YourBrand"
                />
                <meta
                    property="og:description"
                    content="Automate bookings, reminders, and patient records with an AI-powered assistant built for physiotherapists."
                />
                <meta property="og:image" content="/images/social-preview.png" />
                <meta
                    property="og:url"
                    content="https://virtual-assistant-website-aus-n7zq.vercel.app/industries/Physotherapist"
                />
                <meta property="og:type" content="website" />
            </Head>

            <div className="min-h-screen flex flex-col">
                {/* Header */}
                <Navbar />

                {/* Main Banner Section */}
                <main>
                    <section className="relative w-full bg-[url('/images/bg.png')] bg-cover bg-center overflow-visible">
                        <div className="absolute inset-0 backdrop-blur-sm"></div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12 py-16 border-b border-white">
                            {/* Text on Left */}
                            <motion.div
                                className="text-white max-w-full md:max-w-xl pb-3 pl-2 mb-10 md:mb-0 flex flex-col items-center md:items-start text-center md:text-left"
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                viewport={{ once: false }}
                            >
                                <motion.div
                                    className="inline-block bg-white text-[#00A7DE] font-medium px-7 py-2 rounded-full mb-4 shadow"
                                    variants={fadeUp}
                                >
                                    Legal Care
                                </motion.div>

                                <motion.h1
                                    className="text-4xl font-bold mb-4"
                                    variants={fadeUp}
                                >
                                    AI for Lawyer
                                </motion.h1>

                                <motion.p className="text-2xl text-[#E0F2FE] mb-6" variants={fadeUp}>
                                  Your virtual assistant modernizes legal practice by managing appointments, recording case notes, tracking deadlines, 
                                  sending client reminders, and scheduling follow-ups.
                                </motion.p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="bg-[#ffffff] text-[#00A7DE] font-medium py-2 px-4 rounded flex items-center gap-2 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] group text-sm md:text-base"
                                >
                                    <span className="flex items-center gap-2">
                                        Get Started
                                        <Image
                                            src="/images/svg.png"
                                            alt="Start Icon"
                                            width={12} // h-3 w-3 = 0.75rem ≈ 12px
                                            height={12}
                                        />
                                    </span>
                                </motion.button>
                            </motion.div>

                            {/* Image on Right */}
                            <motion.div
                                className="flex-shrink-0 flex justify-center  md:justify-end items-end h-full overflow-hidden mt-9 md:mt-7"
                                variants={fadeUp}
                                initial="hidden"
                                animate="show"
                                viewport={{ once: false }}
                            >
                                <Image
                                    src="/images/lawyer.jpg"
                                    alt="Lawyer"
                                    width={650}
                                    height={650}
                                    className="w-[90%] max-w-[650px] h-auto object-cover md:pl-19 md:-mb-25 md:pr-30"
                                    style={{ objectPosition: "right center" }}
                                />
                            </motion.div>
                        </div>
                    </section>

                    {/* Grid Section */}
                    <section className="relative w-full h-32 -mt-16 md:h-40 bg-white">
                        <div className="absolute inset-0 grid grid-cols-12 gap-3 opacity-10">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="border-l border-white/20 h-full"></div>
                            ))}
                        </div>
                    </section>

                    {/* Stats Section (Overlay Card) */}
                    <section className="relative z-20 -mt-12 md:-mt-20 flex justify-center px-4 md:px-8">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl p-6 shadow-xl bg-white/95 backdrop-blur-md hover:shadow-2xl transition max-w-6xl w-full overflow-hidden"
                            initial="hidden"
                            variants={staggerFadeUp}
                            whileInView="show"
                            viewport={{ once: false }}
                        >
                            {/* Stat 1 */}
                            <motion.div
                                className="flex flex-col items-center  text-center p-4 md:p-6"
                                variants={fadeInItem}
                            >
                                <Image
                                    src="/images/clock.png"
                                    alt="Clock icon showing 30% reduction"
                                    width={28}
                                    height={28}
                                    className="mb-2"
                                    priority
                                />
                                <h3 className="text-[#000000] font-semibold text-4xl">30%</h3>
                                <p className="text-[#797A7D] text-base font-regular">
                                    Fewer missed deadlines with automated legal reminders.
                                </p>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                className="flex flex-col items-center mt-2 text-center p-4 md:p-6"
                                variants={fadeInItem}
                            >
                                <Image
                                    src="/images/Frame.png"
                                    alt="Patient satisfaction icon"
                                    width={28}
                                    height={28}
                                    priority
                                    className="mb-2"
                                />
                                <h3 className="text-[#000000] font-semibold text-4xl">98%</h3>
                                <p className="text-[#797A7D] text-base font-regular">
                                    Reduced hours spent on scheduling<br /> and note-taking.
                                </p>
                            </motion.div>

                            {/* Stat 3 */}
                            <motion.div
                                className="flex flex-col items-center mt-2 text-center p-4 md:p-6"
                                variants={fadeInItem}
                            >
                                <Image
                                    src="/images/wave.png"
                                    alt="Patient retention boost icon"
                                    width={28}
                                    height={28}
                                    priority
                                    className="mb-2"
                                />
                                <h3 className="text-[#000000] font-semibold text-4xl">25%</h3>
                                <p className="text-[#797A7D] text-base font-regular">
                                   Higher client retention with consistent deadline tracking and tailored client care.
                                </p>
                            </motion.div>
                        </motion.div>
                    </section>
                </main>

                {/* =======================
         Key features
============================= */}
                <motion.section
                    className="py-12 px-4 mt-15 md:px-8 lg:px-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    aria-labelledby="key-benefits-heading"
                >
                    {/* Heading */}
                    <motion.h2
                        id="key-benefits-heading"
                        className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 md:mb-8 text-black text-center"
                        variants={fadeUp}
                    >
                        Key Benefits
                    </motion.h2>

                    {/* Subheading */}
                    <motion.p
                        className="text-xl font-normal -mt-2 md:-mt-6 mb-8 text-[#797A7D] text-center"
                        variants={fadeUp}
                    >
                       Enhance your law practice with intelligent automation that reduces admin work, personalizes<br />
                        client service, and increases efficiency.
                    </motion.p>

                    {/* Cards */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                        variants={staggerFadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* Card 1 */}
                        <motion.article
                            className="bg-gradient-to-br from-[#FAF5FF] to-[#F3E8FF] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                            variants={fadeInItem}
                        >
                            <div className="mb-4">
                                <Image
                                    src="/images/automated-scheduling.png"
                                    alt="Automated Scheduling"
                                    width={48}
                                    height={48}
                                    priority
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Automated Scheduling
                            </h3>
                            <p className="text-base font-regular text-[#797A7D] leading-relaxed">
      Automatically manage court dates, client appointments, and tasks without manual intervention.             </p>
                        </motion.article>

                        {/* Card 2 */}
                        <motion.article
                            className="bg-gradient-to-br from-[#ECFEFF] to-[#CFFAFE] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                            variants={fadeInItem}
                        >
                            <div className="mb-4">
                                <Image
                                    src="/images/client retention.png"
                                    alt="Client Retention"
                                    width={48}
                                    height={48}
                                    priority
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Improved Client Care
                            </h3>
                            <p className="text-base font-regular text-[#797A7D] leading-relaxed">
                              Case status, reminders, and communications remain consistent and personalized.             </p>
                        </motion.article>

                        {/* Card 3 */}
                        <motion.article
                            className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                            variants={fadeInItem}
                        >
                            <div className="mb-4">
                                <Image
                                    src="/images/treatment record.png"
                                    alt="Treatment Record"
                                    width={48}
                                    height={48}
                                    priority
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Time-Saving Automation
                            </h3>
                            <p className="text-base font-regular text-[#797A7D] leading-relaxed">
                               AI manages routine follow-ups, legal reminders, and recurring legal obligations reliably.
                            </p>
                        </motion.article>

                        {/* Card 4 */}
                        <motion.article
                            className="bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                            variants={fadeInItem}
                        >
                            <div className="mb-4">
                                <Image
                                    src="/images/care quality.png"
                                    alt="Care Quality"
                                    width={48}
                                    height={48}
                                    priority
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                                Boosted Client Retention
                            </h3>
                            <p className="text-base fot-regular text-[#797A7D] leading-relaxed">
                              Regular check-ins, proactive reminders, and personalized schedules keep clients engaged.
                            </p>
                        </motion.article>

                        {/* Card 5 */}
                        <motion.article
                            className="bg-gradient-to-br from-[#FFF1F2] to-[#FFE4E6] text-black rounded-xl p-4 sm:p-6 shadow-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                            variants={fadeInItem}
                        >
                            <div className="mb-4">
                                <Image
                                    src="/images/stress.png"
                                    alt="stress"
                                    width={48}
                                    height={48}
                                    priority
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">
                               Centralized History
                            </h3>
                            <p className="text-base font-regular text-[#797A7D] leading-relaxed">
                              Easy access to case files, contracts, briefs, and legal documents for seamless service.           </p>
                        </motion.article>
                    </motion.div>
                </motion.section>

                {/* ======================
    Primary uses
======================     */}

                <div className="w-full h-[2px] bg-gray-200 my-12"></div>

                <div className="max-w-6xl mx-auto px-4 text-center"></div>

                <motion.section
                    className="px-4 sm:px-6 md:px-8 py-12 max-w-6xl mx-auto"
                    variants={pageFadeIn}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    aria-labelledby="primary-uses-heading"
                >
                    {/* Centered Heading */}
                    <motion.h2
                        id="primary-uses-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#00A7DE] mb-12 -mt-12 sm:-mt-15"
                        variants={listItemFade}
                    >
                        Primary Uses
                    </motion.h2>

                    {/* Two-column layout */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 p-6 sm:p-10 md:p-20 border rounded-lg transition-shadow max-w-5xl mx-auto"
                        variants={staggeredList}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                    >
                        {/* Left Column */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Item 1 */}
                            <motion.article
                                className="flex items-start gap-3 sm:gap-4"
                                variants={listItemFade}
                            >
                                <Image
                                    src="/images/skin care.png"
                                    alt="Skin Care"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <div>
                                    <h3 className="text-base  font-medium text-gray-900">
                                       General Legal Practice
                                    </h3>
                                    <p className="text-base font-regular text-[#797A7D]">
                                      Manage consultations, case tracking, legal research, and document management.
                                    </p>
                                </div>
                            </motion.article>

                            {/* Item 2 */}
                            <motion.article
                                className="flex items-start gap-3 sm:gap-4"
                                variants={listItemFade}
                            >
                                <Image
                                    src="/images/regular.png"
                                    alt="Regular"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <div>
                                    <h3 className="text-base font-medium text-gray-900">
                                        Specialized Services
                                    </h3>
                                    <p className="text-base font-regular text-[#797A7D]">
                                      Support civil, criminal, family, corporate law, and legal consultancy.
                                    </p>
                                </div>
                            </motion.article>

                            {/* Item 3 */}
                            <motion.article
                                className="flex items-start gap-3 sm:gap-4"
                                variants={listItemFade}
                            >
                                <Image
                                    src="/images/wellness support.png"
                                    alt="Wellness"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <div>
                                    <h3 className="text-base  font-medium text-gray-900">
                                        Routine  Maintenance
                                    </h3>
                                    <p className="text-base font-regular text-[#797A7D]">
        Automate recurring legal reviews, compliance checks, and regular updates.
                                    </p>
                                </div>
                            </motion.article>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Item 4 */}
                            <motion.article
                                className="flex items-start gap-3 sm:gap-4"
                                variants={listItemFade}
                            >
                                <Image
                                    src="/images/tracking.png"
                                    alt="Patient Progress Tracking"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <div>
                                    <h3 className="text-base font-medium text-gray-900">
                                        Client Progress Tracking
                                    </h3>
                                    <p className="text-base font-regular text-[#797A7D]">
                                     Log case status, court dates, client communications, and follow-up deadlines.
                                    </p>
                                </div>
                            </motion.article>

                            {/* Item 5 */}
                            <motion.article
                                className="flex items-start gap-3 sm:gap-4"
                                variants={listItemFade}
                            >
                                <Image
                                    src="/images/tracking (2).png"
                                    alt="AI Assistant"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <div>
                                    <h3 className="text-base font-medium text-gray-900">
                                        AI Assistant
                                    </h3>
                                    <p className="text-base font-regular text-[#797A7D]">
                                        Answer common client queries via AI chat or virtual assistant.
                                    </p>
                                </div>
                            </motion.article>
                        </div>
                    </motion.div>
                </motion.section>

                {/* Productivity Gains */}

                <motion.section
                    id="productivity-gains"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={fadeInUp}
                    className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-[#00A7DE] to-[#0578AC] px-4 sm:px-6 py-12 text-white"
                    aria-labelledby="productivity-heading"
                >
                    {/* Heading with SEO */}
                    <motion.h2
                        id="productivity-heading"
                        variants={fadeInUp}
                        className="text-5xl sm:text-5xl md:text-5xl pb-9 font-bold mb-8 mt-4 text-center"
                    >
                        Productivity Gains
                    </motion.h2>

                    {/* ✅ Responsive Grid */}
                    <motion.div
                        variants={stagger}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-10 lg:gap-1 justify-items-center max-w-6xl w-full text-center"
                        role="list"
                    >
                        {/* Card 1 */}
                        <motion.article
                            variants={fadeInUp}
                            className="flex flex-col items-center space-y-2"
                            role="listitem"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="transition-transform"
                            >
                                <Image
                                    src="/images/automated follow.png"
                                    alt="Automated Follow-up"
                                    width={56}
                                    height={56}
                                    className="w-12 h-12 sm:w-14 sm:h-14"
                                    priority
                                />
                            </motion.div>
                            <h3 className="text-base font-medium">
                                Automated Deadline Reminders
                            </h3>
                            <p className="text-sm font-regular text-[#E0F2FE]">Save time with AI scheduling and recurring legal reminders. </p>
                        </motion.article>

                        {/* Card 2 */}
                        <motion.article
                            variants={fadeInUp}
                            className="flex flex-col items-center space-y-2"
                            role="listitem"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="transition-transform"
                            >
                                <Image
                                    src="/images/smart Reminder.png"
                                    alt="Smart Reminders"
                                    width={56}
                                    height={56}
                                    className="w-12 h-12 sm:w-14 sm:h-14"
                                    priority
                                />
                            </motion.div>

                            <h3 className="text-base font-medium">
                                Smart Record Keeping
                            </h3>
                            <p className="text-sm font-regular text-[#E0F2FE]">
            Reduce missed details with AI-powered record management.
                            </p>
                        </motion.article>

                        {/* Card 3 */}
                        <motion.article
                            variants={fadeInUp}
                            className="flex flex-col items-center space-y-2"
                            role="listitem"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                className="transition-transform"
                            >
                                <Image
                                    src="/images/patient record.png"
                                    alt="Patient Record"
                                    width={56}
                                    height={56}
                                    className="w-12 h-12 sm:w-14 sm:h-14"
                                    priority
                                />
                            </motion.div>
                            <h3 className="text-base font-medium">
                                Centralized Client History
                            </h3>
                            <p className="text-sm font-regular text-[#E0F2FE]">
                             Quickly review case file, communications, and legal history without manual searches.
                            </p>
                        </motion.article>
                    </motion.div>
                </motion.section>


                {/* =====================
Example use cases
===================== */}

                <section className="px-4 py-12 max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: false }}
                        className="text-5xl font-bold text-center text-[#00A7DE] mb-10"
                    >
                        Example Use Case
                    </motion.h2>

                    {/* Top Full-Width Box */}
                    <motion.div
                        variants={cardMotion}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className="rounded-xl p-6 text-black shadow-lg bg-gradient-to-br from-[#F9FAFB] to-[#F9FAFB] hover:scale-[1.03] transition-transform mb-6"
                    >
                        <h3 className="text-base font-semibold mb-2">
                            Client Consultation & Case Updates
                        </h3>
                        <p className="text-sm font-regular text-[#797A7D] leading-relaxed">
                          A client schedules a legal consultation and receives timely updates and reminders via your virtual assistant.       </p>
                    </motion.div>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center"
                    >
                        {[
                            {
                                icon: "/images/one.png",
                                title: "Instant Confirmation",
                                text: (
                                    <>
                                       Save time with automatic appointment confirmations and legal reminders.
.
                                    </>
                                ),
                                bg: "bg-[#3B82F6]/8",
                            },
                            {
                                icon: "/images/two.png",
                                title: "Case Notes",
                                text: (
                                    <>
                                        Records case details, briefs, and documents for each client.
                                    </>
                                ),
                                bg: "bg-[#10B981]/8",
                            },
                            {
                                icon: "/images/three.png",
                                title: "Recurring Follow-ups",
                                text: (
                                    <>
                                        Automates scheduling of periodic case reviews, compliance checks, and court date reminders.
                                    </>
                                ),
                                bg: "bg-[#F5B80B]/8",
                            },
                            {
                                icon: "/images/four.png",
                                title: "Service Reminders",
                                text: (
                                    <>
                                        Sends reminders for document deadlines, court dates, and consultation renewals.
                                    </>
                                ),
                                bg: "bg-[#FAF5FF]/8",
                            },
                        ].map((box, i) => (
                            <motion.div
                                key={i}
                                variants={cardMotion}
                                whileHover={{ scale: 1.04, rotateZ: 1 }}
                                className={`w-full h-auto sm:w-[436px] sm:h-[116px] rounded-xl text-black shadow-lg ${box.bg} transition-transform mx-auto flex flex-col justify-between p-4`}
                            >
                                <div className="flex items-center gap-3">
                                    <Image src={box.icon} alt={box.title} width={32} height={32} priority />
                                    <h3 className="text-base text-[#000000] font-semibold">{box.title}</h3>
                                </div>
                                <p className="text-sm font-regular text-[#797A7D] leading-relaxed">
                                    {box.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>


                </section>
                {/* =======================
from
======================== */}

                <section className="w-full bg-[#00A7DE] py-16">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false }}
                        variants={formVariant}
                        className="max-w-3xl mx-auto px-6 text-center"
                    >
                        <motion.h2
                            variants={staggerChild}
                            className="text-2xl md:text-3xl font-bold text-white"
                        >
                            Get Your AI Assistant for Legal Practice
                        </motion.h2>
                        <motion.p variants={staggerChild} className="text-white mt-2 mb-8">
    Join thousands of law professionals transforming client service and practice management with our AI solutions.
                        </motion.p>

                        <FormSection />
                    </motion.div>
                </section>
                {/* ======================
Explore other industries
========================== */}
                <section className="w-full bg-gray-50 py-16">
                    <motion.div
                        className="max-w-6xl mx-auto px-6 text-center"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={containerVariants}
                    >
                        {/* Heading */}
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-[#00A7DE] mb-2"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Explore Other Industries
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                         Discover how our AI solutions are transforming various industries.
                        </motion.p>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Personal Trainer */}
                            <motion.div
                                variants={leftVariant}
                                className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-transform hover:scale-105"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Image
                                        src="/images/personal.png"
                                        alt="Personal Trainer"
                                        width={64}
                                        height={64}
                                        priority
                                    />
                                    <h3 className="text-lg text-black font-semibold">
                                        Personal Trainer
                                    </h3>
                                </div>
                                <p className="text-[#797A7D] mb-4">
                                   Automate client bookings, track therapy notes, and send care reminders.
                                </p>
                                <a
                                    href="/industries/personaltrainer"
                                    className="text-[#00A7DE] font-medium hover:underline"
                                >
                                    Learn More
                                </a>
                            </motion.div>

                            {/* Psychologist */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.9 }}
                                className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-transform hover:scale-105"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Image
                                        src="/images/psychologist.png"
                                        alt="Psychologist"
                                        width={64}
                                        height={64}
                                        priority
                                    />
                                    <h3 className="text-lg text-black font-semibold">
                                        Psychologist
                                    </h3>
                                </div>
                                <p className="text-[#797A7D] mb-4">
                                   Automate client bookings, therapy notes, and follow-up reminders.
                                </p>
                                <a
                                    href="/industries/psychology"
                                    className="text-[#00A7DE] font-medium hover:underline"
                                >
                                    Learn More
                                </a>
                            </motion.div>

                            {/* Chiropractor */}
                            <motion.div
                                variants={rightVariant}
                                className="bg-white shadow-md rounded-2xl p-6 text-left hover:shadow-lg transition-transform hover:scale-105"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Image
                                        src="/images/chiropractor.png"
                                        alt="Chiropractor"
                                        width={64}
                                        height={64}
                                        priority
                                    />
                                    <h3 className="text-lg text-black font-semibold">
                                        Chiropractor
                                    </h3>
                                </div>
                                <p className="text-[#797A7D] mb-4">
                                    Manage appointments and patient records with intelligent automation.
                                </p>
                                <a
                                    href="/industries/chiropractor"
                                    className="text-[#00A7DE] font-medium hover:underline"
                                >
                                    Learn More
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                <Footer />

            </div>
        </>
    );
}
