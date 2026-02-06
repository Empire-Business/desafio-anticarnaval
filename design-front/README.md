# Retiro Anti-Carnaval - Páginas de Inscrição

Páginas de alta conversão para o Retiro Anti-Carnaval do Acelerador de Audiência.

## Tecnologias

- **Next.js 16** (App Router)
- **React 18**
- **Tailwind CSS 4** (com cores customizadas)
- **TypeScript**
- **Framer Motion** (animações)
- **Lucide React** (ícones)

## Estrutura do Projeto

```
design-front/
├── app/
│   ├── layout.tsx          # Layout root com SEO
│   ├── page.tsx            # Página de inscrição (home)
│   ├── inscricao/          # Redirect para home
│   └── obrigado/           # Página de confirmação
├── components/
│   ├── ui/                 # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Countdown.tsx
│   │   └── CarnivalEffects.tsx
│   └── sections/           # Seções da landing page
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Epiphany.tsx
│       ├── Solution.tsx
│       ├── Curriculum.tsx
│       ├── Deliverables.tsx
│       ├── SocialProof.tsx
│       ├── FAQ.tsx
│       ├── Scarcity.tsx
│       ├── FinalCTA.tsx
│       ├── FormSection.tsx
│       └── Footer.tsx
├── lib/
│   └── constants.ts        # Dados e configurações
└── public/
    └── assets/             # Imagens e logos
```

## Identidade Visual

- **Fundo:** Preto (#000000)
- **Acentos:** Dourado (#D4AF37)
- **Tipografia:** Inter (Google Fonts)
- **Efeito Carnavalesco:** Confetes sutis e silhuetas no background

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar produção
npm start
```

## Deploy na Vercel

### Opção 1: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Opção 2: Via Dashboard

1. Acesse [vercel.com](https://vercel.com)
2. Importe o projeto do GitHub
3. Configure:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
4. Deploy!

### Variáveis de Ambiente (Opcional)

- `NEXT_PUBLIC_SITE_URL` - URL do site em produção

## Páginas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page de inscrição completa |
| `/inscricao` | Redirect para `/` |
| `/obrigado` | Página de confirmação após inscrição |

## Customização

### Alterar data do evento

Edite `lib/constants.ts`:

```typescript
export const EVENT_START_DATE = new Date("2026-02-14T10:00:00-03:00");
export const REGISTRATION_END_DATE = new Date("2026-02-13T23:59:00-03:00");
```

### Alterar formulário

Edite `lib/constants.ts`:

```typescript
export const FORM_URL = "https://seu-formulario.com/widget/survey/xyz";
export const FORM_SCRIPT = "https://seu-formulario.com/js/embed.js";
```

### Alterar cores

Edite `app/globals.css`:

```css
@theme {
  --color-gold-500: #SEU_CODIGO_HEX;
}
```

## Scripts Úteis

```bash
# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## Licença

© 2026 Acelerador de Audiência. Todos os direitos reservados.
