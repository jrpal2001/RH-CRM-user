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
    currentStep: 7,
    currentStageId: "PAYMENT",
    currentStageTitle: "Stage 7: Payment",
    steps: [
      {
        id: 1,
        stageKey: "DOCS_RECEIVED",
        title: "Stage 1: Docs Received",
        shortTitle: "Docs Received",
        subtitle: "Document receipt & intake checklist",
        date: "04 Oct 2026",
        desc: "All initial documents received and verified against common intake checklist.",
        done: true,
        details: {
          mode: "Courier",
          receivedDate: "04 Oct 2026",
          courierTracking: "BD-982341029",
          remarks: "All original passport and employment documents received via BlueDart in good order.",
          checklist: [
            { id: "c1", label: "Passport / primary document (validity verified > 6 months)", status: "received", mandatory: true },
            { id: "c2", label: "Photograph (35x45mm, white background, recent)", status: "received", mandatory: true },
            { id: "c3", label: "Completed application form", status: "received", mandatory: true },
            { id: "c4", label: "Covering letter stating purpose of visit", status: "received", mandatory: true },
            { id: "c5", label: "Invitation / host letter (if applicable)", status: "na", mandatory: false },
            { id: "c6", label: "Employment / company supporting documents", status: "received", mandatory: true },
            { id: "c7", label: "Financial supporting documents (Bank statements & ITR)", status: "received", mandatory: true },
            { id: "c8", label: "Travel itinerary / confirmed flight tickets", status: "received", mandatory: false },
            { id: "c9", label: "Accommodation booking / hotel confirmation", status: "received", mandatory: false },
            { id: "c10", label: "Travel & medical insurance policy", status: "received", mandatory: false },
            { id: "c11", label: "Original documents where required", status: "received", mandatory: true },
            { id: "c12", label: "Other supporting documents", status: "na", mandatory: false },
            { id: "c13", label: "All required documents received confirmation", status: "received", mandatory: true }
          ]
        }
      },
      {
        id: 2,
        stageKey: "APPOINTMENT_BOOKING",
        title: "Stage 2: Appointment Booking",
        shortTitle: "Appointment Booking",
        subtitle: "Appointment coordination & biometric slot",
        date: "06 Oct 2026",
        desc: "Biometrics and submission appointment coordinated at VFS Global.",
        done: true,
        details: {
          location: "Bangalore",
          handledBy: "RHG Staff",
          appointmentDate: "08 Oct 2026",
          appointmentTime: "10:30 AM",
          center: "VFS Global Bangalore, Gopalan Innovation Mall",
          remarks: "Appointment slot confirmed. Biometric confirmation letter sent to applicant."
        }
      },
      {
        id: 3,
        stageKey: "DOCUMENT_VERIFICATION",
        title: "Stage 3: Document Verification",
        shortTitle: "Document Verification",
        subtitle: "Readiness check & compliance audit",
        date: "08 Oct 2026",
        desc: "Case passed full internal compliance review; ready for embassy lodgement.",
        done: true,
        details: {
          verificationStatus: "Ready for Submission",
          verifier: "Senior Compliance Lead",
          verifiedDate: "08 Oct 2026",
          remarks: "Bank statements, employer NOC, and financial adequacy cleared with zero defects."
        }
      },
      {
        id: 4,
        stageKey: "SUBMISSION",
        title: "Stage 4: Submission",
        shortTitle: "Submission",
        subtitle: "VFS / Embassy submission",
        date: "09 Oct 2026",
        desc: "Application successfully submitted to Australian Department of Home Affairs.",
        done: true,
        details: {
          submissionStatus: "Submitted to VFS / Embassy",
          vfsReferenceNo: "VFS-BLR-AU-992140",
          collectionMode: "Direct Applicant",
          submissionDate: "09 Oct 2026",
          remarks: "Lodgement completed online via ImmiAccount. Biometrics matched."
        }
      },
      {
        id: 5,
        stageKey: "IN_PROGRESS",
        title: "Stage 5: In Progress",
        shortTitle: "In Progress",
        subtitle: "Post-submission follow-up & consulate processing",
        date: "11 Oct 2026",
        desc: "Department of Home Affairs active assessment completed.",
        done: true,
        details: {
          inProgressStatus: "In Progress",
          pendingRequests: [
            {
              date: "11 Oct 2026",
              query: "Consulate requested updated travel itinerary confirmation",
              status: "Cleared",
              clearedDate: "11 Oct 2026"
            }
          ],
          remarks: "Clarification submitted promptly and acknowledged by consular case officer."
        }
      },
      {
        id: 6,
        stageKey: "COMPLETION",
        title: "Stage 6: Completion",
        shortTitle: "Completion",
        subtitle: "Decision & passport/document dispatch",
        date: "13 Oct 2026",
        desc: "Visa granted by Australian Department of Home Affairs and dispatched.",
        done: true,
        details: {
          finalStatus: "Approved",
          visaGrantNumber: "AU-610992-2026",
          validity: "12 Months Multiple Entry",
          uploadedDocument: "Australian_Government_eVisa_Grant_Notice.pdf",
          dispatch: {
            dispatched: true,
            modeOfDispatch: "Courier",
            courierPartner: "BlueDart Express",
            trackingNumber: "BD-88192039",
            dispatchDate: "14 Oct 2026"
          },
          remarks: "Official Visa Grant letter issued and dispatched to applicant address."
        }
      },
      {
        id: 7,
        stageKey: "PAYMENT",
        title: "Stage 7: Payment",
        shortTitle: "Payment",
        subtitle: "Final visa settlement & tax invoice generation",
        date: "14 Oct 2026",
        desc: "All professional visa fees, government charges, and courier fees settled in full.",
        done: true,
        details: {
          paymentStatus: "PAID IN FULL",
          totalFee: 21000,
          totalPaid: 21000,
          pendingBalance: 0,
          invoiceNumber: "INV-AU-99214",
          remarks: "Final settlement completed. Official tax receipt and invoice issued."
        }
      }
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
        name: "Boarding_Passes_Hotels_Vouchers_Package.pdf",
        type: "PDF",
        size: "2.4 MB",
        badge: "Travel Vouchers",
      },
    },
    notes: "Your confirmed vouchers and airport transfer details have been dispatched. Emergency concierge line is active 24/7.",
    paymentDetails: {
      feeLabel: "TOTAL PACKAGE FEE",
      totalFee: 145000,
      totalPaid: 145000,
      pendingBalance: 0,
      paymentStatus: "PAID IN FULL",
      transactions: [
        {
          id: "PAY-2001",
          type: "ADVANCE DEPOSIT (50%)",
          mode: "Corporate Netbanking",
          amount: 72500,
          date: "2026-09-28",
          reference: "TXN-882109"
        },
        {
          id: "PAY-2002",
          type: "FINAL SETTLEMENT",
          mode: "Corporate Netbanking",
          amount: 72500,
          date: "2026-10-04",
          reference: "TXN-882410"
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
    currentStep: 5,
    currentStageId: "IN_PROGRESS",
    currentStageTitle: "Stage 5: In Progress",
    steps: [
      {
        id: 1,
        stageKey: "DOCS_RECEIVED",
        title: "Stage 1: Docs Received",
        shortTitle: "Docs Received",
        subtitle: "Document receipt & intake checklist",
        date: "12 Oct 2026",
        desc: "All initial documents picked up from applicant residence.",
        done: true,
        details: {
          mode: "Pickup",
          receivedDate: "12 Oct 2026",
          pickupAgent: "RHG Courier Representative",
          remarks: "Physical passport, photo specifications, and employer letter collected.",
          checklist: [
            { id: "c1", label: "Passport / primary document (validity verified > 6 months)", status: "received", mandatory: true },
            { id: "c2", label: "Photograph (35x45mm, white background, recent)", status: "received", mandatory: true },
            { id: "c3", label: "Completed application form", status: "received", mandatory: true },
            { id: "c4", label: "Covering letter stating purpose of visit", status: "received", mandatory: true },
            { id: "c5", label: "Invitation / host letter (if applicable)", status: "received", mandatory: false },
            { id: "c6", label: "Employment / company supporting documents", status: "received", mandatory: true },
            { id: "c7", label: "Financial supporting documents (Bank statements & ITR)", status: "received", mandatory: true },
            { id: "c8", label: "Travel itinerary / confirmed flight tickets", status: "received", mandatory: false },
            { id: "c9", label: "Accommodation booking / hotel confirmation", status: "received", mandatory: false },
            { id: "c10", label: "Travel & medical insurance policy (€30k coverage)", status: "received", mandatory: false },
            { id: "c11", label: "Original documents where required", status: "received", mandatory: true },
            { id: "c12", label: "Other supporting documents", status: "na", mandatory: false },
            { id: "c13", label: "All required documents received confirmation", status: "received", mandatory: true }
          ]
        }
      },
      {
        id: 2,
        stageKey: "APPOINTMENT_BOOKING",
        title: "Stage 2: Appointment Booking",
        shortTitle: "Appointment Booking",
        subtitle: "Appointment coordination & biometric slot",
        date: "13 Oct 2026",
        desc: "VFS France appointment scheduled and attended by applicant.",
        done: true,
        details: {
          location: "Delhi",
          handledBy: "RHG Staff",
          appointmentDate: "15 Oct 2026",
          appointmentTime: "09:00 AM",
          center: "VFS Global France Center, Shivaji Stadium Metro Station, Delhi",
          remarks: "Appointment coordinated with RHG concierge staff present on-site."
        }
      },
      {
        id: 3,
        stageKey: "DOCUMENT_VERIFICATION",
        title: "Stage 3: Document Verification",
        shortTitle: "Document Verification",
        subtitle: "Readiness check & compliance audit",
        date: "15 Oct 2026",
        desc: "Schengen travel insurance, hotel bookings, and NOC validated.",
        done: true,
        details: {
          verificationStatus: "Ready for Submission",
          verifier: "Senior Schengen Specialist",
          verifiedDate: "15 Oct 2026",
          remarks: "Financial requirements met. Cover letter formatted according to French consulate rules."
        }
      },
      {
        id: 4,
        stageKey: "SUBMISSION",
        title: "Stage 4: Submission",
        shortTitle: "Submission",
        subtitle: "VFS / Embassy submission",
        date: "16 Oct 2026",
        desc: "Application dossier lodged at VFS Global France.",
        done: true,
        details: {
          submissionStatus: "Submitted to VFS / Embassy",
          vfsReferenceNo: "VFS-DEL-FR-881902",
          collectionMode: "Counter Collection",
          submissionDate: "16 Oct 2026",
          remarks: "Biometrics recorded and original passport submitted to Embassy of France."
        }
      },
      {
        id: 5,
        stageKey: "IN_PROGRESS",
        title: "Stage 5: In Progress",
        shortTitle: "In Progress",
        subtitle: "Post-submission follow-up & consulate processing",
        date: "Active (Since 16 Oct)",
        desc: "Application under formal adjudication by Consulate General of France.",
        done: false,
        details: {
          inProgressStatus: "In Progress",
          pendingRequests: [
            {
              date: "18 Oct 2026",
              query: "Consulate requested employer tax return verification letter",
              status: "In Process",
              actionRequired: "Uploaded by RHG staff on 19 Oct; awaiting consulate clearance"
            }
          ],
          remarks: "Consulate follow-up initiated. Tracking status shows in-progress at Embassy."
        }
      },
      {
        id: 6,
        stageKey: "COMPLETION",
        title: "Stage 6: Completion",
        shortTitle: "Completion",
        subtitle: "Decision & passport/document dispatch",
        date: "Pending",
        desc: "Estimated visa issuance and passport dispatch by 26 Oct 2026.",
        done: false,
        details: {
          finalStatus: "Pending Consular Outcome",
          dispatch: {
            dispatched: false,
            modeOfDispatch: "Courier",
            trackingNumber: "Awaiting generation upon dispatch"
          },
          remarks: "Ready for dispatch immediately once consulate releases passport."
        }
      },
      {
        id: 7,
        stageKey: "PAYMENT",
        title: "Stage 7: Payment",
        shortTitle: "Payment",
        subtitle: "Final visa settlement & tax invoice generation",
        date: "Pending",
        desc: "Advance deposit received; final balance due upon successful visa grant.",
        done: false,
        details: {
          paymentStatus: "PARTIAL",
          totalFee: 24000,
          totalPaid: 12000,
          pendingBalance: 12000,
          invoiceNumber: "INV-FR-88190",
          remarks: "Advance retainer settled. Remaining balance payable upon visa grant."
        }
      }
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
    notes: "Your application is currently being processed by the French Consulate. Standard turnaround is 10–14 working days.",
    paymentDetails: {
      feeLabel: "TOTAL VISA FEE",
      totalFee: 24000,
      totalPaid: 12000,
      pendingBalance: 12000,
      paymentStatus: "PARTIALLY PAID",
      transactions: [
        {
          id: "PAY-3001",
          type: "ADVANCE RETAINER",
          mode: "Online UPI / Netbanking",
          amount: 12000,
          date: "2026-10-12",
          reference: "TXN-771092"
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
    currentStageId: "APPOINTMENT_BOOKING",
    currentStageTitle: "Stage 2: Appointment Booking",
    steps: [
      {
        id: 1,
        stageKey: "DOCS_RECEIVED",
        title: "Stage 1: Docs Received",
        shortTitle: "Docs Received",
        subtitle: "Document receipt & intake checklist",
        date: "13 Oct 2026",
        desc: "Digital intake forms and bank statements received via email portal.",
        done: true,
        details: {
          mode: "Email",
          receivedDate: "13 Oct 2026",
          remarks: "Digital files validated. Physical passport to be submitted during VFS appointment.",
          checklist: [
            { id: "c1", label: "Passport / primary document (validity verified > 6 months)", status: "received", mandatory: true },
            { id: "c2", label: "Photograph (UKVI digital upload format)", status: "received", mandatory: true },
            { id: "c3", label: "Completed UKVI online application form", status: "received", mandatory: true },
            { id: "c4", label: "Covering letter & UK sponsor business letter", status: "received", mandatory: true },
            { id: "c5", label: "Invitation / host letter", status: "received", mandatory: false },
            { id: "c6", label: "Employment / company supporting documents", status: "received", mandatory: true },
            { id: "c7", label: "Financial supporting documents & bank statements", status: "received", mandatory: true },
            { id: "c8", label: "Travel itinerary / flight plan", status: "received", mandatory: false },
            { id: "c9", label: "Accommodation booking / hotel reservation", status: "received", mandatory: false },
            { id: "c10", label: "Travel & medical insurance", status: "na", mandatory: false },
            { id: "c11", label: "Original documents where required", status: "received", mandatory: true },
            { id: "c12", label: "Other supporting documents", status: "na", mandatory: false },
            { id: "c13", label: "All required documents received confirmation", status: "received", mandatory: true }
          ]
        }
      },
      {
        id: 2,
        stageKey: "APPOINTMENT_BOOKING",
        title: "Stage 2: Appointment Booking",
        shortTitle: "Appointment Booking",
        subtitle: "Appointment coordination & biometric slot",
        date: "Scheduled for 18 Oct 2026",
        desc: "Biometrics appointment confirmed at VFS Global Mumbai.",
        done: false,
        details: {
          location: "Mumbai",
          handledBy: "RHG Staff",
          appointmentDate: "18 Oct 2026",
          appointmentTime: "11:15 AM",
          center: "VFS Global Center, Trade Centre, BKC, Bandra East, Mumbai",
          remarks: "Appointment confirmed. 2-day calendar reminder generated for assigned case worker."
        }
      },
      {
        id: 3,
        stageKey: "DOCUMENT_VERIFICATION",
        title: "Stage 3: Document Verification",
        shortTitle: "Document Verification",
        subtitle: "Readiness check & compliance audit",
        date: "Pending",
        desc: "Final verification to be confirmed post-appointment.",
        done: false,
        details: {
          verificationStatus: "Pending",
          verifier: "Awaiting Appointment Completion",
          remarks: "Checklist completed, awaiting biometric slip attachment."
        }
      },
      {
        id: 4,
        stageKey: "SUBMISSION",
        title: "Stage 4: Submission",
        shortTitle: "Submission",
        subtitle: "VFS / Embassy submission",
        date: "Pending",
        desc: "Will be lodged following Mumbai biometrics session.",
        done: false,
        details: {
          submissionStatus: "Pending Submission",
          vfsReferenceNo: "Pending Lodgement",
          collectionMode: "Direct Applicant",
          remarks: "Direct applicant courier return selected."
        }
      },
      {
        id: 5,
        stageKey: "IN_PROGRESS",
        title: "Stage 5: In Progress",
        shortTitle: "In Progress",
        subtitle: "Post-submission follow-up & consulate processing",
        date: "Pending",
        desc: "UKVI priority processing queue will be monitored upon submission.",
        done: false,
        details: {
          inProgressStatus: "Pending",
          pendingRequests: [],
          remarks: "UKVI standard 15-day service."
        }
      },
      {
        id: 6,
        stageKey: "COMPLETION",
        title: "Stage 6: Completion",
        shortTitle: "Completion",
        subtitle: "Decision & passport/document dispatch",
        date: "Pending",
        desc: "Estimated decision & dispatch by 27 Oct 2026.",
        done: false,
        details: {
          finalStatus: "Pending",
          dispatch: {
            dispatched: false,
            modeOfDispatch: "Courier"
          },
          remarks: "Direct DHL courier to client address."
        }
      },
      {
        id: 7,
        stageKey: "PAYMENT",
        title: "Stage 7: Payment",
        shortTitle: "Payment",
        subtitle: "Final visa settlement & tax invoice generation",
        date: "Pending",
        desc: "Retainer fee paid; balance due upon final document dispatch.",
        done: false,
        details: {
          paymentStatus: "PARTIAL",
          totalFee: 28000,
          totalPaid: 15000,
          pendingBalance: 13000,
          invoiceNumber: "INV-UK-7731",
          remarks: "Advance intake invoice issued."
        }
      }
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
    notes: "Please arrive 15 minutes prior to your appointment at VFS BKC Mumbai with original passport and appointment letter.",
    paymentDetails: {
      feeLabel: "TOTAL VISA FEE",
      totalFee: 28000,
      totalPaid: 15000,
      pendingBalance: 13000,
      paymentStatus: "PARTIALLY PAID",
      transactions: [
        {
          id: "PAY-4001",
          type: "INTAKE RETAINER",
          mode: "Credit Card / Gateway",
          amount: 15000,
          date: "2026-10-13",
          reference: "TXN-661099"
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
    packageName: "Golden Route: Tokyo, Kyoto & Osaka Autumn Discovery",
    applicantName: "Rajesh Kothari",
    employeeId: "EMP-104",
    passportNumber: "K44102981",
    duration: "9 Days / 8 Nights",
    travelDates: "14 Nov 2026 – 22 Nov 2026",
    submissionDate: "06 Oct 2026",
    guestCount: 4,
    hotel: "Keio Plaza Hotel Tokyo & Kyoto Century Hotel",
    status: "active",
    statusGroup: "current",
    statusLabel: "Shinkansen & Hotel Confirmations Locked",
    currentStep: 2,
    steps: [
      { id: 1, title: "Booking Received", date: "06 Oct 2026", desc: "Family custom itinerary locked with local guide", done: true },
      { id: 2, title: "JR Rail Pass & Hotels Secured", date: "09 Oct 2026", desc: "Bullet train & 5-star hotels confirmed", done: true },
      { id: 3, title: "Travel Vouchers Issued", date: "Pending", desc: "Estimated delivery by 28 Oct 2026", done: false },
    ],
    downloads: {
      application: {
        name: "Japan_Tour_Booking_Confirmation.pdf",
        type: "PDF",
        size: "1.3 MB",
        badge: "Booking Confirmation",
      },
      invoice: {
        name: "Tax_Invoice_Japan_Discovery_INV-8820.pdf",
        type: "PDF",
        size: "480 KB",
        badge: "Tax Invoice",
      },
      document: {
        name: "Shinkansen_Bullet_Train_Vouchers_Notice.pdf",
        type: "PDF",
        size: "1.1 MB",
        badge: "Rail Pass Notice",
      },
    },
    notes: "Your bullet train passes and Kyoto tea ceremony reservations are confirmed. Final vouchers will be generated next week.",
    paymentDetails: {
      feeLabel: "TOTAL PACKAGE FEE",
      totalFee: 260000,
      totalPaid: 150000,
      pendingBalance: 110000,
      paymentStatus: "PARTIALLY PAID",
      transactions: [
        {
          id: "PAY-5001",
          type: "ADVANCE BOOKING (60%)",
          mode: "Corporate Netbanking",
          amount: 150000,
          date: "2026-10-06",
          reference: "TXN-991204"
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
    statusGroup: "current",
    statusLabel: "DS-160 Lodged • Interview Scheduled",
    currentStep: 4,
    currentStageId: "SUBMISSION",
    currentStageTitle: "Stage 4: Submission",
    steps: [
      {
        id: 1,
        stageKey: "DOCS_RECEIVED",
        title: "Stage 1: Docs Received",
        shortTitle: "Docs Received",
        subtitle: "Document receipt & intake checklist",
        date: "10 Oct 2026",
        desc: "Employment proof, previous US travel history, and tax returns received via courier.",
        done: true,
        details: {
          mode: "Courier",
          receivedDate: "10 Oct 2026",
          remarks: "All intake documents reviewed and verified.",
          checklist: [
            { id: "c1", label: "Passport / primary document (validity verified > 6 months)", status: "received", mandatory: true },
            { id: "c2", label: "Photograph (2x2 inch, US visa specification)", status: "received", mandatory: true },
            { id: "c3", label: "DS-160 online application form draft", status: "received", mandatory: true },
            { id: "c4", label: "Covering letter & business travel explanation", status: "received", mandatory: true },
            { id: "c5", label: "Invitation / US partner business letter", status: "received", mandatory: false },
            { id: "c6", label: "Employment / company supporting documents", status: "received", mandatory: true },
            { id: "c7", label: "Financial supporting documents (3 years ITR & bank)", status: "received", mandatory: true },
            { id: "c8", label: "Travel itinerary / US client meeting schedule", status: "received", mandatory: false },
            { id: "c9", label: "Accommodation booking / hotel details", status: "received", mandatory: false },
            { id: "c10", label: "Travel & medical insurance", status: "na", mandatory: false },
            { id: "c11", label: "Original documents where required", status: "received", mandatory: true },
            { id: "c12", label: "Other supporting documents", status: "na", mandatory: false },
            { id: "c13", label: "All required documents received confirmation", status: "received", mandatory: true }
          ]
        }
      },
      {
        id: 2,
        stageKey: "APPOINTMENT_BOOKING",
        title: "Stage 2: Appointment Booking",
        shortTitle: "Appointment Booking",
        subtitle: "Appointment coordination & biometric slot",
        date: "12 Oct 2026",
        desc: "OFC Biometrics & Consular Interview slots secured.",
        done: true,
        details: {
          location: "Chennai",
          handledBy: "RHG Staff",
          appointmentDate: "03 Nov 2026",
          appointmentTime: "08:30 AM",
          center: "US Consulate General Chennai, Gemini Circle",
          remarks: "OFC biometric scheduled for 02 Nov; Consular Interview scheduled for 03 Nov."
        }
      },
      {
        id: 3,
        stageKey: "DOCUMENT_VERIFICATION",
        title: "Stage 3: Document Verification",
        shortTitle: "Document Verification",
        subtitle: "Readiness check & compliance audit",
        date: "14 Oct 2026",
        desc: "DS-160 confirmation and mock interview preparation dossier completed.",
        done: true,
        details: {
          verificationStatus: "Ready for Submission",
          verifier: "US Consular Compliance Specialist",
          verifiedDate: "14 Oct 2026",
          remarks: "Dossier organized with color-coded tabs for consular presentation."
        }
      },
      {
        id: 4,
        stageKey: "SUBMISSION",
        title: "Stage 4: Submission",
        shortTitle: "Submission",
        subtitle: "VFS / Embassy submission",
        date: "Active Lodgement (14 Oct)",
        desc: "DS-160 submitted to CEAC portal; MRV fee receipt linked.",
        done: false,
        details: {
          submissionStatus: "Submitted to VFS / Embassy",
          vfsReferenceNo: "CEAC-AA00998124",
          collectionMode: "Counter Collection",
          submissionDate: "14 Oct 2026",
          remarks: "Barcoded confirmation page lodged. Awaiting personal appearance for interview."
        }
      },
      {
        id: 5,
        stageKey: "IN_PROGRESS",
        title: "Stage 5: In Progress",
        shortTitle: "In Progress",
        subtitle: "Post-submission follow-up & consulate processing",
        date: "Pending",
        desc: "Will activate following consular interview on 03 Nov 2026.",
        done: false,
        details: {
          inProgressStatus: "Pending",
          pendingRequests: [],
          remarks: "Interview coaching session scheduled with applicant."
        }
      },
      {
        id: 6,
        stageKey: "COMPLETION",
        title: "Stage 6: Completion",
        shortTitle: "Completion",
        subtitle: "Decision & passport/document dispatch",
        date: "Pending",
        desc: "Estimated visa stamping & VAC passport collection by 05 Nov 2026.",
        done: false,
        details: {
          finalStatus: "Pending",
          dispatch: {
            dispatched: false,
            modeOfDispatch: "Hand Delivery"
          },
          remarks: "Passport to be collected from VAC Chennai counter."
        }
      },
      {
        id: 7,
        stageKey: "PAYMENT",
        title: "Stage 7: Payment",
        shortTitle: "Payment",
        subtitle: "Final visa settlement & tax invoice generation",
        date: "Pending",
        desc: "MRV fee and advance fee paid; final balance due after interview.",
        done: false,
        details: {
          paymentStatus: "PARTIAL",
          totalFee: 32500,
          totalPaid: 16500,
          pendingBalance: 16000,
          invoiceNumber: "INV-US-6644",
          remarks: "Consular visa filing fee paid; remaining consultation fee due."
        }
      }
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
    notes: "Your DS-160 form is lodged and MRV receipt is verified. Interview appointment is confirmed for Nov 03, 2026.",
    paymentDetails: {
      feeLabel: "TOTAL VISA FEE",
      totalFee: 32500,
      totalPaid: 16500,
      pendingBalance: 16000,
      paymentStatus: "PARTIALLY PAID",
      transactions: [
        {
          id: "PAY-6001",
          type: "ADVANCE MRV & FILING FEE",
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
