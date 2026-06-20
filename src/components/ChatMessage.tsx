import { useEffect } from "react";
import type { Message } from "../types";
import { useTypewriter } from "../hooks/useTypewriter";
import Markdown from "./Markdown";
import ExperienceCards from "./ExperienceCards";

export function BotAvatar({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <div
      className={`${size === "sm" ? "h-8 w-8" : "h-10 w-10"} rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-purple-300 flex items-center justify-center flex-shrink-0`}
    >
      <span className="text-white text-sm font-bold select-none">SJ</span>
    </div>
  );
}

interface ChatMessageProps {
  message: Message;
  animate?: boolean;
  onUpdate?: () => void;
}

export default function ChatMessage({
  message,
  animate = false,
  onUpdate,
}: ChatMessageProps) {
  const isBot = message.role === "bot";

  // Always call useTypewriter (hooks must not be conditional).
  // For experience messages, pass empty string so it's a no-op.
  const textContent =
    message.type === "text" ? message.content : "";
  const { displayed } = useTypewriter(
    textContent,
    isBot && animate && message.type === "text",
  );

  useEffect(() => {
    if (message.type === "text") onUpdate?.();
  }, [displayed, message.type, onUpdate]);

  if (!isBot) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-indigo-600 px-4 py-2.5 text-[0.95rem] leading-relaxed text-white shadow-sm">
          {message.content}
        </div>
      </div>
    );
  }

  if (message.type === "experience") {
    return (
      <div className="flex gap-3">
        <BotAvatar size="sm" />
        <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-4 py-3 shadow-sm ring-1 ring-zinc-700/50">
          <ExperienceCards
            intro={message.intro}
            jobs={message.jobs}
            animate={animate}
            onUpdate={onUpdate}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <BotAvatar size="sm" />
      <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-zinc-800 px-4 py-3 shadow-sm ring-1 ring-zinc-700/50">
        <Markdown content={displayed} />
      </div>
    </div>
  );
}
