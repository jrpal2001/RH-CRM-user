// Mock data for RH Global CRM User Portal

export const currentUser = {
  id: "USR-9921",
  name: "Morgan Vance",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  email: "morgan.vance@example.com",
  phone: "+1 (555) 234-8910",
  passportNo: "A98234120",
  membership: "RH Platinum Traveler",
  destinationWishlist: ["Norway", "Austria", "Fiji", "Japan"]
};

export const relationshipManager = {
  name: "Sarah Jenkins",
  title: "Senior Visa & Holiday Consultant",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  phone: "+971 4 800 7445",
  whatsapp: "+971501234567",
  email: "sarah.j@rhglobalcrm.com",
  status: "Online Now"
};

export const userApplications = [
  {
    id: "RH-VSA-2026-8819",
    type: "visa",
    category: "Visa Application",
    country: "Australia",
    countryCode: "AU",
    flag: "🇦🇺",
    visaType: "Tourist Visitor Visa (Subclass 600)",
    applicantName: "Morgan Vance",
    passportNumber: "A98234120",
    submissionDate: "04 Oct 2026",
    estimatedCompletion: "18 Oct 2026",
    status: "approved", // "submitted" | "under_review" | "biometrics" | "approved" | "action_required"
    statusLabel: "Visa Granted & Ready to Download",
    currentStep: 4, // 0 to 4
    steps: [
      { id: 1, title: "Application Submitted", date: "04 Oct 2026", desc: "Form & initial documents filed online", done: true },
      { id: 2, title: "Document Verification", date: "06 Oct 2026", desc: "Verified by RH Global Compliance team", done: true },
      { id: 3, title: "Embassy Biometrics & Review", date: "10 Oct 2026", desc: "Biometrics processed at VFS Global center", done: true },
      { id: 4, title: "Visa Decision & Issuance", date: "13 Oct 2026", desc: "Department of Home Affairs approved Grant #610992", done: true },
    ],
    documents: [
      {
        id: "DOC-VSA-01",
        name: "Australia Official e-Visa Grant Notification",
        type: "PDF",
        size: "1.4 MB",
        date: "13 Oct 2026",
        downloadUrl: "#",
        badge: "Official Document"
      },
      {
        id: "DOC-VSA-02",
        name: "RH Global Verified Visa Dossier & Itinerary",
        type: "PDF",
        size: "2.8 MB",
        date: "06 Oct 2026",
        downloadUrl: "#",
        badge: "Travel Dossier"
      },
      {
        id: "DOC-VSA-03",
        name: "Embassy Fee & Processing Tax Invoice",
        type: "PDF",
        size: "420 KB",
        date: "04 Oct 2026",
        downloadUrl: "#",
        badge: "Payment Receipt"
      }
    ],
    notes: "Your Subclass 600 tourist visa has been granted with Multiple Entries valid for 12 months. Please print the Grant Notification and carry it with your physical passport."
  },
  {
    id: "RH-HLD-2026-3401",
    type: "holiday",
    category: "Holiday Package",
    country: "Austria & Switzerland",
    countryCode: "AT",
    flag: "🇦🇹",
    packageName: "Tyrolean Alps & Alpine Lakes Adventure",
    duration: "7 Days / 6 Nights",
    travelDates: "27 Nov 2026 – 03 Dec 2026",
    guestCount: 2,
    hotel: "Lenas Donau Hotel & Alpine Chalet Resort",
    status: "confirmed", // "confirmed" | "payment_pending" | "itinerary_draft"
    statusLabel: "Booking Confirmed & Vouchers Issued",
    currentStep: 3,
    steps: [
      { id: 1, title: "Booking Received", date: "28 Sep 2026", desc: "Travel itinerary customized with RH Concierge", done: true },
      { id: 2, title: "Flights & Hotels Secured", date: "01 Oct 2026", desc: "Emirates flight & boutique chalets locked in", done: true },
      { id: 3, title: "Travel Vouchers Issued", date: "05 Oct 2026", desc: "All vouchers and activity passes ready", done: true }
    ],
    documents: [
      {
        id: "DOC-HLD-01",
        name: "Confirmed Trip Itinerary & Hotel Vouchers",
        type: "PDF",
        size: "3.2 MB",
        date: "05 Oct 2026",
        downloadUrl: "#",
        badge: "Voucher"
      },
      {
        id: "DOC-HLD-02",
        name: "Emirates Airline Electronic Flight Tickets",
        type: "PDF",
        size: "860 KB",
        date: "02 Oct 2026",
        downloadUrl: "#",
        badge: "Boarding Pass"
      },
      {
        id: "DOC-HLD-03",
        name: "Allianz Comprehensive Travel Insurance Policy",
        type: "PDF",
        size: "1.1 MB",
        date: "05 Oct 2026",
        downloadUrl: "#",
        badge: "Insurance"
      }
    ],
    notes: "Your airport private chauffeur pick-up is arranged for Vienna International Airport (VIE) at Terminal 3."
  },
  {
    id: "RH-VSA-2026-9042",
    type: "visa",
    category: "Visa Application",
    country: "Schengen / France",
    countryCode: "FR",
    flag: "🇫🇷",
    visaType: "Schengen Multi-Entry Short Stay (Type C)",
    applicantName: "Morgan Vance",
    passportNumber: "A98234120",
    submissionDate: "12 Oct 2026",
    estimatedCompletion: "26 Oct 2026",
    status: "under_review",
    statusLabel: "Consulate Review in Progress",
    currentStep: 2,
    steps: [
      { id: 1, title: "Application Lodged", date: "12 Oct 2026", desc: "Dossier uploaded and pre-screened", done: true },
      { id: 2, title: "Embassy File Processing", date: "14 Oct 2026", desc: "Under internal review by French Consulate", done: true },
      { id: 3, title: "Decision & Passport Dispatch", date: "Pending", desc: "Estimated by 26 Oct 2026", done: false },
    ],
    documents: [
      {
        id: "DOC-VSA-FR-01",
        name: "Consulate Submission & Acknowledgment Slip",
        type: "PDF",
        size: "720 KB",
        date: "12 Oct 2026",
        downloadUrl: "#",
        badge: "Receipt"
      }
    ],
    notes: "Consulate processing typically takes 10 to 15 business days. Your relationship manager is actively monitoring updates."
  }
];

