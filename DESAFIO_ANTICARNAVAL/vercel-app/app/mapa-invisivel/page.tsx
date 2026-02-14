'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Map, AlertTriangle, Brain, Target, Zap, ChevronDown,
  ArrowRight, BookOpen, CheckCircle, Unlock,
  Lightbulb, Users, TrendingUp, Clock, Compass, Menu, X
} from 'lucide-react';

// Content data
const armadilhasData = {
  mentalidade: [
    { numero: 1, titulo: '"Eu preciso de mais um curso antes de começar"', verdade: 'O conhecimento sem aplicação é apenas informação. Cada curso que você faz sem botar a mão na massa é tempo que você não está construindo sua presença digital.' },
    { numero: 2, titulo: '"Meu conteúdo precisa ser perfeito para publicar"', verdade: 'Perfeccionismo é medo fantasiado de profissionalismo. Enquanto você pole um conteúdo, seu concorrente publicou dez.' },
    { numero: 3, titulo: '"Vou esperar ter mais seguidores para vender"', verdade: 'Você JÁ TEM autoridade no mundo real. O digital é apenas um canal para amplificar isso. Não é o seguidor que valida você. É você que valida o seguidor.' },
    { numero: 4, titulo: '"Preciso viralizar para ter resultado"', verdade: 'Em 2026, o Instagram mudou. Agora, RETENÇÃO vale mais que ALCANCE. 10 mil pessoas vendo seu conteúdo até o fim vale MAIS que 100 mil pessoas passando rapidinho.' },
    { numero: 5, titulo: '"Vou copiar o que funciona para os outros"', verdade: 'O que funciona para outro funciona PARA OUTRO. Copiar formato sem entender PRINCÍPIO é receita para ser cópia barata de alguém que já existe.' },
    { numero: 6, titulo: '"Tenho que estar em todas as redes sociais"', verdade: 'Quem tenta falar para todo mundo acaba não sendo ouvido por ninguém. O mesmo vale para plataformas. Um canal dominado vale mais que cinco negligenciados.' },
    { numero: 7, titulo: '"O digital é algo a mais, vou fazer quando sobrar tempo"', verdade: 'Para quem já tem resultado no mundo real, o digital não é "algo a mais" — é um trabalho a mais. E como todo trabalho, precisa de tempo dedicado, não tempo que sobra.' },
    { numero: 8, titulo: '"Meu problema é o algoritmo"', verdade: 'O algoritmo não é seu inimigo. Ele é um espelho. Mostra o que retém e o que não retém. Se seu conteúdo não performa, o problema raramente é o algoritmo.' },
    { numero: 9, titulo: '"Preciso de equipamento melhor para começar"', verdade: 'Equipamento melhora qualidade técnica. Não melhora qualidade de conteúdo. Um conteúdo ruim em 4K continua ruim.' },
    { numero: 10, titulo: '"Vou contratar alguém para fazer isso por mim"', verdade: 'Você pode terceirizar execução, mas não pode terceirizar posicionamento. Se você não sabe quem é digitalmente, ninguém vai saber por você.' },
    { numero: 11, titulo: '"Esse negócio de posicionamento é coisa de guru"', verdade: 'Posicionamento não é tagline. Não é slogan. É uma decisão estratégica sobre quem você é, para quem fala, e como é diferente. Empresas de verdade levam isso a sério há décadas.' },
    { numero: 12, titulo: '"Já tentei antes e não funcionou"', verdade: 'Tentar sem método é experimentar, não executar. Se você tentou correr uma maratona sem treinar e não conseguiu, o problema não é a maratona. É a preparação.' },
    { numero: 13, titulo: '"Meu mercado é diferente, isso não se aplica"', verdade: 'Os princípios são universais. O que muda é a aplicação. Médico, corretor, consultor, empresário — todos têm em comum a necessidade de ser reconhecido antes de ser contratado.' },
    { numero: 14, titulo: '"Vou esperar o momento certo"', verdade: 'O momento certo não existe. Ele é criado. Enquanto você espera, outro está construindo.' },
    { numero: 15, titulo: '"Primeiro preciso ter tudo organizado"', verdade: 'Organização infinita é procrastinação disfarçada. Você não precisa de tudo organizado. Precisa começar organizado.' }
  ],
  posicionamento: [
    { numero: 16, titulo: '"Falo para todo mundo porque todo mundo precisa do que eu ofereço"', verdade: 'Falar de tudo é falar de nada. Quem tenta falar para todo mundo acaba não sendo ouvido por ninguém. Especificidade gera autoridade.' },
    { numero: 17, titulo: '"Meu posicionamento é \'ajudo pessoas a terem sucesso\'"', verdade: 'Genericidade é invisibilidade. "Ajudo pessoas" não é posicionamento — é ausência de posicionamento.' },
    { numero: 18, titulo: '"Não quero limitar meu público"', verdade: 'Nichar não limita. Direciona. Quando você fala especificamente para alguém, essa pessoa se identifica profundamente.' },
    { numero: 19, titulo: '"Vou me inspirar nos concorrentes"', verdade: 'Se você é versão de alguém, você é cópia. O objetivo não é ser melhor que a concorrência. É ser DIFERENTE da concorrência. Único.' },
    { numero: 20, titulo: '"Tenho medo de polarizar e afastar pessoas"', verdade: 'Polarização não afasta as pessoas certas. Afasta as pessoas erradas. Quem tenta agradar todo mundo não é memorável para ninguém.' },
    { numero: 21, titulo: '"Vou falar do que está em alta"', verdade: 'Trends têm prazo de validade. Posicionamento não. Quem constrói em cima de moda, precisa reconstruir toda semana.' },
    { numero: 22, titulo: '"Meu posicionamento é meu produto"', verdade: 'Posicionamento é sobre identidade, não sobre oferta. Quem você é > O que você vende. Pessoas compram de pessoas, não de catálogos.' },
    { numero: 23, titulo: '"Preciso de um slogan matador"', verdade: 'Slogan é comunicação. Posicionamento é estratégia. Frase bonita sem fundamento estratégico é fachada de casa sem alicerces.' },
    { numero: 24, titulo: '"Não sei o que me torna único"', verdade: 'Você tem diferencial. Só não enxergou ainda. Muitas vezes, o que é óbvio para você é extraordinário para os outros.' },
    { numero: 25, titulo: '"Vou deixar o público me dizer quem eu devo ser"', verdade: 'Liderança é guiar, não ser guiado. O público sabe o que quer, mas não necessariamente como chegar lá. É você quem lidera.' },
    { numero: 26, titulo: '"Meu posicionamento é \'profissionalismo e qualidade\'"', verdade: 'Profissionalismo e qualidade são PRÉ-REQUISITOS, não diferenciais. Se essas são suas únicas cartas, você não tem cartas.' },
    { numero: 27, titulo: '"Vou mudar de posicionamento até acertar"', verdade: 'Posicionamento não é algo que você testa como roupa. É algo que você CONSTRÓI. Mudar constantemente é nunca construir.' },
    { numero: 28, titulo: '"Não quero ser muito específico para não ficar limitado"', verdade: 'Especificidade é poder. "Especialista em tudo" é "especialista em nada" com outro nome.' },
    { numero: 29, titulo: '"Vou copiar o posicionamento de quem tem resultado"', verdade: 'Posicionamento não é transferível. O que funciona para outro funciona PARA OUTRO. Você precisa do SEU.' },
    { numero: 30, titulo: '"Posicionamento é coisa de marketing, eu só preciso entregar bom resultado"', verdade: 'Bom resultado é o MÍNIMO. Posicionamento é como você comunica esse resultado. No digital, quem não é visto não é lembrado — mesmo que seja bom.' }
  ],
  execucao: [
    { numero: 31, titulo: '"Posto quando tenho inspiração"', verdade: 'Inspiracao é amadora. Profissional cria com ou sem vontade. Consistência bate inspiração todos os dias.' },
    { numero: 32, titulo: '"Um conteúdo por semana já está bom"', verdade: 'Quantidade gera qualidade. Quem posta pouco aprende pouco, itera pouco, melhora pouco. Não é sobre postar por postar. É sobre postar para aprender.' },
    { numero: 33, titulo: '"Vou fazer só o que gosto"', verdade: 'Crescimento acontece fora da zona de conforto. Se você só faz o que já sabe, nunca descobre o que poderia aprender.' },
    { numero: 34, titulo: '"Engajamento é respondendo comentários"', verdade: 'Engajamento começa com CONTEÚDO que gera comentários. Resposta é o mínimo. Criação de conversa é o objetivo.' },
    { numero: 35, titulo: '"Não preciso de sistema, é só postar"', verdade: 'Improvisação funciona para uma semana. Sistema funciona para uma carreira. Sem sistema, você depende de energia. Com sistema, a energia é direcionada.' },
    { numero: 36, titulo: '"Vou criar tudo do zero sempre"', verdade: 'Criatividade dentro de estrutura é poderosa. Criatividade sem estrutura é caos. Os melhores têm frameworks, não improvisos.' },
    { numero: 37, titulo: '"IA vai tirar minha essência"', verdade: 'IA é acelerador, não substituto. Você continua sendo você. A IA apenas ajuda a estruturar, pesquisar, escalar. Essência é sua. Ferramenta é ferramenta.' },
    { numero: 38, titulo: '"Preciso gravar tudo com produção profissional"', verdade: 'Autenticidade vence produção. Em 2026, conteúdo "real" conecta mais que conteúdo "produzido". Câmera do celular resolve.' },
    { numero: 39, titulo: '"Vou fazer quando tiver a ideia perfeita"', verdade: 'Grandes ideias não vêm antes de criar. Vêm ENQUANTO cria. Quem espera a ideia perfeita nunca começa.' },
    { numero: 40, titulo: '"Não analiso métricas, confio no feeling"', verdade: 'Feeling mente. Números não. O que você acha que funciona e o que REALMENTE funciona costumam ser coisas diferentes.' },
    { numero: 41, titulo: '"Vou postar e ver o que acontece"', verdade: 'Postar sem objetivo é gritar no vazio. Cada conteúdo precisa ter um propósito: educar, inspirar, vender, conectar. Sem propósito, não há direção.' },
    { numero: 42, titulo: '"Meu conteúdo é muito complexo para redes sociais"', verdade: 'Complexidade é desafio de comunicação, não de formato. Se você não consegue simplificar, talvez não entenda tão bem quanto pensa.' },
    { numero: 43, titulo: '"Vou fazer igual está dando certo agora"', verdade: 'O que funciona hoje pode não funcionar amanhã. Trends passam. Princípios ficam. Copiar superfície sem entender fundo é construir em areia.' },
    { numero: 44, titulo: '"Não consigo criar linha editorial, minhas ideias são aleatórias"', verdade: 'Linha editorial não nasce pronta. É construída. Começa com temas centrais e se expande. Ideias aleatórias são sintoma de falta de clareza de posicionamento.' },
    { numero: 45, titulo: '"Preciso de mais tempo para criar bom conteúdo"', verdade: 'Tempo não é o problema. Foco é. Você não precisa de mais tempo. Precisa de tempo MELHOR usado.' },
    { numero: 46, titulo: '"Vou esperar acabar o carnaval / as férias / o mês louco para começar"', verdade: 'Momento tranquilo não existe. Sempre terá algo. Quem espera o momento perfeito perde todos os momentos.' },
    { numero: 47, titulo: '"Se eu fizesse tudo certo, funcionaria sozinho"', verdade: 'Não existe fórmula mágica. Existe método. Existe consistência. Existe paciência. O que funciona para um pode não funcionar para outro no mesmo tempo. Mas funciona para quem persiste.' }
  ]
};

