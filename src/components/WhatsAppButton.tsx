import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";

const whatsappNumber = "917988859067";

export default function WhatsAppButton() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 480);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleRoute = () => setIsDismissed(false);
    router.events.on("routeChangeComplete", handleRoute);
    return () => {
      router.events.off("routeChangeComplete", handleRoute);
    };
  }, [router.events]);

  const handleWhatsAppClick = () => {
    const url = new URL(`https://wa.me/${whatsappNumber}`);
    const message = "Hello Globe Relocation Packers and Movers, I need a quote for shifting.";
    url.searchParams.set("text", message);
    window.open(url.toString(), "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:+${whatsappNumber}`);
  };

  if (isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <button
        onClick={() => setIsDismissed(true)}
        className="mb-1 grid h-9 w-9 place-items-center rounded-2xl border border-[rgba(0, 0, 0, 0.12)] bg-[rgba(255, 255, 255, 0.85)] text-secondary hover:text-accent transition-colors"
        aria-label="Hide contact shortcuts"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="scroll-to-top"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-2xl border border-[rgba(0, 0, 0, 0.08)] bg-[rgba(255, 255, 255, 0.85)] px-4 py-3 text-secondary shadow-[0_22px_45px_-28px_rgba(10, 78, 189, 0.5)] backdrop-blur"
            aria-label="Scroll back to top"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-7 w-7 place-items-center rounded-xl bg-[rgba(10, 78, 189, 0.16)] text-accent">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              </span>
              <span className="font-body text-xs tracking-[0.26em] uppercase">Top</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
        className="flex flex-col items-end gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCallClick}
          className="rounded-2xl border border-[rgba(0, 0, 0, 0.1)] bg-[rgba(255, 255, 255, 0.9)] px-5 py-3 text-secondary backdrop-blur shadow-[0_26px_55px_-28px_rgba(10, 78, 189, 0.55)]"
          aria-label="Call Globe Relocation Packers and Movers"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[rgba(0, 0, 0, 0.06)] text-accent">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92" />
              </svg>
            </span>
            <span className="font-body text-xs tracking-[0.32em] uppercase">Call Expert</span>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleWhatsAppClick}
          className="price-pulse rounded-3xl bg-gradient-to-r from-[rgba(10, 78, 189, 0.36)] via-[rgba(10, 78, 189, 0.3)] to-[rgba(10, 78, 189, 0.48)] px-6 py-3.5 text-left text-[rgba(31, 41, 55, 0.96)] shadow-[0_26px_65px_-28px_rgba(10, 78, 189, 0.75)] border border-[rgba(0, 0, 0, 0.14)] backdrop-blur"
          aria-label="Chat on WhatsApp with Globe Relocation Packers and Movers"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[rgba(0, 0, 0, 0.2)] text-[rgba(255, 255, 255, 0.92)]">
              <IoLogoWhatsapp color="#00A300" size={30} />
            </span>
            <div>
              <p className="tagline text-[rgba(31, 41, 55, 0.68)]">Premium moving starts at</p>
              <p className="font-heading text-xl text-[rgba(31, 41, 55, 0.98)]">
                <span className="font-heading text-2xl font-semibold mr-1">₹2999</span>
                only
              </p>
              <p className="font-body text-xs text-[rgba(31, 41, 55, 0.82)]">
                Chat now for Bangalore, Hyderabad, Delhi NCR & global relocations
              </p>
            </div>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}
