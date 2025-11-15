import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">
          Education
        </h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-lg font-headline">Bachelor of Technology</CardTitle>
                  <p className="text-sm text-muted-foreground">Computer Science & Engineering (2023–2027)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">College of Engineering and Management, Kolaghat</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
               <div className="flex items-center gap-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <div>
                  <CardTitle className="text-lg font-headline">High School & 10th Standard</CardTitle>
                  <p className="text-sm text-muted-foreground">PCM (2020-2023)</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="font-semibold">Guskara P.P Institution</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
