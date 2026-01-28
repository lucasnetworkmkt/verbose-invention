import React from 'react';
import { UrgencyBar } from './components/UrgencyBar';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Benefits } from './components/Benefits';
import { Materials } from './components/Materials';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Warning } from './components/Warning';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-white font-sans selection:bg-brand-red selection:text-white">
      <UrgencyBar />
      <main>
        <Hero />
        <Concept />
        <Benefits />
        <Warning />
        <Materials />
        <Testimonials />
        <Guarantee />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;