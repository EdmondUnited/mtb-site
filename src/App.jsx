import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import CoachesSection from "./components/CoachesSection";
import ContactCTASection from "./components/ContactCTASection";
import FAQSection from "./components/FAQSection";
import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import PracticeInfoSection from "./components/PracticeInfoSection";
import RiderNeedsSection from "./components/RiderNeedsSection";
import WhoCanJoinSection from "./components/WhoCanJoinSection";
import siteContent from "./data/siteContent";

function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", siteContent.theme.primary);
    root.style.setProperty("--color-accent-red", siteContent.theme.accentRed);
    root.style.setProperty("--color-accent-blue", siteContent.theme.accentBlue);
    root.style.setProperty("--color-accent-gold", siteContent.theme.accentGold);
    root.style.setProperty("--color-white", siteContent.theme.white);
    root.style.setProperty("--color-text", siteContent.theme.text);
    root.style.setProperty("--color-surface", siteContent.theme.surface);
    document.title = siteContent.meta.pageTitle;
  }, []);

  return (
    <div className="app">
      <HeaderNav teamName={siteContent.meta.teamName} links={siteContent.nav} />
      <main>
        <HeroSection hero={siteContent.hero} location={siteContent.meta.location} />
        <AboutSection about={siteContent.about} />
        <PracticeInfoSection practice={siteContent.practice} />
        <WhoCanJoinSection join={siteContent.join} />
        <RiderNeedsSection needs={siteContent.needs} />
        <CoachesSection coaches={siteContent.coaches} />
        <FAQSection faq={siteContent.faq} />
        <ContactCTASection contact={siteContent.contact} />
      </main>
    </div>
  );
}

export default App;
