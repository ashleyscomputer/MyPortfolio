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
      "Collected and prepared research data using structured digital tools, with responsibility for consent, confidentiality, transcription accuracy, and analysis readiness.",
    achievements: [
      "Captured and validated structured research records.",
      "Applied informed-consent and confidentiality procedures.",
      "Supported audio transcription and auditable data logging.",
      "Cleaned and organised datasets for downstream analysis.",
    ],
    image: "/assets/DataCapturer.jpg",
  },
  {
    title: "IT Systems Support Learnership (NQF 5)",
    company: "SpecCon Holdings",
    period: "2023 - 2024",
    description:
      "Completed an IT Systems Support NQF Level 5 learnership covering network operations, Windows and Linux administration, relational databases, security controls, and technical documentation.",
    achievements: [
      "Completed 72/72 modules with a 100% module pass rate.",
      "Achieved 86.11% in the Final Internal Evaluation.",
      "Configured and troubleshot network and operating-system environments.",
      "Applied SQL, database administration, and baseline security practices.",
      "Produced structured technical reports and support documentation.",
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
      "ICT degree studies focused on software engineering, database systems, data analytics, networking, and cybersecurity.",
    achievements: [
      "Regional Winner at Security Summit 2025 Hackathon",
      "3rd Place, Technical Division at the Annual DIRISA Student Datathon Challenge 2025",
      "Developed full-stack, mobile, and data applications for coursework and competitions",
      "Applied machine learning, SQL, networking, and secure-development concepts",
    ],
  },
  {
    title: "IEC Role / Data Capturing and Management",
    company: "IEC",
    period: "Previous",
    description:
      "Supported structured data capturing, verification, and administrative workflows in a high-accuracy operational environment.",
    achievements: [
      "Captured and verified structured operational records",
      "Supported reporting and data-quality workflows",
      "Handled sensitive information under deadline constraints",
    ],
  },
  {
    title: "Supervisor",
    company: "Statistics South Africa",
    period: "Previous",
    description: "Led field team for data collection operations with focus on quality assurance and reporting.",
    achievements: [
      "Supervised field data-collection operations",
      "Performed quality assurance and record validation",
      "Coordinated team assignments and progress reporting",
    ],
  },
];
