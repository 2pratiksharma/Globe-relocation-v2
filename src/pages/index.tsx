import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import type { IconType } from "react-icons";
import { FaCheckCircle, FaTruck, FaGlobe, FaWarehouse, FaShieldAlt, FaMapMarkerAlt, FaRegClock, FaThumbsUp, FaPhoneAlt, FaWhatsapp, FaHeadset, FaStar, FaUserFriends, FaCommentDots, FaRegFileAlt, FaPlus, FaTimes, FaBoxOpen, FaCalendarAlt, FaRegCreditCard, FaInfoCircle, FaCommentAlt, FaHeadphones, FaTag, FaArrowRight, FaRupeeSign, FaTruckMoving, FaHome, FaBuilding, FaCarSide, FaMotorcycle, FaGlobeAmericas, FaBriefcase, FaMapSigns, FaTruckLoading, FaPaw, FaBed, FaBorderAll, FaChair, FaTv, FaSnowflake, FaTshirt, FaBoxes, FaPlug, FaCouch, FaUtensils, FaWineGlassAlt, FaBlender, FaDumbbell, FaSearch, FaArrowLeft, FaBicycle, FaMusic, FaDesktop, FaLeaf } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";
import Seo, { SITE_URL, SITE_NAME } from "@/components/Seo";

import { servicesData as services } from "@/data/services.data";
import { getCityUrlByName } from "@/data/locations.data";

/* ----------------------------------------------------------------
   Scroll animation presets (Framer Motion) — mobile + desktop
   GPU-friendly transforms (opacity / translate / scale) so they
   stay buttery on phones. `once: true` keeps things calm on reveal.
----------------------------------------------------------------- */
const easeStandard = [0.22, 0.61, 0.36, 1] as const;
const easeOutBack = [0.34, 1.4, 0.5, 1] as const;

// Eye-catching heading reveal: rises + sharpens from a soft blur
const headerReveal = {
  initial: { opacity: 0, y: 40, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: easeStandard } },
  viewport: { once: true, amount: 0.4 },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeStandard } },
  viewport: { once: true, amount: 0.25 },
};

const fromLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeStandard } },
  viewport: { once: true, amount: 0.3 },
};

const fromRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeStandard } },
  viewport: { once: true, amount: 0.3 },
};

// Parent that staggers its children as the group scrolls into view
const staggerParent = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
  variants: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  },
};

// A card that pops up + scales in with a gentle overshoot
const popCard = {
  hidden: { opacity: 0, y: 50, scale: 0.85 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: easeOutBack } },
};

// Lighter item for dense lists (locations / feature chips)
const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeStandard } },
};

const benefits = [
  { title: "100% Safe", icon: FaShieldAlt, desc: "Premium packing materials" },
  { title: "On-Time", icon: FaRegClock, desc: "Punctual delivery schedule" },
  { title: "Affordable", icon: FaThumbsUp, desc: "Best pricing guaranteed" },
  { title: "Pan India", icon: FaMapMarkerAlt, desc: "Extensive network coverage" },
];

const faqs = [
  { q: "What services do you provide?", a: "We offer bike transportation, car transportation, home shifting, office relocation, warehousing, pet relocation, and more.", icon: FaRegFileAlt },
  { q: "How do I get a quote for my move?", a: "You can get a free quotation by filling out the form on our homepage or by calling our support number directly.", icon: FaBoxOpen },
  { q: "How far in advance should I book?", a: "We recommend booking at least 3-7 days in advance to ensure availability and smooth planning.", icon: FaCalendarAlt },
  { q: "Is my goods and vehicle insured?", a: "Yes, we provide comprehensive transit insurance to ensure your goods and vehicles are fully protected against any unforeseen circumstances.", icon: FaShieldAlt },
  { q: "Do you provide door-to-door service?", a: "Absolutely! We handle the entire process from packing at your current location to unloading and unpacking at your new destination.", icon: FaMapMarkerAlt },
  { q: "Can I track my shipment?", a: "Yes, our modern GPS-enabled fleet allows you to track your shipment in real-time. You can also reach out to our support team for live updates.", icon: FaHeadphones },
  { q: "What payment methods do you accept?", a: "We accept payments via UPI, credit/debit cards, net banking, and cash. Payment terms may vary for corporate bookings.", icon: FaRegCreditCard },
  { q: "What if something gets damaged?", a: "While we take extreme care, in the rare event of damage, our comprehensive insurance covers your goods, and our claims process is quick and transparent.", icon: FaCommentAlt },
];

const locations = [
  "Aurangabad", "Chandigarh", "Dhanbad", "Gwalior", "Hyderabad", "Jodhpur",
  "Kota", "Meerut", "Navi Mumbai", "Rajkot", "Siliguri", "Vijayawada",
  "Ahmedabad", "Bangalore", "Chennai", "Faridabad", "Gurugram", "Indore",
  "Jamshedpur", "Mumbai", "Ranchi", "Surat", "Visakhapatnam", "Allahabad",
  "Bareilly", "Coimbatore", "Ghaziabad", "Howrah", "Jabalpur", "Ludhiana",
  "Nagpur", "Pune", "Solapur", "Vadodara", "Amritsar", "Bhopal",
  "Delhi", "Hubli-Dharwad", "Jaipur", "Kolkata", "Madurai", "Nashik",
  "Raipur", "Srinagar"
];

/* ----------------------------------------------------------------
   Bangalore → domestic city shifting price list.
   `base` is the lowest 1 BHK starting fare (used for the marquee
   "starting from" chip); the bhk1/bhk2/bhk3/few ranges feed the
   full pricing table inside the modal.
----------------------------------------------------------------- */
const bangalorePricing = [
  { to: "Delhi NCR", base: 13000, bhk1: "13,000 - 22,000", bhk2: "15,000 - 30,000", bhk3: "20,000 - 35,000", few: "9,000 - 18,000" },
  { to: "Hyderabad", base: 10000, bhk1: "10,000 - 20,000", bhk2: "13,000 - 27,000", bhk3: "15,000 - 30,000", few: "5,000 - 11,000" },
  { to: "Mumbai", base: 10000, bhk1: "10,000 - 21,000", bhk2: "13,000 - 25,000", bhk3: "18,000 - 31,000", few: "7,000 - 12,000" },
  { to: "Chennai", base: 11000, bhk1: "11,000 - 17,000", bhk2: "14,000 - 20,000", bhk3: "18,000 - 26,000", few: "5,000 - 10,000" },
  { to: "Kolkata", base: 18000, bhk1: "18,000 - 25,000", bhk2: "26,000 - 36,000", bhk3: "33,000 - 40,000", few: "9,000 - 15,000" },
  { to: "Ahmedabad", base: 25000, bhk1: "25,000 - 30,000", bhk2: "35,000 - 41,000", bhk3: "39,000 - 47,000", few: "10,000 - 20,000" },
  { to: "Chandigarh", base: 15000, bhk1: "15,000 - 23,000", bhk2: "17,000 - 31,000", bhk3: "22,000 - 36,000", few: "10,000 - 20,000" },
  { to: "Vadodara", base: 26000, bhk1: "26,000 - 31,000", bhk2: "36,000 - 42,000", bhk3: "40,000 - 48,000", few: "11,000 - 20,000" },
  { to: "Pune", base: 11000, bhk1: "11,000 - 19,000", bhk2: "22,000 - 28,000", bhk3: "23,000 - 30,000", few: "6,000 - 10,000" },
  { to: "Lucknow", base: 13000, bhk1: "13,000 - 22,000", bhk2: "14,000 - 31,000", bhk3: "21,000 - 36,000", few: "10,000 - 18,000" },
  { to: "Navi Mumbai", base: 11000, bhk1: "11,000 - 21,000", bhk2: "13,000 - 26,000", bhk3: "18,000 - 31,000", few: "7,000 - 13,000" },
  { to: "Surat", base: 26000, bhk1: "26,000 - 32,000", bhk2: "35,000 - 42,000", bhk3: "40,000 - 48,000", few: "11,000 - 20,000" },
  { to: "Jaipur", base: 15000, bhk1: "15,000 - 23,000", bhk2: "17,000 - 30,000", bhk3: "20,000 - 34,000", few: "8,000 - 18,000" },
];

// Indian-format number helper (₹13,000 etc.)
const inr = (n: number) => n.toLocaleString("en-IN");

// Maps the icon name stored in services.data to its react-icons component
const serviceIconMap: Record<string, IconType> = {
  FaHome, FaBuilding, FaCarSide, FaMotorcycle, FaWarehouse, FaTruck,
  FaGlobeAmericas, FaGlobe, FaBriefcase, FaMapSigns, FaMapMarkerAlt,
  FaTruckLoading, FaPaw,
};

/* ----------------------------------------------------------------
   Booking Wizard — 3-step quote flow inserted below the marquee.
----------------------------------------------------------------- */
type SubCategory = { name: string; icon: IconType; items: string[] };
type InventoryCategory = { category: string; subcategories: SubCategory[] };

