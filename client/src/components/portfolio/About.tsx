import { CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    "Problem Solving",
    "Team Leadership", 
    "Creative Design",
    "Fast Learner"
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400" 
              alt="Alex Johnson - Professional Developer" 
              className="rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover h-96"
            />
          </div>
          
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Passionate Developer & Problem Solver</h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating modern, responsive, and user-friendly applications. I'm passionate about clean code, innovative solutions, and staying up-to-date with the latest technologies.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
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
