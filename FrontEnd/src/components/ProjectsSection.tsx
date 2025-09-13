import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import kneeImg from "@/assets/KOA_knee.jpg";
import clubManagementImg from "@/assets/club-management-project.jpg";
import bookstoreImg from "@/assets/bookstore-project.jpg";
import BikeImg from "@/assets/Bike.jpg"
import ResumeBuilderImg from "@/assets/Resume-Builder.jpg"
const projects = [
 {
  "title": "Club Management System",
  "description": "A web-based application that provides separate access panels for admins and users. Admins can add and manage clubs, while users can view club details and access notes through an easy-to-use interface.",
  "techStack": ["HTML", "CSS", "JavaScript", "JDBC", "JSP", "MySQL", "Java"],
  "image": clubManagementImg,
  "githubUrl": "https://github.com/umasai01/Event_magment",
  "demoUrl": "https://drive.google.com/file/d/1y46VPcMiEqa_2ER1R6leYPRSOEJ8EJny/view?usp=sharing"
},
{
  title: "Osteoarthritis-Detection-from-Knee-X-ray-Images",
  description: "A deep learning project for diagnosing osteoarthritis from knee X-ray images using transfer learning (VGG-16, ResNet) and smart feature engineering. Achieved ~94% accuracy in classification.",
  techStack: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "OpenCV", "scikit-learn", "Matplotlib", "Seaborn"],
  image: kneeImg,
  githubUrl: "https://github.com/umasai01/Osteoarthritis-Detection-from-Knee-X-ray-Images",
  demoUrl: "https://drive.google.com/file/d/1BSNZSjmS6I-N9hkNQiLq7DqgDiby6kQU/view?usp=sharing"
}
,{
  title: "Online Book Store",
  description: "A full-stack e-commerce platform for books with dedicated admin and user portals. Features include inventory and order management, email notifications via SMTP Mail API, and secure payments powered by Razorpay.",
  techStack: ["Spring Boot", "MySQL", "HTML", "CSS", "JavaScript","JAVA"],
  image: bookstoreImg,
  githubUrl: "https://github.com/umasai01/Online-Book_Store",
  demoUrl: "https://drive.google.com/file/d/14gKEECg1YKxvBM3M9GbigNrhDhinkItd/view?usp=sharing"
},
{
  title: "Bike Sharing Demand Prediction",
  description: "A machine learning project analyzing bike-sharing usage patterns to predict demand. Built with Decision Tree and Random Forest models, featuring an interactive Streamlit dashboard with visualizations and real-time prediction inputs.",
  techStack: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Matplotlib", "Seaborn"],
  image: BikeImg,
  githubUrl: "https://github.com/umasai01/Bike-Sharing-Demand-Prediction",
  demoUrl: "https://drive.google.com/file/d/1vZOwzRKlpX9JXcJlLlZ_FaprNMpD36DK/view?usp=sharing"
},
{
  title: "Resume Builder",
  description: "An intelligent resume builder that generates tailored resumes using AI and integrates LinkedIn data for profile enrichment. Built with React for the frontend, Java Spring Boot and SQL for backend data management, and powered by the OpenAI API for smart content suggestions.",
  techStack: ["React", "OpenAI API", "LinkedIn API", "Java Spring Boot", "SQL"],
  image: ResumeBuilderImg, // ✅ make sure to import this
  githubUrl: "https://github.com/umasai01/Resume_Builder",
  demoUrl: "https://drive.google.com/file/d/1lIMAE-h-sXD4BwdMc3Rcjgt0a7mODKvc/view?usp=sharing"
}

];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold neon-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my experience in full-stack development and modern web technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card group hover:scale-105 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3 text-primary group-hover:text-primary-glow transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-3 py-1 bg-muted/30 text-foreground rounded-full border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 glass-button border-primary/30 hover:border-primary/60"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="flex-1 glass-button"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;