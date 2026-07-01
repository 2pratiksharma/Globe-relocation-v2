/**
 * Company Information — Single source of truth.
 * Update these values once and they propagate across the entire site.
 */

export const COMPANY = {
    // ─── Legal / Registration ───
    name: "Globe Relocation Packers & Movers Banglore Pvt. Ltd.",
    shortName: "Globe Relocation",
    gstNumber: "29NXWPAS6709G2Z6",           // TODO: Replace with actual GST
    cinNumber: "U74999KA2024PTC000000",     // TODO: Replace with actual CIN
    panNumber: "AABCG1234A",                // TODO: Replace with actual PAN
    ibaApproval: "IBA Approved",

    // ─── Founding & Stats ───
    foundedYear: 2018,                      // TODO: Replace with actual year
    totalMoves: "5,000+",                   // TODO: Replace with actual count
    citiesCovered: "50+",
    happyCustomers: "4,500+",
    yearsExperience: 8,                     // TODO: Replace with actual years
    rating: "4.9",
    totalReviews: "1,200+",

    // ─── Contact ───
    phone: "+91 80001 89153",
    phoneRaw: "+918000189153",
    email: "support@globerelo.in",
    emailInfo: "info@globerelocation.com",
    whatsappNumber: "918000189153",

    // ─── Address ───
    address: {
        line1: "55, 1st Cross Rd, Prasanth Layout",
        line2: "Prasanth Extension, Whitefield",
        line3: "Bengaluru",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560066",
        country: "India",
    },

    // ─── Online ───
    website: "https://globerelo.in",
    logoUrl: "https://ik.imagekit.io/khibl45oa/Logo.png",

    // ─── Social Media ───
    social: {
        facebook: "https://www.facebook.com/profile.php?id=61591215602710",
        instagram: "https://www.instagram.com/globerelocationpackersandmover/",
        linkedin: "https://www.linkedin.com/company/globe-relocation",   // TODO: Replace with actual URL
        twitter: "https://x.com/globerelocation",                        // TODO: Replace with actual URL
        pinterest: "https://www.pinterest.com/globerelocation",           // TODO: Replace with actual URL
        youtube: "",                                                       // TODO: Add if available
    },

    // ─── Authors (for blog E-E-A-T) ───
    authors: {
        "Relocation Expert": {
            name: "Relocation Expert",
            title: "Senior Moving Consultant",
            bio: "With over 8 years of experience in the Indian relocation industry, our senior consultant has managed 2,000+ household and commercial moves across India.",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
        },
        "Move Coordinator": {
            name: "Move Coordinator",
            title: "Logistics & Move Planning Specialist",
            bio: "Our move coordination expert specializes in end-to-end logistics planning, ensuring every move is executed on time and within budget.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
        },
        "Logistics Manager": {
            name: "Logistics Manager",
            title: "Fleet & Route Optimization Manager",
            bio: "Managing a fleet of 50+ vehicles, our logistics manager has deep expertise in Bangalore's traffic patterns and optimal moving routes.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        },
        "Finance Expert": {
            name: "Finance Expert",
            title: "Pricing & Cost Analysis Specialist",
            bio: "Our pricing specialist helps customers understand the true cost of moving, with transparent breakdowns and no hidden charges.",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
        },
        "Relocation Strategist": {
            name: "Relocation Strategist",
            title: "Corporate & Residential Relocation Strategist",
            bio: "Specializing in both corporate and residential relocations, our strategist designs custom moving plans for seamless transitions.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
        },
    } as Record<string, { name: string; title: string; bio: string; avatar: string }>,
} as const;

/** Helper: Get full formatted address */
export function getFullAddress(): string {
    const a = COMPANY.address;
    return `${a.line1}, ${a.line2}, ${a.line3}, ${a.city}, ${a.state} - ${a.pincode}`;
}

/** Helper: Get WhatsApp URL with optional message */
export function getWhatsAppUrl(message?: string): string {
    const url = new URL(`https://wa.me/${COMPANY.whatsappNumber}`);
    if (message) url.searchParams.set("text", message);
    return url.toString();
}

/** Helper: Get author details by name */
export function getAuthor(name: string) {
    return COMPANY.authors[name] || COMPANY.authors["Relocation Expert"];
}
