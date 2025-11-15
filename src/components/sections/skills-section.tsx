import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Code, ShieldCheck } from "lucide-react";

const skillsData = {
  core: {
    title: "Core Technologies",
    icon: <Code className="h-6 w-6" />,
    items: ["Python (Pandas, Flask)", "C++", "C", "JavaScript", "HTML", "CSS", "Node.js", "MySQL", "Data Structure and Algorithm (DSA)", "API Development", "Project Management"],
  },
  ai: {
    title: "AI & Machine Learning",
    icon: <BrainCircuit className="h-6 w-6" />,
    items: ["Generative AI", "Prompt Engineering", "LLM Application", "AI Product Strategy", "Gemini", "ChatGPT", "Google Earth Engine"],
  },
  security: {
    title: "Cybersecurity & Platforms",
    icon: <ShieldCheck className="h-6 w-6" />,
    items: ["Computer Security Awareness", "Data Security", "Network Intrusion Detection", "Google Cloud Platform (GCP)", "AWS", "Salesforce Trailhead", "Microsoft Learn", "Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook"],
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(skillsData).map((category) => (
            <Card key={category.title} className="flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-headline">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
