
import React from 'react';
import { EXTRA_EXPERIENCE } from '../constants';

const ExtraSection: React.FC = () => {
  // Helper to inject links into specific text strings
  const renderContent = (text: string) => {
    let content: React.ReactNode = text;

    // Handle "Сончи Уточкиной"
    const targetSonchy = "Сончи Уточкиной";
    if (text.includes(targetSonchy)) {
      const parts = text.split(targetSonchy);
      content = (
        <>
          {parts[0]}
          <a 
            href="https://t.me/x_sonchy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block underline decoration-neon decoration-[4px] md:decoration-[8px] underline-offset-[2px] md:underline-offset-[4px] hover:scale-105 transition-all duration-300 cursor-alias"
          >
            {targetSonchy}
          </a>
          {parts[1]}
        </>
      );
    }

    // Handle "UGC-платформу"
    const targetUGC = "UGC-платформу";
    if (text.includes(targetUGC)) {
      const parts = text.split(targetUGC);
      content = (
        <>
          {parts[0]}
          <a 
            href="https://ugccreator.ru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block underline decoration-neon decoration-[4px] md:decoration-[8px] underline-offset-[2px] md:underline-offset-[4px] hover:scale-105 transition-all duration-300 cursor-alias"
          >
            {targetUGC}
          </a>
          {parts[1]}
        </>
      );
    }

    return content;
  };

  return (
    <section className="py-32 px-6 md:px-10 bg-white rounded-[60px] mx-4 my-20 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="pill border-black/10 text-black/40 inline-flex items-center gap-2 text-xs font-bold mb-20 uppercase tracking-widest">
            ✦ Дополнительный опыт (наведи, чтобы увидеть)
        </div>
        
        <div className="space-y-8 md:space-y-12">
          {EXTRA_EXPERIENCE.map((item, idx) => (
            <div key={idx} className="group flex gap-6 md:gap-10 items-start cursor-default">
              {/* Star stays visible but animates on group hover */}
              <span className="text-neon text-3xl md:text-5xl mt-1 select-none transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-125 shrink-0">
                ✦
              </span>
              
              {/* Text merges with background (white on white) and reveals on hover */}
              <p className="font-brutal text-2xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tighter text-white group-hover:text-black transition-colors duration-500 ease-in-out">
                {renderContent(item)}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle decorative text in background */}
      <div className="absolute -bottom-10 -right-10 font-brutal text-[20vw] text-black/[0.02] select-none pointer-events-none">
        EXTRA
      </div>
    </section>
  );
};

export default ExtraSection;
