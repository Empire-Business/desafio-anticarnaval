# 🎨 DESIGN DESCRIPTION - PÁGINA DE INSCRIÇÃO
## Retiro Anti-Carnaval Acelerador de Audiência

> **Versão:** 1.0
> **Objetivo:** Descrição detalhada para IA criar o design completo
> **Formato:** Markdown com especificações completas

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

## 🎨 PALETA DE CORES

| Cor Nome | Hex | RGB | Uso |
|----------|-----|-----|-----|
| Black | #000000 | 0,0,0 | Fundo principal |
| White | #FFFFFF | 255,255,255 | Texto base |
| Gold | #D4AF37 | 212,175,55 | CTA, destaques, bordas |
| Dark Gray | #1A1A1A | 26,26,26 | Fundo secundário |
| Light Gray | #F5F5F5 | 245,245,245 | Fundos de seções |
| Gold Light | #F4D03F | 244,208,63 | Hover states |
| Red Accent | #E74C3C | 231,76,60 | Urgência |
| Green Success | #27AE60 | 39,174,96 | Checkmarks, sucesso |

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

**Background:** #000000 (solid black)

**Headline:**
- Font-size: 64px (desktop), 40px (mobile)
- Font-weight: 700
- Color: #FFFFFF
- Text-transform: uppercase
- Letter-spacing: -1px
- Max-width: 900px
- Text-align: center

**Subheadline:**
- Font-size: 24px (desktop), 18px (mobile)
- Font-weight: 400
- Color: #CCCCCC
- Max-width: 700px
- Text-align: center
- Margin-top: 24px

**CTA Button:**
- Width: 320px (desktop), 100% (mobile)
- Height: 64px
- Background: #D4AF37
- Color: #000000
- Font-size: 16px
- Font-weight: 700
- Text-transform: uppercase
- Border-radius: 8px
- Border: 2px solid #D4AF37
- Hover: Background #F4D03F
- Transition: all 0.3s ease
- Box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3)

**Sub CTA:**
- Font-size: 16px
- Color: #999999
- Margin-top: 16px
- Text-align: center

**Countdown Timer:**
- Display: flex
- Gap: 16px
- Justify-content: center
- Margin-top: 40px

**Timer Unit Style:**
- Background: #1A1A1A
- Border: 1px solid #333333
- Border-radius: 8px
- Padding: 16px 20px
- Min-width: 80px

**Timer Number:**
- Font-size: 32px
- Font-weight: 700
- Color: #D4AF37

**Timer Label:**
- Font-size: 12px
- Color: #999999
- Text-transform: uppercase

---

## 🖼️ SEÇÃO 2: PROBLEMA

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│             [Section Title - Centered]                    │
│                                                            │
│   ┌────────────────────────────────────────────────┐      │
│   │                                                │      │
│   │   [Body Text - 2 columns on desktop]          │      │
│   │                                                │      │
│   └────────────────────────────────────────────────┘      │
│                                                            │
│              [Bullet Points with X icons]                 │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações Problema

**Background:** #1A1A1A

**Container:** Max-width 900px, centered

**Section Title:**
- Font-size: 40px
- Font-weight: 700
- Color: #FFFFFF
- Text-align: center
- Margin-bottom: 40px

**Body Paragraphs:**
- Font-size: 18px
- Line-height: 1.8
- Color: #CCCCCC
- Margin-bottom: 24px

**Bullet Points (styled):**
- Icon: ❌ (24px)
- Text: 16px, color #999999
- Padding-left: 40px
- Margin-bottom: 16px

---

## 🖼️ SEÇÃO 3: EPIPHANY BRIDGE (HISTÓRIA)

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [Section Title - Centered, Gold]                         │
│                                                            │
│   ┌─────────────────┐      ┌─────────────────┐            │
│   │                 │      │                 │            │
│   │  [Image/        │      │  [Story         │            │
│   │   Illustration] │      │   Text]         │            │
│   │                 │      │                 │            │
│   └─────────────────┘      └─────────────────┘            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações Epiphany Bridge

**Background:** #000000

**Section Title:**
- Font-size: 36px
- Font-weight: 700
- Color: #D4AF37
- Text-align: center
- Margin-bottom: 48px

**Content Grid (Desktop):**
- 2 columns: 1fr 1fr
- Gap: 60px

