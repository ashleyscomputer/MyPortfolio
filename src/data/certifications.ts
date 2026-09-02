export type Certification = {
  title: string;
  issuer: string;
  year: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: "Huawei HCIA-Datacom",
    issuer: "Huawei",
    year: "2024",
    description: "Routing and switching fundamentals, IP services, network operations, and baseline network security.",
  },
  {
    title: "IBM Cybersecurity Fundamentals",
    issuer: "IBM",
    year: "2025",
    description: "Security principles, threat concepts, access control, incident awareness, and risk fundamentals.",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    description: "OCI Generative AI services, foundation-model workflows, retrieval-augmented generation, and deployment concepts.",
  },
];
