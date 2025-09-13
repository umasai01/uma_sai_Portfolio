import { Code, Trophy, Star } from "lucide-react";

const platforms = [
  {
    name: "Coding Ninjas",
    achievement: "100+ Problems Solved",
    icon: Code,
    color: "primary",
    url: "https://www.naukri.com/code360/profile/umasai"
  },
  {
    name: "GeeksforGeeks",
    achievement: "200+ Problems Solved",
    icon: Code,
    color: "primary",
    url: "https://www.geeksforgeeks.org/user/usai5hptj/"
  },
  {
    name: "HackerRank",
    achievement: "5⭐ in Java",
    icon: Star,
    color: "accent",
    url: "https://www.hackerrank.com/profile/usai59689"
  },
  {
    name: "LeetCode",
    achievement: "100+ Problems Solved",
    icon: Code, // you can also use another icon if you prefer
    color: "primary",
    url: "https://leetcode.com/u/umasai_01/"
  }
];

const CodingPlatformsSection = () => {
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
    <section id="coding-platforms" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold neon-text mb-6">
            Coding Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Demonstrating problem-solving skills across multiple platforms
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div 
                key={platform.name}
                className={`glass-card p-8 text-center group hover:scale-105 transition-all duration-300 cursor-pointer ${getColorClasses(platform.color)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(platform.url, '_blank')}
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full bg-gradient-to-br from-glass/40 to-glass/10 border ${getColorClasses(platform.color)}`}>
                    <Icon className={`h-12 w-12 transition-colors duration-300 ${getIconColorClasses(platform.color)}`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary-glow transition-colors">
                  {platform.name}
                </h3>
                
                <p className="text-lg font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {platform.achievement}
                </p>
                
                <div className="mt-4 flex justify-center">
                  <Trophy className={`h-6 w-6 ${getIconColorClasses(platform.color)} transition-all duration-300 group-hover:scale-110`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatformsSection;