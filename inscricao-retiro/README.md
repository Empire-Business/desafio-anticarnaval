# Páginas de Inscrição - Retiro Anti-Carnaval

Páginas de inscrição e obrigado para o Retiro Anti-Carnaval do Acelerador de Audiência.

## 📁 Estrutura

```
inscricao-retiro/
├── app/
│   ├── pagina-inscricao/page.tsx   # Página de Inscrição
│   ├── obrigado/page.tsx            # Página de Obrigado
│   ├── page.tsx                     # Redirect para inscrição
│   ├── layout.tsx                   # Layout principal
│   └── globals.css                  # Estilos globais
├── public/
│   └── logos/                       # Logotipos
│       ├── logotipo-02.png          # Fundo escuro
│       └── logotipo-03.png          # Fundo claro
└── [config files]
```

## 🚀 Deploy no Vercel

### Opção 1: Deploy via CLI

```bash
cd inscricao-retiro
npm install
vercel
```

### Opção 2: Deploy via Dashboard

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe o repositório ou faça upload da pasta `inscricao-retiro`
4. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

## ⚙️ Variáveis de Ambiente

Configure no Vercel (Settings > Environment Variables):

```bash
# URL do formulário GoHighLevel
NEXT_PUBLIC_GHL_FORM_URL=sua_url_aqui

# ID da localização no GHL
NEXT_PUBLIC_GHL_LOCATION_ID=seu_location_id_aqui

# Link do grupo de WhatsApp
NEXT_PUBLIC_WHATSAPP_GROUP_LINK=seu_link_aqui

# Número do WhatsApp (formato: 5511999999999)
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

## 🎨 Personalização

### Data do Timer

Edite o arquivo `app/pagina-inscricao/page.tsx`:

```typescript
const TARGET_DATE = new Date('2026-03-13T23:59:59-03:00');
```

### Datas do Evento

Edite o arquivo `app/obrigado/page.tsx`:

```typescript
const EVENT_START_DATE = new Date('2026-03-14T10:00:00-03:00');
const EVENT_END_DATE = new Date('2026-03-17T18:00:00-03:00');
```

## 📱 Desenvolvimento Local

```bash
cd inscricao-retiro
npm install
npm run dev
```

Acesse: http://localhost:3000

## 🎯 Rotas

- `/` → Redireciona para página de inscrição
- `/pagina-inscricao` → Página de inscrição completa
- `/obrigado` → Página de obrigado (após inscrição)

## 🎨 Identidade Visual

### Cores

- Preto: `#000000`
- Branco: `#FFFFFF`
- Dourado: `#D4AF37`
- Cinza escuro: `#1A1A1A`
- Fundo escuro: `#0A0A0A`
- Verde sucesso: `#27AE60`
- Vermelho acento: `#E74C3C`

### Logos

- Fundo escuro: `Logotipo 02.png`
- Fundo claro: `Logotipo 03.png`

## 📦 Build de Produção

```bash
npm run build
npm start
```

## 🔧 Integração GoHighLevel

Para integrar com o GoHighLevel, substitua a função `handleSubmit` em `app/pagina-inscricao/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Dados do formulário
  const data = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
  };

  // Enviar para GHL
  const response = await fetch('SUA_URL_GHL_AQUI', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    window.location.href = '/obrigado';
  }
};
```

## 📄 Licença

© 2026 Acelerador de Audiência. Todos os direitos reservados.
