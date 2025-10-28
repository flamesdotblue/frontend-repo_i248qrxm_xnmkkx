import React from 'react';
import { Code, Shield, Database, Terminal, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-5 w-5" />,
    title: 'Clean, modular code',
    desc: 'Well-structured command handlers, utilities, and error boundaries. Paste-ready with clear comments.',
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: 'Optional persistence',
    desc: 'Bring your own DB: Supabase, MongoDB, or JSON. The agent wires models and queries for you.',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: 'Production defaults',
    desc: 'Input validation, logging, and environment-based config. No unnecessary dependencies.',
  },
  {
    icon: <Terminal className="h-5 w-5" />,
    title: 'Full CLI steps',
    desc: 'From BotFather token to npm install and deploy. Copy, run, ship.',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: 'AI-ready',
    desc: 'Optional OpenAI integration for smart replies, classification, or generation workflows.',
  },
];

export default function Features() {
  return (
    <section className="py-14" id="features">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Ship-quality bots, instantly</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          This agent turns a sentence into a complete Telegram bot project with sensible defaults and room to scale.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3 text-white">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/20 text-orange-400">
                  {f.icon}
                </div>
                <h3 className="font-medium">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
