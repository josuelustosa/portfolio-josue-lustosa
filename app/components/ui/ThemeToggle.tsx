"use client"

import * as React from "react"

import { THEME_MODES, useTheme, type ThemeMode } from "@/app/hooks/useTheme"

const THEME_LABELS: Record<ThemeMode, string> = {
  light: "Claro",
  dark: "Escuro",
  system: "Sistema",
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

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
            className={[
              "rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60",
              isActive
                ? "bg-accent text-black"
                : "text-muted hover:bg-elevated hover:text-foreground",
            ].join(" ")}
          >
            {THEME_LABELS[mode]}
          </button>
        )
      })}
    </div>
  )
}
