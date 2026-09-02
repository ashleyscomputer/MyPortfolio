export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity",
    skills: [
      "Linux",
      "Kali Linux",
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Network Security",
      "Vulnerability Assessment",
      "Security Hardening",
    ],
  },
  {
    title: "Data & AI",
    skills: [
      "Data Cleaning",
      "Feature Engineering",
      "Machine Learning",
      "Pandas",
      "Scikit-learn",
      "Jupyter",
      "Streamlit",
      "Plotly",
      "WoE / IV",
      "Logistic Regression",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Responsive UI"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST Framework", "Node.js", "Express", "REST APIs", "SQL", "MySQL"],
  },
  {
    title: "Mobile & Cloud",
    skills: [
      "Flutter",
      "Firebase Auth",
      "Firestore",
      "Firebase Storage",
      "NFC Integration",
      "Oracle Cloud Infrastructure",
    ],
  },
  {
    title: "Dev Practices",
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Environment Variables",
      "Debugging",
      "System Troubleshooting",
      "Technical Documentation",
    ],
  },
];
