import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Smartphone, Calendar, Briefcase } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Capture Ride",
      description: "Full Stack Mobile App for bike rental management with comprehensive backend integration",
      fullDescription: "A complete React Native application designed for bike rental management. Features include user authentication, bike booking system, real-time availability tracking, and payment integration. Built with a robust backend using Node.js, Express.js, and MongoDB for seamless data management.",
      icon: Smartphone,
      color: "primary",
      tech: ["React Native", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
      github: "https://github.com/boyidapuvivek/CaptureRide",
      type: "Full Stack Mobile App"
    },
    {
      title: "Job Listing App",
      description: "Modern React Native app with Expo Router featuring dynamic screens and Context API",
      fullDescription: "A comprehensive job listing application built with React Native and Expo Router. Features include job search functionality, bookmarking system, dynamic detail screens with smooth navigation, and clean SVG-based UI components. Utilizes Context API for efficient state management across the application.",
      icon: Briefcase,
      color: "accent",
      tech: ["React Native", "Expo Router", "Context API", "SVG", "JavaScript"],
      github: "https://github.com/boyidapuvivek/job-listing",
      type: "Mobile App"
    },
    {
      title: "Calendar Web Application",
      description: "Minimalistic and responsive calendar for adding and viewing events with real-time updates",
      fullDescription: "A clean and intuitive calendar web application built with vanilla JavaScript. Features include event creation, editing, and deletion with real-time updates. The responsive design ensures optimal viewing across all devices. Deployed on GitHub Pages for easy access and demonstration.",
      icon: Calendar,
      color: "secondary",
      tech: ["JavaScript", "HTML5", "CSS3", "GitHub Pages", "Responsive Design"],
      github: "https://github.com/boyidapuvivek/calendar",
      live: "https://boyidapuvivek.github.io/calendar",
      type: "Web Application"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20",
          gradient: "from-primary/20 to-primary/5"
        };
      case "accent":
        return {
          bg: "bg-accent/10",
          text: "text-accent",
          border: "border-accent/20",
          gradient: "from-accent/20 to-accent/5"
        };
      case "secondary":
        return {
          bg: "bg-blue-500/10",
          text: "text-blue-600",
          border: "border-blue-500/20",
          gradient: "from-blue-500/20 to-blue-500/5"
        };
      default:
        return {
          bg: "bg-primary/10",
          text: "text-primary",
          border: "border-primary/20",
          gradient: "from-primary/20 to-primary/5"
        };
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work, from mobile apps to web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <Card key={index} className="hover-lift glass-card border-none shadow-lg group h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                      <project.icon size={24} className={colors.text} />
                    </div>
                    <Badge variant="outline" className={`${colors.bg} ${colors.text} ${colors.border} text-xs`}>
                      {project.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs py-1 px-2 skill-tag"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        asChild
                        className={`flex-1 ${colors.bg} ${colors.text} ${colors.border} hover:bg-opacity-20`}
                      >
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                      
                      {project.live && (
                        <Button 
                          size="sm"
                          asChild
                          className={`flex-1 bg-gradient-to-r ${colors.gradient}`}
                        >
                          <a 
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Live
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Card className="glass-card border-none shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Explore More Projects</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions to open source
              </p>
              <Button asChild size="lg" className="shadow-md">
                <a 
                  href="https://github.com/boyidapuvivek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={20} />
                  View All Projects
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;