import React, { useState, useEffect, useRef } from 'react';
import { Reveal } from './ui/Reveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  // Array de imagens dos depoimentos.
  // Terceira imagem removida conforme solicitado.
  const testimonials = [
    "https://i.ibb.co/93w7qhK6/Captura-de-tela-2026-01-26-175136.png",
    "https://i.ibb.co/v6p47pKk/Captura-de-tela-2026-01-26-174837.png"
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 4000) as unknown as number;

    return () => {
      resetTimeout();
    };
  }, [currentSlide, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 px-4 bg-brand-black overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-red opacity-5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 max-w-2xl mx-auto">
            ELES DECIDIRAM ATIVAR O CÓDIGO... <br/>
            <span className="text-gray-400 font-normal text-lg">E a vida deles mudou completamente.</span>
          </h2>
        </Reveal>

        <Reveal width="100%" overflow="visible">
          {/* Container do Carrossel - Largura controlada para simular tela de celular e manter legibilidade */}
          <div className="relative max-w-[320px] md:max-w-[350px] mx-auto mt-4 group">
            
            {/* Frame da Imagem */}
            <div className="relative aspect-[9/16] bg-[#0f1115] rounded-2xl overflow-hidden border border-brand-slate/50 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
               
               {testimonials.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    {/* Alterado para object-contain para garantir que a imagem inteira apareça sem cortes */}
                    <img 
                      src={img} 
                      alt={`Depoimento aluno ${index + 1}`}
                      className="w-full h-full object-contain bg-black"
                    />
                    
                    {/* Gradiente na base para leitura dos dots */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  </div>
               ))}

               {/* Navigation Arrows (Dentro do card para economizar espaço lateral no mobile) */}
               <button 
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 hover:bg-brand-red transition-all cursor-pointer opacity-0 group-hover:opacity-100 md:opacity-100"
                  aria-label="Depoimento anterior"
               >
                  <ChevronLeft className="w-5 h-5" />
               </button>
               
               <button 
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 hover:bg-brand-red transition-all cursor-pointer opacity-0 group-hover:opacity-100 md:opacity-100"
                  aria-label="Próximo depoimento"
               >
                  <ChevronRight className="w-5 h-5" />
               </button>

               {/* Dots Indicators */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentSlide ? 'bg-brand-red w-6' : 'bg-white/40 w-1.5 hover:bg-white'
                      }`}
                      aria-label={`Ir para depoimento ${idx + 1}`}
                    />
                  ))}
               </div>
            </div>
            
            {/* Visual Decorative border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-brand-red/20 to-brand-slate/20 rounded-[1.1rem] -z-10 blur-sm"></div>
          </div>

          <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest font-medium">
            Arraste ou clique para ver mais histórias
          </p>
        </Reveal>
      </div>
    </section>
  );
};