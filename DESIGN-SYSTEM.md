# Design System — Estilo "Empire Gold"

> Sistema de design para landing pages de alta conversão com estética premium, dark mode e detalhes dourados.

---

## 1. Filosofia do Design

### Estética Principal
- **Premium/Empire**: Estilo sofisticado, dark mode com acentos dourados
- **Minimalista mas com propósito**: Cada elemento tem função clara
- **Hierarquia forte**: Tipografia contrastante guia o olhar
- **Detalhes refinados**: Bordas com gradiente, efeitos sutis, transições elegantes

### Princípios
1. **Dark first**: Fundos escuros criam profundidade e destaque
2. **Gold como acento**: Dourado para CTAs, destaques e elementos premium
3. **Whitespace generoso**: Respiração entre seções
4. **Animações com propósito**: Revelação de conteúdo, feedback visual

---

## 2. Sistema de Cores

### Paleta Principal (Empire)

```css
:root {
  /* === CORES BASE === */

  /* Fundo principal - Quase preto */
  --empire-bg: #0a0a0b;

  /* Surface - Para seções alternadas */
  --empire-surface: #111113;

  /* Card - Para containers */
  --empire-card: #18181b;

  /* Border - Bordas sutis */
  --empire-border: #27272a;

  /* Muted - Texto secundário */
  --empire-muted: #71717a;

  /* Text - Texto principal */
  --empire-text: #fafafa;

  /* === CORES DE DESTAQUE (GOLD) === */

  /* Gold principal - CTAs, destaques */
  --empire-gold: #c9a962;

  /* Gold Light - Hover, highlights */
  --empire-goldLight: #e4d4a5;

  /* Gold Dark - Sombras, profundidade */
  --empire-goldDark: #9a7b3c;
}
```

### Tailwind Config

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        empire: {
          bg: '#0a0a0b',
          surface: '#111113',
          card: '#18181b',
          border: '#27272a',
          muted: '#71717a',
          text: '#fafafa',
          gold: '#c9a962',
          goldLight: '#e4d4a5',
          goldDark: '#9a7b3c',
        }
      }
    }
  }
}
```

### Uso das Cores

| Uso | Cor | Classe Tailwind |
|-----|-----|-----------------|
| Fundo da página | `#0a0a0b` | `bg-empire-bg` |
| Seções alternadas | `#111113` | `bg-empire-surface` |
| Cards e containers | `#18181b` | `bg-empire-card` |
| Bordas | `#27272a` | `border-empire-border` |
| Texto principal | `#fafafa` | `text-empire-text` |
| Texto secundário | `#71717a` | `text-empire-muted` |
| CTAs e destaques | `#c9a962` | `text-empire-gold` / `bg-empire-gold` |

---

## 3. Tipografia

### Fontes

```html
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet">
```

### Hierarquia Tipográfica

```css
/* Display / Headlines */
--font-display: 'Cormorant Garamond', serif;

/* Body / UI */
--font-body: 'DM Sans', sans-serif;
```

### Escalas de Tamanho

```css
/* Headlines - Cormorant Garamond */
h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 8vw, 5rem);    /* 40px - 80px */
  font-weight: 600;
  line-height: 1.1;
}

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.75rem, 5vw, 3rem);   /* 28px - 48px */
  font-weight: 500;
  line-height: 1.2;
}

h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.25rem, 3vw, 1.5rem); /* 20px - 24px */
  font-weight: 500;
  line-height: 1.3;
}

/* Body - DM Sans */
body {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(1rem, 2vw, 1.125rem);  /* 16px - 18px */
  font-weight: 400;
  line-height: 1.6;
}

/* Small text */
.text-small {
  font-size: 0.875rem;  /* 14px */
}

/* Labels / Tags */
.text-label {
  font-size: 0.75rem;   /* 12px */
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### Tailwind Config

```javascript
fontFamily: {
  display: ['Cormorant Garamond', 'serif'],
  body: ['DM Sans', 'sans-serif'],
}
```

---

## 4. Espaçamento

### Sistema de 8px

```css
:root {
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 0.75rem;  /* 12px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2rem;     /* 32px */
  --space-2xl: 3rem;    /* 48px */
  --space-3xl: 4rem;    /* 64px */
  --space-4xl: 6rem;    /* 96px */
  --space-5xl: 8rem;    /* 128px */
}
```

### Padrões de Seção

```css
/* Padding vertical de seções */
.section {
  padding-top: 6rem;     /* 96px - py-24 */
  padding-bottom: 6rem;
}

