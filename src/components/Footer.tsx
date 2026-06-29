import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube, FaChevronRight, FaShieldAlt, FaBoxOpen, FaUsers, FaRegClock, FaAward, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { COMPANY } from "@/utils/company-info";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/about", label: "About Us" },
  { href: "/locations", label: "Our Branches" },
  { href: "https://wa.me/917988859067?text=Hello%20Globe%20Relocation%20Packers%20and%20Movers%2C%20I%20would%20like%20to%20track%20my%20shipment.%20My%20booking%20details%20are%3A", label: "Track Shipment", external: true },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/sitemap-page", label: "Sitemap" },
];

const serviceLinks = [
  { href: "/services/home-shifting", label: "Home Shifting" },
  { href: "/services/office-relocation", label: "Office Relocation" },
  { href: "/services/car-transportation", label: "Car Transportation" },
  { href: "/services/bike-transportation", label: "Bike Transportation" },
  { href: "/services/warehouse-storage", label: "Warehouse & Storage" },
  { href: "/services/domestic-relocation", label: "Domestic Relocation" },
  { href: "/services/international-shifting", label: "International Shifting" },
  { href: "/services/corporate-shifting", label: "Corporate Shifting" },
  { href: "/services/intercity-shifting", label: "Intercity Shifting" },
  { href: "/services/local-shifting", label: "Local Shifting" },
  { href: "/services/logistic-services", label: "Logistic Services" },
  { href: "/services/pet-relocation", label: "Pet Relocation" }
];

