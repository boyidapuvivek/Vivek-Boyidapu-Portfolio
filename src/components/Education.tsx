import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="hover-lift glass-card border-none shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap size={32} className="text-primary" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2 md:mb-0">
                      Raghu Institute of Technology
                    </h3>
                    <Badge variant="outline" className="self-start md:self-center bg-primary/10 text-primary border-primary/20">
                      <Calendar size={14} className="mr-1" />
                      2021 – 2025
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <p className="text-lg font-semibold text-muted-foreground mb-2">
                      Bachelor of Technology (B.Tech)
                    </p>
                    <p className="text-lg text-muted-foreground">
                      Computer Science and Engineering (AI-ML)
                    </p>
                  </div>

                  {/* CGPA Highlight */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg border border-accent/20">
                      <Award size={20} className="text-accent" />
                      <span className="font-semibold text-accent">CGPA: 8.98/10</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Specialized in Artificial Intelligence and Machine Learning
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Strong foundation in Computer Science fundamentals
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Focus on practical application of AI/ML in software development
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        Consistent academic performance with high CGPA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;