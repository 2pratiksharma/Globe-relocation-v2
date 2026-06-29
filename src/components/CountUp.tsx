import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  value: string | number;
  duration?: number;
}

export default function CountUp({ value, duration = 1500 }: CountUpProps) {
  const [count, setCount] = useState<string>("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    const valueStr = String(value);
    const cleanValueStr = valueStr.replace(/,/g, '');
    const numericMatch = cleanValueStr.match(/^(\d+(?:\.\d+)?)/);
    if (!numericMatch) {
      setCount(valueStr);
      return;
    }

    const targetNum = parseFloat(numericMatch[1]);
    const suffix = cleanValueStr.slice(numericMatch[0].length);

    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const end = targetNum;
      const isFloat = cleanValueStr.includes(".");
      const startTime = performance.now();

      // Scale default duration for small numbers to feel snappier
      let animDuration = duration;
      if (duration === 1500) {
        if (targetNum < 10) {
          animDuration = 550;
        } else if (targetNum < 50) {
          animDuration = 900;
        }
      }

      const updateNumber = (now: number) => {
        const progress = Math.min((now - startTime) / animDuration, 1);
        // Easing function: easeOutQuad
        const easeProgress = progress * (2 - progress);
        const current = easeProgress * end;

        if (isFloat) {
          setCount(current.toFixed(1) + suffix);
        } else {
          setCount(Math.floor(current).toLocaleString() + suffix);
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      };

      requestAnimationFrame(updateNumber);
    }
  }, [value, duration, isInView]);

  return <span ref={ref}>{count}</span>;
}
