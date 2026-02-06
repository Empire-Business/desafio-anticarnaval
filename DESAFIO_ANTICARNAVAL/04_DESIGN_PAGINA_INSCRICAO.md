# 🎨 DESIGN DESCRIPTION - PÁGINA DE INSCRIÇÃO
## Retiro Anti-Carnaval Acelerador de Audiência

> **Versão:** 2.4
> **Objetivo:** Descrição detalhada para implementação do design + Otimização PageSpeed Insights (90+ score target)
> **Assets**: Prompts de imagem movidos para arquivo separado `04_PROMPTS_IMAGENS.md`
> **Formato:** Markdown com especificações completas
> **v2.4**: Substituída seção de depoimentos por perfis dos fundadores (Davi, Sandro, Pedro)

---

## 🎭 IDENTIDADE VISUAL - CONCEITO CORE

### A Narrativa Visual
**"Enquanto o mundo carnavala, você constrói."**

Esta é a essência visual do projeto:
- **O CARNAVAL ESTÁ LÁ FORA** - distante, vago, indireto
- **O FOCO ESTÁ AQUI DENTRO** - trabalho, transformação, construção
- Você está dentro de casa, focado, enquanto o carnaval acontece lá fora

### Elementos de Carnaval (APENAS background, SUBTIS)

**✅ USE (sutil, elegante):**
- Máscaras venezianas em preto/dourado (elegantes, NÃO festivas)
- Confetes dourados caindo sutilmente
- Penas em dourado/preto
- Luzes de carnaval MUITO desfocadas, como vistas através de janelas
- Silhuetas de pessoas fantasiadas ao longe, desfocadas

**❌ NÃO USE:**
- Cores vibrantes de carnaval (verde, rosa, roxo neon)
- Elementos festivos diretos
- Serpentinas, balões, alegorias
- Qualquer coisa que leve atenção para fora do foco principal

### A Metáfora da Janela
O design deve criar a sensação de estar dentro de um ambiente escuro, focado, olhando pela janela e vendo o carnaval lá fora - distante,模糊, irrelevante.

---

## 🎨 PALETA DE CORES

| Cor Nome | Hex | RGB | Uso |
|----------|-----|-----|-----|
| Black | #000000 | 0,0,0 | Fundo principal (dentro de casa) |
| White | #FFFFFF | 255,255,255 | Texto base |
| Gold | #D4AF37 | 212,175,55 | CTA, destaques, bordas principais |
| Gold Light | #F4D03F | 244,208,63 | Hover states |
| Purple | #6B46C1 | 107,70,193 | Glow de carnaval (sutil, background) |
| Crimson | #E74C3C | 231,76,60 | Urgência + glow de carnaval |
| Green Success | #27AE60 | 39,174,96 | Checkmarks, sucesso |
| Dark Gray | #1A1A1A | 26,26,26 | Fundo secundário |
| Light Gray | #F5F5F5 | 245,245,245 | Fundos de seções (raramente usado) |

