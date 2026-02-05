'use client';

import { useState, useEffect } from 'react';
import { Check, X, ChevronDown, ChevronUp, Calendar, Clock, Users, Trophy, Gift, Lock, ArrowRight } from 'lucide-react';

// CONFIGURAÇÃO DO TIMER
const TARGET_DATE = new Date('2026-03-13T23:59:59-03:00');

// CONFIGURAÇÃO DO FORMULÁRIO GHL (Substituir pela URL real)
const GHL_FORM_URL = process.env.NEXT_PUBLIC_GHL_FORM_URL || 'https://placeholder.ghl.form.url';
const GHL_LOCATION_ID = process.env.NEXT_PUBLIC_GHL_LOCATION_ID || 'placeholder-location-id';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const difference = TARGET_DATE.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

// FAQ Data
const faqData = [
  {
    question: 'O evento é ao vivo ou gravado?',
    answer: 'As aulas são ao vivo e não ficam gravadas, então recomenda-se assistir todas.',
  },
  {
    question: 'Preciso estar em todas as aulas?',
    answer: 'Sim. As aulas são ao vivo e não ficam gravadas, então recomenda-se assistir todas.',
  },
  {
    question: 'Preciso ter Instagram grande?',
    answer: 'Não. Na verdade, quanto menor, melhor - vamos construir do jeito certo.',
  },
  {
    question: 'Serve para qualquer nicho?',
    answer: 'Sim. O princípio de posicionamento é universal. Trabalhamos com médicos, advogados, consultores, empresários de diversos setores.',
  },
  {
    question: 'Tenho que pagar algo?',
    answer: 'O evento é 100% gratuito. Nossa proposta é entregar valor sem pedir nada em troca.',
  },
  {
    question: 'Vou vender algo durante o evento?',
    answer: 'Vamos apresentar o Acelerador de Audiência, nosso programa completo. Mas sem pressão. Se fizer sentido para você, ótimo. Se não, ainda assim o conteúdo do retiro pode transformar seu ano.',
  },
];

// Testimonials Data
const testimonials = [
  {
    name: 'Fernanda Girassol',
    credential: 'De prejuízo com tráfego a +R$100 mil/mês',
    quote: '"Eu achava que tráfego era o único caminho. Em 3 meses mudou tudo. Hoje faço +100k/mês totalmente orgânico."',
  },
  {
    name: 'Henrique',
    credential: 'De confuso a +500k seguidores',
    quote: '"Eu não sabia o que queria. Tinha autoridade mas não sabia expressar. Hoje tenho +500k seguidores e vendo minha marca."',
  },
  {
    name: 'Thiago Reis',
    credential: 'De base desengajada a vendas orgânicas',
    quote: '"Minha base era toda de tráfego e super desengajada. Transformei tudo em vendas consistentes usando conteúdo."',
  },
];

// Days Data
const daysData = [
  {
    day: 1,
    title: 'Por que você tem autoridade real mas ninguém sabe no digital',
    items: [
      'O abismo entre offline e online',
      'Por que "bom conteúdo" não é suficiente',
      'A nova era do Instagram: retenção > alcance',
    ],
  },
  {
    day: 2,
    title: 'Posicionamento - Como se tornar a ÚNICA opção no seu mercado',
    items: [
      'Os 4 elementos de um posicionamento forte',
      'Como encontrar seu diferencial único',
      'Sua declaração de posicionamento escrita',
    ],
  },
  {
    day: 3,
    title: 'Escala de conteúdo - Ter presença sem virar escravo do digital',
    items: [
      'Os 3 caminhos: Corte, Profundidade, Multi-canais',
      'Por que quantidade gera qualidade',
      'Como usar IA sem perder sua essência',
    ],
  },
  {
    day: 4,
    title: 'Seu plano de 90 dias - Do posicionamento ao resultado',
    items: [
      'Consolidar tudo em um plano de ação',
      'As 3 ações para fazer na semana que vem',
      'Como continuar avançando depois do carnaval',
    ],
  },
];

// Deliverables Data
const deliverablesData = [
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Por Dia de Evento',
    items: [
      'Dia 1 → Planilha de Auditoria Digital',
      'Dia 2 → Template de Declaração de Posicionamento',
      'Dia 3 → Grade de Conteúdo Semanal',
      'Dia 4 → Planner de 90 Dias + Certificado',
    ],
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Bônus Exclusivos',
    items: [
      'Prompts de IA para pesquisa de conteúdo',
      'Lista de referências por nicho',
      'Acesso temporário ao Empire Chat',
      'Comunidade de participantes',
    ],
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Certificado de Conclusão',
    items: [
      'Todos que completarem as tarefas recebem certificado oficial do Retiro Anti-Carnaval.',
    ],
  },
];

