import { useEffect, useState, RefObject } from "react";

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useScrollAnimation(
    ref: RefObject<HTMLElement>,
    options: UseScrollAnimationOptions = {}
) {
    const { threshold = 0.1, rootMargin = "0px 0px -100px 0px", triggerOnce = true } = options;
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (triggerOnce) {
                            observer.unobserve(element);
                        }
                    } else if (!triggerOnce) {
                        setIsVisible(false);
                    }
                });
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [ref, threshold, rootMargin, triggerOnce]);

    return isVisible;
}
