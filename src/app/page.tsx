import { ComingSoon } from "@/components/coming-soon";
import { Hero } from "@/components/sections/hero";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  // Set to "true" only for website development or maintenance.
  // Read at build time: changing it requires a new build or deploy.
  if (process.env.COMING_SOON_MODE === "true") return <ComingSoon />;

  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
      </main>
    </>
  );
}
