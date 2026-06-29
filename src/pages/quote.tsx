import Seo from "@/components/Seo";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const moveTypes = [
  "Premium Household Move",
  "Corporate / Office Move",
  "International Relocation",
  "Fine-Art & Luxury Asset",
  "Storage & Warehousing",
  "Vehicle Transport"
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeStandard } },
  viewport: { once: true, amount: 0.3 }
};

export default function QuotePage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const phone = formData.get("phone")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const moveType = formData.get("moveType")?.toString() ?? "";
    const fromCity = formData.get("fromCity")?.toString() ?? "";
    const toCity = formData.get("toCity")?.toString() ?? "";
    const moveDate = formData.get("moveDate")?.toString() ?? "";
    const bedrooms = formData.get("bedrooms")?.toString() ?? "";
    const notes = formData.get("notes")?.toString() ?? "";

    const url = new URL("https://wa.me/917988859067");
    const lines = [
      "Hello Globe Relocation Packers and Movers, I need a quote for shifting.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : "",
      `Move Type: ${moveType}`,
      `Moving From: ${fromCity}`,
      `Moving To: ${toCity}`,
      moveDate ? `Preferred Date: ${moveDate}` : "",
      bedrooms ? `Bedrooms/Office Size: ${bedrooms}` : "",
      notes ? `Notes: ${notes}` : ""
    ].filter(Boolean);

    url.searchParams.set("text", lines.join("%0a"));
    window.open(url.toString(), "_blank");
  };

  return (
    <div className="page-gradient min-h-screen text-secondary">
      <Seo
        title="Get a Quote | Globe Relocation Packers and Movers | WhatsApp Moving Estimate"
        description="Share your relocation details to receive a WhatsApp quote from Globe Relocation Packers and Movers, premium packers and movers for Bangalore, Hyderabad, Delhi NCR, and global moves."
        path="/quote"
      />

      <Navbar />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255, 255, 255, 0.95)] via-[rgba(255, 255, 255, 0.9)] to-[rgba(255, 255, 255, 0.95)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-16 text-center">
            <motion.p className="badge-outline mx-auto" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              Start with WhatsApp
            </motion.p>
            <motion.h1
              className="mt-6 font-heading text-[2.6rem] leading-tight text-primary md:text-[3.1rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeStandard }}
            >
              Get your Globe Relocation quote
            </motion.h1>
            <motion.p
              className="mt-6 text-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: easeStandard }}
            >
              Provide your relocation details to receive a curated moving roadmap and transparent pricing—perfect for Bangalore, Hyderabad, Delhi NCR,
              and India-to-global journeys. Quotes start at ₹2999 only.
            </motion.p>
          </div>
        </section>

        <section className="relative py-20">
          <div className="absolute inset-0 bg-[rgba(255, 255, 255, 0.82)]" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-[32px] border border-[rgba(0, 0, 0, 0.1)] bg-[rgba(255, 255, 255, 0.85)] p-8 shadow-soft space-y-6"
              {...fadeUp}
            >
              <div>
                <p className="tagline mb-2">WhatsApp quote form</p>
                <h2 className="font-heading text-2xl text-primary">Tell us about your move</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-[0.28em] text-muted mb-2" htmlFor="name">
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.75)] px-4 py-3 text-sm text-primary placeholder:text-[rgba(0, 0, 0, 0.35)] focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.28em] text-muted mb-2" htmlFor="phone">
                    Phone*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.75)] px-4 py-3 text-sm text-primary placeholder:text-[rgba(0, 0, 0, 0.35)] focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.28em] text-muted mb-2" htmlFor="email">
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.75)] px-4 py-3 text-sm text-primary placeholder:text-[rgba(0, 0, 0, 0.35)] focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.28em] text-muted mb-2" htmlFor="moveType">
                    Move type*
                  </label>
                  <select
                    id="moveType"
                    name="moveType"
                    required
                    className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.75)] px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
                  >
                    <option value="">Select move type</option>
                    {moveTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.28em] text-muted mb-2" htmlFor="fromCity">
                    Moving from*
                  </label>
                  <input
                    id="fromCity"
                    name="fromCity"
                    required
                    placeholder="City / Country"
                    className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.75)] px-4 py-3 text-sm text-primary placeholder:text-[rgba(0, 0, 0, 0.35)] focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.28em] text-muted mb-2" htmlFor="toCity">
                    Moving to*
                  </label>
                  <input
                    id="toCity"
                    name="toCity"
                    required
                    placeholder="City / Country"
                    className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.75)] px-4 py-3 text-sm text-primary placeholder:text-[rgba(0, 0, 0, 0.35)] focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.28em] text-muted mb-2" htmlFor="moveDate">
                    Preferred move date
                  </label>
                  <input
                    id="moveDate"
                    name="moveDate"
                    type="date"
                    className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.75)] px-4 py-3 text-sm text-primary focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.28em] text-muted mb-2" htmlFor="bedrooms">
                    Bedrooms / office size
                  </label>
                  <input
                    id="bedrooms"
                    name="bedrooms"
                    placeholder="e.g., 3BHK / 50 seats"
                    className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.75)] px-4 py-3 text-sm text-primary placeholder:text-[rgba(0, 0, 0, 0.35)] focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.28em] text-muted mb-2" htmlFor="notes">
                  Inventory highlights / special requirements
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={5}
                  placeholder="List fragile items, vehicle moves, storage needs, access notes..."
                  className="w-full rounded-xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.75)] px-4 py-3 text-sm text-primary placeholder:text-[rgba(0, 0, 0, 0.35)] focus:border-accent focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send details via WhatsApp
              </button>
              <p className="text-xs text-muted text-center">
                By submitting, you will be redirected to WhatsApp to share your move details with Globe Relocation Packers and Movers.
              </p>
            </motion.form>
          </div>
        </section>

        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255, 255, 255, 0.7)] to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
            <motion.h2 {...fadeUp} className="font-heading text-3xl text-primary md:text-4xl">
              Need a quick callback instead?
            </motion.h2>
            <motion.p {...fadeUp} className="mt-4 text-secondary">
              Call +91 72399 47013 for immediate Bangalore, Hyderabad, and Delhi NCR relocation assistance. Our experts are on standby 24/7.
            </motion.p>
            <motion.div {...fadeUp} className="mt-6">
              <a
                href="tel:+917988859067"
                className="rounded-full border border-[rgba(0, 0, 0, 0.12)] bg-[rgba(255, 255, 255, 0.8)] px-6 py-3 text-sm uppercase tracking-[0.28em] text-secondary hover:text-accent"
              >
                Tap to Call
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
