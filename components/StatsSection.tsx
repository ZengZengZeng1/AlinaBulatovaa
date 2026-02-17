
import React from 'react';
import { METRICS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-[#0A0A0A]">
       <div className="pill border-neon text-neon inline-flex items-center gap-2 text-xs font-bold mb-16 uppercase tracking-widest">
          ✦ Ключевые показатели
        </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {METRICS.map((stat, idx) => (
          <div key={idx} className="border-l border-white/10 pl-8 py-4">
            <div className="font-brutal text-6xl md:text-8xl text-neon mb-2">{stat.value}</div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
