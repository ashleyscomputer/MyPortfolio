export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: "Huawei HCIA (Datacom)",
    issuer: "Huawei",
    year: "2024",
    description: "Certified in networking fundamentals, routing and switching, and network security principles.",
  },
  {
    title: "IBM Cybersecurity Fundamentals",
    issuer: "IBM",
    year: "2025",
    description: "Comprehensive training in cybersecurity basics, threat detection, and security best practices.",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    description: "Professional certification in OCI GenAI services, LLM deployment, and AI-powered application development.",
  },
];
