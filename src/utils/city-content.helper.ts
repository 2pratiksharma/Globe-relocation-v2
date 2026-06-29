/* ----------------------------------------------------------------
   Shared commercial content for city / locality location pages.
   Everything is generated from the place name so a new city only
   needs an entry in locations.data.ts to get a complete page.
----------------------------------------------------------------- */

export interface PriceRow {
    type: string;
    cost: string;
}

export interface InterstateRow {
    distance: string;
    rate: string;
}

export interface CityReview {
    rating: number; // out of 5 (supports .5)
    text: string;
    author: string;
    tag: string;
    initial: string;
}

export interface CityFaq {
    question: string;
    answer: string;
}

export interface CityIntro {
    title1: string;
    paras1: string[];
    title2: string;
    paras2: string[];
}

// Estimated local shifting charges — consistent across cities
export const LOCAL_PRICING: PriceRow[] = [
    { type: "1 BHK Shifting", cost: "₹3,500 – ₹6,500" },
    { type: "2 BHK Shifting", cost: "₹6,000 – ₹10,500" },
    { type: "3 BHK Shifting", cost: "₹9,000 – ₹16,000" },
    { type: "Office Relocation", cost: "After Survey" },
    { type: "Bike Transport", cost: "₹2,500 – ₹5,500" },
    { type: "Car Transport", cost: "₹6,000 – ₹12,000" },
];

// Distance-based interstate charges
export const INTERSTATE_PRICING: InterstateRow[] = [
    { distance: "Up to 200 KM", rate: "₹15 – ₹20 per KM" },
    { distance: "200–500 KM", rate: "₹18 – ₹24 per KM" },
    { distance: "500+ KM", rate: "₹20 – ₹28 per KM" },
];

export const MOVING_TIP =
    "The most requested periods of time to move are on weekends or at the end of the month. Booking early helps secure preferred moving slots and may also result in better pricing.";

// Long-form intro copy for a city / place
export function getCityIntro(placeName: string, contextName?: string): CityIntro {
    const region = contextName && contextName !== placeName ? `${placeName}, ${contextName}` : placeName;
    return {
        title1: `Credible Packers and Movers Companies in ${placeName}`,
        paras1: [
            `${placeName} is a vibrant city with a unique blend of culture, industry, and growing residential demand. Students, working professionals, families, and corporate teams frequently need the best and most credible packers and movers for their shifting requirements. Globe Relocation Packers and Movers has become an outright choice for top-rated packing and moving services in ${region}. We handle professional packing and moving, efficient and timely loading and unloading, safe storage facilities in warehouses, and the shifting of homes as well as offices without any hassle.`,
            `We offer ${placeName} car transportation, which also comprises safe and professional packing and moving services from ${placeName} to other parts of the country. We provide the best car transportation near you, transit insurance services, and IBA-approved movers and packers bills for claims. We take care of all household and domestic shifting requirements while being proud of our verified, certified, and pocket-friendly packing and moving services.`,
            `As the most trusted packers and movers company in ${placeName}, we ensure scam-free and stress-free relocations. Find top packers and movers in ${placeName} for the best packing, unpacking, and IBA-approved bills. Let us help you shift your home safely with the finest movers and packers in ${placeName}.`,
        ],
        title2: "Reliable Packing and Moving Service Across India",
        paras2: [
            `Globe Relocation Packers and Movers offers you the best packing and moving services across India. We provide services from Vijayawada to Mumbai, Jodhpur to Hyderabad, Madurai to Kolkata, and Raipur to Ahmedabad with professional, reliable, and trustworthy packing and moving solutions. We have services that handle moves from Kota to Jaipur, Guwahati to Kanpur, Chandigarh to Bareilly, and Solapur to Bhopal.`,
            `We have made packing and moving from Varanasi to Gwalior safe, speedy, and very affordable while ensuring everything is moved efficiently. We also have a wide range of trusted and verified packing and moving services that extend from Jabalpur to Srinagar, providing an even smoother relocation process. Choose us for a scam-free, stress-free move with certified professionals and the best packers and movers services.`,
        ],
    };
}

