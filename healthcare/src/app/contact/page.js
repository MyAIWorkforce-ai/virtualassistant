"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideUp } from "../_components/animations/footer";
import { slideUpChild } from "../_components/animations/footer";
import { staggerContainer } from "../_components/animations/footer";
import { fadeUp } from "../_components/animations/formanimation";
import { fadeInItem } from "../_components/animations/formanimation";
import { blinkButton } from "../_components/animations/formanimation";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-white">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo1.png"
              alt="Logo"
              width={177}
              height={40}
              className="pl-4"
            />
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center space-x-8 text-sm font-medium">
              <li><Link href="/home" className="text-black hover:text-[#00A7DE]">Home</Link></li>
              <li><Link href="/features" className="text-black hover:text-[#00A7DE]">Features</Link></li>
{/* Dropdown list */}
              <li className="relative group">
                {/* Parent Link */}
                <Link href="/" className="text-black hover:text-[#00A7DE]">
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
              <li><Link href="/pricing" className="text-black hover:text-[#00A7DE]">Pricing</Link></li>
              <li><Link href="/about" className="text-black hover:text-[#00A7DE]">About</Link></li>
              <li><Link href="/contact" className="text-[#00A7DE]">Contact</Link></li>
              <li><Link href="/login" className="text-black hover:text-[#00A7DE]">Log In</Link></li>
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

      {/* Main Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        
        {/* Hero */}
        <motion.div 
          className="text-center max-w-2xl mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        viewport={{ once: false}}

        >
          <h1 className="text-3xl md:text-5xl font-bold text-[#00A7DE]">
            Let’s Get You Started
          </h1>
          <p className="mt-2 text-[#797A7D]">
            Whether you’re exploring AI for your business or ready to scale, our
            team is here <br /> to help.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={{ once: false}}

        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Full Name*", type: "text", placeholder: "Admin Assistant" },
              { label: "Phone Number*", type: "tel", placeholder: "+1 (000) 000-0000" },
              { label: "Email Address*", type: "email", placeholder: "Admin123@gmail.com", span: true },
              { label: "Assistant Team (Industry)*", type: "select", options: ["Healthcare", "Finance", "Education"] },
              { label: "Package Selection*", type: "select", options: ["Basic", "Pro", "Enterprise"] },
              { label: "Message / Comments", type: "textarea", span: true },
            ].map((field, i) => (
              <motion.div
                key={i}
                variants={fadeInItem}
                className={field.span ? "md:col-span-2" : ""}
              >
                <label className="block text-black text-sm mb-2">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"></textarea>
                ) : field.type === "select" ? (
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-sky-500">
                    <option>Select an option</option>
                    {field.options.map((opt, idx) => <option key={idx}>{opt}</option>)}
                  </select>
                ) : (
                  <input 
                    type={field.type} 
                    placeholder={field.placeholder} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500" 
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Blinking Button */}
          <div className="mt-6 text-center">
            <motion.button
              type="submit"
              className="px-6 py-3 bg-[#00A7DE] text-white rounded-lg shadow-lg"
              variants={blinkButton}
              initial="rest"
              animate="rest"
            viewport={{ once: false}}

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
          <p className="mb-2 font-semibold text-black ">Prefer to reach out directly?</p>
          <p>📧Email us at: <a href="mailto:support@yourdomain.com" className="text-[#797A7D]">support@yourdomain.com</a></p>
          <p>📞 Call us at: <a href="tel:+10001234567" className="text-[#797A7D]">+1 (000) 123-4567</a></p>
          <p className="italic">We typically respond within 24 hours.</p>
          <p className="mt-4 text-sm text-black font-regular">
            Your AI-powered assistant is just one step away. Fill out the form,
            and let’s start building your future together.
          </p>
        </motion.div>
           </main>

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
