import Seo from "@/components/Seo";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { COMPANY } from "@/utils/company-info";

const easeStandard = [0.22, 0.61, 0.36, 1] as const;

export default function Disclaimer() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans overflow-x-hidden">
            <Seo
                title="Disclaimer | Globe Relocation Packers and Movers Banglore Banglore"
                description="Read Globe Relocation's disclaimer regarding pricing estimates, liability limitations, trademark usage, and third-party links. Transparency is our priority."
                path="/disclaimer"
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
                                    { label: "Disclaimer" },
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
                            Disclaimer
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15, ease: easeStandard }}
                        >
                            Important information about the services and content on this website.
                        </motion.p>
                    </div>
                </section>

                {/* CONTENT */}
                <section className="relative px-4 sm:px-6 lg:px-12 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100">
                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed
                                prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#001126]
                                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                                prose-p:text-[16px] prose-p:mb-4
                                prose-a:text-[#0A58CA] prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-[#001126] prose-strong:font-bold
                                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-li:mb-2"
                            >
                                <p className="text-[14px] text-gray-400 font-medium">
                                    Last updated: June 2025
                                </p>

                                <h2>1. Pricing Estimates Disclaimer</h2>
                                <p>
                                    All prices, rates, and cost estimates displayed on this website — including but not limited to service pages,
                                    blog articles, city-specific pages, and the online quotation tool — are <strong>approximate estimates only</strong> and
                                    are provided for informational purposes.
                                </p>
                                <ul>
                                    <li>Actual charges may vary based on the volume and weight of goods, distance, floor level, accessibility, packing requirements, and other site-specific factors.</li>
                                    <li>The <strong>final quotation</strong> is determined only after a physical or video pre-move survey conducted by our representative.</li>
                                    <li>Prices are subject to change without prior notice due to fluctuations in fuel costs, toll charges, government taxes, and seasonal demand.</li>
                                    <li>GST (Goods and Services Tax) at the applicable rate (currently 18%) will be charged in addition to the quoted amount unless explicitly stated otherwise.</li>
                                </ul>

                                <h2>2. Survey-Based Final Quotation</h2>
                                <p>
                                    {COMPANY.shortName} follows a transparent pricing model. We strongly recommend a pre-move survey
                                    (in-person or via video call) before confirming any booking. The survey allows us to:
                                </p>
                                <ul>
                                    <li>Accurately assess the volume and nature of goods to be moved.</li>
                                    <li>Identify special handling requirements (e.g., piano, antiques, fragile artwork).</li>
                                    <li>Check access conditions (stairs, narrow lanes, elevator availability).</li>
                                    <li>Provide a detailed, itemized quotation with no hidden charges.</li>
                                </ul>
                                <p>
                                    <strong>Any estimate provided before a survey is non-binding</strong> and may differ from the final invoice.
                                </p>

                                <h2>3. Trademark Disclaimer</h2>
                                <p>
                                    &quot;{COMPANY.name}&quot; and the Globe Relocation logo are trademarks of {COMPANY.name},
                                    registered under the laws of India.
                                </p>
                                <ul>
                                    <li>All third-party trademarks, service marks, logos, and brand names mentioned on this website (e.g., Google, WhatsApp, Instagram, Facebook, Tata, etc.) are the property of their respective owners.</li>
                                    <li>Their use on this website is for identification purposes only and does not imply endorsement, sponsorship, or affiliation with {COMPANY.shortName}.</li>
                                    <li>City names, locality names, and geographic references are used for informational and SEO purposes and do not imply exclusive service rights in those areas.</li>
                                </ul>

                                <h2>4. Liability Limitation</h2>
                                <p>
                                    While {COMPANY.shortName} takes every reasonable precaution to ensure the safety of your goods during packing,
                                    loading, transportation, and unloading, the following limitations apply:
                                </p>
                                <ul>
                                    <li><strong>Without Insurance:</strong> {COMPANY.shortName}&apos;s liability is limited to basic carrier liability as per industry standards. We strongly recommend transit insurance for all moves.</li>
                                    <li><strong>With Insurance:</strong> Claims are subject to the terms and conditions of the insurance policy. {COMPANY.shortName} assists in the claims process but the final settlement is determined by the insurance company.</li>
                                    <li><strong>Owner-Packed Items:</strong> {COMPANY.shortName} is not liable for damage to items packed by the customer. Professional packing by our team is recommended for full protection.</li>
                                    <li><strong>Prohibited Items:</strong> We are not liable for damage to items that were not declared or that are prohibited from transport (hazardous materials, perishables, etc.).</li>
                                    <li><strong>Force Majeure:</strong> {COMPANY.shortName} is not responsible for delays or damage caused by natural disasters, civil unrest, government restrictions, road blockages, or other circumstances beyond our control.</li>
                                </ul>

                                <h2>5. Content Accuracy</h2>
                                <p>
                                    The information on this website, including blog articles, guides, and FAQs, is provided in good faith for
                                    general informational purposes. While we strive for accuracy:
                                </p>
                                <ul>
                                    <li>Content may become outdated over time. We do not guarantee that all information is current at the time of reading.</li>
                                    <li>Blog posts and guides reflect the experience and opinions of our team and should not be considered professional financial, legal, or insurance advice.</li>
                                    <li>We recommend consulting with relevant professionals for decisions involving significant financial or legal implications.</li>
                                </ul>

                                <h2>6. Third-Party Links</h2>
                                <p>
                                    This website may contain links to third-party websites, tools, or services. These links are provided for
                                    your convenience and do not constitute an endorsement by {COMPANY.shortName}. We have no control over the
                                    content, privacy policies, or practices of third-party websites and accept no responsibility for them.
                                </p>

                                <h2>7. User-Generated Content</h2>
                                <p>
                                    Testimonials and reviews displayed on this website are from real customers and represent their personal experiences.
                                    Individual results may vary. {COMPANY.shortName} does not guarantee similar outcomes for all customers.
                                </p>

                                <h2>8. Jurisdiction</h2>
                                <p>
                                    This disclaimer and any disputes arising from the use of this website shall be governed by the laws of India.
                                    Any legal proceedings shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                                </p>

                                <h2>9. Changes to This Disclaimer</h2>
                                <p>
                                    {COMPANY.shortName} reserves the right to update or modify this disclaimer at any time without prior notice.
                                    Changes take effect immediately upon publication on this page. We recommend reviewing this page periodically.
                                </p>

                                <h2>Contact Us</h2>
                                <p>
                                    If you have questions about this disclaimer or our services, please contact us:
                                </p>
                                <ul>
                                    <li><strong>Phone:</strong> <a href={`tel:${COMPANY.phoneRaw}`}>{COMPANY.phone}</a></li>
                                    <li><strong>Email:</strong> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
                                    <li><strong>Visit:</strong> <Link href="/contact">Contact Page</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
