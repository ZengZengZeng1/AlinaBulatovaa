
import React from 'react';
import { EXPERTISE } from '../constants';

const ExpertiseSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-10">
      <div className="pill border-neon text-neon inline-flex items-center gap-2 text-xs font-bold mb-16 uppercase tracking-widest">
          ✦ Области экспертизы
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EXPERTISE.map((area, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[40px] hover:border-neon/50 transition-colors">
            <h3 className="font-brutal text-3xl mb-8 leading-none text-neon">{area.category}</h3>
            <ul className="space-y-4">
              {area.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white/60">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
