import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './Button';
import { Layers, Laptop, ChevronLeft, ChevronRight, Map, Target, Timer, BarChart2, Mic, AlertTriangle } from 'lucide-react';

export const Materials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const images = [
    "https://i.ibb.co/rGcWNdcY/Captura-de-tela-2026-01-26-110842.png",
    "https://i.ibb.co/7dZcSHPW/Captura-de-tela-2026-01-26-110932.png",
    "https://i.ibb.co/LX9HRGrp/Captura-de-tela-2026-01-26-111133.png",
    "https://i.ibb.co/jv47HKrb/Captura-de-tela-2026-01-26-112509.png"
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    // Configura o autoplay para 3 segundos
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000) as unknown as number;

    return () => {
      resetTimeout();
    };
  }, [currentSlide, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const protocols = [
    {
      title: "Protocolo Anti-Procrastinação Brutal",
      desc: "Quebra definitiva do ciclo de adiamento, autossabotagem e fuga do desconforto. Ensina como agir mesmo sem vontade."
    },
    {
      title: "Protocolo de Disciplina Inquebrável",
      desc: "Criação de disciplina funcional que não depende de motivação. Rotinas simples que funcionam até nos dias difíceis."
    },
    {
      title: "Protocolo de Clareza e Direção",
      desc: "Elimine confusão mental e saiba exatamente o que fazer todos os dias, sem travamento ou excesso de decisões."
    },
    {
      title: "Protocolo de Metas Evolutivas",
      desc: "Transforma ideias soltas em objetivos executáveis, alinhados à sua identidade e rotina real."
    },
    {
      title: "Protocolo de Construção de Hábitos de Elite",
      desc: "Criação de bons hábitos e eliminação dos sabotadores sem depender de força de vontade infinita."
    },
    {
      title: "Protocolo de Energia Física e Corpo Funcional",
      desc: "Estratégias simples para aumentar energia diária, melhorar disposição e sustentar alta performance."
    },
    {
      title: "Protocolo de Mentalidade Forte e Blindada",
      desc: "Preparação mental para lidar com pressão, desconforto, rotina e desafios sem desistir."
    },
    {
      title: "Protocolo de Inteligência Financeira Funcional",
      desc: "Base prática para controle financeiro, consciência e tomada de decisões mais inteligentes."
    },
    {
      title: "Protocolo de Entrada Prática no Digital",
      desc: "Caminhos reais para gerar renda extra sem promessas irreais ou atalhos ilusórios."
    },
    {
      title: "Protocolo de Aceleração com IA",
      desc: "Uso estratégico de IAs gratuitas para economizar tempo, executar mais rápido e aumentar produtividade."
    }
  ];

  return (
    <section className="py-24 px-4 bg-brand-slate/5 border-y border-brand-slate relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <Reveal>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Layers className="w-6 h-6 text-brand-red" />
              <span className="text-brand-red font-bold uppercase tracking-widest text-sm">Estrutura Completa</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              O SISTEMA DO CÓDIGO DA EVOLUÇÃO
            </h2>
            <p className="text-xl text-gray-200 font-medium mb-6">
              Um conjunto de protocolos práticos, criados para atacar cada ponto da estagnação e gerar evolução real em 40 dias.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              O Código da Evolução é composto por múltiplos protocolos estratégicos.
              Cada protocolo atua em uma área específica da sua vida.
              Nada é aleatório. Nada é genérico. Tudo tem um propósito claro.
            </p>
          </div>
        </Reveal>

        {/* Protocols Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 mb-16">
          {protocols.map((protocol, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-sm bg-brand-red shrink-0 group-hover:bg-brand-gold transition-colors duration-300 shadow-[0_0_10px_rgba(229,9,20,0.5)]"></div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-brand-gray-100 transition-colors">
                      {protocol.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed border-l border-brand-slate/50 pl-4">
                      {protocol.desc}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* APP SLIDER / DEMO */}
        <Reveal>
           <div className="mb-16">
              <div className="text-center mb-8">
                 <div className="inline-flex items-center gap-2 bg-brand-black border border-brand-slate/50 px-4 py-1.5 rounded-full mb-4">
                    <Laptop className="w-4 h-4 text-brand-gold" />
                    <span className="text-xs text-gray-300 uppercase tracking-widest font-bold">Plataforma Exclusiva</span>
                 </div>
                 <h3 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight">E O MAIOR BÔNUS DO SISTEMA:</h3>
                 <p className="text-lg md:text-xl text-gray-300 font-medium">Veja algumas funções do Web App por dentro</p>
              </div>

              <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden border border-brand-slate shadow-[0_0_50px_rgba(229,9,20,0.1)] bg-black">
                 {/* Browser Chrome / Window Header */}
                 <div className="bg-[#1a1a1a] border-b border-brand-slate/30 p-3 flex items-center gap-3 relative z-10">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="bg-black/50 px-3 py-1 rounded text-[10px] text-gray-500 font-mono w-full max-w-[200px] text-center h-6">
                    </div>
                 </div>
                 
                 {/* Slider Container */}
                 <div className="aspect-video bg-gray-900 relative group overflow-hidden">
                    
                    {/* Images */}
                    {images.map((img, index) => (
                      <div 
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                         <img 
                            src={img} 
                            alt={`Demonstração da plataforma tela ${index + 1}`}
                            className="w-full h-full object-cover object-top"
                         />
                      </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button 
                      onClick={prevSlide}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-brand-red hover:scale-110 transition-all cursor-pointer border border-white/10"
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <button 
                      onClick={nextSlide}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-brand-red hover:scale-110 transition-all cursor-pointer border border-white/10"
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slide Indicators (Dots) */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentSlide ? 'bg-brand-red w-6' : 'bg-white/50 hover:bg-white'
                          }`}
                          aria-label={`Ir para slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Overlay Gradient at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10"></div>
                 </div>
              </div>

           </div>
        </Reveal>

        {/* WEB APP FEATURES SECTION */}
        <Reveal>
          <div className="mt-24 mb-20 max-w-5xl mx-auto">
            <div className="text-center mb-12">
               <h3 className="text-2xl md:text-4xl font-black text-white mb-3 uppercase tracking-tight">
                 Tudo isso funciona dentro de um sistema único
               </h3>
               <p className="text-brand-gold font-medium text-lg tracking-wide uppercase">
                 Não é teoria. É execução guiada.
               </p>
               <p className="text-gray-400 mt-2 text-sm md:text-base font-light">
                 Veja o que você tem acesso dentro do app:
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-[#0f1115] border border-brand-slate/30 p-5 rounded-2xl hover:border-brand-gold/20 transition-all duration-300 flex flex-col h-full">
                <div className="bg-brand-slate/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4 border border-brand-slate/20">
                  <Map className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-lg font-bold text-white mb-4">Desafio de 40 dias em 3 níveis</h4>
                <ul className="space-y-3 text-sm text-gray-400 mb-4 flex-1">
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Iniciante, Intermediário e Avançado</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Os dias desbloqueiam em tempo real, como um calendário</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Não é possível pular etapas</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>O próximo nível só libera após concluir o anterior</span>
                   </li>
                </ul>
                
                {/* Visual Progress Feedback */}
                <div className="mt-auto pt-4 border-t border-brand-slate/20">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Nível 1</span>
                    <span className="text-brand-gold">Desbloqueando...</span>
                  </div>
                  <div className="h-1.5 w-full bg-brand-slate/30 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-red to-brand-gold w-[60%] animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#0f1115] border border-brand-slate/30 p-5 rounded-2xl hover:border-brand-gold/20 transition-all duration-300">
                <div className="bg-brand-slate/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4 border border-brand-slate/20">
                  <Target className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-lg font-bold text-white mb-4">Organização total</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Criação e acompanhamento de metas</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Definição de rotinas diárias</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Micro tarefas para execução prática</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Clareza diária do que precisa ser feito</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Aba para guardar anotações em texto ou arquivos</span>
                   </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="bg-[#0f1115] border border-brand-slate/30 p-5 rounded-2xl hover:border-brand-gold/20 transition-all duration-300 flex flex-col">
                <div className="bg-brand-slate/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4 border border-brand-slate/20">
                  <Timer className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-lg font-bold text-white mb-4">Cronômetro de execução</h4>
                <ul className="space-y-3 text-sm text-gray-400 mb-4 flex-1">
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Defina uma tarefa</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Ative o cronômetro</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Execute com foco total</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Sem distrações, sem desculpas</span>
                   </li>
                </ul>
                
                {/* Visual Timer Feedback */}
                <div className="mt-auto bg-black/40 border border-brand-slate/30 rounded px-3 py-2 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-red animate-ping"></div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider">Foco Ativo</span>
                   </div>
                   <span className="font-mono text-brand-gold text-lg tracking-widest">00:45:12</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#0f1115] border border-brand-slate/30 p-5 rounded-2xl hover:border-brand-gold/20 transition-all duration-300 lg:col-span-1 flex flex-col">
                <div className="bg-brand-slate/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4 border border-brand-slate/20">
                  <BarChart2 className="w-6 h-6 text-brand-gold" />
                </div>
                <h4 className="text-lg font-bold text-white mb-4">Visual de evolução</h4>
                <ul className="space-y-3 text-sm text-gray-400 flex-1">
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Histórico de execução</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Consistência ao longo do tempo</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Visão clara do seu progresso</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-brand-red mt-1">●</span> 
                      <span>Evolução baseada em dados, não motivação</span>
                   </li>
                </ul>
                
                 {/* Visual Graph Feedback */}
                 <div className="mt-6 flex items-end gap-1 h-12 w-full opacity-50">
                    <div className="bg-brand-red w-full rounded-t-sm h-[30%] animate-pulse" style={{animationDelay: '0ms'}}></div>
                    <div className="bg-brand-red w-full rounded-t-sm h-[50%] animate-pulse" style={{animationDelay: '100ms'}}></div>
                    <div className="bg-brand-red w-full rounded-t-sm h-[40%] animate-pulse" style={{animationDelay: '200ms'}}></div>
                    <div className="bg-brand-red w-full rounded-t-sm h-[70%] animate-pulse" style={{animationDelay: '300ms'}}></div>
                    <div className="bg-brand-gold w-full rounded-t-sm h-[90%] shadow-[0_0_10px_rgba(255,215,0,0.3)]"></div>
                 </div>
              </div>

              {/* Card 5 - Mentor */}
              <div className="bg-[#0f1115] border border-brand-slate/30 p-5 rounded-2xl hover:border-brand-gold/20 transition-all duration-300 lg:col-span-2 relative overflow-hidden group">
                 <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none transition-opacity group-hover:opacity-10">
                    <Mic className="w-64 h-64 text-brand-gold" />
                 </div>
                 <div className="relative z-10">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="shrink-0">
                             <div className="bg-brand-slate/10 w-12 h-12 flex items-center justify-center rounded-lg border border-brand-slate/20">
                                <Mic className="w-6 h-6 text-brand-gold" />
                              </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-white mb-4">Mentor por voz (diferencial do sistema)</h4>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-brand-red mt-1">●</span> 
                                        <span>Você fala com o mentor por voz</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-brand-red mt-1">●</span> 
                                        <span>Ele responde em tempo real</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-brand-red mt-1">●</span> 
                                        <span>Ajuda em decisões, foco, rotina, execução e clareza</span>
                                    </li>
                                </ul>
                                <ul className="space-y-3 text-sm text-gray-400">
                                     <li className="flex items-start gap-2">
                                        <span className="text-brand-red mt-1">●</span> 
                                        <span>Guia prático baseado no Código da Evolução</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6 pt-4 border-t border-brand-slate/20">
                                <p className="text-xs text-brand-gold/80 italic font-medium">
                                   O uso do mentor por voz possui limite diário para manter foco e qualidade.
                                </p>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Warning Box */}
            <div className="mt-8 bg-[#0f1115] border border-brand-red/10 rounded-xl p-4 flex items-start gap-3 max-w-3xl mx-auto">
               <AlertTriangle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
               <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  <span className="text-brand-red font-bold">AVISO DE DESENVOLVIMENTO:</span> O Web App está em evolução constante.
                  Algumas funções, como login em múltiplos dispositivos, estão sendo aprimoradas para versões futuras.
               </p>
            </div>
          </div>
        </Reveal>

        {/* Value Anchor Block */}
        <Reveal>
          <div className="bg-gradient-to-r from-brand-slate/20 to-transparent border border-brand-gold/20 p-8 rounded-sm text-center mb-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10">
                <Layers className="w-32 h-32 text-brand-gold" />
             </div>
             
             <p className="text-gray-300 mb-2 text-lg">
               Cada protocolo poderia ser vendido separadamente.
             </p>
             <p className="text-gray-400 mb-6 text-sm">
               Somando o valor individual, o acesso ultrapassa <span className="line-through decoration-brand-red decoration-2">R$300,00</span>.
             </p>
             <p className="text-xl md:text-2xl font-bold text-white leading-relaxed">
               Hoje, todos estão inclusos no Código da Evolução por <span className="text-brand-gold text-3xl md:text-4xl mx-2">R$0</span> como bônus para a sua evolução.
             </p>
          </div>
        </Reveal>

        {/* Closing & CTA */}
        <Reveal>
          <div className="text-center space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-white max-w-2xl mx-auto">
              O Código da Evolução não entrega motivação temporária.
              <br className="hidden md:block" />
              <span className="text-brand-red"> Entrega estrutura. </span>
              E estrutura muda comportamentos.
            </h3>
            
            <div className="flex flex-col items-center gap-6">
              <Button className="md:px-12 md:py-6 md:text-lg">
                QUERO ACESSO AOS PROTOCOLOS
              </Button>
              <p className="text-sm text-gray-500 font-medium tracking-wide">
                O Código da Evolução já mudou <span className="text-white font-bold">+de 7 mil vidas</span>. Venha mudar a sua também.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};