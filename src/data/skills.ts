export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity",
    skills: [
      "Aspiring Ethical Hacker",
      "Ethical Hacking",
      "Linux",
      "Kali Linux",
      "Basic SecOps",
      "Network Security",
      "Vulnerability Assessment",
      "Threat Awareness",
    ],
  },
  {
    title: "Data & AI",
    skills: [
      "Data Cleaning",
      "Feature Engineering",
      "Machine Learning",
      "Pandas",
      "Jupyter Notebooks",
      "Streamlit",
      "Plotly",
      "Data Visualization",
      "Research Data Management",
    ],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Responsive Design", "UX Polish"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST", "Node.js", "Express", "SQL", "API Development", "Database Design"],
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
      "Environment Setup",
      "Troubleshooting",
      "Technical Documentation",
    ],
  },
];

export const marqueeSkills = [
  "React",
  "Django",
  "Linux",
  "Kali Linux",
  "Cybersecurity",
  "Machine Learning",
  "Pandas",
  "Streamlit",
  "Flutter",
  "Firebase",
  "SQL",
  "OCI",
];
