import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const avatarImage = PlaceHolderImages.find(img => img.id === 'avatar');

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            {avatarImage && (
              <div className="relative aspect-square rounded-full overflow-hidden shadow-lg mx-auto w-4/5 max-w-sm md:w-full">
                <Image
                  src={avatarImage.imageUrl}
                  alt={avatarImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={avatarImage.imageHint}
                />
              </div>
            )}
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold font-headline mb-6">Hello, I'm Swadhin.</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a second-year B.Tech Computer Science and Engineering student at the College of Engineering and Management, Kolaghat. My journey in tech is driven by a deep curiosity for how things work and a desire to build applications that are both intelligent and secure.
              </p>
              <p>
                My core interests lie at the intersection of Full Stack Web Development, Artificial Intelligence, and Cybersecurity. I am actively applying these interests in two key roles:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>As a <strong>Google - Student Ambassador</strong>, I organize workshops and events to help my peers explore Google's technologies, with a special focus on Generative AI tools like Gemini.</li>
                <li>As a <strong>Cyber Security Intern at CodeAlpha</strong>, I am gaining hands-on experience by building tools like network sniffers and intrusion detection systems.</li>
              </ul>
              <p>
                I am proficient in Data Structures and Algorithms and skilled in project management. I'm always eager to learn, collaborate, and contribute to impactful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
