import type { StaticImageData } from "next/image";

import FigmaLogo from "@/assets/icons/figma-logo.svg";
import NextLogo from "@/assets/icons/nextjs-logo.svg";
import ReactLogo from "@/assets/icons/react-logo.svg";
import TailwindLogo from "@/assets/icons/tailwindcss-logo.svg";
import TypeScriptLogo from "@/assets/icons/typescript-logo.svg";
import VercelLogo from "@/assets/icons/vercel-logo.svg";

export type Tech = {
  name: string;
  logo: StaticImageData;
};

export const techStack: readonly Tech[] = [
  { name: "React", logo: ReactLogo },
  { name: "Next.js", logo: NextLogo },
  { name: "Tailwind CSS", logo: TailwindLogo },
  { name: "TypeScript", logo: TypeScriptLogo },
  { name: "Vercel", logo: VercelLogo },
  { name: "Figma", logo: FigmaLogo },
];
