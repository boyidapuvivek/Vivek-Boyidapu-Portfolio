import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Wrench, Database, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C/C++", "JavaScript", "TypeScript", "Python"],
      color: "primary"
    },
    {
      title: "Frontend",
      icon: Wrench,
      skills: ["React.js", "Next.js", "React Native", "TamagUI"],
      color: "accent"
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
      color: "secondary"
    },
    {
      title: "Tools & DevOps",
      icon: Cloud,
      skills: ["Docker", "Postman", "Table Plus", "Figma", "Git"],
      color: "warning"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
      case "accent":
        return "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20";
      case "secondary":
        return "bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20";
      case "warning":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20";
      default:
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover-lift border-none shadow-md group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${
                    category.color === "primary" ? "bg-primary/10" :
                    category.color === "accent" ? "bg-accent/10" :
                    category.color === "secondary" ? "bg-blue-500/10" :
                    "bg-orange-500/10"
                  }`}>
                    <category.icon size={20} className={
                      category.color === "primary" ? "text-primary" :
                      category.color === "accent" ? "text-accent" :
                      category.color === "secondary" ? "text-blue-600" :
                      "text-orange-600"
                    } />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`transition-all duration-300 ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Skills Grid */}
        <div className="mt-16">
          <Card className="glass-card border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Complete Skill Set</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillCategories.flatMap(category => category.skills).map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="skill-tag text-sm py-2 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;