"use client";

import * as React from "react";
import {
  useTheme as useNextTheme,
  type UseThemeProps as NextUseThemeProps,
} from "next-themes";

export const THEME_MODES = ["light", "dark", "system"] as const;

export type ThemeMode = (typeof THEME_MODES)[number];
export type ResolvedThemeMode = Exclude<ThemeMode, "system">;

type SetTheme = (theme: ThemeMode) => void;

export type AppUseTheme = Omit<
  NextUseThemeProps,
  | "setTheme"
  | "theme"
  | "resolvedTheme"
  | "systemTheme"
  | "forcedTheme"
  | "themes"
> & {
  setTheme: SetTheme;
  theme?: ThemeMode;
  resolvedTheme?: ResolvedThemeMode;
  systemTheme?: ResolvedThemeMode;
  forcedTheme?: ThemeMode;
  themes: ThemeMode[];
};

const isThemeMode = (value: string | undefined): value is ThemeMode =>
  value !== undefined && (THEME_MODES as readonly string[]).includes(value);

const toThemeMode = (value: string | undefined): ThemeMode | undefined =>
  isThemeMode(value) ? value : undefined;

const toResolvedThemeMode = (
  value: string | undefined,
): ResolvedThemeMode | undefined =>
  value === "light" || value === "dark" ? value : undefined;

export function useTheme(): AppUseTheme {
  const {
    setTheme,
    theme,
    resolvedTheme,
    systemTheme,
    forcedTheme,
    themes,
    ...rest
  } = useNextTheme();

  const typedSetTheme = React.useCallback<SetTheme>(
    (nextTheme) => {
      setTheme(nextTheme);
    },
    [setTheme],
  );

  return {
    ...rest,
    setTheme: typedSetTheme,
    theme: toThemeMode(theme),
    resolvedTheme: toResolvedThemeMode(resolvedTheme),
    systemTheme: toResolvedThemeMode(systemTheme),
    forcedTheme: toThemeMode(forcedTheme),
    themes: themes.filter((nextTheme): nextTheme is ThemeMode =>
      isThemeMode(nextTheme),
    ),
  };
}
