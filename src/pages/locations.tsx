import Seo from "@/components/Seo";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";
import { getCitiesGroupedByState, getCityUrl, LOCATIONS } from "@/data/locations.data";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeStandard } },
  viewport: { once: true, amount: 0.1 },
};

const trustBadges = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Since 2018",
    sub: "Trusted Legacy",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "ISO Certified",
    sub: "Licensed & Verified",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "Expert Team",
    sub: "CMD to Branch Staff",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Pan-India",
    sub: "40+ Cities",
  },
];

export default function LocationsPage() {
  const grouped = getCitiesGroupedByState();
  const totalCities = Object.keys(LOCATIONS).length;
  const totalLocalities = Object.values(LOCATIONS).reduce((sum, c) => sum + c.subLocations.length, 0);
  const totalStates = Object.keys(grouped).length;

  // Order states: put states with rich cities first (Karnataka, Telangana, Delhi), then alphabetical
  const priorityStates = ["Karnataka", "Telangana", "Delhi", "Maharashtra", "Tamil Nadu"];
  const stateEntries = Object.entries(grouped).sort(([a], [b]) => {
    const aIdx = priorityStates.indexOf(a);
    const bIdx = priorityStates.indexOf(b);
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return a.localeCompare(b);
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
      <Seo
        title="Our Locations | Globe Relocation Packers and Movers Banglore Banglore - 40+ Cities Across India"
        description="Globe Relocation Packers and Movers Banglore Banglore operates across 40+ major cities in India. Find packers and movers near you in Bangalore, Hyderabad, Delhi NCR, Mumbai, Chennai, and more."
        path="/locations"
      />

      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden min-h-[55vh] flex items-center pt-20 pb-12 md:pt-24 md:pb-16 bg-[#001126]">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#0A58CA] blur-[150px] opacity-20 rounded-full pointer-events-none"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full text-center">
            <motion.div
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fca311] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Our Branches
            </motion.div>
            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeStandard }}
            >
              Our Presence Across <span className="text-[#58a6ff]">India</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: easeStandard }}
            >
              Globe Relocation Packers and Movers Banglore Banglore — delivering trusted relocation services across {totalCities}+ cities and {totalLocalities}+ localities in {totalStates} states.
            </motion.p>

            {/* Breadcrumb */}
            <motion.nav
              className="flex items-center justify-center gap-2 text-[13px] text-gray-400 mt-8 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Our Branches</span>
            </motion.nav>

            {/* Trust Badges */}
            <motion.div
              className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: easeStandard }}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white"
                >
                  <span className="text-[#fca311]">{badge.icon}</span>
                  <div className="text-left">
                    <p className="text-[12px] font-bold leading-tight">{badge.label}</p>
                    <p className="text-[10px] text-gray-400 leading-tight">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="relative z-10 -mt-12 md:-mt-16 px-4 sm:px-6 lg:px-12 mb-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
              }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {[
                { metric: `${totalCities}+`, label: "Cities Covered", detail: "Major metros and tier-2 cities" },
                { metric: `${totalLocalities}+`, label: "Localities Served", detail: "Hyper-local coverage in every city" },
                { metric: `${totalStates}+`, label: "States Reached", detail: "Pan-India relocation network" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } },
                  }}
                  className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_-4px_rgba(0,17,38,0.1)] text-center group hover:-translate-y-2 transition-transform duration-500"
                >
                  <p className="font-bold text-[#fca311] text-[12px] uppercase tracking-widest mb-3">{stat.label}</p>
                  <p className="font-heading text-5xl md:text-6xl font-extrabold text-[#001126] mb-3 group-hover:text-[#0A58CA] transition-colors">
                    <CountUp value={stat.metric} />
                  </p>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{stat.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CITIES BY STATE */}
        <section className="relative py-16 md:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {stateEntries.map(([state, cities]) => (
              <div key={state} className="mb-16 last:mb-0">
                <motion.div className="flex items-center gap-4 mb-8" {...fadeUp}>
                  <div className="h-8 w-8 rounded-lg bg-[#0A58CA]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A58CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#001126]">{state}</h2>
                    <p className="text-[13px] text-gray-500 font-medium">{cities.length} {cities.length === 1 ? "city" : "cities"} covered</p>
                  </div>
                  <div className="flex-1 h-px bg-gray-200 ml-4"></div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
                  }}
                  className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {cities.map((city) => (
                    <motion.div
                      key={city.slug}
                      variants={{
                        hidden: { opacity: 0, y: 16, scale: 0.97 },
                        visible: { opacity: 1, y: 0, scale: 1, transition: { ease: easeStandard, duration: 0.5 } },
                      }}
                    >
                      <Link
                        href={getCityUrl(city.slug)}
                        className="block bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:shadow-[#0A58CA]/8 hover:border-[#0A58CA]/30 hover:-translate-y-1 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="h-2 w-2 rounded-full bg-[#fca311]"></div>
                              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Packers & Movers</p>
                            </div>
                            <h3 className="font-heading text-xl font-extrabold text-[#001126] group-hover:text-[#0A58CA] transition-colors truncate">
                              {city.name}
                            </h3>
                            <p className="text-[13px] text-gray-500 mt-1 font-medium">{city.state}</p>
                            {city.subLocations.length > 0 && (
                              <p className="text-[12px] text-[#0A58CA] font-bold mt-3 flex items-center gap-1">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                                {city.subLocations.length} areas covered
                              </p>
                            )}
                          </div>
                          <div className="h-10 w-10 rounded-xl bg-[#F8FAFC] group-hover:bg-[#0A58CA]/10 flex items-center justify-center flex-shrink-0 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A58CA" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
                              <path d="m9 18 6-6-6-6" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
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
                  Can&apos;t find your city?
                </motion.div>
                <motion.h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight" {...fadeUp} transition={{ delay: 0.15, ease: easeStandard }}>
                  We&apos;re expanding <br className="hidden md:block" /> across India
                </motion.h2>
                <motion.p className="mt-6 text-gray-300 text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed" {...fadeUp} transition={{ delay: 0.25, ease: easeStandard }}>
                  Even if your city isn&apos;t listed, reach out to us. Globe Relocation handles moves across all major and emerging Indian cities with the same premium service.
                </motion.p>
                <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" {...fadeUp} transition={{ delay: 0.35, ease: easeStandard }}>
                  <a
                    href="https://wa.me/917988859067?text=Hello%20Globe%20Relocation%2C%20I%20need%20a%20quote%20for%20shifting.%20My%20city%20is%20not%20listed%20on%20your%20website."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-[15px] shadow-lg shadow-[#16a34a]/30 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    WhatsApp Us
                  </a>
                  <Link href="/contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] flex items-center justify-center">
                    Contact Our Team
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
