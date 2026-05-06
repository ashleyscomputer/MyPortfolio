import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-lime-300 shadow-[0_0_22px_rgba(34,211,238,0.65)]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
