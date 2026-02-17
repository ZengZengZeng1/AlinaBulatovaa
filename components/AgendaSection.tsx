
import React from 'react';
import { SERVICES } from '../constants';

const AgendaSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="flex flex-col md:flex-row gap-10 justify-between items-start mb-16">
        <div className="pill border-neon text-neon flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
           </svg>
           Чем я занимаюсь
        </div>
        <h2 className="font-brutal text-4xl md:text-6xl max-w-2xl leading-none">
          Как Lead Producer, я <span className="text-neon">управляю процессами</span> и создаю результат.
        </h2>
      </div>

      <div className="space-y-2">
        {SERVICES.map((item, idx) => (
          <div 
            key={idx} 
            className="group py-8 border-b border-white/10 flex items-center transition-all hover:bg-white/5 px-4 rounded-xl"
          >
            <span className="text-xl font-bold w-16 text-neon opacity-60">/0{idx + 1}</span>
            <h3 className="font-brutal text-2xl md:text-4xl flex-1">{item}</h3>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgendaSection;
