import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => scrollToSection('#contact');

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ahsan Saleemi</h3>
            <p className="text-gray-300 mb-4">
              Computer Science Student & Web Developer passionate about creating amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#skills')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#projects')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-300 mb-2">ahsansaleemi4415983@gmail.com</p>
            <p className="text-gray-300 mb-4">+92-325-945-4826</p>
            <Button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 Ahsan Saleemi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