/* Mobile: padding menor */
@media (max-width: 768px) {
  .section {
    padding-top: 4rem;   /* 64px - py-16 */
    padding-bottom: 4rem;
  }
}

/* Containers */
.container {
  max-width: 72rem;      /* 1152px - max-w-6xl */
  padding-left: 1.5rem;  /* 24px - px-6 */
  padding-right: 1.5rem;
}

/* Larguras alternativas */
.container-narrow {
  max-width: 56rem;      /* 896px - max-w-4xl */
}

.container-wide {
  max-width: 80rem;      /* 1280px - max-w-7xl */
}
```

---

## 5. Componentes

### 5.1 Botão Premium (CTA Principal)

```css
.btn-premium {
  background: linear-gradient(135deg, #c9a962 0%, #e4d4a5 50%, #c9a962 100%);
  color: #0a0a0b;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 2px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.btn-premium:hover::before {
  left: 100%;
}

.btn-premium:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 40px rgba(201, 169, 98, 0.3);
}
```

```html
<a href="#cta" class="btn-premium inline-flex items-center gap-3 text-lg">
  QUERO SER REFERÊNCIA
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
</a>
```

### 5.2 Botão Secundário

```css
.btn-secondary {
  background: transparent;
  border: 1px solid #c9a962;
  color: #c9a962;
  padding: 1rem 2.5rem;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(201, 169, 98, 0.1);
  transform: translateY(-2px);
}
```

### 5.3 Cards

```css
/* Card base */
.card {
  background: #18181b;
  border: 1px solid #27272a;
  padding: 2rem;
  transition: all 0.4s ease;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  border-color: rgba(201, 169, 98, 0.3);
}

