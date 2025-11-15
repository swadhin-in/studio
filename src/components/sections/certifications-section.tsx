import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  { name: "Open Source Contribution - Hacktoberfest 2025", date: "Nov 2025" },
  { name: "Google AI Essentials - Coursera", date: "Aug 2025" },
  { name: "Introduction to Cybersecurity - Cisco", date: "May 2025" },
  { name: "Build a website using Wordpress - Coursera", date: "Apr 2025" },
  { name: "Full stack Web Development - Wayspire", date: "Jun 2024" },
  { name: "AI/ML for Geo Data Analysis - ISRO's IIRS", date: "Aug 2024" },
];

export function CertificationsSection() {
  const sortedCerts = certifications.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="certifications" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Certifications & Learning
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCerts.map((cert) => (
            <Card key={cert.name} className="bg-card hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full mt-1">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
