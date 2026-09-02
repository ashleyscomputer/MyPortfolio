import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { cardReveal, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

const terminalLines = [
  { command: "ashley@kali:~$ whoami", output: "aspiring ethical hacker" },
  { command: "ashley@kali:~$ skills --top", output: "react | django | linux | cybersecurity | data science" },
  { command: "ashley@kali:~$ tools --familiar", output: "nmap | wireshark | burp suite | git | python" },
  { command: "ashley@kali:~$ cat status.txt", output: "open to opportunities" },
  { command: "ashley@kali:~$ sudo reveal_passwords", output: "[sudo] password for recruiter:" },
  { command: "", output: "permission denied... nice try :)" },
];

const CyberTerminal = () => {
  return (
    <section id="terminal" className="relative py-16">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={revealUp} className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-300/30 bg-lime-300/10 text-lime-200 shadow-[0_0_24px_rgba(190,242,100,0.16)]">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Cyber/Data Terminal</h2>
              <p className="text-sm text-muted-foreground">A tiny Kali-flavored easter egg. Recruiter-safe, mostly.</p>
            </div>
          </motion.div>

          <motion.div variants={cardReveal} className="terminal-window overflow-hidden rounded-2xl">
            <div className="flex items-center justify-between border-b border-lime-300/10 bg-white/[0.03] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-lime-300" />
              </div>
              <span className="font-mono text-xs text-lime-200/70">kali-terminal</span>
            </div>
            <div className="terminal-code-rain relative space-y-4 p-5 font-mono text-sm md:p-7 md:text-base">
              {terminalLines.map((line, index) => (
                <div key={`${line.command}-${index}`} className="relative space-y-1">
                  {line.command && <p className="text-lime-200">{line.command}</p>}
                  <p className={index >= 4 ? "text-cyan-100" : "text-foreground/90"}>{line.output}</p>
                </div>
              ))}
              <p className="relative text-lime-200">
                ashley@kali:~$ <span className="animate-cursor-blink">_</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CyberTerminal;
