import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black py-12 px-4 border-t border-brand-slate/50">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-xl font-bold text-white tracking-widest uppercase">
          SUPORTE:
        </h3>
        <div className="pt-6">
          <a href="mailto:codigodaevolucao.suporte@gmail.com" className="text-brand-gold hover:underline text-sm transition-colors">
            codigodaevolucao.suporte@gmail.com
          </a>
        </div>
        <div className="text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} Código da Evolução. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};