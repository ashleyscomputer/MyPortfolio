export type Achievement = {
  title: string;
  subtitle: string;
  location?: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
};

export const achievements: Achievement[] = [
  {
    title: "Honourable Mention",
    subtitle: "FNB DataQuest 2026 – Credit Risk Modelling Challenge",
    description:
      "Received an Honourable Mention for developing an interpretable credit-risk modelling workflow using Weight of Evidence, Information Value, and Logistic Regression, with the champion model achieving an AUC of 0.80555.",
    tags: ["FNB DataQuest", "Credit Risk", "WoE & IV", "Logistic Regression", "Model Interpretability", "Streamlit"],
    image: "/assets/FnbDataQuestHonourableMention.jpg",
    imageAlt: "FNB DataQuest 2026 Special Mention award featuring Ashley van Rooyen and teammates",
    imageFit: "contain",
  },
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
    title: "IT Systems Support NQF 5 Completed",
    subtitle: "SpecCon Holdings",
    description:
      "Completed an IT Systems Support NQF Level 5 learnership covering networking, technical support, operating systems, databases, security hygiene, and technical reporting.",
    tags: ["IT Support", "Networking", "Databases", "Security", "Documentation"],
  },
];
