import React from 'react';
import { Bot, Code } from 'lucide-react';

const promptText = `You are an expert AI developer specialized in building production-ready Telegram bots using Node.js.

Build a bot from this request:
"Build me a Telegram bot that tracks expenses for multiple users, stores data in Supabase, and has commands: /add, /summary, and /reset."

Deliver:
- index.js entry file using node-telegram-bot-api
- commands/ folder with modular handlers
- utils/ for Supabase client and helpers
- .env.example with TELEGRAM_TOKEN and SUPABASE keys
- Full README with setup + deployment steps`;

export default function PromptBlock() {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(promptText);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <section id="prompt" className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-2 text-white/80">
          <Bot className="h-5 w-5" />
          <h2 className="text-2xl font-semibold sm:text-3xl">The Ultimate Prompt</h2>
        </div>
        <p className="mt-2 max-w-2xl text-white/70">
          Paste this into your favorite AI to generate a complete, production-grade Telegram bot.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/60 p-4">
          <pre className="max-h-[360px] overflow-auto rounded-xl bg-gradient-to-b from-white/5 to-white/0 p-4 text-sm leading-relaxed text-white/90">
{promptText}
          </pre>
          <div className="mt-4 flex justify-end">
            <button
              onClick={copyToClipboard}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white/90 transition hover:bg-white/10"
            >
              <Code className="h-4 w-4" /> Copy prompt
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
