import Seo from "@/components/Seo";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LOCATIONS } from "@/data/locations.data";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

export default function Custom404() {
    const cities = Object.values(LOCATIONS);

    return (
        <div className="page-gradient min-h-screen text-secondary">
            <Seo
                title="Page Not Found | Globe Relocation Packers and Movers"
                description="The page you're looking for doesn't exist. Explore our packers and movers services in Bangalore, Hyderabad, and Delhi NCR."
                path="/404"
                noindex
            />

            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="relative py-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: easeStandard }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            {/* 404 Number */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: easeStandard }}
                                className="mb-8"
                            >
                                <h1 className="font-heading text-[8rem] md:text-[12rem] leading-none text-primary opacity-20">
                                    404
                                </h1>
                            </motion.div>

                            <span className="pill-highlight mb-6 inline-flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-accent" />
                                Page Not Found
                            </span>

                            <h2 className="font-heading text-3xl text-primary md:text-4xl mt-4">
                                Oops! This page has moved
                            </h2>

                            <p className="mt-6 text-lg text-secondary">
                                The page you&apos;re looking for doesn&apos;t exist or has been relocated.
                                Don&apos;t worry—we&apos;ll help you find what you need.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/" className="btn-primary">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                    Back to Home
                                </Link>
                                <Link href="/contact" className="btn-secondary">
                                    Contact Support
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Quick Links Section */}
                <section className="relative py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="text-center mb-12">
                            <p className="badge-outline">Popular Pages</p>
                            <h3 className="mt-4 font-heading text-2xl text-primary md:text-3xl">
                                Explore Our Services
                            </h3>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    title: "Our Services",
                                    description: "Explore our comprehensive relocation solutions",
                                    href: "/services",
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <rect x="1" y="3" width="15" height="13" />
                                            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                                            <circle cx="5.5" cy="18.5" r="2.5" />
                                            <circle cx="18.5" cy="18.5" r="2.5" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Get a Quote",
                                    description: "Instant WhatsApp quote for your move",
                                    href: "/quote",
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "About Us",
                                    description: "Learn about our relocation expertise",
                                    href: "/about",
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    )
                                },
                                {
                                    title: "Contact Us",
                                    description: "Get in touch with our team",
                                    href: "/contact",
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    )
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1, ease: easeStandard }}
                                >
                                    <Link
                                        href={item.href}
                                        className="block glass-panel rounded-3xl p-6 smooth-hover group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(10, 78, 189, 0.15)] text-accent flex-shrink-0">
                                                {item.icon}
                                            </span>
                                            <div className="flex-1">
                                                <h4 className="font-heading text-lg text-primary mb-2">
                                                    {item.title}
                                                </h4>
                                                <p className="text-sm text-secondary">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <path d="m9 18 6-6-6-6" />
                                            </svg>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Locations Section */}
                <section className="relative py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                        <div className="text-center mb-12">
                            <p className="badge-outline">Our Locations</p>
                            <h3 className="mt-4 font-heading text-2xl text-primary md:text-3xl">
                                Find Services in Your City
                            </h3>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {cities.map((city, index) => (
                                <motion.div
                                    key={city.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1, ease: easeStandard }}
                                >
                                    <Link
                                        href={`/location/${city.slug}`}
                                        className="block glass-panel rounded-3xl p-6 smooth-hover"
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="font-heading text-xl text-primary">
                                                {city.name}
                                            </h4>
                                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[rgba(10, 78, 189, 0.12)] text-accent">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                                    <circle cx="12" cy="10" r="3" />
                                                </svg>
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted mb-3">{city.state}</p>
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-muted">Starting at</span>
                                            <span className="font-heading text-accent">{city.priceStarting}</span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
