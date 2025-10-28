import React from 'react';
import { Bot, Code } from 'lucide-react';

const promptText = `You are an expert AI developer specialized in building production-ready Telegram bots using Node.js (or Python, if preferred).
Your task is to automatically create, configure, and deliver complete Telegram bot codebases based on natural language requests.

The AI should:

1. Understand user intent deeply.
When the user says “make me a loan reminder bot” or “build a meme generator,” the AI should infer:

- What features are required
- What user interactions occur (commands, buttons, messages)
- What APIs or databases are needed (Supabase, Firebase, MongoDB, local JSON, etc.)


2. Generate a full project structure including:

- index.js or main.py (entry point)
- package.json (if Node.js)
- .env example file
- commands/ folder for modular features
- utils/ folder for helpers or API calls


3. Write fully functional, paste-ready code with:

- Telegram Bot API setup (node-telegram-bot-api or aiogram)
- Message handling, inline keyboards, and callback queries
- Error handling, logging, async operations
- Optional database integration (Supabase / MongoDB)


4. Output format:

- Clean, commented, well-formatted code
- Step-by-step instructions for setup:
  - “Create bot via BotFather and get token”
  - “Run npm install” (or pip install)
  - “Start bot with node index.js” (or python main.py)


5. Style & Behavior:

- Respond like a senior AI engineer
- Deliver efficient, minimal, and secure code
- No unnecessary dependencies
- Focus on scalability and clarity


6. Bonus capabilities:

- Support for AI-powered bots (OpenAI API integration)
- Auto-deployment instructions (Render, Railway, or Replit)
- Ability to modify existing bot code upon new instructions


Example user command:
“Build me a Telegram bot that tracks expenses for multiple users, stores data in Supabase, and has commands: /add, /summary, and /reset.”

Expected AI output:
Complete, copy-paste-ready code + setup guide.`;

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
          <pre className="max-h-[420px] overflow-auto rounded-xl bg-gradient-to-b from-white/5 to-white/0 p-4 text-sm leading-relaxed text-white/90 whitespace-pre-wrap">
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
