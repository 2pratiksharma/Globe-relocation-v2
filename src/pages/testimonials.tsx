import Seo from "@/components/Seo";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CountUp from "@/components/CountUp";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const testimonials = [
  {
    quote:
      "Our Bangalore to Berlin relocation was orchestrated like a symphony—marked inventory, insured cargo, and White-Glove unpacking in Germany. Globe Relocation Packers and Movers redefines moving.",
    name: "Rhea Mukherjee",
    title: "Head of Product, Berlin",
    city: "Bangalore → Berlin",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "We shifted an entire fintech workforce from Hyderabad to Singapore in two phases. Customs, data center assets, and employee settling were seamless thanks to Globe's concierge teams.",
    name: "Arvind Singh",
    title: "CTO, Singapore",
    city: "Hyderabad → Singapore",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Our Delhi NCR penthouse move to Toronto was handled with precision. Antiques, grand piano, and art reached safely with real-time WhatsApp updates and marine insurance handled end-to-end.",
    name: "Meera Kapoor",
    title: "Luxury Homeowner, Toronto",
    city: "Delhi NCR → Toronto",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Globe’s Bangalore logistics lab executed a 72-hour office relocation involving 400+ workstations. Nightly progress videos and zero downtime—true relocation partners.",
    name: "Nikhil Rao",
    title: "COO, Bengaluru",
    city: "Bangalore → Bangalore",
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Our Hyderabad art gallery relied on Globe for fine-art moves across India and Dubai. Climate-controlled storage and curators who understood handling protocols impressed us greatly.",
    name: "Sanya Khurana",
    title: "Curator, Dubai",
    city: "Hyderabad → Dubai",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=240&q=80"
  },
  {
    quote:
      "Moving from Delhi NCR to Melbourne with toddlers and pets felt effortless. Globe Relocation Packers and Movers managed visa schedules, temporary housing, and unpacked before we arrived.",
    name: "Raj & Kavya",
    title: "Family of Four, Melbourne",
    city: "Delhi NCR → Melbourne",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80"
  }
];

const stats = [
  { label: "Client satisfaction", metric: "4.9/5", detail: "Verified reviews across Google, Clutch, and G2" },
  { label: "Repeat customers", metric: "82%", detail: "Families and enterprises who relocate with us again" },
  { label: "Global destinations", metric: "180", detail: "International routes covered every month" }
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeStandard } },
  viewport: { once: true, amount: 0.1 }
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
      <Seo
        title="Testimonials | Globe Relocation Packers and Movers | Premium Packers & Movers Reviews"
        description="Read testimonials from customers who trusted Globe Relocation Packers and Movers for packers and movers in Bangalore, Hyderabad, Delhi NCR, and global relocations."
        path="/testimonials"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "MovingCompany",
          name: "Globe Relocation Packers and Movers",
          description: "Globe Relocation Packers and Movers provides domestic and international packers and movers solutions spanning Bangalore, Hyderabad, Delhi NCR, and pan-India to worldwide destinations.",
          url: "https://globerelo.in",
          logo: "https://globerelo.in/img/logo.jpeg",
          telephone: "+91 79888 59067",
          areaServed: ["Bangalore", "Hyderabad", "Delhi NCR", "Mumbai", "India", "Global"],
        }}
      />

      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden min-h-[65vh] flex items-center pt-20 pb-12 md:pt-24 md:pb-16 bg-[#001126]">
          <div className="absolute inset-0">
            <Image src="https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2025,%202026,%2011_38_59%20AM.png" alt="Client testimonials" fill className="object-cover object-center " priority />
            <div className="absolute inset-0 bg-[#001530]/55 z-0"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full text-center">
            <motion.div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fca311] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
              Voices of trust
            </motion.div>
            <motion.h1
              className="font-heading text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeStandard }}
            >
              Stories from our <span className="text-[#58a6ff]">Global Customers</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: easeStandard }}
            >
              Discover how our premium teams from Bangalore, Hyderabad, and Delhi NCR deliver white-glove experiences for relocations across India and the globe.
            </motion.p>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="relative py-12 md:py-20 bg-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
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
              className="grid gap-8 md:grid-cols-3 -mt-24 relative z-10"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } }
                  }}
                  className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_-4px_rgba(0,17,38,0.1)] text-center group hover:-translate-y-2 transition-transform duration-500"
                >
                  <p className="font-bold text-[#fca311] text-[12px] uppercase tracking-widest mb-4">{stat.label}</p>
                  <p className="font-heading text-5xl md:text-6xl font-extrabold text-[#001126] mb-4 group-hover:text-[#0A58CA] transition-colors">
                    <CountUp value={stat.metric} />
                  </p>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{stat.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS GRID */}
        <section className="relative overflow-hidden py-12 md:py-24 bg-[#F8FAFC]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#58a6ff]/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-16">
              <motion.h2 {...fadeUp} className="font-heading text-3xl md:text-5xl font-extrabold text-[#001126] leading-tight mb-4">
                Relocations that <span className="text-[#0A58CA]">move hearts</span>
              </motion.h2>
              <motion.p {...fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
                Read what our customers have to say about their moving experiences with Globe Relocation Packers and Movers.
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
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {testimonials.map((testimonial) => (
                <motion.article
                  key={testimonial.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } }
                  }}
                  className="bg-white rounded-[2rem] border border-gray-100 p-8 flex flex-col shadow-sm hover:shadow-[0_8px_30px_-4px_rgba(10,88,202,0.1)] transition-all duration-300 relative group"
                >
                  <div className="absolute top-8 right-8 text-[#fca311]/20 group-hover:text-[#fca311]/40 transition-colors">
                    <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>

                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-md">
                      <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-heading font-extrabold text-[#001126] text-lg leading-tight">{testimonial.name}</p>
                      <p className="text-[12px] font-bold uppercase tracking-wider text-[#0A58CA] mt-0.5">{testimonial.city}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4 text-[#fca311]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>

                  <p className="text-[15px] text-gray-600 leading-relaxed font-medium italic flex-grow relative z-10">
                    "{testimonial.quote}"
                  </p>

                  <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[13px] font-bold text-gray-400">{testimonial.title}</span>
                  </div>
                </motion.article>
              ))}
            </motion.div>
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
                  Ready for your move?
                </motion.div>
                <motion.h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight" {...fadeUp} transition={{ delay: 0.15, ease: easeStandard }}>
                  Let us plan a relocation <br className="hidden md:block" /> you'll rave about
                </motion.h2>
                <motion.p className="mt-6 text-gray-300 text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed" {...fadeUp} transition={{ delay: 0.25, ease: easeStandard }}>
                  Connect with us via WhatsApp for instant quotes, or explore services tailored to your needs across India and the globe.
                </motion.p>
                <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" {...fadeUp} transition={{ delay: 0.35, ease: easeStandard }}>
                  <Link href="/quote" className="w-full sm:w-auto bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] shadow-lg shadow-[#0A58CA]/30 flex items-center justify-center gap-2">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Start WhatsApp consultation
                  </Link>
                  <Link href="/services" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] flex items-center justify-center">
                    Explore relocation programs
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

