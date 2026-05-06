import { motion } from "framer-motion";
import { Award, MapPin, Medal, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cardReveal, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

const rankIcons = [Trophy, Medal, Award, Award];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-12"
        >
          <motion.div variants={revealUp} className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Wins & Signals</p>
            <h2 className="text-4xl font-black md:text-5xl">Achievements & Hackathons</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Competitive proof, practical teamwork, and data/security work done outside the comfort zone.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {achievements.map((achievement, index) => {
              const Icon = rankIcons[index] ?? Award;

              return (
                <motion.div key={achievement.title} variants={cardReveal} whileHover={{ y: -6 }}>
                  <Card className="glass-panel group h-full overflow-hidden rounded-2xl transition-all duration-300 hover:border-fuchsia-300/40 hover:shadow-[0_0_42px_rgba(217,70,239,0.14)]">
                    {achievement.image && (
                      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-muted">
                        <img
                          src={achievement.image}
                          alt={`${achievement.subtitle} team photo`}
                          className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                      </div>
                    )}

                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-200/30 bg-amber-200/10 text-amber-100 shadow-[0_0_24px_rgba(251,191,36,0.18)]">
                          <Icon className="h-6 w-6" />
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-muted-foreground">
                          #{index + 1}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-2xl leading-tight">{achievement.title}</CardTitle>
                        <p className="mt-2 text-sm font-semibold text-cyan-100">{achievement.subtitle}</p>
                        {achievement.location && (
                          <p className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            {achievement.location}
                          </p>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-5">
                      <p className="leading-7 text-muted-foreground">{achievement.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {achievement.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="skill-badge">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
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

export default Achievements;
