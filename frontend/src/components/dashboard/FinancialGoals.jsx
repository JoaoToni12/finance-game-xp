import { Target, TrendingUp } from "lucide-react";

const goals = [
  { 
    name: "Reserva de Emergência", 
    current: 32500, 
    target: 50000, 
    icon: Target 
  },
  { 
    name: "Viagem Internacional", 
    current: 8500, 
    target: 15000, 
    icon: TrendingUp 
  },
];

export default function FinancialGoals() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-white font-bold text-lg">Metas Financeiras</h3>
        <button className="text-yellow-500 text-sm font-bold hover:text-yellow-400 transition-colors">
          Ver todas
        </button>
      </div>
      
      <div className="space-y-3">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const progress = (goal.current / goal.target) * 100;
          
          return (
            <div
              key={goal.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-yellow-500">
                  <Icon size={20} />
                </div>
                
                <div className="flex-1">
                  <p className="text-white font-medium text-sm mb-0.5">{goal.name}</p>
                  <p className="text-zinc-500 text-xs">
                    R$ {goal.current.toLocaleString('pt-BR')} de <span className="text-zinc-400">R$ {goal.target.toLocaleString('pt-BR')}</span>
                  </p>
                </div>
              </div>
              
              {/* Barra de Progresso */}
              <div className="relative h-2 rounded-full bg-zinc-950 overflow-hidden">
                <div 
                  className="absolute inset-y-0 left-0 rounded-full bg-yellow-500 transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <p className="text-yellow-500 text-xs font-bold mt-2 text-right">
                {progress.toFixed(0)}% completo
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}