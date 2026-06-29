import { PRIORITY_LOCALITIES } from "@/data/priority-localities.data";
import { getCityUrl, getLocalityUrl } from "@/data/locations.data";

const DOMAIN = "https://globerelo.in";

export interface LocalityContent {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    aboutSection: string;
    whyChoosePoints: string[];
    faqs: Array<{ question: string; answer: string }>;
    serviceHighlights: string[];
    localInsights?: string;
    servicesDetail?: {
        houseShifting: string;
        officeRelocation: string;
        packingUnpacking: string;
        vehicleTransport: string;
    };
    additionalContent?: string;
}

export function generateLocalityContent(
    cityName: string,
    localityName: string,
    state: string,
    localitySlug?: string
): LocalityContent {
    // Check if we have priority content for this locality
    if (localitySlug && PRIORITY_LOCALITIES[localitySlug]) {
        return PRIORITY_LOCALITIES[localitySlug];
    }

    return {
        metaTitle: `Packers and Movers in ${localityName}, ${cityName} | Globe Relocation - ₹2999`,
        metaDescription: `Professional packers and movers in ${localityName}, ${cityName}. Trusted local relocation services with safe packing, insured transport, and on-time delivery. Get instant quote starting at ₹2999.`,
        heroTitle: `Trusted Packers and Movers in ${localityName}`,
        heroDescription: `Globe Relocation Packers and Movers Banglore Banglore offers premium moving solutions in ${localityName}, ${cityName}. Whether you're shifting your home, office, or vehicle, our expert team ensures a seamless relocation experience with professional packing, secure transport, and timely delivery. We serve ${localityName} and surrounding areas with transparent pricing starting at just ₹2999.`,
        aboutSection: `Looking for reliable packers and movers in ${localityName}? Globe Relocation Services is your trusted moving partner in ${cityName}, ${state}. We specialize in residential and commercial relocations, offering end-to-end moving solutions tailored to your needs. Our experienced team handles everything from careful packing using premium materials to safe transportation and timely delivery. With years of expertise serving ${localityName} residents, we understand the local area, traffic patterns, and best routes to ensure your belongings reach their destination safely. Our services include household shifting, office relocation, vehicle transportation, packing and unpacking, loading and unloading, and secure storage solutions. We use GPS-enabled vehicles for real-time tracking and provide comprehensive insurance coverage for your peace of mind.`,
        whyChoosePoints: [
            `Local expertise in ${localityName} with knowledge of area-specific logistics`,
            `Professional packing crew trained in handling fragile and valuable items`,
            `GPS-tracked vehicles for real-time shipment monitoring`,
            `Comprehensive insurance coverage for complete protection`,
            `Transparent pricing with no hidden charges`,
            `24/7 customer support via WhatsApp and phone`,
            `Same-day and express moving options available`,
            `Climate-controlled storage facilities nearby`
        ],
        faqs: [
            {
                question: `What are the charges for packers and movers in ${localityName}?`,
                answer: `Our charges in ${localityName} start from ₹2999 and vary based on factors like distance, volume of goods, type of items, and additional services required. We provide transparent, upfront quotes with no hidden costs. Contact us for a free, customized estimate based on your specific moving requirements.`
            },
            {
                question: `How much time does it take to shift within ${localityName} or to other areas of ${cityName}?`,
                answer: `Local moves within ${localityName} typically take 4-8 hours depending on the volume of goods and distance. Moves to other parts of ${cityName} may take 6-12 hours. Long-distance relocations are completed within 2-5 days based on the destination. We provide accurate time estimates during the quote process.`
            },
            {
                question: `Do you provide packing materials for the move in ${localityName}?`,
                answer: `Yes, we provide all necessary packing materials including high-quality cardboard boxes, bubble wrap, packing paper, foam sheets, stretch film, and specialized crates for fragile items. Our packing materials are included in our comprehensive moving packages to ensure maximum protection for your belongings.`
            },
            {
                question: `Is insurance coverage available for moves from ${localityName}?`,
                answer: `Absolutely! We offer comprehensive insurance coverage for all relocations from ${localityName}. Our insurance protects your belongings against damage, loss, or theft during transit. We provide different coverage options based on the value of your goods, ensuring complete peace of mind throughout the moving process.`
            },
            {
                question: `Can you help with office relocation in ${localityName}?`,
                answer: `Yes, we specialize in commercial and office relocations in ${localityName}. Our services include IT equipment handling, furniture disassembly and reassembly, secure document transportation, minimal downtime planning, and after-hours moving options. We work efficiently to ensure your business operations resume quickly at the new location.`
            },
            {
                question: `Do you offer storage facilities near ${localityName}?`,
                answer: `Yes, we provide secure, climate-controlled storage facilities near ${localityName}. Our warehouses are equipped with 24/7 security surveillance, pest control, and proper ventilation. Whether you need short-term storage during your move or long-term warehousing solutions, we offer flexible plans to suit your requirements.`
            }
        ],
        serviceHighlights: [
            `Complete household shifting services in ${localityName}`,
            `Office and commercial relocation with minimal downtime`,
            `Vehicle transportation (car, bike) with door-to-door service`,
            `Professional packing and unpacking with premium materials`,
            `Loading and unloading by trained personnel`,
            `Secure storage and warehousing solutions`,
            `Pet relocation assistance available`,
            `Furniture disassembly and reassembly services`
        ]
    };
}