export default function Footer() {
  return (
    <footer className="bg-[#0A58CA] text-white pt-16 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* Column 1 */}
          <div className="space-y-6 lg:pr-4">
            <div>
              <Image src={'https://ik.imagekit.io/khibl45oa/Logo.png'} alt="Logo" width={220} height={60} className="object-contain w-full" />
              <p className="text-[12px] md:text-[13px] font-medium leading-relaxed text-white mt-2">
                Safe. Secure. Sincere. Your trusted moving partner for a hassle-free relocation experience.
              </p>
            </div>

            {/* 4 Icons 2x2 grid */}
            <div className="grid grid-cols-2 gap-0 border-y border-white/10 divide-x divide-y divide-white/10 mt-6 mb-8">
              <div className="flex flex-col items-center justify-center text-center gap-2.5 p-6 md:p-8">
                <FaShieldAlt className="text-[#fca311] text-2xl md:text-3xl" />
                <span className="text-[11px] md:text-[13px] font-bold text-white">Safe Handling</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2.5 p-6 md:p-8">
                <FaBoxOpen className="text-[#fca311] text-2xl md:text-3xl" />
                <span className="text-[11px] md:text-[13px] font-bold text-white">Secure Packing</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2.5 p-6 md:p-8">
                <FaUsers className="text-[#fca311] text-2xl md:text-3xl" />
                <span className="text-[11px] md:text-[13px] font-bold text-white">Experienced Team</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center gap-2.5 p-6 md:p-8">
                <FaAward className="text-[#fca311] text-2xl md:text-3xl" />
                <span className="text-[11px] md:text-[13px] font-bold text-white">On-Time Delivery</span>
              </div>
            </div>

            <p className="text-[11px] leading-relaxed text-blue-100 mt-2">
              A proud partner of <span className="font-bold text-[#fca311]">Globe Relocation Packers & Movers</span>, India's leading and most trusted relocation network with IBA approval.
            </p>

            <div className="bg-white text-[#1e5a22] text-[10px] font-extrabold px-3 py-2.5 rounded flex items-center gap-2 w-full">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 border border-green-200">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="uppercase tracking-tight">Globe Relocation Packers & Movers PRIVATE LIMITED</span>
            </div>
          </div>

          {/* Column 2 & 3 Mobile Container: Quick Links & Our Services */}
          <div className="grid grid-cols-2 gap-6 lg:gap-12 md:col-span-1 lg:col-span-2">
            <div>
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noreferrer" className="text-[12px] md:text-[13px] font-medium text-white hover:text-blue-200 transition-colors flex items-center gap-3">
                        <FaChevronRight className="text-[#fca311] text-[10px]" /> {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-[12px] md:text-[13px] font-medium text-white hover:text-blue-200 transition-colors flex items-center gap-3">
                        <FaChevronRight className="text-[#fca311] text-[10px]" /> {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[18px] md:text-[20px] font-extrabold text-white mb-6">Our Services</h3>
              <ul className="space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[12px] md:text-[13px] font-medium text-white hover:text-blue-200 transition-colors flex items-center gap-3">
                      <FaChevronRight className="text-[#fca311] text-[10px]" /> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-[18px] md:text-[20px] font-extrabold text-white mb-6">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <FaPhoneAlt className="text-[#fca311] text-[14px]" />
                </div>
                <a href="tel:+9179888 59067" className="text-[13px] font-bold text-white hover:text-blue-200 transition-colors">
                  +91 79888 59067
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <FaPhoneAlt className="text-[#fca311] text-[14px]" />
                </div>
                <a href="tel:+9179888 59067" className="text-[13px] font-bold text-white hover:text-blue-200 transition-colors">
                  +91 79888 59067
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center shrink-0 shadow-sm">
                  <FaEnvelope className="text-[#fca311] text-[14px]" />
                </div>
                <a href="mailto:support@globerelo.in" className="text-[13px] font-bold text-white hover:text-blue-200 transition-colors">
                  support@globerelo.in
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <FaMapMarkerAlt className="text-[#fca311] text-[14px]" />
                </div>
                <span className="text-[12px] font-medium leading-relaxed text-white mt-1">
                  Shop 430,Ravi Plot, Near City Store, 3rd Cross,<br />Green Nandana Layout, Cheemasandra,<br /> D Avalhalli, Virgonagar Karnataka, 560049.
                </span>

              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/30 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-[2] flex flex-col items-start md:items-center justify-center gap-2 w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-12 text-[11px] font-semibold text-white">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#fca311] text-[14px]" /> 100% Secure Shifting
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-[#fca311] text-[14px]" /> Reliable | Affordable | Professional
              </div>
            </div>

            <div className="w-full h-px bg-blue-400/20 my-2 md:hidden"></div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
              <div className="text-left">
                <p className="text-[11px] font-medium text-white leading-relaxed">
                  © 2026 Globe Relocation Packers & Movers Pvt. Ltd.<br />All Rights Reserved.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-[11px] font-medium text-white mt-4 md:mt-0">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                <Link href="/sitemap-page" className="hover:text-white transition-colors">Sitemap</Link>
              </div>
              <p className="text-[10px] text-blue-200/60 mt-2 md:mt-1">
                GST: {COMPANY.gstNumber} | CIN: {COMPANY.cinNumber}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:justify-end gap-3 mt-2 md:mt-0">
            <span className="text-[11px] font-medium text-white mr-1">Follow Us</span>
            <div className="flex items-center gap-2">
              <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="w-[26px] h-[26px] rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-[#0A58CA] transition-colors text-white">
                <FaFacebookF size={11} />
              </a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="w-[26px] h-[26px] rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-[#0A58CA] transition-colors text-white">
                <FaInstagram size={11} />
              </a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-[26px] h-[26px] rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-[#0A58CA] transition-colors text-white">
                <FaLinkedinIn size={11} />
              </a>
              <a href={COMPANY.social.twitter} target="_blank" rel="noreferrer" aria-label="X (Twitter)" className="w-[26px] h-[26px] rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-[#0A58CA] transition-colors text-white">
                <FaXTwitter size={11} />
              </a>
              <a href={COMPANY.social.pinterest} target="_blank" rel="noreferrer" aria-label="Pinterest" className="w-[26px] h-[26px] rounded-full border border-blue-100 flex items-center justify-center hover:bg-white hover:text-[#0A58CA] transition-colors text-white">
                <FaPinterestP size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
