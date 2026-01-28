import React from 'react';
import { Reveal } from './ui/Reveal';
import { Button } from './Button';
import { Play } from 'lucide-react';

export const VSL: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-brand-black relative z-20 -mt-10 md:-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal width="100%" overflow="visible">
          
          <div className="relative group">
            {/* Efeito de Glow atrás do vídeo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-slate rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Container do Vídeo (Aspect Ratio 16:9) */}
            <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-brand-slate bg-black shadow-2xl">
              
              {/* 
                  IMPORTANTE: Substitua o 'src' abaixo pelo link do seu vídeo.
                  Exemplo YouTube: https://www.youtube.com/embed/SEU_ID_DO_VIDEO
                  Exemplo Vimeo/Panda: O link 'embed' fornecido pela plataforma.
              */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?mute=1" 
                title="Vídeo de Vendas Código da Evolução"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* Overlay caso não tenha vídeo (remover se usar autoplay) */}
              <div className="pointer-events-none absolute inset-0 hidden items-center justify-center bg-black/20">
                  <div className="bg-brand-red/90 p-4 rounded-full shadow-[0_0_30px_rgba(229,9,20,0.6)]">
                    <Play className="w-8 h-8 text-white fill-current" />
                  </div>
              </div>
            </div>

            {/* Texto abaixo do vídeo */}
            <div className="mt-8 flex flex-col items-center gap-4">
               <p className="text-gray-400 text-sm uppercase tracking-widest animate-pulse">
                 <span className="text-brand-red">●</span> Assista antes que saia do ar
               </p>
               
               <Button className="px-12 py-5 text-lg md:text-xl shadow-[0_0_30px_rgba(229,9,20,0.4)] hover:shadow-[0_0_50px_rgba(229,9,20,0.6)]">
                  QUERO ATIVAR O CÓDIGO AGORA
               </Button>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
};