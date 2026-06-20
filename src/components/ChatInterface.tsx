import { useCallback, useEffect, useRef, useState } from "react";
import type { Message } from "../types";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import QuickReplyChips from "./QuickReplyChips";

interface ChatInterfaceProps {
  messages: Message[];
  isTyping: boolean;
  chips: string[];
  onSend: (text: string) => void;
}

export default function ChatInterface({
  messages,
  isTyping,
  chips,
  onSend,
}: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 160)}px`;
  }, []);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages.length, isTyping, chips, scrollToBottom]);

  const handleSubmit = () => {
    if (!input.trim() || isTyping) return;
    onSend(input);
    setInput("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-3xl flex-col gap-5 px-4 py-6">
          {messages.map((message, index) => {
            const isLast = index === messages.length - 1;
            return (
              <ChatMessage
                key={message.id}
                message={message}
                animate={isLast && message.role === "bot"}
                onUpdate={isLast ? scrollToBottom : undefined}
              />
            );
          })}

          {isTyping && <TypingIndicator />}

          {!isTyping && chips.length > 0 && (
            <div className="pl-11">
              <QuickReplyChips
                chips={chips}
                onSelect={onSend}
                disabled={isTyping}
              />
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-zinc-800 bg-zinc-900/80 backdrop-blur">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <div className="flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-800/70 px-3 py-2 focus-within:border-indigo-500/70">
            <textarea
              ref={textareaRef}
              rows={1}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                resizeTextarea();
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              placeholder="Ask me anything about me..."
              aria-label="Ask me anything about me"
              className="flex-1 resize-none overflow-y-auto bg-transparent text-[0.95rem] leading-relaxed text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!input.trim() || isTyping}
              aria-label="Send message"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-500"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <p className="hidden sm:block text-center text-xs text-zinc-600 mt-5">
            Press{" "}
            <kbd className="bg-zinc-800 border border-zinc-500 px-1 py-0.5 rounded text-xs">
              Enter
            </kbd>{" "}
            to send ·{" "}
            <kbd className="bg-zinc-800 border border-zinc-500 px-1 py-0.5 rounded text-xs">
              Shift+Enter
            </kbd>{" "}
            for newline
          </p>
        </div>
      </div>
    </div>
  );
}
