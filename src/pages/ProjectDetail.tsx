import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, CheckCircle } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Button>
        </div>
      </header>

      {/* Hero Image */}
      {project.images.length > 0 && (
        <div className="w-full h-[400px] bg-muted overflow-hidden">
          <img
            src={imageMap[project.images[0]]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title & Meta */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="outline">{project.category}</Badge>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.year}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{project.role}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.summary}</p>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {project.links.live && (
                <Button variant="default" className="gap-2" asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.links.repo && (
                <Button variant="outline" className="gap-2" asChild>
                  <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl font-bold">Key Features & Achievements</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          {project.images.length > 1 && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="text-2xl font-bold">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((img, idx) => (
                  <img
                    key={idx}
                    src={imageMap[img]}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full rounded-lg border border-border"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="pt-8">
            <Button variant="outline" onClick={() => navigate("/")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
