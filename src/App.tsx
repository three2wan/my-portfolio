import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatInterface from "./components/ChatInterface";
import { useChat } from "./hooks/useChat";

function App() {
  const { messages, isTyping, chips, send } = useChat();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSelect = (question: string) => {
    send(question);
    setDrawerOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-900 text-zinc-100">
      <aside className="hidden w-72 shrink-0 border-r border-zinc-800 md:block">
        <Sidebar onSelect={handleSelect} />
      </aside>

      {drawerOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/60"
            onClick={() => setDrawerOpen(false)}
          />
          <aside className="absolute left-0 top-0 h-full w-72 border-r border-zinc-800 shadow-xl">
            <Sidebar onSelect={handleSelect} />
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-3 border-b border-zinc-800 px-4 py-3 md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-300 hover:bg-zinc-800"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-sm font-medium text-zinc-200">
            AI Portfolio
          </span>
        </header>

        <ChatInterface
          messages={messages}
          isTyping={isTyping}
          chips={chips}
          onSend={send}
        />
      </div>
    </div>
  );
}

export default App;
