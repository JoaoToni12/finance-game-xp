const { onCall } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { setGlobalOptions } = require("firebase-functions/v2");

// Configuração Global
setGlobalOptions({ maxInstances: 10 });
initializeApp();
const db = getFirestore();

// ---------------------------------------------------------
// 1. CONFIGURAÇÃO DA IA (GEMINI)
// ---------------------------------------------------------
// IMPORTANTE: Em produção usariamos defineSecret, mas para o MVP vai hardcoded.
const API_KEY = "AIzaSyDDXKAoWoAbZxYrvf0rgkaobg4QXsEulhA";
const genAI = new GoogleGenerativeAI(API_KEY);

// ---------------------------------------------------------
// 2. FUNÇÃO: ANALISAR GASTO (Chamada pelo Front do Henri)
// ---------------------------------------------------------
exports.analyzeExpense = onCall({ cors: true }, async (request) => {
    console.log("🚀 Function analyzeExpense invoked. Request data:", request.data);

    try {
        const userText = request.data.text;

        if (!userText) {
            console.log("⚠️  Texto não fornecido na requisição.");
            return { error: "Texto não fornecido." };
        }

        // DIAGNÓSTICO: Vamos ver no log se a chave está sendo lida (mostra só os 4 primeiros chars)
        console.log(`🔑 Usando chave iniciada em: ${API_KEY.substring(0,4)}...`);
        console.log(`🤖 Tentando acessar modelo para texto: ${userText}`);

        const modelName = "models/gemini-2.5-flash"; 
        const model = genAI.getGenerativeModel({ model: modelName });

        const prompt = `
            Você é o Gui.IA, um assistente financeiro para jovens.
            Analise a frase: "${userText}".
            Retorne APENAS um JSON (sem markdown) com:
            {
                "amount": (numero, valor gasto. Se não achar, null),
                "category": (string, ex: "Alimentação", "Transporte", "Lazer"),
                "isWaste": (boolean, true se for supérfluo/besteira, false se for essencial),
                "feedback": (string, curto e divertido, max 15 palavras. Se for gasto ruim, dê uma bronca leve. Se for bom, elogie.)
            }
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Limpeza básica para garantir JSON puro
        text = text.replace(/```json/g, "").replace(/```/g, "").trim();
        
        console.log("✅ IA retornou JSON:", text);
        const data = JSON.parse(text);

        return data;

    } catch (error) {
        console.error("❌ Erro geral na função analyzeExpense:", error);
        return { error: "Ocorreu um erro inesperado no servidor. Tente novamente." };
    }
});

// ---------------------------------------------------------
// 3. FUNÇÃO: CALCULAR XP (Gatilho do Banco)
// ---------------------------------------------------------
exports.calculateXp = onDocumentCreated("transactions/{transactionId}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;

    const data = snapshot.data();
    const userId = data.userId;
    const amount = parseFloat(data.amount);
    const isWaste = data.isWaste === true;

    if (!userId || !amount) return;

    // Regra de Negócio: 10% XP para supérfluo, 100% para essencial
    let xpEarned = isWaste ? Math.floor(amount * 0.1) : Math.floor(amount);
    if (xpEarned < 1) xpEarned = 1;

    const userRef = db.collection("users").doc(userId);

    try {
        await userRef.set({
            currentXp: FieldValue.increment(xpEarned),
            level: FieldValue.increment(0), // Placeholder para lógica de nível futura
            lastUpdate: FieldValue.serverTimestamp()
        }, { merge: true });
        
        console.log(`✅ XP Adicionado: +${xpEarned} para ${userId}`);
    } catch (err) {
        console.error("Erro no XP:", err);
    }
});