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
    <div className="min-h-screen py-18 px-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Title Section */}
      <h1 className="text-4xl md:text-5xl mb-4 md:mb-12 text-center font-bold tracking-tighter text-foreground">
        Em breve no ar...
      </h1>

      {/* Technologies Section */}
      <article className="w-full max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
        <p className="text-center text-base md:text-lg text-foreground/80 mb-4 font-medium">
          Meu Portfólio está sendo desenvolvido com as seguintes tecnologias:
        </p>

        <div className="relative group">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 transform hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group/tech relative flex items-center justify-center w-18 h-18 rounded-lg bg-surface hover:bg-elevated border border-elevated hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/25">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    className="w-10 h-10 opacity-80 group-hover/tech:opacity-100 transition-opacity"
                  />
                  {/* Tooltip */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-sm font-medium rounded-md opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Social Links Section */}
      <section className="w-full max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
        <p className="text-center text-base md:text-lg text-foreground/80 mb-4 font-medium">
          Enquanto as coisas não ficam prontas por aqui, fique por dentro das
          minhas atualizações e projetos:
        </p>

        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {socialLinks.map((social, index) => {
            const Icon = SOCIAL_ICONS[social.id];

            return (
              <div
                key={social.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 transform hover:scale-105 transition-transform"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <div className="group/social relative flex items-center justify-center w-18 h-18 rounded-lg bg-surface hover:bg-elevated border border-elevated hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/25">
                    <div className="opacity-80 group-hover/social:opacity-100 transition-opacity">
                      <Icon />
                    </div>
                    {/* Tooltip */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-sm font-medium rounded-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
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
      <footer className="w-full mt-auto pt-8 border-t border-border animate-in fade-in duration-1000 delay-500">
        <p className="text-center text-sm sm:text-sm text-muted font-light tracking-wide">
          &copy; 2026 | Desenvolvido por{" "}
          <span className="font-bold text-accent">{site.name}</span>. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}
