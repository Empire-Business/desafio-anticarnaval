'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { Copy, Search, Menu, X, Home, FileText, Video, Image, Mail, Phone, CheckCircle } from 'lucide-react';
import 'highlight.js/styles/github-dark.css';

// Conteúdo dos documentos (em produção, viria de arquivos ou API)
const documents = {
  '01': {
    id: '01',
    title: 'Documento Estratégico',
    icon: FileText,
    category: 'Estratégia',
    content: `# 📋 RETIRO ANTICARNAVAL ACelerador de Audiência
## Documento Estratégico Completo

> **Versão:** 1.0
> **Data de criação:** 05 de Fevereiro de 2026
> **Evento:** 14 a 17 de Março de 2026

---

## 🎯 OBJETIVO E POSICIONAMENTO

### A Promessa Central

**"Em 4 dias, você vai sair do carnaval com o seu posicionamento digital definido e um plano completo para ampliar a sua autoridade do mundo real para o mundo digital."**

### O Problema Que Resolvemos

Você começou o ano, mas na verdade **não começou o ano ainda**. Sente aquela sensação de estar "devagar", "atrás", como se ainda estivesse voltando de férias? Você tem autoridade e resultado no mundo real, mas no digital... parece que não existe.

O Carnaval é o momento perfeito para **recuperar o começo do ano**. Enquanto todos estão distrados, você vai usar esses dias para ORGANIZAR, PLANEJAR e DEFINIR sua estratégia digital.

### Para Quem É Este Evento

✅ **Empresários** que já têm sucesso offline e querem ampliar para o digital
✅ **Médicos** e profissionais de saúde com autoridade consolidada
✅ **Mentores e consultores** com resultado comprovado no mundo real
✅ **Profissionais** que NÃO vão curtir o carnaval e querem aproveitar o tempo

### Para Quem NÃO É

❌ Pessoas que querem "criar" autoridade do zero (falamos com quem JÁ TEM)
❌ Pessoas buscando "fórmulas mágicas" ou "vírus" para sucesso rápido
❌ Pessoas que vão curtir o carnaval e não vão se comprometer com o processo

---

## 📅 CRONOGRAMA COMPLETO

### Datas do Evento

| Data | Dia | Horário | Atividade |
|------|-----|---------|-----------|
| 14/03 | Sábado | 10h - 11h | Aula 1 + Tarefa |
| 14/03 | Sábado | 17h - 18h | Retorno / Hot Seat |
| 15/03 | Domingo | 10h - 11h | Aula 2 + Tarefa |
| 15/03 | Domingo | 17h - 18h | Retorno / Hot Seat |
| 16/03 | Segunda | 10h - 11h | Aula 3 + Tarefa |
| 16/03 | Segunda | 17h - 18h | Retorno / Hot Seat |
| 17/03 | Terça | 10h - 11h | Aula 4 + Encerramento |
| 17/03 | Terça | 18h - 19h | Live Extra com Time de Vendas |`
  },
  '02': {
    id: '02',
    title: 'Operacional e Tarefas',
    icon: CheckCircle,
    category: 'Operacional',
    content: `# 🔧 OPERACIONAL E TAREFAS
## Retiro Anti-Carnaval Acelerador de Audiência

> **Versão:** 1.0
> **Data:** 05 de Fevereiro de 2026

---

## 👥 ORGANIZAÇÃO DE EQUIPE

### Estrutura da Equipe

\`\`\`
                    ┌─────────────────┐
                    │   DIREÇÃO       │
                    │  (Sandro/Davi)  │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   ┌────▼────┐         ┌─────▼─────┐        ┌────▼────┐
   │ MARKETING│        │ OPERAÇÃO  │        │ VENDAS  │
   └─────────┘         └───────────┘        └─────────┘
\`\`\`

### Papéis e Responsabilidades

| Função | Responsável | Responsabilidades |
|--------|-------------|-------------------|
| **Direção Geral** | Sandro/Davi | Decisões estratégicas, aprovações finais |
| **Gerente de Projeto** | A definir | Cronograma, comunicação entre times |
| **Copywriter** | Conteúdo | Página de vendas, e-mails, scripts |
| **Designer** | Design | Criativos, página, materiais |
| **Tráfego** | Marketing | Campanhas, otimização, orçamento |
| **Suporte** | Operação | Atendimento, dúvidas, problemas |
| **Moderador** | Operação | Grupo WhatsApp, hot seats |
| **Closers** | Vendas | Abordagem, reuniões, vendas |`
  },
  '03': {
    id: '03',
    title: 'Copy da Página de Inscrição',
    icon: FileText,
    category: 'Marketing',
    content: `# 📝 COPY PÁGINA DE INSCRIÇÃO
## Retiro Anti-Carnaval Acelerador de Audiência

---

## 🎯 HERO SECTION

### Headline Principal
\`\`\`
VOCÊ COMEÇOU O ANO... MAS NA VERDADE NÃO COMEÇOU O ANO
\`\`\`

### Subheadline
\`\`\`
Em 4 dias, saia do carnaval com seu posicionamento digital
definido e um plano completo para ampliar sua autoridade do
mundo real para o mundo digital.
\`\`\`

### CTA Principal
\`\`\`
[QUERO PARTICIPAR GRÁTIS]
\`\`\`

### Subtítulo CTA
\`\`\`
🎁 Gratuito • Vagas limitadas • 100% online
\`\`\`

### Urgência
\`\`\`
⏰ Começa em: [COUNTDOWN TIMER]
\`\`\``
  },
  '04': {
    id: '04',
    title: 'Design da Página',
    icon: Image,
    category: 'Design',
    content: `# 🎨 DESIGN DESCRIPTION - PÁGINA DE INSCRIÇÃO
## Retiro Anti-Carnaval Acelerador de Audiência

> **Versão:** 1.0
> **Objetivo:** Descrição detalhada para IA criar o design completo

---

## 📐 ESPECIFICAÇÕES GERAIS

### Breakpoints
\`\`\`
Mobile: 320px - 768px
Tablet: 769px - 1024px
Desktop: 1025px+
\`\`\`

### Grid System
\`\`\`
Container max-width: 1200px (desktop)
Padding lateral: 20px (mobile), 40px (tablet), 60px (desktop)
Columns: 12-column grid
Gutter: 20px
\`\`\`
`
  },
  '05': {
    id: '05',
    title: 'Fluxos de Comunicação',
    icon: Mail,
    category: 'Comunicação',
    content: `# 📨 FLUXOS DE COMUNICAÇÃO
## Retiro Anti-Carnaval Acelerador de Audiência

---

## 📱 WHATSAPP

### Mensagem 1: Boas-Vindas (Automático - Imediato)

\`\`\`
👋 BEM-VINDO AO RETIRO ANTICARNAVAL!

Olá, {{nome}}!

Seja bem-vindo(a) ao Retiro Anti-Carnaval do
Acelerador de Audiência! 🚀

Você tomou a decisão certa. Nesses 4 dias, vamos:

✅ Definir seu posicionamento digital
✅ Criar seu plano de conteúdo
✅ Usar IA para escalar produção
✅ Sair com um roadmap de 90 dias
\`\`\``
  },
  '06': {
    id: '06',
    title: 'Criativos de Reels',
    icon: Video,
    category: 'Criativos',
    content: `# 🎬 REELS - ROTEIROS COMPLETOS

## REEL 01 - PROBLEMA
### "Você tem autoridade no mundo real mas no digital... inexistente"

---

### 📋 CONCEITO

**Ideia Principal:** Mostrar a frustração de ter autoridade offline e ser invisível online

**Público-Alvo:** Empresários, médicos, profissionais com sucesso offline

**Objetivo:** Identificar o problema e gerar curiosidade sobre a solução

---

### 🎬 HOOK (Primeiros 3 segundos)

**Visual:**
- Pessoa em escritório elegante, parecendo frustrada
- Texto na tela: "TEM 300K SEGUIDORES..."

**Áudio/Fala:**
"Olha essa pessoa. Tem autoridade. Tem resultado. Mas no Instagram... parece que não existe."

---

### 📝 ROTEIRO COMPLETO

| Cena | Visual | Áudio/Fala | Duração |
|------|--------|-------------|---------|
| 1 | Pessoa em escritório, olhando celular com frustração | "Você já sentiu aquela frustração?" | 3s |
| 2 | Cortes rápidos de pessoas com menos sucesso tendo mais likes | "De ver gente com MENOS resultado, MENOS experiência, tendo MUITO mais sucesso que você no digital?" | 5s |
| 3 | Pessoa do início, mostrando seu Instagram com poucos likes | "Você tem autoridade no mundo real. Mas no digital... é como se não existisse." | 4s |
| 4 | Texto na tela: "POSTS COM 30 LIKES" | "Posts com 30 likes. Zero qualificados chegando no seu DM." | 3s |`
  },
  '07': {
    id: '07',
    title: 'Criativos Estáticos',
    icon: Image,
    category: 'Criativos',
    content: `# 🖼️ CRIATIVOS ESTÁTICOS - PROMPTS

## CRIATIVO 01 - LANÇAMENTO

### 📝 COPY

#### Headline
\`\`\`
VOCÊ COMEÇOU O ANO...
MAS NA VERDADE NÃO COMEÇOU O ANO
\`\`\`

#### Subheadline
\`\`\`
Em 4 dias, saia do carnaval com seu posicionamento
digital definido e um plano completo para ampliar
sua autoridade do mundo real para o mundo digital.
\`\`\`

---

### 🎨 PROMPTS PARA NANO BANANA PRO (EM INGLÊS)

#### Versão A - COM FOTO DE PESSOA

\`\`\`
A professional entrepreneur in their 30s-40s, confident expression,
wearing business casual attire, standing in a modern minimalist office
with warm lighting. The person is looking directly at the camera with
a determined, focused expression. Professional photography style,
shallow depth of field, warm color palette with black and gold accents,
high quality, 4K, clean composition.
\`\`\`
`
  },
  '08': {
    id: '08',
    title: 'Checklist Final',
    icon: CheckCircle,
    category: 'Operacional',
    content: `# ✅ CHECKLIST FINAL

## TERMOS E CONDIÇÕES

\`\`\`
TERMOS DE PARTICIPAÇÃO - RETIRO ANTICARNAVAL

Ao se inscrever no Retiro Anti-Carnaval ("Evento"), você concorda
com os seguintes termos:

1. DO EVENTO
   O Evento é 100% online e gratuito, realizado de 14 a 17 de
   Março de 2026.

2. DAS INSCRIÇÕES
   As inscrições são limitadas e podem ser encerradas a qualquer
   momento sem aviso prévio.
\`\`\`

---

## ❓ FAQ COMPLETO

### Sobre o Evento

**Q: O evento é ao vivo ou gravado?**
A: As aulas são transmitidas ao vivo, mas ficam gravadas.

**Q: Preciso assistir tudo ao vivo?**
A: Recomendamos, mas entendemos imprevistos.

**Q: Vai ter replay depois do evento?**
A: Não. As gravações ficam disponíveis apenas durante o evento.`
  }
};

