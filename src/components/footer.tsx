import { Code } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Swadhin Ghosh</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {currentYear} Swadhin Ghosh. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://linkedin.com/in/swadhin-ind" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
            LinkedIn
          </Link>
          <Link href="https://github.com/swadhin-in" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
