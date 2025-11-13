import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "UX polish", "Responsive design"],
    },
    {
      title: "Backend",
      skills: ["Django REST", "Node.js", "Express", "SQL", "API Development"],
    },
    {
      title: "Mobile & Cloud",
      skills: ["Flutter", "Firebase Auth", "Firestore", "Firebase Storage", "NFC Integration"],
    },
    {
      title: "Data & Security",
      skills: ["Pandas", "Jupyter Notebooks", "Plotly", "Dashboards", "Basic SecOps", "Cybersecurity"],
    },
    {
      title: "Dev Practices",
      skills: ["Git", "CI/CD", "Environment Setup", "Troubleshooting", "Technical Documentation"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
