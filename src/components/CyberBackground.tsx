import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const CyberBackground = () => {
  const [particlesReady, setParticlesReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const updateMobile = () => setIsMobile(mobileQuery.matches);

    updateMobile();
    mobileQuery.addEventListener("change", updateMobile);

    return () => mobileQuery.removeEventListener("change", updateMobile);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      return;
    }

    let mounted = true;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (mounted) {
        setParticlesReady(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      glowRef.current?.style.setProperty("--mouse-x", `${event.clientX}px`);
      glowRef.current?.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const options = useMemo<ISourceOptions>(
    () => ({
      background: { color: { value: "transparent" } },
      detectRetina: true,
      fpsLimit: 60,
      fullScreen: { enable: false },
      particles: {
        number: {
          value: isMobile ? 18 : 42,
          density: {
            enable: true,
            area: 900,
          },
        },
        color: {
          value: ["#22d3ee", "#a855f7", "#f472b6", "#bef264"],
        },
        links: {
          enable: true,
          color: "#22d3ee",
          opacity: isMobile ? 0.08 : 0.16,
          distance: isMobile ? 105 : 150,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.28 : 0.42,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        opacity: {
          value: { min: 0.12, max: 0.38 },
        },
        size: {
          value: { min: 1, max: 2.4 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: !isMobile,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 160,
            links: {
              opacity: 0.22,
            },
          },
        },
      },
    }),
    [isMobile],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="cyber-grid absolute inset-0" />
      <div className="cyber-scanline absolute inset-0" />
      <div ref={glowRef} className="mouse-glow absolute inset-0" />
      {particlesReady && (
        <Particles id="cyber-particles" className="absolute inset-0 opacity-80" options={options} />
      )}
    </div>
  );
};

export default CyberBackground;
