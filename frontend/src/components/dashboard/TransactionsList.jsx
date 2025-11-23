import { ArrowUpRight, ArrowDownLeft, ShoppingBag, Utensils, Zap, Coffee } from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "out",
    name: "Mercado Central",
    category: "Alimentação",
    amount: -285.50,
    date: "Hoje, 14:32",
    icon: ShoppingBag,
  },
  {
    id: 2,
    type: "in",
    name: "Salário",
    category: "Receita",
    amount: 8500.00,
    date: "Hoje, 09:00",
    icon: ArrowDownLeft,
  },
  {
    id: 3,
    type: "out",
    name: "Restaurante Italiano",
    category: "Alimentação",
    amount: -156.00,
    date: "Ontem, 20:15",
    icon: Utensils,
  },
  {
    id: 4,
    type: "out",
    name: "Conta de Luz",
    category: "Moradia",
    amount: -320.80,
    date: "Ontem, 10:22",
    icon: Zap,
  },
  {
    id: 5,
    type: "out",
    name: "Café da Manhã",
    category: "Alimentação",
    amount: -45.00,
    date: "21 Nov",
    icon: Coffee,
  },
];

export default function TransactionsList() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-white font-bold text-lg">Transações Recentes</h3>
        <button className="text-yellow-500 text-sm font-bold hover:text-yellow-400 transition-colors">
          Ver todas
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.slice(0, 4).map((transaction) => {
          const Icon = transaction.icon;
          const isIncome = transaction.type === "in";
          
          return (
            <div
              key={transaction.id}
              className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 hover:border-zinc-700 transition-colors"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                isIncome 
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/20" 
                  : "bg-zinc-950 border border-zinc-800 text-zinc-400"
              }`}>
                {isIncome ? (
                  <ArrowDownLeft size={20} strokeWidth={2.5} />
                ) : (
                  <Icon size={18} />
                )}
              </div>
              
              <div className="flex-1 min-w-0"> {/* min-w-0 ajuda no truncate */}
                <p className="text-white font-medium text-sm truncate">{transaction.name}</p>
                <p className="text-zinc-500 text-xs">{transaction.category}</p>
              </div>
              
              <div className="text-right whitespace-nowrap">
                <p className={`text-sm font-bold ${
                  isIncome ? "text-yellow-500" : "text-white"
                }`}>
                  {isIncome ? "+" : ""}R$ {Math.abs(transaction.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-zinc-600 text-xs font-medium">{transaction.date}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}