/* Card com borda dourada gradiente */
.card-gold-border {
  border: 1px solid transparent;
  background: linear-gradient(#18181b, #18181b) padding-box,
              linear-gradient(135deg, #c9a962, #e4d4a5, #c9a962) border-box;
}
```

### 5.4 Badges / Tags

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(201, 169, 98, 0.3);
  background: rgba(201, 169, 98, 0.05);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #c9a962;
}

/* Com indicador pulsante */
.badge-pulse::before {
  content: '';
  width: 0.5rem;
  height: 0.5rem;
  background: #c9a962;
  border-radius: 50%;
  animation: pulse 2s infinite;
}
```

```html
<div class="badge badge-pulse">
  <span class="w-2 h-2 bg-empire-gold rounded-full animate-pulse"></span>
  <span>Vagas Limitadas</span>
</div>
```

### 5.5 Stats / Números

```css
.stat-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  background: linear-gradient(135deg, #c9a962 0%, #e4d4a5 50%, #c9a962 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: #71717a;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### 5.6 FAQ Accordion

```css
.faq-item {
  border-bottom: 1px solid rgba(201, 169, 98, 0.1);
}

.faq-question {
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.faq-question:hover {
  color: #c9a962;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease;
  color: #71717a;
}

.faq-item.active .faq-answer {
  max-height: 500px;
  padding-bottom: 1.5rem;
}

.faq-item.active .faq-icon {
  transform: rotate(45deg);
}

.faq-icon {
  transition: transform 0.3s ease;
  color: #c9a962;
}
```

### 5.7 Logo Grid (Social Proof)

```css
.logo-item {
  filter: grayscale(50%) brightness(0.9);
  opacity: 0.85;
  transition: all 0.3s ease;
}

.logo-item:hover {
  filter: grayscale(0%) brightness(1);
  opacity: 1;
  transform: scale(1.05);
}
```

### 5.8 Timeline / Fases

```css
.phase-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem;
  background: linear-gradient(135deg, #c9a962 0%, #e4d4a5 50%, #c9a962 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.phase-badge {
  color: #c9a962;
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

---

## 6. Efeitos e Animações

### 6.1 Fade In Up (Entrada de elementos)

```css
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
// Scroll reveal com Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
```

### 6.2 Stagger Children (Sequencial)

```css
.stagger-children > * {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.stagger-children.visible > *:nth-child(1) { transition-delay: 0.1s; }
.stagger-children.visible > *:nth-child(2) { transition-delay: 0.2s; }
.stagger-children.visible > *:nth-child(3) { transition-delay: 0.3s; }
.stagger-children.visible > *:nth-child(4) { transition-delay: 0.4s; }
.stagger-children.visible > *:nth-child(5) { transition-delay: 0.5s; }
.stagger-children.visible > *:nth-child(6) { transition-delay: 0.6s; }

.stagger-children.visible > * {
  opacity: 1;
  transform: translateY(0);
}
```

### 6.3 Texto com Gradiente Dourado

```css
.text-gold-gradient {
  background: linear-gradient(135deg, #c9a962 0%, #e4d4a5 50%, #c9a962 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 6.4 Efeito Shine (Brilho em cards)

```css
.shine-effect {
  position: relative;
  overflow: hidden;
}

.shine-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.05),
    transparent
  );
  animation: shine 4s infinite;
}

@keyframes shine {
  0% { left: -75%; }
  100% { left: 125%; }
}
```

### 6.5 Pulse Ring (Botão CTA)

```css
.pulse-ring {
  position: relative;
}

.pulse-ring::before {
  content: '';
  position: absolute;
  inset: -4px;
  border: 2px solid #c9a962;
  border-radius: 2px;
  animation: pulse-ring 2s infinite;
}

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.1); opacity: 0; }
}
```

### 6.6 Grid Pattern (Background)

```css
.grid-pattern {
  background-image:
    linear-gradient(rgba(201, 169, 98, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(201, 169, 98, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

### 6.7 Divisor de Seção

```css
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.3), transparent);
}
```

---

## 7. Estrutura de Seções

### Hero Section

```html
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background -->
  <div class="hero-bg"></div>
  <div class="grid-pattern absolute inset-0 z-10"></div>

  <!-- Content -->
  <div class="relative z-20 max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center">
    <div class="fade-in-up">
      <!-- Badge -->
      <div class="badge badge-pulse mb-8">...</div>

      <!-- Headline -->
      <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6">
        <span class="text-gold-gradient">Palavra</span>
        <br>
        <span class="text-empire-text">Restante</span>
      </h1>

      <!-- Subheadline -->
      <p class="text-xl md:text-2xl text-empire-muted max-w-3xl mx-auto mb-6 font-light">
        Descrição da proposta de valor
      </p>

      <!-- Benefits -->
      <div class="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
        <!-- Check items -->
      </div>

      <!-- CTA -->
      <a href="#cta" class="btn-premium">CTA PRINCIPAL</a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
    <svg class="w-6 h-6 text-empire-gold">...</svg>
  </div>
</section>
```

### Social Proof Section

```html
<section class="py-20 bg-empire-surface border-y border-empire-border">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      <div class="text-center p-8 border-gold-gradient">
        <p class="stat-number">+30M</p>
        <p class="stat-label">métrica</p>
      </div>
      <!-- More stats -->
    </div>

    <!-- Logo Grid -->
    <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
      <img src="logo.png" class="logo-item h-32 w-auto object-contain">
      <!-- More logos -->
    </div>
  </div>
</section>
```

### Problem/Agitation Section

```html
<section id="problema" class="py-24 md:py-32 relative">
  <div class="grid-pattern absolute inset-0 opacity-50"></div>

  <div class="max-w-6xl mx-auto px-6 lg:px-8 relative">
    <div class="fade-in-up">
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-16">
        <p class="text-empire-gold text-sm tracking-widest uppercase mb-4">Label</p>
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
          Título com <span class="text-gold-gradient">destaque</span>
        </h2>
      </div>

      <!-- Text -->
      <div class="prose prose-lg prose-invert max-w-4xl mx-auto text-empire-muted mb-16 text-center">
        <p>Parágrafo de introdução...</p>
      </div>
    </div>

    <!-- Pain Points Cards -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
      <div class="card card-hover">
        <div class="w-12 h-12 rounded-lg bg-empire-gold/10 flex items-center justify-center mb-6">
          <svg class="w-6 h-6 text-empire-gold">...</svg>
        </div>
        <h3 class="text-xl font-medium mb-3">Título</h3>
        <p class="text-empire-muted mb-4">Descrição...</p>
        <p class="text-empire-gold text-sm italic">"Quote de impacto"</p>
      </div>
      <!-- More cards -->
    </div>
  </div>
</section>
```

### Solution Section

```html
<section id="solucao" class="py-24 md:py-32 bg-empire-surface relative overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-empire-gold/5 to-transparent opacity-50"></div>

  <div class="max-w-6xl mx-auto px-6 lg:px-8 relative">
    <!-- Header -->
    <div class="text-center mb-16 fade-in-up">
      <p class="text-empire-gold text-sm tracking-widest uppercase mb-4">A Solução</p>
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto">
        Título
      </h2>
    </div>

    <!-- Grid with image -->
    <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      <!-- Image -->
      <div class="lg:col-span-7 order-1 fade-in-up">
        <div class="relative">
          <div class="aspect-[4/3] lg:aspect-[16/10] rounded-lg overflow-hidden border border-empire-gold/20">
            <img src="image.png" class="w-full h-full object-cover">
          </div>
          <!-- Decorative elements -->
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-empire-gold/10 rounded-lg -z-10"></div>
          <div class="absolute -top-4 -left-4 w-16 h-16 border border-empire-gold/20 rounded-lg -z-10"></div>
        </div>
      </div>

      <!-- Text -->
      <div class="lg:col-span-5 order-2 fade-in-up">
        <!-- Content cards -->
      </div>
    </div>
  </div>
</section>
```

### Methodology/Timeline Section

```html
<section id="metodologia" class="py-24 md:py-32 bg-empire-surface">
  <div class="max-w-6xl mx-auto px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-16 fade-in-up">
      <p class="text-empire-gold text-sm tracking-widest uppercase mb-4">A Metodologia</p>
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
        Como Funciona
      </h2>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Phase -->
      <div class="flex flex-col lg:flex-row gap-8 mb-12 fade-in-up">
        <div class="lg:w-1/3">
          <div class="flex items-center gap-4 mb-4">
            <span class="phase-number">01</span>
            <div>
              <p class="phase-badge">Semana 1</p>
              <h3 class="text-xl font-medium">Título da Fase</h3>
            </div>
          </div>
        </div>
        <div class="lg:w-2/3 bg-empire-card p-8 border border-empire-border">
          <p class="text-empire-muted mb-4">Descrição</p>
          <ul class="space-y-2 text-empire-muted">
            <li class="flex items-center gap-2">
              <span class="w-1.5 h-1.5 bg-empire-gold rounded-full"></span>
              Item
            </li>
          </ul>
          <div class="mt-6 pt-6 border-t border-empire-border">
            <p class="text-empire-gold text-sm"><strong>Output:</strong> Resultado</p>
          </div>
        </div>
      </div>
      <!-- More phases -->
    </div>
  </div>
</section>
```

---

## 8. Navegação

### Navbar Fixa

```html
<nav class="fixed top-0 left-0 right-0 z-50 bg-empire-bg/80 backdrop-blur-md border-b border-empire-border">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a href="#" class="flex items-center">
        <img src="logo.png" class="h-10 w-auto">
      </a>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#section" class="text-empire-muted hover:text-empire-gold transition-colors text-sm tracking-wide">
          Link
        </a>
      </div>

      <!-- CTA -->
      <div class="hidden md:block">
        <a href="#cta" class="btn-secondary text-sm tracking-wide">APLICAR</a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden text-empire-text p-2">
        <svg class="w-6 h-6">...</svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="mobile-menu fixed inset-y-0 right-0 w-72 bg-empire-surface border-l border-empire-border md:hidden">
    <!-- Mobile nav links -->
  </div>
</nav>
```

```css
/* Mobile menu animation */
.mobile-menu {
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.mobile-menu.active {
  transform: translateX(0);
}

/* Navbar scroll effect */
nav.scrolled {
  background-color: rgba(10, 10, 11, 0.95);
}
```

---

## 9. Footer

```html
<footer class="py-12 bg-empire-bg border-t border-empire-border">
  <div class="max-w-6xl mx-auto px-6 lg:px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Logo -->
      <div class="flex items-center gap-4">
        <img src="logo.png" class="h-8 w-auto">
      </div>

      <!-- Links -->
      <div class="flex items-center gap-6 text-empire-muted text-sm">
        <a href="#" class="hover:text-empire-gold transition-colors">Privacidade</a>
        <span class="text-empire-border">|</span>
        <a href="#" class="hover:text-empire-gold transition-colors">Termos</a>
      </div>

      <!-- Copyright -->
      <p class="text-empire-muted text-sm">
        © 2026 Marca. Todos os direitos reservados.
      </p>
    </div>
  </div>
</footer>
```

---

## 10. Custom Scrollbar

```css
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0a0a0b;
}

::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #c9a962;
}
```

---

## 11. Responsividade

### Breakpoints

```css
/* Mobile first */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
/* 2xl: 1536px */
```

### Padrões Comuns

```css
/* Grid responsivo */
.grid-responsive {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Texto responsivo */
h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
}

/* Esconder no mobile */
.hide-mobile {
  display: none;
}

@media (min-width: 768px) {
  .hide-mobile {
    display: block;
  }
}

/* Esconder no desktop */
.hide-desktop {
  display: block;
}

@media (min-width: 768px) {
  .hide-desktop {
    display: none;
  }
}
```

---

## 12. Checklist de Implementação

### Antes de Começar
- [ ] Definir paleta de cores (usar Empire como base ou adaptar)
- [ ] Escolher fontes display e body
- [ ] Configurar Tailwind com tema customizado
- [ ] Preparar assets (logo, imagens, ícones)

### Durante o Desenvolvimento
- [ ] Manter consistência de espaçamento (sistema 8px)
- [ ] Usar variáveis CSS para cores
- [ ] Aplicar fade-in-up em seções principais
- [ ] Verificar contraste WCAG AA
- [ ] Testar em mobile (320px+)

### Antes de Publicar
- [ ] Otimizar imagens (WebP, lazy loading)
- [ ] Minificar CSS/JS
- [ ] Configurar meta tags SEO
- [ ] Testar formulários
- [ ] Verificar animações em dispositivos lentos

---

## 13. Variações de Cor (Opcionais)

### Versão Prata (Silver)
```css
--empire-silver: #a8a8a8;
--empire-silverLight: #d4d4d4;
--empire-silverDark: #737373;
```

### Versão Bronze
```css
--empire-bronze: #b08d57;
--empire-bronzeLight: #d4b896;
--empire-bronzeDark: #8b6914;
```

### Versão Azul (Corporate)
```css
--empire-blue: #3b82f6;
--empire-blueLight: #60a5fa;
--empire-blueDark: #1d4ed8;
```

---

## 14. Arquivo Base HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título | Marca</title>
  <meta name="description" content="Meta description 155 caracteres">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet">

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            empire: {
              bg: '#0a0a0b',
              surface: '#111113',
              card: '#18181b',
              border: '#27272a',
              muted: '#71717a',
              text: '#fafafa',
              gold: '#c9a962',
              goldLight: '#e4d4a5',
              goldDark: '#9a7b3c',
            }
          },
          fontFamily: {
            display: ['Cormorant Garamond', 'serif'],
            body: ['DM Sans', 'sans-serif'],
          },
        }
      }
    }
  </script>

  <style>
    /* [Inserir estilos do design system] */
  </style>
</head>
<body class="bg-empire-bg text-empire-text antialiased">
  <!-- [Estrutura da página] -->

  <script>
    /* [Scripts de interação] */
  </script>
</body>
</html>
```

---

**Versão:** 1.0
**Última atualização:** Fevereiro 2026
**Baseado em:** Landing Page Acelerador de Audiência
