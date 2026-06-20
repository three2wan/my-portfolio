import { BotAvatar } from "./ChatMessage";

export default function TypingIndicator() {
  return (
    <div className="flex gap-3">
      <BotAvatar size="sm" />
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-md bg-zinc-800 px-4 py-4 ring-1 ring-zinc-700/50">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="h-2 w-2 animate-bounce rounded-full bg-zinc-500"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
