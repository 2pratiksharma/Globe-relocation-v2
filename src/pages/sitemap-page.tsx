import Seo from "@/components/Seo";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/data/blog.data";
import { LOCATIONS } from "@/data/locations.data";
import { servicesData } from "@/data/services.data";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeStandard } },
    viewport: { once: true, amount: 0.1 },
};

const staticPages = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/quote", label: "Get a Quote" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/locations", label: "Our Locations" },
    { href: "/blog", label: "Blog" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
];

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <motion.div {...fadeUp} className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#001126] mb-6 pb-4 border-b border-gray-100">
                {title}
            </h2>
            {children}
        </motion.div>
    );
}

function SitemapLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-[15px] text-[#0A58CA] hover:text-[#004bb5] hover:underline transition-colors font-medium flex items-center gap-2 py-1"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-gray-300">
                    <path d="M9 18l6-6-6-6" />
                </svg>
                {label}
            </Link>
        </li>
    );
}

export default function HtmlSitemap() {
    const cities = Object.values(LOCATIONS);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
            <Seo
                title="Sitemap | Globe Relocation Packers and Movers Banglore Banglore"
                description="Browse the complete sitemap of Globe Relocation — find all service pages, city pages, blog articles, and important links in one place."
                path="/sitemap-page"
            />

            <Navbar />

            <main className="flex-grow">
                {/* HERO */}
                <section className="relative overflow-hidden pt-28 pb-16 bg-[#001126] text-center px-4">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0A58CA] blur-[150px] opacity-20 rounded-full pointer-events-none"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="mb-8">
                            <Breadcrumbs
                                items={[
                                    { label: "Home", href: "/" },
                                    { label: "Sitemap" },
                                ]}
                                variant="hero"
                            />
                        </div>

                        <motion.h1
                            className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-[1.15]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: easeStandard }}
                        >
                            Site Map
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15, ease: easeStandard }}
                        >
                            Find every page on our website — organized by category for easy navigation.
                        </motion.p>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="relative px-4 sm:px-6 lg:px-12 py-16 md:py-24">
                    <div className="max-w-6xl mx-auto space-y-8">

                        {/* Main Pages */}
                        <SectionCard title="Main Pages">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1">
                                {staticPages.map((page) => (
                                    <SitemapLink key={page.href} href={page.href} label={page.label} />
                                ))}
                            </ul>
                        </SectionCard>

                        {/* Services */}
                        <SectionCard title="Our Services">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-1">
                                <SitemapLink href="/services" label="All Services" />
                                {servicesData.map((service) => (
                                    <SitemapLink key={service.slug} href={`/services/${service.slug}`} label={service.title} />
                                ))}
                            </ul>
                        </SectionCard>

                        {/* Blog Articles */}
                        <SectionCard title={`Blog Articles (${BLOG_POSTS.length})`}>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                                {BLOG_POSTS.map((post) => (
                                    <SitemapLink key={post.slug} href={`/blog/${post.slug}`} label={post.title} />
                                ))}
                            </ul>
                        </SectionCard>

                        {/* City Pages */}
                        {cities.filter((city) => city.subLocations.length > 0).map((city) => (
                            <SectionCard key={city.slug} title={`Packers and Movers in ${city.name} (${city.subLocations.length} localities)`}>
                                <div className="mb-4">
                                    <SitemapLink href={`/packers-and-movers-${city.slug}`} label={`Packers and Movers in ${city.name} (Main Page)`} />
                                </div>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-1">
                                    {city.subLocations.map((loc) => (
                                        <SitemapLink
                                            key={loc.slug}
                                            href={`/packers-and-movers-${city.slug}-${loc.slug}`}
                                            label={loc.name}
                                        />
                                    ))}
                                </ul>
                            </SectionCard>
                        ))}

                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
