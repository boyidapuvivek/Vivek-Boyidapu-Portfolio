import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Code, Smartphone } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Xcrino Business Solutions",
      role: "FrontEnd React Native Intern",
      duration: "Apr 2025 – Jun 2025",
      location: "Remote",
      icon: Smartphone,
      color: "primary",
      description: "Built pixel-perfect cross-platform UIs using React Native and Figma designs",
      achievements: [
        "Built pixel-perfect cross-platform UIs using React Native and Figma designs",
        "Integrated RESTful APIs and collaborated with backend and design teams",
        "Delivered high-quality mobile applications with seamless user experience"
      ],
      tech: ["React Native", "TypeScript", "TamagUI", "Node.js", "Express.js"]
    },
    {
      company: "Shortsqueeze Pvt. Ltd.",
      role: "Frontend Developer Intern",
      duration: "Dec 2024 – Mar 2025",
      location: "Remote",
      icon: Code,
      color: "accent",
      description: "Developed dynamic Next.js web apps with responsive, user-centric interfaces",
      achievements: [
        "Developed dynamic Next.js web apps with responsive, user-centric interfaces",
        "Used Docker and Postman for efficient containerized development and debugging",
        "Implemented modern web development practices and responsive design principles"
      ],
      tech: ["Next.js", "React.js", "TypeScript", "Docker", "TablePlus"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          border: "border-accent/20"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20"
        };
    }
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            
            return (
              <Card key={index} className="hover-lift glass-card border-none shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Icon and Company Info */}
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-4`}>
                        <exp.icon size={32} className={colors.text} />
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.company}
                        </h3>
                        <p className="text-lg font-semibold text-muted-foreground">
                          {exp.role}
                        </p>
                        
                        <div className="space-y-1">
                          <Badge variant="outline" className={`${colors.bg} ${colors.text} ${colors.border}`}>
                            <Calendar size={14} className="mr-1" />
                            {exp.duration}
                          </Badge>
                          <Badge variant="outline" className="bg-secondary/50 text-secondary-foreground">
                            <MapPin size={14} className="mr-1" />
                            {exp.location}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="flex-1">
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <span className={`w-2 h-2 ${colors.bg.replace('/10', '')} rounded-full mt-2 flex-shrink-0`}></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="skill-tag"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;