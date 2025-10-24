"use client";
import React from "react";
import { slideUp } from "../_components/animations/footer";
import { slideUpChild } from "../_components/animations/footer";
import { staggerContainer } from "../_components/animations/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
   <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={slideUp} // Footer slides up as a whole
            className="bg-[#FFFFFF] text-black py-10"
          >
            <motion.div
              className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-6 sm:gap-y-8 md:gap-y-12 gap-x-6"
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
                  Transforming industries with<br/> intelligent virtual<br/> assistants.
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
                    { name: "Home", href: "/" },
                    { name: "Features", href: "" },
                    { name: "About", href: "/about" },
                    { name: "Industries", href: "/industries" },
                    { name: "Pricing", href: "/#pricing" },
                    { name: "Contact Us", href: "/contact" },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="hover:text-[#00A7DE] transition-colors duration-300"
                      >
                        {item.name}
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
                    {
                      name: "Physiotherapist",
                      href: "/industries/Physotherapist",
                    },
                    { name: "Myotherapist", href: "/industries/myotherapist" },
                    {
                      name: "Massage Therapist",
                      href: "/industries/massagetherapist",
                    },
                    {
                      name: "Personal Trainer",
                      href: "/industries/personaltrainer",
                    },
                    { name: "Psychologist", href: "/industries/psychology" },
                    { name: "Chiropractor", href: "/industries/chiropractor" },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="hover:text-[#00A7DE] transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
  
              {/* Industries col 2 */}
              <motion.div
                variants={slideUpChild}
                className="space-y-2 sm:space-y-3"
              >
                <h3 className="font-semibold mb-2 sm:mb-3 hidden sm:block">
                  &nbsp;
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-600">
                  {[
                    { name: "Podiatrist", href: "/industries/podiatrist" },
                    {
                      name: "Beauty Therapist",
                      href: "/industries/beauty-therapist",
                    },
                    { name: "Hairdresser", href: "/industries/hairdresser" },
                    { name: "Dentist", href: "/industries/dentist" },
                    { name: "Accountant", href: "/industries/accountant" },
                    { name: "Lawyer", href: "/industries/lawyer" },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="hover:text-[#00A7DE] transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
  
              {/* Industries col 3 */}
              <motion.div
                variants={slideUpChild}
                className="space-y-2 sm:space-y-3"
              >
                <h3 className="font-semibold mb-2 sm:mb-3 hidden sm:block">
                  &nbsp;
                </h3>
                <ul className="space-y-1 sm:space-y-2 text-gray-600">
                  {[
                    { name: "Consultant", href: "/industries/consultant" },
                    {
                      name: "Real Estate Agent",
                      href: "/industries/real-estate-agent",
                    },
                    { name: "Mechanic", href: "/industries/mechanic" },
                    { name: "Plumber", href: "/industries/plumber" },
                    { name: "Electrician", href: "/industries/electrician" },
                    {
                      name: "Window Cleaning",
                      href: "/industries/window-cleaning",
                    },
                  ].map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="hover:text-[#00A7DE] transition-colors duration-300"
                      >
                        {item.name}
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
  );
};

export default Footer;