**Image/Ilustração:**
- Width: 100%
- Border-radius: 16px
- Box-shadow: 0 20px 60px rgba(212, 175, 55, 0.1)

**Story Text:**
- Font-size: 18px
- Line-height: 1.8
- Color: #CCCCCC
- Font-family: Georgia (serif) para feeling de história

**Highlight Quote:**
- Font-size: 24px
- Font-weight: 700
- Color: #D4AF37
- Font-style: italic
- Border-left: 4px solid #D4AF37
- Padding-left: 24px
- Margin: 32px 0

---

## 🖼️ SEÇÃO 4: SOLUÇÃO (O QUE É)

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│           [Section Title - Centered]                      │
│                                                            │
│                    [Badge "GRÁTITO"]                      │
│                                                            │
│              [Description Text]                           │
│                                                            │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│   │   DIA 1  │ │   DIA 2  │ │   DIA 3  │ │   DIA 4  │    │
│   │          │ │          │ │          │ │          │    │
│   │ [Icon+   │ │ [Icon+   │ │ [Icon+   │ │ [Icon+   │    │
│   │  Title]  │ │  Title]  │ │  Title]  │ │  Title]  │    │
│   │          │ │          │ │          │ │          │    │
│   │  [Bullets│ │  [Bullets│ │  [Bullets│ │  [Bullets│    │
│   │   list]  │ │   list]  │ │   list]  │ │   list]  │    │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘    │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações Solução

**Background:** #0A0A0A (quasi black)

**Section Title:**
- Font-size: 40px
- Color: #FFFFFF
- Text-align: center
- Margin-bottom: 24px

**Badge:**
- Background: #27AE60
- Color: #FFFFFF
- Padding: 8px 24px
- Border-radius: 100px
- Font-size: 14px
- Font-weight: 600
- Text-transform: uppercase
- Display: inline-block
- Margin: 0 auto 32px

**Day Cards:**
- Background: #1A1A1A
- Border: 1px solid #333333
- Border-radius: 16px
- Padding: 32px
- Height: 100%
- Transition: transform 0.3s, border-color 0.3s
- Hover: Transform translateY(-4px), Border-color #D4AF37

**Day Number:**
- Font-size: 64px
- Font-weight: 900
- Color: rgba(255,255,255,0.05)
- Position: absolute
- Top: 0
- Right: 16px

**Day Icon:**
- Width: 48px
- Height: 48px
- Color: #D4AF37
- Margin-bottom: 16px

**Day Title:**
- Font-size: 20px
- Font-weight: 700
- Color: #FFFFFF
- Margin-bottom: 16px

**Day Bullets:**
- Font-size: 14px
- Color: #999999
- Line-height: 1.6
- Padding-left: 24px

---

## 🖼️ SEÇÃO 5: ENTREGÁVEIS E BÔNUS

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│           [Section Title - Centered]                      │
│                                                            │
│   ┌──────────────────┐  ┌──────────────────┐             │
│   │   📦 DIA 1-4     │  │   🎁 BÔNUS       │             │
│   │                  │  │                  │             │
│   │   [List items]   │  │   [List items]   │             │
│   │                  │  │                  │             │
│   └──────────────────┘  └──────────────────┘             │
│                                                            │
│   ┌──────────────────────────────────────────────┐       │
│   │         🏆 CERTIFICADO                         │       │
│   │   [Certificate preview graphic]              │       │
│   └──────────────────────────────────────────────┘       │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações Entregáveis

**Background:** #1A1A1A

**Cards Grid:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column
- Gap: 24px

**Entregável Card:**
- Background: #000000
- Border: 1px solid #D4AF37
- Border-radius: 12px
- Padding: 24px
- Position: relative
- Overflow: hidden

**Card Icon:**
- Font-size: 32px
- Margin-bottom: 16px

**Card Title:**
- Font-size: 20px
- Font-weight: 700
- Color: #FFFFFF
- Margin-bottom: 16px

**Card List:**
- Font-size: 14px
- Color: #CCCCCC
- Line-height: 2

**Checkmark Icon:** ✅ - #27AE60

---

