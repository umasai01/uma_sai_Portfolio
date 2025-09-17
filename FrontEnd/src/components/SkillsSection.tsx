import { Code2, Database, Settings, TestTube, Brain, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "Python", "C#" ,"VB"],
    color: "primary"
  },
  {
    title: "Frameworks",
    icon: Settings,
    skills: ["Spring", "Spring Boot",".NET"],
    color: "primary"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MSSQL", "PostgreSQL"],
    color: "accent"
  },
  {
    title: "Tools",
    icon: Settings,
    skills: ["Postman", "IntelliJ IDEA", "RESTful APIs","VS-Code"],
    color: "primary"
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["JUnit", "Mockito"],
    color: "secondary"
  },
  {
    title: "Concepts",
    icon: Brain,
    skills: ["OOPS", "DSA"],
    color: "accent"
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["Microsoft Azure"],
    color: "primary"
  }
];

const SkillsSection = () => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "border-primary/30 hover:border-primary/60 hover:shadow-neon";
      case "secondary":
        return "border-secondary/30 hover:border-secondary/60 hover:shadow-neon-secondary";
      case "accent":
        return "border-accent/30 hover:border-accent/60 hover:shadow-neon-accent";
      default:
        return "border-primary/30 hover:border-primary/60 hover:shadow-neon";
    }
  };

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "text-primary group-hover:text-primary-glow";
      case "secondary":
        return "text-secondary group-hover:text-secondary-glow";
      case "accent":
        return "text-accent group-hover:text-accent-glow";
      default:
        return "text-primary group-hover:text-primary-glow";
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold neon-text mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className={`glass-card p-6 group hover:scale-105 transition-all duration-300 ${getColorClasses(category.color)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`h-8 w-8 mr-3 transition-colors duration-300 ${getIconColorClasses(category.color)}`} />
                  <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="text-sm text-muted-foreground bg-muted/20 px-3 py-1 rounded-full transition-colors duration-300 group-hover:text-foreground"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
