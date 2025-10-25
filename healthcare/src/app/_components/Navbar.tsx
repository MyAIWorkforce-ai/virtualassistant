"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-4 md:px-6 z-[100]">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/logo1.png"
            alt="YourBrand Logo"
            width={177}
            height={40}
            className="pl-4"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
            <li>
              <Link href="/" className="text-black hover:text-[#00A7DE]">
                Home
              </Link>
            </li>

            {/* ✅ Features Dropdown */}
            <li className="relative group">
              <Link href="/features" className="text-black hover:text-[#00A7DE]">
                Features
              </Link>

              {/* Dropdown */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[250px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100] p-2">
                <ul>
                  <li><Link href="/features/ai-receptionist" className="block px-4 py-2 text-black hover:text-[#00A7DE]">AI-Receptionist</Link></li>
                  <li><Link href="/features/appointmentscheduling" className="block px-4 py-2 text-black hover:text-[#00A7DE]">AI-Appointment Scheduling </Link></li>
                  <li><Link href="/features/virtualassistent" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Smart AI-Assistant for Clients</Link></li>
                  <li><Link href="/features/postsection" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Post-Session Tools</Link></li>
                  <li><Link href="/features/" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Feature Five</Link></li>
                  <li><Link href="/features/feature6" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Feature Six</Link></li>
                </ul>
              </div>
            </li>

            {/* Industries Dropdown */}
            <li className="relative group">
              <Link href="/industries" className="text-[#00A7DE]">
                Industries
              </Link>

              {/* Dropdown */}
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[500px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100] grid grid-cols-2 gap-2 p-2">
                {/* Column 1 */}
                <ul>
                  <li><Link href="/industries/Physotherapist" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Physiotherapist</Link></li>
                  <li><Link href="/industries/myotherapist" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Myotherapist</Link></li>
                  <li><Link href="/industries/personaltrainer" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Personal Trainer</Link></li>
                  <li><Link href="/industries/massagetherapist" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Massage Therapist</Link></li>
                  <li><Link href="/industries/psychology" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Psychology</Link></li>
                  <li><Link href="/industries/chiropractor" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Chiropractor</Link></li>
                  <li><Link href="/industries/podiatrist" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Podiatrist</Link></li>
                  <li><Link href="/industries/beauty-therapist" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Beauty Therapist</Link></li>
                  <li><Link href="/industries/hairdresser" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Hair Dresser</Link></li>
                  <li><Link href="/industries/dentist" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Dentist</Link></li>
                </ul>

                {/* Column 2 */}
                <ul>
                  <li><Link href="/industries/lawyer" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Lawyer</Link></li>
                  <li><Link href="/industries/accountant" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Accountant</Link></li>
                  <li><Link href="/industries/cleaning" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Cleaning</Link></li>
                  <li><Link href="/industries/electricians" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Electricians</Link></li>
                  <li><Link href="/industries/estateagent" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Estate Agent</Link></li>
                  <li><Link href="/industries/forothers" className="block px-4 py-2 text-black hover:text-[#00A7DE]">For Others</Link></li>
                  <li><Link href="/industries/machanic" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Machanic</Link></li>
                  <li><Link href="/industries/plumber" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Plumber</Link></li>
                  <li><Link href="/industries/resaturant" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Resturant</Link></li>
                  <li><Link href="/industries/consultant" className="block px-4 py-2 text-black hover:text-[#00A7DE]">Consultant</Link></li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/#pricing" className="text-black hover:text-[#00A7DE]">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-[#00A7DE]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-[#00A7DE]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-black hover:text-[#00A7DE]">
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
          <Image src="/images/logo1.png" alt="Logo" width={150} height={40} />
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-6 text-sm font-medium">
          <li>
            <Link href="/" className="text-black hover:text-[#00A7DE]" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/features" className="text-black hover:text-[#00A7DE]" onClick={() => setIsOpen(false)}>Features</Link>
          </li>
          <li>
            <Link href="/industries" className="text-black hover:text-[#00A7DE]" onClick={() => setIsOpen(false)}>Industries</Link>
          </li>
          <li>
            <Link href="/pricing" className="text-black hover:text-[#00A7DE]" onClick={() => setIsOpen(false)}>Pricing</Link>
          </li>
          <li>
            <Link href="/about" className="text-black hover:text-[#00A7DE]" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-black hover:text-[#00A7DE]" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
          <li>
            <Link href="/login" className="text-black hover:text-[#00A7DE]" onClick={() => setIsOpen(false)}>Log In</Link>
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
  );
}
