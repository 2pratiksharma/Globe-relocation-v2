import Seo from "@/components/Seo";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs, { BreadcrumbItem } from "@/components/Breadcrumbs";
import {
    CityLocation,
    SubLocation,
    getAllCityPaths,
    getAllLocalitySEOPaths,
    getCityBySlug,
    getLocalityBySlug,
    parseCityFromUrl,
    parseLocalityFromUrl,
    getCityUrl,
    getLocalityUrl,
} from "@/data/locations.data";
import {
    generateLocalityContent,
    generateLocalityMetadata,
    LocalityContent,
} from "@/utils/locality-content.helper";
import {
    LOCAL_PRICING,
    INTERSTATE_PRICING,
    MOVING_TIP,
    getCityIntro,
    getCityReviews,
    getCityFaqs,
    getCityServiceCards,
    getCityLandmarks,
    getCityPhotos,
} from "@/utils/city-content.helper";

interface CityPageProps {
    type: "city";
    city: CityLocation;
}

interface LocalityPageProps {
    type: "locality";
    city: CityLocation;
    locality: SubLocation;
    content: LocalityContent;
    urlSlug: string;
}

type PageProps = CityPageProps | LocalityPageProps;

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.65, ease: easeStandard } },
    viewport: { once: true, amount: 0.25 },
};

function SectionBadge({ text }: { text: string }) {
    return (
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#0A58CA] font-bold text-[11px] uppercase tracking-widest border border-blue-100">
            {text}
        </span>
    );
}

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((n) => (
                <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill={n <= Math.round(rating) ? "#fca311" : "#e5e7eb"} stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    );
}

const WA_SVG = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
);

function waUrl(message: string) {
    const u = new URL("https://wa.me/917988859067");
    u.searchParams.set("text", message);
    return u.toString();
}

