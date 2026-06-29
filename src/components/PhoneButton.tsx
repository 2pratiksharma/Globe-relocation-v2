import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

type PhoneButtonProps = {
  number?: string;
  className?: string;
};

export default function PhoneButton({ number = "+917988859067", className = "" }: PhoneButtonProps) {
  const router = useRouter();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleRoute = () => setDismissed(false);
    router.events.on("routeChangeComplete", handleRoute);
    return () => {
      router.events.off("routeChangeComplete", handleRoute);
    };
  }, [router.events]);

  if (dismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
        className={`flex items-center gap-3 ${className}`}
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.open(`tel:${number}`)}
          aria-label="Call Globe Relocation Packers and Movers"
          className="flex items-center gap-3 rounded-3xl bg-gradient-to-r from-[rgba(10, 78, 189, 0.22)] via-[rgba(10, 78, 189, 0.18)] to-[rgba(10, 78, 189, 0.32)] px-5 py-3 text-left border border-[rgba(0, 0, 0, 0.12)] text-primary shadow-[0_28px_65px_-32px_rgba(10, 78, 189, 0.7)] backdrop-blur"
        >
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[rgba(0, 0, 0, 0.12)] text-[rgba(255, 255, 255, 0.9)]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92" />
            </svg>
          </span>
          <div>
            <p className="tagline text-[rgba(255, 255, 255, 0.58)]">Speak to Experts</p>
            <p className="font-heading text-sm text-[rgba(255, 255, 255, 0.9)] uppercase tracking-[0.28em]">Call Now</p>
          </div>
        </motion.button>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Hide call button"
          className="grid h-9 w-9 place-items-center rounded-2xl border border-[rgba(0, 0, 0, 0.12)] bg-[rgba(255, 255, 255, 0.85)] text-secondary hover:text-accent transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
