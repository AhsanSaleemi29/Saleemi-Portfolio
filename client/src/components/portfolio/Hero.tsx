import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-12 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in">
            Alex Johnson
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100 fade-in">
            Full-Stack Web Developer
          </p>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto fade-in">
            Creating beautiful, functional, and user-friendly digital experiences with modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Button 
              onClick={scrollToContact}
              className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 font-semibold"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              className="bg-blue-600/20 text-white hover:bg-blue-600/30 border-blue-400 px-8 py-3 font-semibold"
              asChild
            >
              <a href="/assets/alex-johnson-cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
