import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="home" className="py-24 sm:py-32 md:py-40 bg-card">
      <div className="container mx-auto text-center px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter">
            Swadhin Ghosh
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary font-medium font-headline">
            Computer Science Student | Full Stack Developer | AI & Cybersecurity Enthusiast
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground md:text-lg">
            I'm a passionate B.Tech student focused on building practical solutions with web technologies, AI, and secure systems. Currently, I'm helping build the tech community as a Google - Student Ambassador and honing my security skills as a Cyber Security Intern at CodeAlpha.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#projects">View My Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="mt-10 flex justify-center gap-6">
            <Link href="https://linkedin.com/in/swadhin-ind" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="https://github.com/swadhin-in" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
