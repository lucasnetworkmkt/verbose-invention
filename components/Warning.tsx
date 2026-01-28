import React from 'react';
import { Reveal } from './ui/Reveal';
import { AlertTriangle } from 'lucide-react';

export const Warning: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-brand-black">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="border border-brand-red/30 bg-gradient-to-r from-brand-red/5 to-transparent p-6 md:p-8 rounded-sm relative">
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-red shadow-[0_0_15px_#E50914]" />
             
             <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                <div className="shrink-0">
                  <AlertTriangle className="w-8 h-8 text-brand-red drop-shadow-[0_0_8px_rgba(229,9,20,0.5)]" />
                </div>
                <div>
                  <h3 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">
                    Atenção
                  </h3>
                  <div className="text-white text-lg md:text-xl font-medium leading-relaxed space-y-4">
                    <p>
                      Tudo isso não é um curso comum. É um sistema prático para quem quer sair da estagnação e assumir o controle da própria vida.
                    </p>
                    <p>
                      O Código da Evolução vai te levar para longe da zona de conforto.
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};