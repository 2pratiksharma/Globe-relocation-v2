import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaStar, FaTags, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

import globeLogo from "../../public/reloLogo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" }
];

const callNumber = "+91 79888 59067";
const email = "info@globerelocation.com";

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => router.pathname === href;

  return (
    <header className="w-full z-50 shadow-md bg-white sticky top-0">
      {/* Top Bar - Responsive Layout */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#030f26] py-2 px-3 md:px-6 lg:px-12 text-white gap-2 md:gap-0">
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full md:w-auto text-[11px] md:text-sm">
          <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-gray-300 transition-colors truncate">
            <FaEnvelope className="text-white shrink-0" /> <span className="truncate">{email}</span>
          </a>
          <a href={`tel:${callNumber.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-gray-300 transition-colors font-medium shrink-0">
            <FaPhoneAlt className="text-white shrink-0" /> {callNumber}
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 md:gap-4 w-full md:w-auto">
          <span className="flex items-center justify-center gap-1.5 bg-[#fca311] text-[#002d5c] px-2 md:px-3 py-1 rounded-md font-bold text-[9px] md:text-xs uppercase tracking-wide flex-1 md:flex-none">
            <FaTags className="shrink-0" /> <span className="truncate">10% OFF MOVE</span>
          </span>
          <span className="flex items-center justify-center gap-1.5 bg-[#fca311] text-[#002d5c] px-2 md:px-3 py-1 rounded-md font-bold text-[9px] md:text-xs uppercase tracking-wide flex-1 md:flex-none">
            <FaStar className="shrink-0" /> <span className="truncate">4.9 REVIEWS</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Go to Home">
            {/* Using the existing logo or placeholder. Adjust width/height as needed */}
            <Image src={'https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2030,%202026,%2001_18_45%20AM.png'} alt="Logo" width={180} height={60} className="object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-[15px] transition-colors duration-300 relative group ${isActive(link.href) ? "text-[#00458b]" : "text-gray-800 hover:text-[#00458b]"
                  }`}
              >
                {link.label}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-[#00458b] transition-all duration-300 ${isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/quote"
              className="flex items-center gap-2 bg-[#00458b] hover:bg-[#002d5c] text-white px-6 py-2.5 rounded-md font-bold transition-all"
            >
              <FaFileAlt /> Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              href="/quote"
              className="flex items-center gap-2 bg-[#00458b] text-white px-4 py-2 rounded-md font-bold text-sm"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-[#00458b] focus:outline-none p-2 bg-gray-100 rounded-md"
              aria-label="Open mobile menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/50"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="relative w-[80%] max-w-sm bg-white h-full shadow-xl flex flex-col"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200">
                <Image src={'https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2030,%202026,%2001_18_45%20AM.png} alt="Logo" width={140} height={45} className="object-contain w-full" />
                  < button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="flex-1 overflow-y-auto py-4 px-5">
                <p className="text-gray-600 text-sm mb-6">Safe, reliable and hassle-free relocation services across India.</p>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-semibold py-2 border-b border-gray-100 ${isActive(link.href) ? "text-[#00458b]" : "text-gray-800"
                        }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar Footer */}
              <div className="p-5 border-t border-gray-200 bg-gray-50">
                <div className="flex flex-col gap-3">
                  <a href={`tel:${callNumber.replace(/\\s/g, "")}`} className="flex items-center justify-center gap-2 w-full bg-[#fca311] text-[#002d5c] font-bold py-3 rounded-md">
                    <FaPhoneAlt /> Call Now
                  </a>
                  <a href={`mailto:${email}`} className="flex items-center justify-center gap-2 w-full bg-white border border-[#00458b] text-[#00458b] font-bold py-3 rounded-md">
                    <FaEnvelope /> Email Us
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
