import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { cardReveal, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

const HackathonRecap = () => {
  return (
    <section id="hackathon-recap" className="relative py-16">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-5xl space-y-7"
        >
          <motion.div variants={revealUp} className="text-center">
            <p className="section-kicker">Watch The Win</p>
            <h2 className="text-3xl font-black md:text-5xl">Security Summit Hackathon Recap</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A short recap from the Security Summit 2025 Hackathon.
            </p>
          </motion.div>

          <motion.div variants={cardReveal} className="glass-panel overflow-hidden rounded-2xl p-3">
            <div className="mb-3 flex items-center gap-2 px-2 text-sm font-semibold text-cyan-100">
              <PlayCircle className="h-4 w-4" />
              Hackathon Recap
            </div>
            <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/PGkqt7WCG3g?si=Mv_II3iLpM_bJOvk"
                title="Security Summit 2025 Hackathon recap"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonRecap;
