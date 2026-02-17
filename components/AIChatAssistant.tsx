
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "I'm Alina's agent. Ask me anything about her work." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    const response = await geminiService.chat(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen ? (
        <div className="w-[350px] h-[500px] bg-black border-2 border-neon rounded-3xl flex flex-col shadow-[0_0_30px_rgba(206,255,0,0.2)] overflow-hidden">
          <div className="p-4 bg-neon text-dark flex justify-between items-center font-bold uppercase tracking-widest text-xs">
            <span>Agent / Bulatova</span>
            <button onClick={() => setIsOpen(false)}>×</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-medium text-sm">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-4 rounded-xl ${m.role === 'user' ? 'bg-white text-dark' : 'border border-neon text-neon'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Message Agent..."
                className="w-full bg-transparent border-b-2 border-neon py-2 text-neon placeholder:text-neon/30 focus:outline-none uppercase text-xs font-bold"
              />
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-neon text-dark rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIChatAssistant;
