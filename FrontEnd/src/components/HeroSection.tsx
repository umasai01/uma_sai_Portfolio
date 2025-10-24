import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const HeroSection = () => {
  const resumeViewUrl =
    "https://drive.google.com/file/d/1O48RYKDTzxiknnvtErV4Fpk0kaD8fOP7/view?usp=sharing";

  const handleViewResume = () => {
    window.open(resumeViewUrl, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative particle-bg grid-pattern">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="neon-text">Singamaneni Uma Venkata</span>
            <br />
            <span className="neon-text">Siva Sai</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground/90 mb-4">
            Full Stack Developer (Java & .NET)
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Turning ideas into scalable web apps <br /> using Java and .NET.
          </p>

          <div className="flex justify-center gap-6">
            {/* View Resume */}
            <Button
              size="lg"
              className="glass-button text-lg px-8 py-6 rounded-xl font-semibold group"
              onClick={handleViewResume}
            >
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl floating-animation"></div>
      <div
        className="absolute top-40 right-20 w-12 h-12 bg-secondary/20 rounded-full blur-xl floating-animation"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent/20 rounded-full blur-xl floating-animation"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
