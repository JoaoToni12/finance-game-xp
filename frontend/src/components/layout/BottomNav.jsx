import { LayoutDashboard, MessageSquare } from "lucide-react";

export default function BottomNav({ currentPage, onPageChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-black/90 backdrop-blur-xl pb-safe">
      <div className="mx-auto max-w-md px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Botão Dashboard */}
          <button
            onClick={() => onPageChange(0)}
            className={`flex items-center gap-2 transition-all duration-300 ${
              currentPage === 0 ? "text-yellow-500 font-bold" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <LayoutDashboard size={20} strokeWidth={currentPage === 0 ? 2.5 : 2} />
            <span className={`text-sm ${currentPage === 0 ? "block" : "hidden"}`}>Dashboard</span>
          </button>

          {/* Indicadores Centrais (Pontinhos) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onPageChange(0)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentPage === 0
                  ? "w-8 bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                  : "w-2 bg-zinc-700 hover:bg-zinc-600"
              }`}
              aria-label="Ir para Dashboard"
            />
            <button
              onClick={() => onPageChange(1)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentPage === 1
                  ? "w-8 bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                  : "w-2 bg-zinc-700 hover:bg-zinc-600"
              }`}
              aria-label="Ir para Chat"
            />
          </div>

          {/* Botão Chat */}
          <button
            onClick={() => onPageChange(1)}
            className={`flex items-center gap-2 transition-all duration-300 ${
              currentPage === 1 ? "text-yellow-500 font-bold" : "text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <span className={`text-sm ${currentPage === 1 ? "block" : "hidden"}`}>Chat IA</span>
            <MessageSquare size={20} strokeWidth={currentPage === 1 ? 2.5 : 2} />
          </button>
          
        </div>
      </div>
    </nav>
  );
}