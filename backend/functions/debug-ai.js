// debug-ai.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

// COLE SUA NOVA CHAVE AQUI (Cuidado com espaços!)
const API_KEY = "AIzaSyDI9aLuBKOMedsYBUw3t3C8cPV6gUY23GA";

async function testConnection() {
  console.log("🔍 Iniciando diagnóstico com a chave:", API_KEY.substring(0, 10) + "...");
  
  const genAI = new GoogleGenerativeAI(API_KEY);

  try {
    // 1. Tentar listar modelos (via API HTTP direta pq a lib as vezes abstrai isso)
    console.log("\n📋 Tentando listar modelos disponíveis...");
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await response.json();

    if (data.models) {
      console.log("✅ Modelos encontrados:");
      data.models.forEach(m => console.log(`   - ${m.name}`));
    } else {
      console.error("⚠️ Nenhum modelo retornado. Resposta crua:", data);
    }

    // 2. Tente forçar um Hello World com o Gemini Flash
    console.log("\n🤖 Tentando gerar conteúdo com 'gemini-1.5-flash'...");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Diga 'Olá João' se você estiver vivo.");
    const text = result.response.text();
    console.log("🎉 SUCESSO! Resposta:", text);

  } catch (error) {
    console.error("\n❌ ERRO FATAL:");
    console.error(error.message);
    if (error.message.includes("404")) {
        console.log("👉 DIAGNÓSTICO: Sua chave ou conta não tem permissão para acessar este modelo nesta região/projeto.");
    }
  }
}

testConnection();