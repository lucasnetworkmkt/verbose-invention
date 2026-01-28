import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  role?: string;
}

export interface MaterialItem {
  title: string;
  description: string[];
  isBonus?: boolean;
}

export interface BenefitItem {
  title: string;
  icon: React.ReactNode;
}