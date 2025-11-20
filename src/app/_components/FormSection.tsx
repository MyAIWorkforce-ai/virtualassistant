"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function FormSection() {
  // Form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+61");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [industry, setIndustry] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); 

  // Validation
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setIsPhoneValid(/^\d{7,15}$/.test(value));
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid || !isPhoneValid) {
      setStatus("Please fix errors before submitting.");
      return;
    }
    setStatus("Sending...");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, countryCode, industry, message }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Email sent successfully!");
        setFullName("");
        setEmail("");
        setPhone("");
        setIndustry("");
        setMessage("");
      } else {
        setStatus(`Failed to send email. ${data}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  // Framer Motion variants
  const staggerParent = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const staggerChild = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.form
      variants={staggerParent}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-8 text-left relative overflow-hidden max-w-3xl mx-auto"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Full Name */}
        <motion.div variants={staggerChild}>
          <label htmlFor="fullName" className="block text-sm text-black font-medium mb-1">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-[#D1D5DB] placeholder-gray-300 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
            required
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={staggerChild}>
          <label htmlFor="email" className="block text-sm text-black font-medium mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            aria-invalid={!isEmailValid}
            aria-describedby="email-error"
            className={`w-full border rounded-md px-3 py-2 placeholder-gray-300 text-black focus:outline-none focus:ring-2 ${
              isEmailValid ? "border-[#D1D5DB] focus:ring-[#00A7DE]" : "border-red-500 focus:ring-red-500"
            }`}
            required
          />
          {!isEmailValid && (
            <p id="email-error" className="text-red-500 text-xs mt-1">
              Please enter a valid email address
            </p>
          )}
        </motion.div>

        {/* Phone */}
        <motion.div variants={staggerChild}>
          <label htmlFor="phone" className="block text-sm text-black font-medium mb-1">
            Phone Number
          </label>
          <div className="flex border border-[#D1D5DB] rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#00A7DE]">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="text-black px-3 py-2 border-r border-[#D1D5DB] outline-none"
            >
              <option value="+61">🇦🇺 +61</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+92">🇵🇰 +92</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+81">🇯🇵 +81</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+33">🇫🇷 +33</option>
              <option value="+86">🇨🇳 +86</option>
            </select>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your number"
              aria-invalid={!isPhoneValid}
              aria-describedby="phone-error"
              className={`flex-1 px-3 py-2 text-black placeholder-gray-300 outline-none ${
                isPhoneValid ? "" : "border-l border-red-500"
              }`}
              required
            />
          </div>
          {!isPhoneValid && (
            <p id="phone-error" className="text-red-500 text-xs mt-1">
              Please enter a valid phone number
            </p>
          )}
        </motion.div>

        {/* Industry */}
        <motion.div variants={staggerChild}>
          <label htmlFor="industry" className="block text-sm text-black font-medium mb-1">
            Industry
          </label>
          <select
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full border border-[#D1D5DB] placeholder-gray-300 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
            required
          >
            <option value="" className="text-[#D1D5DB]">
              Search or select your industry
            </option>
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
      </div>

      {/* Message */}
      <motion.div variants={staggerChild} className="mt-6 relative z-10">
        <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
          How can we help?
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your specific needs or challenges"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border border-[#D1D5DB] text-black placeholder-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
          required
        />
      </motion.div>

      {/* Submit */}
      <motion.div variants={staggerChild} className="mt-6 text-center relative z-10">
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#098DC9" }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-[#00A7DE] text-white font-medium px-6 py-2 rounded-md transition"
        >
          Submit
        </motion.button>
        {status && <p className="mt-2 text-sm text-center text-black">{status}</p>}
      </motion.div>
    </motion.form>
  );
}
