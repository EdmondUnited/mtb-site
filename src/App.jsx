import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import ContactCTASection from "./components/ContactCTASection";
import FAQSection from "./components/FAQSection";
import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import PracticeInfoSection from "./components/PracticeInfoSection";
import siteContent from "./data/siteContent";
import LeagueInfoSection from "./components/LeagueInfoSection";
import NicaProgramsSection from "./components/NicaProgramsSection";
import NicaRacingPage from "./pages/NicaRacingPage";
import GritPage from "./pages/GritPage";
import TtcPage from "./pages/TtcPage";
import NicaAdventurePage from "./pages/NicaAdventurePage";
import ProgramLayout from "./pages/ProgramLayout";

function HomePage() {
  return (
    <div>
      <HeaderNav teamName={siteContent.meta.teamName} links={siteContent.nav} />
      <main>
        <HeroSection hero={siteContent.hero} location={siteContent.meta.location} />
        <AboutSection about={siteContent.about} />
        <LeagueInfoSection league={siteContent.league} />
        <NicaProgramsSection programs={siteContent.programs} />
        <PracticeInfoSection practice={siteContent.practice} />
        {/* <CoachesSection coaches={siteContent.coaches} /> */}
        <FAQSection faq={siteContent.faq} />
        <ContactCTASection contact={siteContent.contact} />
      </main>
    </div>
  );
}

function ProgramNotFoundPage() {
  return (
    <>
      <h1>Program Not Found</h1>
      <p>The requested program page does not exist.</p>
    </>
  );
}

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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/programs" element={<ProgramLayout />}>
        <Route path="nica-racing" element={<NicaRacingPage />} />
        <Route path="grit" element={<GritPage />} />
        <Route path="ttc" element={<TtcPage />} />
        <Route path="nica-adventure" element={<NicaAdventurePage />} />
        <Route path="*" element={<ProgramNotFoundPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
