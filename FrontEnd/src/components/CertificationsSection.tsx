import { Award, ShieldCheck, Cloud, Brain } from "lucide-react";

const certifications = [
  {
    title: "Java Certification",
    issuer: "HackerRank",
    icon: Award,
    color: "primary",
    url: "https://drive.google.com/file/d/19yyxHMcMh0KZg6OkHcIHh5diPybHOEgA/view?usp=sharing"
  },
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    icon: Brain,
    color: "primary",
    url: "https://drive.google.com/file/d/1JyvrLMlDbT3s43JsiT4QdSl9JWKZikZ-/view?usp=sharing"
  },
  {
    title: "Azure Administrator Associate",
    issuer: "Microsoft",
    icon: ShieldCheck,
    color: "accent",
    url: "https://drive.google.com/file/d/1Zci-UimMWNgeOoek8YbHV9JFRzxpZEdh/view?usp=sharing"
  },
  {
    title: "Azure Fundamentals",
    issuer: "Microsoft",
    icon: Cloud,
    color: "primary",
    url: "https://drive.google.com/file/d/1ymw31l5U-52_TUWeByz2r2gwugcgfxRC/view?usp=sharing"
  },{
  title: "AWS Developer Certified Training",
  issuer: "Credo Systemz",
  icon: Cloud,  
  color: "accent",
  url: "https://drive.google.com/file/d/15Wynd4SSLQxf7dwjualKOeZRSb9RCKEU/view?usp=sharing"
}

];

const CertificationsSection = () => {
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
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold neon-text mb-6">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications showcasing expertise in Java and Microsoft Azure
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div 
                key={cert.title}
                className={`glass-card p-6 text-center group hover:scale-105 transition-all duration-300 cursor-pointer ${getColorClasses(cert.color)}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => window.open(cert.url, '_blank')}
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br from-glass/40 to-glass/10 border ${getColorClasses(cert.color)}`}>
                    <Icon className={`h-8 w-8 transition-colors duration-300 ${getIconColorClasses(cert.color)}`} />
                  </div>
                </div>
                
                <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary-glow transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {cert.issuer}
                </p>
                
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-primary font-mono">View Certificate →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;