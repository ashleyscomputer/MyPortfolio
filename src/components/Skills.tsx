import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BrainCircuit, CloudCog, Code2, GitBranch, ServerCog, ShieldCheck } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { marqueeSkills, skillCategories } from "@/data/skills";
import { cardReveal, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  Cybersecurity: ShieldCheck,
  "Data & AI": BrainCircuit,
  Frontend: Code2,
  Backend: ServerCog,
  "Mobile & Cloud": CloudCog,
  "Dev Practices": GitBranch,
};

const Skills = () => {
  const scrollingSkills = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-12"
        >
          <motion.div variants={revealUp} className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Technical Stack</p>
            <h2 className="text-4xl font-black md:text-5xl">Skills & Expertise</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Practical tools across cybersecurity, data, software, support, and the occasional Linux rabbit hole.
            </p>
          </motion.div>

          <motion.div variants={revealUp} className="marquee-shell">
            <div className="marquee-track">
              {scrollingSkills.map((skill, index) => (
                <span key={`${skill}-${index}`} className="marquee-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {skillCategories.map((category) => {
              const Icon = iconMap[category.title] ?? Code2;

              return (
                <motion.div key={category.title} variants={cardReveal} whileHover={{ y: -7, scale: 1.01 }}>
                  <Card className="glass-panel group h-full rounded-2xl p-6 transition-all duration-300 hover:border-cyan-300/45 hover:shadow-[0_0_38px_rgba(34,211,238,0.16)]">
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_26px_rgba(34,211,238,0.18)] transition-all group-hover:scale-110 group-hover:text-lime-200">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.025 }}
                        >
                          <Badge variant="secondary" className="skill-badge">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
