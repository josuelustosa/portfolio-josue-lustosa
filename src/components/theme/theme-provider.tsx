"use client"

import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps as NextThemesProviderProps,
} from "next-themes"

import type { ThemeMode } from "./use-theme"

export type AppThemeProviderProps = Omit<NextThemesProviderProps, "defaultTheme"> & {
  defaultTheme?: ThemeMode
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  ...props
}: AppThemeProviderProps) {
  return (
    <NextThemesProvider defaultTheme={defaultTheme} {...props}>
      {children}
    </NextThemesProvider>
  )
}
