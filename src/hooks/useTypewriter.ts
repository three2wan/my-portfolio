import { useEffect, useState } from "react";

const WORD_INTERVAL_MS = 30;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useTypewriter(text: string, enabled = true) {
  const instant = !enabled || prefersReducedMotion();
  const [displayed, setDisplayed] = useState(instant ? text : "");
  const [done, setDone] = useState(instant);

  useEffect(() => {
    if (instant) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    const tokens = text.match(/\S+\s*/g) ?? [];
    setDisplayed("");
    setDone(false);

    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setDisplayed(tokens.slice(0, index).join(""));
      if (index >= tokens.length) {
        window.clearInterval(id);
        setDone(true);
      }
    }, WORD_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [text, instant]);

  return { displayed, done };
}
