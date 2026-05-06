import { ArrowDown, Download, Github, Linkedin, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import AnimatedRoleText from "./AnimatedRoleText";
import heroImage from "@/assets/ashley-hero.jpg";
import { cardReveal, revealUp, staggerContainer } from "@/lib/animations";

const roles = [
  "Cybersecurity",
  "Networking",
  "Full-Stack Web Development",
  "Data Analysis & Machine Learning",
  "Research Data Support",
];

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28">
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Cyber/data themed background" className="h-full w-full object-cover opacity-[0.13]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--background)/0.94)_0%,hsl(var(--background)/0.74)_48%,hsl(var(--background)/0.9)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,hsl(var(--background))_92%)]" />
        <div className="hero-code-rain absolute inset-y-0 right-0 w-1/2 opacity-30" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-6"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={staggerContainer} className="space-y-7 text-center lg:text-left">
            <motion.div
              variants={revealUp}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.14)]"
            >
              <ShieldCheck className="h-4 w-4" />
              Cybersecurity • Big Data • Development
            </motion.div>

            <motion.div variants={revealUp} className="space-y-4">
              <h1 className="text-balance text-5xl font-black leading-tight text-foreground md:text-7xl">
                Ashley Van Rooyen
              </h1>
              <p className="text-balance text-xl font-semibold text-cyan-100 md:text-2xl">
                Aspiring Ethical Hacker | ICT Student | Full-Stack Developer
              </p>
              <p className="min-h-[2.6rem] text-2xl font-bold md:text-3xl">
                <AnimatedRoleText roles={roles} />
              </p>
            </motion.div>

            <motion.p variants={revealUp} className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground lg:mx-0">
              I build practical apps, analyze messy data, and explore cybersecurity through real projects,
              hackathons, and hands-on technical work.
            </motion.p>

            <motion.div variants={revealUp} className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:flex-wrap lg:justify-start">
              <Button size="lg" onClick={scrollToProjects} className="rounded-full px-7 shadow-[0_0_24px_rgba(34,211,238,0.22)]">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 px-7 backdrop-blur" asChild>
                <a href="/Ashley-Van-Rooyen-CV-2025.pdf" download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>

              <div className="group/easter relative">
                <Button size="lg" variant="outline" className="rgb-easter-egg rounded-full px-6" asChild>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Easter egg: opens Rick Astley Never Gonna Give You Up in a new tab. No passwords are stored or displayed."
                  >
                    View My Passwords 👀
                  </a>
                </Button>
                <span className="pointer-events-none absolute left-1/2 top-[calc(100%+0.65rem)] w-max -translate-x-1/2 rounded-full border border-cyan-300/25 bg-background/90 px-3 py-1 text-xs text-cyan-100 opacity-0 shadow-[0_0_18px_rgba(34,211,238,0.18)] backdrop-blur transition-opacity group-hover/easter:opacity-100 group-focus-within/easter:opacity-100">
                  totally safe, trust me
                </span>
              </div>
            </motion.div>

            <motion.div variants={revealUp} className="flex justify-center gap-5 pt-5 lg:justify-start">
              <a
                href="https://www.linkedin.com/in/ashleyvanrooyen"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ashleyscomputer"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:ashleyvrfx@gmail.com" className="social-icon" aria-label="Email Ashley">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={cardReveal} className="mx-auto w-full max-w-sm lg:max-w-md">
            <div className="glass-panel relative overflow-hidden rounded-2xl p-4">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-fuchsia-400/15 blur-3xl" />
              <img
                src="/assets/Me.jpeg"
                alt="Ashley Van Rooyen profile portrait"
                className="relative aspect-[4/5] w-full rounded-xl object-cover"
              />
              <div className="relative mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-background/55 p-4 backdrop-blur">
                <div>
                  <p className="text-sm font-bold text-foreground">Ashley Van Rooyen</p>
                  <p className="text-xs text-muted-foreground">@ashleyscomputer (github) </p>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-lime-300/25 bg-lime-300/10 px-3 py-1 text-xs font-semibold text-lime-100">
                  <Sparkles className="h-3.5 w-3.5" />
                  Open to Work
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        type="button"
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 p-3 text-muted-foreground backdrop-blur transition-colors hover:text-cyan-200"
        aria-label="Scroll to projects"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
};

export default Hero;
