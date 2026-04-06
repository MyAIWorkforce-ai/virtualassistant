"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const pathname = usePathname();
  const industryNames: Record<string, string> = {
    physiotherapy: "Physiotherapist",
    myotherapist: "Myotherapist",
    massagetherapist: "Massage Therapist",
    personaltrainer: "Personal Trainer" ,
    psychology: "Psychologist",
    chiropractor: "Chiropractor",
    podiatrist: "Podiatrist",
    osteopaths: "Osteopath",
    hairdresser: "Hairdresser",
    dentist: "Dentist",
    accountant: "Accountant",
    lawyer: "Lawyer",
    consultant: "Consultant",
    realestateagent: "Real Estate Agent",
    mechanic: "Mechanic",
    plumber: "Plumber",
    electricians: "Electrician",
    cleaning: "Window Cleaning",
    beautytherapist: "Beauty Therapist",
    resturant: "Restaurant & Takeaway",
    hotelsaccommodation: "Hotels & Accommodation",
    barber: "Barber",
    builders: "Builder",
    Concreters: "Concreter",
    hvac: "HVAC",
    landscapers: "Landscaper",
    roofing: "Roofing",
    painter: "Painter",
    tradie: "Tradie",
    forother: "Other",
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path);
  };
  return (
    <header className="w-screen bg-white shadow-sm fixed top-0 left-0 z-[100] ">
      <div className="flex justify-between items-center h-[80px] max-w-[1250px] w-full mx-auto px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/image/logo1.png"
            alt="YourBrand Logo"
            width={230}
            height={60}
            className="pl-4"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          {/* CORRECTED: Removed unnecessary wrapper divs that caused structural errors */}
          <ul className="flex items-center space-x-6 lg:space-x-8 text-sm font-medium font-poppins">
            
            {/* Main Links */}
            <li>
              <Link
                href="/"
                className={`${isActive("/") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              >
                Home
              </Link>
            </li>

            {/* Features Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-0.5 text-black hover:text-[#00A7DE] cursor-pointer">
                <Link
                  href="/#features"
                  className={`${pathname.includes("/features") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
                >
                  Features
                </Link>
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[250px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100] p-2">
                <ul>
                  {[
                    { href: "/features/ai-receptionist", label: "AI Receptionist" },
                    { href: "/features/appointmentscheduling", label: "AI Appointment Scheduling" },
                    { href: "/features/smartai-assistant", label: "Smart AI Assistant for Clients" },
                    { href: "/features/postsection", label: "Post Session Tools" },
                    { href: "/features/onlineintegration", label: "Online Integration" },
                    { href: "/features/advanceddashboard", label: "Advanced Dashboard" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 ${
                          pathname === item.href
                            ? "text-[#00A7DE]"
                            : "text-black hover:text-[#00A7DE]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Industries Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-0.5 text-black hover:text-[#00A7DE] cursor-pointer">
                <Link
                  href="/industries"
                  className={`${pathname.includes("/industries") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
                >
                  Industries
                </Link>
                <ChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100] grid grid-cols-3 gap-2 p-3">
                {[
                  ["physiotherapy", "myotherapist", "personaltrainer", "massagetherapist", "psychology", "chiropractor", "podiatrist", "beautytherapist", "hairdresser", "barber"],
                  ["dentist", "osteopaths", "lawyer", "accountant", "consultant", "realestateagent", "mechanic", "plumber", "cleaning", "electricians"],
                  [ "resturant", "hotelsaccommodation", "builders", "Concreters", "hvac", "landscapers", "roofing", "painter", "tradie", "forother"]
                ].map((column, idx) => (
                  <ul key={idx}>
                    {column.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={`/industries/${slug}`}
                          className={`block px-4 py-2 ${
                            pathname === `/industries/${slug}`
                              ? "text-[#00A7DE]"
                              : "text-black hover:text-[#00A7DE]"
                          }`}
                        >
                          {industryNames[slug] ||
                            slug.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </li>

            <li>
              <Link
                href="/#pricing"
                className={`${pathname.includes("/pricing") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={`${isActive("/about") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              >
                About
              </Link>
            </li>

             <li>
              <Link
                href="/faqs"
                className={`${isActive("/about") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              >
                FAQs
              </Link>
            </li>

             <li>
              <Link
                href="/blogs"
                className={`${isActive("/about") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              >
                Blogs
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`${isActive("/contact") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              >
                Contact Us
              </Link>
            </li>
            <li className="flex items-center justify-center gap-2 ml-8"> 
              <Link
                href="https://admin.virtualassistant.com.au/login"
                className="text-black px-5 py-2 rounded-full font-semibold border-2 border-[#00A7DE] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
              >
                Log In
              </Link>
              <Link
                href="https://admin.virtualassistant.com.au/register"
                className="bg-[#00A7DE] text-white px-5 py-2 rounded-full  font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button className="lg:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Image src="/image/logo1.png" alt="Logo" width={150} height={40} />
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col space-y-4  font-poppins p-6 text-sm font-medium font-poppins  text-[14px] leading-[1.44] tracking-[-0.04em]">
          <li>
            <Link
              href="/"
              className={`${isActive("/") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>

          {/* Mobile Features Dropdown */}
          <li>
            <div className="w-full flex flex-col">
              <button
                onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                className="w-full flex justify-between items-center text-black hover:text-[#00A7DE] font-poppins font-medium text-[14px] leading-[1.44] tracking-[-0.04em]"
              >
                {/* CORRECTION: Close menu when clicking the Features link */}
                <Link href="/#features" className="flex-1 text-left" onClick={() => setIsOpen(false)}>
                  Features
                </Link>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    mobileFeaturesOpen ? "rotate-180 text-[#00A7DE]" : "rotate-0"
                  }`}
                />
              </button>
              {mobileFeaturesOpen && (
                <ul className="pl-4 mt-2 space-y-2 font-poppins font-medium text-[14px] leading-[1.44] tracking-[-0.04em]">
                  {[
                    { href: "/features/ai-receptionist", label: "AI Receptionist" },
                    { href: "/features/appointmentscheduling", label: "AI Appointment Scheduling" },
                    { href: "/features/smartai-assistant", label: "Smart AI Assistant for Clients" },
                    { href: "/features/postsection", label: "Post Session Tools" },
                    { href: "/features/onlineintegration", label: "Online Integration" },
                    { href: "/features/advanceddashboard", label: "Advanced Dashboard" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block ${
                          pathname === item.href ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>


          {/* Mobile Industries Dropdown */}
          <li>
            <div className="w-full flex flex-col">
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex justify-between items-center text-black hover:text-[#00A7DE] font-poppins font-medium text-[14px] leading-[1.44] tracking-[-0.04em]"
              >
                {/* CORRECTION: Close menu when clicking the Industries link */}
                <Link href="/industries" className="flex-1 text-left" onClick={() => setIsOpen(false)}>
                  Industries
                </Link>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    mobileIndustriesOpen ? "rotate-180 text-[#00A7DE]" : "rotate-0"
                  }`}
                />
              </button>
              {mobileIndustriesOpen && (
                <ul className="pl-4 mt-2 space-y-1">
                  {[
                    "physiotherapy", "myotherapist", "personaltrainer", "massagetherapist", "psychology", "chiropractor",
                    "podiatrist", "beautytherapist", "hairdresser", "barber", "dentist", "osteopaths", "lawyer", "accountant",
                    "consultant", "realestateagent", "mechanic", "plumber", "cleaning", "electricians", "resturant",
                    "hotelsaccommodation", "builders", "Concreters", "hvac", "landscapers", "roofing", "painter", "tradie", "forother",
                  ].map((slug) => (
                    <li key={slug}>
                      <Link
                        href={`/industries/${slug}`}
                        className={`block ${
                          pathname === `/industries/${slug}`
                            ? "text-[#00A7DE]"
                            : "text-black hover:text-[#00A7DE]"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {industryNames[slug] ||
                          slug.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>

          <li>
            <Link
              href="/#pricing"
              className={`${pathname.includes("/pricing") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className={`${isActive("/about") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"} font-poppins font-medium text-[14px] leading-[1.44] tracking-[-0.04em]`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className={`${isActive("/contact") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"} font-poppins font-medium text-[14px] leading-[1.44] tracking-[-0.04em]`}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </li>

          <li className="mt-6 pt-4 border-t">
            <Link
              href="https://admin.virtualassistant.com.au/login"
              className="text-black px-6 py-3 rounded-full font-semibold font-poppins border-2 mb-2 border-[#00A7DE] transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105 block text-center font-poppins  text-[14px] leading-[1.44] tracking-[-0.04em]"
              onClick={() => setIsOpen(false)}
            >
              Log In
            </Link>
          </li>

          <li>
            <Link
              href="https://admin.virtualassistant.com.au/register"
              className="bg-[#00A7DE] text-white px-5 py-2 rounded-full font-poppins  text-[14px] leading-[1.44] tracking-[-0.04em] font-poppins font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105 w-full block text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
