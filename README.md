<h1 align="center">Education Page</h1>

<p align="center">Página educativa de matemática para crianças, com conteúdo e um exercício interativo das quatro operações.</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white" alt="Next.js 15">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/CSS-puro-1572B6?logo=css3&logoColor=white" alt="CSS">
</p>

---

## Sobre

Página única feita em Next.js para praticar componentização em React com TypeScript, sem bibliotecas de UI.

- **Banner** e **posts** com título, conteúdo e assinatura do autor.
- **Atividade interativa:** a página sorteia uma operação ("Quanto é: 7 × 4?"), a criança responde e recebe o retorno na hora. O estado fica em `useState`.

## Estrutura

```
src/app/
  page.tsx
  components/
    header/
    banner/
    posts/            # post-title, post-content, signature
    activities-side/  # gerador de operações + botões
```

## Como rodar

```bash
git clone https://github.com/CarHSMig/education-page.git
cd education-page
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Autor

**Carlos Henrique dos Santos Migon** · [LinkedIn](https://www.linkedin.com/in/carlos-henrique-dos-santos-migon-46387b336/) · [GitHub](https://github.com/CarHSMig)
