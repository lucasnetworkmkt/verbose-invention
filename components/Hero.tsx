import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 bg-brand-black overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-slate opacity-20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <Reveal>
          <div className="inline-block border border-brand-slate bg-brand-gray/30 backdrop-blur-sm px-4 py-1 rounded-full mb-8">
            <span className="text-brand-gold text-xs md:text-sm font-bold tracking-widest uppercase">
              Protocolo de 40 Dias
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-snug mb-6 tracking-tight py-2">
            DISCIPLINA NÃO É UM DOM. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-white to-gray-500">
              É UMA CONSTRUÇÃO.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Siga o <strong className="text-white">Código</strong> para eliminar a procrastinação e recuperar o controle da sua vida. Sem promessas milagrosas. Apenas método.
          </p>
        </Reveal>

        <Reveal delay={0.8}>
          <div className="flex flex-col items-center gap-4">
            <Button className="md:text-lg px-10 py-5">
              QUERO ATIVAR O CÓDIGO
            </Button>
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              Acesso Imediato • Vitalício • Garantia Blindada
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};