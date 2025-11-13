export type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    title: "IT Systems Support Learnership (NQF 5)",
    company: "SpecCon Holdings",
    period: "2023 - 2024",
    description: "Comprehensive IT systems support training covering networking, OS administration, security, databases, and technical reporting.",
    achievements: [
      "Completed 72/72 modules with 100% pass rate",
      "Final Internal Evaluation (FIE): 86.11%",
      "Networking setup and troubleshooting",
      "Operating system administration (Windows/Linux)",
      "Security hygiene and best practices",
      "Database administration and SQL",
      "Technical reporting and documentation",
    ],
  },
  {
    title: "ICT Student",
    company: "Sol Plaatje University",
    period: "Jan 2022 - Present",
    description: "Final year student pursuing degree in Information and Communication Technology with focus on software development, data analytics, and cybersecurity.",
    achievements: [
      "Regional Winner at Security Summit 2025 Hackathon",
      "🥇 First place in DIRISA Datathon qualifying stages",
      "Built multiple full-stack applications for coursework",
      "Completed advanced data analytics modules",
      "Active participant in tech communities and hackathons",
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
];
