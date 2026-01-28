import React from 'react';
import { Reveal } from './ui/Reveal';
import { Anchor, CloudRain, Flame } from 'lucide-react';

export const Concept: React.FC = () => {
  const pillars = [
    {
      icon: <CloudRain className="w-8 h-8 text-brand-white" />,
      title: "Limpeza (Noé)",
      desc: "Noé enfrentou o dilúvio por 40 dias e 40 noites. Isso marcou uma limpeza e recomeço na Terra."
    },
    {
      icon: <Flame className="w-8 h-8 text-brand-red" />,
      title: "Direção (Moisés)",
      desc: "Moisés permaneceu no Monte Sinai por 40 dias e 40 noites. Lá recebeu a sabedoria que mudaria a história do seu povo."
    },
    {
      icon: <Anchor className="w-8 h-8 text-brand-gold" />,
      title: "Domínio (Jesus)",
      desc: "Jesus jejuou por 40 dias e 40 noites no deserto. Antes de iniciar sua missão, ele precisou vencer a si mesmo e as tentações."
    }
  ];

  return (
    <section className="py-24 px-4 bg-brand-gray relative border-t border-brand-slate">
      <div className="max-w-6xl mx-auto">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Reveal>
            <p className="text-xl text-gray-300 font-medium mb-4 leading-relaxed">
              O Código da Evolução vai muito além de hábitos soltos ou truques rasos de produtividade.
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-snug py-2">
              É um processo de <span className="text-brand-red">transformação brutal</span>.
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Um ciclo criado pra quebrar padrões antigos, forjar disciplina, clareza mental e reconstruir sua identidade a partir da ação.
            </p>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent mb-10"></div>
            
            <p className="text-xl md:text-2xl font-semibold text-white max-w-3xl mx-auto leading-relaxed">
              Não é coincidência que, ao longo da história, <span className="text-brand-gold">40 dias</span> sempre representaram provação, preparo e renascimento.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                POR QUE 40 DIAS?
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                A mudança profunda não acontece do dia para a noite, mas também não precisa levar anos. O número 40 não é aleatório. É um ciclo de transformação presente na história da humanidade.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Depende da intensidade do foco. Quando há um plano claro, execução diária e eliminação de distrações, <span className="text-white font-semibold">40 dias fazem o que anos de tentativa falharam em fazer.</span>
              </p>
            </div>
            <div className="grid gap-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="bg-brand-black p-6 border border-brand-slate rounded-sm flex items-start gap-4 hover:border-brand-white/20 transition-colors">
                  <div className="p-3 bg-brand-slate/30 rounded-full shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">{pillar.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};