## 🖼️ SEÇÃO 6: PROVA SOCIAL

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│           [Section Title - Centered]                      │
│                                                            │
│   ┌─────────────────────────────────────────────────┐     │
│   │  [Photo]                                       │     │
│   │                                                 │     │
│   │  "Testimonial quote..."                        │     │
│   │                                                 │     │
│   │  — NAME                                         │     │
│   │     Credencial                                 │     │
│   └─────────────────────────────────────────────────┘     │
│                                                            │
│         [Stats Bar - 3 columns]                          │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações Prova Social

**Background:** #0A0A0A

**Testimonial Card:**
- Background: #1A1A1A
- Border-radius: 16px
- Padding: 40px
- Max-width: 700px
- Center: horizontally
- Margin: 0 auto 40px

**Photo:**
- Width: 80px
- Height: 80px
- Border-radius: 50%
- Object-fit: cover
- Border: 3px solid #D4AF37
- Margin-bottom: 24px

**Quote:**
- Font-size: 20px
- Font-style: italic
- Color: #CCCCCC
- Line-height: 1.6
- Font-family: Georgia

**Quote Marks:** " " - #D4AF37, 48px, opacity 0.3

**Author Name:**
- Font-size: 18px
- Font-weight: 700
- Color: #FFFFFF
- Margin-top: 24px

**Author Credencial:**
- Font-size: 14px
- Color: #999999

**Stats Bar:**
- Display: flex
- Gap: 40px
- Justify-content: center
- Padding: 40px 0

**Stat Item:**
- Text-align: center

**Stat Number:**
- Font-size: 48px
- Font-weight: 900
- Color: #D4AF37

**Stat Label:**
- Font-size: 14px
- Color: #CCCCCC
- Text-transform: uppercase

---

## 🖼️ SEÇÃO 7: FAQ

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│           [Section Title - Centered]                      │
│                                                            │
│   ┌─────────────────────────────────────────────────┐     │
│   │  ❓ PERGUNTA                                    │     │
│   │   [Answer - expandable]                         │     │
│   └─────────────────────────────────────────────────┘     │
│                                                            │
│   [Repeat for each FAQ item]                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações FAQ

**Background:** #1A1A1A

**Container:** Max-width 800px

**FAQ Item:**
- Background: #000000
- Border: 1px solid #333333
- Border-radius: 8px
- Margin-bottom: 16px
- Overflow: hidden

**FAQ Question:**
- Padding: 20px 24px
- Font-size: 18px
- Font-weight: 600
- Color: #FFFFFF
- Cursor: pointer
- Display: flex
- Justify-content: space-between
- Align-items: center

**FAQ Icon:**
- Color: #D4AF37
- Transition: transform 0.3s

**FAQ Answer (expanded):**
- Padding: 0 24px 24px
- Font-size: 16px
- Color: #CCCCCC
- Line-height: 1.6
- Display: none (default)
- Animation: slideDown 0.3s ease

**FAQ Answer (active):**
- Display: block

---

## 🖼️ SEÇÃO 8: ESCASSEZ FINAL

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│         AS INSCRIÇÕES ENCERRAM EM:                        │
│                                                            │
│              [COUNTDOWN TIMER - Large]                    │
│                                                            │
│            [Escassez copy text]                           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações Escassez

**Background:** Gradient linear - #000000 to #1A1A1A

**Title:**
- Font-size: 28px
- Font-weight: 700
- Color: #E74C3C (red accent)
- Text-align: center
- Text-transform: uppercase

**Timer (Large):**
- Gap: 24px
- Timer Unit: 120px x 120px
- Timer Number: 56px
- Timer Label: 14px

**Copy Text:**
- Font-size: 16px
- Color: #CCCCCC
- Max-width: 600px
- Text-align: center
- Margin: 40px auto

---

## 🖼️ SEÇÃO 9: CTA FINAL

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│       PRONTO PARA RECUPERAR O COMEÇO DO SEU ANO?          │
│                                                            │
│            [Subheadline]                                  │
│                                                            │
│         [CTA BUTTON - Large]                              │
│                                                            │
│            [Garantia text]                                │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações CTA Final

**Background:** #000000

**Title:**
- Font-size: 36px
- Font-weight: 700
- Color: #FFFFFF
- Text-align: center

**Subheadline:**
- Font-size: 18px
- Color: #CCCCCC
- Text-align: center
- Margin: 24px 0 40px

**CTA Button (Large):**
- Width: 400px
- Height: 72px
- Font-size: 18px
- Animation: pulse 2s infinite

