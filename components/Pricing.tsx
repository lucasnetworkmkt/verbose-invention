import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const items = [
    "Protocolo Anti-Procrastinação Brutal",
    "Protocolo de Disciplina Inquebrável",
    "Protocolo de Clareza e Direção",
    "Protocolo de Metas Evolutivas",
    "Protocolo de Construção de Hábitos de Elite",
    "Protocolo de Energia Física e Corpo Funcional",
    "Protocolo de Mentalidade Forte e Blindada",
    "Protocolo de Inteligência Financeira Funcional",
    "Protocolo de Entrada Prática no Digital",
    "Protocolo de Aceleração com IA",
    "Acesso ao Web App Oficial do Código da Evolução",
    "Desafio de 40 Dias (3 Níveis Progressivos)",
    "Mentor por Voz (Acesso Integrado ao Sistema)",
    "Garantia blindada 21 dias"
  ];

  return (
    <section className="py-24 px-4 bg-brand-black relative overflow-hidden">
      {/* Background Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-red opacity-10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-xl mx-auto relative z-10">
        <Reveal overflow="visible">
          <div className="bg-[#0A0A0A] border-2 border-brand-red shadow-[0_0_50px_rgba(229,9,20,0.25)] p-8 md:p-12 rounded-sm relative">
            
            {/* Tag */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-red text-white text-sm font-bold px-6 py-2 uppercase tracking-widest shadow-lg transform hover:scale-105 transition-transform whitespace-nowrap z-20">
              Oferta Única
            </div>

            <div className="text-center mb-6 border-b border-brand-red/20 pb-6 mt-4">
              <p className="text-gray-500 line-through text-lg mb-2">De R$ 159,00</p>
              <div className="flex items-center justify-center gap-2 text-white">
                <span className="text-2xl font-light text-gray-300">Por</span>
                <span className="text-7xl font-black tracking-tighter text-white drop-shadow-lg">27,90</span>
              </div>
              <p className="text-brand-red font-semibold text-sm mt-4 uppercase tracking-wide">Pagamento único • Acesso vitalício</p>
            </div>

            {/* Texto de Urgência Adicionado */}
            <div className="text-center mb-6 space-y-1">
               <p className="text-gray-300 text-sm font-medium leading-relaxed">
                 Pela primeira e última vez o Código da evolução está por este preço.
               </p>
               <p className="text-white font-bold text-sm uppercase tracking-tight">
                 Aproveite, não deixe sua evolução de lado mais uma vez!
               </p>
            </div>

            <Button fullWidth className="text-lg py-5 shadow-[0_0_30px_rgba(229,9,20,0.4)] hover:shadow-[0_0_50px_rgba(229,9,20,0.6)] border border-white/10 mb-10">
              COMEÇAR MINHA EVOLUÇÃO
            </Button>

            <ul className="space-y-4 mb-8 text-left">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-200">
                  <div className="bg-brand-red/20 p-1.5 rounded-full border border-brand-red/30 shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-brand-red" />
                  </div>
                  <span className="text-sm md:text-base font-medium leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-center text-xs text-gray-500 mt-6 border-t border-brand-red/10 pt-4">
              Ambiente 100% seguro. Download imediato após aprovação.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};