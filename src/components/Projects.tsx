import { useState, useMemo } from "react";
import { Search, ExternalLink, Github, FileText } from "lucide-react";
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import dataAnalyticsImg from "@/assets/data-analytics.png";
import sneakerWebsiteImg from "@/assets/sneaker-website.png";
import nfcStudentCardImg from "@/assets/nfc-student-card.webp";
import gbvPanicButtonImg from "@/assets/gbv-panic-button.jpg";
import studentPortalImg from "@/assets/student-portal.jpg";

const imageMap: Record<string, string> = {
  "data-analytics": dataAnalyticsImg,
  "sneaker-website": sneakerWebsiteImg,
  "nfc-student-card": nfcStudentCardImg,
  "gbv-panic-button": gbvPanicButtonImg,
  "student-portal": studentPortalImg,
};

const Projects = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | "Web" | "Mobile" | "Data" | "Security">("All");
  const navigate = useNavigate();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.summary.toLowerCase().includes(search.toLowerCase()) ||
        project.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesFilter = filter === "All" || project.category === filter;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  const filters: Array<"All" | "Web" | "Mobile" | "Data" | "Security"> = [
    "All",
    "Web",
    "Mobile",
    "Data",
    "Security",
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of applications built for real-world impact
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search projects by name, tech, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? "default" : "outline"}
                onClick={() => setFilter(f)}
                size="sm"
              >
                {f}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <Card
              key={project.slug}
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {project.images.length > 0 && (
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={imageMap[project.images[0]]}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <CardDescription>{project.summary}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 4}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.links.live && (
                    <Button size="sm" variant="outline" className="gap-1" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.links.repo && (
                    <Button size="sm" variant="outline" className="gap-1" asChild>
                      <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="default"
                    className="gap-1"
                    onClick={() => navigate(`/project/${project.slug}`)}
                  >
                    <FileText className="w-3 h-3" />
                    Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
