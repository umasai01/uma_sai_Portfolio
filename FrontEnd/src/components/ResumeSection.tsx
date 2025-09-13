import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
const resumeDownloadUrl =
  "https://drive.google.com/uc?export=download&id=1PUPLo4BJ9jfmpsuznhiUBJB_e7Ow6qom";


  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeDownloadUrl;
    link.download = 'Singamaneni_Uma_Venkata_Siva_Sai_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="p-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 animate-pulse-glow">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold neon-text mb-6">
                Download My Resume
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Get a comprehensive overview of my experience, skills, and achievements. 
                Perfect for HR teams and potential collaborators.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span>Complete Work History</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                    <span>Technical Skills</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span>Certifications</span>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="glass-button text-xl px-12 py-6 rounded-xl font-semibold group hover:scale-105 transition-all duration-300"
                onClick={handleDownloadResume}
              >
                <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Download Resume
                <span className="ml-2 text-sm font-mono opacity-70">(PDF)</span>
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4 font-mono">
                Last Updated: January 2025 • File Size: ~150KB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
