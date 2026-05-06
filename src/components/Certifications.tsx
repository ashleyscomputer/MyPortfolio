import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { cardReveal, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-12"
        >
          <motion.div variants={revealUp} className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Credentials</p>
            <h2 className="text-4xl font-black md:text-5xl">Certifications</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Verified learning across networking, cybersecurity fundamentals, and cloud AI.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {certifications.map((cert) => (
              <motion.div key={cert.title} variants={cardReveal} whileHover={{ y: -6, scale: 1.01 }}>
                <Card className="glass-panel group h-full rounded-2xl transition-all duration-300 hover:border-lime-300/35 hover:shadow-[0_0_40px_rgba(190,242,100,0.12)]">
                  <CardHeader className="space-y-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-300/25 bg-lime-300/10 text-lime-100 shadow-[0_0_24px_rgba(190,242,100,0.14)]">
                        <Award className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="border-white/10 bg-white/5 text-muted-foreground">
                        {cert.year}
                      </Badge>
                    </div>
                    <div>
                      <CardTitle className="text-xl leading-tight">{cert.title}</CardTitle>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        {cert.issuer}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
