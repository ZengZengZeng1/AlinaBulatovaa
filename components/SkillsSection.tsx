
import React from 'react';
import { SKILLS_LIST } from '../constants';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 border-t border-white/5">
      <div className="pill border-neon text-neon inline-flex items-center gap-2 text-xs font-bold mb-16 uppercase tracking-widest">
          ✦ Стек и инструменты
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="space-y-8">
          <h3 className="font-brutal text-3xl text-white/20">Design & Management</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS_LIST.tools.map(tool => (
              <span key={tool} className="px-6 py-3 border border-white/10 rounded-full font-bold text-sm hover:border-neon transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="font-brutal text-3xl text-neon">AI Expertize</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS_LIST.ai.map(tool => (
              <span key={tool} className="px-6 py-3 bg-neon text-dark rounded-full font-bold text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="font-brutal text-3xl text-white/20">Tech & Bots</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS_LIST.tech.map(tool => (
              <span key={tool} className="px-6 py-3 border border-white/10 rounded-full font-bold text-sm hover:border-neon transition-colors">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
