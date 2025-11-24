import { Zap, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";

export default function LevelCard() {
  const [userData, setUserData] = useState({
    level: 0,
    xp: 0,
    nextLevelXp: 100,
  });

  useEffect(() => {
    const userDocRef = doc(db, "users", "user_teste");
    const unsubscribe = onSnapshot(userDocRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setUserData({
          level: data.level || 0,
          xp: data.currentXp || 0,
          nextLevelXp: data.nextLevelXp || 100,
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const progress = (userData.xp / userData.nextLevelXp) * 100;

  return (
    <div className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-5 relative overflow-hidden">
      {/* Luz ambiente no fundo */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500 shadow-lg shadow-yellow-500/20">
            <Star size={24} className="text-black fill-black" strokeWidth={1} />
          </div>
          <div>
            <p className="text-zinc-400 text-xs font-medium">Seu Nível</p>
            <h3 className="text-white font-bold text-lg">Poupador Nível {userData.level}</h3>
          </div>
        </div>
        
        <div className="flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-black/50 backdrop-blur-sm px-3 py-1.5">
          <Zap size={14} className="text-yellow-500 fill-yellow-500" />
          <span className="text-white font-mono text-xs font-bold">{userData.xp} XP</span>
        </div>
      </div>

      <div className="space-y-2 relative z-10">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="text-zinc-400">Progresso para Nível {userData.level + 1}</span>
          <span className="text-yellow-500">{Math.floor(progress)}%</span>
        </div>
        
        <div className="relative h-2.5 rounded-full bg-zinc-950 overflow-hidden border border-zinc-800/50">
          <div 
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(234,179,8,0.3)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-zinc-500 text-[10px] text-right font-mono">
          {userData.xp.toLocaleString('pt-BR')} / {userData.nextLevelXp.toLocaleString('pt-BR')} XP
        </p>
      </div>

      <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-black/40 p-3 border border-zinc-800/50 relative z-10">
        <Zap size={14} className="text-yellow-500 mt-0.5 shrink-0" />
        <span className="text-zinc-400 text-xs leading-tight">
          <span className="text-white font-medium">+150 XP</span> por completar uma meta esta semana!
        </span>
      </div>
    </div>
  );
}