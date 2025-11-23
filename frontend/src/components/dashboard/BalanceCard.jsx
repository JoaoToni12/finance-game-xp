import { Eye, EyeOff, TrendingUp } from "lucide-react";
import { useState } from "react";

export default function BalanceCard() {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-zinc-400 text-sm font-medium mb-1">Saldo Total</p>
          
          <div className="h-10 flex items-center"> {/* Altura fixa evita pulo na tela ao trocar */}
            {isVisible ? (
              <h2 className="text-3xl font-bold text-white tracking-tight">
                R$ 47.850,00
              </h2>
            ) : (
              <h2 className="text-3xl font-bold text-zinc-700 tracking-tight mt-1">
                ••••••••
              </h2>
            )}
          </div>
        </div>
        
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="p-2 rounded-xl text-zinc-500 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label={isVisible ? "Ocultar saldo" : "Mostrar saldo"}
        >
          {isVisible ? (
            <Eye size={22} />
          ) : (
            <EyeOff size={22} />
          )}
        </button>
      </div>
      
      {/* Indicador de Tendência */}
      <div className="inline-flex items-center gap-2 rounded-lg bg-black/40 px-3 py-1.5 border border-zinc-800/50 mt-2">
        <div className="flex items-center gap-1.5 text-yellow-500 font-bold text-xs">
          <TrendingUp size={14} />
          <span>+12,5%</span>
        </div>
        <span className="text-zinc-500 text-xs font-medium">vs. mês anterior</span>
      </div>
    </div>
  );
}