// Customer experiences shown on each location page
export function getCityReviews(placeName: string): CityReview[] {
    return [
        {
            rating: 5,
            text: `We moved within ${placeName} and the team arrived right on time. Packing was done carefully and loading finished much faster than expected. Very satisfied with the service.`,
            author: "Sourav Das",
            tag: "Shifted in September 2024",
            initial: "S",
        },
        {
            rating: 5,
            text: `Our office equipment and documents were shifted safely. Communication remained clear throughout the process and the staff were polite and professional.`,
            author: "Ankita Roy",
            tag: "Office Relocation",
            initial: "A",
        },
        {
            rating: 4.5,
            text: `I had concerns about the safe transport of my motorcycle; however, they correctly prepared my bike for transport and delivered it without any damage. Overall an excellent experience.`,
            author: "Rakesh Sharma",
            tag: "Bike Transport, November 2024",
            initial: "R",
        },
        {
            rating: 5,
            text: `We were moving from a 3 bedroom home and had many items to pack. The staff were extremely courteous and took the time to ensure all fragile articles were packed with care.`,
            author: "Mousumi Banerjee",
            tag: "Residential Move",
            initial: "M",
        },
    ];
}

// FAQs for a city page
export function getCityFaqs(placeName: string): CityFaq[] {
    return [
        {
            question: `How early should I book shifting services in ${placeName}?`,
            answer: `Booking at least 5–7 days in advance is recommended, especially for month-end dates and weekends when demand is highest.`,
        },
        {
            question: "Do you provide packing materials?",
            answer: `Yes. We provide high-quality cartons, bubble wrap, packing paper, foam sheets, and stretch film as part of our packing service so your belongings are fully protected.`,
        },
        {
            question: "Can I move only a few household items?",
            answer: `Absolutely. We handle full-house moves as well as partial or single-item shifting. Share your inventory and we will give you an accurate, transparent quote.`,
        },
        {
            question: "Are goods insured during relocation?",
            answer: `Yes, we offer comprehensive transit insurance that protects your goods against damage or loss during the move, giving you complete peace of mind.`,
        },
        {
            question: `Do you handle local office shifts in ${placeName}?`,
            answer: `Yes, we specialise in office and commercial relocation with IT-equipment handling, furniture dismantling and reassembly, and minimal-downtime planning including weekend moves.`,
        },
        {
            question: `What is the cost of packers and movers in ${placeName}?`,
            answer: `Local 1 BHK moves typically start around ₹3,500 while larger homes and interstate moves are priced by distance and volume. Use the estimate tables above as a guide and contact us for a free, customised quote.`,
        },
    ];
}

// Service cards shown at the bottom of a location page
export interface CityServiceCard {
    title: string;
    slug: string;
    imgUrl: string;
    desc: string;
}

export function getCityServiceCards(placeName: string): CityServiceCard[] {
    return [
        {
            title: `Home Shifting in ${placeName}`,
            slug: "home-shifting",
            imgUrl: "https://ik.imagekit.io/khibl45oa/house_shifting.png",
            desc: `A hassle-free solution for relocating your home in ${placeName}, ensuring safe packing, loading, and transport of your belongings while minimizing stress and effort.`,
        },
        {
            title: `Office Shifting in ${placeName}`,
            slug: "office-relocation",
            imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2010_59_07%20AM.png?updatedAt=1782194171940",
            desc: `A comprehensive service for relocating offices in ${placeName}, ensuring the safe and efficient transport of office equipment, furniture, and documents.`,
        },
        {
            title: `Car Shifting in ${placeName}`,
            slug: "car-transportation",
            imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_24_24%20AM.png?updatedAt=1782194171608",
            desc: `Professional car relocation offering secure transport of vehicles through dedicated car carriers, ensuring your car is safely delivered from ${placeName} to the new location.`,
        },
        {
            title: `Bike Shifting in ${placeName}`,
            slug: "bike-transportation",
            imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_18_30%20AM.png?updatedAt=1782194172843",
            desc: `Specialized service designed for safe and secure transport of bikes, using protective packaging and experienced handling to ensure your two-wheeler reaches its destination without damage.`,
        },
    ];
}

