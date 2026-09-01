# ⛽ Calculadora Gasolina x Etanol

🇧🇷 [Português](#português) | 🇺🇸 [English](#english)

---

## Português

### 📋 Sobre o Projeto

Uma calculadora simples e intuitiva que ajuda o usuário a decidir qual combustível compensa mais: **Gasolina** ou **Etanol**. O cálculo é baseado na regra dos 70% — se o preço do etanol dividido pelo preço da gasolina for menor ou igual a 0,7, compensa abastecer com etanol; caso contrário, a gasolina é a melhor opção.

Este projeto foi desenvolvido como parte dos meus estudos de **React** com **TypeScript**.

### 🚀 Tecnologias Utilizadas

- [React](https://react.dev/) — Biblioteca para construção de interfaces
- [TypeScript](https://www.typescriptlang.org/) — Superset tipado do JavaScript
- [Vite](https://vite.dev/) — Ferramenta de build rápida para desenvolvimento front-end
- [ESLint](https://eslint.org/) — Linter para garantir qualidade de código
- CSS Vanilla — Estilização sem frameworks

### 🧮 Como Funciona

1. O usuário insere o **preço por litro do Etanol**
2. O usuário insere o **preço por litro da Gasolina**
3. Ao clicar em **Calcular**, a aplicação calcula a razão `etanol / gasolina`
4. Se o resultado for **≤ 0,7** → Compensa usar **Etanol**
5. Se o resultado for **> 0,7** → Compensa usar **Gasolina**

### 📁 Estrutura do Projeto

```
projeto-gasolina_etanol/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── assets/
    │   └── logo.png
    └── styles/
        ├── index.css
        └── App.css
```

### ⚙️ Como Rodar o Projeto

**Pré-requisitos:** [Node.js](https://nodejs.org/) instalado na máquina.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/projeto-gasolina_etanol.git

# Acesse a pasta do projeto
cd projeto-gasolina_etanol

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### 📜 Scripts Disponíveis

| Comando           | Descrição                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento   |
| `npm run build`   | Gera a build de produção               |
| `npm run preview` | Visualiza a build de produção          |
| `npm run lint`    | Executa o ESLint para análise de código|

### 📚 Aprendizados

- Gerenciamento de estado com `useState` tipado com interfaces
- Manipulação de formulários com `FormData` no React
- Tipagem de funções e props com TypeScript
- Estruturação de projetos React com Vite
- Formatação de moeda brasileira com `toLocaleString`

---

## English

### 📋 About the Project

A simple and intuitive calculator that helps users decide which fuel is more cost-effective: **Gasoline** or **Ethanol**. The calculation is based on the 70% rule — if the ethanol price divided by the gasoline price is less than or equal to 0.7, ethanol is the better choice; otherwise, gasoline is the way to go.

This project was built as part of my **React** + **TypeScript** studies.

### 🚀 Technologies Used

- [React](https://react.dev/) — Library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) — Typed superset of JavaScript
- [Vite](https://vite.dev/) — Fast build tool for front-end development
- [ESLint](https://eslint.org/) — Linter for code quality
- Vanilla CSS — Styling without frameworks

### 🧮 How It Works

1. The user enters the **price per liter of Ethanol**
2. The user enters the **price per liter of Gasoline**
3. Clicking **Calculate** triggers the formula `ethanol / gasoline`
4. If the result is **≤ 0.7** → It's worth using **Ethanol**
5. If the result is **> 0.7** → It's worth using **Gasoline**

### 📁 Project Structure

```
projeto-gasolina_etanol/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── assets/
    │   └── logo.png
    └── styles/
        ├── index.css
        └── App.css
```

### ⚙️ How to Run

**Prerequisites:** [Node.js](https://nodejs.org/) installed on your machine.

```bash
# Clone the repository
git clone https://github.com/your-username/projeto-gasolina_etanol.git

# Navigate to the project folder
cd projeto-gasolina_etanol

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### 📜 Available Scripts

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Starts the development server          |
| `npm run build`   | Generates the production build         |
| `npm run preview` | Previews the production build          |
| `npm run lint`    | Runs ESLint for code analysis          |

### 📚 Learnings

- State management with typed `useState` using interfaces
- Form handling with `FormData` in React
- Typing functions and props with TypeScript
- Structuring React projects with Vite
- Brazilian currency formatting with `toLocaleString`

---

## 📝 Licença / License

Este projeto é apenas para fins de estudo.
This project is for study purposes only.
