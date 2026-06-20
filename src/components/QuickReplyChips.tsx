interface QuickReplyChipsProps {
  chips: string[];
  onSelect: (text: string) => void;
  disabled?: boolean;
}

export default function QuickReplyChips({ chips, onSelect, disabled }: QuickReplyChipsProps) {
  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {chips.map((chip) => (
        <button
          key={chip}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(chip)}
          className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3.5 py-1.5 text-sm text-zinc-300 transition-colors hover:border-indigo-500/60 hover:bg-zinc-800 hover:text-zinc-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
