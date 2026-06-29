import Seo from "@/components/Seo";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/data/blog.data";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeStandard } },
  viewport: { once: true, amount: 0.1 }
};

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
            <Seo
                title="Moving Guides & Tips | Globe Relocation Packers and Movers Blog"
                description="Expert moving tips, price guides, and relocation checklists for Bangalore and across India. Stay informed with Globe Relocation Packers and Movers blog."
                path="/blog"
            />

            <Navbar />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative overflow-hidden min-h-[50vh] flex items-center pt-20 pb-12 md:pt-24 md:pb-16 bg-[#001126]">
                    <div className="absolute inset-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0A58CA] blur-[120px] opacity-30 rounded-full pointer-events-none"></div>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                    </div>
                    
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full text-center">
                        <motion.nav className="flex items-center justify-center gap-2 text-[13px] text-gray-400 mb-8 font-medium" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">Blog</span>
                        </motion.nav>

                        <motion.div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#fca311] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
                            Expert Relocation Insights
                        </motion.div>
                        <motion.h1
                            className="font-heading text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, ease: easeStandard }}
                        >
                            Globe Relocation <span className="text-[#58a6ff]">Blog</span>
                        </motion.h1>
                        <motion.p
                            className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.75, delay: 0.15, ease: easeStandard }}
                        >
                            Your ultimate resource for stress-free moving. From price guides in JP Nagar to relocation checklists for Whitefield, we cover it all.
                        </motion.p>
                    </div>
                </section>

                <section className="relative py-16 md:py-24 bg-[#F8FAFC]">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.15 }
                                }
                            }}
                            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {BLOG_POSTS.map((post) => (
                                <motion.article
                                    key={post.slug}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.95, y: 20 },
                                        visible: { opacity: 1, scale: 1, y: 0, transition: { ease: easeStandard, duration: 0.6 } }
                                    }}
                                    className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:shadow-[#0A58CA]/10 transition-all duration-300 group"
                                >
                                    <Link href={`/blog/${post.slug}`} className="relative h-60 block overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-[#001126]/80 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold shadow-md">
                                                {post.category}
                                            </span>
                                        </div>
                                    </Link>
                                    <div className="p-8 flex-grow flex flex-col relative">
                                        <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <span>{post.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span>By {post.author}</span>
                                        </p>
                                        <h2 className="font-heading text-xl font-extrabold text-[#001126] mb-4 leading-tight group-hover:text-[#0A58CA] transition-colors">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="text-[15px] text-gray-500 mb-8 line-clamp-3 leading-relaxed">
                                            {post.description}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                                            <div className="flex gap-2">
                                                {post.tags.slice(0, 2).map(tag => (
                                                    <span key={tag} className="text-[11px] font-bold text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <Link href={`/blog/${post.slug}`} className="text-[#0A58CA] text-[14px] font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                Read article
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>
                    </div>
                </section>
                
                {/* CTA SECTION */}
                <section className="relative py-12 md:py-24 bg-white">
                    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
                        <div className="rounded-[3rem] bg-[#001126] relative overflow-hidden shadow-2xl py-16 px-6 sm:px-12 md:py-20 md:px-20 text-center border border-[#0A58CA]/20">
                            <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0A58CA] blur-[120px] opacity-40 rounded-full pointer-events-none"></div>
                            </div>

                            <div className="relative z-10">
                                <motion.div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#58a6ff] font-bold text-[11px] md:text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md" {...fadeUp}>
                                    Ready for your move?
                                </motion.div>
                                <motion.h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight" {...fadeUp} transition={{ delay: 0.15, ease: easeStandard }}>
                                    Stop reading and start <br className="hidden md:block" /> packing with the best
                                </motion.h2>
                                <motion.p className="mt-6 text-gray-300 text-[15px] md:text-lg max-w-2xl mx-auto leading-relaxed" {...fadeUp} transition={{ delay: 0.25, ease: easeStandard }}>
                                    Connect with us via WhatsApp for instant quotes, or explore services tailored to your needs across India and the globe.
                                </motion.p>
                                <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" {...fadeUp} transition={{ delay: 0.35, ease: easeStandard }}>
                                    <Link href="/quote" className="w-full sm:w-auto bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] shadow-lg shadow-[#0A58CA]/30 flex items-center justify-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        Start WhatsApp consultation
                                    </Link>
                                    <Link href="/services" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] flex items-center justify-center">
                                        Explore relocation programs
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
