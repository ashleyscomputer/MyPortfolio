export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  image?: string;
  link?: {
    label: string;
    href: string;
  };
};

export const experiences: Experience[] = [
  {
    title: "Data Capturer / Research Data Support",
    company: "Data Discovery / Research Project",
    period: "2025",
    description:
      "Collected, processed, and managed research data using structured digital tools while supporting ethical data handling, transcription accuracy, and analysis readiness.",
    achievements: [
      "Collected and managed research data using structured digital tools and databases.",
      "Obtained informed consent and protected participant data in line with ethical research practices.",
      "Used audio and digital recording tools to support accurate transcription and data logging.",
      "Cleaned, preprocessed, and organized datasets for analysis readiness.",
      "Collaborated with the research team to support reporting and data-driven insights.",
      "Worked with sensitive information while maintaining confidentiality and accuracy.",
    ],
    image: "/assets/DataCapturer.jpg",
  },
  {
    title: "IT Systems Support Learnership (NQF 5)",
    company: "SpecCon Holdings",
    period: "2023 - 2024",
    description:
      "Comprehensive IT systems support training covering networking, operating systems, security, databases, and technical reporting.",
    achievements: [
      "Completed 72/72 modules with 100% pass rate",
      "Final Internal Evaluation (FIE): 86.11%",
      "Networking setup and troubleshooting",
      "Operating system administration (Windows/Linux)",
      "Security hygiene and best practices",
      "Database administration and SQL",
      "Technical reporting and documentation",
    ],
    link: {
      label: "View Qualification",
      href: "/Ashley-Van-Rooyen-NQF5.pdf",
    },
  },
  {
    title: "ICT Student",
    company: "Sol Plaatje University",
    period: "Jan 2022 - Present",
    description:
      "Final year student pursuing a degree in Information and Communication Technology with focus on software development, data analytics, and cybersecurity.",
    achievements: [
      "Regional Winner at Security Summit 2025 Hackathon",
      "3rd Place, Technical Division at the Annual DIRISA Student Datathon Challenge 2025",
      "First place in DIRISA Datathon qualifying stages",
      "Built multiple full-stack applications for coursework",
      "Completed advanced data analytics modules",
      "Active participant in tech communities and hackathons",
    ],
  },
  {
    title: "IEC Role / Data Capturing and Management",
    company: "IEC",
    period: "Previous",
    description:
      "Supported structured data capturing, verification, and administrative workflows in a high-accuracy operational environment.",
    achievements: [
      "Captured and checked structured records for accuracy",
      "Supported data management and reporting workflows",
      "Maintained careful handling of sensitive operational information",
      "Worked under deadline-driven conditions with attention to detail",
    ],
  },
  {
    title: "Salesperson",
    company: "Vermeulens",
    period: "Previous",
    description: "Sales and customer service role with focus on quote management and client relations.",
    achievements: [
      "Managed customer quotes and product specifications",
      "Achieved milestone sale exceeding R1 million",
      "Built strong client relationships and repeat business",
    ],
  },
  {
    title: "Supervisor",
    company: "Statistics South Africa",
    period: "Previous",
    description: "Led field team for data collection operations with focus on quality assurance and reporting.",
    achievements: [
      "Supervised field data collection team",
      "Quality assurance and data validation",
      "Progress reporting to management",
      "Team coordination and task delegation",
    ],
  },
  {
    title: "Restaurant Bar Manager",
    company: "New Rush",
    period: "Previous",
    description:
      "Managed front-of-house bar operations, stock control, staff coordination, and customer service in a fast-paced hospitality environment.",
    achievements: [
      "Coordinated daily bar operations and service quality",
      "Managed stock tracking and cash-up routines",
      "Handled customer service under pressure",
      "Supported team scheduling and operational handovers",
    ],
  },
];
