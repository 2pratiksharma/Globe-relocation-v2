import Link from "next/link";
import { SITE_URL } from "@/components/Seo";

export interface BreadcrumbItem {
    label: string;
    href?: string; // If omitted, renders as plain text (current page)
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    /** Render style: 'hero' for white text on dark, 'light' for dark text on light bg */
    variant?: "hero" | "light";
}

/**
 * Reusable Breadcrumbs component with BreadcrumbList JSON-LD schema.
 * Use `variant="hero"` on dark backgrounds, `variant="light"` on white/light backgrounds.
 */
export default function Breadcrumbs({ items, variant = "hero" }: BreadcrumbsProps) {
    const isHero = variant === "hero";

    // Build JSON-LD BreadcrumbList schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
        })),
    };

    return (
        <>
            {/* JSON-LD Schema — injected inline for SSR */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <nav
                aria-label="Breadcrumb"
                className={`flex items-center justify-center gap-2 text-[13px] font-medium ${
                    isHero ? "text-gray-400" : "text-gray-500"
                }`}
            >
                {items.map((item, index) => (
                    <span key={index} className="flex items-center gap-2">
                        {index > 0 && (
                            <span className={isHero ? "text-gray-500" : "text-gray-400"}>/</span>
                        )}
                        {item.href ? (
                            <Link
                                href={item.href}
                                className={`transition-colors ${
                                    isHero
                                        ? "hover:text-white"
                                        : "hover:text-[#0A58CA]"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span
                                className={`${
                                    isHero ? "text-white" : "text-[#001126]"
                                } truncate max-w-[200px] sm:max-w-none`}
                            >
                                {item.label}
                            </span>
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
}
