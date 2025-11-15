import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Full Stack Web Application",
    description: "A major project for the Wayspire Full Stack Development certification. I built a complete web application from the frontend user interface to the backend logic and database.",
    technologies: ["HTML", "CSS", "JavaScript", "Python (Flask/Pandas)", "MySQL", "Gemini API"],
    githubLink: "https://github.com/swadhin-in",
    liveLink: "#",
  },
  {
    title: "Network Intrusion Detection System (IDS)",
    description: "A cybersecurity project developed during my CodeAlpha internship. This system monitors network traffic in real-time to detect and alert on potential security threats or vulnerabilities.",
    technologies: ["Python", "Cybersecurity"],
    githubLink: "https://github.com/swadhin-in",
  },
  {
    title: "Open Source (Hacktoberfest 2025)",
    description: "Actively participated in Hacktoberfest 2025, a global event promoting open source contributions. I successfully had 6 out of 6 code contributions accepted, helping to improve various open-source projects.",
    technologies: ["Git", "GitHub"],
    githubLink: "https://github.com/swadhin-in",
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm font-medium mb-2">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.githubLink && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github /> GitHub
                    </Link>
                  </Button>
                )}
                {project.liveLink && (
                  <Button asChild variant="ghost" size="sm">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
