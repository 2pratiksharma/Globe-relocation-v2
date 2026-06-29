import Link from "next/link";
import { motion } from "framer-motion";
import { LOCATIONS, getCityUrl } from "@/data/locations.data";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

export default function LocationsSection() {
    const cities = Object.values(LOCATIONS);

    return (
        <section className="relative py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-12">
                    <p className="badge-outline">Our Service Locations</p>
                    <h2 className="mt-4 font-heading text-3xl text-primary md:text-4xl">
                        Trusted Packers & Movers Across India
                    </h2>
                    <p className="mt-4 text-secondary max-w-2xl mx-auto">
                        Professional relocation services available in major cities. Click to explore our services in your area.
                    </p>
                </div>

                {/* City Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {cities.map((city, index) => (
                        <motion.div
                            key={city.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: index * 0.1, ease: easeStandard }}
                        >
                            <Link
                                href={getCityUrl(city.slug)}
                                className="block glass-panel rounded-3xl p-8 smooth-hover group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="font-heading text-2xl text-primary mb-2">
                                            {city.name}
                                        </h3>
                                        <p className="text-sm text-muted">{city.state}</p>
                                    </div>
                                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(10, 78, 189, 0.15)] text-accent flex-shrink-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </span>
                                </div>

                                <p className="text-secondary text-sm mb-4 line-clamp-2">
                                    {city.heroDescription}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className="text-muted">Starting at</span>
                                        <span className="font-heading text-lg text-accent">{city.priceStarting}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-accent text-sm group-hover:gap-3 transition-all">
                                        <span>Explore</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="m9 18 6-6-6-6" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Popular Localities Preview */}
                                <div className="mt-4 pt-4 border-t border-[rgba(0, 0, 0, 0.08)]">
                                    <p className="text-xs text-muted mb-2">Popular Areas:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {city.subLocations.slice(0, 4).map((locality) => (
                                            <span
                                                key={locality.slug}
                                                className="text-xs px-2 py-1 rounded-lg bg-[rgba(10, 78, 189, 0.08)] text-secondary border border-[rgba(10, 78, 189, 0.15)]"
                                            >
                                                {locality.name}
                                            </span>
                                        ))}
                                        {city.subLocations.length > 4 && (
                                            <span className="text-xs px-2 py-1 rounded-lg bg-[rgba(10, 78, 189, 0.08)] text-accent border border-[rgba(10, 78, 189, 0.15)]">
                                                +{city.subLocations.length - 4} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: easeStandard }}
                    className="text-center"
                >
                    <p className="text-secondary mb-4">
                        Can&apos;t find your location? We serve 150+ areas across India.
                    </p>
                    <Link href="/contact" className="btn-secondary">
                        Contact Us for Your Area
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
