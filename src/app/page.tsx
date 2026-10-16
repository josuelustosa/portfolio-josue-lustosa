import { ComingSoon } from "./components/layout/ComingSoon";
import { LandingPage } from "./components/layout/LandingPage";

export default function Home() {
  // Set to "true" only for website development or maintenance.
  const showComingSoon = process.env.COMING_SOON_MODE === "true";

  return showComingSoon ? <ComingSoon /> : <LandingPage />;
}