const inventoryData: InventoryCategory[] = [
  {
    category: "Bedrooms",
    subcategories: [
      { name: "Bed", icon: FaBed, items: ["Baby Wooden Bed", "Bunk Bed - Dismantlable", "Cradle - Dismantlable", "Diwan Cum Bed", "Double Bed - Dismantlable", "King Size Bed - With Storage", "King Size Bed - Without Storage", "Queen Size Bed - With Storage", "Queen Size Bed - Without Storage", "Single Bed - Foldable", "Single Bed - With Storage", "Single Bed - Without Storage", "Single Bed Non Storage - Dismantlable", "Single Bed Storage - Dismantlable"] },
      { name: "Mattress", icon: FaBed, items: ["Double Bed Mattress - Foldable", "Double Bed Mattress - Non Foldable", "Single Bed Mattress - Foldable", "Single Bed Mattress - Non Foldable"] },
      { name: "Table", icon: FaBorderAll, items: ["Bed Side Table", "Center Table", "Study / Computer Table"] },
      { name: "Chair", icon: FaChair, items: ["Arm Chair", "Bean Bag / Pouffe", "Office Chair"] },
      { name: "Television", icon: FaTv, items: ['LCD/LED 52" - 65"', 'LCD/LED 65" & Above', 'LCD/LED TV 40" & Below', 'LCD/LED TV 42" - 50"', 'LCD/LED TV 52" & Above', "Regular TV (Old Model)"] },
      { name: "Air Conditioner", icon: FaSnowflake, items: ["Split Air Conditioner (AC)", "Window Air Conditioner (AC)"] },
      { name: "Almirah / Wardrobe", icon: FaTshirt, items: ["Double Door Wardrobe", "Five Door Wardrobe", "Four Door Wardrobe", "Single Door Wardrobe", "Sliding Door Wardrobe", "Steel Almirah Large", "Steel Almirah Medium", "Triple Door Wardrobe"] },
      { name: "Cabinet & Storage", icon: FaBoxes, items: ["Book Shelf Large", "Book Shelf Medium", "Book Shelf Small", "Chest of Drawers Large", "Chest of Drawers Medium", "Chest of Drawers Small", "Display Cabinet Large", "Display Cabinet Small", "Dressing Table", "Entertainment / TV Unit", "Iron Locker Small", "Plastic Cupboard", "Safe Small", "Trunk", "TV Table", "Wall Shelf"] },
      { name: "Appliances", icon: FaPlug, items: ["Air Cooler", "Air Purifier", "Ceiling / Table Fan", "Garment Steamer", "Instant Geyser", "Storage Geyser", "Room Heater"] },
    ],
  },
  {
    category: "Living Room",
    subcategories: [
      { name: "Sofa", icon: FaCouch, items: ["1 Seater Sofa", "1 Seater Sofa - Leather", "2 Seater Sofa", "2 Seater Sofa - Leather", "3 Seater Sofa", "3 Seater Sofa - L Shape", "3 Seater Sofa - Leather", "4 Seater Sofa", "5 Seater Sofa - L Shape", "7 Seater Sofa - L Shape", "Recliner Sofa 1-Seater", "Recliner Sofa 2-Seater", "Recliner Sofa 3-Seater", "Sofa Cum Bed"] },
      { name: "Dining", icon: FaUtensils, items: ["Dining Chair", "Dining Table Only - 4 Seater", "Dining Table Only - 6 Seater", "Dining Table Only - 8 Seater", "Glass Top Dining Table Only - 4 Seater", "Glass Top Dining Table Only - 6 Seater", "Glass Top Dining Table Only - 8 Seater", "Marble Top Dining Table Only - 4 Seater", "Marble Top Dining Table Only - 6 Seater", "Marble Top Dining Table Only - 8 Seater"] },
      { name: "Television", icon: FaTv, items: ['LCD/LED 52" - 65"', 'LCD/LED 65" & Above', 'LCD/LED TV 40" & Below', 'LCD/LED TV 42" - 50"', 'LCD/LED TV 52" & Above', "Regular TV (Old Model)"] },
      { name: "Table", icon: FaBorderAll, items: ["Coffee Table Large", "Coffee Table Small", "Console Table", "Folding Table"] },
      { name: "Chair", icon: FaChair, items: ["Arm Chair", "Bean Bag/Pouffe", "Bench", "Folding Chair", "High Chair", "Plastic Chair", "Rocking Chair", "Settee", "Stool", "Study Chair", "Wooden Chair"] },
      { name: "Air Conditioner", icon: FaSnowflake, items: ["Split Air Conditioner (AC)", "Window Air Conditioner (AC)"] },
      { name: "Cabinet & Storage", icon: FaBoxes, items: ["Book Shelf Large", "Book Shelf Medium", "Book Shelf Small", "Chest of Drawers Large", "Chest of Drawers Medium", "Chest of Drawers Small", "Display Cabinet Large", "Display Cabinet Small", "Entertainment/TV Unit", "Plastic Cupboard", "Prayer Unit/Mandir", "Shoe Rack Metal", "Shoe Rack Wooden", "TV Table", "Wall Shelf"] },
      { name: "Appliances", icon: FaPlug, items: ["Air Cooler", "Air Purifier", "Ceiling/Table Fan", "Music/Video System"] },
      { name: "Bar Furniture", icon: FaWineGlassAlt, items: ["Bar Cabinet", "Bar Cabinet Large", "Bar Chair / Stool", "Bar Trolley", "Bar Unit", "Wine Rack"] },
    ],
  },
  {
    category: "Kitchen",
    subcategories: [
      { name: "Refrigerator", icon: FaSnowflake, items: ["Fridge 300-399 lts", "Fridge 400-499 lts", "Fridge Above 500 lts", "Fridge Single Door", "Fridge Upto 299 lts"] },
      { name: "Kitchen Items", icon: FaUtensils, items: ["Gas Stove / Hob", "Kitchen Metal Rack", "LPG Gas Cylinder", "Water Drum"] },
      { name: "Appliances", icon: FaBlender, items: ["Air Fryer", "Barbeque Grill Large", "Barbeque Grill Small", "Cooking Range", "Dish washer", "Domestic Flour Mill / Atta Chakki", "Electric Tandoor", "Food Processor", "Holds 2-3 Pressure Cookers (5 Litre) Or Equivalent", "Hood Chimney", "Microwave Oven & OTG", "Mixer Grinder", "Water Purifier", "Wet grinder"] },
      { name: "Furniture", icon: FaBoxes, items: ["Kitchen Rack", "Serving Trolley", "Side Table"] },
    ],
  },
  {
    category: "Miscellaneous",
    subcategories: [
      { name: "Washing Machine", icon: FaTshirt, items: ["Washing Machine <6.9kg", "Washing Machine 7-7.9kg", "Washing Machine 8kg+"] },
      { name: "Decorative Items", icon: FaStar, items: ["Aquarium Large", "Carpet Rolled", "Indoor Fountain Large", "Indoor Fountain Small", "Mirror", "Painting / Photo Large", "Painting / Photo Medium", "Pooja Lamp", "Statue Large", "Statue Medium", "Statue Small", "Vase Large", "Vase Small", "Wall Frames Large", "Wall Frames Medium"] },
      { name: "Suitcases and Trolleys", icon: FaBriefcase, items: ["Suitcase Large (25kg)", "Suitcase Medium (15kg)", "Suitcase Small (7kg)"] },
      { name: "Bicycle", icon: FaBicycle, items: ["Bicycle Adult", "Bicycle Kids"] },
      { name: "Home Utility", icon: FaBoxOpen, items: ["Clothes Stand", "Foldable Clothes Dryer", "Inverter - With Battery", "Sewing Machine", "Step Ladder", "Storage / Laundry Basket"] },
      { name: "Musical Instruments", icon: FaMusic, items: ["Drum Set - 5 piece", "Electronic Keyboard", "Grand Piano", "Guitar", "Harmonium", "Piano", "Synthesizer", "Tabla"] },
      { name: "Kids Vehicle", icon: FaCarSide, items: ["Kids Four Wheeler", "Kids Three Wheeler"] },
      { name: "Gym Equipments", icon: FaDumbbell, items: ["Exercise Cycle", "Tread Mill Foldable"] },
      { name: "Swing", icon: FaBoxOpen, items: ["Baby Swing Large", "Baby Swing Small", "Swing"] },
      { name: "Home Appliances", icon: FaDesktop, items: ["Computer System", "Printer", "Speaker"] },
      { name: "Plants and Pots", icon: FaLeaf, items: ["Big Pots", "Small Pots"] },
    ],
  },
  {
    category: "Cartons",
    subcategories: [
      { name: "Self Carton", icon: FaBoxOpen, items: ["Large Carton", "Medium Carton", "Small Carton"] },
      { name: "Globe reloaction cartons", icon: FaBoxOpen, items: ["Gunny Bag", "Globe relocation Carton"] },
    ],
  },
  {
    category: "Vehicle",
    subcategories: [
      { name: "Car", icon: FaCarSide, items: ["Compact SUV Car", "Hatchback Car", "Luxury Car", "Premium Hatchback Car", "Sedan Car", "SUV Car"] },
      { name: "Bike", icon: FaMotorcycle, items: ["Bike - upto 200 cc", "Bike - upto 350 cc", "Luxury Bike", "Scooty / Scooter"] },
    ],
  },
];

// Flat index of every item with its category + sub-category — powers search.
const allInventoryItems = inventoryData.flatMap((cat) =>
  cat.subcategories.flatMap((sub) =>
    sub.items.map((item) => ({ category: cat.category, sub: sub.name, icon: sub.icon, item }))
  )
);

/* ----------------------------------------------------------------
   Google Places API (New) autocomplete.
   Hits the REST Autocomplete endpoint directly (no JS SDK needed).
   `citiesOnly` restricts predictions to cities; otherwise it returns
   full address / establishment results for pickup-drop locations.
----------------------------------------------------------------- */
const GOOGLE_PLACES_KEY = 'AIzaSyBl5qTMy_fPaQJDGn4956-ypmzNNFKV8ek';

type Prediction = { placeId: string; main: string; secondary: string; full: string };