export function generateLocalityMetadata(
    cityName: string,
    citySlug: string,
    localityName: string,
    localitySlug: string,
    state: string,
    phoneNumber: string
) {
    const localityUrl = `${DOMAIN}${getLocalityUrl(citySlug, localitySlug)}`;
    const cityUrl = `${DOMAIN}${getCityUrl(citySlug)}`;

    const keywordsList = [
        `Packers and Movers in ${localityName}`,
        `Packers and Movers ${localityName}`,
        `Packers And Movers Near Me`,
        `Packers and Movers ${cityName} ${localityName}`,
        `Packers and Movers ${localityName} ${cityName}`,
        `${localityName} Packers and Movers`,
        `Local Packers and Movers in ${localityName}`,
        `Local Packers and Movers ${localityName}`,
        `City Packers and Movers in ${localityName}`,
        `City Packers and Movers ${localityName}`,
        `Home Packers and Movers in ${localityName}`,
        `Home Packers and Movers ${localityName}`,
        `Car Transport in ${localityName}`,
        `Car Transport ${localityName}`,
        `Tempo Packers and Movers in ${localityName}`,
        `Tempo Packers and Movers ${localityName}`,
        `Bike Transport in ${localityName}`,
        `Bike Transport ${localityName}`,
        `Office Packers and Movers in ${localityName}`,
        `Office Packers and Movers ${localityName}`,
        `corporate Packers and Movers in ${localityName}`,
        `corporate Packers and Movers ${localityName}`,
        `Apartment Packers and Movers in ${localityName}`,
        `Apartment Packers and Movers ${localityName}`,
        `City to City Packers and Movers in ${localityName}`,
        `City to City Packers and Movers ${localityName}`,
        `Door to Door Packers and Movers in ${localityName}`,
        `Door to Door Packers and Movers ${localityName}`,
        `Tata Ace Packers and Movers in ${localityName}`,
        `Tata Ace Packers and Movers ${localityName}`,
        `Wooden crate Packing Services ${localityName}`,
        `Globe Relocation and Logistics in ${localityName}`,
        `Globe Relocation and Logistics ${localityName}`,
        `Professional Packers and Movers in ${localityName}`,
        `Professional Packers and Movers ${localityName}`,
        `Globe Relocation and Logistics Best Packers and Movers in ${localityName}`,
        `Globe Relocation and Logistics Best Packers and Movers ${localityName}`
    ];

    return {
        keywords: keywordsList.join(", "),
        canonical: localityUrl,
        structuredData: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": localityUrl,
            name: `Globe Relocation Services - ${localityName}, ${cityName}`,
            description: `Professional packers and movers in ${localityName}, ${cityName}. Trusted local relocation services with safe packing, insured transport, and on-time delivery.`,
            url: localityUrl,
            telephone: phoneNumber,
            priceRange: "₹₹",
            areaServed: {
                "@type": "Place",
                name: `${localityName}, ${cityName}, ${state}`
            },
            openingHours: "Mo-Su 08:00-20:00",
            sameAs: [
                "https://www.facebook.com/globerelocation",
                "https://www.instagram.com/globerelocation",
                "https://www.linkedin.com/company/globerelocation"
            ]
        },
        breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: `${DOMAIN}/`
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: `Packers & Movers ${cityName}`,
                    item: cityUrl
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: `${localityName}`,
                    item: localityUrl
                }
            ]
        },
        faqStructuredData: (faqs: Array<{ question: string; answer: string }>) => ({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            }))
        })
    };
}
