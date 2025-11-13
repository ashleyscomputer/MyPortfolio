export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  category: "Web" | "Mobile" | "Data" | "Security";
  tech: string[];
  highlights: string[];
  links: {
    live?: string;
    repo?: string;
    demo?: string;
  };
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "sneaker-resale-store",
    title: "KickStreet - Premium Sneaker Marketplace",
    summary: "E-commerce platform for authentic sneaker resale with advanced filtering and payment integration.",
    description: "Built a full-featured e-commerce platform for the South African sneaker resale market. Features include product catalog with predictive search, shopping cart, multi-payment gateway architecture (Stripe, EFT, Ozow), and comprehensive admin analytics dashboard.",
    role: "Full Stack Developer",
    year: "2024",
    category: "Web",
    tech: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Stripe API", "Ozow", "EFT"],
    highlights: [
      "Product grid with predictive search and advanced filtering",
      "Shopping cart with persistent state management",
      "Multi-gateway checkout flow supporting Stripe, EFT, and Ozow",
      "Responsive UI with micro-interactions and smooth animations",
      "Admin analytics dashboard with sales tracking",
    ],
    links: {
      live: "#",
      demo: "#",
    },
    images: ["sneaker-website"],
  },
  {
    slug: "nfc-student-card",
    title: "NFC Student Card System",
    summary: "Digital student ID with NFC scanning, Firebase backend, and real-time analytics dashboard.",
    description: "Developed a comprehensive digital student card solution for Sol Plaatje University. The system includes mobile app for students, NFC scanning capabilities, Firebase backend with authentication and Firestore database, and a real-time admin dashboard for monitoring active cards and usage analytics.",
    role: "Mobile & Backend Developer",
    year: "2024",
    category: "Mobile",
    tech: ["Flutter", "Firebase Auth", "Firestore", "Firebase Storage", "NFC", "Real-time Database"],
    highlights: [
      "Secure authentication with Firebase Auth",
      "NFC card scanning and validation",
      "Real-time active card metrics and analytics",
      "Admin dashboard with live feed of card scans",
      "Firestore security rules for data protection",
      "100% pass rate tracking system",
    ],
    links: {
      demo: "#",
    },
    images: ["nfc-student-card"],
  },
  {
    slug: "student-portal",
    title: "Academic Student Portal",
    summary: "Django-based academic portal with transcript views, authentication, and SQL-powered reports.",
    description: "Built a comprehensive academic portal for student information management. Features custom SQL views for semester slips and transcripts, role-based authentication, and admin tools for student data management. Integrated with MySQL database and uses HTMX for dynamic UI updates.",
    role: "Backend Developer",
    year: "2024",
    category: "Web",
    tech: ["Django", "MySQL", "HTMX", "SQL Views", "Python"],
    highlights: [
      "Custom SQL views: v_semester_slip_sa, v_full_transcript_sa",
      "Role-based authentication and authorization",
      "Admin dashboard for student management",
      "Transcript generation and PDF export",
      "Optimized database queries for performance",
    ],
    links: {
      repo: "#",
    },
    images: ["student-portal"],
  },
  {
    slug: "data-analytics-dashboard",
    title: "Data Analysis & Visualization Platform",
    summary: "Interactive dashboards and notebooks for economic data analysis with Python and Plotly.",
    description: "Created comprehensive data analysis platform featuring GDP and inflation correlation studies for South Africa (2014-2023). Built ETL pipelines, statistical analysis notebooks, and interactive visualizations using modern data science tools. Includes exportable reports and real-time chart rendering.",
    role: "Data Analyst",
    year: "2024",
    category: "Data",
    tech: ["Python", "Pandas", "Jupyter", "Plotly", "Dash", "NumPy"],
    highlights: [
      "ETL pipelines for economic data processing",
      "Interactive correlation analysis with Plotly charts",
      "Statistical analysis: mean, std, percentiles, correlation coefficients",
      "Negative correlation discovery (-0.3476) between GDP and inflation",
      "Exportable reports and data visualizations",
      "Jupyter notebooks for reproducible analysis",
    ],
    links: {
      demo: "#",
    },
    images: ["data-analytics"],
  },
  {
    slug: "gbv-panic-button",
    title: "GBV Panic Button App",
    summary: "Safety app with safe-word panic trigger, geo-mapping, and community hazard reporting.",
    description: "Developed during Security Summit 2025 Hackathon (Regional Winner). Emergency response mobile app designed to help GBV victims discreetly signal for help. Features include safe-word panic trigger, real-time location sharing, offline-ready alert queue, and community-driven hazard mapping for identifying unsafe areas.",
    role: "Mobile Developer (Team Lead)",
    year: "2025",
    category: "Mobile",
    tech: ["Flutter", "Google Maps API", "Firebase", "Offline Storage", "Geolocation"],
    highlights: [
      "🏆 Regional Winner at Security Summit 2025 Hackathon",
      "Safe-word panic trigger for discreet emergency alerts",
      "Real-time geo-location sharing with emergency contacts",
      "Offline-ready alert queue for areas without connectivity",
      "Community hazard reporting and mapping",
      "Privacy-aware design with encrypted location data",
    ],
    links: {
      repo: "#",
    },
    images: ["gbv-panic-button"],
  },
];
