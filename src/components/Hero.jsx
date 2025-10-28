import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28 lg:pt-32 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Bot size={14} />
            <span>Vibe Agent • Telegram Bot Builder</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Build production-ready Telegram bots from a single prompt
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            Describe what you want. Get a complete, clean codebase with commands, keyboards, logging, optional database, and deployment steps. Designed for clarity, speed, and scale.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#prompt"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400"
            >
              <Rocket size={18} />
              <span>Use the Ultimate Prompt</span>
            </a>
            <a
              href="#steps"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10"
            >
              <span>How it works</span>
            </a>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
          <Spline
            scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
