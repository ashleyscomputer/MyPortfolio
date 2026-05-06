import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/80 py-8 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm text-muted-foreground">&copy; {currentYear} Ashley Van Rooyen. All rights reserved.</p>
            <p className="mt-1 text-xs text-muted-foreground/80">
              Built with React, caffeine, and suspicious confidence.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ashleyvanrooyen"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/ashleyscomputer"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a href="mailto:ashleyvrfx@gmail.com" className="social-icon" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
