export type Achievement = {
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  tags: string[];
  image?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Regional Winner",
    subtitle: "Security Summit 2025 Hackathon #SSHack25",
    description:
      "Recognized as a regional winner at the Security Summit 2025 Hackathon, applying cybersecurity thinking and technical problem-solving in a competitive environment. Winning team photo with Dr. James Stanger, Chief Technology Evangelist at CompTIA.",
    tags: ["Cybersecurity", "Ethical Hacking", "Problem Solving", "Teamwork", "#SSHack25"],
    image: "/assets/SSHack25.jpg",
  },
  {
    title: "3rd Place, Technical Division",
    subtitle: "Annual DIRISA Student Datathon Challenge 2025",
    location: "Cape Town",
    description:
      "Our team placed 3rd in the Technical Division at the Annual DIRISA Student Datathon Challenge 2025 in Cape Town. We built a data-driven solution using data cleaning, feature engineering, and machine learning to extract meaningful insights from challenge datasets.",
    tags: [
      "Data Cleaning",
      "Feature Engineering",
      "Machine Learning",
      "Team Collaboration",
      "Technical Presentation",
      "Cape Town",
    ],
    image: "/assets/DirisaHackathon.jpg",
  },
  {
    title: "DIRISA Datathon Qualifying Stage Winner",
    subtitle: "1st Place Qualifying Stage",
    description:
      "Placed first during the DIRISA Datathon qualifying stages before progressing to the national challenge.",
    tags: ["Data Science", "Analytics", "Competition", "Machine Learning"],
  },
  {
    title: "IT Systems Support NQF 5 Completed",
    subtitle: "SpecCon Holdings",
    description:
      "Completed an IT Systems Support NQF Level 5 learnership covering networking, technical support, operating systems, databases, security hygiene, and technical reporting.",
    tags: ["IT Support", "Networking", "Databases", "Security", "Documentation"],
  },
];