### Como Usar as Cores de Carnaval
- **Purple (#6B46C1)**: Apenas em radial gradients no background, opacidade 4-8%
- **Crimson (#E74C3C)**: Apenas em radial gradients no background, opacidade 4-6%
- **Gold (#D4AF37)**: Cor principal para CTAs e destaques do CONTEÚDO

---

## ✨ EFEITOS DE CARNAVAL (CSS)

### 1. Carnaval Glow (Background Principal)
```css
.carnaval-glow {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  pointer-events: none;
  z-index: 0;
  background:
    radial-gradient(ellipse 80% 50% at 20% 20%, rgba(107, 70, 193, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 80%, rgba(212, 175, 55, 0.06) 0%, transparent 50%),
    radial-gradient(ellipse 100% 30% at 50% 100%, rgba(231, 76, 60, 0.04) 0%, transparent 40%);
}
```
**Efeito**: Glow sutil de carnaval lá fora, através de "janelas" imaginárias

### 2. Confetti Fall (Dourado, Subtil)
```css
.confetti {
  position: absolute;
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%);
  border-radius: 1px;
  opacity: 0.4;
  animation: confetti-fall linear infinite;
}

@keyframes confetti-fall {
  0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 0.4; }
  90% { opacity: 0.4; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
```
**Efeito**: Confetes dourados caindo sutilmente, como vistos através da janela

### 3. Window Glow (Luz de Carnaval Lá Fora)
```css
.window-glow {
  position: absolute;
  width: 300px;
  height: 400px;
  background: radial-gradient(ellipse, rgba(255, 200, 100, 0.03) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  pointer-events: none;
}
```
**Efeito**: Luz de carnaval desfocada, como vista através de uma janela

---

## 🖼️ ASSETS DE IMAGEM

> **Nota**: Os prompts detalhados para geração de imagens com IA estão no arquivo separado `04_PROMPTS_IMAGENS.md`.
> **Ícones**: Use bibliotecas de ícones (Lucide, Heroicons, Phosphor) ao invés de gerar com IA.

### Lista de Imagens Necessárias

| Arquivo | Seção | Formato | Observação |
|---------|-------|--------|-----------|
| `hero-carnival-window.webp` | Hero | 1600x900 | Background principal |
| `epiphany-bridge.webp` | Epiphany Bridge | 1200x800 | Ilustração da história |
| `day-01-foundations.svg` | Dia 1 | SVG | Ícone (biblioteca) |
| `day-02-creation.svg` | Dia 2 | SVG | Ícone (biblioteca) |
| `day-03-distribution.svg` | Dia 3 | SVG | Ícone (biblioteca) |
| `day-04-monetization.svg` | Dia 4 | SVG | Ícone (biblioteca) |
| `certificate.webp` | Entregáveis | 800x1067 | Preview do certificado |
| `mask-decoration.webp` | Decorativo | 500x500 | Máscara veneziana |
| `feather-decoration.webp` | Decorativo | 500x1000 | Penas de carnaval |
| `davi.png` | Founders | 400x400 | Foto fundador |
| `sandro.png` | Founders | 400x400 | Foto fundador |
| `pedro.png` | Founders | 400x400 | Foto fundador |

### Formato e Conversão

**Original**: `.png` (para edição)
**Produção**: `.webp` (sistema deve converter automaticamente)

```html
<!-- Exemplo de uso -->
<img
  src="/images/hero-carnival-window.webp"
  srcset="/images/hero-carnival-window-400.webp 400w,
          /images/hero-carnival-window-800.webp 800w,
          /images/hero-carnival-window-1200.webp 1200w,
          /images/hero-carnival-window-1600.webp 1600w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  width="1600"
  height="900"
  loading="eager"
  alt="Carnaval visto através da janela enquanto trabalho focado"
>
```

### Estrutura de Pastas

```
/public/
  ├── images/
  │   ├── hero-carnival-window.webp
  │   ├── epiphany-bridge.webp
  │   ├── certificate.webp
  │   ├── decorative/
  │   │   ├── mask-decoration.webp
  │   │   └── feather-decoration.webp
  │   └── founders/
  │       ├── davi.png
  │       ├── sandro.png
  │       └── pedro.png
  └── icons/
      ├── day-01-foundations.svg
      ├── day-02-creation.svg
      ├── day-03-distribution.svg
      └── day-04-monetization.svg
```

### Ícones - Bibliotecas Recomendadas

- **Lucide Icons**: https://lucide.dev/
- **Heroicons**: https://heroicons.com/
- **Phosphor Icons**: https://phosphoricons.com/

Ícones para cada Dia:
- Dia 1: `Hammer`, `Wrench`, ou `Foundation` (Fundamentos)
- Dia 2: `PenTool`, `FileEdit`, ou `Pencil` (Criação)
- Dia 3: `Share`, `Broadcast`, ou `Network` (Distribuição)
- Dia 4: `TrendingUp`, `Chart`, ou `DollarSign` (Monetização)

---

## 📐 ESPECIFICAÇÕES GERAIS

### Breakpoints
```
Mobile: 320px - 768px
Tablet: 769px - 1024px
Desktop: 1025px+
```

### Grid System
```
Container max-width: 1200px (desktop)
Padding lateral: 20px (mobile), 40px (tablet), 60px (desktop)
Columns: 12-column grid
Gutter: 20px
```

### Espaçamentos
```
section-padding: 80px 0 (desktop), 60px 0 (tablet), 40px 0 (mobile)
element-margin-bottom: 20px
group-margin-bottom: 40px
```

---

## 🔤 TIPOGRAFIA

### Font Families
```
Primary: Inter or SF Pro Display (System)
Secondary: Georgia (serif, para quotes/highlights)
Monospace: SF Mono or JetBrains Mono (para code/technical)
```

### Font Sizes (Desktop)
```
H1: 48px / 56px / 64px (Hero)
H2: 36px / 40px
H3: 28px / 32px
H4: 24px
Body Large: 18px
Body: 16px
Body Small: 14px
Caption: 12px
```

### Font Weights
```
Light: 300
Regular: 400
Medium: 500
Semibold: 600
Bold: 700
```

### Line Heights
```
Headings: 1.2
Body: 1.6
Compact: 1.4
```

---

## 🖼️ SEÇÃO 1: HERO

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│              [HEADLINE - 64px Bold]                       │
│                                                            │
│           [Subheadline - 24px Regular, max-width 800px]   │
│                                                            │
│                                                            │
│            [CTA BUTTON - 280px x 60px]                    │
│                                                            │
│           [Sub CTA - 16px regular + emoji]                │
│                                                            │
│              [COUNTDOWN TIMER - styled]                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações Hero

**Background:** #000000 (solid black) + `.carnaval-glow` overlay

**Headline:**
- Font-size: clamp(2.5rem, 8vw, 5rem)
- Font-weight: 700
- Color: #FFFFFF
- Text-transform: uppercase (parcial - apenas "ENQUANTO O MUNDO")
- Letter-spacing: -0.02em
- Max-width: 900px
- Text-align: center
- Destaque "carnavala" em `.text-gold` (#D4AF37)

**Subheadline:**
- Font-size: 1.25rem (desktop), 1rem (mobile)
- Font-weight: 400
- Color: rgba(255, 255, 255, 0.6)
- Max-width: 650px
- Text-align: center
- Margin: 2rem auto
- Line-height: 1.7

**Hero Badge:**
- Display: inline-flex
- Background: rgba(212, 175, 55, 0.1)
- Border: 1px solid rgba(212, 175, 55, 0.2)
- Border-radius: 100px
- Padding: 0.5rem 1rem
- Font-size: 0.75rem
- Color: #D4AF37
- Text-transform: uppercase
- Letter-spacing: 0.15em
- Margin-bottom: 2rem

**CTA Button:**
- Width: 320px (desktop), 100% (mobile)
- Height: 64px
- Background: linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)
- Color: #000000
- Font-size: 0.875rem
- Font-weight: 700
- Text-transform: uppercase
- Letter-spacing: 0.08em
- Border-radius: 8px
- Border: none
- Hover: Transform translateY(-3px), box-shadow increase
- Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Box-shadow: 0 4px 30px rgba(212, 175, 55, 0.3)

**Countdown Timer:**
- Display: flex
- Gap: 1.5rem
- Justify-content: center
- Margin: 3rem auto

**Timer Unit Style:**
- Background: linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)
- Border: 1px solid rgba(212, 175, 55, 0.2)
- Border-radius: 12px
- Padding: 1.25rem 1.5rem
- Min-width: 80px
- Position: relative
- Overflow: hidden

**Timer Number:**
- Font-size: 2.25rem
- Font-weight: 800
- Color: #D4AF37
- Font-variant-numeric: tabular-nums
- Line-height: 1

**Timer Label:**
- Font-size: 0.625rem
- Text-transform: uppercase
- Letter-spacing: 0.15em
- Color: rgba(255, 255, 255, 0.4)
- Margin-top: 0.75rem

---

## 🖼️ SEÇÃO 2: PROBLEMA

### Especificações Problema

**Background:** #000000 + `.carnaval-glow` (continue)

**Container:** Max-width 900px, centered

**Section Title:**
- Font-size: clamp(2rem, 5vw, 3rem)
- Font-weight: 700
- Color: #FFFFFF
- Text-align: center
- Margin-bottom: 3rem

**Body Paragraphs:**
- Font-size: 1.125rem
- Line-height: 1.8
- Color: rgba(255, 255, 255, 0.7)
- Margin-bottom: 1.5rem

**Problem Cards (Grid):**
- Background: linear-gradient(180deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)
- Border: 1px solid rgba(212, 175, 55, 0.1)
- Border-radius: 16px
- Padding: 2rem
- Hover: border-color rgba(212, 175, 55, 0.3), translateY(-4px)

---

## 🖼️ SEÇÃO 3: EPIPHANY BRIDGE (HISTÓRIA)

### Especificações Epiphany Bridge

**Background:** #000000

**Section Title:**
- Font-size: clamp(2rem, 5vw, 3rem)
- Font-weight: 700
- Color: #D4AF37
- Text-align: center
- Margin-bottom: 3rem

**Story Text:**
- Font-size: 1.125rem
- Line-height: 1.8
- Color: rgba(255, 255, 255, 0.7)
- Font-family: Georgia (serif)
- Max-width: 700px

**Highlight Quote:**
- Font-size: 1.5rem
- Font-weight: 700
- Color: #D4AF37
- Font-style: italic
- Border-left: 4px solid #D4AF37
- Padding-left: 1.5rem
- Margin: 2rem 0

---

## 🖼️ SEÇÃO 4: SOLUÇÃO (4 DIAS)

### Especificações Solução

**Background:** #0A0A0A

**Badge:**
- Background: rgba(39, 174, 96, 0.15)
- Color: #27AE60
- Padding: 0.5rem 1rem
- Border-radius: 100px
- Font-size: 0.75rem
- Font-weight: 600
- Text-transform: uppercase
- Letter-spacing: 0.15em
- Display: inline-flex
- Align-items: center
- Gap: 0.5rem

**Day Cards:**
- Background: linear-gradient(180deg, #1A1A1A 0%, #0A0A0A 100%)
- Border: 1px solid rgba(255, 255, 255, 0.06)
- Border-radius: 20px
- Padding: 2.5rem 2rem
- Height: 100%
- Position: relative
- Overflow: hidden
- Hover: border-color rgba(212, 175, 55, 0.25)

**Day Number (Watermark):**
- Position: absolute
- Top: 1rem
- Right: 1.5rem
- Font-size: 4rem
- Font-weight: 900
- Color: rgba(255, 255, 255, 0.03)
- Line-height: 1

**Day Icon Container:**
- Width: 56px
- Height: 56px
- Display: flex
- Align-items: center
- Justify-content: center
- Background: rgba(212, 175, 55, 0.1)
- Border-radius: 12px
- Font-size: 1.5rem
- Margin-bottom: 1.5rem

**Day Title:**
- Font-size: 1.5rem
- Font-weight: 700
- Color: #FFFFFF
- Margin-bottom: 1rem

**Day Bullets:**
- Font-size: 0.9375rem
- Color: rgba(255, 255, 255, 0.6)
- Line-height: 1.6
- Each bullet: checkmark #27AE60

---

## 🖼️ SEÇÃO 5: ENTREGÁVEIS E BÔNUS

### Especificações Entregáveis

**Background:** #000000

**Cards Grid:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 1.5rem

**Entregável Card:**
- Background: linear-gradient(180deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)
- Border: 1px solid rgba(212, 175, 55, 0.1)
- Border-radius: 16px
- Padding: 2rem
- Position: relative
- Top border: 1px gradient transparent to gold to transparent

**Card Icon:**
- Font-size: 2rem
- Margin-bottom: 1rem

**Card Title:**
- Font-size: 1.25rem
- Font-weight: 700
- Color: #FFFFFF
- Margin-bottom: 1rem

**Card List:**
- Font-size: 0.875rem
- Color: rgba(255, 255, 255, 0.7)
- Line-height: 2

**Checkmark Icon:** ✓ - #27AE60

---

## 🖼️ SEÇÃO 6: QUEM VAI ENSINAR (FOUNDERS)

### Especificações Founders Section

**Background:** #0A0A0A

**Section Label:**
- Font-size: 0.75rem
- Font-weight: 600
- Text-transform: uppercase
- Letter-spacing: 0.15em
- Color: #D4AF37
- Text-align: center
- Margin-bottom: 1rem

**Section Title:**
- Font-size: clamp(1.75rem, 4vw, 2.5rem)
- Font-weight: 700
- Color: #FFFFFF
- Text-align: center
- Margin-bottom: 1rem

**Section Subtitle:**
- Font-size: 1.125rem (desktop), 1rem (mobile)
- Line-height: 1.7
- Color: rgba(255, 255, 255, 0.7)
- Text-align: center
- Max-width: 800px
- Margin: 0 auto 3rem

**Founders Grid:**
- Display: grid
- Grid-template-columns: repeat(3, 1fr)
- Gap: 2rem
- Margin-bottom: 3rem
- Mobile: 1 column

**Founder Card:**
- Background: linear-gradient(180deg, rgba(26, 26, 26, 0.8) 0%, rgba(10, 10, 10, 0.9) 100%)
- Border: 1px solid rgba(212, 175, 55, 0.15)
- Border-radius: 20px
- Padding: 2rem
- Text-align: center
- Transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- Hover: border-color rgba(212, 175, 55, 0.35), translateY(-4px)

**Founder Image Wrapper:**
- Position: relative
- Display: inline-block
- Margin-bottom: 1.5rem

**Founder Image:**
- Width: 150px
- Height: 150px
- Border-radius: 50%
- Object-fit: cover
- Border: 3px solid rgba(212, 175, 55, 0.3)

**Founder Badge:**
- Position: absolute
- Bottom: -8px
- Left: 50%
- Transform: translateX(-50%)
- Background: rgba(212, 175, 55, 0.2)
- Border: 1px solid rgba(212, 175, 55, 0.3)
- Color: #D4AF37
- Font-size: 0.65rem
- Font-weight: 700
- Text-transform: uppercase
- Letter-spacing: 0.1em
- Padding: 0.25rem 0.75rem
- Border-radius: 100px
- White-space: nowrap

**Founder Name:**
- Font-size: 1.5rem
- Font-weight: 700
- Color: #FFFFFF
- Margin-bottom: 0.25rem

**Founder Credential:**
- Font-size: 0.875rem
- Color: rgba(212, 175, 55, 0.8)
- Margin-bottom: 1.5rem

**Founder Highlights List:**
- List-style: none
- Text-align: left
- Padding: 0

**Founder Highlights Item:**
- Font-size: 0.875rem
- Color: rgba(255, 255, 255, 0.7)
- Padding: 0.5rem 0
- Line-height: 1.5
- Bullet: ✦ (diamante dourado)

**Founders CTA Box:**
- Text-align: center
- Max-width: 700px
- Margin: 0 auto
- Padding: 2rem
- Background: rgba(212, 175, 55, 0.05)
- Border: 1px solid rgba(212, 175, 55, 0.15)
- Border-radius: 16px

**Founders CTA Text:**
- Font-size: 1.125rem (desktop), 1rem (mobile)
- Color: rgba(255, 255, 255, 0.8)
- Line-height: 1.7

### Imagens dos Fundadores

| Arquivo | Fundador | Formato | Dimensões |
|---------|----------|---------|-----------|
| `davi.png` | Davi | PNG | 400x400px |
| `sandro.png` | Sandro | PNG | 400x400px |
| `pedro.png` | Pedro | PNG | 400x400px |

**Estrutura de pastas:**
```
/public/
  └── images/
      └── founders/
          ├── davi.png
          ├── sandro.png
          └── pedro.png
```

### Conteúdo dos Cards

**DAVI - Criador da Metodologia**
- +2.000 conteúdos produzidos
- Criou o framework que gerou R$ 1M em vendas orgânicas
- Desenvolveu o "Manual da Viralização" usado por grandes marcas
- Trabalhou com empresas como Empiricus
- Especialista em transformar autoridade offline em digital

**SANDRO - Especialista em Estrutura**
- +20 empresas escaladas
- Escalou +20 empresas de zero a milhões
- Especialista em estrutura de operação de escala
- Transformou bases desengajadas em vendas consistentes
- Domina a arte de fazer muito conteúdo com qualidade

**PEDRO - Especialista em Operação**
- Operação & Escala
- Responsável por fazer a metodologia funcionar na prática
- Especialista em transformar estratégia em execução
- Gerencia operação de múltiplos perfis em escala
- Garante que o aluno saia do retiro com o plano aplicável

---

## 🖼️ SEÇÃO 7: FAQ

### Especificações FAQ

**Background:** #1A1A1A

**Container:** Max-width 800px

**FAQ Item:**
- Border-bottom: 1px solid rgba(255, 255, 255, 0.08)
- No background on item itself

**FAQ Question:**
- Padding: 1.75rem 0
- Font-size: 1.125rem
- Font-weight: 600
- Color: #FFFFFF
- Cursor: pointer
- Display: flex
- Justify-content: space-between
- Align-items: center
- Background: none
- Border: none
- Hover: color #D4AF37

**FAQ Icon:**
- Width: 28px
- Height: 28px
- Display: flex
- Background: rgba(212, 175, 55, 0.1)
- Border-radius: 50%
- Transition: all 0.3s

**FAQ Answer (expanded):**
- Max-height: 0
- Overflow: hidden
- Transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- Padding-bottom: 0

**FAQ Answer.open:**
- Max-height: 300px
- Padding-bottom: 1.75rem
- Font-size: 1rem
- Color: rgba(255, 255, 255, 0.7)

---

## 🖼️ SEÇÃO 8: ESCASSEZ FINAL

### Especificações Escassez

**Background:** Gradient - linear-gradient(180deg, #000 0%, #1A0A0A 50%, #000 100%)
**::before overlay:** radial-gradient(ellipse 80% 50% at 50% 0%, rgba(231, 76, 60, 0.05) 0%, transparent 50%)

**Title:**
- Font-size: clamp(1.75rem, 4vw, 2.5rem)
- Font-weight: 700
- Color: #E74C3C
- Text-align: center
- Text-transform: uppercase

**Copy Text:**
- Font-size: 1rem
- Color: rgba(255, 255, 255, 0.7)
- Max-width: 600px
- Text-align: center
- Margin: 2rem auto

---

## 🖼️ SEÇÃO 9: CTA FINAL

### Especificações CTA Final

**Background:** #000000

**Title:**
- Font-size: clamp(2rem, 5vw, 3rem)
- Font-weight: 700
- Color: #FFFFFF
- Text-align: center

**CTA Button (Large):**
- Width: 100% max 400px
- Animation: pulse-glow 3s ease-in-out infinite

**Pulse Animation:**
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 4px 30px rgba(212, 175, 55, 0.3); }
  50% { box-shadow: 0 8px 50px rgba(212, 175, 55, 0.5); }
}
```

---

## 📱 FOOTER

### Especificações Footer

**Background:** #000000
**Border-top:** 1px solid rgba(255, 255, 255, 0.06)
**Padding:** 4rem 0 3rem

**Copyright:**
- Font-size: 0.875rem
- Color: rgba(255, 255, 255, 0.4)
- Text-align: center

**Links:**
- Font-size: 0.875rem
- Color: rgba(255, 255, 255, 0.5)
- Text-decoration: none
- Hover: Color #D4AF37

---

## 📱 RESPONSIVIDADE

### Mobile Adjustments (< 768px)

1. **Hero:**
   - H1: clamp(2.5rem, 8vw, 5rem) - responsive
   - Section padding: 6rem 1.5rem 4rem
   - Stack timer units if needed

2. **Day Cards:**
   - Single column
   - Reduce padding to 2rem
   - Stack vertically

3. **Testimonials:**
   - Full width cards
   - Reduce padding to 2rem

4. **CTA:**
   - Full width (100%)

### Tablet Adjustments (768px - 1024px)

1. **Hero:** Maintain responsive H1
2. **Day Cards:** 2x2 grid
3. **Testimonials:** Single column, centered

---

## 🎬 ANIMAÇÕES

### CSS Keyframes Defined

**Float (for icons/badges):**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

**Confetti Fall:**
```css
@keyframes confetti-fall {
  0% { transform: translateY(-100vh) rotate(0deg); opacity: 0; }
  10% { opacity: 0.4; }
  90% { opacity: 0.4; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
```

**Pulse Glow:**
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 4px 30px rgba(212, 175, 55, 0.3); }
  50% { box-shadow: 0 8px 50px rgba(212, 175, 55, 0.5); }
}
```

### Transitions

**Buttons:**
- Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Hover: translateY(-3px)

**Cards:**
- Transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- Hover: translateY(-4px), border-color change

**FAQ:**
- Transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)

---

## ♿ ACESSIBILIDADE

### WCAG 2.1 AA Compliance

1. **Contrast:**
   - Text on background: min 4.5:1
   - Large text: min 3:1
   - UI components: min 3:1

2. **Focus States:**
   - Outline: 2px solid #D4AF37
   - Offset: 2px

3. **Semantic HTML:**
   - proper heading hierarchy
   - landmark regions
   - aria-labels on interactive elements

4. **Keyboard Navigation:**
   - All interactive elements accessible
   - Logical tab order
   - Skip to content link

---

## 📦 ASSETS REQUISITOS

### Images
```
- Hero background: Optional, use AI prompt above
- Testimonial photos: 200x200px, PNG/JPG - use AI prompts
- Certificate preview: 800x600px, PNG - use AI prompt
- Icons: SVG format, 24px, 32px, 48px - use AI prompts
```

### Icons (emoji fallback)
```
- Checkmark: ✓
- Arrow: →
- Lock: 🔒
- Fire: 🔥
- Gift: 🎁
- Trophy: 🏆
- Calendar: 📅
- WhatsApp: 💬
- Email: 📧
```

### Fonts
```
- Inter: https://fonts.google.com/specimen/Inter
- Or use system fonts for performance (SF Pro Display)
```

---

## 🚀 PERFORMANCE

### Core Web Vitals - Google PageSpeed Targets

| Métrica | Bom (Verde) | Precisa Melhorar (Amarelo) | Ruim (Vermelho) |
|---------|-------------|---------------------------|-----------------|
| **LCP** | < 2.5s | 2.5s - 4s | > 4s |
| **FID** | < 100ms | 100ms - 300ms | > 300ms |
| **CLS** | < 0.1 | 0.1 - 0.25 | > 0.25 |
| **FCP** | < 1.8s | 1.8s - 3s | > 3s |
| **TBT** | < 200ms | 200ms - 600ms | > 600ms |
| **Speed Index** | < 3.4s | 3.4s - 5.8s | > 5.8s |

### Additional Targets

- **Page Size:** < 1MB (ideal), < 2MB (aceitável)
- **Load Time (3G):** < 5s
- **Load Time (4G):** < 3s
- **Time to Interactive (TTI):** < 3.8s
- **Total Blocking Time (TBT):** < 200ms

### Best Practices Summary

- Lazy load images below fold
- WebP format with AVIF fallback
- Minify CSS/JS
- Inline critical CSS for above-fold content
- Use system fonts where possible (no web font request)
- Defer non-critical JS
- Enable compression (brotli preferred, gzip fallback)
- Preconnect to external origins
- Use native lazy loading (loading="lazy")
- Minimize main thread work
- Reduce JavaScript execution time
- Minimize layout shifts

---

## ⚡ PAGESPEED OPTIMIZATION - IMPLEMENTAÇÃO DETALHADA

### 1. Otimização de Imagens

#### Formatos e Compressão
```
Format priority: AVIF → WebP → JPEG/PNG fallback

Max file sizes per image type:
- Hero images: < 200KB (WebP), < 300KB (fallback)
- Above-fold images: < 100KB
- Below-fold images: < 50KB
- Icons/illustrations: Use SVG (< 10KB)
```

#### Responsive Images com srcset
```html
<!-- Exemplo de implementação -->
<img
  src="/hero-image-800.webp"
  srcset="
    /hero-image-400.webp 400w,
    /hero-image-800.webp 800w,
    /hero-image-1200.webp 1200w,
    /hero-image-1600.webp 1600w
  "
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  width="1600"
  height="900"
  loading="eager"
  decoding="sync"
  fetchpriority="high"
  alt="..."
>
```

#### Lazy Loading nativo
```html
<!-- Imagens abaixo do fold -->
<img
  src="/image.webp"
  loading="lazy"
  decoding="async"
  width="800"
  height="600"
  alt="..."
>
```

### 2. Estratégia de Fontes

#### System Fonts (RECOMENDADO - Zero Request)
```css
/* Sem requests de fonte web */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
```

#### Se usar Web Fonts
```html
<!-- Pré-conectar ao Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Font display para evitar FOIT/FOUT -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

<!-- CSS com font-display -->
@font-face {
  font-family: 'Inter';
  font-display: swap; /* ou 'optional' para menor impacto */
  src: url('/fonts/inter.woff2') format('woff2');
}
```

### 3. Otimização CSS

#### Critical CSS Inline
```html
<!-- CSS crítico inline para above-fold -->
<style>
  /* Above-fold styles only - ~5-10KB max */
  body { background: #000; color: #fff; }
  .hero { min-height: 100vh; }
  /* ... */
</style>

<!-- CSS completo carregado assincronamente -->
<link rel="preload" href="/globals.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

#### Reduzir CSS não utilizado
```css
/* Evite estilos não usados */
/* PurgeCSS/Tailwind purge ou CSS manual minificado */
```

### 4. Otimização JavaScript

#### Defer JS não crítico
```html
<!-- Não usar defer/emergency no LCP -->
<script defer src="/countdown.js"></script>
<script defer src="/faq.js"></script>

<!-- Analytics sempre com defer -->
<script defer src="https://www.googletagmanager.com/gtag/js?id=G-XXX"></script>
```

#### Reduzir JavaScript principal
```javascript
// Minify todos os JS
// Code splitting para routes
// Dynamic imports para componentes pesados

const CountdownTimer = dynamic(() => import('./components/CountdownTimer'), {
  loading: () => <div>Loading...</div>,
});
```

### 5. Preconnect e DNS Prefetch
```html
<!-- Preconnect para origens externas -->
<link rel="preconnect" href="https://www.googletagmanager.com">
<link rel="preconnect" href="https://www.google-analytics.com">

<!-- DNS prefetch para domínios de terceiros -->
<link rel="dns-prefetch" href="https://stats.g.doubleclick.net">
```

### 6. Otimizações Específicas do Carnaval

#### Confetti Animation - Versão Otimizada
```javascript
// REDUZIR número de elementos para melhor performance
// Antes: 50 confetti elements
// Depois: 15-20 confetti elements

// Usar requestAnimationFrame em vez de setInterval
// Implementar intersection observer para animar apenas quando visível

// Exemplo otimizado:
const confettiContainer = document.querySelector('.confetti-container');
const CONFETTI_COUNT = 15; // Reduzido de 50

// Criar confetti apenas após página carregada
window.addEventListener('load', () => {
  createConfetti();
});

// Parar animação quando fora de viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startConfettiAnimation();
    } else {
      stopConfettiAnimation();
    }
  });
});
```

#### Glow Effects - Otimizado
```css
/* Usar will-change para melhorar performance de paint */
.carnaval-glow {
  position: fixed;
  will-change: transform; /* Opcional - usar com cautela */
  contain: layout style paint; /* Melhor para isolamento */
  /* ... */
}
```

---

## 📏 CLS PREVENTION - Prevenção de Layout Shift

### 1. Sempre Definir Dimensões de Imagem
```html
<!-- ❌ ERRADO - causa CLS -->
<img src="image.webp" alt="...">

