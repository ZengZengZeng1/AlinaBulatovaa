
import React from 'react';
import { Section } from '../types';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 flex flex-wrap items-center justify-between gap-4">
      <div className="flex gap-3">
        <button onClick={() => scrollTo('hero')} className="pill text-neon font-bold text-xs">
          Alina Bulatova
        </button>
        <button className="pill text-neon flex items-center gap-2 text-xs font-bold">
          <div className="w-4 h-4 rounded-full bg-neon flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          </div>
          Portfolio
        </button>
      </div>
      
      <div className="flex-1 h-[1px] bg-white/20 hidden lg:block mx-10 relative">
         <div className="absolute right-0 -top-2 flex gap-2">
            <span className="text-neon text-lg">✦</span>
            <span className="text-white/40 text-lg">✦</span>
            <span className="text-neon text-lg">✦</span>
         </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="text-neon font-brutal text-xl">2026</div>
      </div>
    </nav>
  );
};

export default Navbar;
