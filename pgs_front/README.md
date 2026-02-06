# Retiro Anti-Carnaval - Páginas de Inscrição e Obrigado

Projeto Next.js com as páginas de inscrição e confirmação para o Retiro Anti-Carnaval Acelerador de Audiência.

## 📁 Estrutura

```
pgs_front/
├── app/
│   ├── components/
│   │   ├── CountdownTimer.tsx    # Componente de countdown
│   │   └── FAQ.tsx               # Componente de FAQ accordion
│   ├── inscricao/
│   │   └── page.tsx              # Página de inscrição
│   ├── obrigado/
│   │   └── page.tsx              # Página de obrigado
│   ├── globals.css               # Estilos globais
│   ├── layout.tsx                # Layout raiz
│   └── page.tsx                  # Redirect para /inscricao
├── public/
│   ├── logo-dark.png             # Logo para fundo escuro
│   └── logo-light.png            # Logo para fundo claro
└── package.json
```

## 🚀 Deploy na Vercel

### Opção 1: Via CLI (recomendado)

1. Instale a Vercel CLI (se não tiver):
```bash
npm install -g vercel
```

2. Na pasta do projeto:
```bash
cd pgs_front
vercel
```

Siga as instruções no terminal.

### Opção 2: Via Dashboard Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe o repositório ou faça upload da pasta
4. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: `.` (ou `pgs_front` se estiver importando do repo pai)
   - Build Command: `npm run build` (automático)
   - Output Directory: `.next` (automático)
5. Clique em "Deploy"

### Opção 3: A partir do repositório Git

1. Commit e push das mudanças:
```bash
git add .
git commit -m "Add pgs_front - Retiro Anti-Carnaval pages"
git push
```

2. No dashboard da Vercel, importe o repositório e configure conforme acima.

## 📝 Configurações

### Variáveis de Ambiente (se necessário)

No dashboard da Vercel, em Settings > Environment Variables:

| Nome | Valor | Ambiente |
|------|-------|-----------|
| (opcional) | | |

## 🎨 Personalizações

### Alterar data do evento

Edite o arquivo `app/inscricao/page.tsx`:
```typescript
const EVENT_DATE = new Date('2026-03-13T23:59:00'); // Altere aqui
```

### Alterar link do WhatsApp

Edite o href do botão CTA em `app/inscricao/page.tsx`:
```typescript
href="https://wa.me/5511999999999?text=..."
```

### Alterar cores

Edite as variáveis CSS em `app/globals.css`:
```css
:root {
  --gold: #D4AF37;
  --red-accent: #E74C3C;
  --green-success: #27AE60;
  /* ... */
}
```

## 🖼️ Imagens

Para trocar os logos:
- `logo-dark.png` → usado em fundos escuros
- `logo-light.png` → usado em fundos claros

Substitua os arquivos na pasta `public/`.

## 📱 Responsividade

O projeto é totalmente responsivo e foi testado em:
- Mobile: 320px - 768px
- Tablet: 769px - 1024px
- Desktop: 1025px+

## 🧶 Desenvolvimento Local

```bash
cd pgs_front
npm install
npm run dev
```

Acesse: http://localhost:3000

## 📊 Build de Produção

```bash
npm run build
npm start
```

## 🔗 Links após Deploy

- Página de inscrição: `https://seu-dominio.vercel.app/inscricao`
- Página de obrigado: `https://seu-dominio.vercel.app/obrigado`
- Home: Redireciona para /inscricao

---

Desenvolvido com Next.js 16, Tailwind CSS e TypeScript.