function HeroSection({ badge, h1, description, priceStarting, waMessage, defaultFromCity, breadcrumbItems }: {
    badge: string; h1: string; description: string; priceStarting: string; waMessage: string; defaultFromCity: string; breadcrumbItems: BreadcrumbItem[];
}) {
    return (
        <section className="bg-gradient-to-br from-[#001126] to-[#0a4ebd] py-14 md:py-20 relative overflow-hidden">
            {/* Background design elements */}
            <div className="absolute inset-0 bg-[#001530]/20 z-0"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full flex flex-col justify-between">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: easeStandard }}
                    className="max-w-3xl mb-10"
                >
                    <div className="mb-5">
                        <Breadcrumbs items={breadcrumbItems} variant="hero" />
                    </div>
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-blue-200 font-bold text-xs uppercase tracking-widest mb-5 border border-white/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#fca311]" />
                        {badge}
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white leading-tight">{h1}</h1>
                    <p className="mt-4 text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl">{description}</p>
                </motion.div>

                {/* Horizontal Form with Glassmorphism */}
                <motion.div
                    className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 lg:p-8 shadow-2xl"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: easeStandard }}
                >
                    <div className="mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-white">Get Your Best Moving Quote</h2>
                        <p className="text-xs md:text-sm text-gray-300 mt-1">Quick, Fast & Free Estimates in {defaultFromCity}</p>
                    </div>

                    <form className="flex flex-col lg:flex-row gap-3 md:gap-4 mb-6" onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const name = formData.get("name")?.toString() ?? "";
                        const phone = formData.get("phone")?.toString() ?? "";
                        const email = formData.get("email")?.toString() ?? "";
                        const service = formData.get("service")?.toString() ?? "";
                        const fromCity = formData.get("fromCity")?.toString() ?? "";
                        const toCity = formData.get("toCity")?.toString() ?? "";

                        const base = new URL("https://wa.me/917988859067");
                        const message = `Hello Globe Relocation Packers and Movers Banglore Banglore, I need a quote for shifting.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n✉️ Email: ${email}\n📍 From: ${fromCity}\n📍 To: ${toCity}\n📦 Type: ${service}\n\nPlease help me plan my move.`;
                        base.searchParams.set("text", message);
                        window.open(base.toString(), "_blank");
                    }}>
                        <div className="flex-1 min-w-[140px] relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            </div>
                            <input name="name" type="text" placeholder="Your Name" className="w-full pl-10 pr-4 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-800" required />
                        </div>
                        <div className="flex-1 min-w-[140px] relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <input name="phone" type="tel" placeholder="Phone Number" className="w-full pl-10 pr-4 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-800" required />
                        </div>
                        <div className="flex-1 min-w-[140px] relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <input name="email" type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-800" />
                        </div>
                        <div className="flex-1 min-w-[140px]">
                            <select name="service" className="w-full px-4 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-800 appearance-none" required>
                                <option value="">Select Service</option>
                                <option value="Home Shifting">Home Shifting</option>
                                <option value="Local Shifting">Local Shifting</option>
                                <option value="Office Relocation">Office Relocation</option>
                                <option value="Vehicle Transport">Vehicle Transport</option>
                                <option value="International">International</option>
                            </select>
                        </div>
                        <div className="flex gap-3 lg:flex-row w-full lg:w-auto">
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <input name="fromCity" type="text" defaultValue={defaultFromCity} placeholder="Moving From" className="w-full pl-9 pr-2 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-[12px] md:text-sm text-gray-800" required />
                            </div>
                            <div className="flex-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <input name="toCity" type="text" placeholder="Moving To" className="w-full pl-9 pr-2 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-[12px] md:text-sm text-gray-800" required />
                            </div>
                        </div>
                        <div className="w-full lg:w-auto">
                            <button type="submit" className="w-full lg:w-auto bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-3 md:py-3.5 px-6 rounded-lg transition-colors duration-300 text-sm whitespace-nowrap flex items-center justify-center gap-2 shadow-lg shadow-[#0A58CA]/30">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                Get Quote
                            </button>
                        </div>
                    </form>

                    {/* Features row inside the form container (Desktop) */}
                    <div className="hidden md:grid bg-white rounded-xl py-6 px-4 grid-cols-4 gap-4 divide-x divide-gray-100">
                        <div className="flex flex-col items-center text-center gap-2 px-4">
                            <div className="text-[#0A58CA] shrink-0 mb-2">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                            </div>
                            <div>
                                <p className="text-[15px] font-extrabold text-[#001126] mb-1">100% Secure</p>
                                <p className="text-[12px] text-gray-500 font-medium">Your data is safe with us</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 px-4">
                            <div className="text-[#0A58CA] shrink-0 mb-2">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <div>
                                <p className="text-[15px] font-extrabold text-[#001126] mb-1">IBA Approved</p>
                                <p className="text-[12px] text-gray-500 font-medium">Licensed & Certified Movers</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 px-4">
                            <div className="text-[#0A58CA] shrink-0 mb-2">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                            <div>
                                <p className="text-[15px] font-extrabold text-[#001126] mb-1">Transit Insurance</p>
                                <p className="text-[12px] text-gray-500 font-medium">Full protection for goods</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 px-4">
                            <div className="text-[#0A58CA] shrink-0 mb-2">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[15px] font-extrabold text-[#001126] mb-1">24×7 Support</p>
                                <p className="text-[12px] text-gray-500 font-medium">Dedicated move coordinator</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CTABanner({ title, subtitle, waMessage }: { title: string; subtitle: string; waMessage: string }) {
    return (
        <section className="py-16 bg-[#001126]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
                <motion.div {...fadeUp}>
                    <SectionBadge text="Ready to Move?" />
                    <h2 className="mt-5 font-heading text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
                    <p className="mt-4 text-blue-200 max-w-2xl mx-auto text-[15px]">{subtitle}</p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={waUrl(waMessage)}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da855] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg"
                        >
                            {WA_SVG}
                            Chat on WhatsApp
                        </a>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white hover:border-white font-bold py-4 px-8 rounded-xl transition-all">
                            Call Our Experts
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function FaqAccordion({ faqs }: { faqs: { question: string; answer: string }[] }) {
    const [expanded, setExpanded] = useState<number | null>(null);
    return (
        <div className="space-y-3">
            {faqs.map((faq, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.04, ease: easeStandard } }}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-gray-200 overflow-hidden bg-white"
                >
                    <button
                        onClick={() => setExpanded(expanded === idx ? null : idx)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-blue-50 transition-colors"
                    >
                        <span className="font-heading font-bold text-[#001126] text-[15px] leading-snug">{faq.question}</span>
                        <svg
                            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A58CA" strokeWidth="2.2"
                            className={`flex-shrink-0 transition-transform duration-300 ${expanded === idx ? "rotate-180" : ""}`}
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </button>
                    <motion.div
                        initial={false}
                        animate={{ height: expanded === idx ? "auto" : 0, opacity: expanded === idx ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: easeStandard }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 border-t border-gray-100">
                            <p className="pt-4 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}

// ─── City Page ────────────────────────────────────────────────────────────────

function CityPage({ city }: { city: CityLocation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [showAllAreas, setShowAllAreas] = useState(false);

    const filteredLocations = city.subLocations.filter((loc) =>
        loc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const showMoreActive = filteredLocations.length > 10 && !showAllAreas && searchQuery === "";
    const displayedLocations = showMoreActive ? filteredLocations.slice(0, 10) : filteredLocations;
    const remainingCount = filteredLocations.length - 10;

    const cityUrl = getCityUrl(city.slug);
    const canonicalUrl = `https://globerelo.in${cityUrl}`;
    const waMessage = `Hello Globe Relocation Packers and Movers Banglore Banglore, I need a quote for shifting in ${city.name}, ${city.state}. Please help me plan my move.`;

    const intro = getCityIntro(city.name);
    const reviews = getCityReviews(city.name);
    const faqs = getCityFaqs(city.name);
    const serviceCards = getCityServiceCards(city.name);
    const landmarks = getCityLandmarks(city.name);
    const photos = getCityPhotos(city.name, city.slug);

    const keywordsList = [
        `Packers and Movers in ${city.name}`,
        `Packers and Movers ${city.name}`,
        `Packers And Movers Near Me`,
        `${city.name} Packers and Movers`,
        `Local Packers and Movers in ${city.name}`,
        `Local Packers and Movers ${city.name}`,
        `City Packers and Movers in ${city.name}`,
        `City Packers and Movers ${city.name}`,
        `Home Packers and Movers in ${city.name}`,
        `Home Packers and Movers ${city.name}`,
        `Car Transport in ${city.name}`,
        `Car Transport ${city.name}`,
        `Tempo Packers and Movers in ${city.name}`,
        `Tempo Packers and Movers ${city.name}`,
        `Bike Transport in ${city.name}`,
        `Bike Transport ${city.name}`,
        `Office Packers and Movers in ${city.name}`,
        `Office Packers and Movers ${city.name}`,
        `corporate Packers and Movers in ${city.name}`,
        `corporate Packers and Movers ${city.name}`,
        `Apartment Packers and Movers in ${city.name}`,
        `Apartment Packers and Movers ${city.name}`,
        `City to City Packers and Movers in ${city.name}`,
        `City to City Packers and Movers ${city.name}`,
        `Door to Door Packers and Movers in ${city.name}`,
        `Door to Door Packers and Movers ${city.name}`,
        `Tata Ace Packers and Movers in ${city.name}`,
        `Tata Ace Packers and Movers ${city.name}`,
        `Wooden crate Packing Services ${city.name}`,
        `Globe Relocation and Logistics in ${city.name}`,
        `Globe Relocation and Logistics ${city.name}`,
        `Professional Packers and Movers in ${city.name}`,
        `Professional Packers and Movers ${city.name}`,
        `Globe Relocation and Logistics Best Packers and Movers in ${city.name}`,
        `Globe Relocation and Logistics Best Packers and Movers ${city.name}`
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
            <Seo
                title={city.metaTitle}
                description={city.metaDescription}
                path={canonicalUrl.replace("https://globerelo.in", "")}
                keywords={keywordsList.join(", ")}
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": canonicalUrl,
                        name: `Globe Relocation Packers and Movers Banglore Banglore - ${city.name}`,
                        description: city.metaDescription,
                        url: canonicalUrl,
                        telephone: city.phoneNumber,
                        priceRange: "₹₹",
                        areaServed: { "@type": "City", name: city.name },
                        geo: { "@type": "GeoCoordinates", latitude: city.coordinates.lat, longitude: city.coordinates.lng },
                        openingHours: "Mo-Fr 08:00-18:00",
                        sameAs: [
                            "https://www.facebook.com/globerelocation",
                            "https://www.instagram.com/globerelocation",
                            "https://www.linkedin.com/company/globerelocation",
                        ],
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://globerelo.in/" },
                            { "@type": "ListItem", position: 2, name: "Locations", item: "https://globerelo.in/#locations" },
                            { "@type": "ListItem", position: 3, name: `Packers & Movers ${city.name}`, item: canonicalUrl },
                        ],
                    },
                ]}
            />

            <Navbar />

            <main className="flex-1">
                {/* Breadcrumb */}
                <div className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="hover:text-[#0A58CA] transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-[#001126] font-medium">Packers & Movers {city.name}</span>
                        </nav>
                    </div>
                </div>

                <HeroSection
                    badge={`Trusted Relocation Services in ${city.state}`}
                    h1={city.heroTitle}
                    description={city.heroDescription}
                    priceStarting={city.priceStarting}
                    waMessage={waMessage}
                    defaultFromCity={city.name}
                    breadcrumbItems={[
                        { label: "Home", href: "/" },
                        { label: "Locations", href: "/locations" },
                        { label: `Packers and Movers in ${city.name}` },
                    ]}
                />

                {/* Intro Text + Contact Sidebar */}
                <section className="py-14 md:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
                            <motion.div {...fadeUp}>
                                <SectionBadge text="About Our Services" />
                                <h2 className="mt-4 font-heading text-2xl md:text-3xl font-extrabold text-[#001126] leading-tight">
                                    {intro.title1}
                                </h2>
                                <div className="mt-6 space-y-4 text-gray-700 leading-relaxed text-[15px]">
                                    {intro.paras1.map((p, i) => <p key={i}>{p}</p>)}
                                </div>
                                <h3 className="mt-10 font-heading text-xl md:text-2xl font-extrabold text-[#001126]">
                                    {intro.title2}
                                </h3>
                                <div className="mt-4 space-y-4 text-gray-700 leading-relaxed text-[15px]">
                                    {intro.paras2.map((p, i) => <p key={i}>{p}</p>)}
                                </div>
                            </motion.div>

                            {/* Sticky sidebar */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.65, ease: easeStandard } }}
                                viewport={{ once: true }}
                                className="lg:sticky lg:top-24 h-fit"
                            >
                                <div className="bg-[#001126] rounded-2xl p-7 text-white shadow-xl">
                                    <h3 className="font-heading text-lg font-extrabold mb-1">Get Free Quote</h3>
                                    <p className="text-blue-200 text-sm mb-6">Instant response via WhatsApp</p>
                                    <a
                                        href={waUrl(waMessage)}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da855] text-white font-bold py-3.5 rounded-xl transition-all text-sm mb-3 shadow-lg"
                                    >
                                        {WA_SVG}
                                        Chat on WhatsApp
                                    </a>
                                    <a
                                        href="tel:+917988859067"
                                        className="flex items-center justify-center gap-2 w-full border-2 border-white/30 hover:border-white text-white font-bold py-3.5 rounded-xl transition-all text-sm"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                        </svg>
                                        +91 79888 59067
                                    </a>
                                    <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                                        {["IBA Approved", "Transit Insurance", "24×7 Support", "Pan India Coverage"].map((badge) => (
                                            <div key={badge} className="flex items-center gap-2 text-blue-100 text-sm">
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="2.5">
                                                    <path d="m5 12 5 5L20 7" />
                                                </svg>
                                                {badge}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-5 pt-5 border-t border-white/10 text-center">
                                        <p className="text-blue-300 text-xs">Starting at</p>
                                        <p className="text-[#fca311] font-extrabold text-2xl mt-1">{city.priceStarting}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Service Area Map & Landmarks Section */}
                <section className="py-14 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Service Area & Landmarks" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                Serving {city.name}, {city.state}
                            </h2>
                        </motion.div>
                        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                            <motion.div {...fadeUp} className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col h-full">
                                <div className="flex-1 space-y-4">
                                    <h3 className="font-heading text-2xl font-bold text-[#0A58CA]">
                                        Globe Relocation in {city.name}
                                    </h3>
                                    <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                                        Globe Relocation provides premium packing, moving, and transportation services directly to your doorstep in {city.name}. Our professional moving teams operate across all major sectors and neighborhoods in {city.name} to ensure a seamless relocation experience.
                                    </p>

                                    <h4 className="font-bold text-[#001126] mb-3 text-[15px]">Major Areas Covered in {city.name}:</h4>
                                    <ul className="space-y-3 mb-6">
                                        {landmarks.map((landmark, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-700 text-[15px]">
                                                <svg className="flex-shrink-0 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A58CA" strokeWidth="2">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                                <span>{landmark}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pt-6 border-t border-gray-200 mt-auto">
                                    <p className="font-bold text-[#001126]">Primary Contact: <a href="tel:+917988859067" className="text-[#0A58CA] hover:underline">+91 79888 59067</a></p>
                                </div>
                            </motion.div>

                            <motion.div {...fadeUp} className="h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden bg-gray-200 shadow-inner w-full">
                                <iframe
                                    src={`https://www.google.com/maps?q=${encodeURIComponent(`${city.name}, ${city.state}`)}&output=embed`}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`${city.name} Map`}
                                    className="w-full h-full object-cover"
                                ></iframe>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Pricing Tables */}
                <section className="py-14 bg-[#F8FAFC]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Pricing" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                Estimated Shifting Charges in {city.name}
                            </h2>
                            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-[15px]">
                                Transparent pricing to help you plan your move in {city.name}. Actual costs depend on distance, volume, and services selected.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.65, ease: easeStandard } }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                            >
                                <div className="bg-[#0A58CA] px-6 py-4">
                                    <h3 className="font-heading text-base font-extrabold text-white">Local Shifting Charges</h3>
                                    <p className="text-blue-100 text-xs mt-0.5">Within {city.name} city limits</p>
                                </div>
                                <table className="w-full bg-white">
                                    <thead>
                                        <tr className="bg-blue-50 border-b border-blue-100">
                                            <th className="text-left px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Service Type</th>
                                            <th className="text-right px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Estimated Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {LOCAL_PRICING.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 text-[#1f2937] text-sm font-medium">{row.type}</td>
                                                <td className="px-6 py-4 text-right text-[#0A58CA] font-bold text-sm">{row.cost}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.65, ease: easeStandard } }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                            >
                                <div className="bg-[#001126] px-6 py-4">
                                    <h3 className="font-heading text-base font-extrabold text-white">Interstate Shifting Rates</h3>
                                    <p className="text-blue-200 text-xs mt-0.5">From {city.name} to other cities</p>
                                </div>
                                <table className="w-full bg-white">
                                    <thead>
                                        <tr className="bg-blue-50 border-b border-blue-100">
                                            <th className="text-left px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Distance</th>
                                            <th className="text-right px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {INTERSTATE_PRICING.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 text-[#1f2937] text-sm font-medium">{row.distance}</td>
                                                <td className="px-6 py-4 text-right text-[#0A58CA] font-bold text-sm">{row.rate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="bg-amber-50 border-t border-amber-100 px-6 py-4 flex items-start gap-3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
                                        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                                    </svg>
                                    <p className="text-amber-800 text-xs leading-relaxed">{MOVING_TIP}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Sub-localities */}
                {city.subLocations.length > 0 && (
                    <section className="py-14 bg-white border-t border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                            <motion.div className="text-center mb-10" {...fadeUp}>
                                <SectionBadge text="Service Areas" />
                                <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                    We Serve All Areas in {city.name}
                                </h2>
                                <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-[15px]">
                                    Professional packers and movers available across {city.subLocations.length}+ locations in {city.name}
                                </p>
                            </motion.div>

                            <div className="max-w-xl mx-auto mb-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder={`Search areas in ${city.name}...`}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full rounded-xl border border-gray-200 bg-white px-6 py-4 pl-12 text-[#001126] placeholder:text-gray-400 focus:border-[#0A58CA] focus:outline-none focus:ring-2 focus:ring-[#0A58CA]/10 text-sm"
                                    />
                                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                                    </svg>
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {displayedLocations.map((location, idx) => (
                                    <motion.div
                                        key={location.slug}
                                        initial={{ opacity: 0, scale: 0.97 }}
                                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: Math.min(idx * 0.005, 0.3), ease: easeStandard } }}
                                        viewport={{ once: true, amount: 0.05 }}
                                    >
                                        <Link
                                            href={getLocalityUrl(city.slug, location.slug)}
                                            className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:border-[#0A58CA] hover:bg-blue-50 transition-colors group"
                                        >
                                            <div className="h-8 w-8 rounded-lg bg-[#0A58CA]/10 flex items-center justify-center flex-shrink-0">
                                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0A58CA" strokeWidth="2">
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                                                </svg>
                                            </div>
                                            <p className="text-[#1f2937] text-sm font-medium leading-tight">
                                                Packers and Movers in {location.name}
                                            </p>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {showMoreActive && (
                                <div className="mt-8 text-center">
                                    <button
                                        onClick={() => setShowAllAreas(true)}
                                        className="inline-flex items-center gap-2 border-2 border-[#0A58CA] hover:bg-[#0A58CA] text-[#0A58CA] hover:text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 text-sm shadow-sm hover:shadow-lg focus:outline-none"
                                    >
                                        Show {remainingCount} More
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </button>
                                </div>
                            )}

                            {filteredLocations.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-gray-400">No locations found matching &ldquo;{searchQuery}&rdquo;</p>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {city.subLocations.length === 0 && (
                    <section className="py-14 bg-white border-t border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                            <motion.div className="text-center mb-10" {...fadeUp}>
                                <SectionBadge text="Popular Cities" />
                                <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                    Other Major Cities We Serve
                                </h2>
                                <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-[15px]">
                                    Professional packers and movers available across India
                                </p>
                            </motion.div>

                            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
                                {[
                                    { name: "Bangalore", slug: "bangalore" },
                                    { name: "Hyderabad", slug: "hyderabad" },
                                    { name: "Delhi NCR", slug: "delhi-ncr" },
                                    { name: "Pune", slug: "pune" },
                                ].filter(c => c.slug !== city.slug).slice(0, 4).map((c, idx) => (
                                    <motion.div
                                        key={c.slug}
                                        initial={{ opacity: 0, scale: 0.97 }}
                                        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: Math.min(idx * 0.1, 0.3), ease: easeStandard } }}
                                        viewport={{ once: true, amount: 0.05 }}
                                    >
                                        <Link
                                            href={getCityUrl(c.slug)}
                                            className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-[#F8FAFC] hover:border-[#0A58CA] hover:bg-blue-50 transition-colors group"
                                        >
                                            <div className="h-8 w-8 rounded-lg bg-[#0A58CA]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A58CA] group-hover:text-white text-[#0A58CA] transition-colors">
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                                </svg>
                                            </div>
                                            <p className="text-[#1f2937] text-sm font-bold leading-tight group-hover:text-[#0A58CA] transition-colors">
                                                {c.name}
                                            </p>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Why Choose Us */}
                {city.highlights.length > 0 && (
                    <section className="py-14 bg-[#F8FAFC]">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                            <motion.div className="text-center mb-12" {...fadeUp}>
                                <SectionBadge text="Why Choose Us" />
                                <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                    Excellence in {city.name} Relocation
                                </h2>
                            </motion.div>
                            <motion.div
                                className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
                            >
                                {city.highlights.map((highlight, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeStandard } },
                                        }}
                                        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform duration-300"
                                    >
                                        <div className="h-10 w-10 rounded-xl bg-[#0A58CA]/10 flex items-center justify-center flex-shrink-0">
                                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0A58CA" strokeWidth="2.2">
                                                <path d="m5 12 5 5L20 7" />
                                            </svg>
                                        </div>
                                        <p className="text-[#1f2937] text-[15px] leading-relaxed pt-1">{highlight}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </section>
                )}

                {/* Pricing Tables */}
                <section className="py-14 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Pricing" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                Estimated Shifting Charges in {city.name}
                            </h2>
                            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-[15px]">
                                Transparent pricing to help you plan your move. Actual costs depend on distance, volume, and services selected.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.65, ease: easeStandard } }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                            >
                                <div className="bg-[#0A58CA] px-6 py-4">
                                    <h3 className="font-heading text-base font-extrabold text-white">Local Shifting Charges</h3>
                                    <p className="text-blue-100 text-xs mt-0.5">Within {city.name} city limits</p>
                                </div>
                                <table className="w-full bg-white">
                                    <thead>
                                        <tr className="bg-blue-50 border-b border-blue-100">
                                            <th className="text-left px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Service Type</th>
                                            <th className="text-right px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Estimated Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {LOCAL_PRICING.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 text-[#1f2937] text-sm font-medium">{row.type}</td>
                                                <td className="px-6 py-4 text-right text-[#0A58CA] font-bold text-sm">{row.cost}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.65, ease: easeStandard } }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                            >
                                <div className="bg-[#001126] px-6 py-4">
                                    <h3 className="font-heading text-base font-extrabold text-white">Interstate Shifting Rates</h3>
                                    <p className="text-blue-200 text-xs mt-0.5">From {city.name} to other cities</p>
                                </div>
                                <table className="w-full bg-white">
                                    <thead>
                                        <tr className="bg-blue-50 border-b border-blue-100">
                                            <th className="text-left px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Distance</th>
                                            <th className="text-right px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {INTERSTATE_PRICING.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 text-[#1f2937] text-sm font-medium">{row.distance}</td>
                                                <td className="px-6 py-4 text-right text-[#0A58CA] font-bold text-sm">{row.rate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="bg-amber-50 border-t border-amber-100 px-6 py-4 flex items-start gap-3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
                                        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                                    </svg>
                                    <p className="text-amber-800 text-xs leading-relaxed">{MOVING_TIP}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Real Customer Photos (Placeholder) */}
                <section className="py-14 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Gallery" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                See Our Team in Action in {city.name}
                            </h2>
                            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-[15px]">
                                Real photos from recent successful relocations in {city.name}.
                            </p>
                        </motion.div>
                        <motion.div
                            className="grid md:grid-cols-3 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            {photos.map((photo, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 25, scale: 0.96 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: easeStandard } },
                                    }}
                                    className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-[#F8FAFC]"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={photo.url}
                                            alt={photo.caption}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-4 border-t border-gray-100">
                                        <p className="text-[#001126] font-medium text-[13px] text-center">{photo.caption}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Customer Reviews */}
                <section className="py-14 bg-[#F8FAFC]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Reviews" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                What Our Customers Say
                            </h2>
                        </motion.div>
                        <motion.div
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            {reviews.map((review, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 30, scale: 0.95 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: easeStandard } },
                                    }}
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
                                >
                                    <StarRating rating={review.rating} />
                                    <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                                    <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                                        <div className="h-9 w-9 rounded-full bg-[#0A58CA] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                            {review.initial}
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#001126] text-sm">{review.author}</p>
                                            <p className="text-gray-400 text-xs">{review.tag}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-14 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="FAQ" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                Frequently Asked Questions
                            </h2>
                        </motion.div>
                        <FaqAccordion faqs={faqs} />
                    </div>
                </section>

                {/* Service Cards */}
                <section className="py-14 bg-[#F8FAFC]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Our Services" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                Relocation Services in {city.name}
                            </h2>
                        </motion.div>
                        <motion.div
                            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            {serviceCards.map((card, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 25, scale: 0.96 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: easeStandard } },
                                    }}
                                >
                                    <Link
                                        href={`/services/${card.slug}`}
                                        className="block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:-translate-y-1 transition-transform duration-300 group"
                                    >
                                        <div className="relative h-44 overflow-hidden">
                                            <Image
                                                src={card.imgUrl}
                                                alt={card.title}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <h3 className="font-heading font-extrabold text-[#001126] text-[15px] mb-2">{card.title}</h3>
                                            <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                                            <span className="mt-3 inline-flex items-center gap-1 text-[#0A58CA] text-xs font-bold">
                                                Learn more
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="m9 18 6-6-6-6" />
                                                </svg>
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>



                <CTABanner
                    title={`Get Your Free Quote for ${city.name} Relocation`}
                    subtitle="Share your move details via WhatsApp and our relocation experts will respond instantly with a customized quote and moving plan."
                    waMessage={waMessage}
                />

                <div className="py-12 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-[#0A58CA]"></div>
                            <h4 className="font-heading font-extrabold text-[#001126] text-[13px] uppercase tracking-widest">
                                Popular Searches in {city.name}
                            </h4>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                            {keywordsList.map((keyword, idx) => (
                                <span key={idx} className="bg-gray-50 text-gray-500 border border-gray-200 rounded-full px-4 py-2 text-[11px] font-semibold hover:bg-[#0A58CA] hover:text-white hover:border-[#0A58CA] transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

// ─── Locality Page ────────────────────────────────────────────────────────────

function LocalityPage({ city, locality, content }: { city: CityLocation; locality: SubLocation; content: LocalityContent; urlSlug: string }) {
    const metadata = generateLocalityMetadata(city.name, city.slug, locality.name, locality.slug, city.state, city.phoneNumber);

    const waMessage = `Hello Globe Relocation Packers and Movers Banglore Banglore, I need a quote for shifting in ${locality.name}, ${city.name}. Please help me plan my move.`;
    const canonicalUrl = `https://globerelo.in${getLocalityUrl(city.slug, locality.slug)}`;
    const cityPageUrl = getCityUrl(city.slug);
    const photos = getCityPhotos(locality.name, locality.slug);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
            <Seo
                title={content.metaTitle}
                description={content.metaDescription}
                path={canonicalUrl.replace("https://globerelo.in", "")}
                keywords={metadata.keywords}
                jsonLd={[
                    { ...metadata.structuredData, "@id": canonicalUrl, url: canonicalUrl },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            { "@type": "ListItem", position: 1, name: "Home", item: "https://globerelo.in/" },
                            { "@type": "ListItem", position: 2, name: `Packers & Movers ${city.name}`, item: `https://globerelo.in${cityPageUrl}` },
                            { "@type": "ListItem", position: 3, name: locality.name, item: canonicalUrl },
                        ],
                    },
                    metadata.faqStructuredData(content.faqs),
                ]}
            />

            <Navbar />

            <main className="flex-1">
                {/* Breadcrumb */}
                <div className="bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3">
                        <nav className="flex items-center gap-2 text-sm text-gray-500">
                            <Link href="/" className="hover:text-[#0A58CA] transition-colors">Home</Link>
                            <span>/</span>
                            <Link href={cityPageUrl} className="hover:text-[#0A58CA] transition-colors">{city.name}</Link>
                            <span>/</span>
                            <span className="text-[#001126] font-medium">{locality.name}</span>
                        </nav>
                    </div>
                </div>

                <HeroSection
                    badge={`Serving ${locality.name}, ${city.name}`}
                    h1={content.heroTitle}
                    description={content.heroDescription}
                    priceStarting={city.priceStarting}
                    waMessage={waMessage}
                    defaultFromCity={`${locality.name}, ${city.name}`}
                    breadcrumbItems={[
                        { label: "Home", href: "/" },
                        { label: "Locations", href: "/locations" },
                        { label: city.name, href: `/packers-and-movers-${city.slug}` },
                        { label: locality.name },
                    ]}
                />

                {/* About Section */}
                <section className="py-14 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="max-w-4xl">
                            <motion.div {...fadeUp}>
                                <SectionBadge text="About Our Services" />
                                <h2 className="mt-4 font-heading text-2xl md:text-3xl font-extrabold text-[#001126]">
                                    Professional Packers and Movers in {locality.name}, {city.name}
                                </h2>
                                <div className="mt-6 space-y-4 text-gray-700 leading-relaxed text-[15px]">
                                    <p>{content.aboutSection}</p>
                                    {content.localInsights && (
                                        <>
                                            <h3 className="font-heading text-xl font-extrabold text-[#001126] mt-8">Moving Insights for {locality.name}</h3>
                                            <p>{content.localInsights}</p>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {content.additionalContent && (
                    <section className="py-10 bg-[#F8FAFC]">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 text-gray-700 leading-relaxed text-[15px]"
                            dangerouslySetInnerHTML={{ __html: content.additionalContent }}
                        />
                    </section>
                )}

                {content.servicesDetail && (
                    <section className="py-14 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                            <motion.div className="text-center mb-12" {...fadeUp}>
                                <SectionBadge text="Service Excellence" />
                                <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                    Detailed Moving Solutions in {locality.name}
                                </h2>
                            </motion.div>
                            <div className="grid gap-6 md:grid-cols-2">
                                {([
                                    { title: "House Shifting Services", body: content.servicesDetail!.houseShifting },
                                    { title: "Office Relocation", body: content.servicesDetail!.officeRelocation },
                                    { title: "Packing & Unpacking", body: content.servicesDetail!.packingUnpacking },
                                    { title: "Vehicle Transportation", body: content.servicesDetail!.vehicleTransport },
                                ] as { title: string; body: string }[]).map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.05, ease: easeStandard } }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7"
                                    >
                                        <h3 className="font-heading text-lg font-extrabold text-[#0A58CA] mb-3">{item.title}</h3>
                                        <p className="text-gray-600 text-[15px] leading-relaxed">{item.body}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Why Choose Us */}
                <section className="py-14 bg-[#F8FAFC]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Why Choose Us" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                Your Trusted Moving Partner in {locality.name}
                            </h2>
                        </motion.div>
                        <motion.div
                            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
                        >
                            {content.whyChoosePoints.map((point, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeStandard } },
                                    }}
                                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-[#0A58CA]/10 flex items-center justify-center flex-shrink-0">
                                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0A58CA" strokeWidth="2.2">
                                            <path d="m5 12 5 5L20 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#1f2937] text-[15px] leading-relaxed pt-1">{point}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Service Highlights */}
                <section className="py-14 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Our Services" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                Comprehensive Moving Solutions
                            </h2>
                        </motion.div>
                        <motion.div
                            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                        >
                            {content.serviceHighlights.map((service, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.97 },
                                        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeStandard } },
                                    }}
                                    className="flex items-center gap-3 bg-[#F8FAFC] border border-gray-100 rounded-xl p-4"
                                >
                                    <div className="h-8 w-8 rounded-lg bg-[#0A58CA]/10 flex items-center justify-center flex-shrink-0">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0A58CA" strokeWidth="2.2">
                                            <path d="m5 12 5 5L20 7" />
                                        </svg>
                                    </div>
                                    <p className="text-[#1f2937] text-sm font-medium">{service}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Local Branch / Service Area Section */}
                <section className="py-14 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text={["devanahalli", "hoodi", "bellandur"].includes(locality.slug) ? "Our Local Branch" : "Service Area"} />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                {["devanahalli", "hoodi", "bellandur"].includes(locality.slug) ? `Visit Our ${locality.name} Office` : `Serving ${locality.name}, ${city.name}`}
                            </h2>
                        </motion.div>
                        <motion.div {...fadeUp} className="bg-[#F8FAFC] rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1 space-y-4">
                                <h3 className="font-heading text-2xl font-bold text-[#0A58CA]">
                                    {["devanahalli", "hoodi", "bellandur"].includes(locality.slug) ? `${locality.name} Branch` : `${locality.name} Service Area`}
                                </h3>

                                {locality.slug === "devanahalli" ? (
                                    <p className="text-gray-600 text-[15px] leading-relaxed">40/1 Orchid Park Layout 42 Rayasandra Gate Sulibele Road Devanahalli Southegowdanahalli, Boodihal, Karnataka Bengaluru, Karnataka 562110</p>
                                ) : locality.slug === "hoodi" ? (
                                    <p className="text-gray-600 text-[15px] leading-relaxed">No 37 Hoodi Industrial Area 6th Cross, Hoodi Main Rd, Bengaluru, Karnataka 560048</p>
                                ) : locality.slug === "bellandur" ? (
                                    <p className="text-gray-600 text-[15px] leading-relaxed">WM9C5RC, Sarjapur - Marathahalli Rd, Bellandur, Bengaluru, Karnataka 560035</p>
                                ) : (
                                    <p className="text-gray-600 text-[15px] leading-relaxed">Globe Relocation provides premium packing and moving services directly to your doorstep in {locality.name}. Our moving teams operate across {city.name} to ensure a seamless relocation experience.</p>
                                )}

                                <div className="pt-2">
                                    <p className="font-bold text-[#001126]">Primary Contact: <a href="tel:+917988859067" className="text-[#0A58CA] hover:underline">+91 79888 59067</a></p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 h-[300px] rounded-xl overflow-hidden bg-gray-200 shadow-inner">
                                {locality.slug === "devanahalli" ? (
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.2885973976865!2d77.7471928!3d13.1118182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDevanahalli!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Devanahalli Branch Map"></iframe>
                                ) : locality.slug === "hoodi" ? (
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.084594625299!2d77.7126861!3d12.9913745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHoodi!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Hoodi Branch Map"></iframe>
                                ) : locality.slug === "bellandur" ? (
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5833446059914!2d77.6710488!3d12.934484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBellandur!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Bellandur Branch Map"></iframe>
                                ) : (
                                    <iframe src={`https://www.google.com/maps?q=${encodeURIComponent(`${locality.name}, ${city.name}`)}&output=embed`} width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${locality.name} Map`}></iframe>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Pricing Tables */}
                <section className="py-14 bg-[#F8FAFC]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Pricing" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                Estimated Shifting Charges in {locality.name}
                            </h2>
                            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-[15px]">
                                Transparent pricing to help you plan your move from {locality.name}, {city.name}. Actual costs depend on distance, volume, and services selected.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.65, ease: easeStandard } }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                            >
                                <div className="bg-[#0A58CA] px-6 py-4">
                                    <h3 className="font-heading text-base font-extrabold text-white">Local Shifting Charges</h3>
                                    <p className="text-blue-100 text-xs mt-0.5">Within {city.name} city limits</p>
                                </div>
                                <table className="w-full bg-white">
                                    <thead>
                                        <tr className="bg-blue-50 border-b border-blue-100">
                                            <th className="text-left px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Service Type</th>
                                            <th className="text-right px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Estimated Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {LOCAL_PRICING.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 text-[#1f2937] text-sm font-medium">{row.type}</td>
                                                <td className="px-6 py-4 text-right text-[#0A58CA] font-bold text-sm">{row.cost}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.65, ease: easeStandard } }}
                                viewport={{ once: true }}
                                className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
                            >
                                <div className="bg-[#001126] px-6 py-4">
                                    <h3 className="font-heading text-base font-extrabold text-white">Interstate Shifting Rates</h3>
                                    <p className="text-blue-200 text-xs mt-0.5">From {locality.name} to other cities</p>
                                </div>
                                <table className="w-full bg-white">
                                    <thead>
                                        <tr className="bg-blue-50 border-b border-blue-100">
                                            <th className="text-left px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Distance</th>
                                            <th className="text-right px-6 py-3 text-[11px] font-bold text-[#0A58CA] uppercase tracking-wider">Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {INTERSTATE_PRICING.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 text-[#1f2937] text-sm font-medium">{row.distance}</td>
                                                <td className="px-6 py-4 text-right text-[#0A58CA] font-bold text-sm">{row.rate}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="bg-amber-50 border-t border-amber-100 px-6 py-4 flex items-start gap-3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fca311" strokeWidth="2.2" className="flex-shrink-0 mt-0.5">
                                        <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                                    </svg>
                                    <p className="text-amber-800 text-xs leading-relaxed">{MOVING_TIP}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Real Customer Photos (Placeholder) */}
                <section className="py-14 bg-white border-t border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="Gallery" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                See Our Team in Action in {locality.name}
                            </h2>
                            <p className="mt-3 text-gray-500 max-w-2xl mx-auto text-[15px]">
                                Real photos from recent successful relocations in {locality.name}.
                            </p>
                        </motion.div>
                        <motion.div
                            className="grid md:grid-cols-3 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                        >
                            {photos.map((photo, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 25, scale: 0.96 },
                                        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: easeStandard } },
                                    }}
                                    className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-[#F8FAFC]"
                                >
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <Image
                                            src={photo.url}
                                            alt={photo.caption}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-4 border-t border-gray-100">
                                        <p className="text-[#001126] font-medium text-[13px] text-center">{photo.caption}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-14 bg-[#F8FAFC]">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div className="text-center mb-12" {...fadeUp}>
                            <SectionBadge text="FAQ" />
                            <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                Frequently Asked Questions
                            </h2>
                        </motion.div>
                        <FaqAccordion faqs={content.faqs} />
                    </div>
                </section>

                {/* Nearby Areas */}
                {(() => {
                    // Fallback to array adjacency since we don't have lat/lng for sublocations
                    const currentIndex = city.subLocations.findIndex(loc => loc.slug === locality.slug);
                    const nearbyLocations: SubLocation[] = [];
                    if (currentIndex !== -1 && city.subLocations.length > 1) {
                        for (let i = 1; i <= 3; i++) {
                            const nextIndex = (currentIndex + i) % city.subLocations.length;
                            if (nextIndex !== currentIndex && !nearbyLocations.includes(city.subLocations[nextIndex])) {
                                nearbyLocations.push(city.subLocations[nextIndex]);
                                if (nearbyLocations.length >= 3) break;
                            }
                        }
                    }

                    if (nearbyLocations.length > 0) {
                        return (
                            <section className="py-14 bg-white border-t border-gray-100">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                                    <motion.div className="text-center mb-10" {...fadeUp}>
                                        <SectionBadge text="Nearby Areas" />
                                        <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-[#001126]">
                                            Popular Moving Locations near {locality.name}
                                        </h2>
                                    </motion.div>
                                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
                                        {nearbyLocations.map((loc, idx) => (
                                            <motion.div
                                                key={loc.slug}
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.1 } }}
                                                viewport={{ once: true }}
                                            >
                                                <Link
                                                    href={getLocalityUrl(city.slug, loc.slug)}
                                                    className="flex items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-[#F8FAFC] hover:border-[#0A58CA] hover:bg-blue-50 transition-colors group h-full"
                                                >
                                                    <div className="h-10 w-10 rounded-xl bg-[#0A58CA]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0A58CA] group-hover:text-white transition-colors text-[#0A58CA]">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-[#1f2937] text-[15px] font-bold leading-tight group-hover:text-[#0A58CA] transition-colors">
                                                            {loc.name}
                                                        </p>
                                                        <p className="text-gray-500 text-xs mt-1">Packers and Movers</p>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        );
                    }
                    return null;
                })()}

                <CTABanner
                    title={`Get Your Free Quote for ${locality.name}`}
                    subtitle="Share your move details via WhatsApp and our relocation experts will respond instantly with a customized quote and moving plan."
                    waMessage={waMessage}
                />

                <div className="py-8 bg-[#F8FAFC] text-center">
                    <Link href={cityPageUrl} className="inline-flex items-center gap-2 text-[#0A58CA] hover:text-[#001126] font-bold transition-colors text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        View all areas in {city.name}
                    </Link>
                </div>
                <div className="py-12 bg-white border-t border-gray-100 mt-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-[2px] bg-[#0A58CA]"></div>
                            <h4 className="font-heading font-extrabold text-[#001126] text-[13px] uppercase tracking-widest">
                                Popular Searches in {locality.name}
                            </h4>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                            {metadata.keywords.split(", ").map((keyword, idx) => (
                                <span key={idx} className="bg-gray-50 text-gray-500 border border-gray-200 rounded-full px-4 py-2 text-[11px] font-semibold hover:bg-[#0A58CA] hover:text-white hover:border-[#0A58CA] transition-all duration-300 cursor-default shadow-sm hover:shadow-md hover:-translate-y-0.5">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function LocationPage(props: PageProps) {
    if (props.type === "city") return <CityPage city={props.city} />;
    return <LocalityPage city={props.city} locality={props.locality} content={props.content} urlSlug={props.urlSlug} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const cityPaths = getAllCityPaths().map((slug) => ({ params: { slug } }));
    const localityPaths = getAllLocalitySEOPaths().map((slug) => ({ params: { slug } }));
    return { paths: [...cityPaths, ...localityPaths], fallback: false };
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
    const urlSlug = context.params?.slug as string;

    const localityParsed = parseLocalityFromUrl(urlSlug);
    if (localityParsed) {
        const data = getLocalityBySlug(localityParsed.citySlug, localityParsed.localitySlug);
        if (data) {
            const content = generateLocalityContent(data.city.name, data.locality.name, data.city.state, data.locality.slug);
            return { props: { type: "locality", city: data.city, locality: data.locality, content, urlSlug } };
        }
    }

    const citySlug = parseCityFromUrl(urlSlug);
    if (citySlug) {
        const city = getCityBySlug(citySlug);
        if (city) return { props: { type: "city", city } };
    }

    return { notFound: true };
};
