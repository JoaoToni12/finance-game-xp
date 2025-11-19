# Arquitetura de Dados - Gui.IA

## Visão Geral
O banco de dados utilizado é o Firestore (NoSQL). A estrutura foca em performance de leitura para o app mobile e consistência para a gamificação.

## Collections (Coleções)

### 1. `users`
Armazena o perfil público e estado do jogo do usuário.
- `uid` (string): ID do Firebase Auth.
- `displayName` (string): Nome do usuário.
- `email` (string): Email do usuário.
- `currentXp` (number): Total de XP acumulado.
- `level` (number): Nível atual (calculado baseado no XP).
- `createdAt` (timestamp).

### 2. `transactions`
Registra os gastos enviados pelo usuário para análise da IA.
- `userId` (string): Referência ao usuário.
- `rawText` (string): O texto original (ex: "gastei 50 reais no mcdonalds").
- `amount` (number): Valor extraído.
- `category` (string): Categoria definida pela IA (ex: "Alimentação").
- `isProcessed` (boolean): Se a IA já analisou e pontuou.
- `timestamp` (timestamp).

### 3. `quests`
Missões disponíveis para o usuário (definidas pelo Gilberto).
- `questId` (string): ID único.
- `title` (string): Título da missão (ex: "Economia Semanal").
- `description` (string): Descrição.
- `xpReward` (number): Quanto XP vale.
- `type` (string): "daily", "weekly", "achievement".

### 4. `user_quests` (Sub-collection de users ou Root collection)
Rastreia o progresso de um usuário em uma missão específica.
- `userId` (string)
- `questId` (string)
- `progress` (number): Valor atual (ex: 20/50).
- `status` (string): "active", "completed".
- `completedAt` (timestamp).

### 5. `xp_log`
Histórico de ganhos de XP para auditoria e animações de "Level Up".
- `userId` (string)
- `amount` (number): Quantidade ganha.
- `source` (string): "transaction_analysis", "quest_completion".
- `relatedId` (string): ID da transação ou quest.
- `timestamp` (timestamp).