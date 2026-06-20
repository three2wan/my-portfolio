import { useCallback, useEffect, useRef, useState } from "react";
import type { Message } from "../types";
import { matchIntent } from "../lib/matchIntent";
import { INITIAL_CHIPS, WELCOME_MESSAGE } from "../data/responses";

let idCounter = 0;
function nextId(): string {
  idCounter += 1;
  return `m${idCounter}`;
}

const THINKING_MS = 700;

export function useChat() {
  const [messages, setMessages] = useState<Message[]>(() => [
    { id: nextId(), role: "bot", type: "text", content: WELCOME_MESSAGE },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [chips, setChips] = useState<string[]>(INITIAL_CHIPS);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const send = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isTyping) return;

      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "user", type: "text", content: trimmed },
      ]);
      setChips([]);
      setIsTyping(true);

      const intent = matchIntent(trimmed);
      timeoutRef.current = window.setTimeout(() => {
        const botMessage: Message = intent.getData
          ? {
              id: nextId(),
              role: "bot",
              type: "experience",
              intro: "Here's my career timeline:",
              jobs: intent.getData(),
            }
          : {
              id: nextId(),
              role: "bot",
              type: "text",
              content: intent.getResponse(),
            };

        setMessages((prev) => [...prev, botMessage]);
        setChips(intent.followUps);
        setIsTyping(false);
      }, THINKING_MS);
    },
    [isTyping],
  );

  return { messages, isTyping, chips, send };
}
