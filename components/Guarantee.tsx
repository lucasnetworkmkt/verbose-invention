import React from 'react';
import { Reveal } from './ui/Reveal';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-brand-black to-[#110505]">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="border border-brand-red/30 bg-[#0A0A0A] p-8 md:p-12 text-center relative overflow-hidden shadow-[0_0_30px_rgba(229,9,20,0.15)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-brand-red shadow-[0_0_20px_#E50914]"></div>
            
            <ShieldCheck className="w-16 h-16 text-brand-red mx-auto mb-6 drop-shadow-[0_0_15px_rgba(229,9,20,0.5)]" />
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              GARANTIA BLINDADA DE 21 DIAS
            </h2>
            
            <div className="space-y-4 text-gray-400 mb-8 leading-relaxed text-sm md:text-base">
              <p>
                Eu confio 100% na transformação que o Código da Evolução vai proporcionar na sua vida, então você tem <span className="text-brand-red font-bold">21 dias de garantia</span>.
              </p>
              <p>
                Entrou, analisou o conteúdo e viu que não é pra você? Sem problemas. Basta contatar o suporte que devolvemos 100% do seu valor.
              </p>
              <p className="font-medium text-white">
                Sem perguntas. Sem burocracia. Sem enrolação.
              </p>
              <p>
                Ou você sente que está no caminho certo, ou o seu dinheiro volta para você.
              </p>
              <p>
                Com essa garantia, o risco é zero, e a decisão está totalmente nas suas mãos.
              </p>
            </div>
            
            <div className="text-sm text-brand-red font-bold tracking-wider uppercase border-t border-brand-red/20 pt-6 inline-block">
              Risco Zero • Decisão Sua
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};