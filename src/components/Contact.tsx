import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { cardReveal, revealUp, staggerContainer, viewportOnce } from "@/lib/animations";

const contactItems = [
  {
    label: "Email",
    value: "ashleyvrfx@gmail.com",
    href: "mailto:ashleyvrfx@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "@ashleyvanrooyen",
    href: "https://www.linkedin.com/in/ashleyvanrooyen",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "@ashleyscomputer",
    href: "https://github.com/ashleyscomputer",
    icon: Github,
  },
  {
    label: "WhatsApp",
    value: "081 322 9264",
    href: "https://wa.me/27813229264",
    icon: Phone,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-12"
        >
          <motion.div variants={revealUp} className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Contact</p>
            <h2 className="text-4xl font-black md:text-5xl">Let's Connect</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Open to junior cybersecurity, data, software development, and IT support opportunities.
            </p>
          </motion.div>

          <motion.div variants={cardReveal} className="mx-auto max-w-5xl">
            <Card className="glass-panel overflow-hidden rounded-2xl">
              <CardContent className="grid gap-8 p-6 md:grid-cols-[0.85fr_1.15fr] md:p-8">
                <div className="flex flex-col justify-between gap-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6">
                  <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/30 bg-background/40 text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.18)]">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Available for useful work.</h3>
                      <p className="mt-3 leading-7 text-muted-foreground">
                        Junior cybersecurity, data, software development, IT support, and technical teams that value curiosity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-background/45 p-4">
                    <MapPin className="h-5 w-5 shrink-0 text-fuchsia-200" />
                    <div>
                      <p className="font-semibold">Kimberley, South Africa</p>
                      <p className="text-sm text-muted-foreground">Remote-friendly, opportunity-ready.</p>
                    </div>
                  </div>

                  <Button size="lg" className="rounded-full" asChild>
                    <a href="/Ashley-Van-Rooyen-CV-2025.pdf" download>
                      <Download className="h-4 w-4" />
                      Download Full CV
                    </a>
                  </Button>
                </div>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const isExternal = item.href.startsWith("https://");

                    return (
                      <motion.a
                        key={item.label}
                        variants={cardReveal}
                        href={item.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
                      >
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 transition-transform group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="font-semibold text-foreground">{item.label}</p>
                        <p className="mt-1 break-words text-sm text-muted-foreground">{item.value}</p>
                      </motion.a>
                    );
                  })}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
