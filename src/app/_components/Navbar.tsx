"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

// NEW helper to clean slugs
const makeSlug = (name: string) =>
 name
 .toLowerCase()
   .replace(/[^a-z0-9]/g, ""); // removes spaces, &, symbols

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

 
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path);
  };

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="flex justify-between items-center h-[74px] max-w-[1440px] w-full mx-auto px-4 md:px-6 z-[100]">

        <Link href="/" className="flex items-center">
          <Image
            src="/logo-virtualassistant.com.au.png"
            alt="virtualassistant.com.au Logo"
            width={177}
            height={40}
            className="pl-4"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
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
              <Link
                href="/#features"
                className={`${pathname.includes("/features") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              >
                Features
              </Link>

              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[250px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100] p-2">
                <ul>
                  {[
                    { href: "/features/ai-receptionist", label: "AI-Receptionist" },
                    { href: "/features/appointmentscheduling", label: "AI-Appointment Scheduling" },
                    { href: "/features/smartai-assistant", label: "Smart AI-Assistant for Clients" },
                    { href: "/features/postsection", label: "Post-Session Tools" },
                    { href: "/features/onlineintegration", label: "Online Integration" },
                    { href: "/features/advanceddashboard", label: "Advanced dashboard" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-2 ${
                          pathname === item.href ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"
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
              <Link
                href="/industries"
                className={`${pathname.includes("/industries") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              >
                Industries
              </Link>

              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[700px] bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out delay-200 z-[100] grid grid-cols-3 gap-2 p-3">
                {[
                  ["Physiotherapy","Myotherapist","Personal Trainer","Massage Therapist","Psychology","Chiropractor","Podiatrist","Beauty Therapist"],
                  ["Hairdresser","Dentist","Osteopaths","Lawyer","Accountant","Consultant","Real Estate Agent","Mechanic"],
                  ["Plumber","Cleaning","Electrician","Resturant","Hotels & Accommodation","For Other"]
                ].map((column, idx) => (
                  <ul key={idx}>
                    {column.map((name) => {

  // Convert "Massage Therapist" → massagetherapist
  // Convert "Hotel & Accommodations" → hotelaccommodations
  const slug = makeSlug(name);

 return (
    <li key={name}>
      <Link
       href={`/industries/${slug}`}
       className={`block px-4 py-2 ${
          pathname === `/industries/${slug}`
             ? "text-[#00A7DE]"
             : "text-black hover:text-[#00A7DE]"
        }`}
      >
         {name}
      </Link>     </li>
   );
})}
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
                href="/contact"
                className={`${isActive("/contact") ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"}`}
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                href="https://admin.virtualassistant.com.au/login"
                className="text-black hover:text-[#00A7DE]"
              >
                Log In
              </Link>
            </li>

            <li>
              <Link
                href="https://admin.virtualassistant.com.au/register"
                className="bg-[#00A7DE] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button className="lg:hidden text-black" onClick={() => setIsOpen(!isOpen)}>
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
          {[
            { href: "/", label: "Home" },
            { href: "/features", label: "Features" },
            { href: "/industries", label: "Industries" },
            { href: "/#pricing", label: "Pricing" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact Us" },
            { href: "https://admin.virtualassistant.com.au/login", label: "Log In" },
            { href: "https://admin.virtualassistant.com.au/register", label: "Sign Up", isButton: true },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${
                  item.isButton
                    ? "bg-[#00A7DE] text-white px-5 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_#00A7DE] hover:scale-105 w-full sm:w-auto text-center sm:text-left"
                    : isActive(item.href) ? "text-[#00A7DE]" : "text-black hover:text-[#00A7DE]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
