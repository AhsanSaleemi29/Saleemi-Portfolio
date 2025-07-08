import { CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    "Problem Solving",
    "Fast Learner", 
    "Team Leadership",
    "Adaptability"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <img 
              src="/attached_assets/WhatsApp%20Image%202025-07-08%20at%2021.51.06_64d37708_1751994490716.jpg" 
              alt="Ahsan Saleemi - Computer Science Student & Developer" 
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover h-96"
            />
          </div>
          
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Passionate Computer Science Student & Developer</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              As a dedicated Computer Science student at Lahore Garrison University, I'm passionate about enhancing my coding skills and engaging deeply in software development, artificial intelligence, and emerging technologies. I actively explore programming innovations and cutting-edge tools.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              When I'm not coding, you can find me gaming, playing cricket, working out at the gym, or exploring new technologies to stay ahead in the ever-evolving tech world.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
