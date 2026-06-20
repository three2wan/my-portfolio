import { useEffect } from "react";
import type { ExperienceJob } from "../types";
import { useTypewriter } from "../hooks/useTypewriter";
import { useCardReveal } from "../hooks/useCardReveal";

interface ExperienceCardsProps {
  intro: string;
  jobs: ExperienceJob[];
  animate: boolean;
  onUpdate?: () => void;
}

export default function ExperienceCards({
  intro,
  jobs,
  animate,
  onUpdate,
}: ExperienceCardsProps) {
  const { displayed: introDisplayed, done: introDone } = useTypewriter(
    intro,
    animate,
  );
  const { visibleCount } = useCardReveal(jobs.length, animate, introDone);

  useEffect(() => {
    onUpdate?.();
  }, [introDisplayed, visibleCount, onUpdate]);

  return (
    <div>
      <p className="text-zinc-200 text-[0.95rem] leading-relaxed">
        {introDisplayed}
      </p>

      <div className="relative mt-4 space-y-4">
        {jobs.map((job, i) => {
          const visible = i < visibleCount;
          return (
            <div
              key={i}
              className="relative pl-6 transition-all duration-500 ease-out"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {i < jobs.length - 1 && (
                <div className="absolute left-[7px] top-[25px] bottom-[-41px] w-px bg-zinc-600/60" />
              )}
              <div className="absolute left-0 top-[18px] h-3.5 w-3.5 rounded-full bg-indigo-500 ring-2 ring-zinc-800" />

              <div className="rounded-xl bg-zinc-700/50 px-4 py-3 ring-1 ring-zinc-600/40">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-semibold text-zinc-50">{job.role}</span>
                  <span className="rounded-full bg-indigo-900/60 px-2.5 py-0.5 text-xs font-medium text-indigo-300 ring-1 ring-indigo-500/30">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-zinc-400">{job.company}</p>
                <ul className="mt-2 space-y-1">
                  {job.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="text-sm text-zinc-300 leading-relaxed pl-3 relative before:absolute before:left-0 before:content-['•'] before:text-zinc-500"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
