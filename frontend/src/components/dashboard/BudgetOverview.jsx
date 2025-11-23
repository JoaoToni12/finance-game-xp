import { ShoppingBag, Home, Utensils, Car } from "lucide-react";

const budgets = [
  { category: "Compras", spent: 1250, limit: 2000, icon: ShoppingBag, color: "yellow" },
  { category: "Moradia", spent: 2800, limit: 3000, icon: Home, color: "zinc" },
  { category: "Alimentação", spent: 850, limit: 1500, icon: Utensils, color: "zinc" },
  { category: "Transporte", spent: 420, limit: 800, icon: Car, color: "zinc" },
];

export default function BudgetOverview() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-white font-bold text-lg">Orçamento Mensal</h3>
        <button className="text-yellow-500 text-sm font-bold hover:text-yellow-400 transition-colors">
          Ajustar
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {budgets.map((budget) => {
          const Icon = budget.icon;
          const percentage = (budget.spent / budget.limit) * 100;
          const isOverBudget = percentage > 90;
          const isYellow = budget.color === "yellow";
          
          return (
            <div
              key={budget.category}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 transition-colors hover:border-zinc-700"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  isYellow 
                    ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20" 
                    : "bg-zinc-950 border border-zinc-800 text-zinc-400"
                }`}>
                  <Icon size={16} strokeWidth={isYellow ? 2.5 : 2} />
                </div>
                <p className="text-zinc-400 text-xs font-medium truncate">{budget.category}</p>
              </div>
              
              <div className="mb-2">
                <p className="text-white font-bold text-sm">
                    R$ {budget.spent.toLocaleString('pt-BR')}
                </p>
                <p className="text-zinc-600 text-[10px] font-medium">
                    de R$ {budget.limit.toLocaleString('pt-BR')}
                </p>
              </div>
              
              <div className="relative h-1.5 rounded-full bg-zinc-950 overflow-hidden">
                <div 
                  className={`absolute inset-y-0 left-0 rounded-full transition-all duration-500 ${
                    isOverBudget ? "bg-red-500" : isYellow ? "bg-yellow-500" : "bg-zinc-600"
                  }`}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}