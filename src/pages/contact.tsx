import Seo from "@/components/Seo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const contactFAQs = [
  {
    question: "How quickly can Globe Relocation Packers and Movers schedule a move in Bangalore?",
    answer:
      "Our move architects can dispatch survey teams within 2 hours inside Bangalore city limits and lock in packing teams within 24 hours for urgent moves."
  },
  {
    question: "Do you support international moves from Hyderabad and Delhi NCR?",
    answer:
      "Yes. We manage door-to-door international relocations from Hyderabad and Delhi NCR, handling customs clearances, marine insurance, and destination onboarding."
  },
  {
    question: "Can I track my shipment over WhatsApp?",
    answer:
      "Absolutely. Every relocation comes with live WhatsApp tracking links, proactive updates, and a dedicated move concierge."
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeStandard } },
  viewport: { once: true, amount: 0.1 }
};

export default function Contact() {
  const handleWhatsAppSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const moveFrom = formData.get("moveFrom")?.toString() ?? "";
    const moveTo = formData.get("moveTo")?.toString() ?? "";
    const moveDate = formData.get("moveDate")?.toString() ?? "";
    const details = formData.get("details")?.toString() ?? "";

    const url = new URL("https://wa.me/917988859067");
    const message = `Hello Globe Relocation Packers and Movers, I need a quote for shifting. Here are my details: Name: ${name}, Moving From: ${moveFrom}, Moving To: ${moveTo}, Preferred Date: ${moveDate}, Additional Details: ${details}`;
    url.searchParams.set("text", message);
    window.open(url.toString(), "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
      <Seo
        title="Contact | Globe Relocation Packers and Movers | Packers & Movers India to Global"
        description="Connect with Globe Relocation Packers and Movers for premium packers and movers in Bangalore, Hyderabad, and Delhi NCR. Start your WhatsApp relocation quote today."
        path="/contact"
      />

      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden min-h-[55vh] flex items-center pt-20 pb-12 md:pt-24 md:pb-16 bg-[#001126]">
          <div className="absolute inset-0">
            <Image src="/img/61765.jpg" alt="Contact Globe Relocation Packers and Movers" fill className="object-cover object-center opacity-30" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001126] via-[#001126]/80 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full text-center">
            <motion.div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fca311] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
              Talk to relocation strategists
            </motion.div>
            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeStandard }}
            >
              Contact <span className="text-[#58a6ff]">Globe Relocation</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: easeStandard }}
            >
              Whether you are planning a move within Bangalore, relocating your Hyderabad headquarters, or transitioning from Delhi NCR to a global
              destination, our move architects respond instantly over WhatsApp.
            </motion.p>
          </div>
        </section>

        <section className="relative py-12 md:py-24 bg-[#F8FAFC]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-start -mt-24 z-10">

            {/* LEFT COLUMN */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="space-y-8 order-2 lg:order-1"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } } }} className="rounded-[2rem] border border-gray-100 bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-bold text-[#fca311] text-[12px] uppercase tracking-widest mb-3">Direct lines</p>
                <h2 className="font-heading text-2xl font-extrabold text-[#001126] mb-8">Relocation command centers</h2>
                <div className="space-y-8 text-[15px] text-gray-600">
                  <div className="relative pl-6 border-l-2 border-[#0A58CA]/20 hover:border-[#0A58CA] transition-colors">
                    <p className="text-[#0A58CA] font-heading font-bold text-lg mb-1">Bangalore HQ</p>
                    <p className="mb-2">Shop 430, Ravi Plot, Near City Store, 3rd Cross, Green Nandana Layout, Cheemasandra, D Avalhalli, Virgonagar, Karnataka, 560049.</p>
                    <p className="font-medium text-[#001126]">Primary: +91 79888 59067</p>
                    <p className="font-medium text-[#001126]">Secondary: +91 72399 47013</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-[#0A58CA]/20 hover:border-[#0A58CA] transition-colors">
                    <p className="text-[#0A58CA] font-heading font-bold text-lg mb-1">Devanahalli Branch</p>
                    <p className="mb-2">40/1 Orchid Park Layout 42 Rayasandra Gate Sulibele Road Devanahalli Southegowdanahalli, Boodihal, Karnataka Bengaluru, Karnataka 562110</p>
                    <p className="font-medium text-[#001126]">Primary: +91 79888 59067</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-[#0A58CA]/20 hover:border-[#0A58CA] transition-colors">
                    <p className="text-[#0A58CA] font-heading font-bold text-lg mb-1">Hoodi Branch</p>
                    <p className="mb-2">No 37 Hoodi Industrial Area 6th Cross, Hoodi Main Rd, Bengaluru, Karnataka 560048</p>
                    <p className="font-medium text-[#001126]">Primary: +91 79888 59067</p>
                  </div>
                  <div className="relative pl-6 border-l-2 border-[#0A58CA]/20 hover:border-[#0A58CA] transition-colors">
                    <p className="text-[#0A58CA] font-heading font-bold text-lg mb-1">Bellandur Branch</p>
                    <p className="mb-2">WM9C5RC, Sarjapur - Marathahalli Rd, Bellandur, Bengaluru, Karnataka 560035</p>
                    <p className="font-medium text-[#001126]">Primary: +91 79888 59067</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-[14px] text-gray-500 font-medium">
                    For enterprise mobility or global relocations, email us at <a href="mailto:info@globerelocation.com" className="text-[#0A58CA] font-bold hover:underline">info@globerelocation.com</a>
                  </p>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } } }} className="rounded-[2rem] border border-gray-100 bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-bold text-[#fca311] text-[12px] uppercase tracking-widest mb-3">FAQs</p>
                <h3 className="font-heading text-2xl font-extrabold text-[#001126] mb-6">Frequently asked questions</h3>
                <div className="space-y-6">
                  {contactFAQs.map((faq) => (
                    <div key={faq.question} className="border-b border-gray-100 pb-6 last:border-none last:pb-0">
                      <p className="font-heading text-[16px] font-bold text-[#001126] leading-snug mb-2">{faq.question}</p>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - FORM */}
            <motion.div {...fadeUp} className="rounded-[2rem] border border-gray-100 bg-white p-8 md:p-12 shadow-xl shadow-[#0A58CA]/5 sticky top-28 order-1 lg:order-2">
              <p className="font-bold text-[#fca311] text-[12px] uppercase tracking-widest mb-3">WhatsApp quote form</p>
              <h2 className="font-heading text-3xl font-extrabold text-[#001126] mb-8 leading-tight">Share your move <br /> in 60 seconds</h2>
              <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-[15px] text-[#001126] placeholder:text-gray-400 focus:border-[#0A58CA] focus:bg-white focus:ring-2 focus:ring-[#0A58CA]/20 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-2" htmlFor="moveDate">
                      Preferred date
                    </label>
                    <input
                      id="moveDate"
                      name="moveDate"
                      type="date"
                      className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-[15px] text-[#001126] focus:border-[#0A58CA] focus:bg-white focus:ring-2 focus:ring-[#0A58CA]/20 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-2" htmlFor="moveFrom">
                      Moving from
                    </label>
                    <input
                      id="moveFrom"
                      name="moveFrom"
                      required
                      placeholder="City / Country"
                      className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-[15px] text-[#001126] placeholder:text-gray-400 focus:border-[#0A58CA] focus:bg-white focus:ring-2 focus:ring-[#0A58CA]/20 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-2" htmlFor="moveTo">
                      Moving to
                    </label>
                    <input
                      id="moveTo"
                      name="moveTo"
                      required
                      placeholder="City / Country"
                      className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-[15px] text-[#001126] placeholder:text-gray-400 focus:border-[#0A58CA] focus:bg-white focus:ring-2 focus:ring-[#0A58CA]/20 transition-all outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide mb-2" htmlFor="details">
                    Additional details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="Inventory highlights, service preferences, access notes..."
                    className="w-full rounded-xl border border-gray-200 bg-[#F8FAFC] px-4 py-3 text-[15px] text-[#001126] placeholder:text-gray-400 focus:border-[#0A58CA] focus:bg-white focus:ring-2 focus:ring-[#0A58CA]/20 transition-all outline-none resize-none"
                  />
                </div>
                <button type="submit" className="w-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-[16px] shadow-lg shadow-[#16a34a]/30 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  Connect on WhatsApp
                </button>
                <p className="text-[13px] text-gray-500 text-center font-medium">
                  We'll redirect you to a secure WhatsApp chat.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="relative w-full h-[400px] md:h-[500px] bg-gray-100 mt-12 md:mt-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.44426514742!2d77.72895695!3d13.01265885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae111c1d91694f%3A0xc3f83d9ab6fb59b6!2sVirgonagar%2C%20Aavalahalli%2C%20Bengaluru%2C%20Karnataka%20560049!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            title="Globe Relocation Bangalore HQ Map"
          ></iframe>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-12 md:py-24 bg-white">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="rounded-[3rem] bg-[#001126] relative overflow-hidden shadow-2xl py-16 px-6 sm:px-12 md:py-20 md:px-20 text-center border border-[#0A58CA]/20">
              <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0A58CA] blur-[120px] opacity-40 rounded-full pointer-events-none"></div>
              </div>

              <div className="relative z-10">
                <motion.div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#58a6ff] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md" {...fadeUp}>
                  Relocate with assurance
                </motion.div>
                <motion.h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight" {...fadeUp} transition={{ delay: 0.15, ease: easeStandard }}>
                  Explore our premium <br className="hidden md:block" /> relocation services
                </motion.h2>
                <motion.p className="mt-6 text-gray-300 text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed" {...fadeUp} transition={{ delay: 0.25, ease: easeStandard }}>
                  Globe Relocation powers moves from Bangalore, Hyderabad, Delhi NCR to global destinations with insured logistics and bonded storage.
                </motion.p>
                <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" {...fadeUp} transition={{ delay: 0.35, ease: easeStandard }}>
                  <Link href="/services" className="w-full sm:w-auto bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] shadow-lg shadow-[#0A58CA]/30 flex items-center justify-center gap-2">
                    Discover our services
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
