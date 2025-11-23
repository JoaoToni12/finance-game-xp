import { Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl px-5 py-4">
        <div className="flex items-center justify-between w-full">          <div>
          <h1 className="text-xl font-black text-white tracking-tight flex items-center gap-0.5">
            Gui<span className="text-yellow-500">.IA</span>
          </h1>
          <p className="text-zinc-500 text-[10px] font-medium uppercase tracking-wider">Seu assistente financeiro</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-yellow-500 border-2 border-black"></span>
          </button>
          
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-yellow-500 hover:bg-zinc-800 transition-all shadow-lg">
            <User size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}