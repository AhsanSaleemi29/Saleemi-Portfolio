import { useEffect } from "react";
import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Testimonials from "@/components/portfolio/Testimonials";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Portfolio() {
  useEffect(() => {
    // Set page title
    document.title = "Ahsan Saleemi - Computer Science Student & Web Developer";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Computer Science student and web developer portfolio showcasing programming projects, technical skills, and academic achievements.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Computer Science student and web developer portfolio showcasing programming projects, technical skills, and academic achievements.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
