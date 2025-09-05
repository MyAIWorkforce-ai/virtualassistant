"use client";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import {
  slideUp,
  slideUpChild,
  staggerContainer,
} from "../_components/animations/footer";
import {
  fadeUp,
  fadeInItem,
  blinkButton,
  staggerContainer as staggerFormContainer,
} from "../_components/animations/formanimation";
import useScrollAnimation from "../_components/animations/scrolleranimation";
export default function ContactPage() {
  useScrollAnimation();
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    assistantTeam: "",
    package: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });

  const countryCodes = [
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+92", country: "Pk" },
    { code: "+61", country: "AU" },
    { code: "+91", country: "IN" },
    { code: "+81", country: "JP" },
    { code: "+49", country: "GE" },
    { code: "+33", country: "FR" },
  ];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    if (field === "email") {
      setErrors({ ...errors, email: !value.includes("@") });
    }

    if (field === "phone") {
      const regex = /^[0-9]*$/;
      setErrors({ ...errors, phone: !regex.test(value) });
    }
  };

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Contact Us | AI Business Assistant Solutions</title>
        <meta
          name="description"
          content="Get started with our AI-powered business assistant solutions. Contact us today to explore packages for healthcare, finance, education, and more."
        />
        <meta
          name="keywords"
          content="AI Assistant, Business Automation, Contact, Packages"
        />
        <meta property="og:title" content="My about Page" />
        <meta
          property="og:description"
          content="This is a description of my page."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/page" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-sky-100 to-white">
        {/* Header */}
        <header className="w-full bg-white shadow-sm">
          <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/logo1.png"
                alt="AI Business Assistant Logo"
                width={177}
                height={40}
                className="pl-4"
              />
            </div>

            {/* Navigation */}
            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
                <li>
                  <Link href="/" className="text-black hover:text-[#00A7DE]">
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
                  <Link href="/contact" className="text-[#00A7DE]">
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
                  className="text-black "
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
        {/* Main Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
          {/* Hero */}
          <motion.div
            className="text-center max-w-2xl mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-[#00A7DE]">
              Let’s Get You Started
            </h1>
            <p className="mt-2 text-[#797A7D]">
              Whether you’re exploring AI for your business or ready to scale,
              our team is here
              <br /> to help.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="bg-white shadow-md placeholder-gray-300 rounded-lg p-6 sm:p-8 w-full max-w-2xl"
            variants={staggerFormContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <motion.div variants={fadeInItem}>
                <label className="block text-black text-sm mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Admin Assistant"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 border-gray-300 text-black placeholder-gray-300 text-regular focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </motion.div>

              {/* Phone Number */}
              <motion.div variants={fadeInItem}>
                <label className="block text-black text-sm mb-2">
                  Phone Number*
                </label>
                <div className="flex">
                  <select
                    required
                    value={formData.countryCode}
                    onChange={(e) =>
                      handleChange("countryCode", e.target.value)
                    }
                    className="w-24 border border-gray-300 text-sm text-black rounded-l-lg px-0 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    {countryCodes.map((c, i) => (
                      <option key={i} value={c.code}>
                        {c.country} ({c.code})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    required
                    placeholder="1234567890"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={`flex-1 border-t border-b border-r rounded-r-lg px-4 py-2 text-black placeholder-gray-300 focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? "border-red-500 ring-red-500"
                        : "border-gray-300 ring-sky-500"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid phone number
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeInItem} className="md:col-span-2">
                <label className="block text-black text-sm mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  required
                  placeholder="Admin123@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full border rounded-lg px-4 py-2 text-black placeholder-gray-300 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 ring-red-500"
                      : "border-gray-300 ring-sky-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid email address
                  </p>
                )}
              </motion.div>

              {/* Assistant Team */}
              <motion.div variants={fadeInItem}>
                <label className="block text-black text-sm mb-2">
                  Assistant Team (Industry)*
                </label>
                <select
                  required
                  value={formData.assistantTeam}
                  onChange={(e) =>
                    handleChange("assistantTeam", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none placeholder-gray-300 focus:ring-2 focus:ring-sky-500"
                >
                  <option value="">Select an industry</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Education</option>
                </select>
              </motion.div>

              {/* Package Selection */}
              <motion.div variants={fadeInItem}>
                <label className="block text-black text-sm mb-2">
                  Package Selection*
                </label>
                <select
                  required
                  value={formData.package}
                  onChange={(e) => handleChange("package", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 placeholder-gray-300 focus:ring-sky-500"
                >
                  <option value="">Select a package</option>
                  <option>Basic</option>
                  <option>Pro</option>
                  <option>Enterprise</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeInItem} className="md:col-span-2">
                <label className="block text-black text-sm mb-2">
                  Message / Comments
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </motion.div>
            </div>

            {/* Submit */}
            <div className="mt-6 text-center">
              <motion.button
                type="submit"
                className="px-6 py-3 bg-[#00A7DE] text-white rounded-lg shadow-lg hover:bg-[#0090C0] transition-colors"
                variants={blinkButton}
                initial="rest"
                animate="rest"
                whileHover="hover"
              >
                Submit Request
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center mt-10 text-[#797A7D]"
            variants={fadeUp}
            initial="hidden"
            viewport={{ once: false }}
            animate="visible"
          >
            <p className="mb-2 font-semibold text-black">
              Prefer to reach out directly?
            </p>
            <p>
              📧Email us at:{" "}
              <a
                href="mailto:support@yourdomain.com"
                className="text-[#797A7D]"
              >
                support@yourdomain.com
              </a>
            </p>
            <p>
              📞 Call us at:{" "}
              <a href="tel:+10001234567" className="text-[#797A7D]">
                +1 (000) 123-4567
              </a>
            </p>
            <p className="italic">We typically respond within 24 hours.</p>
            <p className="mt-4 text-sm text-black font-regular">
              Your AI-powered assistant is just one step away. Fill out the
              form, and let’s start building your future together.
            </p>
          </motion.div>
        </main>

        {/* Footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={slideUp}
          className="bg-[#FFFFFF] text-black py-10"
        >
          <motion.div
            className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8"
            variants={staggerContainer}
          >
            {/* Logo & Social */}
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
                {["twitter", "linkedln", "facebook", "instagram"].map(
                  (icon, i) => (
                    <Link href="#" key={i}>
                      <Image
                        src={`/images/${icon}.png`}
                        alt={icon}
                        width={20}
                        height={20}
                      />
                    </Link>
                  )
                )}
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

            {/* Industries 1 */}
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
                      className="hover:text-[#00A7DE] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Industries 2 */}
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

            {/* Industries 3 */}
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
                      className="hover:text-[#00A7DE] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideUpChild}
            className="border-t border-gray-300 mt-8 pt-4 text-center text-sm"
          >
            © 2025 VirtualAssistant. All rights reserved.
          </motion.div>
        </motion.footer>
      </div>
    </>
  );
}