<!-- ✅ CORRETO -->
<img src="image.webp" width="800" height="600" alt="...">
```

### 2. Reservar Espaço para Conteúdo Dinâmico
```css
/* Countdown timer - reservar espaço */
.countdown {
  display: flex;
  gap: 1.5rem;
  min-height: 120px; /* Previne shift quando carrega */
  justify-content: center;
}

/* FAQ - reservar espaço antes de expandir */
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.faq-answer.open {
  max-height: 300px; /* Altura máxima fixa */
}
```

### 3. Font Display Strategy
```css
/* Usar font-display: swap ou optional */
@font-face {
  font-family: 'Inter';
  font-display: swap; /* Permite texto visível imediatamente */
}
```

### 4. Espaço para Anúncios/Widgets
```css
/* Se usar widgets de terceiros, reservar espaço */
.widget-container {
  min-height: 250px;
  width: 100%;
}
```

### 5. Skeleton Loading para Conteúdo Assíncrono
```html
<!-- Mostrar skeleton enquanto carrega -->
<div class="skeleton" style="height: 200px; width: 100%;"></div>
```

---

## 🎯 PERFORMANCE BUDGETS

### Orçamento Máximo por Tipo de Recurso

| Recurso | Mobile | Desktop | Prioridade |
|---------|--------|---------|------------|
| **JavaScript Total** | < 150KB | < 200KB | Alta |
| **CSS Total** | < 50KB | < 75KB | Alta |
| **HTML** | < 15KB | < 15KB | Média |
| **Imagens Above-Fold** | < 300KB | < 400KB | Alta |
| **Imagens Below-Fold** | < 500KB | < 800KB | Média |
| **Fontes** | < 50KB | < 50KB | Média |
| **Total Page Weight** | < 1MB | < 1.5MB | Alta |

### Orçamento de Execução

| Métrica | Limite Máximo |
|---------|---------------|
| Blocking Time | < 200ms |
| Script Evaluation | < 500ms |
| Scripting Time | < 1s |
| Layout Time | < 500ms |
| Paint Time | < 500ms |

### Orçamento por Terceiro

| Terceiro | Limite |
|----------|-------|
| Google Analytics | < 40KB |
| Hotjar/Clarity | < 50KB ou remover |
| Outros trackers | < 30KB total |

---

## 🔍 PAGESPEED CHECKLIST - IMPLEMENTAÇÃO

### Imagens
- [ ] Todas as imagens têm width e height explícitos
- [ ] Imagens above-fold em WebP com fallback JPEG
- [ ] Imagens below-fold com loading="lazy"
- [ ] Todas as imagens otimizadas (compressão adequada)
- [ ] Imagens responsivas com srcset/sizes
- [ ] Imagens decorativas com alt="" ou aria-hidden="true"

### Fontes
- [ ] Usar system fonts quando possível (RECOMENDADO)
- [ ] Se usar web fonts: font-display: swap
- [ ] Preconnect para origens de fontes
- [ ] Apenas 1-2 famílias de fonte
- [ ] Apenas weights necessários (400, 600, 700)

### CSS
- [ ] CSS crítico inline (< 10KB)
- [ ] CSS não crítico carregado assincronamente
- [ ] CSS minificado
- [ ] Remover CSS não utilizado
- [ ] Evitar @import no CSS

### JavaScript
- [ ] JS não crítico com defer
- [ ] JS minificado
- [ ] Analytics com defer
- [ ] Reduzir JavaScript principal
- [ ] Code splitting implementado
- [ ] Evitar inline handlers (onclick="...")

### Server/CDN
- [ ] Brotli compression habilitado
- [ ] Gzip fallback habilitado
- [ ] Cache headers configurados (1 ano para assets estáticos)
- [ ] CDN para assets estáticos
- [ ] HTTP/2 ou HTTP/3 habilitado

### Pré-carregamento
- [ ] Preconnect para origens externas críticas
- [ ] Preload para recursos críticos (CSS acima do fold)
- [ ] Fetchpriority para recursos mais importantes

### Animações (Carnaval Effects)
- [ ] Confetti reduzido para 15-20 elementos
- [ ] Intersection Observer para animações fora de viewport
- [ ] requestAnimationFrame em vez de setInterval
- [ ] Animacoes paradas quando elemento não visível
- [ ] will-change usado com cautela
- [ ] contain: layout style paint em elementos fixos

### Mobile Específico
- [ ] Texto legível sem zoom (16px base)
- [ ] Touch targets adequados (48x48px mínimo)
- [ ] Viewport configurado corretamente
- [ ] Sem horizontal scroll
- [ ] Fast tap/remover delay de 300ms

### Third-Party
- [ ] Google Analytics com defer
- [ ] Remover scripts não essenciais
- [ ] Usar tag management quando apropriado
- [ ] Scripts de terceiros carregados assincronamente

---

## 🔧 DESENVOLVIMENTO

### Tech Stack (Implementado)

```
- Framework: Next.js 16.1.6 (App Router)
- Language: TypeScript
- Styling: Pure CSS (globals.css) - no Tailwind utilities
- Components: React with 'use client' directive
```

### Components Implemented

1. ✅ Hero (with countdown)
2. ✅ Problem Section
3. ✅ Epiphany Bridge (Story)
4. ✅ Solution Section (4 day cards)
5. ✅ Deliverables Section
6. ✅ Founders (quem vai ensinar)
7. ✅ FAQ (accordion)
8. ✅ Scarcity Section
9. ✅ Final CTA
10. ✅ Footer

### Pages Implemented

1. ✅ `/inscricao` - Registration page
2. ✅ `/obrigado` - Thank you page

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### Visual Identity
- [x] Carnaval glow background effect
- [x] Confetti fall animation (subtle, golden)
- [x] Window glow effects
- [x] Color palette implemented
- [x] Typography system

### Sections
- [x] Hero with countdown
- [x] Problem/Agitation
- [x] Epiphany Bridge story
- [x] 4 Day cards
- [x] Deliverables/Bonus
- [x] Founders (quem vai ensinar)
- [x] FAQ accordion
- [x] Scarcity section
- [x] Final CTA
- [x] Footer

### Technical
- [x] Responsive design
- [x] Accessibility (ARIA, contrast)
- [x] Performance optimization
- [x] Smooth animations
- [x] Cross-browser compatibility

### PageSpeed Optimization (PENDENTE)
- [ ] Confetti reduzido para 15-20 elementos
- [ ] Imagens com width/height explícitos
- [ ] WebP format com fallback
- [ ] Lazy loading para imagens below-fold
- [ ] System fonts (sem web font requests)
- [ ] CSS minificado
- [ ] JS com defer
- [ ] Preconnect para origens externas
- [ ] Intersection Observer para animações
- [ ] Compression habilitada (brotli/gzip)
- [ ] Cache headers configurados

---

*v2.4 - Substituída seção de depoimentos por perfis dos fundadores (Davi, Sandro, Pedro)*
*v2.3 - Atualizado com conceito "carnaval fora, foco dentro" e otimização PageSpeed Insights*
*Prompts de imagem movidos para `04_PROMPTS_IMAGENS.md`*
*Seções novas: PAGESPEED OPTIMIZATION, CLS PREVENTION, PERFORMANCE BUDGETS, PAGESPEED CHECKLIST*
*Ícones: usar bibliotecas (Lucide, Heroicons, Phosphor) ao invés de IA*
*Meta: 90+ score no Google PageSpeed Insights (Mobile e Desktop)*
*Imagens: armazenar como .png, sistema converte para .webp automaticamente*
