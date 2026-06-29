import Seo from "@/components/Seo";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BlogPost, BLOG_POSTS, getBlogPostBySlug } from "@/data/blog.data";
import { getAuthor } from "@/utils/company-info";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

export default function BlogPostPage({ post }: { post: BlogPost }) {
    const author = getAuthor(post.author);

    const handleWhatsAppQuote = () => {
        const url = new URL("https://wa.me/917988859067");
        const message = `Hello Globe Relocation, I read your blog post "${post.title}" and I need a quote for shifting.`;
        url.searchParams.set("text", message);
        window.open(url.toString(), "_blank");
    };

    // Get related posts (same category, excluding current)
    const relatedPosts = BLOG_POSTS
        .filter(p => p.slug !== post.slug && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
            <Seo
                title={`${post.title} | Globe Relocation Blog`}
                description={post.description}
                path={`/blog/${post.slug}`}
                ogImage={post.image}
                ogType="article"
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    headline: post.title,
                    description: post.description,
                    image: post.image,
                    url: `https://globerelo.in/blog/${post.slug}`,
                    datePublished: post.date,
                    author: {
                        "@type": "Person",
                        name: author.name,
                        jobTitle: author.title,
                        description: author.bio,
                        image: author.avatar,
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "Globe Relocation Packers and Movers",
                        logo: { "@type": "ImageObject", url: "https://ik.imagekit.io/khibl45oa/Logo.png" },
                    },
                }}
            />

            <Navbar />

            <main className="flex-grow">
                {/* HERO HEADER */}
                <section className="relative pt-32 pb-48 bg-[#001126] text-center px-4">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0A58CA] blur-[150px] opacity-20 rounded-full pointer-events-none"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <div className="mb-8">
                            <Breadcrumbs
                                items={[
                                    { label: "Home", href: "/" },
                                    { label: "Blog", href: "/blog" },
                                    { label: post.title },
                                ]}
                                variant="hero"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: easeStandard }}
                        >
                            <span className="inline-block bg-white/10 text-[#fca311] text-[11px] uppercase tracking-widest px-4 py-1.5 rounded-full font-bold mb-6 border border-white/20 backdrop-blur-md">
                                {post.category}
                            </span>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-[1.15] mb-8">
                                {post.title}
                            </h1>
                            <div className="flex items-center justify-center flex-wrap gap-4 text-[14px] text-gray-300 font-medium">
                                <p>Published on {post.date}</p>
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                <p>By {post.author}</p>
                                {post.readTime && (
                                    <>
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                        <p>{post.readTime}</p>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <section className="relative px-4 sm:px-6 lg:px-12 -mt-32 z-20 pb-24">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: easeStandard }}
                            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-[2rem] overflow-hidden mb-16 shadow-2xl shadow-[#0A58CA]/10 ring-4 ring-white/50"
                        >
                            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
                        </motion.div>

                        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100">
                            <div
                                className="prose prose-lg max-w-none text-gray-600 leading-relaxed
                                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#001126]
                                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                                    prose-p:text-[17px] prose-p:mb-6
                                    prose-a:text-[#0A58CA] prose-a:no-underline hover:prose-a:underline
                                    prose-strong:text-[#001126] prose-strong:font-bold
                                    prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:mb-2
                                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
                                    prose-table:w-full prose-table:border-collapse prose-table:text-[15px]
                                    prose-th:bg-[#001126] prose-th:text-white prose-th:font-bold prose-th:px-4 prose-th:py-3 prose-th:text-left
                                    prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-gray-100
                                    prose-blockquote:border-l-4 prose-blockquote:border-[#0A58CA] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* AUTHOR BOX */}
                            <div className="mt-16 pt-8 border-t border-gray-100">
                                <div className="flex items-start gap-5 bg-[#F8FAFC] rounded-2xl p-6 md:p-8 border border-gray-100">
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 ring-2 ring-[#0A58CA]/20">
                                        <Image
                                            src={author.avatar}
                                            alt={author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-[11px] uppercase tracking-widest text-[#0A58CA] font-bold mb-1">Written by</p>
                                        <h3 className="font-heading text-lg md:text-xl font-extrabold text-[#001126] mb-1">
                                            {author.name}
                                        </h3>
                                        <p className="text-[13px] text-[#0A58CA] font-semibold mb-2">{author.title}</p>
                                        <p className="text-[14px] text-gray-500 leading-relaxed">{author.bio}</p>
                                    </div>
                                </div>
                            </div>

                            {/* TAGS */}
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h3 className="font-heading text-[15px] font-bold text-gray-400 uppercase tracking-widest mb-6">Related Tags</h3>
                                <div className="flex flex-wrap gap-3">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="bg-[#F8FAFC] text-gray-600 font-medium px-4 py-2 rounded-xl text-[14px] border border-gray-200">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RELATED ARTICLES */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-16">
                                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#001126] mb-8">
                                    Related Articles
                                </h2>
                                <div className="grid gap-6 md:grid-cols-3">
                                    {relatedPosts.map((related) => (
                                        <Link
                                            key={related.slug}
                                            href={`/blog/${related.slug}`}
                                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#0A58CA]/10 transition-all duration-300 group"
                                        >
                                            <div className="relative h-40 overflow-hidden">
                                                <Image
                                                    src={related.image}
                                                    alt={related.title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="p-5">
                                                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider mb-2">{related.category}</p>
                                                <h3 className="font-heading text-[15px] font-bold text-[#001126] leading-snug group-hover:text-[#0A58CA] transition-colors line-clamp-2">
                                                    {related.title}
                                                </h3>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA SECTION */}
                        <div className="mt-16 rounded-[3rem] bg-[#001126] relative overflow-hidden shadow-2xl py-16 px-6 sm:px-12 text-center border border-[#0A58CA]/20">
                            <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0A58CA] blur-[100px] opacity-40 rounded-full pointer-events-none"></div>
                            </div>

                            <div className="relative z-10">
                                <h2 className="font-heading text-3xl md:text-4xl text-white font-extrabold leading-tight tracking-tight mb-4">
                                    Planning a move?
                                </h2>
                                <p className="text-gray-300 text-[16px] md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
                                    Get a free, no-obligation quote from Globe Relocation today and experience the most professional shifting service.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <button onClick={handleWhatsAppQuote} className="w-full sm:w-auto bg-[#16a34a] hover:bg-[#15803d] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 text-[15px] shadow-lg shadow-[#16a34a]/30 flex items-center justify-center gap-2 hover:-translate-y-0.5">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        Get WhatsApp Quote
                                    </button>
                                    <Link href="/quote" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-bold py-4 px-8 rounded-xl transition-colors duration-300 text-[15px] flex items-center justify-center">
                                        Calculate Online
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = BLOG_POSTS.map((post) => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            post,
        },
    };
};
