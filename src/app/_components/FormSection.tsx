"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { staggerParent } from "../_components/animations/physo7";
export default function FormSection() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [isPhoneValid, setIsPhoneValid] = useState(true);

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

  const staggerParent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const staggerChild = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
   <motion.form
                 variants={staggerParent}
                 initial="hidden"
                 animate="show"
                 className="bg-white rounded-lg shadow-md p-8 text-left relative overflow-hidden"
                 noValidate
               >
                 <motion.div
                   className="absolute inset-0 bg-gradient-to-br from-[#00A7DE]/10 to-[#098DC9]/5 pointer-events-none"
                   animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                   transition={{
                     repeat: Infinity,
                     duration: 8,
                     ease: "easeInOut",
                   }}
                 />
   
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                   {/* Full Name */}
                   <motion.div variants={staggerChild}>
                     <label
                       htmlFor="fullName"
                       className="block text-sm text-black font-medium mb-1"
                     >
                       Full Name
                     </label>
                     <input
                       id="fullName"
                       type="text"
                       placeholder="Enter your name"
                       className="w-full border border-[#D1D5DB] placeholder-gray-300 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
                       required
                     />
                   </motion.div>
   
                   {/* Email */}
                   <motion.div variants={staggerChild}>
                     <label
                       htmlFor="email"
                       className="block text-sm text-black font-medium mb-1"
                     >
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
                         isEmailValid
                           ? "border-[#D1D5DB] focus:ring-[#00A7DE]"
                           : "border-red-500 focus:ring-red-500"
                       }`}
                       required
                     />
                     {!isEmailValid && (
                       <p id="email-error" className="text-red-500 text-xs mt-1">
                         Please enter a valid email address
                       </p>
                     )}
                   </motion.div>
   
                   {/* Phone (merged with country code) */}
                   <motion.div variants={staggerChild}>
                     <label
                       htmlFor="phone"
                       className="block text-sm text-black font-medium mb-1"
                     >
                       Phone Number
                     </label>
                     <div className="flex border border-[#D1D5DB] rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#00A7DE]">
                       {/* Country Code */}
                       <select
                         value={countryCode}
                         onChange={(e) => setCountryCode(e.target.value)}
                         className=" text-black px-3 py-2 border-r border-[#D1D5DB] outline-none"
                       >
                         <option value="+1">🇺🇸 +1</option>
                         <option value="+44">🇬🇧 +44</option>
                         <option value="+92">🇵🇰 +92</option>
                         <option value="+91">🇮🇳 +91</option>
                         <option value="+61">🇦🇺 +61</option>
                         <option value="+81">🇯🇵 +81</option>
                         <option value="+971">🇦🇪 +971</option>
                         <option value="+49">🇩🇪 +49</option>
                         <option value="+33">🇫🇷 +33</option>
                         <option value="+86">🇨🇳 +86</option>
                       </select>
   
                       {/* Phone Input */}
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
                     <label
                       htmlFor="industry"
                       className="block text-sm text-black font-medium mb-1"
                     >
                       Industry
                     </label>
                     <select
                       id="industry"
                       className="w-full border border-[#D1D5DB] placeholder-gray-300 text-black rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
                       required
                     >
                       <option value="" className="text-[#D1D5DB]">
                         Search or select your industry
                       </option>
                      <option>Physiotherapist</option>
       <option>Myotherapist</option>
       <option>Massagetherapist</option>
       <option>personaltrainer</option>
       <option>Podiatrist</option>
       <option>Psychologist</option>
       <option>Hairdresser</option>
       <option>Chiropractor</option>
       <option>Dentist</option>
       <option>Beauty Therapist</option>
                     </select>
                   </motion.div>
                 </div>
   
                 {/* Message */}
                 <motion.div
                   variants={staggerChild}
                   className="mt-6 relative z-10"
                 >
                   <label
                     htmlFor="message"
                     className="block text-sm font-medium text-black mb-1"
                   >
                     How can we help?
                   </label>
                   <textarea
                     id="message"
                     placeholder="Tell us about your specific needs or challenges"
                     rows={4}
                     className="w-full border border-[#D1D5DB] text-black placeholder-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00A7DE]"
                     required
                   />
                 </motion.div>
   
                 {/* Submit */}
                 <motion.div
                   variants={staggerChild}
                   className="mt-6 text-center relative z-10"
                 >
                   <motion.button
                     whileHover={{ scale: 1.05, backgroundColor: "#098DC9" }}
                     whileTap={{ scale: 0.95 }}
                     type="submit"
                     className="bg-[#00A7DE] text-white font-medium px-6 py-2 rounded-md transition"
                   >
                     Submit
                   </motion.button>
                 </motion.div>
               </motion.form>
  );
}
