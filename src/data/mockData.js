// Mock data for RH Global CRM User Portal (Company & Individual)

export const companyUser = {
  id: "CORP-8820",
  type: "company",
  name: "Sunil Mehta",
  companyName: "Apex Tours & Tech",
  contactPerson: "Sunil Mehta",
  role: "Contact Person",
  email: "info@apextours.com",
  phone: "+91 22 2800 1122",
  address: "45 BKC Complex, Mumbai",
  country: "India",
  totalEmployees: 18,
  totalApplications: 29,
  avatar: null,
  membership: "Apex Corporate Desk",
  registrationDate: "2025-11-20",
  accountStatus: "Active",
};

export const individualUser = {
  id: "USR-9921",
  type: "individual",
  name: "Vikramaditya Roy",
  applicantName: "Vikramaditya Roy",
  role: "Individual Traveler",
  email: "vikram.roy@gmail.com",
  phone: "+91 99112 23344",
  mobileNumber: "+91 99112 23344",
  country: "India",
  passportNo: "A98234120",
  avatar: null,
  registrationDate: "2026-08-14",
  accountStatus: "Active",
  membership: "Verified Individual Traveler",
};

export const currentUser = companyUser;

export const companyEmployees = [
  {
    id: "EMP-101",
    name: "Elena Rostova",
    designation: "VP of Engineering",
    department: "Technology",
    email: "elena.r@acmeglobal.com",
    phone: "+971 50 112 3491",
    passportNo: "P88129034",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    nationality: "United Kingdom",
    applicationIds: ["RH-VSA-2026-8819", "RH-HLD-2026-3401"],
  },
  {
    id: "EMP-102",
    name: "Marcus Aurelius Vance",
    designation: "Senior Solutions Architect",
    department: "Enterprise Solutions",
    email: "marcus.v@acmeglobal.com",
    phone: "+971 50 445 8821",
    passportNo: "A98234120",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    nationality: "Canada",
    applicationIds: ["RH-VSA-2026-9042"],
  },
  {
    id: "EMP-103",
    name: "Sophia Martinez",
    designation: "Director of International Expansion",
    department: "Business Development",
    email: "sophia.m@acmeglobal.com",
    phone: "+971 55 789 1234",
    passportNo: "E77491029",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    nationality: "Spain",
    applicationIds: ["RH-VSA-2026-7731", "RH-HLD-2026-5590"],
  },
  {
    id: "EMP-104",
    name: "Rajesh Kothari",
    designation: "Lead Infrastructure Consultant",
    department: "Cloud Operations",
    email: "rajesh.k@acmeglobal.com",
    phone: "+971 52 334 9012",
    passportNo: "K44102981",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    nationality: "India",
    applicationIds: ["RH-VSA-2026-6644"],
  },
];

