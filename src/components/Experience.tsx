import { motion } from "framer-motion";
import { Briefcase, CheckCircle, Database, ExternalLink, GraduationCap, ServerCog } from "lucide-react";
import { experiences } from "@/data/experience";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { revealLeft, revealRight, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

const getExperienceIcon = (title: string) => {
  if (title.includes("Data")) return Database;
  if (title.includes("ICT")) return GraduationCap;
  if (title.includes("Systems")) return ServerCog;
  return Briefcase;
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-14"
        >
          <motion.div variants={revealUp} className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Experience</p>
            <h2 className="text-4xl font-black md:text-5xl">Professional Timeline</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A practical path through research data, IT support, field operations, software, and people-facing work.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-fuchsia-300/0 shadow-[0_0_22px_rgba(34,211,238,0.45)] md:left-1/2" />

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = getExperienceIcon(exp.title);
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={`${exp.title}-${exp.company}`}
                    variants={isLeft ? revealLeft : revealRight}
                    className="relative grid gap-5 pl-14 md:grid-cols-[1fr_72px_1fr] md:items-start md:pl-0"
                  >
                    <div
                      className={`absolute left-0 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/35 bg-background text-cyan-100 shadow-[0_0_26px_rgba(34,211,238,0.38)] md:static md:col-start-2 md:mx-auto ${
                        isLeft ? "" : "md:row-start-1"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <Card
                      className={`glass-panel timeline-card overflow-hidden rounded-2xl ${
                        isLeft ? "md:col-start-1" : "md:col-start-3 md:row-start-1"
                      }`}
                    >
                      {exp.image && (
                        <div className="aspect-[16/9] overflow-hidden border-b border-white/10 bg-muted">
                          <img
                            src={exp.image}
                            alt={`${exp.title} team and research work`}
                            className="h-full w-full object-cover opacity-90"
                          />
                        </div>
                      )}

                      <CardHeader>
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <CardTitle className="text-xl leading-tight">{exp.title}</CardTitle>
                            <p className="mt-2 text-sm font-semibold text-cyan-100">{exp.company}</p>
                          </div>
                          <span className="rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-3 py-1 text-xs font-semibold text-fuchsia-100">
                            {exp.period}
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-5">
                        <p className="leading-7 text-muted-foreground">{exp.description}</p>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement) => (
                            <li key={achievement} className="flex items-start gap-3">
                              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-lime-200" />
                              <span className="text-sm leading-6 text-foreground/90">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                        {exp.link && (
                          <Button variant="outline" size="sm" className="rounded-full border-white/15 bg-white/5" asChild>
                            <a href={exp.link.href} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3.5 w-3.5" />
                              {exp.link.label}
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>

                    <div className={`${isLeft ? "hidden md:block md:col-start-3" : "hidden md:block md:col-start-1 md:row-start-1"}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
