import { useEffect, useState } from "react";

const CARD_INTERVAL_MS = 450;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function useCardReveal(
  totalCards: number,
  animate: boolean,
  enabled: boolean,
): { visibleCount: number; done: boolean } {
  // Non-animated messages (old history) or reduced-motion: show all immediately.
  // Animated but waiting (intro not done yet): start hidden at 0.
  const [visibleCount, setVisibleCount] = useState(
    !animate || prefersReducedMotion() ? totalCards : 0,
  );

  useEffect(() => {
    if (!animate || prefersReducedMotion()) {
      setVisibleCount(totalCards);
      return;
    }
    if (!enabled) return;

    let count = 0;
    const id = window.setInterval(() => {
      count += 1;
      setVisibleCount(count);
      if (count >= totalCards) window.clearInterval(id);
    }, CARD_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [totalCards, animate, enabled]);

  return { visibleCount, done: visibleCount >= totalCards };
}
