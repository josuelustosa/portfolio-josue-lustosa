import Image from "next/image";
import ReactLogo from "../../../assets/icons/react-logo.svg";
import NextLogo from "../../../assets/icons/nextjs-logo.svg";
import TailwindLogo from "../../../assets/icons/tailwindcss-logo.svg";
import TypeScriptLogo from "../../../assets/icons/typescript-logo.svg";
import VercelLogo from "../../../assets/icons/vercel-logo.svg";
import FigmaLogo from "../../../assets/icons/figma-logo.svg";

const LinkedInSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    fill="var(--accent)"
    viewBox="0 0 256 256"
  >
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
  </svg>
);

const GitHubSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
    fill="var(--accent)"
    viewBox="0 0 256 256"
  >
    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
  </svg>
);

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
            {[
              { src: ReactLogo, alt: "React", delay: "0ms" },
              { src: NextLogo, alt: "Next.js", delay: "100ms" },
              { src: TailwindLogo, alt: "Tailwind CSS", delay: "200ms" },
              { src: TypeScriptLogo, alt: "TypeScript", delay: "300ms" },
              { src: VercelLogo, alt: "Vercel", delay: "400ms" },
              { src: FigmaLogo, alt: "Figma", delay: "500ms" },
            ].map((tech, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4 duration-700 transform hover:scale-105 transition-transform"
                style={{ animationDelay: tech.delay }}
              >
                <div className="group/tech relative flex items-center justify-center w-18 h-18 rounded-lg bg-surface hover:bg-elevated border border-elevated hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/25">
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    className="w-10 h-10 opacity-80 group-hover/tech:opacity-100 transition-opacity"
                  />
                  {/* Tooltip */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-sm font-medium rounded-md opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {tech.alt}
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
          {[
            {
              svg: <LinkedInSvg />,
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/josue-lustosa/",
              delay: "600ms",
            },
            {
              svg: <GitHubSvg />,
              label: "GitHub",
              href: "https://github.com/josuelustosa/",
              delay: "700ms",
            },
          ].map((social, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 transform hover:scale-105 transition-transform"
              style={{ animationDelay: social.delay }}
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <div className="group/social relative flex items-center justify-center w-18 h-18 rounded-lg bg-surface hover:bg-elevated border border-elevated hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/25">
                  <div className="opacity-80 group-hover/social:opacity-100 transition-opacity">
                    {social.svg}
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-sm font-medium rounded-md opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {social.label}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto pt-8 border-t border-border animate-in fade-in duration-1000 delay-500">
        <p className="text-center text-sm sm:text-sm text-muted font-light tracking-wide">
          &copy; 2026 | Desenvolvido por{" "}
          <span className="font-bold text-accent">Josué Lustosa</span>. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}