function PlacesAutocomplete({
  value,
  onChange,
  placeholder,
  citiesOnly = false,
  dotColor,
  leadingIcon,
}: {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  citiesOnly?: boolean;
  dotColor?: "red" | "green";
  leadingIcon?: React.ReactNode;
}) {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const skipNextSearch = useRef(false);
  const focusedRef = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Debounced fetch from Places API (New)
  useEffect(() => {
    if (skipNextSearch.current) {
      skipNextSearch.current = false;
      return;
    }
    const q = value.trim();
    if (q.length < 2 || !GOOGLE_PLACES_KEY) {
      setPredictions([]);
      return;
    }
    const ctrl = new AbortController();
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch("https://places.googleapis.com/v1/places:autocomplete", {
          method: "POST",
          signal: ctrl.signal,
          headers: {
            "Content-Type": "application/json",
            "X-Goog-Api-Key": GOOGLE_PLACES_KEY,
          },
          body: JSON.stringify({
            input: q,
            includedRegionCodes: ["in"],
            ...(citiesOnly ? { includedPrimaryTypes: ["(cities)"] } : {}),
          }),
        });
        const data = await res.json();
        const list: Prediction[] = (data.suggestions ?? [])
          .filter((s: { placePrediction?: unknown }) => s.placePrediction)
          .map((s: { placePrediction: { placeId: string; text?: { text: string }; structuredFormat?: { mainText?: { text: string }; secondaryText?: { text: string } } } }) => {
            const p = s.placePrediction;
            return {
              placeId: p.placeId,
              main: p.structuredFormat?.mainText?.text ?? p.text?.text ?? "",
              secondary: p.structuredFormat?.secondaryText?.text ?? "",
              full: p.text?.text ?? "",
            };
          });
        setPredictions(list);
        // Only pop the dropdown open if this field is the one being typed in —
        // prevents a late-arriving fetch from re-opening a blurred field.
        setOpen(focusedRef.current && list.length > 0);
        setActiveIdx(-1);
      } catch {
        /* aborted or network error — ignore */
      } finally {
        setLoading(false);
      }
    }, 280);
    return () => {
      clearTimeout(timer);
      ctrl.abort();
    };
  }, [value, citiesOnly]);

  const choose = (p: Prediction) => {
    skipNextSearch.current = true;
    onChange(citiesOnly ? p.main : p.full || p.main);
    setOpen(false);
    setPredictions([]);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!open || predictions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, predictions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      choose(predictions[activeIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="relative" ref={boxRef}>
      {dotColor && (
        <span className={`absolute left-3.5 top-[1.45rem] -translate-y-1/2 w-2.5 h-2.5 rounded-full z-10 ${dotColor === "red" ? "bg-red-400 ring-4 ring-red-100" : "bg-green-400 ring-4 ring-green-100"}`}></span>
      )}
      {leadingIcon && <span className="absolute left-3.5 top-[1.45rem] -translate-y-1/2 text-[#0A58CA] z-10 pointer-events-none">{leadingIcon}</span>}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => { focusedRef.current = true; if (predictions.length > 0) setOpen(true); }}
        onBlur={() => { focusedRef.current = false; setOpen(false); }}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        autoComplete="off"
        className={`w-full ${dotColor || leadingIcon ? "pl-9" : "pl-4"} pr-9 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 transition-all focus:outline-none focus:bg-white focus:border-[#0A58CA] focus:ring-4 focus:ring-[#0A58CA]/10`}
      />
      {loading ? (
        <span className="absolute right-3.5 top-1/2 -translate-y-1/2">
          <span className="block w-4 h-4 border-2 border-[#0A58CA]/30 border-t-[#0A58CA] rounded-full animate-spin"></span>
        </span>
      ) : value ? (
        <button
          type="button"
          onClick={() => { onChange(""); setPredictions([]); setOpen(false); }}
          aria-label="Clear"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full text-gray-300 hover:text-gray-500 hover:bg-gray-100 flex items-center justify-center transition-colors"
        >
          <FaTimes size={11} />
        </button>
      ) : null}

      <AnimatePresence>
        {open && predictions.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.16, ease: easeStandard }}
            className="absolute z-50 left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_-12px_rgba(10,88,202,0.25)] ring-1 ring-black/5 overflow-hidden max-h-64 overflow-y-auto"
          >
            <li className="px-4 pt-2.5 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-[#0A58CA]" size={9} /> Suggestions
            </li>
            {predictions.map((p, i) => (
              <li key={p.placeId}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => choose(p)}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`w-full text-left px-3.5 py-2.5 flex items-center gap-3 transition-colors ${i === activeIdx ? "bg-[#eef4ff]" : "hover:bg-[#fafcff]"}`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${i === activeIdx ? "bg-[#0A58CA] text-white" : "bg-[#eef4ff] text-[#0A58CA]"}`}>
                    <FaMapMarkerAlt size={12} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[13px] font-bold text-gray-800 truncate">{p.main}</span>
                    {p.secondary && <span className="block text-[11px] text-gray-400 truncate">{p.secondary}</span>}
                  </span>
                </button>
              </li>
            ))}
            <li className="px-4 py-2 border-t border-gray-50 flex items-center justify-end gap-1 text-[9px] text-gray-300 font-semibold">
              Powered by Google
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ----------------------------------------------------------------
   Custom calendar date picker — fully themed (native date inputs
   cannot be styled). Click the field to open a popover calendar.
----------------------------------------------------------------- */
const toLocalISO = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Pickup slots every 30 min from 5:00 AM to 11:00 PM. `minutes` = minutes since
// midnight, used to disable slots that have already passed when the date is today.
const PICKUP_SLOTS = Array.from({ length: (23 - 5) * 2 + 1 }, (_, i) => {
  const minutes = 5 * 60 + i * 30;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return { label: `${h12}:${String(m).padStart(2, "0")} ${period}`, minutes };
});

function DatePicker({ value, onChange, placeholder = "Select a date", minDate }: {
  value: string;
  onChange: (iso: string) => void;
  placeholder?: string;
  minDate?: Date;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 300 });
  const selected = value ? new Date(`${value}T00:00:00`) : null;
  const [viewMonth, setViewMonth] = useState(() => {
    const base = selected ?? new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  useEffect(() => setMounted(true), []);

  // Position the portal popover relative to the trigger (fixed, viewport-aware).
  const POP_W = 300;
  const POP_H = 360;
  const computePosition = () => {
    const el = triggerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const width = Math.min(POP_W, window.innerWidth - 24);
    const left = Math.max(12, Math.min(r.left, window.innerWidth - width - 12));
    const spaceBelow = window.innerHeight - r.bottom;
    const openUp = spaceBelow < POP_H + 12 && r.top > spaceBelow;
    const top = openUp ? Math.max(12, r.top - POP_H - 8) : r.bottom + 8;
    setCoords({ top, left, width });
  };

  useEffect(() => {
    if (!open) return;
    computePosition();
    const onMove = () => computePosition();
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node;
      if (triggerRef.current?.contains(t) || popRef.current?.contains(t)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => {
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
      document.removeEventListener("mousedown", onDoc);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const min = minDate ? startOfDay(minDate) : startOfDay(new Date());
  const todayISO = toLocalISO(new Date());
  const selectedISO = selected ? toLocalISO(selected) : "";

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstDayIdx = new Date(year, month, 1).getDay();
  const gridStart = new Date(year, month, 1 - firstDayIdx);
  const cells = Array.from({ length: 42 }, (_, i) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + i);
    return date;
  });

  const canGoPrev = new Date(year, month, 0) >= min; // last day of prev month still selectable
  const goPrev = () => canGoPrev && setViewMonth(new Date(year, month - 1, 1));
  const goNext = () => setViewMonth(new Date(year, month + 1, 1));

  const pick = (d: Date) => {
    if (startOfDay(d) < min) return;
    onChange(toLocalISO(d));
    setOpen(false);
  };

  const openPicker = () => {
    const base = selected ?? min;
    setViewMonth(new Date(base.getFullYear(), base.getMonth(), 1));
    if (!open) computePosition();
    setOpen((o) => !o);
  };

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={openPicker}
        className={`w-full pl-9 pr-10 py-3.5 bg-gray-50 border rounded-xl text-sm text-left transition-all focus:outline-none ${open ? "bg-white border-[#0A58CA] ring-4 ring-[#0A58CA]/10" : "border-gray-200 hover:border-gray-300"} ${selected ? "text-gray-800 font-medium" : "text-gray-400"}`}
      >
        <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0A58CA] pointer-events-none" size={14} />
        {selected ? selected.toLocaleDateString("en-IN", { weekday: "short", day: "2-digit", month: "short", year: "numeric" }) : placeholder}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}><polyline points="6 9 12 15 18 9" /></svg>
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              ref={popRef}
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.16, ease: easeStandard }}
              style={{ position: "fixed", top: coords.top, left: coords.left, width: coords.width }}
              className="z-[200] bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(10,88,202,0.35)] ring-1 ring-black/5 border border-gray-100 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#001126] to-[#0A58CA] text-white">
                <div className="text-[14px] font-extrabold">{MONTHS[month]} {year}</div>
                <div className="flex items-center gap-1">
                  <button type="button" onClick={goPrev} disabled={!canGoPrev} aria-label="Previous month" className="w-7 h-7 rounded-lg flex items-center justify-center text-white/90 hover:bg-white/15 disabled:opacity-30 disabled:hover:bg-transparent transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <button type="button" onClick={goNext} aria-label="Next month" className="w-7 h-7 rounded-lg flex items-center justify-center text-white/90 hover:bg-white/15 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>
              </div>

              {/* Weekday row */}
              <div className="grid grid-cols-7 px-3 pt-3 pb-1">
                {WEEKDAYS.map((w, i) => (
                  <div key={i} className="text-center text-[11px] font-bold text-gray-400">{w}</div>
                ))}
              </div>

              {/* Day grid */}
              <div className="grid grid-cols-7 gap-0.5 px-3 pb-3">
                {cells.map((d, i) => {
                  const iso = toLocalISO(d);
                  const outside = d.getMonth() !== month;
                  const disabled = startOfDay(d) < min;
                  const isSelected = iso === selectedISO;
                  const isToday = iso === todayISO;
                  return (
                    <button
                      key={i}
                      type="button"
                      disabled={disabled}
                      onClick={() => pick(d)}
                      className={`h-9 rounded-lg text-[13px] font-semibold transition-colors relative
                      ${isSelected ? "bg-gradient-to-br from-[#0A58CA] to-[#002d5c] text-white shadow-md" : disabled ? "text-gray-300 cursor-not-allowed" : outside ? "text-gray-300 hover:bg-gray-50" : "text-gray-700 hover:bg-[#eef4ff] hover:text-[#0A58CA]"}
                      ${isToday && !isSelected ? "ring-1 ring-[#0A58CA]/40" : ""}`}
                    >
                      {d.getDate()}
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-100 bg-gray-50/50">
                <button type="button" onClick={() => { onChange(""); setOpen(false); }} className="text-[12px] font-bold text-gray-400 hover:text-gray-600 transition-colors">Clear</button>
                <button type="button" onClick={() => pick(new Date())} className="text-[12px] font-bold text-[#0A58CA] hover:text-[#004bb5] transition-colors">Today</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

function BookingWizard() {
  const [step, setStep] = useState(0);
  const [moveType, setMoveType] = useState<"within" | "between">("between");
  // within-city fields
  const [city, setCity] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  // between-city fields
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [shiftingDate, setShiftingDate] = useState("");
  const [flexibleDate, setFlexibleDate] = useState(false);
  // inventory
  const [inventory, setInventory] = useState<Record<string, number>>({});
  const [openCats, setOpenCats] = useState<string[]>(["Bedrooms"]);
  const [openSubs, setOpenSubs] = useState<string[]>(["Bedrooms::Bed"]);
  const [search, setSearch] = useState("");
  // exact pickup / drop spot within the chosen cities
  const [pickupArea, setPickupArea] = useState("");
  const [dropArea, setDropArea] = useState("");
  // date & slot
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  // floor & lift
  const [pickupFloor, setPickupFloor] = useState("Ground");
  const [dropFloor, setDropFloor] = useState("Ground");
  const [pickupLift, setPickupLift] = useState(false);
  const [dropLift, setDropLift] = useState(false);
  // toast
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3200);
  };

  const updateQty = (item: string, delta: number) => {
    setInventory((prev) => {
      const next = { ...prev };
      const val = Math.max(0, (next[item] ?? 0) + delta);
      if (val === 0) delete next[item];
      else next[item] = val;
      return next;
    });
  };

  // Radix controls each category's sub-accordion with only its own keys; this
  // merges that slice back into the global openSubs list without wiping others.
  const handleSubChange = (cat: string) => (vals: string[]) =>
    setOpenSubs((prev) => [...prev.filter((k) => !k.startsWith(`${cat}::`)), ...vals]);

  const subsFor = (cat: string) => openSubs.filter((k) => k.startsWith(`${cat}::`));

  // Chip click: open the category, expand its first sub, and scroll to it.
  const jumpToCategory = (cat: string) => {
    setSearch("");
    setOpenCats((prev) => (prev.includes(cat) ? prev : [...prev, cat]));
    const firstSub = inventoryData.find((c) => c.category === cat)?.subcategories[0]?.name;
    if (firstSub) setOpenSubs((prev) => (prev.includes(`${cat}::${firstSub}`) ? prev : [...prev, `${cat}::${firstSub}`]));
    setTimeout(() => {
      document.getElementById(`wiz-cat-${cat}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  // Add / stepper control for a single inventory item row.
  const ItemRow = ({ item, sub }: { item: string; sub?: string }) => {
    const qty = inventory[item] ?? 0;
    return (
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-gray-50 last:border-0 hover:bg-[#fafcff]">
        <span className="text-[13px] text-gray-700">
          {item}
          {sub && <span className="text-[11px] text-gray-400 ml-1.5">· {sub}</span>}
        </span>
        {qty === 0 ? (
          <button
            onClick={() => updateQty(item, 1)}
            aria-label={`Add ${item}`}
            className="w-7 h-7 shrink-0 rounded-lg border-2 border-[#0A58CA] text-[#0A58CA] flex items-center justify-center hover:bg-[#0A58CA] hover:text-white transition-colors"
          >
            <FaPlus size={10} />
          </button>
        ) : (
          <div className="flex items-center gap-1.5 shrink-0">
            <button onClick={() => updateQty(item, -1)} aria-label={`Remove ${item}`} className="w-7 h-7 rounded-lg bg-[#eef4ff] text-[#0A58CA] flex items-center justify-center hover:bg-[#0A58CA] hover:text-white transition-colors font-bold text-base leading-none">−</button>
            <span className="w-5 text-center text-[13px] font-bold text-[#001126]">{qty}</span>
            <button onClick={() => updateQty(item, 1)} aria-label={`Add more ${item}`} className="w-7 h-7 rounded-lg bg-[#0A58CA] text-white flex items-center justify-center hover:bg-[#004bb5] transition-colors"><FaPlus size={10} /></button>
          </div>
        )}
      </div>
    );
  };

  // Pickup dates: today + next 29 days (~1 month, horizontally scrollable).
  const pickupDates = Array.from({ length: 30 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const todayISO = toLocalISO(new Date());

  // A slot is in the past only when the selected date is today and the slot
  // start time has already arrived/passed.
  const isSlotDisabled = (minutes: number) => {
    if (selectedDate !== todayISO) return false;
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes() >= minutes;
  };

  // Urgency banner shows when the picked date is a weekend (Sat/Sun) or today.
  const showUrgency = (iso: string) => {
    if (!iso) return false;
    if (iso === todayISO) return true;
    const day = new Date(`${iso}T00:00:00`).getDay();
    return day === 0 || day === 6;
  };

  // If the chosen date/time combo leaves the selected slot in the past, clear it.
  useEffect(() => {
    if (!selectedDate || !selectedSlot) return;
    const slot = PICKUP_SLOTS.find((s) => s.label === selectedSlot);
    if (slot && isSlotDisabled(slot.minutes)) setSelectedSlot("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);

  const totalItems = Object.values(inventory).reduce((a, b) => a + b, 0);

  const searchResults =
    search.trim().length > 0
      ? allInventoryItems.filter((r) => r.item.toLowerCase().includes(search.trim().toLowerCase()))
      : [];

  const canProceedStep0 =
    moveType === "within"
      ? city.trim() !== "" && fromLocation.trim() !== "" && toLocation.trim() !== ""
      : fromCity.trim() !== "" && toCity.trim() !== "";

  const handleCheckPrices = () => {
    // Validate required fields before sending; show a friendly toast otherwise.
    const missing: string[] = [];
    const locationMissing =
      moveType === "within"
        ? !city.trim() || !fromLocation.trim() || !toLocation.trim()
        : !fromCity.trim() || !toCity.trim();
    if (locationMissing) missing.push("location details");
    if (!selectedDate) missing.push("pickup date");
    if (!selectedSlot) missing.push("pickup time slot");

    if (missing.length > 0) {
      const human =
        missing.length === 1
          ? missing[0]
          : `${missing.slice(0, -1).join(", ")} and ${missing[missing.length - 1]}`;
      showToast(`Please select your ${human} to continue.`);
      return;
    }

    const fmtDate = (iso: string) =>
      new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });

    const detailLines =
      moveType === "within"
        ? [
          `• Move Type: Within City${city ? ` (${city})` : ""}`,
          `• Pickup: ${fromLocation}`,
          `• Drop: ${toLocation}`,
        ]
        : [
          "• Move Type: Between Cities",
          `• From: ${fromCity}${pickupArea ? ` (${pickupArea})` : ""}`,
          `• To: ${toCity}${dropArea ? ` (${dropArea})` : ""}`,
          shiftingDate ? `• Preferred Date: ${fmtDate(shiftingDate)}${flexibleDate ? " (flexible)" : ""}` : "",
        ].filter(Boolean);

    detailLines.push(
      `• Pickup Floor: ${pickupFloor} (Lift: ${pickupLift ? "Yes" : "No"})`,
      `• Drop Floor: ${dropFloor} (Lift: ${dropLift ? "Yes" : "No"})`
    );

    if (selectedDate && selectedSlot) {
      detailLines.push(`• Pickup Slot: ${fmtDate(selectedDate)}, ${selectedSlot}`);
    }

    const itemLines = Object.entries(inventory).map(([item, qty]) => `• ${item} × ${qty}`);

    const message = [
      "Hello Globe Relocation,",
      "",
      "I'd like to request a price estimate for my move. Here are the details:",
      "",
      "*MOVE DETAILS*",
      ...detailLines,
      "",
      `*INVENTORY (${totalItems} ${totalItems === 1 ? "item" : "items"})*`,
      ...(itemLines.length ? itemLines : ["• Not specified yet"]),
      "",
      "Kindly share your best quote at the earliest. Thank you!",
    ].join("\n");

    window.open(
      `https://wa.me/918000189153?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const stepLabels = ["Location", "Add Items", "Date & Quote"];

  return (
    <>
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -24, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -24, x: "-50%" }}
            transition={{ duration: 0.25, ease: easeStandard }}
            className="fixed top-5 left-1/2 z-[200] flex items-center gap-3 bg-[#001126] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-white/10 max-w-[90vw]"
            role="alert"
          >
            <span className="w-7 h-7 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
              <FaInfoCircle size={14} />
            </span>
            <span className="text-[13px] font-semibold">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-14 bg-[#f4f8ff] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(#0A58CA18 1.5px, transparent 1.5px)", backgroundSize: "28px 28px" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Section heading */}
          <motion.div className="text-center mb-10 flex flex-col items-center" {...headerReveal}>
            <div className="flex items-center gap-4 justify-center w-full mb-1">
              <div className="h-px w-12 bg-blue-200"></div>
              <span className="text-[12px] font-extrabold text-[#0A58CA] uppercase tracking-widest">Book Your Move</span>
              <div className="h-px w-12 bg-blue-200"></div>
            </div>
            <h2 className="text-3xl md:text-[2.25rem] font-extrabold text-[#001126]">
              Get an Instant Quote
            </h2>
          </motion.div>

          {/* Stepper */}
          <div className="flex items-start justify-center mb-10 max-w-sm mx-auto">
            {stepLabels.map((label, i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold border-2 transition-all duration-300 ${i < step ? "bg-[#0A58CA] border-[#0A58CA] text-white" : i === step ? "bg-white border-[#0A58CA] text-[#0A58CA] shadow-md" : "bg-white border-gray-200 text-gray-400"}`}>
                    {i < step ? <FaCheckCircle size={14} /> : i + 1}
                  </div>
                  <span className={`text-[10px] font-bold mt-1.5 whitespace-nowrap ${i === step ? "text-[#0A58CA]" : i < step ? "text-[#0A58CA]/60" : "text-gray-400"}`}>{label}</span>
                </div>
                {i < 2 && <div className={`flex-1 h-[2px] mb-4 mx-1 transition-all duration-500 ${i < step ? "bg-[#0A58CA]" : "bg-gray-200"}`}></div>}
              </div>
            ))}
          </div>

          {/* Card */}
          <div className="max-w-xl mx-auto">

            {/* ── STEP 0: Location ── */}
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(10,88,202,0.1)] border border-blue-50 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#001126] to-[#0A58CA] px-6 py-3 flex items-center gap-2 text-white text-[11px] font-bold tracking-wide">
                  <FaShieldAlt size={11} /> ISO 9001:2015 Certified Company &nbsp;|&nbsp; 7+ Years of Experience
                </div>

                <div className="p-6">
                  <h3 className="text-[18px] font-extrabold text-[#001126] mb-5">Where are you going to relocate?</h3>

                  {/* Toggle */}
                  <div className="flex bg-gray-100 rounded-full p-1 mb-6">
                    {(["within", "between"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          if (type === moveType) return;
                          setMoveType(type);
                          // Reset all location inputs when switching tabs
                          setCity("");
                          setFromLocation("");
                          setToLocation("");
                          setFromCity("");
                          setToCity("");
                          setShiftingDate("");
                          setFlexibleDate(false);
                          setPickupArea("");
                          setDropArea("");
                        }}
                        className={`flex-1 py-2.5 rounded-full text-[13px] font-bold transition-all duration-300 ${moveType === type ? "bg-[#0A58CA] text-white shadow-md" : "text-gray-500 hover:text-gray-700"}`}
                      >
                        {type === "within" ? "Within City" : "Between Cities"}
                      </button>
                    ))}
                  </div>

                  {moveType === "within" ? (
                    <div className="space-y-4">
                      <div>
                        <label className="text-[12px] font-bold text-gray-500 mb-1.5 block uppercase tracking-wide">Select City</label>
                        <PlacesAutocomplete key="within-city" value={city} onChange={setCity} placeholder="Search your city…" citiesOnly leadingIcon={<FaMapMarkerAlt size={13} />} />
                      </div>
                      <div>
                        <label className="text-[12px] font-bold text-gray-500 mb-1.5 block uppercase tracking-wide">Pickup &amp; Drop Location</label>
                        <div className="space-y-2">
                          <PlacesAutocomplete key="within-from" value={fromLocation} onChange={setFromLocation} placeholder="Shifting From (area / landmark)" dotColor="red" />
                          <PlacesAutocomplete key="within-to" value={toLocation} onChange={setToLocation} placeholder="Shifting To (area / landmark)" dotColor="green" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label className="text-[12px] font-bold text-gray-500 mb-1.5 block uppercase tracking-wide">Search Your City</label>
                        <div className="space-y-2">
                          <PlacesAutocomplete key="between-from" value={fromCity} onChange={setFromCity} placeholder="Search Source City" citiesOnly dotColor="red" />
                          <PlacesAutocomplete key="between-to" value={toCity} onChange={setToCity} placeholder="Search Destination City" citiesOnly dotColor="green" />
                        </div>
                      </div>
                      <div>
                        <label className="text-[12px] font-bold text-gray-500 mb-1.5 block uppercase tracking-wide">Select Shifting Date</label>
                        <DatePicker value={shiftingDate} onChange={setShiftingDate} placeholder="Select your shifting date" />
                        <label className="flex items-center gap-2 mt-2 cursor-pointer">
                          <input type="checkbox" checked={flexibleDate} onChange={(e) => setFlexibleDate(e.target.checked)} className="rounded border-gray-300 accent-[#0A58CA]" />
                          <span className="text-[12px] text-gray-500">I&apos;m flexible on my shifting date</span>
                        </label>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-center gap-4 my-5 text-[11px] text-gray-400 font-semibold">
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-green-500" size={10} /> Professional Handling</span>
                    <span className="text-gray-200">|</span>
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-green-500" size={10} /> Transparent Pricing</span>
                  </div>

                  <button
                    disabled={!canProceedStep0}
                    onClick={() => setStep(1)}
                    className="w-full bg-[#0A58CA] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#004bb5] text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-[#0A58CA]/20 flex items-center justify-center gap-2"
                  >
                    Add Items
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── STEP 1: Inventory ── */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(10,88,202,0.1)] border border-blue-50 overflow-hidden"
              >
                {/* Header */}
                <div className="bg-white border-b border-gray-100 px-5 py-4 flex items-center justify-between gap-3">
                  <button onClick={() => setStep(0)} className="flex items-center gap-2 text-[#001126] hover:text-[#0A58CA] transition-colors">
                    <FaArrowLeft size={15} />
                    <span className="text-[16px] font-extrabold">Add your Inventory</span>
                  </button>
                  <a
                    href="tel:+918000189153"
                    className="shrink-0 flex items-center gap-2 border border-[#0A58CA]/30 text-[#0A58CA] text-[12px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#0A58CA] hover:text-white transition-colors"
                  >
                    <FaPhoneAlt size={11} /> Get a call
                  </a>
                </div>

                {/* Search */}
                <div className="px-4 pt-3">
                  <div className="relative">
                    <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search for any item"
                      className="w-full pl-10 pr-9 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0A58CA]/30 focus:bg-white transition-colors"
                    />
                    {search && (
                      <button onClick={() => setSearch("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <FaTimes size={13} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Category chips */}
                {!search && (
                  <div className="px-4 pt-3 flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                    {inventoryData.map(({ category, subcategories }) => {
                      const catTotal = subcategories.reduce((s, sub) => s + sub.items.reduce((t, item) => t + (inventory[item] ?? 0), 0), 0);
                      const isActive = openCats.includes(category);
                      return (
                        <button
                          key={category}
                          onClick={() => jumpToCategory(category)}
                          className={`shrink-0 text-[12px] font-bold px-3.5 py-1.5 rounded-lg border transition-colors ${isActive || catTotal > 0 ? "border-[#0A58CA] bg-[#0A58CA] text-white" : "border-gray-200 text-gray-600 hover:border-[#0A58CA] hover:text-[#0A58CA]"}`}
                        >
                          {category}{catTotal > 0 ? ` (${catTotal})` : ""}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Body */}
                <div className="px-4 pb-2 max-h-[420px] overflow-y-auto flex flex-col gap-2 mt-3">
                  {search ? (
                    /* ── Search results (flat) ── */
                    searchResults.length > 0 ? (
                      <div className="border border-gray-100 rounded-xl overflow-hidden">
                        {searchResults.map((r) => (
                          <ItemRow key={`${r.category}-${r.sub}-${r.item}`} item={r.item} sub={`${r.category} › ${r.sub}`} />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-10 text-gray-400">
                        <FaSearch className="mx-auto mb-3 opacity-40" size={24} />
                        <p className="text-[13px] font-semibold">No items match “{search}”</p>
                        <p className="text-[11px] mt-1">Try a different keyword or browse the categories.</p>
                      </div>
                    )
                  ) : (
                    /* ── Category › Sub-category › Items (Radix Accordion) ── */
                    <Accordion.Root
                      type="multiple"
                      value={openCats}
                      onValueChange={setOpenCats}
                      className="flex flex-col gap-2"
                    >
                      {inventoryData.map(({ category, subcategories }) => {
                        const catTotal = subcategories.reduce((s, sub) => s + sub.items.reduce((t, item) => t + (inventory[item] ?? 0), 0), 0);
                        return (
                          <Accordion.Item
                            key={category}
                            value={category}
                            id={`wiz-cat-${category}`}
                            className="border border-gray-100 rounded-xl overflow-hidden scroll-mt-2 bg-white"
                          >
                            <Accordion.Header>
                              <Accordion.Trigger className="group w-full flex items-center justify-between px-4 py-3.5 bg-white hover:bg-[#fafcff] transition-colors">
                                <div className="flex items-center gap-2">
                                  <span className="text-[14px] font-extrabold text-gray-800">{category}</span>
                                  {catTotal > 0 && <span className="text-[10px] font-bold text-[#0A58CA] bg-[#eef4ff] px-2 py-0.5 rounded-full">{catTotal} added</span>}
                                </div>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180"><polyline points="6 9 12 15 18 9"></polyline></svg>
                              </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="acc-content">
                              <div className="border-t border-gray-100">
                                <Accordion.Root
                                  type="multiple"
                                  value={subsFor(category)}
                                  onValueChange={handleSubChange(category)}
                                  className="divide-y divide-gray-100"
                                >
                                  {subcategories.map((sub) => {
                                    const subKey = `${category}::${sub.name}`;
                                    const subTotal = sub.items.reduce((t, item) => t + (inventory[item] ?? 0), 0);
                                    const SubIcon = sub.icon;
                                    return (
                                      <Accordion.Item key={subKey} value={subKey}>
                                        <Accordion.Header>
                                          <Accordion.Trigger className="group w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-[#fafcff] transition-colors">
                                            <div className="flex items-center gap-2.5">
                                              <SubIcon className="text-gray-400" size={15} />
                                              <span className="text-[13px] font-bold text-gray-700">{sub.name}</span>
                                              {subTotal > 0 && <span className="text-[10px] font-bold text-[#0A58CA] bg-[#eef4ff] px-2 py-0.5 rounded-full">{subTotal} added</span>}
                                            </div>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-300 transition-transform duration-200 group-data-[state=open]:rotate-180"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                          </Accordion.Trigger>
                                        </Accordion.Header>
                                        <Accordion.Content className="acc-content">
                                          <div className="bg-[#fcfdff] pl-2">
                                            {sub.items.map((item) => (
                                              <ItemRow key={item} item={item} />
                                            ))}
                                          </div>
                                        </Accordion.Content>
                                      </Accordion.Item>
                                    );
                                  })}
                                </Accordion.Root>
                              </div>
                            </Accordion.Content>
                          </Accordion.Item>
                        );
                      })}
                    </Accordion.Root>
                  )}

                  {!search && (
                    <div className="rounded-xl bg-amber-50 border border-amber-100 px-4 py-3 mt-1">
                      <p className="text-[12px] font-bold text-amber-700 mb-0.5">Didn&apos;t find what you were looking for?</p>
                      <p className="text-[11px] text-amber-600">😊 Don&apos;t worry — extra items / cartons can be added if needed. Charges may apply.</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 bg-white px-4 py-3">
                  <p className="text-[11px] text-gray-400 mb-2 flex items-center gap-1.5">
                    <FaInfoCircle className="text-[#0A58CA]" size={11} />
                    {totalItems === 0 ? "Add at least one item to continue." : "Add all your major items to get an accurate quote."}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="shrink-0">
                      <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Added items</p>
                      <p className="text-[20px] font-extrabold text-[#001126] leading-none mt-0.5">{totalItems}</p>
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      disabled={totalItems === 0}
                      className="flex-1 bg-[#0A58CA] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#004bb5] text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-[#0A58CA]/20 flex items-center justify-center gap-2"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── STEP 2: Date, Slot & WhatsApp ── */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(10,88,202,0.1)] border border-blue-50 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#001126] to-[#0A58CA] px-6 py-4 text-white">
                  <h3 className="text-[16px] font-extrabold">Confirm Shifting Date &amp; Slot</h3>
                  <p className="text-[11px] text-blue-200 mt-0.5">Almost done — pick your preferred date and time</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Exact pickup / drop spot within the chosen cities */}
                  {moveType === "between" && (
                    <div>
                      <label className="text-[12px] font-bold text-gray-500 mb-3 block uppercase tracking-wide">Exact Pickup &amp; Drop Location</label>
                      <div className="space-y-2">
                        <PlacesAutocomplete
                          key="exact-pickup"
                          value={pickupArea}
                          onChange={setPickupArea}
                          placeholder={`Society / area / landmark${fromCity ? ` in ${fromCity}` : ""}`}
                          dotColor="red"
                        />
                        <PlacesAutocomplete
                          key="exact-drop"
                          value={dropArea}
                          onChange={setDropArea}
                          placeholder={`Society / area / landmark${toCity ? ` in ${toCity}` : ""}`}
                          dotColor="green"
                        />
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1.5">Helps us plan the exact route and give a precise quote.</p>
                    </div>
                  )}

                  {/* Floor & Lift details */}
                  <div>
                    <label className="text-[12px] font-bold text-gray-500 mb-3 block uppercase tracking-wide">Floor &amp; Lift Details</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-700">Pickup Floor</label>
                        <select
                          value={pickupFloor}
                          onChange={(e) => setPickupFloor(e.target.value)}
                          className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#0A58CA] focus:ring-1 focus:ring-[#0A58CA]"
                        >
                          <option value="Ground">Ground Floor</option>
                          {[...Array(30)].map((_, i) => (
                            <option key={i + 1} value={(i + 1).toString()}>Floor {i + 1}</option>
                          ))}
                        </select>
                        <label className="flex items-center gap-2 mt-2 cursor-pointer">
                          <input type="checkbox" checked={pickupLift} onChange={(e) => setPickupLift(e.target.checked)} className="rounded border-gray-300 accent-[#0A58CA]" />
                          <span className="text-[12px] text-gray-500">Lift available at pickup</span>
                        </label>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-gray-700">Drop Floor</label>
                        <select
                          value={dropFloor}
                          onChange={(e) => setDropFloor(e.target.value)}
                          className="w-full px-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#0A58CA] focus:ring-1 focus:ring-[#0A58CA]"
                        >
                          <option value="Ground">Ground Floor</option>
                          {[...Array(30)].map((_, i) => (
                            <option key={i + 1} value={(i + 1).toString()}>Floor {i + 1}</option>
                          ))}
                        </select>
                        <label className="flex items-center gap-2 mt-2 cursor-pointer">
                          <input type="checkbox" checked={dropLift} onChange={(e) => setDropLift(e.target.checked)} className="rounded border-gray-300 accent-[#0A58CA]" />
                          <span className="text-[12px] text-gray-500">Lift available at drop</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Date picker */}
                  <div>
                    <label className="text-[12px] font-bold text-gray-500 mb-3 block uppercase tracking-wide">Select Pickup Date</label>
                    <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                      {pickupDates.map((d, i) => {
                        const val = toLocalISO(d);
                        const isSelected = selectedDate === val;
                        const isToday = val === todayISO;
                        return (
                          <button
                            key={i}
                            onClick={() => setSelectedDate(val)}
                            className={`shrink-0 flex flex-col items-center px-3 py-2.5 rounded-xl border-2 transition-all min-w-[62px] ${isSelected ? "border-[#0A58CA] bg-[#0A58CA] text-white shadow-md" : "border-gray-200 bg-white text-gray-600 hover:border-[#0A58CA]/50"}`}
                          >
                            <span className="text-[10px] font-semibold">{isToday ? "Today" : d.toLocaleDateString("en-IN", { weekday: "short" })}</span>
                            <span className="text-[13px] font-extrabold mt-0.5">{d.toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {selectedDate && showUrgency(selectedDate) && (
                    <div className="flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-xl px-4 py-2.5 text-[12px] font-bold text-orange-600">
                      ⚡ Slots Filling Fast, Book Now!
                    </div>
                  )}

                  {/* Slot picker */}
                  <div>
                    <label className="text-[12px] font-bold text-gray-500 mb-3 block uppercase tracking-wide">Select Pickup Slot</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-[200px] overflow-y-auto pr-1">
                      {PICKUP_SLOTS.map(({ label, minutes }) => {
                        const disabled = isSlotDisabled(minutes);
                        const isSelected = selectedSlot === label;
                        return (
                          <button
                            key={label}
                            disabled={disabled}
                            onClick={() => setSelectedSlot(label)}
                            className={`py-2.5 rounded-xl border-2 font-bold text-[12px] transition-all ${disabled
                              ? "border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed line-through"
                              : isSelected
                                ? "border-[#0A58CA] bg-[#0A58CA] text-white shadow-md"
                                : "border-gray-200 bg-white text-gray-600 hover:border-[#0A58CA]/50"
                              }`}
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                    {selectedDate === todayISO && PICKUP_SLOTS.every((s) => isSlotDisabled(s.minutes)) && (
                      <p className="text-[11px] text-orange-500 font-semibold mt-2">All slots for today have passed — please pick another date.</p>
                    )}
                  </div>

                  {/* Summary card */}
                  <div className="rounded-2xl border border-blue-100 bg-gradient-to-br from-[#f4f8ff] to-white overflow-hidden shadow-sm">
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-[#eef4ff] border-b border-blue-100">
                      <FaCheckCircle className="text-[#0A58CA]" size={12} />
                      <p className="text-[11px] font-extrabold text-[#001126] uppercase tracking-wider">Your Move Summary</p>
                    </div>
                    <div className="p-4 space-y-3.5">
                      {/* Route */}
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-lg bg-white ring-1 ring-blue-100 text-[#0A58CA] flex items-center justify-center shrink-0"><FaMapMarkerAlt size={13} /></span>
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-0.5">Route{moveType === "within" ? ` · ${city}` : ""}</p>
                          <p className="text-[13px] font-bold text-gray-800 leading-snug">
                            {moveType === "within"
                              ? `${fromLocation} → ${toLocation}`
                              : `${pickupArea ? `${pickupArea}, ` : ""}${fromCity}  →  ${dropArea ? `${dropArea}, ` : ""}${toCity}`}
                          </p>
                        </div>
                      </div>
                      {/* Inventory */}
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 rounded-lg bg-white ring-1 ring-blue-100 text-[#0A58CA] flex items-center justify-center shrink-0"><FaBoxOpen size={13} /></span>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-0.5">Inventory</p>
                          <p className="text-[13px] font-bold text-gray-800">{totalItems > 0 ? `${totalItems} item${totalItems !== 1 ? "s" : ""} added` : "No items added yet"}</p>
                        </div>
                      </div>
                      {/* Date & slot */}
                      {(selectedDate && selectedSlot) || (moveType === "between" && shiftingDate) ? (
                        <div className="flex items-start gap-3">
                          <span className="w-8 h-8 rounded-lg bg-white ring-1 ring-blue-100 text-[#0A58CA] flex items-center justify-center shrink-0"><FaCalendarAlt size={13} /></span>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-0.5">Preferred Schedule</p>
                            <p className="text-[13px] font-bold text-gray-800">
                              {selectedDate && selectedSlot
                                ? `${selectedDate} · ${selectedSlot}`
                                : `${shiftingDate}${flexibleDate ? " (flexible)" : ""}`}
                            </p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 p-4 flex gap-3">
                  <button onClick={() => setStep(1)} className="px-5 py-3 border border-gray-200 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 transition-colors">Back</button>
                  <button
                    onClick={handleCheckPrices}
                    className="flex-1 bg-[#25D366] hover:bg-[#1eb858] text-white font-bold py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-[#25D366]/25 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp size={17} /> Check Prices
                  </button>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------------------------------------------------------
   Customer reviews — shared by the desktop grid and the mobile
   swipeable carousel below.
----------------------------------------------------------------- */
const reviews = [
  { name: "Rohit Sharma", location: "Bengaluru, India", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", text: "Excellent bike transportation service! My bike was delivered safely and on time. Very professional team." },
  { name: "Priya Mehta", location: "Mumbai, India", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", text: "Smooth car transportation experience. The team kept me updated throughout the process. Highly recommended!" },
  { name: "Amit Verma", location: "Delhi, India", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop", text: "Our office relocation was seamless and well-organized. Great service and very cooperative staff." },
];

// Visual review card (reused by grid + carousel)
function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="bg-white rounded-[1.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 p-8 relative overflow-hidden h-full">
      <div className="text-[#f4f7ff] text-8xl font-serif absolute -top-4 left-4 leading-none z-0">“</div>
      <div className="text-[#f4f7ff] text-8xl font-serif absolute -bottom-12 right-4 leading-none z-0 rotate-180">“</div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex text-[#ffb400] gap-1 mb-6">
          <FaStar size={14} /><FaStar size={14} /><FaStar size={14} /><FaStar size={14} /><FaStar size={14} />
        </div>
        <div className="flex items-center gap-4 mb-6">
          <img src={review.img} className="w-12 h-12 rounded-full object-cover shadow-sm" alt={review.name} draggable={false} />
          <div>
            <h4 className="font-bold text-gray-900 text-sm flex items-center gap-1">
              {review.name} <FaCheckCircle className="text-[#0A58CA]" size={12} />
            </h4>
            <p className="text-gray-500 text-[11px] flex items-center gap-1">
              <FaMapMarkerAlt className="text-[#0A58CA]" size={10} /> {review.location}
            </p>
          </div>
        </div>
        <p className="text-gray-700 italic text-[14px] leading-relaxed font-medium">
          {review.text}
        </p>
      </div>
    </div>
  );
}

// Mobile-only swipeable, auto-playing review carousel
const swipeConfidenceThreshold = 8000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

function MobileReviewsCarousel() {
  // page can grow unbounded; index is the wrapped position
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const index = ((page % reviews.length) + reviews.length) % reviews.length;

  const paginate = (newDirection: number) => setPage([page + newDirection, newDirection]);

  // Auto-advance; timer resets on every change (incl. manual nav/swipe)
  useEffect(() => {
    const t = setTimeout(() => setPage([page + 1, 1]), 4500);
    return () => clearTimeout(t);
  }, [page]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 340 : -340, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -340 : 340, opacity: 0 }),
  };

  return (
    <div className="md:hidden mb-12">
      {/* Slide stage */}
      <div className="relative min-h-[270px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 32 }, opacity: { duration: 0.2 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) paginate(1);
              else if (swipe > swipeConfidenceThreshold) paginate(-1);
            }}
            className="absolute inset-0 px-1 cursor-grab active:cursor-grabbing"
          >
            <ReviewCard review={reviews[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-5 mt-6">
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous review"
          className="w-10 h-10 rounded-full border border-[#0A58CA]/30 text-[#0A58CA] flex items-center justify-center hover:bg-[#0A58CA] hover:text-white hover:border-[#0A58CA] active:scale-95 transition-all shadow-sm"
        >
          <FaArrowRight className="rotate-180" size={13} />
        </button>

        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > index ? 1 : -1])}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-[#0A58CA]" : "w-2 bg-gray-300"}`}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          aria-label="Next review"
          className="w-10 h-10 rounded-full border border-[#0A58CA]/30 text-[#0A58CA] flex items-center justify-center hover:bg-[#0A58CA] hover:text-white hover:border-[#0A58CA] active:scale-95 transition-all shadow-sm"
        >
          <FaArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

// Homepage structured data: organization (with rating + reviews), site
// search box, FAQ rich snippet, breadcrumb, and the service catalogue —
// all built from the content already on the page.
const homePageSchema = [
  {
    // Shares @id with the global Organization in _document so Google merges
    // them; the rating is declared here because it is visible on this page.
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    telephone: "+91 80001 89153",
    image: "https://ik.imagekit.io/khibl45oa/home_hero.png?tr=w-1200,h-630,fo-auto",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "55, 1st Cross Rd, Prasanth Layout, Prasanth Extension, Whitefield",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560066",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "12500",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
      reviewBody: r.text,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    description: "Trusted packers and movers in Bangalore for home & office shifting and vehicle transport across India.",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/locations?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Packers and Movers Services",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: `${SITE_URL}/services/${s.slug}`,
    })),
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showPricing, setShowPricing] = useState(false);

  return (
    <div className="font-sans text-gray-800 pb-[72px] md:pb-0 overflow-x-hidden">
      <Seo
        title="Packers and Movers in Bangalore | Globe Relocation — Home & Office Shifting"
        description="Globe Relocation — trusted packers and movers in Bangalore for safe home & office shifting and car/bike transport across India. Free quote + flat 10% off. Call now!"
        path="/"
        keywords="packers and movers in Bangalore, home shifting Bangalore, office relocation Bangalore, car transportation, bike transport, household goods shifting, movers and packers India"
        jsonLd={homePageSchema}
      />

      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section
          className="
          relative w-full min-h-[85vh]
          flex flex-col justify-between
          pt-4 pb-10 lg:pt-28 lg:pb-16
          bg-cover bg-center
          bg-[url('https://ik.imagekit.io/khibl45oa/home_hero_mobile.png')]
          lg:bg-[url('https://ik.imagekit.io/khibl45oa/home_hero.png?q=80&w=2071&auto=format&fit=crop')]"
        >          {/* Overlay */}
          <div className="absolute inset-0 bg-[#001530]/65 z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full flex-grow flex flex-col justify-between">
            {/* Hero Text */}
            <motion.div
              className="text-white space-y-4 max-w-2xl mb-12 pt-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
              }}
            >
              <motion.span
                className="inline-block text-[#58a6ff] font-bold text-sm tracking-widest uppercase"
                variants={{ hidden: { opacity: 0, y: -16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeStandard } } }}
              >
                INDIA'S TRUSTED RELOCATION PARTNER
              </motion.span>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeStandard } } }}
              >
                Move. Care. Deliver. We Make <span className="text-[#58a6ff]">It Happen.</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg mt-4"
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeStandard } } }}
              >
                Safe, reliable and hassle-free relocation services across India and around the world.
              </motion.p>
            </motion.div>

            {/* Horizontal Form with Glassmorphism */}
            <motion.div
              className="w-full bg-[#001126]/10 backdrop-blur-md border border-white/10 rounded-[1.5rem] p-6 lg:p-8 shadow-2xl mt-auto"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: easeStandard }}
            >
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">Get Your Best Moving Quote</h2>
                <p className="text-xs md:text-sm text-gray-400 mt-1">Quick, Fast & Free Estimates</p>
              </div>

              <form className="flex flex-col lg:flex-row gap-3 md:gap-4 mb-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name")?.toString() ?? "";
                const phone = formData.get("phone")?.toString() ?? "";
                const email = formData.get("email")?.toString() ?? "";
                const service = formData.get("service")?.toString() ?? "";
                const fromCity = formData.get("fromCity")?.toString() ?? "";
                const toCity = formData.get("toCity")?.toString() ?? "";
                const lift = formData.get("lift")?.toString() ?? "";
                const date = formData.get("date")?.toString() ?? "";
                const prettyDate = date
                  ? new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
                  : "";

                const base = new URL("https://wa.me/918000189153");
                const message = [
                  "Hello Globe Relocation, I'd like a quote for shifting.",
                  "",
                  `Name: ${name}`,
                  `Phone: ${phone}`,
                  email ? `Email: ${email}` : "",
                  `Service: ${service}`,
                  `From: ${fromCity}`,
                  `To: ${toCity}`,
                  lift ? `Lift Available: ${lift}` : "",
                  prettyDate ? `Preferred Date: ${prettyDate}` : "",
                  "",
                  "Please help me plan my move.",
                ].filter(Boolean).join("\n");
                base.searchParams.set("text", message);
                window.open(base.toString(), "_blank");
              }}>
                <div className="flex-1 min-w-[140px] relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <input name="name" type="text" placeholder="Your Name" className="w-full pl-10 pr-4 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-800" required />
                </div>
                <div className="flex-1 min-w-[140px] relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <input name="phone" type="tel" placeholder="Phone Number" className="w-full pl-10 pr-4 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-800" required />
                </div>
                <div className="flex-1 min-w-[140px] relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <input name="email" type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-800" />
                </div>
                <div className="flex-1 min-w-[140px]">
                  <select name="service" className="w-full px-4 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-800 appearance-none" required>
                    <option value="">Select Service</option>
                    <option value="Home Shifting">Home Shifting</option>
                    <option value="Local Shifting">Local Shifting</option>
                    <option value="Office Relocation">Office Relocation</option>
                    <option value="Vehicle Transport">Vehicle Transport</option>
                    <option value="International">International</option>
                  </select>
                </div>
                <div className="flex-1 min-w-[140px]">
                  <select name="lift" className="w-full px-4 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-sm text-gray-800 appearance-none" defaultValue="" required>
                    <option value="">Lift Available?</option>
                    <option value="Yes">Lift — Yes</option>
                    <option value="No">Lift — No</option>
                  </select>
                </div>
                <div className="flex-1 min-w-[140px] relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 z-10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  <input
                    name="date"
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    onClick={(e) => { try { e.currentTarget.showPicker?.(); } catch { /* unsupported */ } }}
                    aria-label="Preferred shifting date"
                    className="w-full pl-10 pr-3 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-[12px] md:text-sm text-gray-600 cursor-pointer"
                  />
                </div>
                <div className="flex gap-3 lg:flex-row w-full lg:w-auto">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <input name="fromCity" type="text" placeholder="Moving From" className="w-full pl-9 pr-2 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-[12px] md:text-sm text-gray-800" required />
                  </div>
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <input name="toCity" type="text" placeholder="Moving To" className="w-full pl-9 pr-2 py-3 md:py-3.5 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2] text-[12px] md:text-sm text-gray-800" required />
                  </div>
                </div>
                <div className="w-full lg:w-auto">
                  <button type="submit" className="w-full lg:w-auto bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-3 md:py-3.5 px-6 rounded-lg transition-colors duration-300 text-sm whitespace-nowrap flex items-center justify-center gap-2 shadow-lg shadow-[#0A58CA]/30">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    Get Quote
                  </button>
                </div>
              </form>

              {/* Features row inside the form container (Desktop) */}
              <div className="hidden md:grid bg-white rounded-xl py-6 px-4 grid-cols-4 gap-4 divide-x divide-gray-100">
                <div className="flex flex-col items-center text-center gap-2 px-4">
                  <div className="text-[#0A58CA] shrink-0 mb-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-[15px] font-extrabold text-[#001126] mb-1">100% Secure</p>
                    <p className="text-[12px] text-gray-500 font-medium">Your data is safe with us</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2 px-4">
                  <div className="text-[#0A58CA] shrink-0 mb-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-[15px] font-extrabold text-[#001126] mb-1">Quick Response</p>
                    <p className="text-[12px] text-gray-500 font-medium">We respond within 15 mins</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2 px-4">
                  <div className="text-[#0A58CA] shrink-0 w-8 h-8 rounded-full border border-[#0A58CA] flex items-center justify-center font-bold text-lg mb-2">
                    ₹
                  </div>
                  <div>
                    <p className="text-[15px] font-extrabold text-[#001126] mb-1">Best Price Guarantee</p>
                    <p className="text-[12px] text-gray-500 font-medium">Get the most competitive rates</p>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center gap-2 px-4">
                  <div className="text-[#0A58CA] shrink-0 mb-2">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                  </div>
                  <div>
                    <p className="text-[15px] font-extrabold text-[#001126] mb-1">24/7 Support</p>
                    <p className="text-[12px] text-gray-500 font-medium">We are here to help</p>
                  </div>
                </div>
              </div>

              {/* Mobile Security Tag (Mobile Only, Inside the Card) */}
              <div className="md:hidden flex justify-center items-center gap-2 pt-2 text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#58a6ff]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                <span className="text-[11px] font-medium opacity-90">100% Secure. We never share your data.</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mobile Trust Badge Bar (Mobile Only, Outside the Card) */}
        <div className="md:hidden flex py-3 bg-white border-b border-gray-100">
          <div className="container mx-auto px-1 w-full">
            <div className="grid grid-cols-4 divide-x divide-gray-100">
              <div className="flex flex-col items-center text-center px-1">
                <div className="text-[#0A58CA] mb-1.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                </div>
                <strong className="text-[9px] font-bold text-gray-800 leading-tight">100% Secure</strong>
                <span className="text-[7px] text-gray-500 mt-0.5 leading-tight">Your data is safe with us</span>
              </div>
              <div className="flex flex-col items-center text-center px-1">
                <div className="text-[#0A58CA] mb-1.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <strong className="text-[9px] font-bold text-gray-800 leading-tight">Quick Response</strong>
                <span className="text-[7px] text-gray-500 mt-0.5 leading-tight">We respond within 15 mins</span>
              </div>
              <div className="flex flex-col items-center text-center px-1">
                <div className="text-[#0A58CA] mb-1.5 bg-blue-50 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px]">
                  ₹
                </div>
                <strong className="text-[9px] font-bold text-gray-800 leading-tight">Best Price</strong>
                <span className="text-[7px] text-gray-500 mt-0.5 leading-tight">Most competitive rates</span>
              </div>
              <div className="flex flex-col items-center text-center px-1">
                <div className="text-[#0A58CA] mb-1.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                </div>
                <strong className="text-[9px] font-bold text-gray-800 leading-tight">24/7 Support</strong>
                <span className="text-[7px] text-gray-500 mt-0.5 leading-tight">We are here to help</span>
              </div>
            </div>
          </div>
        </div>

        {/* BANGALORE OFFER MARQUEE BANNER */}
        <section className="relative bg-gradient-to-r from-[#001126] via-[#002d5c] to-[#001126] py-7 md:py-9 overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#0A58CA] rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-[#58a6ff] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

          <div className="relative z-10">
            {/* Heading row */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#fca311] text-[#001126] flex items-center justify-center shrink-0 shadow-lg shadow-[#fca311]/30">
                  <FaTruckMoving size={20} />
                </div>
                <div>
                  <p className="text-[#58a6ff] text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-2">
                    <FaTag size={10} /> Bangalore Special Offer
                  </p>
                  <h3 className="text-white text-lg md:text-2xl font-extrabold leading-tight">
                    Shifting from Bangalore? Get <span className="text-[#fca311]">Flat 10% OFF</span>
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setShowPricing(true)}
                className="self-start md:self-auto bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 text-sm whitespace-nowrap flex items-center gap-2 shadow-lg shadow-[#0A58CA]/30"
              >
                <FaRupeeSign size={13} /> Check Full Pricing <FaArrowRight size={12} />
              </button>
            </div>

            {/* Infinite marquee track */}
            <div className="marquee-track relative w-full overflow-hidden">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[#001126] to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[#001126] to-transparent z-20 pointer-events-none"></div>

              <div className="flex w-max animate-marquee">
                {[...bangalorePricing, ...bangalorePricing].map((route, i) => {
                  const discounted = Math.round((route.base * 0.9) / 100) * 100;
                  return (
                    <button
                      key={i}
                      onClick={() => setShowPricing(true)}
                      className="group mx-2 md:mx-3 shrink-0 text-left bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-sm border border-white/10 hover:border-[#58a6ff]/50 rounded-2xl px-5 py-4 w-[230px] md:w-[260px] transition-all duration-300"
                    >
                      {/* Route */}
                      <div className="flex items-center gap-2 text-white/90 text-[13px] font-bold mb-3">
                        <span>Bangalore</span>
                        <FaArrowRight size={10} className="text-[#58a6ff]" />
                        <span className="text-white">{route.to}</span>
                      </div>
                      {/* Price */}
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Starting from</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-[#fca311] text-xl font-extrabold">₹{inr(discounted)}</span>
                            <span className="text-white/40 text-xs line-through">₹{inr(route.base)}</span>
                          </div>
                        </div>
                        <span className="bg-[#fca311] text-[#001126] text-[10px] font-extrabold px-2 py-1 rounded-md shrink-0">10% OFF</span>
                      </div>
                      <span className="mt-3 inline-flex items-center gap-1 text-[#58a6ff] text-[11px] font-bold group-hover:gap-2 transition-all">
                        View pricing <FaArrowRight size={9} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING WIZARD */}
        <BookingWizard />

        {/* OUR SERVICES SECTION */}
        <section className="py-10 relative bg-[#fcfcfc] overflow-hidden">
          {/* Decorative blue blobs in background */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#58a6ff] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0A58CA] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 translate-x-1/3 translate-y-1/3"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <motion.div className="text-center mx-auto mb-10 flex flex-col items-center" {...headerReveal}>
              <div className="flex items-center gap-4 justify-center w-full mb-1">
                <div className="h-px w-12 bg-blue-200"></div>
                <h2 className="text-[12px] font-extrabold text-[#0A58CA] uppercase tracking-widest">Our Services</h2>
                <div className="h-px w-12 bg-blue-200"></div>
              </div>
              <h3 className="text-3xl md:text-[2.25rem] font-extrabold text-[#001126] mb-4">
                What We Offer
              </h3>
              <div className="flex items-center gap-3 justify-center text-[#0A58CA]">
                <div className="h-px w-16 bg-blue-200"></div>
                <FaTruck size={20} className="text-[#0A58CA]" />
                <div className="h-px w-16 bg-blue-200"></div>
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6" {...staggerParent}>
              {services.map((service, i) => {
                const Icon = serviceIconMap[service.icon] ?? FaTruck;
                return (
                  <motion.div
                    key={i}
                    variants={popCard}
                    className="group relative flex flex-col bg-white rounded-2xl md:rounded-[1.5rem] border border-gray-100 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_45px_-15px_rgba(10,88,202,0.4)] hover:border-[#0A58CA]/20 hover:-translate-y-1.5 transition-all duration-300"
                  >
                    {/* Accent bar that grows in on hover */}
                    <span className="absolute top-0 left-0 z-20 h-1 w-0 bg-gradient-to-r from-[#0A58CA] to-[#58a6ff] group-hover:w-full transition-all duration-500"></span>

                    {/* Image area */}
                    <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#eef4ff] to-white">
                      <img
                        src={service.imgUrl}
                        alt={service.title}
                        className="w-full h-auto group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                      {/* Glass icon chip */}
                      <div className="absolute top-2.5 left-2.5 md:top-3 md:left-3 w-9 h-9 md:w-11 md:h-11 rounded-xl bg-white/85 backdrop-blur-md border border-white/70 shadow-md text-[#0A58CA] flex items-center justify-center group-hover:bg-[#0A58CA] group-hover:text-white transition-colors duration-300">
                        <Icon size={16} className="md:hidden" />
                        <Icon size={20} className="hidden md:block" />
                      </div>
                      {/* Bottom fade to blend image into the card */}
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent"></div>
                    </div>

                    {/* Text content */}
                    <div className="p-4 md:p-6 flex flex-col items-center text-center flex-grow">
                      <h4 className="text-[13px] md:text-[17px] font-extrabold text-gray-900 mb-1 md:mb-2 leading-tight group-hover:text-[#0A58CA] transition-colors duration-300">{service.title}</h4>
                      <p className="text-[10px] md:text-[12px] text-gray-500 leading-relaxed mb-3 md:mb-5 flex-grow hidden md:block">{service.desc}</p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-auto inline-flex items-center gap-1.5 px-3.5 md:px-4 py-1.5 md:py-2 rounded-full border border-[#0A58CA]/30 text-[#0A58CA] text-[11px] md:text-[12px] font-bold group-hover:bg-[#0A58CA] group-hover:text-white group-hover:border-[#0A58CA] transition-all duration-300"
                      >
                        Read More
                        <FaArrowRight size={10} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="py-16 bg-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f3f8ff] rounded-full filter blur-3xl opacity-50"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left Image Side */}
              <motion.div className="relative mx-auto max-w-lg lg:max-w-none" {...fromLeft}>
                {/* Dotted pattern behind */}
                <div className="absolute -top-6 -left-6 w-32 h-32 opacity-10" style={{ backgroundImage: "radial-gradient(#0A58CA 2px, transparent 2px)", backgroundSize: "16px 16px" }}></div>

                <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
                  <img src="https://ik.imagekit.io/khibl45oa/who_we_are.png" alt="About Globe Relocation" className="w-full h-auto object-cover min-h-[400px]" />
                </div>

                {/* 7+ Years Badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 lg:-right-10 bg-[#00458b] text-white px-8 py-5 rounded-xl shadow-xl z-20 flex items-center gap-4"
                  initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.6, delay: 0.4, ease: easeOutBack } }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <span className="text-4xl font-extrabold"><CountUp value="7+" /></span>
                  <span className="text-[11px] font-bold leading-tight uppercase tracking-widest text-white/90">Years Of<br />Trusted Service</span>
                </motion.div>
              </motion.div>

              {/* Right Content Side */}
              <motion.div className="space-y-6 lg:pl-8" {...fromRight}>
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-8 bg-[#0A58CA]"></div>
                  <h2 className="text-[11px] font-extrabold text-[#0A58CA] tracking-[0.2em] uppercase">Who We Are</h2>
                </div>

                <h3 className="text-3xl md:text-[2.25rem] font-extrabold text-[#001126] leading-tight">
                  Reliable Shifting & Relocation Services by <span className="text-[#0A58CA]">Globe Relocation</span> Packers and Movers Bangalore.
                </h3>

                <p className="text-gray-900 font-semibold text-[14px] leading-relaxed">
                  Moving to a new home, office, or transporting vehicles can feel overwhelming. At <span className="font-bold">Globe Relocation Packers and Movers Bangalore</span>, we are committed to making your relocation journey smooth, secure, and stress-free. Whether shifting locally or relocating all over India, our team handles every aspect of your move with extreme care and precision.
                </p>

                <p className="text-gray-500 text-[13px] leading-relaxed">
                  With over 40+ years of professional experience, we have established ourselves as one of India's most trusted packing and moving brands. We use industry-standard packaging materials, modern cargo carriers, and structured loading systems to ensure all your precious goods and vehicles reach their destination safely, on time, and damage-free.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <div className="flex items-center gap-3 bg-[#f8fbff] p-3 rounded-xl border border-blue-50/50">
                    <div className="w-8 h-8 bg-[#0A58CA] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                      <FaShieldAlt size={12} />
                    </div>
                    <span className="text-gray-800 font-bold text-[13px]">Fully Insured Shifting</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#f8fbff] p-3 rounded-xl border border-blue-50/50">
                    <div className="w-8 h-8 bg-[#0A58CA] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                      <FaMapMarkerAlt size={12} />
                    </div>
                    <span className="text-gray-800 font-bold text-[13px]">Modern GPS Fleet</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#f8fbff] p-3 rounded-xl border border-blue-50/50">
                    <div className="w-8 h-8 bg-[#0A58CA] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                      <FaCheckCircle size={12} />
                    </div>
                    <span className="text-gray-800 font-bold text-[13px]">Trained Packing Crew</span>
                  </div>
                  <div className="flex items-center gap-3 bg-[#f8fbff] p-3 rounded-xl border border-blue-50/50">
                    <div className="w-8 h-8 bg-[#0A58CA] text-white rounded-full flex items-center justify-center shrink-0 shadow-md">
                      <FaRegClock size={12} />
                    </div>
                    <span className="text-gray-800 font-bold text-[13px]">On-Time Safe Delivery</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-6">
                  <Link href="/about" className="bg-[#0A58CA] hover:bg-[#00458b] text-white px-6 py-3.5 rounded-lg font-bold transition-all shadow-lg shadow-[#0A58CA]/30 text-sm flex items-center gap-2">
                    Read More About Us <span className="text-lg leading-none">→</span>
                  </Link>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#f8fbff] rounded-full flex items-center justify-center shrink-0 border border-blue-100">
                      <FaPhoneAlt className="text-[#0A58CA]" size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1">Talk to an expert</p>
                      <a href="tel:+918000189153" className="text-[#002d5c] font-extrabold text-lg hover:text-[#0A58CA] transition-colors">+91 80001 89153</a>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="py-16 bg-[#fafbfc] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
            <motion.div className="text-center mx-auto mb-12 flex flex-col items-center" {...headerReveal}>
              <div className="w-16 h-16 rounded-full border-2 border-[#0A58CA] flex items-center justify-center relative mb-4">
                {/* Floating small stars */}
                <FaStar className="absolute -top-1 -left-2 text-blue-200 text-[10px]" />
                <FaStar className="absolute top-2 -right-4 text-blue-200 text-[12px]" />
                <FaStar className="absolute -bottom-2 -left-4 text-blue-200 text-[8px]" />
                <FaStar className="text-[#0A58CA]" size={24} />
              </div>
              <h2 className="text-[12px] font-extrabold text-[#0A58CA] tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
                <span className="text-[#0A58CA]">◆</span> REVIEWS <span className="text-[#0A58CA]">◆</span>
              </h2>
              <h3 className="text-3xl md:text-[2.25rem] font-extrabold text-[#001126] mb-4">
                What Our Customers Say
              </h3>
              <div className="flex items-center gap-3 justify-center text-[#0A58CA] mb-6">
                <div className="h-px w-16 bg-blue-200"></div>
                <FaTruck size={20} className="text-[#0A58CA]" />
                <div className="h-px w-16 bg-blue-200"></div>
              </div>
              <p className="text-gray-500 text-sm max-w-2xl mx-auto">
                Real experiences from our happy customers who trust us for their relocation and transportation needs.
              </p>
            </motion.div>

            {/* Reviews Grid (desktop / tablet) */}
            <motion.div className="hidden md:grid md:grid-cols-3 gap-6 mb-16" {...staggerParent}>
              {reviews.map((review, i) => (
                <motion.div key={i} variants={popCard}>
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </motion.div>

            {/* Reviews Carousel (mobile) */}
            <MobileReviewsCarousel />

            {/* Stats Pill Bar */}
            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-3xl md:rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-blue-50 p-6 md:p-4 overflow-hidden mt-8"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeStandard } }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-y-0 divide-y-0 md:divide-x divide-gray-100">
                <div className="flex items-center justify-center gap-4 px-2">
                  <div className="w-12 h-12 rounded-xl bg-[#0A58CA] text-white flex items-center justify-center shrink-0 shadow-md">
                    <FaStar className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[18px] font-extrabold text-[#001126] leading-tight flex items-baseline gap-1">
                      4.9/5
                    </p>
                    <p className="font-bold text-gray-500 text-[11px] mt-0.5">From 12,500+ Reviews</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 px-2">
                  <div className="w-12 h-12 rounded-xl bg-[#f4f7ff] text-[#0A58CA] flex items-center justify-center shrink-0">
                    <FaUserFriends className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[18px] font-extrabold text-[#001126] leading-tight flex items-baseline gap-1">
                      <CountUp value="10,000+" />
                    </p>
                    <p className="font-bold text-gray-500 text-[11px] mt-0.5">Happy Customers</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 px-2">
                  <div className="w-12 h-12 rounded-xl bg-[#f4f7ff] text-[#0A58CA] flex items-center justify-center shrink-0">
                    <FaShieldAlt className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[18px] font-extrabold text-[#001126] leading-tight flex items-baseline gap-1">
                      <CountUp value="100%" />
                    </p>
                    <p className="font-bold text-gray-500 text-[11px] mt-0.5">Verified Reviews.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 px-2">
                  <div className="w-12 h-12 rounded-xl bg-[#f4f7ff] text-[#0A58CA] flex items-center justify-center shrink-0">
                    <FaCommentDots className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[18px] font-extrabold text-[#001126] leading-tight flex items-baseline gap-1">
                      <CountUp value="98%" />
                    </p>
                    <p className="font-bold text-gray-500 text-[11px] mt-0.5">Would Recommend Us</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ SECTION */}
        {/* LOCATIONS SECTION */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <motion.h3 className="text-[17px] md:text-xl font-extrabold text-gray-900 mb-6" {...fadeUp}>Search By Location</motion.h3>
            <div className="w-full h-px bg-gray-100 mb-8"></div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-6 md:gap-x-4 md:gap-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }}
            >
              {locations.map((loc, i) => (
                <motion.div key={i} variants={fadeItem} className="flex items-start gap-2 group">
                  <span className="text-gray-400 mt-[6px] text-[8px]">•</span>
                  <Link href={getCityUrlByName(loc) ?? "#"} className="text-[11px] font-semibold text-gray-600 hover:text-[#0A58CA] transition-colors leading-relaxed">
                    Packers & Movers {loc}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 bg-white relative">
          <div className="max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div className="text-center mx-auto mb-16 flex flex-col items-center" {...headerReveal}>
              <div className="flex items-center gap-4 justify-center w-full mb-4">
                <div className="h-[1px] w-12 bg-[#0A58CA]/40"></div>
                <div className="bg-[#0A58CA] text-white text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.1em]">
                  FAQ
                </div>
                <div className="h-[1px] w-12 bg-[#0A58CA]/40"></div>
              </div>

              <h3 className="text-3xl md:text-[2.25rem] font-extrabold text-[#001126] mb-4">
                Frequently Asked Questions
              </h3>

              <div className="flex items-center gap-3 justify-center text-[#0A58CA] mb-6">
                <div className="h-px w-16 bg-blue-200"></div>
                <FaTruck size={20} className="text-[#0A58CA]" />
                <div className="h-px w-16 bg-blue-200"></div>
              </div>

              <p className="text-gray-500 text-[14px] max-w-2xl mx-auto font-medium">
                Find answers to common questions about our moving and transportation services.
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto flex flex-col gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div key={index} variants={fadeItem} className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-[#0A58CA]/30 bg-[#f8fbff]' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                    <button
                      className="w-full text-left p-5 focus:outline-none flex justify-between items-start gap-4"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <div className="flex gap-4 items-start">
                        <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${isOpen ? 'bg-[#0A58CA] text-white shadow-md' : 'bg-[#eef4ff] text-[#0A58CA]'}`}>
                          <faq.icon size={16} />
                        </div>
                        <div className="mt-[10px] text-[13px] font-bold text-gray-900 leading-snug pr-4">
                          {index + 1}. {faq.q}
                        </div>
                      </div>
                      <div className={`mt-[12px] shrink-0 text-[10px] font-bold ${isOpen ? 'text-gray-400' : 'text-[#0A58CA]'}`}>
                        {isOpen ? <FaTimes /> : <FaPlus />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-[4.5rem] pb-6 pt-0 text-[13px] font-medium text-gray-500 leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Still have questions banner */}
            <motion.div
              className="mt-20 bg-[#002d5c] rounded-[1.5rem] p-8 md:p-10 flex flex-col items-center justify-center text-center gap-4 shadow-[0_10px_40px_rgb(0,0,0,0.1)] relative max-w-5xl mx-auto border-t-4 border-[#0A58CA]"
              style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 2px, transparent 2px)", backgroundSize: "20px 20px" }}
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeStandard } }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full border border-dashed border-[#0A58CA] flex items-center justify-center shrink-0 mb-2 absolute -top-8 bg-[#002d5c] z-20">
                <div className="w-12 h-12 bg-[#00458b] rounded-full flex items-center justify-center text-white shadow-lg">
                  <FaHeadset size={24} />
                </div>
              </div>
              <div className="relative z-10 w-full bg-[#002d5c]/80 py-2 rounded-xl backdrop-blur-sm">
                <h4 className="text-white text-[22px] md:text-[28px] font-extrabold mb-3 tracking-wide">Still have questions? We&apos;re here to help!</h4>
                <p className="text-blue-50 text-[15px] font-medium flex flex-wrap items-center justify-center gap-2">
                  Call us at <a href="tel:+918000189153" className="font-extrabold text-white border-b border-dashed border-white/50 pb-0.5 hover:text-blue-200 transition-colors">+91 80001 89153</a> or email us at <a href="mailto:info@globerelocation.com" className="font-extrabold text-white border-b border-dashed border-white/50 pb-0.5 hover:text-blue-200 transition-colors">info@globerelocation.com</a>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Floating Action Buttons */}
        <>
          {/* Desktop Floating Action Buttons */}
          <div className="hidden md:flex fixed bottom-8 right-6 z-50 flex-col gap-4">
            <a href="tel:+918000189153" className="w-12 h-12 bg-[#00458b] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#00458b]/30 hover:scale-110 transition-transform">
              <FaPhoneAlt size={20} />
            </a>
            <a href="https://wa.me/918000189153" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform">
              <FaWhatsapp size={24} />
            </a>
            <a href="/contact" className="w-12 h-12 bg-[#fca311] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#fca311]/30 hover:scale-110 transition-transform">
              <FaHeadset size={20} />
            </a>
          </div>

          {/* Mobile Sticky Bottom Bar */}
          <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 grid grid-cols-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <a href="tel:+918000189153" className="flex flex-col items-center justify-center py-2 gap-1 border-r border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-[#00458b] text-white rounded-full flex items-center justify-center">
                <FaPhoneAlt size={14} />
              </div>
              <span className="text-[11px] font-bold text-gray-800">Call Now</span>
            </a>
            <a href="https://wa.me/918000189153" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-2 gap-1 border-r border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-[#25D366] text-white rounded-full flex items-center justify-center">
                <FaWhatsapp size={16} />
              </div>
              <span className="text-[11px] font-bold text-gray-800">WhatsApp Us</span>
            </a>
            <a href="/contact" className="flex flex-col items-center justify-center py-2 gap-1 hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 bg-[#fca311] text-[#001126] rounded-full flex items-center justify-center">
                <FaHeadset size={14} />
              </div>
              <span className="text-[11px] font-bold text-gray-800">Call Me Back</span>
            </a>
          </div>
        </>

        {/* PRICING TABLE MODAL */}
        <AnimatePresence>
          {showPricing && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-[#001126]/70 backdrop-blur-sm"
                onClick={() => setShowPricing(false)}
              ></div>

              {/* Dialog */}
              <motion.div
                className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.3, ease: easeStandard }}
              >
                {/* Header */}
                <div className="relative bg-gradient-to-r from-[#002d5c] to-[#0A58CA] px-5 md:px-8 py-5 md:py-6 text-white shrink-0">
                  <button
                    onClick={() => setShowPricing(false)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                    aria-label="Close pricing"
                  >
                    <FaTimes size={16} />
                  </button>
                  <p className="text-[#9fc4ff] text-[10px] md:text-[11px] font-extrabold tracking-[0.2em] uppercase flex items-center gap-2 mb-1">
                    <FaTruckMoving size={12} /> Domestic Cost Calculator
                  </p>
                  <h3 className="text-xl md:text-2xl font-extrabold pr-10">
                    Packers &amp; Movers Pricing in Bangalore
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-2 bg-[#fca311] text-[#001126] text-[11px] font-extrabold px-3 py-1 rounded-full">
                    <FaTag size={10} /> Flat 10% OFF on all routes
                  </div>
                </div>

                {/* Scrollable body */}
                <div className="overflow-y-auto px-4 md:px-8 py-5 md:py-6 bg-[#fcfdff]">
                  {/* Desktop table */}
                  <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse text-sm">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#0A58CA] to-[#0070f3] text-white text-left">
                          <th className="px-4 py-3.5 font-extrabold whitespace-nowrap">From</th>
                          <th className="px-4 py-3.5 font-extrabold whitespace-nowrap">To</th>
                          <th className="px-4 py-3.5 font-extrabold whitespace-nowrap">1 BHK</th>
                          <th className="px-4 py-3.5 font-extrabold whitespace-nowrap">2 BHK</th>
                          <th className="px-4 py-3.5 font-extrabold whitespace-nowrap">3 BHK</th>
                          <th className="px-4 py-3.5 font-extrabold whitespace-nowrap">Few Items</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bangalorePricing.map((row, i) => (
                          <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-[#f6f9ff]"} hover:bg-[#eef4ff] transition-colors`}>
                            <td className="px-4 py-3 font-semibold text-gray-700 border-t border-gray-100 whitespace-nowrap">
                              <span className="inline-flex items-center gap-1.5"><FaMapMarkerAlt className="text-[#0A58CA]" size={11} /> Bangalore</span>
                            </td>
                            <td className="px-4 py-3 font-bold text-[#001126] border-t border-gray-100 whitespace-nowrap">{row.to}</td>
                            <td className="px-4 py-3 text-gray-600 border-t border-gray-100 whitespace-nowrap">₹{row.bhk1}</td>
                            <td className="px-4 py-3 text-gray-600 border-t border-gray-100 whitespace-nowrap">₹{row.bhk2}</td>
                            <td className="px-4 py-3 text-gray-600 border-t border-gray-100 whitespace-nowrap">₹{row.bhk3}</td>
                            <td className="px-4 py-3 text-gray-600 border-t border-gray-100 whitespace-nowrap">₹{row.few}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile cards */}
                  <div className="md:hidden flex flex-col gap-3">
                    {bangalorePricing.map((row, i) => (
                      <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                        <div className="flex items-center gap-2 bg-[#eef4ff] px-4 py-2.5 text-[13px] font-extrabold text-[#001126]">
                          <span className="text-gray-600">Bangalore</span>
                          <FaArrowRight size={9} className="text-[#0A58CA]" />
                          <span>{row.to}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-px bg-gray-100">
                          {[
                            { label: "1 BHK Shifting", val: row.bhk1 },
                            { label: "2 BHK Shifting", val: row.bhk2 },
                            { label: "3 BHK Shifting", val: row.bhk3 },
                            { label: "Few Items", val: row.few },
                          ].map((c, j) => (
                            <div key={j} className="bg-white px-4 py-2.5">
                              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">{c.label}</p>
                              <p className="text-[13px] font-bold text-gray-800">₹{c.val}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-gray-400 mt-4 flex items-start gap-1.5">
                    <FaInfoCircle className="text-[#0A58CA] mt-0.5 shrink-0" size={12} />
                    Prices are indicative ranges and may vary with distance, volume, floor, and packing needs. The 10% discount applies to the final quote. Contact us for an exact estimate.
                  </p>
                </div>

                {/* Footer CTAs */}
                <div className="shrink-0 border-t border-gray-100 bg-white px-4 md:px-8 py-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+918000189153"
                    className="flex-1 bg-[#0A58CA] hover:bg-[#004bb5] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#0A58CA]/30"
                  >
                    <FaPhoneAlt size={14} /> Call for Best Quote
                  </a>
                  <a
                    href="https://wa.me/918000189153?text=Hi%20Globe%20Relocation%2C%20I%20want%20a%20quote%20for%20shifting%20from%20Bangalore%20with%20the%2010%25%20offer."
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#25D366] hover:bg-[#1eb858] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#25D366]/30"
                  >
                    <FaWhatsapp size={16} /> WhatsApp Us
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
