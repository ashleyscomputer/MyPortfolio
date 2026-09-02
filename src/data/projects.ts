export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  category: "Web" | "Mobile" | "Data" | "Data / AI" | "Security";
  tech: string[];
  tags?: string[];
  highlights: string[];
  innovation?: string[];
  security?: string[];
  proofPoints?: string[];
  impact?: string;
  coverImage?: string;
  coverLabel?: string;
  links: {
    live?: string;
    repo?: string;
    demo?: string;
  };
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "dataquest-loan-risk-dashboard",
    title: "FNB DataQuest – Credit Risk Modelling",
    summary:
      "An interpretable credit-risk modelling workflow using WoE, IV, and Logistic Regression, delivered through a Streamlit decision-support application.",
    description:
      "Built for the FNB DataQuest 2026 lending challenge, this project develops a statistically sound and explainable credit-risk model. It uses Weight of Evidence, Information Value, and Logistic Regression for feature selection and prediction, with a Streamlit application that presents model evidence and business-facing decision support.",
    role: "Data & Machine Learning Developer",
    year: "2026",
    category: "Data / AI",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Streamlit",
      "Plotly",
      "WoE & IV",
      "Logistic Regression",
      "Statistical Feature Selection",
    ],
    tags: [
      "Credit Risk",
      "Python",
      "Pandas",
      "Streamlit",
      "Plotly",
      "Scikit-learn",
      "Machine Learning",
      "Model Interpretability",
    ],
    highlights: [
      "Honourable Mention at the FNB DataQuest 2026 challenge",
      "Credit-risk prediction using an explainable modelling workflow",
      "Weight of Evidence and Information Value transformations",
      "Statistical feature selection for model-ready inputs",
      "Champion model: WoE Logistic Regression",
      "Champion model AUC: 0.80555",
      "Streamlit application for model evidence and decision support",
    ],
    innovation: [
      "Scorecard-style WoE and IV feature engineering",
      "Interpretable Logistic Regression instead of a black-box champion model",
      "Statistical evidence connected to a business-facing Streamlit workflow",
    ],
    security: [
      "Data quality checks before model training",
      "Explainable coefficients, odds ratios, and reason codes",
      "Governance outputs for calibration, drift, and threshold review",
    ],
    proofPoints: [
      "Received an Honourable Mention at FNB DataQuest 2026",
      "Built with the FNB DataQuest Toolkit for the 2026 lending challenge",
      "Champion WoE Logistic Regression achieved an AUC of 0.80555",
      "Combines Pandas, Scikit-learn, Streamlit, and Plotly",
    ],
    impact:
      "Turns credit-risk modelling evidence into an explainable workflow for model review and lending decision support.",
    coverImage: "/assets/project-covers/dataquest-cover.png",
    coverLabel: "FNB DataQuest 2026 Honourable Mention",
    links: {},
    images: ["/assets/DataQuest.png"],
  },
  {
    slug: "scamguard",
    title: "ScamGuard",
    summary:
      "An offline-first Android cybersecurity app that analyses suspicious messages, URLs, and phone numbers to help users recognise potential scams.",
    description:
      "Developed for the GIGO project and hackathon, ScamGuard combines deterministic scam detection with multi-agent threat intelligence and GIGO governance. It scores suspicious content, explains warning signals, stores scan history locally, teaches common scam patterns, and routes uncertain intelligence for human review.",
    role: "Android & Cybersecurity Developer",
    year: "2026",
    category: "Security",
    tech: ["Kotlin", "Jetpack Compose", "Room", "Firebase AI", "Retrofit", "OkHttp", "Moshi", "Coroutines"],
    tags: ["Cybersecurity", "Scam Detection", "Android", "GIGO Hackathon", "Fraud Awareness"],
    highlights: [
      "Text, URL, and phone-number analysis with explainable risk scoring",
      "Detection patterns for South African banking, SARS, SASSA, delivery, job, and prize scams",
      "Offline deterministic detection with local Room scan history",
      "Scam education screen with warning signs and recommended actions",
      "GIGO-governed human review queue, trusted intelligence repository, and audit trail",
    ],
    innovation: [
      "Combines offline rules with optional multi-agent threat intelligence",
      "Explains detected signals instead of returning only a risk label",
      "Uses GIGO governance to review uncertain or low-quality intelligence",
    ],
    security: [
      "SENTINEL payload sanitisation checks for malicious and adversarial inputs",
      "Local Room storage supports offline scan history and trusted intelligence",
      "Human review and audit events make intelligence decisions traceable",
      "Secrets Gradle configuration keeps service credentials outside source code",
    ],
    proofPoints: [
      "Developed in the GIGO project and hackathon context",
      "Implemented as a Kotlin Android application with Jetpack Compose",
      "Uses Room, Firebase AI, Retrofit, OkHttp, Moshi, and Coroutines",
    ],
    impact:
      "Helps users pause, inspect suspicious content, and understand the warning signs behind common online scams before taking action.",
    coverImage: "/assets/project-covers/scamguard-cover.jpg",
    coverLabel: "GIGO cybersecurity project",
    links: {},
    images: ["/assets/project-covers/scamguard-cover.jpg"],
  },
  {
    slug: "sneaker-resale-store",
    title: "KickStreet - Premium Sneaker Marketplace",
    summary:
      "A premium sneaker resale platform concept with predictive search, advanced filters, cart flow, payment-gateway planning, and admin sales visibility.",
    description:
      "KickStreet is a polished e-commerce build for the South African sneaker resale market. It focuses on a fast product discovery experience, clean shopping cart flow, multi-payment gateway architecture, and an admin dashboard that can track catalogue and sales activity without making the buyer journey feel heavy.",
    role: "Full Stack Developer",
    year: "2024",
    category: "Web",
    tech: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Stripe API", "Ozow", "EFT"],
    tags: ["Web", "E-commerce", "React", "Payments", "Security-minded UX"],
    highlights: [
      "Product grid with predictive search and advanced sneaker filtering",
      "Shopping cart with persistent state management",
      "Multi-gateway checkout architecture for Stripe, EFT, and Ozow flows",
      "Responsive UI with micro-interactions and smooth animations",
      "Admin analytics dashboard for sales and catalogue visibility",
    ],
    innovation: [
      "Sneaker-marketplace experience tuned for quick discovery and checkout",
      "Search and filtering designed around how buyers browse drops and sizes",
      "Admin analytics layer for turning store activity into useful signals",
      "Reusable component structure for product cards, cart states, and checkout UI",
    ],
    security: [
      "Provider-based checkout plan keeps raw card details with payment providers",
      "Checkout validation before order state changes",
      "Admin-only dashboard boundaries for catalogue and sales visibility",
      "Environment-based payment configuration instead of hardcoded secrets",
      "Order and payment status tracking for safer fulfilment decisions",
    ],
    proofPoints: [
      "GitHub repo reference: ashleyscomputer/KickStreet",
      "Private repo, so the portfolio avoids exposing a fake public code link",
      "Built as a modern React/Vite commerce interface",
    ],
    impact:
      "Shows full-stack product thinking: polished storefront UX, checkout planning, and operational admin features in one project.",
    coverImage: "/assets/project-covers/kickstreet-cover.png",
    coverLabel: "Security-minded commerce",
    links: {
      live: "#",
      demo: "#",
    },
    images: ["sneaker-website"],
  },
  {
    slug: "nfc-student-card",
    title: "NFC Student Card System",
    summary: "Digital student ID with NFC scanning, Firebase backend, authentication, and real-time admin analytics.",
    description:
      "A digital student card system for Sol Plaatje University workflows, combining a mobile student experience with NFC scanning, Firebase authentication, Firestore storage, and an admin dashboard for monitoring active cards and scan activity.",
    role: "Mobile & Backend Developer",
    year: "2024",
    category: "Mobile",
    tech: ["Flutter", "Firebase Auth", "Firestore", "Firebase Storage", "NFC", "Real-time Database"],
    tags: ["Mobile", "Firebase", "NFC", "Student Systems", "Authentication"],
    highlights: [
      "Secure authentication with Firebase Auth",
      "NFC card scanning and validation",
      "Real-time active card metrics and analytics",
      "Admin dashboard with live feed of card scans",
      "Firestore security rules for data protection",
      "Student identity workflow designed around practical campus use",
    ],
    innovation: [
      "Blends mobile identity, NFC interaction, and live admin monitoring",
      "Turns student card activity into real-time operational visibility",
      "Practical campus workflow instead of a static profile-card app",
    ],
    security: [
      "Firebase Auth for controlled access",
      "Firestore security rules for role-aware data protection",
      "NFC validation flow to reduce manual card checks",
      "Separated student and admin experiences",
    ],
    proofPoints: [
      "Mobile-first Flutter build",
      "Firebase-backed authentication and data layer",
      "NFC-driven student card interaction",
    ],
    impact:
      "Demonstrates how identity, mobile UX, and backend data can support a real campus process.",
    coverImage: "/assets/project-covers/nfc-card-cover.png",
    coverLabel: "NFC identity system",
    links: {
      demo: "#",
    },
    images: ["nfc-student-card"],
  },
  {
    slug: "student-portal",
    title: "Academic Student Portal",
    summary:
      "A full-stack Django academic portal designed to streamline transcript access, authentication, and SQL-driven reporting through a clean dashboard experience.",
    description:
      "This academic portal gives students and administrators a more efficient way to manage academic records. Built with Django and SQL, it supports secure authentication, transcript views, structured reports, and dashboard-style access to academic information.",
    role: "Backend Developer",
    year: "2024",
    category: "Web",
    tech: ["Django", "MySQL", "HTMX", "SQL Views", "Python"],
    tags: ["Django", "SQL", "Authentication", "Reports", "Dashboard", "Web App"],
    highlights: [
      "Custom SQL views: v_semester_slip_sa and v_full_transcript_sa",
      "Role-based authentication and authorization",
      "Admin dashboard for student management",
      "Transcript generation and PDF export",
      "Optimized database queries for performance",
    ],
    innovation: [
      "Academic records presented through a focused dashboard experience",
      "SQL views used to simplify transcript and reporting workflows",
      "Backend-first structure that keeps academic data organized and queryable",
    ],
    security: [
      "Role-based access control for student and admin experiences",
      "Authenticated transcript access",
      "Structured server-side reporting instead of exposing raw database access",
      "Database query optimization that keeps reports predictable",
    ],
    proofPoints: [
      "Django backend with SQL reporting logic",
      "Transcript and semester-slip views",
      "Dashboard interface for academic records",
    ],
    impact:
      "Shows practical backend development for education workflows where access control and reporting matter.",
    coverImage: "/assets/project-covers/student-portal-cover.png",
    coverLabel: "Django academic portal",
    links: {
      repo: "#",
    },
    images: ["/assets/StudentDashboard.png"],
  },
  {
    slug: "data-analytics-dashboard",
    title: "Data Analysis & Visualization Platform",
    summary: "Interactive dashboards and notebooks for economic data analysis with Python, Pandas, and Plotly.",
    description:
      "A data analysis platform focused on GDP and inflation trends in South Africa from 2014 to 2023. It combines cleaning, statistical exploration, notebook-based analysis, and interactive charting so economic patterns can be inspected and explained clearly.",
    role: "Data Analyst",
    year: "2024",
    category: "Data",
    tech: ["Python", "Pandas", "Jupyter", "Plotly", "Dash", "NumPy"],
    tags: ["Data", "Analytics", "Visualization", "Python", "EDA"],
    highlights: [
      "ETL pipelines for economic data processing",
      "Interactive correlation analysis with Plotly charts",
      "Statistical analysis: mean, standard deviation, percentiles, and correlations",
      "Negative correlation discovery (-0.3476) between GDP and inflation",
      "Exportable reports and data visualizations",
      "Jupyter notebooks for reproducible analysis",
    ],
    innovation: [
      "Economic data story built from cleaning through visual explanation",
      "Notebook analysis paired with dashboard-style exploration",
      "Statistical findings translated into readable chart narratives",
    ],
    security: [
      "Works with public/economic data rather than sensitive personal records",
      "Reproducible notebook flow makes transformations inspectable",
      "Exportable outputs support review without exposing source notebooks unnecessarily",
    ],
    proofPoints: [
      "Pandas ETL and analysis workflow",
      "Plotly visual exploration",
      "Reusable notebook-based reporting",
    ],
    impact:
      "Turns raw economic indicators into a more readable analysis workflow for trend exploration and reporting.",
    coverImage: "/assets/project-covers/analytics-cover.png",
    coverLabel: "Analytics dashboard",
    links: {
      demo: "#",
    },
    images: ["data-analytics"],
  },
  {
    slug: "gbv-panic-button",
    title: "GBV Panic Button App",
    summary: "Safety app with safe-word panic trigger, geo-mapping, offline-ready alerts, and community hazard reporting.",
    description:
      "Developed during the Security Summit 2025 Hackathon, this emergency response mobile app helps GBV victims discreetly signal for help. It includes a safe-word panic trigger, real-time location sharing, offline-ready alert queuing, and community-driven hazard mapping for identifying unsafe areas.",
    role: "Mobile Developer (Team Lead)",
    year: "2025",
    category: "Mobile",
    tech: ["Flutter", "Google Maps API", "Firebase", "Offline Storage", "Geolocation"],
    tags: ["Security", "Mobile", "Hackathon", "Emergency Response", "Privacy"],
    highlights: [
      "Regional Winner at Security Summit 2025 Hackathon",
      "Safe-word panic trigger for discreet emergency alerts",
      "Real-time geo-location sharing with emergency contacts",
      "Offline-ready alert queue for areas without connectivity",
      "Community hazard reporting and mapping",
      "Privacy-aware design with encrypted location data",
    ],
    innovation: [
      "Emergency flow designed around discreet activation instead of visible panic UI",
      "Community hazard mapping adds prevention context, not only reaction",
      "Offline-ready alert queue supports high-risk connectivity gaps",
    ],
    security: [
      "Privacy-aware location handling for sensitive emergency data",
      "Discreet safe-word trigger reduces visible risk to the user",
      "Emergency contact routing keeps alerts focused on trusted recipients",
      "Offline queue design helps avoid silent alert failure",
    ],
    proofPoints: [
      "Security Summit 2025 Hackathon regional winner",
      "Flutter mobile build with mapping and Firebase services",
      "Built around real safety and privacy constraints",
    ],
    impact:
      "Shows security thinking applied to a human safety problem where privacy, speed, and usability are all critical.",
    coverImage: "/assets/project-covers/gbv-cover.png",
    coverLabel: "Security hackathon winner",
    links: {
      repo: "#",
    },
    images: ["gbv-panic-button"],
  },
];
