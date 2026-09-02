import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, DatabaseZap, ExternalLink, Github, ShieldCheck, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import dataAnalyticsImg from "@/assets/data-analytics.png";
import sneakerWebsiteImg from "@/assets/sneaker-website.png";
import nfcStudentCardImg from "@/assets/nfc-student-card.webp";
import gbvPanicButtonImg from "@/assets/gbv-panic-button.jpg";
import studentPortalImg from "@/assets/student-portal.jpg";
import { cardReveal, revealUp, staggerContainer } from "@/lib/animations";

const imageMap: Record<string, string> = {
  "data-analytics": dataAnalyticsImg,
  "sneaker-website": sneakerWebsiteImg,
  "nfc-student-card": nfcStudentCardImg,
  "gbv-panic-button": gbvPanicButtonImg,
  "student-portal": studentPortalImg,
};

const resolveProjectImage = (image?: string) => {
  if (!image) {
    return undefined;
  }

  return image.startsWith("/") ? image : imageMap[image];
};

const isRealLink = (href?: string) => Boolean(href && href !== "#");

type DetailTab = "innovation" | "security" | "proof";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<DetailTab>("innovation");
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="glass-panel max-w-md rounded-2xl p-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Project Not Found</h1>
          <p className="mb-6 text-muted-foreground">No project matches this route.</p>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
    );
  }

  const imageSrc = resolveProjectImage(project.coverImage ?? project.images[0]);
  const realLiveLink = isRealLink(project.links.live) ? project.links.live : undefined;
  const realRepoLink = isRealLink(project.links.repo) ? project.links.repo : undefined;
  const detailTabs = [
    {
      id: "innovation" as const,
      label: "Engineering",
      icon: Sparkles,
      items: project.innovation ?? project.highlights,
      accent: "cyan",
    },
    {
      id: "security" as const,
      label: "Security",
      icon: ShieldCheck,
      items: project.security ?? [],
      accent: "lime",
    },
    {
      id: "proof" as const,
      label: "Evidence",
      icon: Target,
      items: project.proofPoints ?? project.highlights,
      accent: "fuchsia",
    },
  ].filter((tab) => tab.items.length > 0);
  const activePanel = detailTabs.find((tab) => tab.id === activeTab) ?? detailTabs[0];
  const galleryImages = project.coverImage ? project.images : project.images.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate("/")} className="rounded-full">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </header>

      <main>
        {imageSrc ? (
          <div className="relative h-[360px] overflow-hidden bg-muted md:h-[460px]">
            <img src={imageSrc} alt={`${project.title} preview`} className="h-full w-full object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
          </div>
        ) : (
          <div className="relative h-[320px] overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.24),transparent_32%),linear-gradient(135deg,rgba(168,85,247,0.18),rgba(2,6,23,1))] md:h-[420px]">
            <div className="absolute inset-0 cyber-grid opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-3xl border border-cyan-300/25 bg-background/45 p-8 text-cyan-100 shadow-[0_0_48px_rgba(34,211,238,0.22)] backdrop-blur">
                <DatabaseZap className="h-16 w-16" />
              </div>
            </div>
          </div>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-6 py-12"
        >
          <div className="mx-auto max-w-4xl space-y-8">
            <motion.div variants={revealUp} className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
                  {project.category}
                </Badge>
                {project.coverLabel && (
                  <Badge variant="outline" className="border-white/15 bg-white/5 text-foreground/85">
                    {project.coverLabel}
                  </Badge>
                )}
                <span className="text-muted-foreground">{project.year}</span>
                <span className="text-muted-foreground">/</span>
                <span className="text-muted-foreground">{project.role}</span>
              </div>
              <h1 className="text-balance text-4xl font-black md:text-6xl">{project.title}</h1>
              <p className="text-xl leading-8 text-muted-foreground">{project.summary}</p>
              {project.impact && (
                <p className="rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] p-4 leading-7 text-cyan-50/90">
                  {project.impact}
                </p>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                {realLiveLink && (
                  <Button className="rounded-full" asChild>
                    <a href={realLiveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {realRepoLink && (
                  <Button variant="outline" className="rounded-full border-white/15 bg-white/5" asChild>
                    <a href={realRepoLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>

            <motion.div variants={cardReveal}>
              <Card className="glass-panel rounded-2xl">
                <CardContent className="space-y-4 p-6">
                  <h2 className="text-xl font-bold">Tech Stack</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="skill-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={revealUp} className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="leading-8 text-muted-foreground">{project.description}</p>
            </motion.div>

            {activePanel && (
              <motion.div variants={cardReveal}>
                <Card className="glass-panel overflow-hidden rounded-2xl">
                  <CardContent className="space-y-5 p-6">
                    <div className="flex flex-wrap gap-2">
                      {detailTabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activePanel.id === tab.id;

                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-bold transition ${
                              isActive
                                ? tab.accent === "lime"
                                  ? "border-lime-300/40 bg-lime-300/15 text-lime-100 shadow-[0_0_24px_rgba(190,242,100,0.1)]"
                                  : tab.accent === "fuchsia"
                                    ? "border-fuchsia-300/40 bg-fuchsia-300/15 text-fuchsia-100 shadow-[0_0_24px_rgba(217,70,239,0.1)]"
                                    : "border-cyan-300/40 bg-cyan-300/15 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.1)]"
                                : "border-white/10 bg-white/5 text-muted-foreground hover:border-cyan-300/25 hover:text-cyan-100"
                            }`}
                            aria-pressed={isActive}
                          >
                            <Icon className="h-4 w-4" />
                            {tab.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="grid gap-3 md:grid-cols-2">
                      {activePanel.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 leading-7 text-foreground/90"
                        >
                          <div className="mb-3 h-1 w-10 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            <motion.div variants={revealUp} className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features & Achievements</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-lime-200" />
                    <span className="leading-7 text-foreground/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {galleryImages.length > 0 && (
              <motion.div variants={revealUp} className="space-y-4">
                <h2 className="text-2xl font-bold">Project Screens</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {galleryImages.map((img, index) => {
                    const galleryImage = resolveProjectImage(img);

                    if (!galleryImage) {
                      return null;
                    }

                    return (
                      <img
                        key={img}
                        src={galleryImage}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full rounded-2xl border border-white/10"
                        loading="lazy"
                        decoding="async"
                      />
                    );
                  })}
                </div>
              </motion.div>
            )}

            <motion.div variants={revealUp} className="pt-6">
              <Button variant="outline" onClick={() => navigate("/")} className="rounded-full border-white/15 bg-white/5">
                <ArrowLeft className="h-4 w-4" />
                Back to All Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ProjectDetail;
