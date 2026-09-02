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
      "Received a Special Mention for an interpretable credit-risk workflow using Weight of Evidence, Information Value, and Logistic Regression. The champion model achieved an AUC of 0.80555.",
    tags: ["FNB DataQuest", "Credit Risk", "WoE & IV", "Logistic Regression", "Model Interpretability", "Streamlit"],
    image: "/assets/FnbDataQuestHonourableMention.jpg",
    imageAlt: "FNB DataQuest 2026 Special Mention award featuring Ashley van Rooyen and teammates",
    imageFit: "contain",
  },
  {
    title: "Regional Winner",
    subtitle: "Security Summit 2025 Hackathon #SSHack25",
    description:
      "Recognised as a regional winner for applying cybersecurity analysis and technical problem-solving. Team photograph with Dr. James Stanger, Chief Technology Evangelist at CompTIA.",
    tags: ["Cybersecurity", "Ethical Hacking", "Problem Solving", "Teamwork", "#SSHack25"],
    image: "/assets/SSHack25.jpg",
  },
  {
    title: "3rd Place, Technical Division",
    subtitle: "Annual DIRISA Student Datathon Challenge 2025",
    location: "Cape Town",
    description:
      "Placed 3rd in the Technical Division after building a machine-learning workflow covering data cleaning, feature engineering, analysis, and technical presentation.",
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
      "Completed an IT Systems Support NQF Level 5 learnership covering networking, operating systems, SQL databases, baseline security, troubleshooting, and technical reporting.",
    tags: ["IT Support", "Networking", "Databases", "Security", "Documentation"],
  },
];
