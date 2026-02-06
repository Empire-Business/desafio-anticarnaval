// Event dates
export const EVENT_START_DATE = new Date("2026-02-14T10:00:00-03:00");
export const EVENT_END_DATE = new Date("2026-02-17T18:00:00-03:00");
export const REGISTRATION_END_DATE = new Date("2026-02-13T23:59:00-03:00");

// Event info
export const EVENT_INFO = {
  name: "Retiro Anti-Carnaval",
  organizer: "Acelerador de Audiência",
  dates: "14 a 17 de Fevereiro de 2026",
  times: "10h (manhã) e 17h (retorno)",
  duration: "4 dias",
  location: "100% online",
} as const;

// Form URLs
export const FORM_URL = "https://l.empirebusiness.com.br/widget/survey/2r4bFS0lFrY4ANt0Bwhl";
export const FORM_SCRIPT = "https://l.empirebusiness.com.br/js/form_embed.js";

// Carnival colors for effects (subtle)
export const CARNIVAL_COLORS = [
  "rgba(0, 255, 127, 0.08)",  // Green
  "rgba(128, 0, 128, 0.08)",   // Purple
  "rgba(255, 0, 128, 0.08)",   // Pink
  "rgba(255, 215, 0, 0.08)",   // Gold
  "rgba(255, 140, 0, 0.08)",   // Orange
] as const;

// Curriculum days
export const CURRICULUM_DAYS = [
  {
    day: 1,
    title: "Por que você tem autoridade real mas ninguém sabe no digital",
    topics: [
      "O abismo entre offline e online",
      "Por que \"bom conteúdo\" não é suficiente",
      "A nova era do Instagram: retenção > alcance",
    ],
  },
  {
    day: 2,
    title: "Posicionamento - Como se tornar a ÚNICA opção no seu mercado",
    topics: [
      "Os 4 elementos de um posicionamento forte",
      "Como encontrar seu diferencial único",
      "Sua declaração de posicionamento escrita",
    ],
  },
  {
    day: 3,
    title: "Escala de conteúdo - Ter presença sem virar escravo do digital",
    topics: [
      "Os 3 caminhos: Corte, Profundidade, Multi-canais",
      "Por que quantidade gera qualidade",
      "Como usar IA sem perder sua essência",
    ],
  },
  {
    day: 4,
    title: "Seu plano de 90 dias - Do posicionamento ao resultado",
    topics: [
      "Consolidar tudo em um plano de ação",
      "As 3 ações para fazer na semana que vem",
      "Como continuar avançando depois do carnaval",
    ],
  },
] as const;

// Deliverables
export const DELIVERABLES = {
  daily: [
    { day: 1, item: "Planilha de Auditoria Digital" },
    { day: 2, item: "Template de Declaração de Posicionamento" },
    { day: 3, item: "Grade de Conteúdo Semanal" },
    { day: 4, item: "Planner de 90 Dias + Certificado" },
  ],
  bonuses: [
    "Prompts de IA para pesquisa de conteúdo",
    "Lista de referências por nicho",
    "Acesso temporário ao Empire Chat",
    "Comunidade de participantes",
  ],
} as const;

// Social proof cases
export const TESTIMONIALS = [
  {
    name: "Fernanda Girassol",
    role: "De prejuízo com tráfego a +R$100 mil/mês",
    quote: "Eu achava que tráfego era o único caminho. Em 3 meses mudou tudo. Hoje faço +100k/mês totalmente orgânico.",
  },
  {
    name: "Henrique",
    role: "De confuso a +500k seguidores",
    quote: "Eu não sabia o que queria. Tinha autoridade mas não sabia expressar. Hoje tenho +500k seguidores e vejo minha marca.",
  },
  {
    name: "Thiago Reis",
    role: "De base desengajada a vendas orgânicas",
    quote: "Minha base era toda de tráfego e super desengajada. Transformei tudo em vendas consistentes usando conteúdo.",
  },
] as const;

// Stats
export const STATS = [
  { value: "+10", label: "Perfis próprios gerando demanda" },
  { value: "R$ 1M", label: "Em vendas orgânicas geradas" },
  { value: "Centenas", label: "De alunos transformados" },
] as const;

// FAQ items
export const FAQ_ITEMS = [
  {
    q: "O evento é ao vivo ou gravado?",
    a: "As aulas são ao vivo e não ficam gravadas.",
  },
  {
    q: "Preciso estar em todas as aulas?",
    a: "Sim. As aulas são ao vivo e não ficam gravadas, então recomenda-se assistir todas.",
  },
  {
    q: "Preciso ter Instagram grande?",
    a: "Não. Na verdade, quanto menor, melhor - vamos construir do jeito certo.",
  },
  {
    q: "Serve para qualquer nicho?",
    a: "Sim. O princípio de posicionamento é universal. Trabalhamos com médicos, advogados, consultores, empresários de diversos setores.",
  },
  {
    q: "Tenho que pagar algo?",
    a: "O evento é 100% gratuito. Nossa proposta é entregar valor sem pedir nada em troca.",
  },
  {
    q: "Vou vender algo durante o evento?",
    a: "Vamos apresentar o Acelerador de Audiência, nosso programa completo. Mas sem pressão. Se fizer sentido para você, ótimo. Se não, ainda assim o conteúdo do retiro pode transformar seu ano.",
  },
  {
    q: "Preciso saber usar IA?",
    a: "Não. Vamos te ensinar do básico.",
  },
] as const;

// Target audience
export const TARGET_AUDIENCE = [
  "Empresários com sucesso offline querendo ir pro digital",
  "Médicos e profissionais de saúde com autoridade",
  "Mentores e consultores com resultado comprovado",
  "Profissionais que NÃO vão ao carnaval e querem aproveitar",
] as const;
