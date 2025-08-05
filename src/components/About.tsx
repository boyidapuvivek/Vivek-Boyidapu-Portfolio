import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and passion for development
          </p>
        </div>

        <Card className="hover-lift glass-card border-none shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Hello, I'm Venkat Vivek 👋
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate full-stack mobile and web developer focused on 
                  building performant and scalable applications. Currently pursuing 
                  B.Tech in CSE (AI-ML) at Raghu Institute of Technology with a 
                  strong focus on React Native, Next.js, and backend APIs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey in development has led me through exciting internships 
                  where I've worked on cross-platform mobile apps, responsive web 
                  applications, and full-stack solutions. I love turning complex 
                  problems into simple, beautiful, and intuitive designs.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Current Focus</h4>
                  <p className="text-muted-foreground">
                    Building scalable mobile and web applications with modern tech stacks
                  </p>
                </div>
                
                <div className="p-6 bg-accent/5 rounded-xl border border-accent/10">
                  <h4 className="font-semibold text-accent mb-2">Education</h4>
                  <p className="text-muted-foreground">
                    B.Tech in CSE (AI-ML) • CGPA: 8.98/10
                  </p>
                </div>
                
                <div className="p-6 bg-secondary rounded-xl">
                  <h4 className="font-semibold text-secondary-foreground mb-2">Passion</h4>
                  <p className="text-muted-foreground">
                    Creating seamless user experiences through clean code and innovative solutions
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;