"use client";
import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

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
  const [status, setStatus] = useState(""); // For API submission status

  // Form
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+61",
    assistantTeam: "",
    package: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    phone: false,
  });

  const countryCodes = [
    { code: "+61", country: "AU" },
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+92", country: "Pk" },
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

  // --- Fixed handleSubmit for JS (API integration) ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.email.includes("@") || !/^\d{7,15}$/.test(formData.phone)) {
      setStatus("Please fix errors before submitting.");
      return;
    }

    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Email sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          countryCode: "+61",
          assistantTeam: "",
          package: "",
          message: "",
        });
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again.");
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
        <meta
          property="og:url"
          content="https://virtual-assistant-website-aus-n7zq.vercel.app/contact"
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-r from-sky-100 to-white">
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
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white shadow-md placeholder-gray-300 rounded-lg p-6 sm:p-8 w-full max-w-2xl"
            variants={staggerFormContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <motion.div variants={fadeInItem}>
                <label className="block text-black text-sm mb-2">Full Name*</label>
                <input
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 border-gray-300 text-black placeholder-gray-300 text-regular focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </motion.div>

              {/* Phone Number */}
              <motion.div variants={fadeInItem}>
                <label className="block text-black text-sm mb-2">Phone Number*</label>
                <div className="flex">
                  <select
                    required
                    value={formData.countryCode}
                    onChange={(e) => handleChange("countryCode", e.target.value)}
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
                    placeholder="Enter Your Phone Number"
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
                  <p className="text-red-500 text-sm mt-1">Please enter a valid phone number</p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeInItem} className="w-full">
                <label className="block text-black text-sm mb-2">Email Address*</label>
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`w-full border rounded-lg px-4 py-2 text-black placeholder-gray-300 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 ring-red-500"
                      : "border-gray-300 ring-sky-500"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                )}
              </motion.div>

              {/* Assistant Team */}
              <motion.div variants={fadeInItem} className="w-full">
                <label className="block text-black text-sm mb-2">Assistant Team (Industry)*</label>
                <select
                  required
                  value={formData.assistantTeam}
                  onChange={(e) => handleChange("assistantTeam", e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 text-black focus:outline-none placeholder-gray-300 focus:ring-2 focus:ring-sky-500"
                >
                  <option value="">Select an industry</option>
    <option>Physiotherapist</option>
            <option>Myotherapist</option>
            <option>Massage Therapist</option>
            <option>Personal Trainer</option>
            <option>Podiatrist</option>
            <option>Psychologist</option>
            <option>Chiropractor</option>
            <option>Osteopath</option>
            <option>Hairdresser</option>
            <option>Dentist</option>
            <option>Accountant</option>
            <option>Lawyer</option>
            <option>Consultant</option>
            <option>Realestate Agent</option>
            <option>Mechanic</option>
            <option>Plumber</option>
            <option>Electrician</option>
            <option>Window Cleaning</option>
            <option>Beauty Therapist</option>
            <option>Restaurant</option>
            <option>Hotels & Accommodation</option>
            <option>Others</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeInItem} className="md:col-span-2">
                <label className="block text-black text-sm mb-2">Message / Comments</label>
                <textarea
                  rows={4}
                  placeholder="Tell us Whats on Your Mind?"
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
              {status && <p className="mt-2 text-sm text-black text-center">{status}</p>}
            </div>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="text-center mt-10 text-[#797A7D]"
            variants={fadeUp}
            initial="hidden"
            viewport={{ once: false }}
            animate="visible"
          >
            <p className="mb-2 font-semibold text-black">Prefer to reach out directly?</p>
            <p>
              📧 Email us at:{" "}
              <a href="mailto:Hi@virtualassistant.com.au" className="text-[#797A7D]">
                Hi@virtualassistant.com.au
              </a>
            </p>

            <p className="flex justify-center items-center gap-1">
              📞 Call Us Now:{" "}
              <a href="tel:0468068021" className="text-[#797A7D]">
                0468 068 021
              </a>
            </p>

            <p className="italic mt-6">We typically respond within 24 hours.</p>
            <p className="mt-4 text-sm text-black font-regular">
              Your AI-powered assistant is just one step away. Fill out the form, and let’s start building your future together.
            </p>
          </motion.div>
        </main>
      </div>
    </>
  );
}
