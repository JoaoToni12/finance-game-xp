# Gui.IA: Desvende o jogo do dinheiro com seu Guia de IA. 🚀

## 🎯 A Didática da Ideia

### O Problema
Jovens e adultos enfrentam uma barreira para organizar suas finanças: a falta de ferramentas que sejam ao mesmo tempo simples, inteligentes e, principalmente, **engajadoras**. Planilhas são complexas, apps tradicionais são monótonos e a educação financeira parece um universo distante e complicado.

### A Solução: Gamificação + IA
O **Gui.IA** ataca esse problema transformando a gestão financeira pessoal em uma jornada de RPG. Nosso aplicativo utiliza Inteligência Artificial (Google Gemini) para que o usuário registre seus gastos de forma natural, como em uma conversa.

> "Gastei R$40 na pizza com amigos"

A IA analisa, categoriza o gasto, oferece um feedback e o sistema recompensa o usuário com **XP (Pontos de Experiência)**, que o faz subir de nível e desbloquear novas "quests" (missões), tornando o ato de economizar e se organizar uma atividade divertida e recompensadora.

## ✨ Key Features

- 🤖 **Análise Automatizada com IA:** Utiliza a API do **Google Gemini** para interpretar textos e categorizar despesas automaticamente, eliminando a necessidade de formulários manuais.
- 🎮 **Gamificação de RPG:** Converte controle financeiro em XP, níveis e missões. Cumpra metas como "Ficar uma semana sem fast-food" e seja recompensado!
- 🔔 **Nudges Comportamentais:** Envia notificações push (via Firebase) para alertar sobre riscos de estourar o orçamento ou para incentivar o cumprimento de metas.

## 🛠️ Visão Geral Técnica

Nossa arquitetura foi desenhada para ser escalável, segura e em tempo real, utilizando o que há de mais moderno no ecossistema serverless.

### Stack Tecnológica
- **Backend:** Firebase Cloud Functions (Node.js)
- **Banco de Dados:** Cloud Firestore (NoSQL)
- **Autenticação:** Firebase Auth
- **Motor de IA:** Google Gemini API
- **Frontend:** React Native _(a ser implementado)_

Para uma visão aprofundada da estrutura de dados, coleções do Firestore e lógica das Cloud Functions, consulte nosso documento de arquitetura.
➡️ **[Confira a Arquitetura Detalhada](./ARCHITECTURE.md)**

## 📂 Estrutura do Projeto

Este repositório está organizado em um monorepo para facilitar a gestão e o deploy:

- **/backend**: Contém todo o código-fonte das Cloud Functions, as regras de segurança do Firestore (`firestore.rules`) e as configurações de deploy do Firebase.
- **/frontend**: Onde o código do aplicativo mobile (React Native) será desenvolvido.

## 👨‍💻 Equipe

- **João:** Backend Developer
- **Henri:** Frontend Developer
