import type { ComponentType } from "react";
import Image from "next/image";

import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { site, socialLinks, type SocialLink } from "@/content/site";
import { techStack } from "@/content/tech-stack";

const SOCIAL_ICONS: Record<SocialLink["id"], ComponentType> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

export function ComingSoon() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 py-18">
      {/* Title Section */}
      <h1 className="mb-4 text-center text-4xl font-bold tracking-tighter text-foreground md:mb-12 md:text-5xl">
        Em breve no ar...
      </h1>

      {/* Technologies Section */}
      <article className="mb-12 w-full max-w-2xl animate-in delay-200 duration-1000 fade-in slide-in-from-bottom-4">
        <p className="mb-4 text-center text-base font-medium text-foreground/80 md:text-lg">
          Meu Portfólio está sendo desenvolvido com as seguintes tecnologias:
        </p>

        <div className="group relative">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="transform animate-in transition-transform duration-700 fade-in slide-in-from-bottom-4 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group/tech relative flex h-18 w-18 cursor-pointer items-center justify-center rounded-lg border border-elevated bg-surface transition-all duration-300 hover:border-accent hover:bg-elevated hover:shadow-lg hover:shadow-accent/25">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    className="h-10 w-10 opacity-80 transition-opacity group-hover/tech:opacity-100"
                  />
                  {/* Tooltip */}
                  <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-md bg-accent px-3 py-1 text-sm font-medium whitespace-nowrap text-background opacity-0 transition-opacity duration-300 group-hover/tech:opacity-100">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Social Links Section */}
      <section className="mb-12 w-full max-w-2xl animate-in delay-400 duration-1000 fade-in slide-in-from-bottom-4">
        <p className="mb-4 text-center text-base font-medium text-foreground/80 md:text-lg">
          Enquanto as coisas não ficam prontas por aqui, fique por dentro das
          minhas atualizações e projetos:
        </p>

        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {socialLinks.map((social, index) => {
            const Icon = SOCIAL_ICONS[social.id];

            return (
              <div
                key={social.id}
                className="transform animate-in transition-transform duration-700 fade-in slide-in-from-bottom-4 hover:scale-105"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <div className="group/social relative flex h-18 w-18 cursor-pointer items-center justify-center rounded-lg border border-elevated bg-surface transition-all duration-300 hover:border-accent hover:bg-elevated hover:shadow-lg hover:shadow-accent/25">
                    <div className="opacity-80 transition-opacity group-hover/social:opacity-100">
                      <Icon />
                    </div>
                    {/* Tooltip */}
                    <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-md bg-accent px-3 py-1 text-sm font-medium whitespace-nowrap text-background opacity-0 transition-opacity duration-300 group-hover/social:opacity-100">
                      {social.label}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto w-full animate-in border-t border-border pt-8 delay-500 duration-1000 fade-in">
        <p className="text-center text-sm font-light tracking-wide text-muted sm:text-sm">
          &copy; 2026 | Desenvolvido por{" "}
          <span className="font-bold text-accent">{site.name}</span>. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}
