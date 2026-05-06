import { useMemo, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BrainCircuit, DatabaseZap, ExternalLink, FileText, Github, Search } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import dataAnalyticsImg from "@/assets/data-analytics.png";
import sneakerWebsiteImg from "@/assets/sneaker-website.png";
import nfcStudentCardImg from "@/assets/nfc-student-card.webp";
import gbvPanicButtonImg from "@/assets/gbv-panic-button.jpg";
import studentPortalImg from "@/assets/student-portal.jpg";
import { cardReveal, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

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

type ProjectFilter = "All" | "Web" | "Mobile" | "Data / AI" | "Security";

const filters: ProjectFilter[] = ["All", "Web", "Mobile", "Data / AI", "Security"];

const isRealLink = (href?: string) => Boolean(href && href !== "#");

const ProjectCard = ({ project }: { project: Project }) => {
  const navigate = useNavigate();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [7, -7]), { stiffness: 220, damping: 24 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-7, 7]), { stiffness: 220, damping: 24 });
  const imageSrc = resolveProjectImage(project.images[0]);
  const realLiveLink = isRealLink(project.links.live) ? project.links.live : undefined;
  const realRepoLink = isRealLink(project.links.repo) ? project.links.repo : undefined;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.article
      variants={cardReveal}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ y: -8 }}
      className="project-card group flex h-full flex-col overflow-hidden rounded-2xl"
    >
      {imageSrc ? (
        <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-muted">
          <img
            src={imageSrc}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.22),transparent_30%),linear-gradient(135deg,rgba(168,85,247,0.16),rgba(15,23,42,0.9))]">
          <div className="absolute inset-0 cyber-grid opacity-60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-2xl border border-cyan-300/25 bg-background/50 p-5 text-cyan-100 shadow-[0_0_34px_rgba(34,211,238,0.18)] backdrop-blur">
              <DatabaseZap className="h-10 w-10" />
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold leading-tight text-foreground">{project.title}</h3>
            <Badge variant="outline" className="shrink-0 border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
              {project.category}
            </Badge>
          </div>
          <p className="text-sm leading-6 text-muted-foreground">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
            >
              <Badge variant="secondary" className="skill-badge">
                {tech}
              </Badge>
            </motion.span>
          ))}
          {project.tech.length > 5 && (
            <Badge variant="secondary" className="skill-badge">
              +{project.tech.length - 5}
            </Badge>
          )}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Button size="sm" className="rounded-full" onClick={() => navigate(`/project/${project.slug}`)}>
            <FileText className="h-3.5 w-3.5" />
            View Details
          </Button>
          {realLiveLink && (
            <Button size="sm" variant="outline" className="rounded-full border-white/15 bg-white/5" asChild>
              <a href={realLiveLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-3.5 w-3.5" />
                Live Demo
              </a>
            </Button>
          )}
          {realRepoLink && (
            <Button size="sm" variant="outline" className="rounded-full border-white/15 bg-white/5" asChild>
              <a href={realRepoLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase();

    return projects.filter((project) => {
      const searchableText = [
        project.title,
        project.summary,
        project.description,
        project.category,
        ...project.tech,
        ...(project.tags ?? []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(query);
      const matchesFilter =
        filter === "All" ||
        project.category === filter ||
        (filter === "Data / AI" && project.category === "Data");

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-12"
        >
          <motion.div variants={revealUp} className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Featured Work</p>
            <h2 className="text-4xl font-black md:text-5xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real apps, data dashboards, student systems, and security-minded builds with practical outcomes.
            </p>
          </motion.div>

          <motion.div variants={revealUp} className="glass-panel mx-auto max-w-5xl rounded-2xl p-4 md:p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search projects by name, tech, category, or keyword..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="h-12 rounded-full border-white/10 bg-white/5 pl-10"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((item) => (
                  <Button
                    key={item}
                    variant={filter === item ? "default" : "outline"}
                    onClick={() => setFilter(item)}
                    size="sm"
                    className="rounded-full"
                  >
                    {item === "Data / AI" && <BrainCircuit className="h-3.5 w-3.5" />}
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div variants={revealUp} className="py-12 text-center">
              <p className="text-lg text-muted-foreground">
                No projects found. The search query is innocent until proven typo.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
