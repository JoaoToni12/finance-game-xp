import { Send, Sparkles, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const initialMessages = [
  {
    id: 1,
    type: "ai",
    content: "Olá! 👋 Sou o Gui, seu assistente financeiro. Pode me contar sobre seus gastos e receitas que eu vou organizar tudo para você!",
    timestamp: "09:00",
  },
  {
    id: 2,
    type: "user",
    content: "Acabei de comprar uma roupa de 250 reais",
    timestamp: "14:23",
  },
  {
    id: 3,
    type: "ai",
    content: "Entendi! Registrei sua compra de R$ 250,00 na categoria Compras.",
    transaction: {
      category: "Compras",
      amount: 250,
      type: "expense",
    },
    timestamp: "14:23",
  },
  {
    id: 4,
    type: "user",
    content: "Quanto já gastei com alimentação esse mês?",
    timestamp: "15:10",
  },
  {
    id: 5,
    type: "ai",
    content: "Você gastou R$ 850,00 com alimentação este mês.",
    timestamp: "15:10",
  },
];

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputValue,
      timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "ai",
        content: "Entendi! (Simulação)",
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative h-full bg-black">
      
      {/* 1. ÁREA DE SCROLL DAS MENSAGENS */}
      {/* h-full garante que ocupe a tela toda */}
      {/* pb-48 é o segredo: cria um espaço vazio no final pro scroll subir acima do input */}
      <div className="h-full overflow-y-auto px-4 pt-4 pb-64 scroll-smooth">
        
        <div className="flex justify-center mb-6">
            <span className="text-zinc-600 text-[10px] font-bold bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800/50 uppercase tracking-wider">Hoje</span>
        </div>

        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[85%] ${message.type === "user" ? "order-2" : "order-1"}`}>
                {/* Avatar IA */}
                {message.type === "ai" && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-yellow-500 shadow-sm shadow-yellow-500/20">
                      <Sparkles className="size-3.5 text-black fill-black" />
                    </div>
                    <span className="text-zinc-400 text-xs font-medium">Gui.IA</span>
                  </div>
                )}

                {/* Balão */}
                <div
                  className={`p-4 shadow-sm ${
                    message.type === "user"
                      ? "bg-yellow-500 text-black rounded-2xl rounded-tr-sm font-medium"
                      : "border border-zinc-800 bg-zinc-900 text-zinc-200 rounded-2xl rounded-tl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>

                  {message.transaction && (
                    <div className="mt-3 rounded-xl bg-black/40 border border-black/10 p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1 bg-yellow-500/10 rounded-full">
                          <Check className="size-3 text-yellow-500" />
                        </div>
                        <span className="text-yellow-600 text-[10px] font-bold uppercase tracking-wide">Sucesso</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400 text-xs">{message.transaction.category}</span>
                        <span className="text-white text-sm font-bold">
                          -R$ {message.transaction.amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                <p className={`text-zinc-600 text-[10px] mt-1 px-1 ${
                  message.type === "user" ? "text-right" : "text-left"
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* 2. INPUT FIXO NO RODAPÉ (Acima da Bottom Nav) */}
      {/* fixed: prende na tela */}
      {/* bottom-[75px]: altura aproximada da navbar */}
      {/* max-w-md mx-auto: garante que não estique em telas grandes */}
      <div className="fixed bottom-[75px] left-0 right-0 w-full max-w-md mx-auto px-4 pt-2 pb-2 z-20">
        
        {/* Fundo Blur para o texto não misturar */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent -top-10 pointer-events-none"></div>

        {/* Conteúdo do Input (com posição relativa para ficar acima do blur) */}
        <div className="relative">
            {/* Sugestões */}
            <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar mask-linear-fade">
            {["Quanto gastei hoje?", "Resumo do mês", "Minhas metas"].map((suggestion) => (
                <button
                key={suggestion}
                onClick={() => setInputValue(suggestion)}
                className="flex-shrink-0 whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 px-4 py-2 text-xs font-medium hover:border-yellow-500 hover:text-yellow-500 transition-colors shadow-lg"
                >
                {suggestion}
                </button>
            ))}
            </div>

            <div className="relative flex items-center shadow-2xl">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 pl-5 pr-14 py-4 text-white text-sm placeholder:text-zinc-600 focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 focus:outline-none transition-all shadow-black/50"
            />
            
            <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-black transition-all shadow-lg"
            >
                <Send className="size-5" strokeWidth={2.5} />
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}