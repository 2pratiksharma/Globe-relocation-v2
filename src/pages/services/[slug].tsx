import Seo from "@/components/Seo";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { servicesData, ServiceData } from "@/data/services.data";
import { FaPhone, FaWhatsapp, FaFileAlt, FaCheckCircle, FaUsers, FaShieldAlt, FaLock } from "react-icons/fa";
import CountUp from "@/components/CountUp";
import {
  BiBox,
  BiWrench,
  BiGroup,
  BiMoney,
  BiTime,
  BiShieldQuarter,
  BiGlobe,
  BiFileBlank,
  BiSolidPlaneAlt,
  BiBriefcase,
  BiMap,
  BiCar,
  BiMapPin
} from "react-icons/bi";
import { BsBoxSeamFill } from "react-icons/bs";

const iconMap: Record<string, any> = {
  box: BiBox,
  tools: BiWrench,
  people: BiGroup,
  money: BiMoney,
  clock: BiTime,
  shield: BiShieldQuarter,
  map: BiMapPin,
  gps: BiMap,
  truck: BiCar,
  globe: BiGlobe,
  document: BiFileBlank,
  plane: BiSolidPlaneAlt,
  briefcase: BiBriefcase,
  warehouse: BsBoxSeamFill,
};

interface ServicePageProps {
  service: ServiceData;
  allServices: { title: string; slug: string; icon: string }[];
}

