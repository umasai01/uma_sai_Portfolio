import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodingPlatformsSection from "@/components/CodingPlatformsSection";
import CertificationsSection from "@/components/CertificationsSection";
import BlogSection from "@/components/InternshipExperienceInteractive";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-display">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CodingPlatformsSection />
        <CertificationsSection />
        <BlogSection />
        <ResumeSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-glass-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
