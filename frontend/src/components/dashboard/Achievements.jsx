import { Trophy, Flame, Target, TrendingUp, Sparkles, Award, Shield, Rocket } from "lucide-react";
import { useState } from "react";

const achievements = [
  { 
    icon: Trophy, 
    name: "Primeira Meta", 
    description: "Complete sua primeira meta financeira",
    unlocked: true,
  },
  { 
    icon: Flame, 
    name: "Sequência de 7 Dias", 
    description: "Registre gastos por 7 dias seguidos",
    unlocked: true,
  },
  { 
    icon: Target, 
    name: "Foco Total", 
    description: "Fique dentro do orçamento por 30 dias",
    unlocked: true,
  },
  { 
    icon: TrendingUp, 
    name: "Investidor", 
    description: "Economize R$ 5.000",
    unlocked: false,
  },
  { 
    icon: Sparkles, 
    name: "Mestre Financeiro", 
    description: "Atinja todas as metas do mês",
    unlocked: false,
  },
  { 
    icon: Award, 
    name: "Disciplinado", 
    description: "Use o app por 30 dias consecutivos",
    unlocked: false,
  },
  { 
    icon: Shield, 
    name: "Reserva de Emergência", 
    description: "Tenha 6 meses de despesas guardadas",
    unlocked: false,
  },
  { 
    icon: Rocket, 
    name: "Próximo Nível", 
    description: "Alcance o nível 10",
    unlocked: false,
  },
];

export default function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-white font-bold text-lg">Conquistas</h3>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="text-yellow-400 text-sm font-bold hover:text-yellow-300 transition-colors"
        >
          {showAll ? "Ver menos" : "Ver todas"}
        </button>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {(showAll ? achievements : achievements.slice(0, 4)).map((achievement) => {
          const Icon = achievement.icon;
          const isUnlocked = achievement.unlocked;

          return (
            <div
              key={achievement.name}
              className="group relative"
            >
              <div
                className={`aspect-square flex items-center justify-center rounded-2xl border transition-all duration-300 ${
                  isUnlocked
                    ? "border-yellow-500 bg-yellow-500 shadow-lg shadow-yellow-500/20"
                    : "border-zinc-800 bg-zinc-900"
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    isUnlocked ? "text-black stroke-[2.5px]" : "text-zinc-600"
                  }`}
                />
              </div>

              {/* Tooltip Customizado */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 hidden group-hover:block z-20 w-48 pointer-events-none">
                <div className="bg-zinc-900 border border-zinc-700 p-3 rounded-xl shadow-2xl relative">
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-r border-b border-zinc-700 rotate-45"></div>
                  <p className="text-white font-bold text-sm mb-1">{achievement.name}</p>
                  <p className="text-zinc-400 text-xs leading-tight">{achievement.description}</p>
                  {!isUnlocked && (
                    <div className="mt-2 flex items-center gap-1.5 pt-2 border-t border-zinc-800">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-600"></div>
                      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">Bloqueado</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contador de Badges */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <Trophy className="w-3 h-3 text-yellow-500" />
        <span className="text-zinc-500 text-xs font-medium">
          {unlockedCount} de {achievements.length} conquistadas
        </span>
      </div>

      {/* Card "Nova Conquista" (Aparece se não estiver expandido) */}
      {!showAll && (
        <div className="mt-5 bg-zinc-900/80 border border-yellow-500/30 p-4 rounded-2xl flex items-center gap-4 relative overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent"></div>
          
          <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center text-black shrink-0 z-10 shadow-lg shadow-yellow-500/20">
            <Trophy size={20} strokeWidth={2.5} />
          </div>
          
          <div className="z-10">
            <h4 className="text-yellow-500 text-sm font-bold flex items-center gap-1.5">
              🎉 Nova Conquista!
            </h4>
            <p className="text-zinc-300 text-xs">Você desbloqueou <span className="text-white font-medium">"Foco Total"</span></p>
          </div>
        </div>
      )}
    </div>
  );
}