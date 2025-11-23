import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Compras", value: 1250, color: "#eab308" }, // yellow-500
  { name: "Moradia", value: 2800, color: "#52525b" }, // zinc-600
  { name: "Alimentação", value: 850, color: "#71717a" }, // zinc-500
  { name: "Transporte", value: 420, color: "#3f3f46" }, // zinc-700
];

export default function BudgetChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <h3 className="text-white font-bold mb-6">Distribuição de Gastos</h3>

      <div className="flex items-center gap-6">
        {/* Gráfico */}
        <div className="shrink-0 relative">
            {/* Círculo no fundo para dar acabamento se o gráfico demorar */}
            <div className="absolute inset-0 rounded-full border-4 border-zinc-800/50"></div>
            <div style={{ width: 120, height: 120 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={55}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            {/* Texto central opcional (Total) */}
             {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] text-zinc-500 font-bold">DEZ</span>
            </div> */}
        </div>

        {/* Legenda */}
        <div className="flex-1 space-y-3">
          {data.map((item) => {
            const percentage = ((item.value / total) * 100).toFixed(0);
            
            return (
              <div key={item.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div
                    className="h-2 w-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-zinc-400 font-medium">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-200 font-bold">
                    {percentage}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-xl bg-black/40 p-4 border border-zinc-800/50">
        <span className="text-zinc-500 text-sm font-medium">Total Gasto</span>
        <span className="text-white font-bold text-lg">R$ {total.toLocaleString("pt-BR")}</span>
      </div>
    </div>
  );
}