function Award({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export default function PaginaInscricao() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; phone?: string }>({});
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const errors: { name?: string; email?: string; phone?: string } = {};

    if (!formData.name.trim()) errors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) errors.email = 'E-mail é obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'E-mail inválido';
    if (!formData.phone.trim()) errors.phone = 'Telefone é obrigatório';
    else if (!/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ''))) errors.phone = 'Telefone inválido';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus('loading');

    try {
      // Simular envio para GHL (substituir pela integração real)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirecionar para página de obrigado
      window.location.href = '/obrigado';
    } catch (error) {
      setFormStatus('error');
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
        {/* Logo */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-80 z-10">
          <img src="/logos/logotipo-02.png" alt="Acelerador de Audiência" className="h-12 md:h-16" />
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-bg to-black" />

        <div className="relative z-10 container-custom text-center">
          <div className="animate-on-scroll" id="hero">
            <h1 className="text-hero-xl md:text-hero-xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              VOCÊ COMEÇOU O ANO...
              <br />
              <span className="text-gold">MAS NA VERDADE NÃO COMEÇOU O ANO</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Em 4 dias, saia do carnaval com seu posicionamento digital
              <br />
              definido e um plano completo para ampliar sua autoridade do
              <br />
              mundo real para o mundo digital.
            </p>

            <div className="flex flex-col items-center gap-4 mb-12">
              <button
                onClick={() => document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full md:w-auto text-lg px-10 py-5"
              >
                QUERO PARTICIPAR GRÁTIS
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <p className="text-gray-500 text-sm flex items-center gap-2">
                <span>🎁</span> Gratuito • Vagas limitadas • 100% online
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-8">
              <p className="text-gray-500 mb-4 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                Começa em:
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {[
                  { label: 'Dias', value: timeLeft.days },
                  { label: 'Horas', value: timeLeft.hours },
                  { label: 'Minutos', value: timeLeft.minutes },
                  { label: 'Segundos', value: timeLeft.seconds },
                ].map((unit) => (
                  <div key={unit.label} className="countdown-unit">
                    <div className="countdown-number" suppressHydrationWarning>
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="countdown-label">{unit.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PROBLEMA */}
      <section className="section-padding bg-dark-gray">
        <div className="container-custom">
          <div className="animate-on-scroll" id="problema">
            <h2 className="section-title">
              VOCÊ TEM AUTORIDADE NO MUNDO REAL.
              <br />
              <span className="text-gold">MAS NO DIGITAL... É COMO SE NÃO EXISTISSE.</span>
            </h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Você já sentiu aquela frustração?
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Vê pessoas com <span className="text-white font-semibold">MENOS resultado</span> que você, com{' '}
                <span className="text-white font-semibold">MENOS experiência</span>, com{' '}
                <span className="text-white font-semibold">MENOS sucesso</span> no mundo real... tendo{' '}
                <span className="text-gold font-semibold">MUITO mais destaque</span> no Instagram?
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Isso é mais comum do que você imagina.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                E o pior não é isso. O pior é saber que você tem algo valioso para oferecer. Tem experiência real.
                Tem resultado comprovado. Tem histórias de clientes transformados.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                Mas quando vai para o Instagram... silêncio.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Posts com 30 likes',
                  'Zero qualificados chegando no seu DM',
                  'A sensação de que "digital não é pra mim"',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-400">
                    <X className="w-5 h-5 text-red-accent flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 leading-relaxed mb-4">E aí bate aquela culpa:</p>

              <div className="space-y-2 italic text-gray-500">
                <p>"Por que fulano que abriu ontem já tem mais seguidores?"</p>
                <p>"O que estou fazendo errado?"</p>
                <p>"Será que digital não é o meu caminho?"</p>
              </div>

              <p className="text-gold text-center mt-8 font-semibold">
                Se você se identifica com isso, continue lendo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO EPIPHANY BRIDGE */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="animate-on-scroll" id="epiphany">
            <h2 className="section-title text-gold">
              DESCOBRIMOS QUE O PROBLEMA NÃO É VOCÊ
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-gray-400 leading-relaxed mb-6">
                Há alguns anos, observávamos algo que se repetia...
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Médicos com consultório cheio. Empresários com empresas lucrativas. Mentores com dezenas de
                alunos satisfeitos.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Todos com autoridade no mundo real. Todos com resultado comprovado.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Mas no digital? Nada.
              </p>

              <p className="text-gray-400 leading-relaxed mb-8">
                E o mais confuso era ver pessoas - gente com muito menos resultado, menos experiência, menos
                tudo - tendo <span className="text-white">MUITO mais sucesso no Instagram</span>.
              </p>

              <div className="bg-dark-bg border-l-4 border-gold p-6 rounded-r-xl mb-8">
                <p className="text-xl text-white font-serif italic">
                  A pergunta que fizemos foi: "O que eles têm que esses profissionais não têm?"
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                A resposta que encontramos mudou tudo.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Não era sobre ser mais bonito. Mais carismático. Mais engraçado. Mais talentoso em vídeo.
              </p>

              <p className="text-gold text-xl font-semibold mb-6">
                Era sobre POSICIONAMENTO.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Esses profissionais estavam tentando ser "mais um" no digital. Falando de tudo. Tentando
                agradar todo mundo.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Enquanto isso, as pessoas que tinham sucesso?
              </p>

              <p className="text-white text-lg font-semibold mb-8">
                Elas falavam de UMA coisa. Para UM público. Com UMA posição clara.
              </p>

              <div className="bg-dark-bg border-l-4 border-gold p-6 rounded-r-xl mb-8">
                <p className="text-xl text-white font-serif italic">
                  E foi aí que descobrimos: O digital não premia quem é "bom". O digital premia quem é{' '}
                  <span className="text-gold">CLARO</span>.
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                Quando ajudamos esses profissionais a definirem seu posicionamento... Tudo mudou.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Seguidores passaram a vir. Qualificados começaram a aparecer. O mesmo resultado que tinham no
                mundo real, passaram a ter no digital também.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Foi isso que levou a gente a gerar <span className="text-gold font-semibold">R$ 1 milhão em vendas orgânicas</span>. Com +10 perfis próprios. Centenas de alunos atendidos.
              </p>

              <p className="text-white text-xl font-semibold text-center mt-8">
                Agora, queremos ensinar exatamente como fazer isso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOLUÇÃO */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="animate-on-scroll" id="solucao">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-success/20 border border-green-success text-green-success rounded-full text-sm font-semibold mb-6">
                <Check className="w-4 h-4" />
                GRÁTITO
              </span>
              <h2 className="section-title">
                APRESENTO O RETIRO ANTICARNAVAL
              </h2>
              <p className="text-xl text-gray-400">4 dias. 100% online. Totalmente gratuito.</p>
            </div>

            <div className="max-w-3xl mx-auto mb-16 text-center">
              <p className="text-gray-300 leading-relaxed mb-6">
                O Retiro Anti-Carnaval é um evento intensivo de 4 dias onde você vai <span className="text-white font-semibold">DEFINIR</span> seu
                posicionamento digital e <span className="text-white font-semibold">CRIAR</span> seu plano completo de conteúdo.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Não é uma "aula teórica" que você esquece no dia seguinte.
              </p>
              <p className="text-gold font-semibold text-lg">
                É um DESAFIO. Cada dia, você aprende e APLICA.
              </p>

              <p className="text-gray-400 mt-8 mb-4">No final, você sai com:</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  'Seu posicionamento definido',
                  'Seus temas de conteúdo escolhidos',
                  'Sua estratégia de escala traçada',
                  'Um plano de 90 dias pronto',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-dark-bg border border-gray-800 px-4 py-2 rounded-lg">
                    <Check className="w-4 h-4 text-green-success" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gold text-lg mt-8 font-semibold">
                Enquanto o resto do mundo está no carnaval, você avança.
              </p>
            </div>

            {/* Para Quem É */}
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <h3 className="text-xl font-semibold text-white mb-6">Para Quem É</h3>
              <div className="space-y-3">
                {[
                  'Empresários com sucesso offline querendo ir pro digital',
                  'Médicos e profissionais de saúde com autoridade',
                  'Mentores e consultores com resultado comprovado',
                  'Profissionais que NÃO vão ao carnaval e querem aproveitar',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-400">
                    <Check className="w-5 h-5 text-green-success flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Dias Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {daysData.map((day) => (
                <div key={day.day} className="card group relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-8xl font-black text-white/5">
                    {day.day}
                  </div>
                  <div className="relative">
                    <div className="text-gold mb-4">
                      <Calendar className="w-10 h-10" />
                    </div>
                    <p className="text-sm text-gold font-semibold mb-2">DIA {day.day}</p>
                    <h4 className="text-lg font-semibold text-white mb-4">{day.title}</h4>
                    <ul className="space-y-2">
                      {day.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-gold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENTREGÁVEIS E BÔNUS */}
      <section className="section-padding bg-dark-gray">
        <div className="container-custom">
          <div className="animate-on-scroll" id="entregaveis">
            <h2 className="section-title">
              ALÉM DO CONTEÚDO, <span className="text-gold">VOCÊ LEVA ISSO:</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {deliverablesData.map((section) => (
                <div key={section.title} className="bg-black border border-gold/30 rounded-2xl p-6">
                  <div className="text-gold mb-4">{section.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-success flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="animate-on-scroll" id="prova-social">
            <h2 className="section-title">
              QUEM JA PASSOU POR ISSO, <span className="text-gold">TRANSFORMOU:</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-dark-gray border border-gray-800 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-black">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <p className="text-gray-300 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.credential}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: <Video className="w-6 h-6" />, value: '+10', label: 'Perfis próprios gerando demanda' },
                { icon: <Trophy className="w-6 h-6" />, value: 'R$ 1M', label: 'Em vendas orgânicas geradas' },
                { icon: <Users className="w-6 h-6" />, value: 'Centenas', label: 'De alunos transformados' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-gold mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-gold mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-gray">
        <div className="container-custom max-w-3xl">
          <div className="animate-on-scroll" id="faq">
            <h2 className="section-title">PERGUNTAS FREQUENTES</h2>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-black border border-gray-800 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-dark-bg transition-colors"
                  >
                    <span className="text-lg font-semibold text-white flex items-center gap-3">
                      <span className="text-gold">❓</span>
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gold flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`accordion-content ${openFaq === index ? 'open' : ''}`}
                  >
                    <div className="px-5 pb-5 text-gray-400 pl-14">
                      <span className="text-green-success mr-2">✅</span>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESCASSEZ FINAL */}
      <section className="section-padding bg-gradient-to-b from-black to-dark-bg">
        <div className="container-custom text-center">
          <div className="animate-on-scroll" id="escassez">
            <h2 className="text-2xl md:text-3xl font-bold text-red-accent uppercase mb-8">
              AS INSCRIÇÕES ENCERRAM EM:
            </h2>

            {/* Timer Grande */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
              {[
                { label: 'Dias', value: timeLeft.days },
                { label: 'Horas', value: timeLeft.hours },
                { label: 'Minutos', value: timeLeft.minutes },
                { label: 'Segundos', value: timeLeft.seconds },
              ].map((unit) => (
                <div key={unit.label} className="bg-dark-bg border border-gray-800 rounded-2xl p-6 md:p-8 min-w-[100px] md:min-w-[130px]">
                  <div className="text-4xl md:text-6xl font-black text-gold" suppressHydrationWarning>
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-2">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-gray-400 mb-4">
                Por quê as inscrições fecham antes do carnaval?
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Simples: porque precisamos organizar os grupos e preparar os materiais para cada
                participante.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                E também porque queremos que você entre com disposição total, sem a pressa de última
                hora.
              </p>
              <p className="text-gold font-semibold">
                Então, se você quer participar, inscreva-se até quarta-feira, 13/03.
              </p>
              <p className="text-red-accent font-bold mt-4">
                Depois disso, as portas fecham.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL + FORMULÁRIO */}
      <section id="formulario" className="section-padding bg-black">
        <div className="container-custom max-w-4xl">
          <div className="animate-on-scroll" id="cta-final">
            <div className="text-center mb-12">
              <h2 className="section-title">
                PRONTO PARA <span className="text-gold">RECUPERAR</span> O COMEÇO DO SEU ANO?
              </h2>
              <p className="text-xl text-gray-400">
                Enquanto o mundo está no carnaval, você avança.
              </p>
              <p className="text-gray-400 mt-2">
                4 dias. Posicionamento definido. Plano traçado.
              </p>
              <p className="text-gold font-semibold">
                Tudo gratuito.
              </p>
            </div>

            {/* Formulário */}
            <div className="bg-dark-bg border border-gray-800 rounded-2xl p-6 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-input"
                    placeholder="Seu nome"
                  />
                  {formErrors.name && <p className="form-error">{formErrors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-input"
                    placeholder="seu@email.com"
                  />
                  {formErrors.email && <p className="form-error">{formErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-input"
                    placeholder="(11) 99999-9999"
                  />
                  {formErrors.phone && <p className="form-error">{formErrors.phone}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="btn-primary w-full text-lg py-5 animate-pulse-slow relative overflow-hidden"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <span className="spinner mr-2" />
                      Processando...
                    </>
                  ) : (
                    <>
                      QUERO PARTICIPAR DO RETIRO ANTICARNAVAL
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>

                {formStatus === 'error' && (
                  <p className="text-red-accent text-center">
                    Ocorreu um erro. Tente novamente.
                  </p>
                )}

                <p className="text-center text-gray-500 text-sm flex items-center justify-center gap-2">
                  <Lock className="w-4 h-4" />
                  É 100% gratuito. Não tem carta de irmão para assinar. Não tem cartão de crédito.
                  Só participar e aplicar.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container-custom text-center">
          <p className="text-gray-600 text-sm mb-4">
            © 2026 Acelerador de Audiência. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs mb-4">
            Este evento não é afiliado ao Instagram ou Meta. Todos os resultados mencionados são típicos e
            variam de acordo com cada indivíduo.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-gold transition-colors">
              Contato
            </a>
            <a href="#" className="text-gray-600 hover:text-gold transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-600 hover:text-gold transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Video({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}
