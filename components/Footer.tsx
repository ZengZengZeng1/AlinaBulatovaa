
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 md:px-10 bg-neon text-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
        <div className="flex-1">
          <h2 className="font-brutal text-[15vw] md:text-[10vw] mb-10 leading-[0.8] tracking-tighter">
            Contact <br/> Me
          </h2>
          <div className="flex flex-col gap-8">
             <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl md:text-3xl font-brutal hover:underline break-all tracking-tight">
               {PERSONAL_INFO.email}
             </a>
             <div className="flex flex-wrap gap-4">
                <a href={`https://t.me/${PERSONAL_INFO.telegram.replace('@', '')}`} target="_blank" className="pill border-black font-bold text-xs hover:bg-black hover:text-white transition-all">Telegram</a>
                <a href={`https://instagram.com/${PERSONAL_INFO.instagram.replace('@', '')}`} target="_blank" className="pill border-black font-bold text-xs hover:bg-black hover:text-white transition-all">Instagram</a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="pill border-black font-bold text-xs hover:bg-black hover:text-white transition-all">LinkedIn</a>
             </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 flex flex-col justify-end text-right">
           <p className="text-lg font-bold uppercase tracking-tight mb-10 opacity-70">
             Lead Creative Producer <br/> Alina Bulatova — 2026
           </p>
           <div className="font-brutal text-6xl">2026</div>
        </div>
      </div>
      
      <div className="mt-32 pt-10 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 font-bold text-[10px] uppercase tracking-[0.3em]">
        <span>ALINA BULATOVA PORTFOLIO</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
          <span>Status: Available for hire</span>
        </div>
        <span>© 2026 ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};

export default Footer;
