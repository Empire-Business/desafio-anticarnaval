# Arquitetura do App - Regra de Espelhamento

## Visão Geral

O app `vercel-app` funciona como um **espelho dinâmico** das pastas do projeto, lendo automaticamente arquivos de documentação eslides.

## Estrutura de Pastas Espelhadas

```
DESAFIO_ANTICARNAVAL/
├── vercel-app/                    # App Next.js
│   ├── app/
│   │   ├── page.tsx              # Homepage (usa content.json)
│   │   ├── slides/page.tsx       # Página de slides (usa SLIDES_COMPLETOS)
│   │   └── content.json          # Gerado automaticamente
│   └── scripts/
│       └── generate-content.js    # Script de geração do content.json
├── *.md                           # Documentos Markdown (自动读取)
└── SLIDES_COMPLETOS/              # Slides HTML (自动读取)
```

## O que é Espelhado Automaticamente

### 1. Documentos Markdown (*.md)

**Localização**: Raiz do projeto (`DESAFIO_ANTICARNAVAL/*.md`)

**Como funciona**:
- O script `scripts/generate-content.js` lê todos os arquivos `.md` da raiz
- Gera `app/content.json` com estrutura de árvore
- O app importa `content.json` e renderiza os documentos

**Gerado automaticamente**:
- Nome do arquivo
- Conteúdo (extraído via `fs.readFileSync`)
- Categoria (baseada no nome do arquivo)
- Ícone (baseado no tipo de documento)
- Ordem de exibição

### 2. Slides (SLIDES_COMPLETOS/)

**Localização**: Pasta `SLIDES_COMPLETOS/` na raiz

**Como funciona**:
- Arquivo: `app/slides/page.tsx`
- **NOTA**: Os slides são HARDCODED no array `aulas` (linhas 6-11)
- Para adicionar slides, edite o array `const aulas = [...]`

**Para动态ler slides** (futuro):
- Modificar `slides/page.tsx` para ler pasta `SLIDES_COMPLETOS/`
- Gerar lista de aulas automaticamente

## O que NÃO é Espelhado (Hardcoded)

Os seguintes elementos estão hardcoded e precisam ser atualizados manualmente:

### page.tsx
| Elemento | Linha(s) | Descrição |
|----------|----------|-----------|
| `featuredDocs` | 30-36 | Documentos principais da homepage |
| Data do evento | 227 | "14 a 17 de Fevereiro de 2026" |
| Dias de evento | 269 | "4" (número fixo) |

### slides/page.tsx
| Elemento | Linha(s) | Descrição |
|----------|----------|-----------|
| `aulas` | 6-11 | Lista de aulas (título, id, path) |

## Adicionando Novos Documentos

1. Adicione arquivo `.md` na raiz do projeto
2. Rode `npm run build` (executa `generate-content.js` automaticamente)
3. O documento aparecerá automaticamente no app

## Adicionando Novos Slides

1. Adicione pasta com `index.html` em `SLIDES_COMPLETOS/`
2. Edite `app/slides/page.tsx`, array `aulas`
3. Adicione objeto: `{ id: 'nome', title: 'Título', path: 'pasta/index.html' }`

## Categorias Suportadas

| Padrão no Nome | Categoria |
|----------------|-----------|
| `INDICE` | Índice |
| `ESTRATEGICO` | Estratégia |
| `OPERACIONAL` | Operacional |
| `COPY` | Marketing |
| `DESIGN` | Design |
| `FLUXOS` | Comunicação |
| `REEL` | Vídeo/Reels |
| `estatico`/`prompts`/`carrosseis` | Criativos Estáticos |
| `CHECKLIST` | Operacional |

## Ícones por Tipo

| Tipo | Ícone |
|------|-------|
| Índice | FileText |
| Estratégico | FileText |
| Operacional | CheckCircle |
| Copy | FileText |
| Design | Image |
| Fluxos | Mail |
| Reels | Video |
| Estáticos/Prompts | Image |
| Checklist | CheckCircle |

## Executando o Projeto

```bash
cd vercel-app
npm run dev    # Desenvolvimento
npm run build  # Build (gera content.json)
npm start      # Production
```

## Pastas Ignoradas

O script `generate-content.js` ignora:
- `vercel-app/` (o próprio app)
- `.DS_Store`
- Arquivos/pastas starting com `.`
