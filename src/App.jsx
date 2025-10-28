import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Steps from './components/Steps';
import PromptBlock from './components/PromptBlock';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <Hero />
      <Features />
      <Steps />
      <PromptBlock />
    </div>
  );
}

export default App;
