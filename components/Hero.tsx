
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Section } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={Section.HERO} className="pt-24 md:pt-32 px-6 md:px-10 pb-10">
      <div className="hero-card p-6 md:p-12 min-h-[85vh] flex flex-col justify-between relative overflow-hidden">
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {PERSONAL_INFO.tags.map(tag => (
              <span key={tag} className="pill border-black text-dark font-bold text-[10px] uppercase tracking-wider bg-black/5 hover:bg-black/10">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="font-brutal text-[14vw] md:text-[10vw] leading-[0.85] mb-6">
            Lead <br/> Creative <br/> Producer
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="w-full md:w-1/3">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#CEFF00" strokeWidth="3">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
              <div className="w-full aspect-square md:aspect-[4/5] bg-dark/10 rounded-[40px] overflow-hidden">
                <img 
                  src={PERSONAL_INFO.heroPhoto} 
                  className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-100 hover:scale-105"
                  alt="Alina Bulatova"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 md:pb-6">
            <p className="text-2xl md:text-3xl font-bold leading-tight mb-8">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-bold opacity-60 uppercase tracking-widest">
              <span>RELIZ</span> • <span>Borscht</span> • <span>Maree</span> • <span>VK</span> • <span>Yandex</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
