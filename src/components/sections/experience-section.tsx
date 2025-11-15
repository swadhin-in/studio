import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Google - Student Ambassador",
    company: "Google",
    period: "September 2025 – Present",
    description: [
      "Plan and host hands-on workshops for fellow students on Google technologies, with a strong focus on AI tools like Gemini.",
      "Act as a campus leader to build and nurture a tech-focused community, inspiring peers to explore Google's products.",
      "Serve as the primary liaison between Google and my university, helping Google's teams understand our campus culture and needs.",
      "Collect and share student feedback to help improve Google's products and programs.",
    ],
  },
  {
    role: "Cyber Security Intern",
    company: "CodeAlpha",
    period: "August 2025 – Present",
    description: [
      "Gained practical experience in cybersecurity by developing projects from the ground up.",
      "Successfully built a Basic Network Sniffer to capture and analyze network traffic.",
      "Developed a Network Intrusion Detection System (IDS) to monitor networks for malicious activity.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Professional Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 w-0.5 h-full bg-border -translate-x-1/2" aria-hidden="true"></div>
          <div className="space-y-12 relative">
            {experiences.map((exp, index) => (
              <div key={exp.role} className="relative pl-12">
                 <div className="absolute left-4 top-1 -translate-x-1/2 bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm ring-8 ring-background">
                   {index + 1}
                 </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle className="text-xl font-headline">{exp.role}</CardTitle>
                    <CardDescription className="font-semibold">{exp.company} | <span className="font-normal text-muted-foreground">{exp.period}</span></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-outside space-y-2 pl-5 text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
