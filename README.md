
## 🕒 Vite Supabase History
O Vite Supabase History é uma aplicação web moderna desenvolvida para o gerenciamento e persistência de históricos de dados. Utilizando a velocidade do Vite, a robustez do React e o poder do Supabase como Backend-as-a-Service, a plataforma oferece uma experiência de usuário fluida com uma interface limpa construída em Bootstrap.

## 🚀 Funcionalidades
Persistência em Tempo Real: Sincronização imediata de dados com o PostgreSQL do Supabase.

Autenticação: Sistema de login seguro (opcional, dependendo da sua implementação).

Gestão de Histórico: Criação, leitura e exclusão de registros históricos.

Interface Responsiva: Design adaptável para qualquer dispositivo utilizando componentes do Bootstrap.

Performance Otimizada: Build ultra-rápido e Hot Module Replacement (HMR) via Vite.

## 🛠️ Tecnologias Utilizadas
React: Biblioteca para construção da interface de usuário.

Vite: Ferramenta de build e servidor de desenvolvimento de alta performance.

Supabase: Banco de dados PostgreSQL, autenticação e API REST automática.

Bootstrap 5: Framework CSS para estilização rápida e componentes responsivos.

React Icons: Para ícones intuitivos e leves.

## 📦 Como rodar o projeto
Pré-requisitos
Node.js instalado (versão 18+)

Uma conta e projeto criado no Supabase

Passo a Passo
Clone o repositório:

Bash

git clone https://github.com/mvdevelop/vite-supabase-history.git
cd vite-supabase-history
Instale as dependências:

Bash

npm install
Configure as Variáveis de Ambiente: Crie um arquivo .env na raiz do projeto e adicione suas credenciais do Supabase:

Snippet de código

VITE_SUPABASE_URL=sua_url_aqui
VITE_SUPABASE_ANON_KEY=sua_chave_anon_aqui
Inicie o servidor de desenvolvimento:

Bash

npm run dev
Acesse: http://localhost:5173

## 📁 Estrutura do Projeto
Plaintext

vite-supabase-history/
├── src/
│   ├── components/   # Componentes reutilizáveis (Tabelas, Formulários)
│   ├── config/       # Configuração do cliente Supabase
│   ├── hooks/        # Hooks personalizados para busca de dados
│   ├── pages/        # Telas principais (Home, History, Login)
│   └── App.jsx       # Ponto de entrada e rotas
├── public/           # Arquivos estáticos
├── .env.example      # Exemplo de variáveis de ambiente
└── index.html        # Estrutura base HTML

## 🗄️ Estrutura do Banco de Dados (Sugestão)
Para que o projeto funcione corretamente, certifique-se de ter uma tabela no Supabase com os seguintes campos:

id: uuid (Primary Key)

created_at: timestamp

title: text

description: text

user_id: uuid (Foreign Key para auth.users)

## 👨‍💻 Autor
Desenvolvido por mvdevelop.

GitHub: @mvdevelop

LinkedIn: Seu Nome Aqui

## 📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
