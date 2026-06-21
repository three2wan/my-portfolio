import type { ReactNode } from "react";

const HREF_RE = /\]\(([^)]+)\)/;

function getListItemIcon(item: string): ReactNode {
  const href = item.match(HREF_RE)?.[1] ?? "";
  if (href.startsWith("mailto:"))
    return (
      <p className="w-3.5 h-3.5 shrink-0 mt-[0.2em]">
        <svg
          className="w-3.5 h-3.5 shrink-0 mt-[0.2em]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16v12H4V6Zm0 1 8 6 8-6"
          />
        </svg>
      </p>
    );
  if (href.includes("linkedin.com"))
    return (
      <p className="w-3.5 h-3.5 shrink-0 mt-[0.2em]">
        <svg
          className="w-3.5 h-3.5 shrink-0 mt-[0.2em]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
        </svg>
      </p>
    );
  if (href.includes("github.com"))
    return (
      <p>
        <svg
          className="w-3.5 h-3.5 shrink-0 mt-[0.2em]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
        </svg>
      </p>
    );
  if (href.endsWith(".pdf"))
    return (
      <p>
        <svg
          className="w-3.5 h-3.5 shrink-0 mt-[0.2em]"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1v5h5M8 13h8M8 17h8M8 9h2"
          />
        </svg>
      </p>
    );
  return null;
}

const INLINE_RE = /\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)/g;

function parseInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let token = 0;
  let match: RegExpExecArray | null;

  INLINE_RE.lastIndex = 0;
  while ((match = INLINE_RE.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const key = `${keyPrefix}-${token++}`;

    if (match[1] !== undefined) {
      nodes.push(
        <strong key={key} className="font-semibold text-zinc-50">
          {match[1]}
        </strong>,
      );
    } else if (match[2] !== undefined) {
      nodes.push(
        <code
          key={key}
          className="rounded bg-zinc-700/60 px-1.5 py-0.5 font-mono text-[0.82em] text-indigo-200"
        >
          {match[2]}
        </code>,
      );
    } else {
      const href = match[4];
      const external = /^https?:/i.test(href);
      nodes.push(
        <a
          key={key}
          href={href}
          className="text-indigo-400 underline decoration-indigo-400/40 underline-offset-2 transition-colors hover:text-indigo-300"
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {match[3]}
        </a>,
      );
    }
    lastIndex = INLINE_RE.lastIndex;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export default function Markdown({ content }: { content: string }) {
  const lines = content.split("\n");
  const blocks: ReactNode[] = [];
  let listItems: string[] = [];
  let key = 0;

  const flushList = () => {
    if (listItems.length === 0) return;
    const items = listItems;
    listItems = [];
    const listKey = key++;
    blocks.push(
      <ul key={`ul-${listKey}`} className="my-1.5 space-y-1.5">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-2.5">
            {getListItemIcon(item) ?? (
              <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
            )}
            <span className="flex-1">
              {parseInline(item, `li-${listKey}-${idx}`)}
            </span>
          </li>
        ))}
      </ul>,
    );
  };

  for (const line of lines) {
    if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
      continue;
    }
    flushList();
    if (line.trim() === "") continue;
    const pKey = key++;
    blocks.push(
      <p key={`p-${pKey}`} className="leading-relaxed">
        {parseInline(line, `p-${pKey}`)}
      </p>,
    );
  }
  flushList();

  return (
    <div className="space-y-2 text-[0.95rem] leading-relaxed text-zinc-200">
      {blocks}
    </div>
  );
}
