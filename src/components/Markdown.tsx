import type { ReactNode } from "react";

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
            <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
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
