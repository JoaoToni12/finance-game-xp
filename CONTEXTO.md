# CONTEXTO DO PROJETO: Gui.IA (Finance Game XP)

## 1. Resumo do Produto
O "Gui.IA" é um app de educação financeira gamificada focado em jovens.
- **Core Loop:** O usuário digita um gasto (ex: "Gastei 30 no BK") -> A IA analisa e categoriza -> O sistema converte economia/controle em XP -> O usuário sobe de nível e desbloqueia recompensas.
- **Diferencial:** Uso de IA Generativa (OpenAI/GPT) para análise de faturas e comportamento, misturado com RPG.

## 2. Stack Tecnológica (Obrigatória)
- **Backend:** Firebase Cloud Functions (Node.js).
- **Database:** Cloud Firestore (NoSQL).
- **Auth:** Firebase Auth.
- **IA Engine:** OpenAI API (GPT-3.5 ou 4) ou Google Gemini API.
- **Frontend (Consumidor):** React Native/Flutter (Gerenciado por outro dev).

## 3. Regras de Negócio & Gamificação
- **Scoring System:** Cada transação registrada gera XP. Transações que representam "economia" ou "metas batidas" geram bônus.
- **Níveis:** O XP acumulado define o `level` do usuário.
- **Quests:** Missões fixas (ex: "Semana sem fast food") que, quando completadas, dão grande quantidade de XP.
- **Nudges:** O sistema deve enviar notificações push (FCM) baseadas no comportamento (ex: Risco de estourar orçamento).

## 4. Arquitetura de Dados (Firestore)
A estrutura de dados deve seguir estritamente este schema:

### Collection: `users`
- `uid` (string): ID do Auth.
- `currentXp` (number): XP Total.
- `level` (number): Nível calculado.
- `fcmToken` (string): Token para Push Notifications.

### Collection: `transactions`
- `userId` (string): Dono da transação.
- `rawText` (string): Texto inputado (ex: "pizza 40 reais").
- `category` (string): Gerado pela IA.
- `aiFeedback` (string): Comentário curto da IA sobre o gasto.
- `isProcessed` (boolean): Flag de processamento.

### Sub-collection: `users/{userId}/user_quests`
- `questId` (string): ID da missão.
- `status` (string): "active", "completed".
- `progress` (number): Progresso atual.

## 5. Funções Cloud Functions (Backend)
O backend deve expor as seguintes triggers/endpoints:
1. `analyzeExpense`: Gatilho HTTP ou Firestore Trigger que recebe texto, chama a OpenAI, categoriza e salva na transação.
2. `calculateXp`: Gatilho que roda após `analyzeExpense`, calcula o XP baseado na categoria e atualiza o user.
3. `checkQuests`: Verifica se a nova transação completa alguma missão ativa.