export default function ServicePage({ service, allServices }: ServicePageProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleWhatsAppQuote = () => {
    const url = new URL("https://wa.me/917988859067");
    const message = `Hello Globe Relocation Packers and Movers Banglore Banglore, I am interested in your ${service.title} service. Please help me with a quote.`;
    url.searchParams.set("text", message);
    window.open(url.toString(), "_blank");
  };

  const canonicalUrl = `https://globerelo.in/services/${service.slug}`;

  // Use [#fca311]-500 or similar for the orange color APM uses, and [#00458b] for the dark blue
  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#4a5568]">
      <Seo
        title={`${service.title} | Globe Relocation Packers and Movers Banglore Banglore`}
        description={service.heroDescription}
        path={`/services/${service.slug}`}
        ogImage={service.imgUrl}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.heroDescription,
          serviceType: service.title,
          url: canonicalUrl,
          provider: {
            "@type": "MovingCompany",
            name: "Globe Relocation Packers and Movers Banglore Banglore",
            telephone: "+91 79888 59067",
            areaServed: "India",
          },
        }}
      />

      <Navbar />

      <main>
        {/* Breadcrumbs Section (Hero) */}
        <section className="bg-gradient-to-r from-[#001126] to-[#0A58CA] text-white pt-24 pb-20 relative overflow-hidden">
          {/* Dotted pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="mb-8">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Services", href: "/services" },
                  { label: service.title },
                ]}
                variant="hero"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 font-heading">
              <span className="text-white">{service.title.split(' ')[0]} </span>
              <span className="text-[#fca311]">{service.title.split(' ').slice(1).join(' ')}</span>
            </h1>

            <p className="text-sm md:text-[15px] text-white/90 max-w-2xl mb-12 leading-relaxed font-medium">
              {service.heroDescription}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {service.features.slice(0, 4).map((feature, idx) => {
                const IconComponent = iconMap[feature.icon] || BiBox;
                return (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 md:p-4 flex items-center gap-3.5 border border-white/10 shadow-lg hover:bg-white/10 transition-all">
                    <div className="bg-black/20 p-2.5 rounded-lg text-[#fca311] text-xl md:text-2xl flex-shrink-0 flex items-center justify-center">
                      <IconComponent />
                    </div>
                    <div>
                      <strong className="block text-white text-[13px] md:text-[14px] font-bold leading-tight mb-1">{feature.title}</strong>
                      <small className="text-white/70 text-[10px] md:text-[11px] block leading-tight">{feature.description}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-8 md:h-12 block text-[#f8f9fa]">
              <path d="M0,30 C480,64 960,0 1440,30 L1440,64 L0,64 Z" fill="currentColor" />
            </svg>
          </div>
        </section>

        {/* Main Page Content Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-10">

              {/* Left Side Content (8 cols) */}
              <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">

                <h2 className="text-[28px] md:text-[32px] font-extrabold text-[#001126] mb-2 font-heading leading-tight tracking-tight">
                  Hassle-Free {service.title} for a Smooth Move
                </h2>

                <div className="w-12 h-[3px] bg-[#E65C00] mb-8"></div>

                <div className="text-gray-600 text-[14px] md:text-[15px] leading-loose">
                  {service.aboutParagraphs.map((p, idx) => {
                    // Make the company name bold in the first paragraph
                    if (idx === 0 && p.includes('Globe Relocation')) {
                      const parts = p.split('Globe Relocation');
                      return (
                        <p key={idx} className="mb-5">
                          {parts[0]}<strong className="text-[#001126] font-bold">Globe Relocation</strong>{parts.slice(1).join('Globe Relocation')}
                        </p>
                      );
                    }
                    return <p key={idx} className="mb-5">{p}</p>;
                  })}

                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="w-full h-auto rounded-xl shadow-sm mt-8 mb-4 object-cover aspect-video border border-gray-100"
                  />
                </div>

                {/* Process Timeline */}
                <h2 className="text-2xl font-bold text-[#00458b] mt-12 mb-2 font-heading">Our {service.title} Process</h2>
                <p className="text-gray-500 mb-8">Our professional packers follow a systematic, step-by-step process:</p>

                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                  {service.processSteps.map((step, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#fca311] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold text-lg z-10">
                        {idx + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <h4 className="font-bold text-[#00458b] text-lg">{step.title}</h4>
                        </div>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Why Choose Us Grid */}
                <h2 className="text-2xl font-bold text-[#00458b] mt-16 mb-8 font-heading">Why Choose Us</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {service.features.map((feature, idx) => {
                    const IconComponent = iconMap[feature.icon] || BiBox;
                    return (
                      <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
                        <div className="bg-[#fca311]/10 w-14 h-14 rounded-xl flex items-center justify-center text-[#fca311] text-3xl shrink-0">
                          <IconComponent />
                        </div>
                        <div>
                          <h5 className="font-bold text-[#00458b] mb-2">{feature.title}</h5>
                          <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Reviews Slice */}
                <div className="mt-16 bg-[#0a4ebd]/5 rounded-3xl p-8 relative overflow-hidden border border-[#0a4ebd]/10">
                  <div className="flex text-[#fca311] mb-4 text-xl">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="text-lg text-[#00458b]/80 italic mb-6 leading-relaxed font-medium">
                    "{service.review.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#fca311] text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {service.review.author.charAt(0)}
                    </div>
                    <div>
                      <h6 className="font-bold text-[#00458b] m-0">{service.review.author}</h6>
                      <span className="text-gray-500 text-sm">{service.review.location}</span>
                    </div>
                  </div>
                  <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                </div>

                {/* FAQs Accordion */}
                <h2 className="text-2xl font-bold text-[#00458b] mt-16 mb-8 font-heading">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 focus:outline-none"
                      >
                        <div className="flex items-center gap-3 text-left">
                          <FaCheckCircle className="text-[#fca311] flex-shrink-0" />
                          <span className="font-semibold text-[#00458b]">{faq.question}</span>
                        </div>
                        <div className={`transform transition-transform duration-300 ${expandedFAQ === idx ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      <AnimatePresence>
                        {expandedFAQ === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-5 pt-2 text-gray-700 leading-relaxed border-t border-gray-100 ml-9">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Side Sidebar (4 cols) */}
              <div className="w-full lg:w-1/3">
                <aside className="sticky top-32 space-y-8">

                  {/* Our Services Widget */}
                  <div className="bg-white rounded-2xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100 p-6">
                    <h3 className="text-[20px] font-extrabold text-[#001126] mb-4 font-heading tracking-tight">Our Services</h3>
                    <div className="w-full h-px bg-gray-100 mb-6"></div>

                    <ul className="space-y-3">
                      {allServices.map((s, idx) => {
                        const isActive = s.slug === service.slug;
                        const ServiceIcon = iconMap[s.icon] || BiBox;
                        return (
                          <li key={idx}>
                            <Link
                              href={`/services/${s.slug}`}
                              className={`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all font-bold text-[13px] ${isActive
                                ? 'bg-[#0A58CA] text-white shadow-md'
                                : 'bg-gray-50/80 text-gray-600 hover:bg-[#D34B32] hover:text-white hover:shadow-md'
                                }`}
                            >
                              <span className="flex items-center gap-3.5">
                                <span className={`${isActive ? 'text-white' : 'text-[#0A58CA] group-hover:text-white transition-colors'}`}>
                                  <ServiceIcon className="text-[17px]" />
                                </span>
                                {s.title}
                              </span>
                              <svg className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white transition-colors'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <Link href="/#services" className="mt-7 flex items-center gap-2.5 text-[#0A58CA] font-bold text-[14px] hover:text-[#001126] transition-colors group">
                      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="3" y="3" width="4.5" height="4.5" rx="1" />
                        <rect x="9.75" y="3" width="4.5" height="4.5" rx="1" />
                        <rect x="16.5" y="3" width="4.5" height="4.5" rx="1" />
                        <rect x="3" y="9.75" width="4.5" height="4.5" rx="1" />
                        <rect x="9.75" y="9.75" width="4.5" height="4.5" rx="1" />
                        <rect x="16.5" y="9.75" width="4.5" height="4.5" rx="1" />
                        <rect x="3" y="16.5" width="4.5" height="4.5" rx="1" />
                        <rect x="9.75" y="16.5" width="4.5" height="4.5" rx="1" />
                        <rect x="16.5" y="16.5" width="4.5" height="4.5" rx="1" />
                      </svg>
                      View All Services
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Contact CTA Widget */}
                  <div className="bg-[#00458b] rounded-2xl shadow-sm text-center p-8 relative overflow-hidden text-white">
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-[#fca311]/20 rounded-full blur-xl"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                        <FaPhone className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 font-heading text-white">Need Urgent Shifting?</h3>
                      <p className="text-white/80 mb-8 text-sm leading-relaxed">
                        Get in touch with our moving experts for a fast and free quotation.
                      </p>

                      <div className="flex flex-col gap-3">
                        <a href="tel:+917988859067" className="flex items-center justify-center gap-2 bg-white text-[#00458b] py-3 px-4 rounded-xl font-bold hover:bg-gray-50 transition-colors">
                          <FaPhone className="text-lg" />
                          +91 7988859067
                        </a>
                        <button onClick={handleWhatsAppQuote} className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-4 rounded-xl font-bold transition-colors">
                          <FaWhatsapp className="text-xl" />
                          WhatsApp Chat
                        </button>
                        <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#fca311] hover:bg-[#fca311]/90 text-white py-3 px-4 rounded-xl font-bold transition-colors border-none">
                          <FaFileAlt className="text-lg" />
                          Get a Free Quote
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Trusted Badges Widget */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h4 className="font-bold text-[#00458b] mb-5 font-heading">Why Choose Globe Relocation?</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 text-xl shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#00458b] text-sm"><CountUp value="7+" /> Years Experience</strong>
                          <span className="text-gray-500 text-xs">Relocating since 2005.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaUsers className="text-[#00458b] text-xl shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#00458b] text-sm"><CountUp value="15,000+" /> Happy Clients</strong>
                          <span className="text-gray-500 text-xs">Trusted by families & businesses.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaShieldAlt className="text-[#fca311] text-xl shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#00458b] text-sm">Verified & Licensed</strong>
                          <span className="text-gray-500 text-xs">Certified packers and movers.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FaLock className="text-red-500 text-xl shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#00458b] text-sm">100% Secure Shifting</strong>
                          <span className="text-gray-500 text-xs">Complete transit insurance.</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                </aside>
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
  const paths = servicesData.map((service) => ({
    params: { slug: service.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = servicesData.find((s) => s.slug === params?.slug);

  if (!service) {
    return { notFound: true };
  }

  // Pass all services for the sidebar links
  const allServices = servicesData.map(s => ({
    title: s.title,
    slug: s.slug,
    icon: s.features[0]?.icon || 'box'
  }));

  return {
    props: {
      service,
      allServices,
    },
  };
};