export const allApplicationsData = [
  {
    id: "RH-VSA-2026-8819",
    type: "visa",
    category: "Visa Application",
    country: "Australia",
    countryCode: "AU",
    flag: "🇦🇺",
    visaType: "Business / Tourist Visitor Visa (Subclass 600)",
    applicantName: "Elena Rostova",
    employeeId: "EMP-101",
    passportNumber: "P88129034",
    submissionDate: "04 Oct 2026",
    estimatedCompletion: "18 Oct 2026",
    status: "approved", // "active" | "under_review" | "approved" | "pending"
    statusGroup: "completed", // "current" | "pending" | "completed"
    statusLabel: "Visa Granted & Ready to Download",
    currentStep: 4,
    steps: [
      { id: 1, title: "Application Submitted", date: "04 Oct 2026", desc: "Form & initial documents filed online", done: true },
      { id: 2, title: "Document Verification", date: "06 Oct 2026", desc: "Verified by RH Global Compliance team", done: true },
      { id: 3, title: "Embassy Biometrics & Review", date: "10 Oct 2026", desc: "Biometrics processed at VFS Global center", done: true },
      { id: 4, title: "Visa Decision & Issuance", date: "13 Oct 2026", desc: "Department of Home Affairs approved Grant #610992", done: true },
    ],
    downloads: {
      application: {
        name: "Australia_Visa_Application_Form_Filled.pdf",
        type: "PDF",
        size: "1.2 MB",
        badge: "Filed Application",
      },
      invoice: {
        name: "RHGlobal_Invoice_INV-AU-99214.pdf",
        type: "PDF",
        size: "450 KB",
        badge: "Official Tax Invoice",
      },
      document: {
        name: "Australian_Government_eVisa_Grant_Notice.pdf",
        type: "PDF",
        size: "1.8 MB",
        badge: "Approved eVisa Grant",
      },
    },
    notes: "Your Subclass 600 multiple entry visa has been granted. Valid for 12 months with up to 90 days stay per entry.",
    paymentDetails: {
      feeLabel: "TOTAL VISA FEE",
      totalFee: 21000,
      totalPaid: 21000,
      pendingBalance: 0,
      paymentStatus: "PAID IN FULL",
      transactions: [
        {
          id: "PAY-1001",
          type: "ADVANCE DEPOSIT",
          mode: "Online UPI / Netbanking",
          amount: 10000,
          date: "2026-10-02",
          reference: "TXN-998120"
        },
        {
          id: "PAY-1002",
          type: "FINAL BALANCE",
          mode: "Credit Card / Gateway",
          amount: 11000,
          date: "2026-10-05",
          reference: "TXN-998144"
        }
      ]
    }
  },
  {
    id: "RH-HLD-2026-3401",
    type: "holiday",
    category: "Holiday / Tour Package",
    country: "Austria & Switzerland",
    countryCode: "AT",
    flag: "🇦🇹",
    packageName: "Tyrolean Alps & Alpine Lakes Corporate Retreat",
    applicantName: "Elena Rostova",
    employeeId: "EMP-101",
    passportNumber: "P88129034",
    duration: "7 Days / 6 Nights",
    travelDates: "27 Nov 2026 – 03 Dec 2026",
    submissionDate: "28 Sep 2026",
    guestCount: 2,
    hotel: "Lenas Donau Hotel & Alpine Chalet Resort",
    status: "approved",
    statusGroup: "completed",
    statusLabel: "Booking Confirmed & Vouchers Ready",
    currentStep: 3,
    steps: [
      { id: 1, title: "Booking Received", date: "28 Sep 2026", desc: "Travel itinerary customized with RH Concierge", done: true },
      { id: 2, title: "Flights & Hotels Secured", date: "01 Oct 2026", desc: "Emirates flight & chalets locked in", done: true },
      { id: 3, title: "Travel Vouchers Issued", date: "05 Oct 2026", desc: "All vouchers and boarding passes ready", done: true },
    ],
    downloads: {
      application: {
        name: "Corporate_Holiday_Booking_Request.pdf",
        type: "PDF",
        size: "950 KB",
        badge: "Booking Request",
      },
      invoice: {
        name: "Tax_Invoice_Alps_Retreat_INV-7731.pdf",
        type: "PDF",
        size: "520 KB",
        badge: "Payment Receipt",
      },
      document: {
        name: "Confirmed_Flight_Ticket_And_Hotel_Vouchers.pdf",
        type: "PDF",
        size: "3.4 MB",
        badge: "E-Tickets & Hotel Vouchers",
      },
    },
    notes: "Private executive airport transfer has been scheduled for Vienna International Airport (VIE).",
    paymentDetails: {
      feeLabel: "TOTAL PACKAGE FEE",
      totalFee: 118000,
      totalPaid: 118000,
      pendingBalance: 0,
      paymentStatus: "PAID IN FULL",
      transactions: [
        {
          id: "PAY-1005",
          type: "BOOKING ADVANCE",
          mode: "Corporate Card",
          amount: 50000,
          date: "2026-09-28",
          reference: "TXN-661209"
        },
        {
          id: "PAY-1006",
          type: "FINAL SETTLEMENT",
          mode: "Online Netbanking",
          amount: 68000,
          date: "2026-10-01",
          reference: "TXN-661840"
        }
      ]
    }
  },
  {
    id: "RH-VSA-2026-9042",
    type: "visa",
    category: "Visa Application",
    country: "Schengen / France",
    countryCode: "FR",
    flag: "🇫🇷",
    visaType: "Schengen Multi-Entry Short Stay (Type C)",
    applicantName: "Marcus Vance",
    employeeId: "EMP-102",
    passportNumber: "A98234120",
    submissionDate: "12 Oct 2026",
    estimatedCompletion: "26 Oct 2026",
    status: "under_review",
    statusGroup: "current",
    statusLabel: "Consulate Review in Progress",
    currentStep: 2,
    steps: [
      { id: 1, title: "Application Lodged", date: "12 Oct 2026", desc: "Dossier uploaded and pre-screened", done: true },
      { id: 2, title: "Embassy File Processing", date: "14 Oct 2026", desc: "Under internal review by French Consulate", done: true },
      { id: 3, title: "Decision & Passport Dispatch", date: "Pending", desc: "Estimated by 26 Oct 2026", done: false },
    ],
    downloads: {
      application: {
        name: "Schengen_France_Visa_Application_Signed.pdf",
        type: "PDF",
        size: "1.1 MB",
        badge: "Application Form",
      },
      invoice: {
        name: "Embassy_Appointment_Invoice_VFS.pdf",
        type: "PDF",
        size: "380 KB",
        badge: "Invoice",
      },
      document: {
        name: "VFS_Submission_Acknowledgment_Receipt.pdf",
        type: "PDF",
        size: "620 KB",
        badge: "Consulate Receipt",
      },
    },
    notes: "Consulate processing in progress. Appointment completed at VFS Dubai center.",
    paymentDetails: {
      feeLabel: "TOTAL VISA FEE",
      totalFee: 18500,
      totalPaid: 10000,
      pendingBalance: 8500,
      paymentStatus: "PARTIALLY PAID",
      transactions: [
        {
          id: "PAY-1003",
          type: "ADVANCE DEPOSIT",
          mode: "Online UPI / Netbanking",
          amount: 10000,
          date: "2026-10-12",
          reference: "TXN-882104"
        }
      ]
    }
  },
  {
    id: "RH-VSA-2026-7731",
    type: "visa",
    category: "Visa Application",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    visaType: "UK Standard Business Visitor Visa",
    applicantName: "Sophia Martinez",
    employeeId: "EMP-103",
    passportNumber: "E77491029",
    submissionDate: "13 Oct 2026",
    estimatedCompletion: "27 Oct 2026",
    status: "pending",
    statusGroup: "pending",
    statusLabel: "Biometrics Appointment Scheduled",
    currentStep: 2,
    steps: [
      { id: 1, title: "UKVI Online Submission", date: "13 Oct 2026", desc: "Visa application fee paid & submitted", done: true },
      { id: 2, title: "Biometrics Appointment", date: "18 Oct 2026", desc: "Scheduled at VFS WAFI Mall, Dubai", done: false },
      { id: 3, title: "UK Visas & Immigration Decision", date: "Pending", desc: "Estimated by 27 Oct 2026", done: false },
    ],
    downloads: {
      application: {
        name: "UKVI_Standard_Visitor_Application_Copy.pdf",
        type: "PDF",
        size: "1.4 MB",
        badge: "Submitted Form",
      },
      invoice: {
        name: "UK_Government_Visa_Fee_Invoice.pdf",
        type: "PDF",
        size: "410 KB",
        badge: "Tax Receipt",
      },
      document: {
        name: "VFS_Global_Biometrics_Appointment_Letter.pdf",
        type: "PDF",
        size: "820 KB",
        badge: "Appointment Confirmation",
      },
    },
    notes: "Please arrive 15 minutes before the appointment time with the printed appointment letter.",
    paymentDetails: {
      feeLabel: "TOTAL VISA FEE",
      totalFee: 24000,
      totalPaid: 12000,
      pendingBalance: 12000,
      paymentStatus: "PARTIALLY PAID",
      transactions: [
        {
          id: "PAY-1004",
          type: "INITIAL RETAINER",
          mode: "Corporate Bank Transfer",
          amount: 12000,
          date: "2026-10-13",
          reference: "TXN-771923"
        }
      ]
    }
  },
  {
    id: "RH-HLD-2026-5590",
    type: "holiday",
    category: "Holiday / Tour Package",
    country: "Japan",
    countryCode: "JP",
    flag: "🇯🇵",
    packageName: "Kyoto Autumn Corporate Executive Tour",
    applicantName: "Sophia Martinez",
    employeeId: "EMP-103",
    passportNumber: "E77491029",
    duration: "8 Days / 7 Nights",
    travelDates: "10 Nov 2026 – 17 Nov 2026",
    submissionDate: "09 Oct 2026",
    guestCount: 1,
    hotel: "The Ritz-Carlton Kyoto",
    status: "active",
    statusGroup: "current",
    statusLabel: "Flight Confirmed & Hotel Processing",
    currentStep: 2,
    steps: [
      { id: 1, title: "Itinerary Confirmed", date: "09 Oct 2026", desc: "Corporate flight & hotel package locked in", done: true },
      { id: 2, title: "Japan eVisa & Rail Pass", date: "14 Oct 2026", desc: "eVisa processing with Japanese Ministry", done: true },
      { id: 3, title: "Final Vouchers Issuance", date: "Pending", desc: "Expected 25 Oct 2026", done: false },
    ],
    downloads: {
      application: {
        name: "Japan_Corporate_Tour_Booking_Confirmation.pdf",
        type: "PDF",
        size: "1.3 MB",
        badge: "Tour Agreement",
      },
      invoice: {
        name: "RHGlobal_Tour_Invoice_JP-5590.pdf",
        type: "PDF",
        size: "490 KB",
        badge: "Invoice",
      },
      document: {
        name: "Japan_Rail_Pass_Exchange_Order_Voucher.pdf",
        type: "PDF",
        size: "1.5 MB",
        badge: "JR Rail Pass Voucher",
      },
    },
    notes: "Japan Rail 7-day green car exchange voucher ready. eVisa processing expected within 4 working days.",
    paymentDetails: {
      feeLabel: "TOTAL PACKAGE FEE",
      totalFee: 145000,
      totalPaid: 95000,
      pendingBalance: 50000,
      paymentStatus: "PARTIALLY PAID",
      transactions: [
        {
          id: "PAY-1007",
          type: "INITIAL BOOKING",
          mode: "Credit Card / Gateway",
          amount: 95000,
          date: "2026-10-09",
          reference: "TXN-551092"
        }
      ]
    }
  },
  {
    id: "RH-VSA-2026-6644",
    type: "visa",
    category: "Visa Application",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    visaType: "B1/B2 Business & Tourism Visa (10 Years)",
    applicantName: "Rajesh Kothari",
    employeeId: "EMP-104",
    passportNumber: "K44102981",
    submissionDate: "10 Oct 2026",
    estimatedCompletion: "05 Nov 2026",
    status: "pending",
    statusGroup: "pending",
    statusLabel: "DS-160 Filed • Consular Interview Slot Locked",
    currentStep: 2,
    steps: [
      { id: 1, title: "DS-160 Form Filed", date: "10 Oct 2026", desc: "Full CEAC consular form submitted", done: true },
      { id: 2, title: "MRV Fee & Interview Scheduled", date: "14 Oct 2026", desc: "Slot secured at US Consulate Dubai", done: true },
      { id: 3, title: "Visa Interview & Stamping", date: "03 Nov 2026", desc: "Personal interview at Consulate", done: false },
    ],
    downloads: {
      application: {
        name: "DS-160_Confirmation_Barcode_Page.pdf",
        type: "PDF",
        size: "720 KB",
        badge: "DS-160 Confirmation",
      },
      invoice: {
        name: "US_MRV_Fee_Payment_Receipt.pdf",
        type: "PDF",
        size: "340 KB",
        badge: "MRV Fee Receipt",
      },
      document: {
        name: "US_Consulate_Interview_Appointment_Letter.pdf",
        type: "PDF",
        size: "890 KB",
        badge: "Interview Appointment",
      },
    },
    notes: "Consular interview preparation session scheduled with RH Visa advisor on 01 Nov 2026.",
    paymentDetails: {
      feeLabel: "TOTAL VISA FEE",
      totalFee: 16500,
      totalPaid: 16500,
      pendingBalance: 0,
      paymentStatus: "PAID IN FULL",
      transactions: [
        {
          id: "PAY-1008",
          type: "MRV CONSULAR FEE",
          mode: "Online UPI / Netbanking",
          amount: 16500,
          date: "2026-10-14",
          reference: "TXN-661044"
        }
      ]
    }
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
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
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
    price: 155000,
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
    price: 118000,
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
    category: "holidays",
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
    price: 182000,
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
    category: "holidays",
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
    price: 140000,
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
    subtitle: "Fast-Track Visa Concierge for Europe (29 Countries)",
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
    price: 28500,
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
    price: 24500,
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
  },
  {
    id: "PKG-07",
    title: "United States B1/B2 Business & Tourist Visa",
    subtitle: "Complete DS-160 Filing & Consular Appointment",
    country: "United States",
    flag: "🇺🇸",
    category: "visa",
    badge: "Top Corporate Choice",
    heroImage: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80"
    ],
    rating: 4.94,
    reviewsCount: "7.1k",
    duration: "10-Year Validity",
    distance: "All 50 States",
    weather: "All Year",
    price: 31500,
    priceNote: "DS-160 + Appointment + Mock Interview",
    visaIncluded: true,
    visaStatus: "10-Year Multiple Entry",
    tags: ["Business & Conference", "10-Year Multiple", "Interview Coaching"],
    description: "End-to-end US visa concierge service for corporate executives and holiday travelers. Expedited consular slot monitoring and personalized document preparation.",
    routeList: [
      { day: "Step 1", stop: "DS-160 form audit and photo compliance review" },
      { day: "Step 2", stop: "MRV consular fee payment & priority slot booking" },
      { day: "Step 3", stop: "One-on-one interview preparation with US immigration specialist" },
      { day: "Step 4", stop: "Consulate appearance and passport courier delivery" }
    ],
    inclusions: [
      "Comprehensive DS-160 preparation and validation",
      "Automated appointment slot monitor for early dates",
      "Executive interview preparation session",
      "Corporate tax invoice for business reimbursement"
    ]
  }
];
