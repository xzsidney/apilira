# Arquitetura Frontend Vue.js - LiraRPG

Este documento define o mapa arquitetural para a construção do aplicativo final (Frontend) utilizando **Vue.js**, **TailwindCSS** e como ele fará a integração com o Backend já existente (Node.js/Prisma).

A jogabilidade exata (mecânicas de tela, narrativa, testes) ainda será definida. Portanto, este documento foca puramente na infraestrutura, nas tecnologias e no fluxo de dados.

## 1. Visão Geral e Finalidade
O Frontend do **LiraRPG** será um Web App SPA (Single Page Application). Sua finalidade é ser a interface do usuário para gerenciar personagens, cenários, populações e recursos do universo **Mundo das Trevas (World of Darkness)**, contemplando cenários como Vampiro (V5), Lobisomem (W5), Caçador (H5) e Mago (M20). 

A principal responsabilidade do Frontend é consumir os dados do nosso Backend RESTful, fornecendo uma interface rica, responsiva e performática.

## 2. Stack Tecnológica
- **Framework Core:** Vue 3 (utilizando Composition API e `<script setup>`)
- **Estilização:** TailwindCSS (para desenvolvimento rápido de UI e design responsivo)
- **Gerenciamento de Estado:** Pinia (para armazenar o estado global, como dados do usuário logado, cache de catálogos e informações do personagem ativo)
- **Roteamento:** Vue Router (para navegação entre as telas como Dashboard, Criação de Personagem, Cenários, etc)
- **Comunicação com Backend:** Axios (ou Fetch API nativo) configurado com interceptors para envio de tokens de autenticação (JWT).

## 3. Comunicação com o Backend
O Backend do LiraRPG já possui infraestrutura robusta de CRUDs baseados no Prisma (ex: `Region`, `Population`, `BackgroundDefinition`, `HavenDefinition`).
O Frontend se comunicará com o Backend seguindo a arquitetura REST:

### A. Camada de Serviços (Services API)
Para não poluir os componentes Vue com lógica HTTP, criaremos uma pasta `src/services/`.
Cada módulo do backend terá seu serviço correspondente no frontend:
- `api.js`: Instância base do Axios configurada com a `baseURL` do nosso servidor Node.
- `regionService.js`: Funções assíncronas para `getAll`, `create`, `update`, `delete`.
- `characterService.js`: Gerenciamento de fichas.

### B. Fluxo de Dados (Data Fetching)
1. **Montagem do Componente (onMounted):** O componente Vue chama o Service.
2. **Requisição HTTP:** O Axios dispara um `GET /api/regions`.
3. **Gerenciamento de Estado:** Se os dados precisarem ser acessados por várias telas, o Service alimenta o *Pinia Store*. Se forem dados locais (ex: lista de formulário), ficam em uma variável reativa `ref()` no próprio componente.
4. **Tratamento de Erros:** Interceptors globais no Axios capturam erros comuns (como 401 Unauthorized) para redirecionar o usuário para a tela de Login ou exibir `Toasts` de erro genéricos.

## 4. Estrutura de Diretórios Recomendada (Scaffolding)
Para manter o projeto escalável, a estrutura base do frontend será:
```text
/src
 ├── assets/          # Imagens, fontes, css globais (Tailwind input)
 ├── components/      # Componentes UI reutilizáveis (Botões, Modais, Cards)
 ├── views/           # As páginas inteiras roteadas (ex: Dashboard.vue, Login.vue)
 ├── router/          # Configuração do Vue Router
 ├── stores/          # Pinia Stores (ex: authStore, gameStore)
 ├── services/        # Funções de requisição HTTP (Axios)
 └── utils/           # Funções de formatação e helpers
```

## 5. Próximos Passos
1. Iniciar o projeto Vue na pasta apropriada rodando `npm create vue@latest`.
2. Instalar o `tailwindcss`, `axios`, `pinia` e `vue-router`.
3. Configurar a instância base do Axios apontando para a porta/URL onde o nosso Backend está rodando.
4. Definir as primeiras Telas base (Layout padrão e Navegação).
