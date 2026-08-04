
import React from 'react';
import { CASE_STUDIES } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-10">
      <div className="pill border-neon text-neon inline-flex items-center gap-2 text-xs font-bold mb-16 uppercase tracking-widest">
          ✦ Этапы карьеры
      </div>

      <div className="space-y-32">
        {CASE_STUDIES.map((caseStudy, idx) => {
          const hasPresentations = 'presentations' in caseStudy && caseStudy.presentations && caseStudy.presentations.length > 0;
          return (
          <div key={caseStudy.id} className="space-y-10">
            <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-20 items-center`}>
              {/* Image Frame Column - only shown when there's a single feature image */}
              {caseStudy.imageUrl && (
                <div className="w-full md:w-[35%]">
                  <div className="aspect-[4/3] overflow-hidden rounded-[30px] border border-white/10 relative group bg-white/10 flex items-center justify-center p-6 transition-colors hover:bg-white/15">
                    <img 
                      src={caseStudy.imageUrl} 
                      alt={caseStudy.company} 
                      className="max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/600x400/111/fff?text=${caseStudy.company}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="font-brutal text-2xl text-neon">{caseStudy.company}</div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Content Column - takes full width when there's no feature image */}
              <div className={`w-full space-y-8 ${caseStudy.imageUrl ? 'md:w-[60%]' : ''}`}>
                <div className="inline-block px-4 py-1 bg-neon text-dark font-bold text-[10px] uppercase tracking-widest rounded-full">
                  {caseStudy.role}
                </div>
                <h3 className="font-brutal text-4xl md:text-5xl">{caseStudy.company}</h3>
                
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Бизнес-задача:</h4>
                  <p className="text-xl font-medium leading-snug">{caseStudy.task}</p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Реализация:</h4>
                  <ul className="grid grid-cols-1 gap-3">
                    {caseStudy.realization.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-bold text-white/80">
                        <span className="text-neon">✦</span> {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to action button - only when there's a folder link */}
                {caseStudy.folderUrl && (
                  <div className="pt-4">
                    <a 
                      href={caseStudy.folderUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-8 py-3 border-2 border-neon text-neon font-brutal text-md rounded-full hover:bg-neon hover:text-dark transition-all duration-300 group/btn"
                    >
                      Ознакомиться с кейсами
                      <svg 
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                        className="transform group-hover/btn:translate-x-1 transition-transform"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  </div>
                )}

                <div className="pt-4 flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-neon/30" />
                  <p className="font-bold text-[10px] uppercase tracking-[0.2em] text-neon/60">
                    {caseStudy.period}
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive presentation embeds - clickable, slide-by-slide navigation */}
            {hasPresentations && (
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40">Примеры кейсов:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {caseStudy.presentations!.map((pres, i) => (
                    <div key={i} className="space-y-2">
                      <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <iframe
                          src={pres.url}
                          className="w-full h-full"
                          frameBorder="0"
                          allowFullScreen
                          title={pres.title}
                        />
                      </div>
                      <p className="text-xs font-bold text-white/50 text-center">{pres.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
