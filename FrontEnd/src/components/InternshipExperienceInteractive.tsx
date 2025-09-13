import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

const internships = [
  {
    company: "NOVAC Technology & Solution",
    role: "Full Stack Developer Intern",
    duration: "4 Months",
    location: "Chennai, India",
    stipend: "Stipend-Based Internship",
    skills: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    description: "Worked on end-to-end web development, including backend APIs, database management, and frontend integration using Java, Spring Boot, and MySQL.",
    icon: <Briefcase className="h-8 w-8 text-white" />
  }
];

const InternshipExperienceInteractive = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="internships" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 neon-text">
          Internship Experience
        </h2>

        <div className="flex justify-center">
          {internships.map((item, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 w-full md:w-2/5 cursor-pointer"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
            >
              <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-primary shadow-md mx-auto">
                {item.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">{item.company}</h3>
              <p className="text-muted-foreground mb-1">{item.role}</p>
              <p className="text-muted-foreground mb-1">{item.duration}</p>
              <p className="text-muted-foreground mb-2">{item.location}</p>
              <p className="text-xs text-primary mb-4 font-semibold">{item.stipend}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs hover:bg-primary hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {expandedIndex === index && (
                <div className="mt-4 text-muted-foreground text-sm">
                  {item.description}
                </div>
              )}

              <div className="flex justify-center mt-2 text-primary">
                {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipExperienceInteractive;
