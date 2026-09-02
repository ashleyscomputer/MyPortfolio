import { motion } from "framer-motion";
import { Code2, Database, ShieldCheck } from "lucide-react";
import { cardReveal, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

const focusAreas = [
  { label: "Application Security", icon: ShieldCheck },
  { label: "Full-Stack Engineering", icon: Code2 },
  { label: "Data & Machine Learning", icon: Database },
];

const About = () => {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div variants={cardReveal} className="glass-panel relative overflow-hidden rounded-2xl p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.12),transparent_32%)]" />
            <img
              src="/assets/Me2.jpeg"
              alt="Ashley Van Rooyen in a casual professional setting"
              className="relative aspect-[4/5] w-full rounded-xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-7">
            <motion.div variants={revealUp}>
              <p className="section-kicker">About Me</p>
              <h2 className="text-balance text-4xl font-black md:text-5xl">Engineering practical, secure systems.</h2>
            </motion.div>

            <motion.p variants={revealUp} className="text-lg leading-8 text-muted-foreground">
              I am an ICT student at Sol Plaatje University focused on full-stack development, cybersecurity, and
              data-intensive systems. My work spans React and Django applications, Android development, interpretable
              machine learning, network troubleshooting, and structured research data workflows.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid gap-3 sm:grid-cols-3">
              {focusAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <motion.div key={area.label} variants={cardReveal} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <Icon className="mb-3 h-5 w-5 text-cyan-200" />
                    <p className="text-sm font-semibold">{area.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p variants={revealUp} className="font-mono text-sm text-cyan-100/80">
              Kimberley, South Africa / Available for junior technical roles
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
