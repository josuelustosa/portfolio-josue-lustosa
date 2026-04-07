import { ThemeToggle } from "./components/ui/ThemeToggle"
import { metadata } from "./layout"

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 p-8 sm:p-12">
      <ThemeToggle />
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {String(metadata.title ?? "")}
          </h1>
          <p className="text-muted">{String(metadata.description ?? "")}</p>
        </div>
      </header>
    </main>
  )
}