// Generates area-specific landmarks/information for the city
export function getCityLandmarks(cityName: string): string[] {
    const data: Record<string, string[]> = {
        "Bangalore": [
            "IT Hubs (Electronic City, Whitefield, Manyata Tech Park)",
            "Residential Corridors (HSR Layout, Koramangala, Indiranagar)",
            "Kempegowda International Airport proximity moves",
            "Namma Metro connected areas"
        ],
        "Mumbai": [
            "Western Suburbs (Bandra, Andheri, Borivali)",
            "South Mumbai (Colaba, Malabar Hill)",
            "Navi Mumbai & Thane connections",
            "High-rise apartment shifting specialists"
        ],
        "Delhi NCR": [
            "South Delhi premium residential areas",
            "Gurgaon & Noida corporate hubs",
            "Dwarka & Rohini sectors",
            "Diplomatic Enclave & Central Delhi"
        ],
        "Pune": [
            "Hinjewadi & Magarpatta IT Parks",
            "Kothrud & Wakad residential zones",
            "Kalyani Nagar & Koregaon Park",
            "Pimpri-Chinchwad industrial belt moves"
        ],
        "Hyderabad": [
            "HITEC City & Madhapur tech hubs",
            "Gachibowli & Kondapur residential areas",
            "Jubilee Hills & Banjara Hills",
            "Secunderabad twin city moves"
        ],
        "Chennai": [
            "OMR (Old Mahabalipuram Road) IT Corridor",
            "Anna Nagar & T Nagar commercial/residential",
            "Velachery & Adyar neighborhoods",
            "ECR (East Coast Road) villas"
        ]
    };

    return data[cityName] || [
        `Central ${cityName} business districts`,
        `Major residential neighborhoods in ${cityName}`,
        `Upcoming suburban areas of ${cityName}`,
        `${cityName} industrial and tech zones`
    ];
}

const CUSTOMER_IMAGES = [
    "https://ik.imagekit.io/khibl45oa/customer/1.jpg",
    "https://ik.imagekit.io/khibl45oa/customer/5.webp",
    "https://ik.imagekit.io/khibl45oa/customer/2.png",
    "https://ik.imagekit.io/khibl45oa/customer/3.png",
    "https://ik.imagekit.io/khibl45oa/customer/4.png",
    "https://ik.imagekit.io/khibl45oa/customer/6.png",
    "https://ik.imagekit.io/khibl45oa/customer/7.png",
    "https://ik.imagekit.io/khibl45oa/customer/8.png",
    "https://ik.imagekit.io/khibl45oa/customer/9.jpg",
    "https://ik.imagekit.io/khibl45oa/customer/10.png"
];

function hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

// Generates customer photos that vary across different pages
export function getCityPhotos(cityName: string, pageSlug: string): { url: string; caption: string }[] {
    const totalImages = CUSTOMER_IMAGES.length;
    const hash = hashString(pageSlug);
    
    // Step by 3 to minimize overlap between pages, ensuring 3 unique images per page
    const startIndex = (hash * 3) % totalImages;
    
    const photos = [];
    const captions = [
        `Safe household packing in ${cityName}`,
        `Our moving truck ready for loading in ${cityName}`,
        `Professional office relocation in ${cityName}`
    ];

    for (let i = 0; i < 3; i++) {
        // (startIndex + i) ensures the 3 images on a single page are strictly sequential in the list (thus unique)
        const index = (startIndex + i) % totalImages;
        photos.push({
            url: CUSTOMER_IMAGES[index],
            caption: captions[i]
        });
    }

    return photos;
}

