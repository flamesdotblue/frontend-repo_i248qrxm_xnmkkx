import React from 'react';
import { Layers, Send, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: 'Describe your bot',
    desc: 'Example: “Expense tracker with /add, /summary, /reset using Supabase.”',
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Get full codebase',
    desc: 'Entry point, commands, utils, env example, and logging pre-wired. Paste-ready.',
  },
  {
    icon: <Send className="h-5 w-5" />,
    title: 'Connect & deploy',
    desc: 'Create token with BotFather, set env var, run npm start, push to Render/Railway.',
  },
];

export default function Steps() {
  return (
    <section className="py-14" id="steps">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">How it works</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6"
            >
              <div className="flex items-center gap-3 text-white">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/20 text-orange-400">
                  {s.icon}
                </div>
                <h3 className="font-medium">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
