
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgendaSection from './components/AgendaSection';
import StatsSection from './components/StatsSection';
import ExpertiseSection from './components/ExpertiseSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ExtraSection from './components/ExtraSection';
import AIChatAssistant from './components/AIChatAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-neon selection:text-dark">
      {/* Decorative lines for brutalist feel */}
      <div className="fixed left-6 top-0 bottom-0 w-[1px] bg-white/5 z-0" />
      <div className="fixed right-6 top-0 bottom-0 w-[1px] bg-white/5 z-0" />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <AgendaSection />
        <StatsSection />
        <ExpertiseSection />
        <ProjectsSection />
        <SkillsSection />
        <ExtraSection />
      </main>
      
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default App;
