import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWorks from "../components/SelectedWorks";
import Explorations from "../components/Explorations";
import Trustpilot from "../components/Trustpilot";
import ContactFooter from "../components/ContactFooter";

// module-scoped: survives remounts when navigating back to "/" within the
// SPA, resets only on a full page reload — so the intro only plays once
let hasShownLoadingScreen = false;

export default function Index() {
  const [isLoading, setIsLoading] = useState(!hasShownLoadingScreen);

  function handleLoadingComplete() {
    hasShownLoadingScreen = true;
    setIsLoading(false);
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <Navbar />
      <Hero />
      <SelectedWorks />
      <Explorations />
      <Trustpilot />
      <ContactFooter />
    </>
  );
}
