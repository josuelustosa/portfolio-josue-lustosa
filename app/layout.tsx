import type { Metadata } from "next";
import { Jura } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./components/ui/ThemeProvider";

const juraFont = Jura({
  variable: "--font-jura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josué Lustosa | Desenvolvedor Front-end",
  description: "Site pessoal (portfólio) moderno e profissional de Josué Lustosa — Desenvolvedor Front-end. Criado com React, Next.js (App Router), Tailwind CSS e muito café.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${juraFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
