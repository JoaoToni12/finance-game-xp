# Biblioteca de Componentes UI — Gui.IA

## Visão Geral
A biblioteca de componentes do Gui.IA foi desenvolvida para garantir **consistência visual**, **alta acessibilidade** e **agilidade no desenvolvimento**.  
Todos os componentes seguem:
- estilização baseada em **Tailwind CSS**,
- princípio de **composição sobre herança**,
- compatibilidade com **React Server Components** e **Client Components**,
- suporte nativo a **Dark Mode XP**.

---

## I. Formulários e Interação (Inputs, Seleção e Validação)

Componentes responsáveis pela entrada e manipulação de dados do usuário.

### 1. `Form.jsx`
Container principal para gerenciamento de estado, submissão e validação de formulários complexos.

### 2. `Input.jsx`
Campo de texto primário para entradas simples, com suporte a estados de erro.

### 3. `Textarea.jsx`
Campo multilinha para inputs longos, como descrições e observações.

### 4. `Label.jsx`
Etiqueta associada a campos de formulário, com suporte completo à acessibilidade (ARIA).

### 5. `InputOTP.jsx`
Entrada segmentada em células para códigos de autenticação (OTP / 2FA).

### 6. `Select.jsx`
Menu dropdown de seleção única, otimizado para mobile e navegação assistiva.

### 7. `RadioGroup.jsx`
Grupo de botões de escolha única dentro de um conjunto controlado.

### 8. `Checkbox.jsx`
Caixa de seleção binária com estados `checked` e `indeterminate`.

### 9. `Slider.jsx`
Controle de valor numérico contínuo dentro de um intervalo.

### 10. `Switch.jsx`
Toggle on/off para configurações rápidas.

---

## II. Elementos de Ação e Navegação

Componentes que disparam ações ou organizam a navegação dentro da interface.

### 1. `Button.jsx`
Botão base com variantes pré-definidas (Amarelo XP, outline, ghost) e estados interativos.

### 2. `Toggle.jsx`
Botão de estado persistente (on/off), ideal para filtros rápidos.

### 3. `ToggleGroup.jsx`
Agrupa toggles permitindo seleção única ou múltipla.

### 4. `Tabs.jsx`
Navegação horizontal por guias dentro da mesma tela.

### 5. `Pagination.jsx`
Controle de navegação por páginas em listas extensas.

### 6. `NavigationMenu.jsx`
Menu avançado com submenus flutuantes.

### 7. `Menubar.jsx`
Barra fixa de navegação estilo desktop.

### 8. `Breadcrumb.jsx`
Trilha hierárquica exibindo o caminho até a página atual.

---

## III. Estrutura e Layout (Conteúdo e Visual)

Componentes para organização, responsividade e distribuição visual.

### 1. `Card.jsx`
Container estilizado com borda, sombra e `rounded-2xl` para agrupar conteúdo.

### 2. `Sidebar.jsx`
Navegação lateral com colapso dinâmico e suporte mobile via `Sheet`.

### 3. `Separator.jsx`
Linha divisória horizontal ou vertical (`bg-zinc-800`).

### 4. `Progress.jsx`
Indicador de progresso linear (ex.: barras de XP).

### 5. `Skeleton.jsx`
Placeholder animado para carregamento assíncrono.

### 6. `Table.jsx`
Conjunto de elementos para construção de tabelas limpas e responsivas.

### 7. `ScrollArea.jsx`
Área com rolagem customizada e barras consistentes.

### 8. `Resizable.jsx`
Painéis redimensionáveis por arraste.

### 9. `AspectRatio.jsx`
Mantém proporção fixa de conteúdo, útil para mídia e gráficos.

### 10. `Carousel.jsx`
Slider horizontal com navegação e indicadores.

### 11. `Chart.jsx`
Wrapper para Recharts com tema e tooltips integrados.

### 12. `ImageWithFallback.jsx`
Imagem com fallback estilizado caso a URL falhe.

---

## IV. Overlays e Feedback (Modais, Alertas e Dicas)

Componentes que exibem camadas temporárias, confirmações e mensagens.

### 1. `Dialog.jsx`
Modal genérico para ações complexas com foco total.

### 2. `AlertDialog.jsx`
Confirmação obrigatória para ações irreversíveis.

### 3. `Sheet.jsx`
Painel deslizante lateral para navegação ou detalhes.

### 4. `Drawer.jsx`
Painel deslizante inferior (bottom sheet), comum em mobile.

### 5. `Tooltip.jsx`
Rótulo flutuante exibido por hover.

### 6. `Popover.jsx`
Caixa de conteúdo flutuante próxima ao trigger.

### 7. `HoverCard.jsx`
Preview rico ao passar o mouse (ex.: perfil).

### 8. `ContextMenu.jsx`
Menu acionado por clique direito ou toque longo.

### 9. `Command.jsx`
Palette estilo `Ctrl+K` para busca e execução rápida.

### 10. `Alert.jsx`
Mensagem de feedback não interativa.

### 11. `Collapsible.jsx`
Expansão/colapso de conteúdo sem overlay.

### 12. `Toaster.jsx`
Sistema global de notificações empilháveis.

### 13. `Avatar.jsx`
Imagem de perfil com fallback para iniciais.

### 14. `Badge.jsx`
Marcador compacto para status e contadores.

### 15. `Calendar.jsx`
Agenda interativa para seleção de datas.

### 16. `DropdownMenu.jsx`
Menu suspenso flutuante acionado por trigger.

### 17. `Accordion.jsx`
Exibição de conteúdo em seções expansíveis.

---

## V. Utilitários e Hooks Essenciais

Recursos de suporte ao funcionamento global dos componentes.

### 1. `cn.js`
Função `cn()` para combinar e resolver classes Tailwind (clsx + twMerge).

### 2. `use-mobile.jsx`
Hook `useIsMobile()` retorna `true` quando largura < 768px.

### 3. `Sidebar.jsx` (hook interno)
`useSidebar()` controla estado programático da Sidebar.

### 4. `Tooltip.jsx`
Provider de contexto necessário para tooltips (`TooltipProvider`).

---
