import { Code, Server, Settings } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "text-blue-600",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 92 }
    ]
  },
  {
    title: "Backend", 
    icon: Server,
    color: "text-green-600",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "MongoDB", level: 80 },
      { name: "Express.js", level: 85 }
    ]
  },
  {
    title: "Tools & Others",
    icon: Settings,
    color: "text-purple-600", 
    skills: [
      { name: "Git/GitHub", level: 93 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 78 },
      { name: "Figma", level: 87 }
    ]
  }
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6 card-hover fade-in">
              <div className="flex items-center mb-4">
                <category.icon className={`${category.color} h-6 w-6 mr-3`} />
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={animate ? skill.level : 0} 
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
