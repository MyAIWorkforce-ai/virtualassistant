"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideUp, slideUpChild, staggerContainer } from "../_components/animations/footer";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={slideUp}
      className="bg-white text-black py-5"
    >
      <motion.div
        className="max-w-[1200px] mx-auto px-3 sm:px-6 lg:px-3 flex flex-col lg:flex-row gap-4"
        variants={staggerContainer}
      >
        {/* -------- Left Side (Logo & Info)-------- */}
        <motion.div
          className="w-full lg:w-[20%]"
          variants={slideUpChild}
        >
          <Image
            src="/logo-virtualassistant.com.au.png"
            alt="Virtual Assistant Logo"
            width={180}
            height={60}
            priority
            className="mb-4"
          />
          <p className="text-sm mb-4 text-[#797A7D] pl-3 pr-20 leading-relaxed ">
            Transforming industries with intelligent virtual assistants.
          </p>

          {/* Social Icons */}
<div className="flex space-x-4 mb-4 pl-3">
 {[
    { icon: <FaTiktok className="text-[#797A7D] w-5 h-5" />, href: "https://www.tiktok.com/@virtualassistant.com.au?_r=1&_t=ZS-91ehc5xXH79" },
    { icon: <FaLinkedinIn className="text-[#797A7D] w-5 h-5" />, href: "https://www.linkedin.com/company/virtualassistant-com-au/?viewAsMember=true" },
    { icon: <FaFacebookF className="text-[#797A7D] w-5 h-5" />, href: "https://www.facebook.com/share/17M463fZ7Z/?mibextid=wwXIfr" },
    { icon: <FaInstagram className="text-[#797A7D] w-5 h-5" />, href: "https://www.instagram.com/virtualassistant.com.au?igsh=YjNvcjUxdnY5YXl3" },
  ].map((item, i) => (
  <Link
      key={i}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-80 hover:opacity-100 transition"
    >
      {item.icon}
    </Link>
  ))}
</div>

        </motion.div>

        {/* -------- Middle (Pages) - 20% -------- */}
        <motion.div
          className="w-full lg:w-[20%]"
          variants={slideUpChild}
        >
          <h3 className="font-semibold mt-4 mb-3">Pages</h3>
          <ul className="space-y-2 text-[#797A7D]">
            {[
              { name: "Home", href: "/" },
              { name: "Features", href: "/#features" },
              { name: "Industries", href: "/industries" },
              { name: "Pricing", href: "/#pricing" },
              { name: "About", href: "/about" },
              { name: "Contact Us", href: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="hover:text-[#00A7DE] transition-colors duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* -------- Right Side (Industries 4 Columns) -------- */}
        <motion.div
          className="w-full lg:w-[60%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2"
          variants={staggerContainer}
        >
          {/* Column 1 */}
          <motion.div variants={slideUpChild}>
            <h3 className="font-semibold mt-4 mb-3">Industries</h3>
            <ul className="space-y-2 text-[#797A7D]">

              {[
                { name: "Physiotherapist", href: "/industries/physiotherapy" },
                { name: "Myotherapist", href: "/industries/myotherapist" },
                { name: "Massage Therapist", href: "/industries/massagetherapist" },
                { name: "Personal Trainer", href: "/industries/personaltrainer" },
                { name: "Psychologist", href: "/industries/psychology" },
                { name: "Chiropractor", href: "/industries/chiropractor" },
                { name: "Podiatrist", href: "/industries/podiatrist" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-[#00A7DE] transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={slideUpChild}>
            <h3 className="font-semibold mt-4 mb-3">&nbsp;</h3>
            <ul className="space-y-2 text-[#797A7D]">
              {[
                { name: "Osteopath", href: "/industries/osteopaths" },
                { name: "Hairdresser", href: "/industries/hairdresser" },
                { name: "Dentist", href: "/industries/dentist" },
                { name: "Accountant", href: "/industries/accountant" },
                { name: "Lawyer", href: "/industries/lawyer" },
                { name: "Consultant", href: "/industries/consultant" },
                { name: "Real Estate Agent", href: "/industries/realestateagent" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-[#00A7DE] transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div variants={slideUpChild}>
            <h3 className="font-semibold mt-4 mb-3">&nbsp;</h3>
            <ul className="space-y-2 text-[#797A7D]">
              {[
                { name: "Mechanic", href: "/industries/mechanic" },
                { name: "Plumber", href: "/industries/plumber" },
                { name: "Electrician", href: "/industries/electricians" },
                { name: "Window Cleaning", href: "/industries/cleaning" },
                { name: "Beauty Therapist", href: "/industries/beautytherapist" },
                { name: "Restaurant & Takeaway", href: "/industries/resturant" },
                { name: "Hotels & Accommodation", href: "/industries/hotelsaccommodation" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-[#00A7DE] transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 */}
          <motion.div variants={slideUpChild}>
            <h3 className="font-semibold mt-4 mb-3">&nbsp;</h3>
            <ul className="space-y-2 text-[#797A7D]">
              {["Barber", "Builders", "Concreters", "HVAC", "Landscapers", "Roofing"
                { name: "Barber", href: "/industries/barber" },
                { name: "Builders", href: "/industries/builders" },
                { name: "Concreters", href: "/industries/concreters" },
                { name: "HVAC", href: "/industries/hvac" },
                { name: "Landscapers", href: "/industries/landscapers" },
                { name: "Roofing", href: "/industries/roofing" },
                { name: "Others", href: "/industries/forother" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-[#00A7DE] transition-colors duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* -------- Bottom Line -------- */}
      <motion.div
        variants={slideUpChild}
        className="border-t border-gray-300 mt-8 pt-4 relative flex flex-col md:flex-row items-center justify-center text-sm text-gray-600"
      >
        <div className="text-center">
          <p>© 2025 Virtualassistant.com.au</p>
          <p>All rights reserved.</p>
        </div>

        <div className="flex items-center gap-3 mt-2 md:mt-0 md:absolute right-6 whitespace-nowrap">
          <Link
            href="/privacy-policy"
            className="text-sm text-[#797A7D] hover:text-[#00A7DE] transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/termsService"
            className="text-sm text-[#797A7D] hover:text-[#00A7DE] transition-colors duration-300"
          >
            Terms of Service
          </Link>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
