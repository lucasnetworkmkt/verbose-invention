import React from 'react';
import { Reveal } from './ui/Reveal';
import { CheckCircle2 } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    "Disciplina funcional (funciona sem motivação)",
    "Fim da procrastinação crônica",
    "Alta produtividade com menos esforço",
    "Evolução física e aumento de energia",
    "Clareza total do que fazer todos os dias",
    "Mentalidade resistente à pressão",
    "Controle e inteligência financeira",
    "Confiança inabalável no processo"
  ];

  return (
    <section className="py-24 px-4 bg-brand-black">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-snug py-2">
              QUEM VOCÊ SERÁ EM 40 DIAS?
            </h2>
            <p className="text-gray-400">
              Ao final do Código, você não será o mesmo. A evolução é inevitável para quem executa.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="flex items-start gap-4 p-4 border-b border-brand-slate/50">
                <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
                <span className="text-lg text-gray-200 font-light">{benefit}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};