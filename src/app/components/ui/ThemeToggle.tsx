"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import { THEME_MODES, useTheme, type ThemeMode } from "@/app/hooks/useTheme"

const THEME_LABELS: Record<ThemeMode, string> = {
  light: "Claro",
  dark: "Escuro",
  system: "Sistema",
}

const subscribe = () => () => {}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // false during SSR and hydration, true on the client afterwards
  const mounted = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  )

  const currentTheme = mounted ? (theme ?? "system") : "system"

  return (
    <div className="inline-flex items-center max-w-min gap-1 rounded-full border border-border bg-surface p-1 shadow-sm">
      {THEME_MODES.map((mode) => {
        const isActive = currentTheme === mode

        return (
          <button
            key={mode}
            type="button"
            onClick={() => setTheme(mode)}
            aria-pressed={isActive}
            aria-label={`Alterar tema para ${THEME_LABELS[mode]}`}
            className={cn(
              "rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
              isActive
                ? "bg-accent text-black"
                : "text-muted hover:bg-elevated hover:text-foreground",
            )}
          >
            {THEME_LABELS[mode]}
          </button>
        )
      })}
    </div>
  )
}
