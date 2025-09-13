import profilePic from "@/assets/profile-picture.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden glass-card border-2 border-primary/30">
                <img 
                  src={profilePic} 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold neon-text">
              About Me
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/90 leading-relaxed">
              <p>
                I am <span className="text-primary font-semibold">Singamaneni Uma Venkata Siva Sai</span>, a recent graduate with a <span className="text-primary font-semibold">Bachelor of Engineering (B.E.) in Computer Science & Engineering – Artificial Intelligence and Machine Learning (AI/ML)</span> from <span className="text-primary font-semibold">Sathyabama Institute of Science and Technology</span>.
              </p>

              <p>
                I have hands-on experience in <span className="text-primary font-semibold">Java, Python, and .NET</span>, along with frameworks like <span className="text-primary font-semibold">Spring Boot</span>. I am familiar with databases such as <span className="text-primary font-semibold">MySQL and MSSQL</span> and have exposure to <span className="text-primary font-semibold">Microsoft Azure</span> for cloud-based projects.
              </p>

              <p>
                I enjoy <span className="text-accent font-semibold">problem-solving</span> and working in teams. I am a <span className="text-accent font-semibold">quick learner</span> and always eager to contribute to meaningful projects that create real impact.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-card p-4 text-center group hover:scale-105 transition-transform">
                  <h4 className="font-display font-semibold text-primary mb-2">Programming</h4>
                  <p className="text-sm text-muted-foreground">Java, Python, DSA,C#,VB</p>
                </div>
                
                <div className="glass-card p-4 text-center group hover:scale-105 transition-transform">
                  <h4 className="font-display font-semibold text-primary mb-2">Cloud</h4>
                  <p className="text-sm text-muted-foreground">Microsoft Azure</p>
                </div>
                
                <div className="glass-card p-4 text-center group hover:scale-105 transition-transform">
                  <h4 className="font-display font-semibold text-accent mb-2">Teamwork</h4>
                  <p className="text-sm text-muted-foreground">Collaborative Spirit</p>
                </div>
                
                <div className="glass-card p-4 text-center group hover:scale-105 transition-transform">
                  <h4 className="font-display font-semibold text-primary mb-2">Adaptability</h4>
                  <p className="text-sm text-muted-foreground">Quick Learner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
