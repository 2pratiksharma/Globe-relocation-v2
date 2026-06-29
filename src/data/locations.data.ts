export interface SubLocation {
    name: string;
    slug: string;
}

export interface CityLocation {
    slug: string;
    name: string;
    state: string;
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroDescription: string;
    subLocations: SubLocation[];
    highlights: string[];
    priceStarting: string;
    phoneNumber: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

export const LOCATIONS: Record<string, CityLocation> = {
    bangalore: {
        slug: "bangalore",
        name: "Bangalore",
        state: "Karnataka",
        metaTitle: "Best Packers and Movers in Bangalore | Reliable Moving Services Starting ₹2999",
        metaDescription:
            "Looking for reliable packers and movers in Bangalore? Globe Relocation offers professional house shifting, office relocation, and local moving services in Bengaluru. Secure, insured, and affordable. Get a free quote today!",
        heroTitle: "Award-Winning Packers and Movers in Bangalore",
        heroDescription:
            "Experience stress-free relocation with Globe Relocation, the most trusted packers and movers in Bangalore. Whether you are moving locally within HSR Layout and Koramangala or shifting long-distance from Whitefield to Electronic City, our expert team ensures the safety of your belongings. We specialize in household shifting, corporate office relocation, and vehicle transportation with upfront pricing starting at just ₹2999.",
        priceStarting: "₹2999",
        phoneNumber: "+917988859067",
        coordinates: {
            lat: 12.9716,
            lng: 77.5946,
        },
        highlights: [
            "100% Safe & Secure Household Shifting in Bangalore",
            "Professional Office Relocation with Minimal Downtime",
            "Expert Packing using Premium Quality Materials",
            "Live GPS Tracking for All Moving Vehicles",
            "Best Local Movers for Short-Distance Shifting",
            "Transparent Pricing with No Hidden Charges",
            "24/7 Customer Support & Move Coordination",
            "Transit Insurance for Every Move"
        ],
        subLocations: [
            { name: "Abbigere", slug: "abbigere" },
            { name: "Adugodi", slug: "adugodi" },
            { name: "Agara", slug: "agara" },
            { name: "Akshayanagar", slug: "akshayanagar" },
            { name: "Amruthahalli", slug: "amruthahalli" },
            { name: "Anjanapura", slug: "anjanapura" },
            { name: "Arakere", slug: "arakere" },
            { name: "Attibele", slug: "attibele" },
            { name: "Banashankari", slug: "banashankari" },
            { name: "Bannerghatta Road", slug: "bannerghatta-road" },
            { name: "Basavanagudi", slug: "basavanagudi" },
            { name: "Basaveshwaranagar", slug: "basaveshwaranagar" },
            { name: "Begur", slug: "begur" },
            { name: "Bellandur", slug: "bellandur" },
            { name: "Benson Town", slug: "benson-town" },
            { name: "Bommanahalli", slug: "bommanahalli" },
            { name: "Bommasandra", slug: "bommasandra" },
            { name: "BTM Layout", slug: "btm-layout" },
            { name: "CV Raman Nagar", slug: "cv-raman-nagar" },
            { name: "Devanahalli", slug: "devanahalli" },
            { name: "Domlur", slug: "domlur" },
            { name: "Electronic City", slug: "electronic-city" },
            { name: "Frazer Town", slug: "frazer-town" },
            { name: "Girinagar", slug: "girinagar" },
            { name: "Hebbal", slug: "hebbal" },
            { name: "Hennur", slug: "hennur" },
            { name: "Hoodi", slug: "hoodi" },
            { name: "Horamavu", slug: "horamavu" },
            { name: "Hosa Road", slug: "hosa-road" },
            { name: "HSR Layout", slug: "hsr-layout" },
            { name: "Indiranagar", slug: "indiranagar" },
            { name: "Jayanagar", slug: "jayanagar" },
            { name: "JP Nagar", slug: "jp-nagar" },
            { name: "Kadugodi", slug: "kadugodi" },
            { name: "Kalyan Nagar", slug: "kalyan-nagar" },
            { name: "Kammanahalli", slug: "kammanahalli" },
            { name: "Kengeri", slug: "kengeri" },
            { name: "Koramangala", slug: "koramangala" },
            { name: "Kothanur", slug: "kothanur" },
            { name: "KR Puram", slug: "kr-puram" },
            { name: "Kundalahalli", slug: "kundalahalli" },
            { name: "Mahadevapura", slug: "mahadevapura" },
            { name: "Malleshwaram", slug: "malleshwaram" },
            { name: "Marathahalli", slug: "marathahalli" },
            { name: "Mathikere", slug: "mathikere" },
            { name: "Nagarbhavi", slug: "nagarbhavi" },
            { name: "Nandini Layout", slug: "nandini-layout" },
            { name: "Old Airport Road", slug: "old-airport-road" },
            { name: "Peenya", slug: "peenya" },
            { name: "Rajajinagar", slug: "rajajinagar" },
            { name: "Ramamurthy Nagar", slug: "ramamurthy-nagar" },
            { name: "RT Nagar", slug: "rt-nagar" },
            { name: "Sadashivanagar", slug: "sadashivanagar" },
            { name: "Sarjapur Road", slug: "sarjapur-road" },
            { name: "Uttarahalli", slug: "uttarahalli" },
            { name: "Varthur", slug: "varthur" },
            { name: "Vijayanagar", slug: "vijayanagar" },
            { name: "Whitefield", slug: "whitefield" },
            { name: "Yelahanka", slug: "yelahanka" },
            { name: "Yeshwanthpur", slug: "yeshwanthpur" },
        ],
    },

    hyderabad: {
        slug: "hyderabad",
        name: "Hyderabad",
        state: "Telangana",
        metaTitle: "Packers and Movers in Hyderabad | Globe Relocation Packers and Movers - Starting ₹2999",
        metaDescription:
            "Trusted packers and movers in Hyderabad. Professional relocation services across all areas of Hyderabad and Secunderabad. Safe, insured moving starting at ₹2999. Get instant quote.",
        heroTitle: "Premium Packers and Movers in Hyderabad",
        heroDescription:
            "Globe Relocation Packers and Movers brings world-class relocation expertise to Hyderabad. From Hitech City to Banjara Hills, Gachibowli to Secunderabad, we handle household moves, corporate relocations, and international shipping with precision. Our certified teams use premium packing materials and real-time tracking to ensure stress-free moves starting at ₹2999.",
        priceStarting: "₹2999",
        phoneNumber: "+917988859067",
        coordinates: {
            lat: 17.385,
            lng: 78.4867,
        },
        highlights: [
            "Express relocation within Hyderabad metro",
            "Specialized handling for IT equipment and servers",
            "Bonded warehousing in Gachibowli and Hitech City",
            "24/7 WhatsApp updates during transit",
            "Customs clearance for international moves",
            "Transparent pricing with zero surprises",
        ],
        subLocations: [
            { name: "Abids", slug: "abids" },
            { name: "Ameerpet", slug: "ameerpet" },
            { name: "Attapur", slug: "attapur" },
            { name: "Bachupally", slug: "bachupally" },
            { name: "Banjara Hills", slug: "banjara-hills" },
            { name: "Begumpet", slug: "begumpet" },
            { name: "Boduppal", slug: "boduppal" },
            { name: "Chanda Nagar", slug: "chanda-nagar" },
            { name: "Charminar", slug: "charminar" },
            { name: "Dilsukhnagar", slug: "dilsukhnagar" },
            { name: "ECIL", slug: "ecil" },
            { name: "Gachibowli", slug: "gachibowli" },
            { name: "Habsiguda", slug: "habsiguda" },
            { name: "Hayathnagar", slug: "hayathnagar" },
            { name: "Hitech City", slug: "hitech-city" },
            { name: "Jubilee Hills", slug: "jubilee-hills" },
            { name: "Kachiguda", slug: "kachiguda" },
            { name: "Kapra", slug: "kapra" },
            { name: "Khairatabad", slug: "khairatabad" },
            { name: "Kompally", slug: "kompally" },
            { name: "Kondapur", slug: "kondapur" },
            { name: "Kothapet", slug: "kothapet" },
            { name: "Kukatpally", slug: "kukatpally" },
            { name: "LB Nagar", slug: "lb-nagar" },
            { name: "Lingampally", slug: "lingampally" },
            { name: "Madhapur", slug: "madhapur" },
            { name: "Manikonda", slug: "manikonda" },
            { name: "Mehdipatnam", slug: "mehdipatnam" },
            { name: "Miyapur", slug: "miyapur" },
            { name: "Moosapet", slug: "moosapet" },
            { name: "Nagole", slug: "nagole" },
            { name: "Nallagandla", slug: "nallagandla" },
            { name: "Nampally", slug: "nampally" },
            { name: "Nizampet", slug: "nizampet" },
            { name: "Patancheru", slug: "patancheru" },
            { name: "Pragathi Nagar", slug: "pragathi-nagar" },
            { name: "Quthbullapur", slug: "quthbullapur" },
            { name: "Rajendra Nagar", slug: "rajendra-nagar" },
            { name: "Secunderabad", slug: "secunderabad" },
            { name: "Shamshabad", slug: "shamshabad" },
            { name: "Somajiguda", slug: "somajiguda" },
            { name: "Srinagar Colony", slug: "srinagar-colony" },
            { name: "Tarnaka", slug: "tarnaka" },
            { name: "Tolichowki", slug: "tolichowki" },
            { name: "Uppal", slug: "uppal" },
            { name: "Vanasthalipuram", slug: "vanasthalipuram" },
            { name: "Yapral", slug: "yapral" },
        ],
    },

    "delhi-ncr": {
        slug: "delhi-ncr",
        name: "Delhi NCR",
        state: "Delhi",
        metaTitle: "Packers and Movers in Delhi NCR | Globe Relocation Packers and Movers - Starting ₹2999",
        metaDescription:
            "Professional packers and movers in Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. Trusted relocation services across NCR. Safe, insured shifting starting at ₹2999. Get instant quote.",
        heroTitle: "Premium Packers and Movers in Delhi NCR",
        heroDescription:
            "Globe Relocation Packers and Movers offers comprehensive moving solutions across Delhi NCR—from Connaught Place to Cyber City Gurgaon, Dwarka to Noida Expressway. Our expert teams handle residential moves, corporate relocations, and international shipping with military precision. With bonded warehouses, climate-controlled transport, and 24/7 tracking, your move is in safe hands. Pricing starts at ₹2999.",
        priceStarting: "₹2999",
        phoneNumber: "+917988859067",
        coordinates: {
            lat: 28.7041,
            lng: 77.1025,
        },
        highlights: [
            "Pan-NCR coverage: Delhi, Gurgaon, Noida, Faridabad, Ghaziabad",
            "Express metro-to-metro relocation services",
            "Specialized corporate office shifting",
            "Customs-compliant international packing",
            "Secure storage facilities across NCR",
            "Real-time GPS tracking and WhatsApp updates",
        ],
        subLocations: [
            // Delhi
            { name: "Connaught Place", slug: "connaught-place" },
            { name: "Dwarka", slug: "dwarka" },
            { name: "Rohini", slug: "rohini" },
            { name: "Pitampura", slug: "pitampura" },
            { name: "Janakpuri", slug: "janakpuri" },
            { name: "Laxmi Nagar", slug: "laxmi-nagar" },
            { name: "Mayur Vihar", slug: "mayur-vihar" },
            { name: "Preet Vihar", slug: "preet-vihar" },
            { name: "Saket", slug: "saket" },
            { name: "Vasant Kunj", slug: "vasant-kunj" },
            { name: "Greater Kailash", slug: "greater-kailash" },
            { name: "Nehru Place", slug: "nehru-place" },
            { name: "Karol Bagh", slug: "karol-bagh" },
            { name: "Rajouri Garden", slug: "rajouri-garden" },
            { name: "Punjabi Bagh", slug: "punjabi-bagh" },
            { name: "Paschim Vihar", slug: "paschim-vihar" },
            { name: "Uttam Nagar", slug: "uttam-nagar" },
            { name: "Vikaspuri", slug: "vikaspuri" },

            // Gurgaon
            { name: "DLF Phase 1", slug: "dlf-phase-1" },
            { name: "DLF Phase 2", slug: "dlf-phase-2" },
            { name: "DLF Phase 3", slug: "dlf-phase-3" },
            { name: "DLF Phase 4", slug: "dlf-phase-4" },
            { name: "DLF Phase 5", slug: "dlf-phase-5" },
            { name: "Cyber City", slug: "cyber-city" },
            { name: "Golf Course Road", slug: "golf-course-road" },
            { name: "Sohna Road", slug: "sohna-road" },
            { name: "MG Road Gurgaon", slug: "mg-road-gurgaon" },
            { name: "Sector 14 Gurgaon", slug: "sector-14-gurgaon" },
            { name: "Sector 29 Gurgaon", slug: "sector-29-gurgaon" },
            { name: "Sector 56 Gurgaon", slug: "sector-56-gurgaon" },

            // Noida
            { name: "Sector 18 Noida", slug: "sector-18-noida" },
            { name: "Sector 62 Noida", slug: "sector-62-noida" },
            { name: "Sector 63 Noida", slug: "sector-63-noida" },
            { name: "Greater Noida", slug: "greater-noida" },
            { name: "Noida Extension", slug: "noida-extension" },
            { name: "Sector 76 Noida", slug: "sector-76-noida" },
            { name: "Sector 137 Noida", slug: "sector-137-noida" },

            // Faridabad
            { name: "Faridabad Sector 15", slug: "faridabad-sector-15" },
            { name: "Faridabad NIT", slug: "faridabad-nit" },
            { name: "Greater Faridabad", slug: "greater-faridabad" },

            // Ghaziabad
            { name: "Indirapuram", slug: "indirapuram" },
            { name: "Vaishali Ghaziabad", slug: "vaishali-ghaziabad" },
            { name: "Crossings Republik", slug: "crossings-republik" },
            { name: "Raj Nagar Extension", slug: "raj-nagar-extension" },
        ],
    },

    kolar: {
        slug: "kolar",
        name: "Kolar",
        state: "Karnataka",
        metaTitle: "Packers and Movers in Kolar | Globe Relocation Packers and Movers - Starting ₹2999",
        metaDescription:
            "Professional packers and movers in Kolar. Trusted relocation services across all areas of Kolar and KGF. Safe, insured, and affordable shifting starting at ₹2999. Get instant WhatsApp quote.",
        heroTitle: "Premium Packers and Movers in Kolar",
        heroDescription:
            "Globe Relocation Packers and Movers provides reliable and professional relocation services in Kolar. Whether you are moving within Kolar city, relocating to Kolar Gold Fields (KGF), or moving to other parts of Karnataka, our expert team ensures your belongings are handled with care. Transparent pricing starts at just ₹2999.",
        priceStarting: "₹2999",
        phoneNumber: "+917988859067",
        coordinates: {
            lat: 13.1367,
            lng: 78.1292,
        },
        highlights: [
            "Local moving experts in Kolar and KGF",
            "Safe and secure packing for all household items",
            "Specialized transport for silk and agricultural products",
            "Real-time tracking for every move",
            "Experienced crew familiar with Kolar district",
            "Transparent quotes with no hidden costs",
        ],
        subLocations: [
            { name: "Kolar City", slug: "kolar-city" },
            { name: "Kolar Gold Fields", slug: "kolar-gold-fields" },
            { name: "Bangarapet", slug: "bangarapet" },
            { name: "Malur", slug: "malur" },
            { name: "Mulbagal", slug: "mulbagal" },
            { name: "Srinivaspur", slug: "srinivaspur" },
            { name: "Bethamangala", slug: "bethamangala" },
            { name: "Robertsonpet", slug: "robertsonpet" },
        ],
    },
};

/**
 * Build a slug from a display name.
 * e.g. "Navi Mumbai" -> "navi-mumbai", "Hubli-Dharwad" -> "hubli-dharwad"
 */
export const slugifyCity = (name: string): string =>
    name
        .toLowerCase()
        .trim()
        .replace(/&/g, "and")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const DEFAULT_INDIA_COORDS = { lat: 20.5937, lng: 78.9629 };

/**
 * Factory for a lightweight city entry. Generates SEO copy, hero text, and
 * highlights from the name so new cities get a complete page with no
 * sub-locality list required.
 */
const createCity = (
    name: string,
    state: string,
    coordinates: { lat: number; lng: number } = DEFAULT_INDIA_COORDS
): CityLocation => {
    const slug = slugifyCity(name);
    return {
        slug,
        name,
        state,
        metaTitle: `Packers and Movers in ${name} | Globe Relocation Packers and Movers - Starting ₹2999`,
        metaDescription: `Trusted packers and movers in ${name}, ${state}. Professional house shifting, office relocation, and vehicle transport with safe packing, insured transit, and on-time delivery. Get an instant quote starting at ₹2999.`,
        heroTitle: `Best Packers and Movers in ${name}`,
        heroDescription: `Globe Relocation Packers and Movers delivers reliable, stress-free relocation across ${name}, ${state}. From household shifting and office relocation to car and bike transportation, our trained crew handles every move with premium packing, GPS-tracked transit, and transparent pricing starting at just ₹2999.`,
        priceStarting: "₹2999",
        phoneNumber: "+917988859067",
        coordinates,
        highlights: [
            `100% Safe & Secure Household Shifting in ${name}`,
            "Professional Office Relocation with Minimal Downtime",
            "Expert Packing using Premium Quality Materials",
            "Live GPS Tracking for All Moving Vehicles",
            "Car & Bike Transportation with Door-to-Door Service",
            "Transparent Pricing with No Hidden Charges",
            "24/7 Customer Support & Move Coordination",
            "Transit Insurance for Every Move",
        ],
        subLocations: [],
    };
};

/**
 * Additional cities surfaced on the homepage "Search By Location" grid.
 * These get a full SEO page via the generic city template. Cities that
 * already have rich entries above (Bangalore, Hyderabad, Delhi NCR) are
 * intentionally omitted here.
 */
const ADDITIONAL_CITIES: CityLocation[] = [
    createCity("Mumbai", "Maharashtra", { lat: 19.076, lng: 72.8777 }),
    createCity("Navi Mumbai", "Maharashtra", { lat: 19.033, lng: 73.0297 }),
    createCity("Pune", "Maharashtra", { lat: 18.5204, lng: 73.8567 }),
    createCity("Nagpur", "Maharashtra", { lat: 21.1458, lng: 79.0882 }),
    createCity("Nashik", "Maharashtra", { lat: 19.9975, lng: 73.7898 }),
    createCity("Aurangabad", "Maharashtra", { lat: 19.8762, lng: 75.3433 }),
    createCity("Solapur", "Maharashtra", { lat: 17.6599, lng: 75.9064 }),
    createCity("Chennai", "Tamil Nadu", { lat: 13.0827, lng: 80.2707 }),
    createCity("Coimbatore", "Tamil Nadu", { lat: 11.0168, lng: 76.9558 }),
    createCity("Madurai", "Tamil Nadu", { lat: 9.9252, lng: 78.1198 }),
    createCity("Kolkata", "West Bengal", { lat: 22.5726, lng: 88.3639 }),
    createCity("Howrah", "West Bengal", { lat: 22.5958, lng: 88.2636 }),
    createCity("Siliguri", "West Bengal", { lat: 26.7271, lng: 88.3953 }),
    createCity("Ahmedabad", "Gujarat", { lat: 23.0225, lng: 72.5714 }),
    createCity("Surat", "Gujarat", { lat: 21.1702, lng: 72.8311 }),
    createCity("Vadodara", "Gujarat", { lat: 22.3072, lng: 73.1812 }),
    createCity("Rajkot", "Gujarat", { lat: 22.3039, lng: 70.8022 }),
    createCity("Jaipur", "Rajasthan", { lat: 26.9124, lng: 75.7873 }),
    createCity("Jodhpur", "Rajasthan", { lat: 26.2389, lng: 73.0243 }),
    createCity("Kota", "Rajasthan", { lat: 25.2138, lng: 75.8648 }),
    createCity("Indore", "Madhya Pradesh", { lat: 22.7196, lng: 75.8577 }),
    createCity("Bhopal", "Madhya Pradesh", { lat: 23.2599, lng: 77.4126 }),
    createCity("Gwalior", "Madhya Pradesh", { lat: 26.2183, lng: 78.1828 }),
    createCity("Jabalpur", "Madhya Pradesh", { lat: 23.1815, lng: 79.9864 }),
    createCity("Raipur", "Chhattisgarh", { lat: 21.2514, lng: 81.6296 }),
    createCity("Ranchi", "Jharkhand", { lat: 23.3441, lng: 85.3096 }),
    createCity("Jamshedpur", "Jharkhand", { lat: 22.8046, lng: 86.2029 }),
    createCity("Dhanbad", "Jharkhand", { lat: 23.7957, lng: 86.4304 }),
    createCity("Ludhiana", "Punjab", { lat: 30.901, lng: 75.8573 }),
    createCity("Amritsar", "Punjab", { lat: 31.634, lng: 74.8723 }),
    createCity("Chandigarh", "Chandigarh", { lat: 30.7333, lng: 76.7794 }),
    createCity("Faridabad", "Haryana", { lat: 28.4089, lng: 77.3178 }),
    createCity("Gurugram", "Haryana", { lat: 28.4595, lng: 77.0266 }),
    createCity("Ghaziabad", "Uttar Pradesh", { lat: 28.6692, lng: 77.4538 }),
    createCity("Meerut", "Uttar Pradesh", { lat: 28.9845, lng: 77.7064 }),
    createCity("Allahabad", "Uttar Pradesh", { lat: 25.4358, lng: 81.8463 }),
    createCity("Bareilly", "Uttar Pradesh", { lat: 28.367, lng: 79.4304 }),
    createCity("Visakhapatnam", "Andhra Pradesh", { lat: 17.6868, lng: 83.2185 }),
    createCity("Vijayawada", "Andhra Pradesh", { lat: 16.5062, lng: 80.648 }),
    createCity("Hubli-Dharwad", "Karnataka", { lat: 15.3647, lng: 75.124 }),
    createCity("Srinagar", "Jammu & Kashmir", { lat: 34.0837, lng: 74.7973 }),
];

// Merge generated cities into the registry without clobbering rich entries.
ADDITIONAL_CITIES.forEach((city) => {
    if (!LOCATIONS[city.slug]) {
        LOCATIONS[city.slug] = city;
    }
});

/**
 * Aliases for homepage names that should point at an existing rich page
 * instead of a generated one (e.g. "Delhi" -> the Delhi NCR page).
 */
const CITY_NAME_ALIASES: Record<string, string> = {
    delhi: "delhi-ncr",
};

/**
 * Resolve a homepage display name to a city page URL, if a page exists.
 * Returns undefined when there is no matching city (caller can fall back).
 */
export const getCityUrlByName = (name: string): string | undefined => {
    const slug = CITY_NAME_ALIASES[slugifyCity(name)] ?? slugifyCity(name);
    return LOCATIONS[slug] ? getCityUrl(slug) : undefined;
};

export const getAllCitySlugs = (): string[] => {
    return Object.keys(LOCATIONS);
};

export const getCityBySlug = (slug: string): CityLocation | undefined => {
    return LOCATIONS[slug];
};

export const getAllLocalityPaths = (): Array<{ city: string; locality: string }> => {
    const paths: Array<{ city: string; locality: string }> = [];

    Object.values(LOCATIONS).forEach((city) => {
        city.subLocations.forEach((locality) => {
            paths.push({
                city: city.slug,
                locality: locality.slug
            });
        });
    });

    return paths;
};

export const getLocalityBySlug = (
    citySlug: string,
    localitySlug: string
): { city: CityLocation; locality: SubLocation } | undefined => {
    const city = LOCATIONS[citySlug];
    if (!city) return undefined;

    const locality = city.subLocations.find((loc) => loc.slug === localitySlug);
    if (!locality) return undefined;

    return { city, locality };
};

// SEO-friendly URL helpers
const SEO_URL_PREFIX = 'packers-and-movers';

/**
 * Generate SEO-friendly URL for a city page
 * e.g., "bangalore" -> "/packers-and-movers-bangalore"
 */
export const getCityUrl = (citySlug: string): string => {
    return `/${SEO_URL_PREFIX}-${citySlug}`;
};

/**
 * Generate SEO-friendly URL for a locality page
 * e.g., ("bangalore", "koramangala") -> "/packers-and-movers-bangalore-koramangala"
 */
export const getLocalityUrl = (citySlug: string, localitySlug: string): string => {
    // We now use the long form for all cities to ensure consistent canonicalization
    return `/${SEO_URL_PREFIX}-${citySlug}-${localitySlug}`;
};

/**
 * Parse SEO-friendly URL slug to extract city
 * e.g., "packers-and-movers-bangalore" -> "bangalore"
 */
export const parseCityFromUrl = (urlSlug: string): string | undefined => {
    const prefix = `${SEO_URL_PREFIX}-`;
    if (!urlSlug.startsWith(prefix)) return undefined;
    const remainder = urlSlug.replace(prefix, '');
    if (Object.keys(LOCATIONS).includes(remainder)) {
        return remainder;
    }
    return undefined;
};

/**
 * Parse SEO-friendly URL slug to extract city and locality
 * e.g., "packers-and-movers-bangalore-koramangala" -> { citySlug: "bangalore", localitySlug: "koramangala" }
 * e.g., "packers-and-movers-jp-nagar" -> { citySlug: "bangalore", localitySlug: "jp-nagar" }
 */
export const parseLocalityFromUrl = (urlSlug: string): { citySlug: string; localitySlug: string } | undefined => {
    const prefix = `${SEO_URL_PREFIX}-`;
    if (!urlSlug.startsWith(prefix)) return undefined;

    const remainder = urlSlug.replace(prefix, '');

    // 1. Try to find matching city and locality combination (e.g. city-locality)
    for (const citySlug of Object.keys(LOCATIONS)) {
        if (remainder.startsWith(`${citySlug}-`)) {
            const localitySlug = remainder.replace(`${citySlug}-`, '');
            const city = LOCATIONS[citySlug];
            const locality = city.subLocations.find(loc => loc.slug === localitySlug);
            if (locality) {
                return { citySlug, localitySlug };
            }
        }
    }

    // 2. Try to find if it's a direct locality slug (defaults to Bangalore for SEO keywords)
    const bangalore = LOCATIONS['bangalore'];
    const locality = bangalore.subLocations.find(loc => loc.slug === remainder);
    if (locality) {
        return { citySlug: 'bangalore', localitySlug: remainder };
    }

    return undefined;
};

/**
 * Get all SEO-friendly city paths for static generation
 */
export const getAllCityPaths = (): string[] => {
    return Object.keys(LOCATIONS).map(slug => `${SEO_URL_PREFIX}-${slug}`);
};

/**
 * Get all SEO-friendly locality paths for static generation
 */
export const getAllLocalitySEOPaths = (): string[] => {
    const paths: string[] = [];

    Object.values(LOCATIONS).forEach((city) => {
        city.subLocations.forEach((locality) => {
            // Include both long and short paths for Bangalore for maximum SEO coverage
            if (city.slug === 'bangalore') {
                paths.push(`${SEO_URL_PREFIX}-${locality.slug}`);
            }
            paths.push(`${SEO_URL_PREFIX}-${city.slug}-${locality.slug}`);
        });
    });

    return paths;
};

/**
 * Group all cities by state for the Locations index page.
 * Returns a record keyed by state name, each value being an array of cities in that state.
 */
export const getCitiesGroupedByState = (): Record<string, CityLocation[]> => {
    const grouped: Record<string, CityLocation[]> = {};
    Object.values(LOCATIONS).forEach((city) => {
        if (!grouped[city.state]) grouped[city.state] = [];
        grouped[city.state].push(city);
    });
    // Sort cities within each state alphabetically
    Object.values(grouped).forEach((cities) => {
        cities.sort((a, b) => a.name.localeCompare(b.name));
    });
    return grouped;
};

