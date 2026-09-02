import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/80 py-8 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-4">
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
    </footer>
  );
};

export default Footer;
