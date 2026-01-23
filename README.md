# 📅 Sistema de Agendamentos

Aplicação desenvolvida em **React + TypeScript** com o objetivo de praticar organização de código, componentização e regras de negócio.

O projeto permite criar, visualizar e remover agendamentos, organizando-os automaticamente por períodos do dia.

---

## 🚀 Funcionalidades

- Adição de agendamentos com nome, data e horário
- Listagem dinâmica dos agendamentos
- Remoção de agendamentos
- Agrupamento automático por períodos:
  - Manhã (09h às 12h)
  - Tarde (13h às 18h)
  - Noite (19h às 21h)
- Exibição de estado vazio por período

---

## 🧠 Conceitos aplicados

- React com TypeScript
- Tipagem forte
- Estados e manipulação de arrays (`map`, `filter`, `reduce`)
- Separação de responsabilidades
- Regras de negócio fora do JSX
- Hooks customizados
- Organização de pastas pensando em escalabilidade
- Estilização com Tailwind CSS

---

## 🧩 Estrutura do projeto

src/
assets/
core-components/
components/
hooks/
models/
utils/
types/

---

## 🛠️ Tecnologias

- React
- Vite
- TypeScript
- Tailwind CSS

---

## 🔧 Tasks atuais (em andamento)

Atualmente o projeto segue em evolução com foco em refatoração e melhoria da experiência do usuário.

### Refatoração geral
- [X] Refatorar componentes para melhorar legibilidade
- [X] Ajustar tipagens e modelos
- [X] Revisar hooks e responsabilidades
- [ ] Melhorar separação entre layout e regra de negócio
- [ ] Padronizar estrutura dos componentes

### Input Component (em desenvolvimento)
- [ ] Atualizar comportamento visual do input
- [ ] Implementar controle de estados visuais (focus, filled, default)
- [ ] Ajustar alinhamento do ícone com o texto
- [ ] Padronizar estilos com Tailwind CSS

#### Comportamento esperado do Input
- Ao receber **focus**, a borda deve mudar para **yellow**
- Quando o input estiver **filled (com valor)**, a borda deve permanecer **yellow**
- Caso não esteja focado nem preenchido, utilizar a borda padrão do input
- O **ícone do input** deve:
  - Alterar sua cor para `gray-600`
  - Permanecer alinhado verticalmente com o texto
  - Respeitar o espaçamento do `leftIcon`

---

## 📌 Objetivo

Projeto desenvolvido como desafio prático para consolidar conhecimentos em React e melhorar a organização de aplicações frontend.

---

Desenvolvido por **Junior Bonini**.
