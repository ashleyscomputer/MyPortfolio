import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedRoleTextProps = {
  roles: string[];
};

const TYPING_SPEED = 48;
const DELETING_SPEED = 26;
const HOLD_TIME = 1200;

const AnimatedRoleText = ({ roles }: AnimatedRoleTextProps) => {
  const shouldReduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState(roles[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || roles.length <= 1) {
      setVisibleText(roles[0] ?? "");
      return;
    }

    const currentRole = roles[roleIndex];
    const isComplete = !isDeleting && visibleText === currentRole;
    const isCleared = isDeleting && visibleText === "";

    const delay = isComplete ? HOLD_TIME : isDeleting ? DELETING_SPEED : TYPING_SPEED;

    const timer = window.setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isCleared) {
        setIsDeleting(false);
        setRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      setVisibleText((current) => {
        if (isDeleting) {
          return current.slice(0, -1);
        }

        return currentRole.slice(0, current.length + 1);
      });
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, roleIndex, roles, shouldReduceMotion, visibleText]);

  return (
    <motion.span
      className="inline-flex min-h-[2.4rem] items-center justify-center text-balance bg-gradient-to-r from-cyan-200 via-fuchsia-300 to-lime-200 bg-clip-text text-transparent"
      aria-live="polite"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      {visibleText}
      <span className="ml-1 inline-block h-8 w-[2px] animate-cursor-blink bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
    </motion.span>
  );
};

export default AnimatedRoleText;