export default function Home() {
  const [selectedDoc, setSelectedDoc] = useState('01');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const currentDoc = documents[selectedDoc as keyof typeof documents];

  // Filter documents based on search
  const filteredDocs = Object.values(documents).filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Copy function
  const copySection = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  // Add copy buttons to markdown content
  const addCopyButtons = (content: string) => {
    // Split by headers
    const sections = content.split(/(?=^#{1,3}\s)/m);
    return sections.map((section, index) => {
      const lines = section.split('\n');
      const firstLine = lines[0];
      const isHeader = firstLine.startsWith('#');

      if (!isHeader || !firstLine.trim()) return section;

      const sectionId = `section-${index}`;
      return (
        <div key={index} className="relative group">
          <button
            onClick={() => copySection(section.trim(), sectionId)}
            className="absolute -right-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-gray-700 hover:bg-gray-600 rounded-lg"
            title="Copiar seção"
          >
            {copiedSection === sectionId ? (
              <CheckCircle className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-300" />
            )}
          </button>
          {section}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Home className="w-6 h-6 text-yellow-500" />
            <h1 className="text-lg font-semibold text-white">Retiro Anti-Carnaval</h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-gray-400">Documentação Completa</span>
            <a href="#contato" className="text-sm text-yellow-500 hover:text-yellow-400">Contato</a>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-72
          bg-gray-950 border-r border-gray-800
          transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
          transition-transform duration-200 z-40 overflow-y-auto
        `}>
          <div className="p-4">
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
            </div>

            {/* Documents List */}
            <nav className="space-y-1">
              {Object.values(documents).map((doc) => {
                const Icon = doc.icon;
                const isSelected = selectedDoc === doc.id;
                return (
                  <button
                    key={doc.id}
                    onClick={() => {
                      setSelectedDoc(doc.id);
                      setSidebarOpen(false);
                    }}
                    className={\`
                      w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left
                      transition-colors
                      \${isSelected
                        ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/30'
                        : 'text-gray-400 hover:bg-gray-900 hover:text-gray-200'
                      }
                    \`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-sm font-medium truncate">{doc.title}</div>
                      <div className="text-xs opacity-60">{doc.category}</div>
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Copy All Button */}
            <button
              onClick={() => copySection(currentDoc.content, 'all')}
              className="w-full mt-6 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-medium rounded-lg transition-colors"
            >
              {copiedSection === 'all' ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copiar Tudo
                </>
              )}
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Document Header */}
            <div className="mb-8 pb-6 border-b border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                {currentDoc.icon && <currentDoc.icon className="w-8 h-8 text-yellow-500" />}
                <div>
                  <h2 className="text-2xl font-bold text-white">{currentDoc.title}</h2>
                  <p className="text-sm text-gray-500">{currentDoc.category}</p>
                </div>
              </div>
            </div>

            {/* Markdown Content */}
            <div className="prose prose-invert prose-yellow max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-white mt-8 mb-4 pb-2 border-b border-gray-800">{children}</h1>,
                  h2: ({ children, id }) => (
                    <h2 id={id} className="text-2xl font-semibold text-white mt-8 mb-4 flex items-center gap-2 group">
                      {children}
                      <button
                        onClick={() => copySection(String(children), String(id))}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Copy className="w-4 h-4 text-gray-500 hover:text-yellow-500" />
                      </button>
                    </h2>
                  ),
                  h3: ({ children }) => <h3 className="text-xl font-semibold text-white mt-6 mb-3">{children}</h3>,
                  p: ({ children }) => <p className="text-gray-300 leading-relaxed mb-4">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside text-gray-300 space-y-2 mb-4">{children}</ol>,
                  li: ({ children }) => <li className="pl-2">{children}</li>,
                  code: ({ children, className }) => {
                    const isInline = !className;
                    return (
                      <code className={\`
                        \${isInline
                          ? 'bg-gray-900 text-yellow-400 px-1.5 py-0.5 rounded text-sm font-mono'
                          : 'block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono'
                        }
                      \`}>
                        {children}
                      </code>
                    );
                  },
                  pre: ({ children }) => <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                  table: ({ children }) => <div className="overflow-x-auto mb-4"><table className="min-w-full divide-y divide-gray-800">{children}</table></div>,
                  thead: ({ children }) => <thead className="bg-gray-900">{children}</thead>,
                  tbody: ({ children }) => <tbody className="divide-y divide-gray-800">{children}</tbody>,
                  tr: ({ children }) => <tr>{children}</tr>,
                  th: ({ children }) => <th className="px-4 py-3 text-left text-sm font-semibold text-white">{children}</th>,
                  td: ({ children }) => <td className="px-4 py-3 text-sm text-gray-300">{children}</td>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-yellow-500 pl-4 py-2 my-4 bg-gray-900/50 italic text-gray-400">
                      {children}
                    </blockquote>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                  hr: () => <hr className="border-gray-800 my-8" />,
                }}
              >
                {currentDoc.content}
              </ReactMarkdown>
            </div>

            {/* Copy Floating Button */}
            <button
              onClick={() => copySection(currentDoc.content, 'floating')}
              className="fixed bottom-6 right-6 p-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full shadow-lg transition-all hover:scale-110"
              title="Copiar documento"
            >
              {copiedSection === 'floating' ? (
                <CheckCircle className="w-6 h-6" />
              ) : (
                <Copy className="w-6 h-6" />
              )}
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p>© 2026 Retiro Anti-Carnaval - Acelerador de Audiência</p>
          <p className="mt-2">Documentação para uso interno</p>
        </div>
      </footer>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
