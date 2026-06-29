import Seo from "@/components/Seo";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const process = [
  {
    phase: "Discover",
    title: "Precision survey & move intelligence",
    description:
      "Virtual or on-site walkthrough across Bangalore, Hyderabad, Delhi NCR, and any Indian city. We map inventory, compliance needs, freight lanes, and insurance coverage for domestic and global moves."
  },
  {
    phase: "Design",
    title: "Blueprint tailored for every kilometer",
    description:
      "Our relocation architects craft multi-route plans, access strategies, and contingency playbooks. Every quote includes transparent pricing starting at ₹2999, marine insurance options, and IoT tracking setups."
  },
  {
    phase: "Deliver",
    title: "Execute with concierge-level support",
    description:
      "Certified crews, bonded storage, and destination teams ensure flawless execution—from Bangalore apartments to Hyderabad data centers and Delhi NCR villas relocating worldwide."
  }
];

const timeline = [
  {
    day: "Day 0",
    headline: "WhatsApp discovery",
    copy: "Share your move details via our WhatsApp concierge. We respond within minutes with checklists, documents needed, and a tailored video consultation schedule."
  },
  {
    day: "Day 1",
    headline: "Virtual/onsite survey",
    copy: "Move strategists survey your space, using AI inventory capture for Bangalore, Hyderabad, Delhi NCR, and pan-India locations."
  },
  {
    day: "Day 2",
    headline: "Plan & pricing",
    copy: "Receive a transparent quote, route optimization, and marine insurance options for domestic and global relocation corridors."
  },
  {
    day: "Day 3-5",
    headline: "Packing & dispatch",
    copy: "White-glove crews deliver reusable crates, dismantle furniture, protect fine art, and load IoT-enabled moving pods."
  },
  {
    day: "Arrival",
    headline: "Destination concierge",
    copy: "Unpacking, reassembly, customs liaison, and settling-in support with local partner teams across 180+ destinations."
  }
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeStandard } },
  viewport: { once: true, amount: 0.3 }
};

export default function HowItWorks() {
  return (
    <div className="page-gradient min-h-screen text-secondary">
      <Seo
        title="How It Works | Globe Relocation Packers and Movers Banglore Banglore | Premium Moving Process"
        description="Discover Globe Relocation Packers and Movers Banglore Banglore' premium moving process for packers and movers in Bangalore, Hyderabad, Delhi NCR, and global relocations."
        path="/how-it-works"
      />

      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/img/process.png" alt="Globe Relocation process" fill className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255, 255, 255, 0.95)] via-[rgba(255, 255, 255, 0.9)] to-[rgba(255, 255, 255, 0.95)]" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-20 text-center">
            <motion.p className="badge-outline mx-auto" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              Seamless move choreography
            </motion.p>
            <motion.h1
              className="mt-6 font-heading text-[2.6rem] leading-tight text-primary md:text-[3.15rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeStandard }}
            >
              How Globe Relocation Packers and Movers Banglore Banglore orchestrates every move
            </motion.h1>
            <motion.p
              className="mt-6 max-w-3xl mx-auto text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: easeStandard }}
            >
              From Bangalore tech hubs to Hyderabad’s financial corridor and Delhi NCR’s global neighborhoods, our relocation architects blend human
              expertise with technology to move you across India and the world—stress-free and insured.
            </motion.p>
          </div>
        </section>

        <section className="relative py-20">
          <div className="absolute inset-0 bg-[rgba(255, 255, 255, 0.82)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div {...fadeUp}>
              <p className="badge-outline">Three-phase methodology</p>
              <h2 className="mt-4 font-heading text-3xl text-primary md:text-4xl">
                From survey to settling in—every kilometer mapped
              </h2>
              <p className="mt-4 text-secondary">
                Globe Relocation Packers and Movers Banglore Banglore compresses decades of moving intelligence into a simple, proven framework. Discover how we turn complex
                relocations into curated experiences you can trust.
              </p>
              <div className="mt-8 grid gap-5">
                {process.map((phase, index) => (
                  <div key={phase.phase} className="card-hover rounded-3xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.78)] p-6">
                    <p className="tagline mb-2">Phase {index + 1}: {phase.phase}</p>
                    <h3 className="font-heading text-lg text-primary">{phase.title}</h3>
                    <p className="mt-3 text-sm text-secondary">{phase.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <div className="relative rounded-[30px] border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.78)] p-8 shadow-soft">
                <Image src="/img/move.jpg" alt="Packing execution" width={720} height={480} className="rounded-[24px] object-cover" />
                <div className="absolute bottom-6 left-6 rounded-2xl bg-[rgba(255, 255, 255, 0.7)] px-5 py-3 text-xs uppercase tracking-[0.24em]">
                  IoT-tracked moving fleets • FIDI-compliant crews • Marine insured cargo
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255, 255, 255, 0.7)] to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <motion.h2 {...fadeUp} className="font-heading text-3xl text-primary md:text-4xl">
              Your move timeline—crafted for India to global journeys
            </motion.h2>
            <p className="mt-4 text-secondary">
              Typical relocations from Bangalore, Hyderabad, and Delhi NCR follow this rapid-response timeline, adapted for domestic, international, and enterprise moves.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {timeline.map((item) => (
                <motion.div key={item.day} {...fadeUp} className="card-hover rounded-3xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.78)] p-6">
                  <p className="badge-outline inline-flex">{item.day}</p>
                  <h3 className="mt-3 font-heading text-lg text-primary">{item.headline}</h3>
                  <p className="mt-3 text-sm text-secondary">{item.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="absolute inset-0 bg-[rgba(255, 255, 255, 0.8)]" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <motion.h2 {...fadeUp} className="font-heading text-3xl text-primary md:text-4xl">
              Your next move starts on WhatsApp
            </motion.h2>
            <motion.p {...fadeUp} className="mt-4 text-secondary">
              Our relocation strategists monitor WhatsApp round the clock to respond with checklists, packing tips, and custom quotes for Bangalore,
              Hyderabad, Delhi NCR, and global relocations.
            </motion.p>
            <motion.div {...fadeUp} className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote" className="btn-primary">
                Start WhatsApp consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore premium services
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