export default function MapaInvisivelPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['mentalidade']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const sections = [
    { id: 'mentalidade', title: 'Mentalidade', subtitle: 'Crenças que te fazem adiar', icon: Brain, count: 15, data: armadilhasData.mentalidade },
    { id: 'posicionamento', title: 'Posicionamento', subtitle: 'Erros que te deixam invisível', icon: Target, count: 15, data: armadilhasData.posicionamento },
    { id: 'execucao', title: 'Execução', subtitle: 'Falhas que matam o conteúdo', icon: Zap, count: 17, data: armadilhasData.execucao }
  ];

  return (
    <div className="min-h-screen bg-empire-bg text-empire-text font-body antialiased">
      {/* Styles */}
      <style jsx global>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0b; }
        ::-webkit-scrollbar-thumb { background: #27272a; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #c9a962; }

        .text-gold-gradient {
          background: linear-gradient(135deg, #c9a962 0%, #e4d4a5 50%, #c9a962 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(201, 169, 98, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 169, 98, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .card-gold-border {
          border: 1px solid transparent;
          background: linear-gradient(#18181b, #18181b) padding-box,
                      linear-gradient(135deg, rgba(201, 169, 98, 0.5), rgba(228, 212, 165, 0.5), rgba(201, 169, 98, 0.5)) border-box;
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.3), transparent);
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-empire-bg/90 backdrop-blur-md border-b border-empire-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-empire-muted hover:text-empire-gold transition-colors group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs sm:text-sm tracking-wide">Voltar</span>
          </Link>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-empire-gold" />
            <span className="font-display text-sm sm:text-base font-medium">O Mapa Invisível</span>
          </div>
          <div className="w-12 sm:w-16" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden pt-14 sm:pt-20">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-empire-gold/5 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-empire-gold/30 bg-empire-gold/5 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-empire-gold rounded-full animate-pulse" />
              <span className="text-empire-gold text-[10px] sm:text-xs tracking-widest uppercase">Material Exclusivo</span>
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-2 sm:mb-4 leading-tight">
              <span className="text-gold-gradient">O Mapa</span>
              <br />
              <span className="text-empire-text">Invisível</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl md:text-2xl text-empire-muted max-w-xl mx-auto mb-1 sm:mb-2 font-light px-2">
              47 Armadilhas Que Matam Sua Autoridade Digital
            </p>
            <p className="text-empire-gold/70 text-sm sm:text-base md:text-lg italic mb-6 sm:mb-10">(E Você Nem Percebe)</p>

            {/* Introduction Card */}
            <div className="max-w-xl mx-auto p-4 sm:p-6 md:p-8 bg-empire-card border border-empire-border mb-6 sm:mb-10">
              <p className="text-empire-muted text-xs sm:text-sm leading-relaxed mb-3">
                Se você está lendo este material, provavelmente já sentiu isso:
              </p>
              <p className="text-empire-gold text-base sm:text-lg md:text-xl font-display font-medium mb-3">
                "Você tem autoridade no mundo real. Mas no digital... parece que não existe."
              </p>
              <p className="text-empire-muted text-xs sm:text-sm leading-relaxed">
                Não é falta de conhecimento. Não é falta de esforço.
                <span className="text-empire-text font-medium block sm:inline"> É algo mais sutil.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto">
              {[
                { number: '15', label: 'Mentalidade' },
                { number: '15', label: 'Posicionamento' },
                { number: '17', label: 'Execução' }
              ].map((stat, i) => (
                <div key={i} className="text-center py-3 sm:py-4 px-2 border border-empire-border bg-empire-surface/50">
                  <p className="font-display text-xl sm:text-3xl md:text-4xl text-gold-gradient">{stat.number}</p>
                  <p className="text-empire-muted text-[9px] sm:text-xs tracking-widest uppercase mt-0.5 sm:mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-empire-gold/50" />
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Armadilhas Sections */}
      <section className="py-10 sm:py-16 md:py-24 relative">
        <div className="grid-pattern absolute inset-0 opacity-30" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative space-y-4 sm:space-y-6">
          {sections.map((section, sectionIndex) => {
            const isExpanded = expandedSections.includes(section.id);
            const Icon = section.icon;

            return (
              <div key={section.id} className={`fade-in-up ${sectionIndex === 0 ? 'visible' : ''}`}>
                <div className="bg-empire-surface border border-empire-border overflow-hidden">
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-4 sm:p-5 md:p-6 flex items-center justify-between hover:bg-empire-card/50 transition-colors group active:bg-empire-card/50"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="p-2.5 sm:p-3 md:p-4 bg-empire-gold/10 border border-empire-gold/20 group-hover:bg-empire-gold/20 transition-colors">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-empire-gold" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-display text-base sm:text-lg md:text-xl font-medium text-empire-text">{section.title}</h3>
                        <p className="text-empire-muted text-xs sm:text-sm hidden sm:block">{section.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-empire-card border border-empire-border text-empire-muted text-[10px] sm:text-xs">
                        {section.count}
                      </span>
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-empire-gold transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {/* Section Content */}
                  <div className={`overflow-hidden transition-all duration-400 ${isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-6 space-y-3 sm:space-y-4">
                      {section.data.map((item) => (
                        <div key={item.numero} className="group p-3 sm:p-4 md:p-5 bg-empire-card border border-empire-border hover:border-empire-gold/30 transition-colors">
                          <div className="flex gap-3 sm:gap-4">
                            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-empire-surface border border-empire-border flex items-center justify-center group-hover:border-empire-gold/30 transition-colors">
                              <span className="font-display text-sm sm:text-base md:text-lg text-empire-gold">#{item.numero}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-empire-text font-medium text-sm sm:text-base md:text-lg mb-2 sm:mb-3 leading-snug">{item.titulo}</h4>
                              <div className="flex gap-2 sm:gap-3">
                                <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-empire-gold flex-shrink-0 mt-0.5" />
                                <p className="text-empire-muted text-xs sm:text-sm leading-relaxed">{item.verdade}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Caminho de Saída */}
      <section className="py-10 sm:py-16 md:py-24 bg-empire-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-empire-gold/5 to-transparent opacity-50" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-500/30 bg-green-500/5 mb-4 sm:mb-6 md:mb-8">
              <Unlock className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
              <span className="text-green-500 text-[10px] sm:text-xs tracking-widest uppercase">O Caminho de Saída</span>
            </div>

            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 sm:mb-4 px-2">
              Agora você <span className="text-gold-gradient">VÊ</span> o que antes era invisível
            </h2>
            <p className="text-empire-muted max-w-md mx-auto text-sm sm:text-base">
              Provavelmente você se identificou com várias dessas armadilhas.
              <span className="text-empire-text"> Isso não é ruim. É BOM.</span>
            </p>
          </div>

          {/* Key Message Card */}
          <div className="card-gold-border p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 md:mb-12 fade-in-up">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-empire-gold flex-shrink-0 mx-auto sm:mx-0" />
              <div className="text-center sm:text-left">
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-medium text-empire-text mb-3 sm:mb-4">
                  A pergunta que fica:
                </h3>
                <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-empire-gold mb-4 sm:mb-6">
                  Quantos anos você está disposto a gastar cometendo esses erros sozinho?
                </p>
                <p className="text-empire-muted text-xs sm:text-sm md:text-base leading-relaxed">
                  Todas as pessoas que você admira no digital — que têm clareza de posicionamento,
                  que produzem conteúdo consistente, que convertem seguidores em clientes —
                  <span className="text-empire-text font-medium"> TODAS elas tiveram ajuda.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
            {[
              { icon: Clock, title: 'Economize anos', desc: '3 anos sozinho = 3 meses com método' },
              { icon: CheckCircle, title: 'Evite erros', desc: 'Erros que outros já cometeram' },
              { icon: TrendingUp, title: 'Clareza rápida', desc: 'Sem meses de tentativa e erro' },
              { icon: Users, title: 'Execute certo', desc: 'Sabendo que está no caminho' }
            ].map((benefit, i) => (
              <div key={i} className="p-3 sm:p-4 md:p-5 bg-empire-card border border-empire-border hover:border-empire-gold/30 transition-colors fade-in-up">
                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                  <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-empire-gold" />
                  <span className="text-empire-text font-medium text-xs sm:text-sm">{benefit.title}</span>
                </div>
                <p className="text-empire-muted text-[10px] sm:text-xs">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 md:py-24 relative">
        <div className="grid-pattern absolute inset-0 opacity-30" />

        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative">
          <div className="card-gold-border p-5 sm:p-6 md:p-8 lg:p-10 text-center fade-in-up">
            <BookOpen className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 text-empire-gold mx-auto mb-4 sm:mb-6 md:mb-8" />

            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-empire-text mb-2 sm:mb-3">
              Retiro Anti-Carnaval
            </h3>
            <p className="text-empire-muted mb-6 sm:mb-8 tracking-wide text-xs sm:text-sm">
              14 a 17 de Fevereiro de 2026
            </p>

            <ul className="text-left space-y-2.5 sm:space-y-3 md:space-y-4 mb-6 sm:mb-8 md:mb-10 max-w-sm mx-auto">
              {[
                'Definir seu posicionamento de uma vez',
                'Criar seu Brand Book completo',
                'Estabelecer suas temáticas de conteúdo',
                'Sair com um plano de 90 dias pronto'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-empire-muted text-xs sm:text-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-empire-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-4 sm:p-5 md:p-6 bg-empire-surface border border-empire-border mb-6 sm:mb-8">
              <p className="font-display text-base sm:text-lg md:text-xl text-empire-gold italic">
                "Você está apenas um posicionamento de distância do resultado que procura."
              </p>
            </div>

            <p className="text-empire-muted text-xs sm:text-sm tracking-wide">
              Enquanto o mundo carnavala...
              <br />
              <span className="text-empire-text font-medium text-sm sm:text-base">VOCÊ CONSTRÓI.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 md:py-10 bg-empire-surface border-t border-empire-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-3 sm:gap-4 text-center">
            <div className="flex items-center gap-2">
              <Map className="w-4 h-4 sm:w-5 sm:h-5 text-empire-gold" />
              <span className="font-display text-sm sm:text-base">O Mapa Invisível</span>
            </div>
            <p className="text-empire-muted text-[10px] sm:text-xs">
              Material produzido pelo Acelerador de Audiência
            </p>
            <p className="text-empire-muted text-[10px] sm:text-xs tracking-wide">
              © 2026 Retiro Anti-Carnaval
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
