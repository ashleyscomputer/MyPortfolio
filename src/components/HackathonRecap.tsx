import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { cardReveal, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

const HackathonRecap = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

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
            <p className="section-kicker">Media</p>
            <h2 className="text-3xl font-black md:text-5xl">Security Summit Hackathon Recap</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Event recap from the 2025 regional cybersecurity hackathon.
            </p>
          </motion.div>

          <motion.div variants={cardReveal} className="glass-panel overflow-hidden rounded-2xl p-3">
            <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
              {videoLoaded ? (
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube-nocookie.com/embed/PGkqt7WCG3g?autoplay=1"
                  title="Security Summit 2025 Hackathon recap"
                  allow="autoplay; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setVideoLoaded(true)}
                  className="group relative h-full w-full overflow-hidden text-left"
                  aria-label="Play Security Summit 2025 Hackathon recap"
                >
                  <img
                    src="https://i.ytimg.com/vi/PGkqt7WCG3g/hqdefault.jpg"
                    alt="Security Summit 2025 Hackathon recap video cover"
                    className="h-full w-full object-cover opacity-75 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-90"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/40 bg-background/80 text-cyan-100 shadow-[0_0_32px_rgba(34,211,238,0.24)] backdrop-blur transition group-hover:scale-105">
                      <Play className="ml-1 h-7 w-7" fill="currentColor" />
                    </span>
                  </span>
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonRecap;
