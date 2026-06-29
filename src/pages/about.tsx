import Seo from "@/components/Seo";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CountUp from "@/components/CountUp";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const values = [
  {
    title: "Precision without compromise",
    description:
      "Every Globe Relocation Packers and Movers Banglore Banglore move blends engineering-grade planning with human empathy—delivering peace of mind for families and enterprises."
  },
  {
    title: "Global compliance & trust",
    description:
      "We align with FIDI, IAM, and ISO standards, partnering with vetted networks to deliver reliable India-to-global relocations."
  },
  {
    title: "Innovation in motion",
    description:
      "AI inventory, WhatsApp dashboards, and smart warehousing keep you informed and empowered at every mile."
  }
];

const stats = [
  { label: "Cities covered", metric: "95+", description: "Across India spanning Bangalore, Hyderabad, Delhi NCR, Mumbai, Chennai, Pune" },
  { label: "Global destinations", metric: "180", description: "Door-to-door relocation reach including USA, UK, UAE, Singapore, Australia" },
  { label: "Customer rating", metric: "4.9/5", description: "Verified reviews across Google, Clutch, and multinational enterprise audits" }
];

const leaders = [
  {
    name: "Amit Shekhawat",
    title: "Founder & Chief Move Architect",
    bio: "Global relocation specialist with 15 years designing cross-border move ecosystems."
  },
  {
    name: "Amara Reddy",
    title: "Director, Operations",
    bio: "Runs relocation command centers in Bangalore and Hyderabad, ensuring 24/7 coordination."
  },
  {
    name: "Akash Gupta",
    title: "Head of Mobility Strategy",
    bio: "Crafts enterprise mobility solutions for Fortune 500 relocations across India and EMEA."
  },
  {
    name: "Priya Sharma",
    title: "Client Success Lead",
    bio: "Coordinates move ambassadors, guaranteeing concierge-level support over WhatsApp."
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeStandard } },
  viewport: { once: true, amount: 0.1 }
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
      <Seo
        title="About | Globe Relocation Packers and Movers Banglore Banglore | Premium Packers & Movers India"
        description="Learn about Globe Relocation Packers and Movers Banglore Banglore, India's premium packers and movers delivering global relocations from Bangalore, Hyderabad, and Delhi NCR."
        path="/about"
      />

      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden min-h-[75vh] flex items-center pt-20 pb-12 md:pt-24 md:pb-16">
          <div className="absolute inset-0">
            {/* Mobile Image */}
            <Image
              src="https://ik.imagekit.io/khibl45oa/about-hero-mobile.png"
              alt="Globe Relocation Packers and Movers Banglore Banglore team"
              fill
              className="object-cover object-center lg:hidden"
              priority
            />

            {/* Desktop Image */}
            <Image
              src="https://ik.imagekit.io/khibl45oa/about-us-hero.png"
              alt="Globe Relocation Packers and Movers Banglore Banglore team"
              fill
              className="hidden object-cover object-center lg:block"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#001126]/95 via-[#001126]/80 to-transparent" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
            <div className="max-w-3xl">
              <motion.div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-[11px] md:text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                Our story
              </motion.div>
              <motion.h1
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: easeStandard }}
              >
                Reimagining relocations across India & the globe.
              </motion.h1>
              <motion.p
                className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.15, ease: easeStandard }}
              >
                We started as a Bangalore-based crew determined to replace chaotic moves with choreographed experiences. Today, we lead premium relocations for India—extending to 180+ global destinations with executive-level planning and human warmth.
              </motion.p>
              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.25, ease: easeStandard }}
              >
                <Link href="/services" className="w-full sm:w-auto bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] shadow-lg shadow-[#0A58CA]/30 flex items-center justify-center">
                  Explore relocation services
                </Link>
                <Link href="/quote" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] flex items-center justify-center">
                  WhatsApp our strategists
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                className="mt-16 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.35, ease: easeStandard }}
              >
                {/* Badge 1 */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-3 pr-6 hover:bg-white/10 transition-colors cursor-default shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#fca311]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-[13px] leading-tight mb-0.5">Since 2018</div>
                    <div className="text-gray-400 text-[11px] font-medium tracking-wide"><CountUp value="7+" /> Years Legacy</div>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-3 pr-6 hover:bg-white/10 transition-colors cursor-default shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#fca311]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-[13px] leading-tight mb-0.5">ISO Certified</div>
                    <div className="text-gray-400 text-[11px] font-medium tracking-wide">Licensed & Verified</div>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-3 pr-6 hover:bg-white/10 transition-colors cursor-default shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#fca311]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-[13px] leading-tight mb-0.5">Expert Team</div>
                    <div className="text-gray-400 text-[11px] font-medium tracking-wide">CMD to Branch Staff</div>
                  </div>
                </div>

                {/* Badge 4 */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-3 pr-6 hover:bg-white/10 transition-colors cursor-default shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#fca311]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-[13px] leading-tight mb-0.5">Pan-India</div>
                    <div className="text-gray-400 text-[11px] font-medium tracking-wide"><CountUp value="100+" /> Branches</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="relative py-12 md:py-24 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#58a6ff]/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div {...fadeUp}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0A58CA] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-4 border border-blue-100">
                From India to the world
              </div>
              <h2 className="font-heading text-3xl md:text-[2.5rem] font-extrabold text-[#001126] leading-[1.2] tracking-tight">
                Built for high-growth families and enterprises
              </h2>
              <div className="mt-6 space-y-5 text-gray-600 text-[15px] md:text-base leading-relaxed">
                <p>
                  Globe Relocation unites relocation architects, freight specialists, and move ambassadors across Bangalore, Hyderabad, and Delhi NCR. Our operations labs blend AI-powered inventory, bonded storage, marine insurance, and WhatsApp concierge support to ensure stress-free moves.
                </p>
                <p>
                  Whether you are shifting from Bangalore to Berlin, Hyderabad to Singapore, Delhi NCR to Toronto, or across Indian metros, we craft bespoke move blueprints that deliver precision, transparency, and peace of mind.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#0A58CA]/10 border border-white aspect-[4/3] group bg-gray-100">
                <Image src="https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2025,%202026,%2011_25_34%20AM.png?q=80&w=1974&auto=format&fit=crop" alt="Operations" fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-white/95 backdrop-blur-xl border border-white/60 p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-[340px] transform transition-transform group-hover:-translate-y-2 duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0A58CA]/10 rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-[#0A58CA]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <div className="text-[#001126] font-extrabold text-[14px] leading-tight">Premium moves curated from</div>
                      <div className="text-gray-500 font-bold text-[12px] mt-1 tracking-wide">BLR • HYD • DEL NCR</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* MISSION AND VISION */}
        <section className="relative py-12 md:py-20 bg-[#F8FAFC]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-4xl font-extrabold text-[#001126] leading-tight mb-12 relative inline-block">
              Our Mission and Vision
              <span className="absolute -bottom-3 left-0 w-16 h-1 bg-[#fca311]"></span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="grid gap-8 md:grid-cols-2"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } }
                }}
                className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 flex items-center gap-3 md:flex-col md:items-start text-[#10b981]">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                  <h3 className="font-heading text-2xl font-extrabold text-[#10b981]">Our<br className="hidden md:block" />Mission</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                  At Globe Relocation Packers and Movers Banglore Banglore, our mission is to provide dependable relocation services that combine professionalism, efficiency, and customer care. We aim to create positive moving experiences through careful planning, quality execution, and responsive support. Our team works with dedication to ensure that every relocation project receives the attention it deserves. We believe that successful relocation is built on communication, trust, and accountability. These principles guide every aspect of our operations.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } }
                }}
                className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 flex items-center gap-3 md:flex-col md:items-start text-[#10b981]">
                  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  <h3 className="font-heading text-2xl font-extrabold text-[#10b981]">Our<br className="hidden md:block" />Vision</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                  Our vision is to become the preferred relocation partner for customers across India and international markets. We continue investing in people, infrastructure, and modern relocation practices to strengthen our service quality and meet the changing expectations of customers. As one of the Best Packers and Movers, we are committed to maintaining high standards while continuously improving the customer experience.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DIFFERENT SECTION */}
        <section className="relative py-12 md:py-20 bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-4xl font-extrabold text-[#001126] leading-tight mb-8 relative inline-block">
                What Makes Globe Relocation Different
                <span className="absolute -bottom-3 left-0 w-16 h-1 bg-[#fca311]"></span>
              </motion.h2>

              <div className="space-y-6 text-[16px] text-gray-600 leading-relaxed font-medium">
                <motion.p {...fadeUp}>
                  Relocation is a service where reliability matters. Over the years, Globe Relocation Packers and Movers Banglore Banglore has built long-term relationships with customers by delivering dependable moving solutions across India.
                </motion.p>
                <motion.p {...fadeUp}>
                  One of the biggest reasons customers choose us is our experience. Having served the industry since 2018, we understand the importance of planning, coordination, and attention to detail. This knowledge allows us to manage relocations with confidence and professionalism.
                </motion.p>
                <motion.p {...fadeUp}>
                  Another factor that sets us apart is our customer-centric approach. We do not view relocation as simply transporting belongings. We view it as helping people begin a new chapter in their lives. This perspective influences the way we communicate, plan, and execute every move.
                </motion.p>
                <motion.p {...fadeUp}>
                  What truly distinguishes Globe Relocation Packers and Movers Banglore Banglore is the people behind the company. Our team members genuinely care about customer satisfaction and consistently work to deliver a positive experience.
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeStandard } }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop" alt="Moving truck and boxes" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="relative py-12 md:py-20 bg-[#F8FAFC]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-4xl font-extrabold text-[#001126] leading-tight mb-12 relative inline-block">
              Why Customers Choose Us
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#fca311]"></span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto text-left"
            >
              {[
                "Years of relocation experience",
                "Nationwide service coverage",
                "ISO Certified & IBA Approved operations",
                "Dedicated household & corporate relocation",
                "Professional vehicle transportation",
                "Experienced & trained relocation staff",
                "Transparent communication & support"
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { ease: easeStandard, duration: 0.5 } }
                  }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#10b981]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#10b981] group-hover:text-white transition-colors text-[#10b981]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="text-[15px] text-[#001126] font-bold leading-tight pt-2">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="relative py-12 md:py-20 bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: easeStandard } }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop" alt="Our Team" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>

            <div className="order-1 lg:order-2">
              <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-4xl font-extrabold text-[#001126] leading-tight mb-8 relative inline-block">
                Our Team - The Strength Behind Every Successful Move
                <span className="absolute -bottom-3 left-0 w-16 h-1 bg-[#fca311]"></span>
              </motion.h2>

              <div className="space-y-6 text-[16px] text-gray-600 leading-relaxed font-medium">
                <motion.p {...fadeUp}>
                  The success of Globe Relocation Packers and Movers Banglore Banglore is driven by a team of dedicated professionals who bring experience, skill, and enthusiasm to their work every day.
                </motion.p>
                <motion.p {...fadeUp}>
                  Our staff members are known for being helpful, approachable, and committed to customer satisfaction. From the first inquiry to the completion of a move, customers receive guidance and support from professionals who understand the importance of a well-managed relocation.
                </motion.p>
                <motion.p {...fadeUp}>
                  One of the qualities that customers appreciate most about our team is their willingness to help. They take the time to understand customer requirements, answer questions clearly, provide updates, and offer practical assistance throughout the relocation process.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* COMMITMENT SECTION */}
        <section className="relative py-12 md:py-20 bg-[#F8FAFC]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
            <div>
              <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-4xl font-extrabold text-[#001126] leading-tight mb-8 relative inline-block">
                Our Commitment to Every Customer
                <span className="absolute -bottom-3 left-0 w-16 h-1 bg-[#fca311]"></span>
              </motion.h2>

              <div className="space-y-6 text-[16px] text-gray-600 leading-relaxed font-medium mb-12">
                <motion.p {...fadeUp}>
                  At Globe Relocation Packers and Movers Banglore Banglore, every customer is important. We understand that relocation involves valuable belongings, important schedules, and personal expectations. That is why we approach every project with care, professionalism, and responsibility.
                </motion.p>
                <motion.p {...fadeUp}>
                  Our commitment extends beyond transportation. We focus on creating a positive customer experience through clear communication, reliable support, and dedicated service. Our team works diligently to maintain the standards that customers expect from one of the Best Packers and Movers in India.
                </motion.p>
                <motion.p {...fadeUp}>
                  As we continue to grow, our core values remain unchanged. We believe in honesty, quality service, and building long-term relationships with customers.
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: easeStandard } }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
            >
              <Image src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1373&auto=format&fit=crop" alt="Customer Commitment" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 mt-16 md:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: easeStandard } }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_-4px_rgba(22,101,52,0.15)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#166534]/5 rounded-full filter blur-[40px] group-hover:scale-110 transition-transform duration-700"></div>
              <div className="relative z-10">
                <h3 className="font-heading text-2xl md:text-[2rem] font-extrabold text-[#166534] mb-5 leading-tight">Ready to Move With Confidence?</h3>
                <p className="text-[16px] text-[#166534] leading-relaxed mb-6 font-medium">
                  If you are searching for trusted Packers and Movers Near Me, experienced relocation specialists, or a reliable moving company for your next move, Globe Relocation Packers and Movers Banglore Banglore is here to help. With years of experience, helpful staff, nationwide coverage, and a strong commitment to customer satisfaction, we continue to provide relocation solutions that customers can trust.
                </p>
                <p className="text-[17px] font-bold text-[#166534] leading-relaxed">
                  Contact Globe Relocation Packers and Movers Banglore Banglore today and discover why thousands of customers choose us as their preferred relocation partner across India.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="relative py-12 md:py-24 bg-[#F8FAFC]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-4xl font-extrabold text-[#001126] leading-tight">
                What drives Globe Relocation
              </motion.h2>
            </div>

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
              className="grid gap-8 md:grid-cols-3"
            >
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } }
                  }}
                  className="group relative bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(10,88,202,0.12)] transition-all duration-300 border border-gray-100 hover:border-[#0A58CA]/30"
                >
                  <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-colors duration-300 ${value.title.includes('trust') ? 'bg-[#16a34a]/10 text-[#16a34a] group-hover:bg-[#16a34a] group-hover:text-white' : 'bg-[#0A58CA]/10 text-[#0A58CA] group-hover:bg-[#0A58CA] group-hover:text-white'}`}>
                    {value.title.includes('Precision') && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    {value.title.includes('trust') && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                    {value.title.includes('Innovation') && <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                  </div>
                  <h3 className="font-heading text-xl font-extrabold text-[#001126] mb-3">{value.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section className="relative py-12 md:py-24 bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid gap-12 lg:gap-16 lg:grid-cols-[0.8fr_1.2fr] items-start">
            <motion.div {...fadeUp} className="relative lg:sticky lg:top-32">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0A58CA] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-4 border border-blue-100">
                Leadership
              </div>
              <h2 className="font-heading text-3xl md:text-[2.5rem] font-extrabold text-[#001126] leading-[1.2] tracking-tight">
                Led by relocation architects
              </h2>
              <p className="mt-6 text-gray-600 text-[15px] md:text-base leading-relaxed">
                Our cross-functional leadership includes ex-logistics commanders, hospitality experts, and technology innovators who have spearheaded 15,000+ India-to-global moves. Every relocation is powered by dedicated move ambassadors stationed across Bangalore, Hyderabad, Delhi NCR, and international partner hubs.
              </p>
            </motion.div>

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
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {leaders.map((leader, index) => (
                  <motion.div
                    key={leader.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } }
                    }}
                    className="group relative rounded-3xl bg-[#F8FAFC] border border-gray-100 p-8 hover:bg-white hover:shadow-[0_8px_30px_-4px_rgba(10,88,202,0.12)] hover:border-[#0A58CA]/30 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A58CA] to-[#58a6ff] mb-6 flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg">
                      {leader.name.charAt(0)}
                    </div>
                    <h3 className="font-heading text-xl font-extrabold text-[#001126] group-hover:text-[#0A58CA] transition-colors">{leader.name}</h3>
                    <p className="font-bold text-[#fca311] text-[13px] uppercase tracking-wide mt-1 mb-4">{leader.title}</p>
                    <p className="text-[14px] text-gray-500 leading-relaxed">{leader.bio}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="relative py-12 md:py-24 bg-[#001126] text-white overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-4xl font-extrabold leading-tight">
                Impact that scales with every relocation
              </motion.h2>
              <motion.p {...fadeUp} className="mt-4 text-gray-400 text-lg">
                From premium household moves to enterprise transformations, we keep your relocation data-driven, insured, and human.
              </motion.p>
            </div>

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
              className="grid gap-8 md:grid-cols-3"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } }
                  }}
                  className="relative bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm text-center hover:bg-white/10 transition-colors duration-300"
                >
                  <p className="font-bold text-[#58a6ff] text-[12px] uppercase tracking-widest mb-4">{stat.label}</p>
                  <p className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
                    <CountUp value={stat.metric} />
                  </p>
                  <p className="text-[14px] text-gray-400 leading-relaxed max-w-xs mx-auto">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-12 md:py-24 bg-[#F8FAFC]">
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="rounded-[3rem] bg-[#001126] relative overflow-hidden shadow-2xl py-16 px-6 sm:px-12 md:py-20 md:px-20 text-center border border-[#0A58CA]/20">
              <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0A58CA] blur-[120px] opacity-40 rounded-full pointer-events-none"></div>
              </div>

              <div className="relative z-10">
                <motion.div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#58a6ff] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md" {...fadeUp}>
                  We are ready for your next chapter
                </motion.div>
                <motion.h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight" {...fadeUp} transition={{ delay: 0.15, ease: easeStandard }}>
                  Speak with Globe Relocation <br className="hidden md:block" /> strategists today
                </motion.h2>
                <motion.p className="mt-6 text-gray-300 text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed" {...fadeUp} transition={{ delay: 0.25, ease: easeStandard }}>
                  Whether you are relocating within Bangalore, shifting your Hyderabad headquarters, or moving from Delhi NCR to New York, we are your trusted relocation partner.
                </motion.p>
                <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" {...fadeUp} transition={{ delay: 0.35, ease: easeStandard }}>
                  <Link href="/quote" className="w-full sm:w-auto bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] shadow-lg shadow-[#0A58CA]/30 flex items-center justify-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Plan move on WhatsApp
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] flex items-center justify-center">
                    Talk to relocation experts
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