**Pulse Animation:**
```
@keyframes pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3); }
  50% { box-shadow: 0 4px 40px rgba(212, 175, 55, 0.6); }
}
```

**Garantia:**
- Font-size: 14px
- Color: #999999
- Text-align: center
- Margin-top: 24px

**Lock Icon:** 🔒 - 16px

---

## 📱 FOOTER

### Layout
```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│   © 2026 Acelerador de Audiência                           │
│                                                            │
│   [Links: Contato | Termos | Privacidade]                │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Especificações Footer

**Background:** #000000
**Border-top:** 1px solid #333333
**Padding:** 40px 0

**Copyright:**
- Font-size: 14px
- Color: #666666
- Text-align: center

**Links:**
- Font-size: 14px
- Color: #999999
- Text-decoration: none
- Hover: Color #D4AF37

---

## 📱 RESPONSIVIDADE

### Mobile Adjustments (< 768px)

1. **Hero:**
   - H1: 40px (2 lines max)
   - Reduce padding to 24px
   - Stack timer units

2. **Day Cards:**
   - Single column
   - Reduce padding to 24px
   - Stack vertically

3. **Testimonials:**
   - Full width cards
   - Reduce padding to 24px
   - Stack stats vertically

4. **CTA:**
   - Full width (100%)
   - Fixed bottom on scroll
   - Height: 56px

### Tablet Adjustments (768px - 1024px)

1. **Hero:** H1: 48px
2. **Day Cards:** 2x2 grid
3. **Testimonials:** Single column, centered
4. **Stats:** Wrap to 2 lines if needed

---

## 🎬 INTERAÇÕES E ANIMAÇÕES

### Scroll Animations

**Fade In Up:**
```
.trigger: opacity 0, transform translateY(40px)
.visible: opacity 1, transform translateY(0)
transition: all 0.6s ease
```

**Stagger Children:**
```
.child-1: delay 0ms
.child-2: delay 100ms
.child-3: delay 200ms
.child-4: delay 300ms
```

### Hover States

**Buttons:**
- Transform: translateY(-2px)
- Box-shadow: Increase
- Background: Lighten by 10%

**Cards:**
- Transform: translateY(-4px)
- Border-color: #D4AF37
- Box-shadow: 0 20px 40px rgba(0,0,0,0.4)

**Links:**
- Color: #D4AF37
- Underline: animate from left

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
- Hero background: Optional, 1920x1080px, PNG/JPG
- Testimonial photos: 200x200px, PNG/JPG
- Certificate preview: 800x600px, PNG
- Icons: SVG format, 24px, 32px, 48px
```

### Icons
```
- Checkmark: ✅ or custom SVG
- X mark: ❌ or custom SVG
- Arrow: → or custom SVG
- Question mark: ❓ or custom SVG
- Lock: 🔒 or custom SVG
- Fire: 🔥 or custom SVG
- Gift: 🎁 or custom SVG
- Trophy: 🏆 or custom SVG
```

### Fonts
```
- Inter: https://fonts.google.com/specimen/Inter
- Or use system fonts for performance
```

---

## 🚀 PERFORMANCE

### Optimization Targets

1. **LCP (Largest Contentful Paint):** < 2.5s
2. **FID (First Input Delay):** < 100ms
3. **CLS (Cumulative Layout Shift):** < 0.1
4. **Page Size:** < 2MB
5. **Load Time:** < 3s on 4G

### Best Practices

- Lazy load images below fold
- WebP format with fallback
- Minify CSS/JS
- Inline critical CSS
- Use system fonts where possible
- Defer non-critical JS
- Enable compression (gzip/brotli)

---

## 🔧 DESENVOLVIMENTO

### Tech Stack Suggestion

```
- Framework: Next.js / React
- Styling: Tailwind CSS / CSS Modules
- Forms: React Hook Form + Yup
- Analytics: Google Analytics 4
- Heatmaps: Hotjar / Clarity
```

### Components Needed

1. Hero (with countdown)
2. ProblemSection
3. StorySection (with image)
4. SolutionSection (day cards)
5. DeliverablesSection (bonus cards)
6. Testimonials (carousel or grid)
7. FAQ (accordion)
8. ScarcitySection
9. FinalCTA
10. Footer

---

*Esta especificação está completa e pronta para desenvolvimento.
Quaisquer dúvidas, consulte a equipe de design.*
