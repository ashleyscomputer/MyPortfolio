import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import HackathonRecap from "@/components/HackathonRecap";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CyberBackground from "@/components/CyberBackground";
import CyberTerminal from "@/components/CyberTerminal";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <CyberBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Achievements />
        <HackathonRecap />
        <Experience />
        <Certifications />
        <Contact />
        <CyberTerminal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
