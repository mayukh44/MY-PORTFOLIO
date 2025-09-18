import { useState } from "react";
import { cn } from "../lib/utils";
import cppLogo from "../assets/cpp.svg";

const skills = [
  { name: "HTML", logo: "https://go-skill-icons.vercel.app/api/icons?i=html", category: "frontend" },
  { name: "CSS", logo: "https://go-skill-icons.vercel.app/api/icons?i=css", category: "frontend" },
  { name: "JavaScript", logo: "https://go-skill-icons.vercel.app/api/icons?i=js", category: "frontend" },
  { name: "React", logo: "https://go-skill-icons.vercel.app/api/icons?i=react", category: "frontend" },
  { name: "Bootstrap", logo: "https://go-skill-icons.vercel.app/api/icons?i=bootstrap", category: "frontend" },
  { name: "EJS", logo: "https://go-skill-icons.vercel.app/api/icons?i=ejs", category: "frontend" },

  
  { name: "Node.js", logo: "https://go-skill-icons.vercel.app/api/icons?i=nodejs", category: "backend" },
  { name: "Express", logo: "https://go-skill-icons.vercel.app/api/icons?i=express", category: "backend" },
  { name: "SQL", logo: "https://go-skill-icons.vercel.app/api/icons?i=mysql", category: "backend" },
  { name: "MongoDB", logo: "https://go-skill-icons.vercel.app/api/icons?i=mongodb", category: "backend" },
  { name: "Joi", logo: "https://go-skill-icons.vercel.app/api/icons?i=mongodb", category: "backend" },
  { name: "C", logo: "https://go-skill-icons.vercel.app/api/icons?i=c", category: "language" },
  { name: "C++", logo: cppLogo, category: "language" },
  { name: "Python", logo: "https://go-skill-icons.vercel.app/api/icons?i=python", category: "language" },
  { name: "Java", logo: "https://go-skill-icons.vercel.app/api/icons?i=java", category: "language" },



  { name: "VSCode", logo: "https://go-skill-icons.vercel.app/api/icons?i=vscode", category: "tools" },
  { name: "GitHub", logo: "https://go-skill-icons.vercel.app/api/icons?i=github", category: "tools" },
  { name: "Canva", logo: "https://go-skill-icons.vercel.app/api/icons?i=canva", category: "tools" },
];

const categories = ["all", "frontend", "backend", "language", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-transparent border border-transparent p-4 rounded-xl transition-all duration-300 flex flex-col items-center hover:border-primary hover:shadow-md hover:scale-105"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <h3 className="text-sm font-medium text-center">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
