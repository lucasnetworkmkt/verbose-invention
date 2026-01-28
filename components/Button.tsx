import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  fullWidth = false, 
  className = "",
  href = "https://pay.cakto.com.br/332ru8r_700328"
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center 
        bg-brand-red text-white font-bold uppercase tracking-wider
        py-4 px-8 rounded-full transition-all duration-300
        hover:bg-red-700 hover:shadow-[0_0_20px_rgba(229,9,20,0.4)]
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className}
      `}
    >
      <span className="mr-2">{children}</span>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
};