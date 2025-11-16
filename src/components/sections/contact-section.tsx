import { ContactForm } from "@/components/contact-form";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Let's Connect and Build Together. I'm always open to discussing new projects, creative ideas, or opportunities to be part of a team.
          </p>
        </div>
        <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-headline">Contact Information</h3>
            <div className="space-y-4">
              <a href="mailto:swadhin0031@gmail.com" className="flex items-start gap-4 group">
                <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">swadhin0031@gmail.com</span>
              </a>
              <a href="tel:+918327412357" className="flex items-start gap-4 group">
                <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground group-hover:text-primary transition-colors">+91 8327412357</span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span className="text-muted-foreground">Purba Bardhhaman, WB, India</span>
              </div>
            </div>
          </div>
          <div>
             <h3 className="text-xl font-bold font-headline mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
