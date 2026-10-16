const name = "Josué Lustosa";
const role = "Desenvolvedor Front-end";

export const site = {
  name,
  role,
  title: `${name} | ${role}`,
  description:
    "Site pessoal (portfólio) moderno e profissional de Josué Lustosa — Desenvolvedor Front-end. Criado com React, Next.js (App Router), Tailwind CSS e muito café.",
} as const;

export const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/josue-lustosa/",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/josuelustosa/",
  },
] as const;

export type SocialLink = (typeof socialLinks)[number];
