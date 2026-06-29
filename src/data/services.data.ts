export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  title: string;
  slug: string;
  imgUrl: string;
  desc: string; // short desc for card
  heroDescription: string; // for the hero section
  aboutParagraphs: string[]; // for the main content
  processSteps: ServiceProcessStep[];
  features: ServiceFeature[];
  review: {
    text: string;
    author: string;
    location: string;
  };
  faqs: ServiceFaq[];
  icon: string;
}

export const servicesData: ServiceData[] = [
  {
    title: "Home Shifting",
    slug: "home-shifting",
    imgUrl: "https://ik.imagekit.io/khibl45oa/house_shifting.png",
    desc: "Professional home shifting services to carefully transport all your household belongings with care and precision.",
    heroDescription: "Relocate your entire home safely with our expert packers and movers. We pack, load, transport, unload, and reassemble everything — so you can move in with zero stress.",
    aboutParagraphs: [
      "Our company Globe Relocation is a leading service provider that offers quality home shifting services. To make sure that all your household items are packed, transported and conveyed to your new homestead, we hire trained professionals.",
      "With us, your valuables are safe as we employ high-quality packing materials and sophisticated methods of moving your items hence making us the most effective home shifting company.",
      "We can provide service packages to our clients that are affordable efficient and suited in response to your unique requirements. We arrange door-to-door moving services of packing and unpacking so that, you can move from your current home to the new one without any hustle. Another of our pillars we uphold hence guaranteeing that your items get to your new home at the right time.",
      "All our services are safe and efficient with particular emphasis on quality and affordable prices to give you a stress-free moving experience. Hire us for excellent home shifting services, and we will ensure your move to a new home is a joyful one."
    ],
    processSteps: [
      { title: "Dismantling & Packing", description: "We disassemble large furniture pieces and wrap each item in multiple layers of bubble sheet and cardboard boxes." },
      { title: "Safe Loading", description: "Our loading crew systematically places heavy furniture at the bottom of the truck and stacks lighter boxes on top." },
      { title: "Secure Transit", description: "Your goods are transported via our GPS-tracked container trucks to ensure on-time delivery with full highway safety." },
      { title: "Unloading & Reassembly", description: "We unload all boxes, unpack your furniture, and reassemble items like double beds and dining tables in your new rooms." }
    ],
    features: [
      { title: "Premium Packing", description: "We use high-quality bubble sheets, foam rolls, and heavy corrugated boxes.", icon: "box" },
      { title: "Furniture Reassembly", description: "Expert dismantling and setup of beds, wardrobes, and dining tables.", icon: "tools" },
      { title: "Trained Staff", description: "Polite and experienced movers who handle goods with care.", icon: "people" },
      { title: "No Hidden Charges", description: "Transparent quotes covering all packing, loading, toll, and taxes.", icon: "money" }
    ],
    review: {
      text: "Excellent service! I relocated my household items locally. The boys packed everything with double layers of bubble wrap. Nothing got damaged, and they reassembled our bed perfectly. Truly professional!",
      author: "Sneha Roy",
      location: "Bengaluru, India"
    },
    faqs: [
      { question: "Do you dismantle and reassemble double beds and wardrobes?", answer: "Yes. Our packing crew is equipped with tools to carefully disassemble large beds, wardrobes, and tables, and reassemble them at your new home." },
      { question: "What items are NOT packed or transported?", answer: "For safety, we do not transport hazardous materials, cylinders, gasoline, paint thinners, fireworks, jewelry, gold, cash, or important personal deeds and legal documents." },
      { question: "Do you offer packing-only or loading-only services?", answer: "We offer complete, end-to-end relocation packages to ensure safety. However, we can customize a plan based on your request." }
    ],
    icon: "FaHome"
  },
  {
    title: "Office Relocation",
    slug: "office-relocation",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2010_59_07%20AM.png?updatedAt=1782194171940",
    desc: "Seamless office relocation services designed to minimize disruption and ensure a smooth business transition.",
    heroDescription: "Relocate your business smoothly with zero downtime. We specialize in moving IT equipment, office furniture, and sensitive documents safely.",
    aboutParagraphs: [
      "Office relocation demands precision, speed, and careful handling to ensure minimal disruption to your business operations. Globe Relocation provides specialized corporate moving services tailored to your company's timeline.",
      "Our team is trained in handling IT infrastructure, servers, workstations, and heavy office furniture. We systematically label and pack everything to ensure quick setup at the new location.",
      "We assign dedicated move managers who coordinate with your administrative team to execute the relocation seamlessly over a weekend or overnight, getting you back to business quickly."
    ],
    processSteps: [
      { title: "Pre-Move Planning", description: "Detailed assessment of office inventory and timeline planning with minimal business disruption." },
      { title: "IT & Server Packing", description: "Specialized anti-static packing for computers, servers, monitors, and delicate electronics." },
      { title: "Secure Transport", description: "Dedicated closed-body trucks for safe transit of confidential documents and valuable equipment." },
      { title: "Setup & Arrangement", description: "Unpacking and strategic placement of desks, chairs, and IT systems as per the new floor plan." }
    ],
    features: [
      { title: "Zero Downtime", description: "Weekend and overnight moving options to keep your business running.", icon: "clock" },
      { title: "Secure Data Transit", description: "Confidential handling of sensitive files and server equipment.", icon: "shield" },
      { title: "Dedicated Manager", description: "Single point of contact for seamless coordination.", icon: "people" },
      { title: "Custom Crating", description: "Special wooden crates for heavy and expensive office machinery.", icon: "box" }
    ],
    review: {
      text: "Our office relocation was seamless and well-organized. Great service and very cooperative staff. We had zero downtime on Monday morning!",
      author: "Amit Verma",
      location: "Delhi, India"
    },
    faqs: [
      { question: "Can you move servers and IT racks?", answer: "Yes, we use specialized anti-static bubble wraps and custom crating for servers, ensuring they are transported securely." },
      { question: "Do you offer weekend moving?", answer: "Absolutely. We often recommend weekend or overnight moves for offices to prevent any loss of working hours." }
    ],
    icon: "FaBuilding"
  },
  {
    title: "Car Transportation",
    slug: "car-transportation",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_24_24%20AM.png?updatedAt=1782194171608",
    desc: "Safe and reliable car transportation services to ensure your vehicle reaches its destination without hassle.",
    heroDescription: "Transport your car securely across India with our modern fleet of specialized enclosed car carriers. Door-to-door delivery with zero driving.",
    aboutParagraphs: [
      "Transporting your beloved car requires trust and professional handling. Globe Relocation offers dedicated car carrier services designed to keep your vehicle safe from weather, dust, and transit damages.",
      "We use hydraulic ramps for safe loading and secure your car with specialized wheel chocks and lashing belts inside our enclosed carriers, ensuring absolute immobility during transport.",
      "With comprehensive transit insurance and real-time tracking, you can have complete peace of mind while your vehicle travels to its new destination."
    ],
    processSteps: [
      { title: "Vehicle Inspection", description: "Detailed condition report generated with photographs before loading." },
      { title: "Safe Loading", description: "Careful loading onto our customized car carriers using hydraulic ramps." },
      { title: "Securing", description: "Locking the wheels using modern lashing belts and chocks to prevent any movement." },
      { title: "Door Delivery", description: "Safe unloading and handover of the vehicle at your specified destination." }
    ],
    features: [
      { title: "Enclosed Carriers", description: "Protection from weather, dust, and road debris during transit.", icon: "truck" },
      { title: "Door to Door", description: "We pick up from your home and deliver to your new address.", icon: "map" },
      { title: "Fully Insured", description: "Comprehensive coverage against transit damages.", icon: "shield" },
      { title: "Real-time Tracking", description: "GPS enabled fleets to keep you updated on location.", icon: "gps" }
    ],
    review: {
      text: "Smooth car transportation experience. My SUV was delivered without a single scratch. The team kept me updated throughout the process. Highly recommended!",
      author: "Priya Mehta",
      location: "Mumbai, India"
    },
    faqs: [
      { question: "Can I pack my personal items inside the car?", answer: "We strongly advise against keeping personal or valuable items inside the car as they are not covered under transit insurance." },
      { question: "How long does intercity transport take?", answer: "Transit time varies based on distance, but typically ranges from 4 to 8 days across major Indian cities." }
    ],
    icon: "FaCarSide"
  },
  {
    title: "Bike Transportation",
    slug: "bike-transportation",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_18_30%20AM.png?updatedAt=1782194172843",
    desc: "Efficient bike transportation services tailored to ensure your bike reaches its destination safely and on time.",
    heroDescription: "Reliable and scratch-free two-wheeler relocation. We use specialized multi-layer packing and dedicated carriers for safe transit.",
    aboutParagraphs: [
      "Relocating your two-wheeler doesn't have to be stressful. Our bike transportation service uses industry-best packing techniques to prevent any scratches or damages.",
      "We carefully wrap your motorcycle or scooter with bubble wrap, corrugated sheets, and stretch film. Mirrors and fragile parts are given extra padding.",
      "Whether you are moving a commuter bike or a premium superbike, we handle it with the utmost care and secure it properly in our transit vehicles."
    ],
    processSteps: [
      { title: "Preparation", description: "Emptying fuel and removing detachable accessories like mirrors." },
      { title: "Multi-layer Packing", description: "Applying bubble wrap, foam sheets, and corrugated boxes for scratch protection." },
      { title: "Loading", description: "Loading the bike using ramps and securing it upright with strong ties." },
      { title: "Unpacking at Destination", description: "Safe unloading and unwrapping of the vehicle at your doorstep." }
    ],
    features: [
      { title: "Scratch-Free Packing", description: "Multi-layered materials to protect paint and parts.", icon: "box" },
      { title: "Fast Delivery", description: "Quick transit times for two-wheelers.", icon: "clock" },
      { title: "Affordable Rates", description: "Competitive pricing for local and intercity transport.", icon: "money" },
      { title: "Safe Handling", description: "Trained professionals experienced with heavy motorcycles.", icon: "people" }
    ],
    review: {
      text: "Excellent bike transportation service! My Royal Enfield was delivered safely and on time. Very professional team.",
      author: "Rohit Sharma",
      location: "Bengaluru, India"
    },
    faqs: [
      { question: "Do I need to empty the petrol tank?", answer: "Yes, for safety regulations, the fuel tank must be completely empty before we pack and load the bike." },
      { question: "Will you provide packing materials?", answer: "Yes, our team brings all necessary packing materials including bubble wraps, corrugated sheets, and tapes." }
    ],
    icon: "FaMotorcycle"
  },
  {
    title: "Warehouse & Storage",
    slug: "warehouse-and-storage",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_20_51%20AM.png?updatedAt=1782194173245",
    desc: "Safe and spacious warehouse and storage solutions to store your goods for short or long-term durations.",
    heroDescription: "Secure, clean, and climate-controlled warehousing solutions for your household or commercial goods. Flexible short and long-term storage.",
    aboutParagraphs: [
      "Need a safe place to store your belongings while between homes or offices? Globe Relocation offers premium warehouse and storage facilities.",
      "Our warehouses are highly secure, featuring 24/7 CCTV surveillance, fire protection systems, and regular pest control to ensure your items remain in pristine condition.",
      "You can store anything from household furniture and appliances to commercial inventory and documents, with flexible rental plans that suit your schedule."
    ],
    processSteps: [
      { title: "Inventory Check", description: "Detailed listing and tagging of all items entering the storage facility." },
      { title: "Protective Packing", description: "Specialized packing for long-term storage to prevent moisture or dust damage." },
      { title: "Safe Storage", description: "Placement in clean, designated storage units or pallets." },
      { title: "Easy Retrieval", description: "Quick un-packing and delivery whenever you request your items back." }
    ],
    features: [
      { title: "24/7 Security", description: "CCTV surveillance and guarded premises.", icon: "shield" },
      { title: "Pest Control", description: "Regular treatments to keep belongings safe.", icon: "tools" },
      { title: "Flexible Plans", description: "Pay-as-you-go monthly or weekly storage options.", icon: "money" },
      { title: "Climate Control", description: "Optimal environment for sensitive furniture and electronics.", icon: "box" }
    ],
    review: {
      text: "I kept my household goods in their warehouse for 6 months while I was abroad. Everything was returned to me in the exact same condition. Very reliable storage service.",
      author: "Vikram Singh",
      location: "Pune, India"
    },
    faqs: [
      { question: "Is my goods insured while in storage?", answer: "Yes, we provide warehouse insurance options to cover any unforeseen circumstances." },
      { question: "Can I access my belongings during the storage period?", answer: "Yes, you can access your items with prior notice so our team can retrieve your pallets safely." }
    ],
    icon: "FaWarehouse"
  },
  // Default values for other services
  {
    title: "Domestic Relocation",
    slug: "domestic-relocation",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_24_35%20AM.png?updatedAt=1782194173150",
    desc: "Comprehensive domestic relocation services to make moving within the country seamless and stress-free.",
    heroDescription: "Seamless Pan-India relocation services. We connect every major city with our robust logistics network.",
    aboutParagraphs: [
      "Moving to a different state can be challenging. Globe Relocation simplifies your long-distance move with our comprehensive domestic relocation services.",
      "We handle the entire logistics chain, from meticulous packing at origin to safe transport across highways, and finally unpacking at your new destination.",
      "Our wide network ensures we have local support in almost every major Indian city, making your transition smooth and predictable."
    ],
    processSteps: [
      { title: "Survey & Quote", description: "Free pre-move survey to estimate volume and logistics." },
      { title: "Expert Packing", description: "Export-quality packing to withstand long highway journeys." },
      { title: "Interstate Transport", description: "Use of heavy-duty closed containers for secure transit." },
      { title: "Delivery & Setup", description: "Unloading, unpacking, and debris removal at your new city." }
    ],
    features: [
      { title: "Pan-India Network", description: "Services available across all major cities and towns.", icon: "map" },
      { title: "GPS Tracking", description: "Live tracking of your shipment on the move.", icon: "gps" },
      { title: "Dedicated Vehicles", description: "Exclusive trucks for faster delivery without transshipment.", icon: "truck" },
      { title: "Full Insurance", description: "Comprehensive transit risk coverage.", icon: "shield" }
    ],
    review: {
      text: "Moved from Delhi to Chennai. The entire process was handled professionally. All my fragile items arrived safely.",
      author: "Karthik R.",
      location: "Chennai, India"
    },
    faqs: [
      { question: "How is the cost calculated for domestic moves?", answer: "Cost depends on the volume of goods, the distance between the cities, and the type of vehicle required." }
    ],
    icon: "FaTruck"
  },
  {
    title: "International Shifting",
    slug: "international-shifting",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_24_40%20AM.png?updatedAt=1782194173349",
    desc: "Expert international shifting services for smooth and stress-free cross-border relocations worldwide.",
    heroDescription: "Global relocation made simple. From customs clearance to sea and air freight, we manage your entire international move.",
    aboutParagraphs: [
      "Moving abroad involves complex logistics, paperwork, and strict customs regulations. Globe Relocation has the expertise to manage your international transition flawlessly.",
      "We provide end-to-end international moving services, coordinating air or sea freight, handling customs documentation, and partnering with trusted global agents for destination delivery.",
      "Our specialized export packing uses international standard materials to ensure your belongings survive long overseas journeys."
    ],
    processSteps: [
      { title: "Consultation & Planning", description: "Detailed planning regarding shipping modes, regulations, and timelines." },
      { title: "Export Packing", description: "Using ISPM-15 certified wooden crates and moisture-proof packing." },
      { title: "Customs Clearance", description: "Handling all origin and destination customs paperwork." },
      { title: "Global Delivery", description: "Partner networks delivering and unpacking at your new international home." }
    ],
    features: [
      { title: "Global Network", description: "Partners in over 100 countries.", icon: "globe" },
      { title: "Customs Support", description: "Expert handling of import/export documentation.", icon: "document" },
      { title: "Sea & Air Freight", description: "Flexible shipping options based on urgency and budget.", icon: "plane" },
      { title: "International Standard", description: "Highest grade export packing materials.", icon: "box" }
    ],
    review: {
      text: "Relocating to Dubai was a breeze thanks to the team. They handled all the documentation and the container arrived right on schedule.",
      author: "Neha Kapoor",
      location: "Dubai, UAE"
    },
    faqs: [
      { question: "Do you handle customs documentation?", answer: "Yes, our team assists with all necessary customs forms and documentation for both departure and arrival." }
    ],
    icon: "FaGlobeAmericas"
  },
  {
    title: "Corporate Shifting",
    slug: "corporate-shifting",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_27_38%20AM.png?updatedAt=1782195024858",
    desc: "Efficient corporate shifting solutions designed to minimize downtime and ensure smooth business transitions.",
    heroDescription: "Tailored corporate relocation services for shifting large enterprises and employee transfers securely and efficiently.",
    aboutParagraphs: [
      "Corporate relocations are large-scale projects requiring strategic planning. We handle comprehensive office moves and employee transfer programs for large businesses.",
      "Our services minimize business interruption. We work closely with facility managers to ensure the move happens on schedule and within budget.",
      "From moving heavy industrial equipment to handling massive IT setups, our corporate shifting division is equipped for challenges of any scale."
    ],
    processSteps: [
      { title: "Project Management", description: "Assigning a dedicated manager to plan the entire corporate move." },
      { title: "Systematic Packing", description: "Color-coded labeling and packing for different departments." },
      { title: "Logistics Execution", description: "Deploying multiple fleets to execute large-scale moves swiftly." },
      { title: "Post-Move Support", description: "Assisting with setup, debris removal, and final adjustments." }
    ],
    features: [
      { title: "Dedicated Manager", description: "Single point of contact for the entire project.", icon: "people" },
      { title: "Scalable Resources", description: "Ability to deploy large teams and multiple vehicles.", icon: "truck" },
      { title: "Employee Transfers", description: "Specialized packages for relocating your staff.", icon: "briefcase" },
      { title: "Minimal Disruption", description: "Strategic execution to protect your business continuity.", icon: "clock" }
    ],
    review: {
      text: "They managed our entire corporate headquarters move perfectly. The project management was top-notch.",
      author: "Rajesh Iyer, Operations Head",
      location: "Hyderabad, India"
    },
    faqs: [
      { question: "Can you handle moves involving hundreds of employees?", answer: "Yes, we specialize in large-scale corporate moves and have the resources to handle enterprise-level relocations." }
    ],
    icon: "FaBriefcase"
  },
  {
    title: "Intercity Shifting",
    slug: "intercity-shifting",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_30_50%20AM.png?updatedAt=1782195024718",
    desc: "Reliable intercity shifting services to move your goods securely between different cities with ease.",
    heroDescription: "Fast and reliable moving services between cities. We make sure your belongings travel safely across state borders.",
    aboutParagraphs: [
      "Moving from one city to another requires careful planning and robust transportation. Globe Relocation provides top-tier intercity shifting services.",
      "We ensure that your goods are packed securely to withstand the bumps of highway travel, using high-quality corrugated boxes and stretch films.",
      "Our dedicated customer support keeps you informed at every step of the journey until your goods arrive safely."
    ],
    processSteps: [
      { title: "Packing", description: "Multi-layer packing optimized for highway travel." },
      { title: "Loading", description: "Careful loading to optimize space and prevent movement." },
      { title: "Transport", description: "Direct transport using well-maintained vehicles." },
      { title: "Unloading", description: "Prompt unloading and unpacking at the destination city." }
    ],
    features: [
      { title: "Direct Transport", description: "No transshipment, reducing the risk of damages.", icon: "truck" },
      { title: "Real-time Updates", description: "Know exactly where your shipment is.", icon: "gps" },
      { title: "Skilled Drivers", description: "Experienced drivers familiar with national highways.", icon: "people" },
      { title: "Insurance Cover", description: "Full coverage for peace of mind.", icon: "shield" }
    ],
    review: {
      text: "Intercity move from Surat to Ahmedabad was incredibly smooth. Delivered on the exact promised date.",
      author: "Meera Patel",
      location: "Ahmedabad, India"
    },
    faqs: [
      { question: "Will my goods be shifted to another truck midway?", answer: "We prefer dedicated direct transport for full truckloads to avoid midway transshipment and minimize risk." }
    ],
    icon: "FaMapSigns"
  },
  {
    title: "Local Shifting",
    slug: "local-shifting",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_24_35%20AM.png?updatedAt=1782194173150",
    desc: "Quick and efficient local shifting services to transport your belongings within the city, hassle-free.",
    heroDescription: "Same-day local moving within your city. Swift, efficient, and affordable packing and moving solutions right in your neighborhood.",
    aboutParagraphs: [
      "Even moving a few blocks away requires heavy lifting and proper transport. Our local shifting service is designed for quick, same-day execution.",
      "We offer flexible packing options—you can pack your personal items while we handle the heavy furniture, or let us do it all.",
      "Our local teams know the city routes, traffic patterns, and building regulations, ensuring a swift and seamless move."
    ],
    processSteps: [
      { title: "Quick Packing", description: "Fast and efficient packing of household items." },
      { title: "Local Transport", description: "Navigating city traffic to reach the destination quickly." },
      { title: "Unloading", description: "Carrying items to your new apartment, even through narrow stairs." },
      { title: "Same-Day Setup", description: "Reassembling furniture so you can settle in immediately." }
    ],
    features: [
      { title: "Same-Day Service", description: "Complete the move within hours.", icon: "clock" },
      { title: "Local Expertise", description: "Familiarity with local building rules and routes.", icon: "map" },
      { title: "Affordable", description: "Cost-effective solutions for short distances.", icon: "money" },
      { title: "Flexible Packing", description: "Choose full packing or partial packing.", icon: "box" }
    ],
    review: {
      text: "Shifted within Mumbai in just 4 hours. The boys were very energetic and handled everything smoothly.",
      author: "Sanjay Gupta",
      location: "Mumbai, India"
    },
    faqs: [
      { question: "How quickly can a local move be arranged?", answer: "We can often accommodate local moves with just 24-48 hours notice, depending on availability." }
    ],
    icon: "FaMapMarkerAlt"
  },
  {
    title: "Logistic Services",
    slug: "logistic-services",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_35_07%20AM.png?updatedAt=1782195024665",
    desc: "Comprehensive logistic services to handle all your transportation and supply chain needs with efficiency.",
    heroDescription: "B2B logistics, freight forwarding, and supply chain solutions tailored to your business needs across India.",
    aboutParagraphs: [
      "Beyond residential moving, Globe Relocation offers robust commercial logistics and freight forwarding services for businesses.",
      "We manage supply chain operations, B2B goods transport, and warehousing distributions, ensuring your products reach the market efficiently.",
      "Our varied fleet sizes and tech-enabled tracking systems make us a reliable logistics partner for manufacturing and retail enterprises."
    ],
    processSteps: [
      { title: "Requirement Analysis", description: "Understanding your supply chain and freight needs." },
      { title: "Fleet Allocation", description: "Providing the right vehicle type (LCV to Heavy Trucks)." },
      { title: "Dispatch & Routing", description: "Optimizing routes for fast and cost-effective delivery." },
      { title: "Tracking & Delivery", description: "Monitoring the shipment till successful B2B delivery." }
    ],
    features: [
      { title: "Varied Fleet", description: "Trucks of all sizes for different cargo needs.", icon: "truck" },
      { title: "B2B Expertise", description: "Dedicated supply chain solutions.", icon: "briefcase" },
      { title: "Warehousing", description: "Integrated storage and distribution.", icon: "warehouse" },
      { title: "Tech-Enabled", description: "Live tracking and digital documentation.", icon: "gps" }
    ],
    review: {
      text: "They handle our regional distribution flawlessly. A very dependable logistics partner.",
      author: "Manish Sharma, Logistics Head",
      location: "Pune, India"
    },
    faqs: [
      { question: "Do you offer part-load (PTL) logistics?", answer: "Yes, we offer both Full Truck Load (FTL) and Part Truck Load (PTL) services depending on your cargo volume." }
    ],
    icon: "FaTruckLoading"
  },
  {
    title: "Pet Relocation",
    slug: "pet-relocation",
    imgUrl: "https://ik.imagekit.io/khibl45oa/ChatGPT%20Image%20Jun%2023,%202026,%2011_36_25%20AM.png?updatedAt=1782195024644",
    desc: "Caring and secure pet relocation services to ensure your pets travel comfortably and safely to any destination.",
    heroDescription: "Compassionate and safe pet relocation services. We make sure your furry family members travel with comfort and care.",
    aboutParagraphs: [
      "Your pets are family, and their safe relocation is our priority. Globe Relocation provides specialized pet moving services.",
      "We handle all the necessary health certificates, airline bookings, and proper IATA-approved travel crates to ensure a comfortable journey.",
      "Our pet handlers are trained to manage anxiety and ensure pets are well-fed and hydrated during transit."
    ],
    processSteps: [
      { title: "Health Check", description: "Ensuring vaccinations and vet health certificates are in place." },
      { title: "Crate Acclimation", description: "Providing an IATA-approved crate for the pet to get used to." },
      { title: "Comfortable Transit", description: "Transporting via air or specialized climate-controlled vehicles." },
      { title: "Reunion", description: "Safe delivery of your pet to your new home." }
    ],
    features: [
      { title: "IATA Crates", description: "Safe and approved travel kennels.", icon: "box" },
      { title: "Vet Assistance", description: "Help with documentation and health checks.", icon: "document" },
      { title: "Trained Handlers", description: "Compassionate staff who love animals.", icon: "people" },
      { title: "Updates", description: "Regular updates on your pet's journey.", icon: "gps" }
    ],
    review: {
      text: "I was so worried about moving my golden retriever to another state. Globe Relocation handled it with such care. He arrived happy and safe!",
      author: "Anjali Desai",
      location: "Chandigarh, India"
    },
    faqs: [
      { question: "Are pets sedated during travel?", answer: "No, airlines and our pet handlers strictly advise against sedation as it can cause health risks during transit." }
    ],
    icon: "FaPaw"
  }
];
