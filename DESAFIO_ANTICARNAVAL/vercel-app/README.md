# 🌐 Retiro Anti-Carnaval - Sistema de Visualização

Sistema web simples para hospedagem no Vercel com consulta completa,
visualização adequada do markdown a 100% deste conteúdo, organizado,
com botões de copiar.

## 📋 Estrutura do Projeto

```
vercel-app/
├── package.json
├── next.config.js
├── tailwind.config.js
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       └── content/
│           └── route.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   └── MarkdownView.tsx
└── lib/
    └── content.ts
```

## 🚀 Como Hospedar no Vercel

1. Instale o Vercel CLI: `npm i -g vercel`
2. Na pasta do projeto, rode: `vercel`
3. Siga as instruções

## 📖 Como Usar

1. Acesse a URL gerada pelo Vercel
2. Navegue pelos documentos na sidebar
3. Clique em "Copiar" para copiar seções de texto

## 🎨 Features

- ✅ Visualização completa de Markdown
- ✅ Sidebar com navegação
- ✅ Busca de conteúdo
- ✅ Botões de copiar
- ✅ Design responsivo
- ✅ Dark mode
- ✅ Syntax highlighting