export const packagesCatalog = [
  {
    id: "PKG-01",
    title: "Tavarua Island Sanctuary",
    subtitle: "Spend little time in nature",
    country: "Fiji",
    flag: "🇫🇯",
    category: "holidays",
    badge: "Most Popular",
    heroImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.8,
    reviewsCount: "4.8k",
    duration: "10-12 Days",
    distance: "28km reef",
    weather: "29°C Tropical",
    price: 1850,
    priceNote: "per person (flights & villa included)",
    visaIncluded: true,
    visaStatus: "Visa on Arrival (RH Assistance Included)",
    tags: ["Beach & Lagoon", "Luxury Villa", "Surfing & Diving"],
    description: "Tavarua Island is a heart-shaped tropical paradise located in the Mamanuca Islands of Fiji, surrounded by crystal-clear waters and coral reefs. The island spans approximately 29 acres and is known for its luxury surf resort, pristine white sand beaches, and world-famous reef breaks.",
    routeList: [
      { day: "Day 1-2", stop: "Nadi International Airport arrival & luxury speedboat transfer to Tavarua" },
      { day: "Day 3-5", stop: "Private reef snorkeling, dolphin cruise & Cloudbreak surfing expedition" },
      { day: "Day 6-8", stop: "Fijian traditional cultural kava ceremony and sunset catamaran dinner" },
      { day: "Day 9-11", stop: "Spa wellness retreats & private sandbank picnic" },
      { day: "Day 12", stop: "Leisure morning, farewell souvenir presentation & departure transfer" }
    ],
    inclusions: [
      "11 nights in beachfront private bures",
      "All gourmet meals, fresh seafood & island beverages",
      "VIP Fijian entry visa fast-tracking",
      "Dedicated boat skipper and dive gear rental",
      "24/7 RH Global on-call concierge"
    ]
  },
  {
    id: "PKG-02",
    title: "The Sounds of Nature — Tyrolean Alps",
    subtitle: "Alpine peaks & crystal glaciers",
    country: "Austria",
    flag: "🇦🇹",
    category: "holidays",
    badge: "Trending",
    heroImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.9,
    reviewsCount: "3.2k",
    duration: "7 Days / 6 Nights",
    distance: "10 km daily treks",
    weather: "15°C Sunny Alpine",
    price: 1420,
    priceNote: "per person (hotel + alpine pass)",
    visaIncluded: true,
    visaStatus: "Schengen Fast-Track Support",
    tags: ["Hiking", "Kayaking", "Alpine Chalet"],
    description: "A real adventure where nature reveals its grandeur and beauty in its purest form. Discover the magic of Austrian mountains, soaring limestone crags, mirror-like glacier lakes, and authentic Tyrolean hospitality.",
    routeList: [
      { day: "Day 1", stop: "Vienna arrival, express panoramic train to Innsbruck, chalet check-in" },
      { day: "Day 2", stop: "Nordkette cable car ride with panoramic alpine summit hike" },
      { day: "Day 3-4", stop: "Zillertal Valley kayaking & crystal glacier cavern exploration" },
      { day: "Day 5-6", stop: "High-altitude mountain biking trails & traditional cheese making lodge" },
      { day: "Day 7", stop: "Scenic alpine railway return to Vienna and departure" }
    ],
    inclusions: [
      "6 nights in luxury 4-star mountain lodge",
      "Unlimited Tirol panoramic cable car pass",
      "Schengen tourist visa concierge and document vetting",
      "Professional certified mountain guide for all trails",
      "All breakfast buffet & gourmet 3-course dinners"
    ]
  },
  {
    id: "PKG-03",
    title: "Heart of Norway's Majestic Fjords",
    subtitle: "Pure nature & Northern wonders",
    country: "Norway",
    flag: "🇳🇴",
    category: "nature",
    badge: "Staff Pick",
    heroImage: "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.95,
    reviewsCount: "5.1k",
    duration: "10 Days",
    distance: "Fjord Cruise + 12km hike",
    weather: "12°C Crisp",
    price: 2190,
    priceNote: "per person (fjord cruises + hotel)",
    visaIncluded: true,
    visaStatus: "Schengen Visa Assistance",
    tags: ["Fjords", "Aurora Hunt", "Scenic Trains"],
    description: "Take the first step into an unforgettable journey through the deep glacial cuts, roaring waterfalls, and serene pine forests of western Norway, including the world-famous Flåm railway and Geirangerfjord.",
    routeList: [
      { day: "Day 1-2", stop: "Oslo modern architecture & historic Holmenkollen exploration" },
      { day: "Day 3-5", stop: "Bergen Hanseatic Wharf & electric boat cruise through Nærøyfjord" },
      { day: "Day 6-8", stop: "Scenic Flåm mountain railway and Trolltunga panoramic trek" },
      { day: "Day 9-10", stop: "Fjord-side sauna, cold plunge, and farewell Oslo gala dinner" }
    ],
    inclusions: [
      "9 nights in boutique Scandinavian fjord hotels",
      "Full first-class rail tickets & electric fjord cruises",
      "VIP Visa documentation pack by RH Global",
      "Daily guided nature walks and wildlife tracking"
    ]
  },
  {
    id: "PKG-04",
    title: "Kyoto Bamboo Groves & Ancient Temples",
    subtitle: "Timeless harmony & Zen gardens",
    country: "Japan",
    flag: "🇯🇵",
    category: "culture",
    badge: "Autumn Special",
    heroImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.88,
    reviewsCount: "2.9k",
    duration: "8 Days / 7 Nights",
    distance: "Kyoto & Nara loop",
    weather: "18°C Mild",
    price: 1680,
    priceNote: "per person (Ryokan & bullet train)",
    visaIncluded: true,
    visaStatus: "Japan eVisa Fast Track",
    tags: ["Culture", "Ryokan Stay", "Tea Ceremony"],
    description: "Step into centuries of tradition in Kyoto and Nara. Stroll through the misty Arashiyama bamboo forest, witness the gold leaf gleam of Kinkaku-ji, and savor authentic kaiseki dining.",
    routeList: [
      { day: "Day 1-2", stop: "Osaka arrival, express Shinkansen to Kyoto, traditional Ryokan check-in" },
      { day: "Day 3-4", stop: "Gion geisha district private walk, tea ceremony & Fushimi Inari torii gates" },
      { day: "Day 5-6", stop: "Nara deer park excursion & Zen garden rock meditation in Tenryu-ji" },
      { day: "Day 7-8", stop: "Kaiseki masterclass and bullet train back for departure" }
    ],
    inclusions: [
      "7 nights split between modern boutique hotel & luxury onsen Ryokan",
      "7-Day Japan Rail Pass",
      "RH Global expedited eVisa filing",
      "Private English-speaking cultural curator"
    ]
  },
  {
    id: "PKG-05",
    title: "Schengen Visa Express Multi-Country Pack",
    subtitle: "Fast-Track Visa Concierge for Europe",
    country: "Europe (29 Countries)",
    flag: "🇪🇺",
    category: "visa",
    badge: "99.4% Approval",
    heroImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.98,
    reviewsCount: "8.4k",
    duration: "10-15 Days Processing",
    distance: "Valid 29 Countries",
    weather: "All Seasons",
    price: 349,
    priceNote: "all-inclusive embassy slot + filing",
    visaIncluded: true,
    visaStatus: "Guaranteed Slot Appointment",
    tags: ["Multi-Entry", "Express Slot", "Full Dossier Prep"],
    description: "Our dedicated Schengen Visa department manages your entire application from priority slot booking at VFS/TLS, sworn itinerary preparation, flight and hotel reservations, to interview preparation.",
    routeList: [
      { day: "Step 1", stop: "Profile assessment & eligibility check within 2 business hours" },
      { day: "Step 2", stop: "Document verification, cover letter drafting & flight itinerary reservations" },
      { day: "Step 3", stop: "Priority biometrics appointment booking at the nearest embassy/VFS center" },
      { day: "Step 4", stop: "Passport tracking, status updates, and courier delivery to your doorstep" }
    ],
    inclusions: [
      "End-to-end dossier preparation & cover letter customization",
      "Guaranteed VFS / TLS priority appointment booking",
      "Complimentary €50,000 Schengen-compliant travel insurance certificate",
      "Mock visa interview coaching by former immigration advisors"
    ]
  },
  {
    id: "PKG-06",
    title: "Australia Visitor Visa (Subclass 600) Fast-Track",
    subtitle: "Complete digital lodgment & compliance",
    country: "Australia",
    flag: "🇦🇺",
    category: "visa",
    badge: "Top Visa Service",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.96,
    reviewsCount: "6.2k",
    duration: "7-14 Days Processing",
    distance: "1 Year Multiple Entry",
    weather: "All Year",
    price: 299,
    priceNote: "ImmiAccount filing & review",
    visaIncluded: true,
    visaStatus: "Australian Immi Verified",
    tags: ["Tourist & Business", "12-Month Multiple", "No Physical Passport Needed"],
    description: "Apply for your Australian subclass 600 tourist or business stream with zero stress. 100% digital electronic grant with our licensed immigration document prep experts.",
    routeList: [
      { day: "Step 1", stop: "Financial proof & ties to home country audit" },
      { day: "Step 2", stop: "Digital upload to Australian Department of Home Affairs ImmiAccount" },
      { day: "Step 3", stop: "Biometrics HAP ID generation and appointment scheduling" },
      { day: "Step 4", stop: "Instant e-Visa Grant PDF delivered straight to your portal" }
    ],
    inclusions: [
      "Complete electronic visa lodgment via authorized CRM portal",
      "Financial documentation structuring for maximum approval rate",
      "Direct communication with immigration case officers if requested",
      "Instant PDF grant verification with QR code"
    ]
  }
];

export const categoryPills = [
  { id: "all", label: "All Packages", icon: "Grid" },
  { id: "visa", label: "Visa Services", icon: "ShieldCheck" },
  { id: "holidays", label: "Holiday Packages", icon: "Palmtree" },
  // { id: "nature", label: "Nature & Adventure", icon: "Trees" },
  // { id: "culture", label: "Culture & City", icon: "Landmark" }
];
