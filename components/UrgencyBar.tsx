import React from 'react';

export const UrgencyBar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full bg-brand-red z-50 py-2 px-4 shadow-lg text-center">
      <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-bold text-white uppercase tracking-wide">
        <span>OFERTA LIMITADA - RESTAM POUCAS UNIDADES. A OFERTA ESTÁ ACABANDO!</span>
      </div>
    </div>
  );
};