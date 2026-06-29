import Seo from "@/components/Seo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaTruck } from "react-icons/fa";
import CountUp from "@/components/CountUp";
import { servicesData as services } from "@/data/services.data";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const cityFocus = [
  {
    title: "Packers and Movers in Bangalore",
    description:
      "Koramangala HQ with rapid-response teams for Indiranagar, Whitefield, Electronic City, and North Bangalore express moves.",
    link: "/packers-and-movers-bangalore"
  },
  {
    title: "Packers and Movers in Hyderabad",
    description:
      "HiTech City command center orchestrating relocations for Gachibowli, Banjara Hills, and Hyderabad International moves.",
    link: "/packers-and-movers-hyderabad"
  },
  {
    title: "Packers and Movers in Delhi NCR",
    description:
      "Gurugram & Noida relocation studios powering premium household moves, embassy support, and corporate mobility.",
    link: "/packers-and-movers-delhi-ncr"
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeStandard } }
};

export default function Services() {
  return (
    <div className="page-gradient min-h-screen text-secondary">
      <Seo
        title="Services | Globe Relocation Packers and Movers Banglore Banglore | Packers and Movers India to Global"
        description="Discover Globe Relocation Packers and Movers Banglore Banglore' premium packers and movers offerings in Bangalore, Hyderabad, Delhi NCR, and global relocation services."
        path="/services"
      />

      <Navbar />

      <main>
        <section className="relative w-full min-h-[75vh] flex flex-col justify-center pt-24 pb-16 bg-cover bg-center" style={{ backgroundImage: "url('https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2025,%202026,%2011_30_25%20AM.png" }}>
          {/* Overlay matching index.tsx */}
          <div className="absolute inset-0 bg-[#001530]/52 z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full flex-grow flex flex-col justify-center">
            {/* Hero Text */}
            <div className="text-white space-y-4 max-w-3xl mb-8 pt-8">
              <motion.span
                className="inline-block text-[#58a6ff] font-bold text-sm tracking-widest uppercase"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Global relocation suite
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: easeStandard }}
              >
                Tailored moving services for <br className="hidden md:block" /><span className="text-[#58a6ff]">India-wide and global journeys</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mt-4"
                {...fadeUp}
                transition={{ delay: 0.2, duration: 0.65, ease: easeStandard }}
              >
                Globe Relocation Packers and Movers Banglore Banglore delivers specialized moving programs for households, enterprises, and expatriates. From precision packing to bonded storage, every move is engineered to perform flawlessly.
              </motion.p>
            </div>

            {/* CTA Buttons in a Glassmorphism Container to mimic index.tsx form vibe */}
            <motion.div
              className="mt-6 flex flex-col sm:flex-row gap-4 bg-[#001126]/40 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-6 lg:p-8 shadow-2xl w-fit"
              {...fadeUp}
              transition={{ delay: 0.35, ease: easeStandard }}
            >
              <Link href="/quote" className="bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-3.5 px-8 rounded-lg transition-colors duration-300 text-sm md:text-[15px] whitespace-nowrap flex items-center justify-center gap-2 shadow-lg shadow-[#0A58CA]/30">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                WhatsApp instant quote
              </Link>
              <Link href="#household-shifting" className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-lg transition-colors duration-300 text-sm md:text-[15px] flex items-center justify-center text-center">
                Explore service catalogue
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="relative py-24 bg-[#F8FAFC] overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch items-center">
              {/* Left Column */}
              <motion.div {...fadeUp} className="pr-0 lg:pr-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#0A58CA]/10 text-[#0A58CA] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-4 border border-[#0A58CA]/20">
                  City Excellence
                </div>
                <h2 className="font-heading text-3xl md:text-[2.5rem] font-extrabold text-[#001126] leading-[1.2] tracking-tight">
                  India’s most trusted packers and movers network
                </h2>
                <p className="mt-5 text-gray-600 text-[15px] md:text-base leading-relaxed">
                  Strategic command centers in Bangalore, Hyderabad, and Delhi NCR ensure rapid deployments, consistent crew training, and relentless customer updates. Each move is managed by relocation strategists who speak the language of international compliance and local precision.
                </p>

                <div className="mt-10 flex flex-col gap-5">
                  {cityFocus.map((city) => (
                    <Link key={city.title} href={city.link} className="group relative bg-white rounded-2xl p-6 md:p-7 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(10,88,202,0.12)] transition-all duration-300 border border-gray-100 hover:border-[#0A58CA]/30 flex items-start gap-5 overflow-hidden">
                      {/* Hover subtle background slide */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                      <div className="relative w-12 h-12 shrink-0 bg-[#0A58CA]/10 group-hover:bg-[#0A58CA] rounded-xl flex items-center justify-center transition-colors duration-300">
                        <svg className="w-6 h-6 text-[#0A58CA] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>

                      <div className="relative flex-grow">
                        <h3 className="font-heading text-lg font-extrabold text-[#001126] group-hover:text-[#0A58CA] transition-colors">{city.title}</h3>
                        <p className="mt-1.5 text-[14px] text-gray-500 leading-relaxed pr-2">{city.description}</p>
                      </div>

                      <div className="relative shrink-0 self-center hidden sm:flex">
                        <div className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#0A58CA] flex items-center justify-center text-gray-400 group-hover:text-[#0A58CA] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-50">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Image & Floating Card */}
              <motion.div {...fadeUp} className="relative mt-12 lg:mt-0 lg:h-full">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#0A58CA]/10 border border-white aspect-[4/5] lg:aspect-auto lg:h-full min-h-[400px] w-full group bg-gray-100">
                  <Image src="/img/move.jpg" alt="Relocation operations" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />

                  {/* Inner subtle gradient to ensure text readability if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Floating Stats Glassmorphism Card */}
                  <div className="absolute bottom-6 left-6 right-6 md:right-auto md:left-8 bg-white/95 backdrop-blur-xl border border-white/60 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[320px] transform transition-transform group-hover:-translate-y-2 duration-500">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0A58CA]/10 rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-6 h-6 text-[#0A58CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Global Reach</div>
                        <div className="text-[#001126] font-extrabold text-[15px] md:text-base leading-tight"><CountUp value="350+" /> Professionals</div>
                        <div className="text-gray-600 text-[13px] leading-tight mt-1">18 countries monthly</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* OUR SERVICES SECTION */}
        <section className="py-16 relative bg-[#fcfcfc] overflow-hidden">
          {/* Decorative blue blobs in background */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#58a6ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0A58CA] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 translate-x-1/3 translate-y-1/3"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="text-center mx-auto mb-10 flex flex-col items-center">
              <div className="flex items-center gap-4 justify-center w-full mb-1">
                <div className="h-px w-12 bg-blue-200"></div>
                <h2 className="text-[12px] font-extrabold text-[#0A58CA] uppercase tracking-widest">Our Services</h2>
                <div className="h-px w-12 bg-blue-200"></div>
              </div>
              <h3 className="text-3xl md:text-[2.25rem] font-extrabold text-[#001126] mb-4">
                What We Offer
              </h3>
              <div className="flex items-center gap-3 justify-center text-[#0A58CA]">
                <div className="h-px w-16 bg-blue-200"></div>
                <FaTruck size={20} className="text-[#0A58CA]" />
                <div className="h-px w-16 bg-blue-200"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {services.map((service, i) => (
                <div key={i} className="bg-white rounded-[1rem] md:rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                  {/* Image area */}
                  <div className="w-full overflow-hidden">
                    <img src={service.imgUrl} alt={service.title} className="w-full h-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Text content */}
                  <div className="p-4 md:p-6 flex flex-col items-center text-center flex-grow">
                    <h4 className="text-[13px] md:text-[17px] font-extrabold text-gray-900 mb-1 md:mb-2 leading-tight">{service.title}</h4>
                    <p className="text-[10px] md:text-[12px] text-gray-500 leading-relaxed mb-3 md:mb-5 flex-grow hidden md:block">{service.desc}</p>
                    <Link href={`/services/${service.slug}`} className="text-[#0A58CA] font-semibold text-[11px] md:text-[13px] hover:text-[#00458b] transition-colors mt-auto">
                      Read more <span className="hidden md:inline">{service.title.split(' ')[0].toLowerCase()}..</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-24 bg-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <motion.div {...fadeUp}>
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0A58CA] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-4 border border-blue-100">
                  Workflow
                </div>
                <h2 className="font-heading text-3xl md:text-[2.5rem] font-extrabold text-[#001126] leading-[1.2] tracking-tight">
                  How Globe Relocation Packers and Movers Banglore Banglore delivers frictionless moves
                </h2>
                <p className="mt-5 text-gray-600 text-[15px] md:text-base leading-relaxed max-w-xl">
                  Our signature three-phase methodology ensures every relocation—domestic or international—operates on precision timelines while keeping your belongings insured and monitored at all times.
                </p>

                <div className="mt-12 space-y-6">
                  {[
                    {
                      title: "Discover",
                      description: "Virtual or on-site survey, AI-enabled inventory, and customs compliance checks across Bangalore, Hyderabad, and Delhi NCR."
                    },
                    {
                      title: "Design",
                      description: "Move blueprint with route optimization, insurance coverage, and WhatsApp dashboards for stakeholders."
                    },
                    {
                      title: "Deliver",
                      description: "Certified crews, bonded warehouses, and destination settling-in teams execute the relocation flawlessly."
                    }
                  ].map((step, index) => (
                    <div key={step.title} className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(10,88,202,0.12)] transition-all duration-300 border border-gray-100 hover:border-[#0A58CA]/30 flex items-start gap-5 md:gap-6">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-blue-50 text-[#0A58CA] flex items-center justify-center font-extrabold text-lg group-hover:bg-[#0A58CA] group-hover:text-white transition-colors duration-300">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-extrabold text-[#001126] group-hover:text-[#0A58CA] transition-colors">{step.title}</h3>
                        <p className="mt-2 text-[14px] md:text-[15px] text-gray-500 leading-relaxed pr-2">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div {...fadeUp} className="sticky top-32">
                <div className="rounded-[2.5rem] bg-gradient-to-br from-[#001126] to-[#002d5c] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white border border-[#0A58CA]/20">
                  {/* Decorative background blobs for the dark card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A58CA] rounded-full filter blur-[80px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#58a6ff] rounded-full filter blur-[60px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>

                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl md:text-[28px] font-extrabold leading-[1.2]">Technology + Human excellence</h3>
                    <p className="mt-4 text-gray-300 text-[15px] leading-relaxed">
                      Live GPS, AI audits, and relocation strategists ensure you receive real-time support across time zones.
                    </p>
                    <div className="mt-10 space-y-5 text-[14px] md:text-[15px]">
                      <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                        <span className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-[#fca311]/20 text-[#fca311]">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
                        </span>
                        <span className="font-medium text-white/90">IoT-enabled truck fleet nationwide</span>
                      </div>
                      <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                        <span className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-[#fca311]/20 text-[#fca311]">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
                        </span>
                        <span className="font-medium text-white/90">FIDI-certified international partners</span>
                      </div>
                      <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                        <span className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-[#fca311]/20 text-[#fca311]">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
                        </span>
                        <span className="font-medium text-white/90">Dedicated WhatsApp move concierge</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <div className="absolute inset-0 bg-[#F8FAFC]" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="rounded-[3rem] bg-[#001126] relative overflow-hidden shadow-2xl py-16 px-6 sm:px-12 md:py-20 md:px-20 text-center border border-[#0A58CA]/20">
              {/* Background gradient/glow effect */}
              <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0A58CA] blur-[120px] opacity-40 rounded-full pointer-events-none"></div>
              </div>

              <div className="relative z-10">
                <motion.div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#58a6ff] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md" {...fadeUp}>
                  Ready to relocate?
                </motion.div>
                <motion.h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight" {...fadeUp} transition={{ delay: 0.15, ease: easeStandard }}>
                  Speak with Globe Relocation <br className="hidden md:block" /> strategists today
                </motion.h2>
                <motion.p className="mt-6 text-gray-300 text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed" {...fadeUp} transition={{ delay: 0.25, ease: easeStandard }}>
                  Share your India-to-global move or city relocation requirements. Our WhatsApp concierge responds within minutes with a personalized roadmap and transparent pricing that starts at ₹2999 only.
                </motion.p>
                <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" {...fadeUp} transition={{ delay: 0.35, ease: easeStandard }}>
                  <Link href="/quote" className="w-full sm:w-auto bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] shadow-lg shadow-[#0A58CA]/30 flex items-center justify-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Get WhatsApp estimate
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] flex items-center justify-center">
                    Schedule virtual survey
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
