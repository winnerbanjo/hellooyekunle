import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { getPayload } from 'payload';
import config from '@/payload.config';

export const metadata: Metadata = {
  title: "Work and Projects | Oyekunle",
  description: "Explore companies, platforms, websites, creative projects, and digital systems Oyekunle has built or contributed to.",
};

export default async function ProjectsPage() {
  const payload = await getPayload({ config });
  
  const result = await payload.find({
    collection: 'projects',
    limit: 100, // Fetch up to 100 projects for the portfolio
  });

  const projects = result.docs;

  return (
    <main className="max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24">
      <section className="mb-24">
        <FadeIn>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Selected work across technology, business, and creativity.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="max-w-2xl text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-8">
            A selection of companies, platforms, websites, creative projects, and systems I have built, led, managed, or contributed to.
          </p>
        </FadeIn>
      </section>

      {projects.length === 0 ? (
        <FadeIn delay={0.3} className="text-center py-24 text-neutral-400 font-light border-t border-neutral-200/20 dark:border-neutral-800/20">
          Portfolio is currently being updated. Please log into Payload CMS and create projects.
        </FadeIn>
      ) : (
        <section className="flex flex-col gap-24">
          {projects.map((project) => (
            <FadeIn key={project.id} delay={0.1} className="group flex flex-col md:flex-row gap-12 lg:gap-16 items-start border-t border-neutral-200/20 dark:border-neutral-800/20 pt-16">
              <div className="w-full md:w-1/2 aspect-[4/3] bg-neutral-100 dark:bg-neutral-900 rounded-md overflow-hidden relative">
                {project.image && typeof project.image === 'object' && project.image.url ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img 
                    src={project.image.url} 
                    alt={project.image.alt || project.name} 
                    className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="absolute inset-0 bg-neutral-200/50 dark:bg-neutral-800/50 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
                )}
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center min-h-[300px]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">{project.category}</span>
                </div>
                <h2 className="font-serif text-4xl mb-6 group-hover:text-neutral-500 transition-colors">{project.name}</h2>
                <p className="text-base text-neutral-500 leading-relaxed mb-8 whitespace-pre-wrap">
                  {project.description}
                </p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest border-b border-foreground pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-colors w-max">
                    View Live Project <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </section>
      )}
    </main>
  );
}
