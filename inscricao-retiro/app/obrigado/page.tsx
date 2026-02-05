'use client';

import { useState, useEffect } from 'react';
import { Check, Calendar, Clock, Users, MessageCircle, Notebook, Pen, Laptop, Wifi, ArrowRight, X } from 'lucide-react';

// Datas do evento
const EVENT_START_DATE = new Date('2026-03-14T10:00:00-03:00');
const EVENT_END_DATE = new Date('2026-03-17T18:00:00-03:00');

// Link do grupo de WhatsApp (Substituir pela URL real)
const WHATSAPP_GROUP_LINK = process.env.NEXT_PUBLIC_WHATSAPP_GROUP_LINK || '#';
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5511999999999';

// Confetti component
function Confetti() {
  const colors = ['#D4AF37', '#F4D03F', '#000000', '#FFFFFF'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {Array.from({ length: 50 }).map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 3;
        const duration = 3 + Math.random() * 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 5 + Math.random() * 10;

        return (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${left}%`,
              top: '-20px',
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}

// Steps para "Próximos Passos"
const nextSteps = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Passo 1: Confirme seu e-mail',
    description: 'Verifique sua caixa de entrada e confirme sua inscrição.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Passo 2: Entre no grupo exclusivo',
    description: 'Acesse o grupo de WhatsApp para conectar com outros participantes.',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Passo 3: Prepare-se para o Dia 1',
    description: 'Reserve 14/03 às 10h na sua agenda.',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Passo 4: Transforme sua autoridade',
    description: 'Em 4 dias, você sai com posicionamento definido.',
  },
];

// Checklist de preparação
const preparationItems = [
  { icon: <Notebook className="w-5 h-5" />, text: 'Notebook ou caderno' },
  { icon: <Pen className="w-5 h-5" />, text: 'Caneta' },
  { icon: <Laptop className="w-5 h-5" />, text: 'Computador' },
  { icon: <Wifi className="w-5 h-5" />, text: 'Conexão estável' },
  { icon: <Check className="w-5 h-5" />, text: 'Disposição para transformar' },
];

export default function ObrigadoPage() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [formData, setFormData] = useState({
    mainChallenge: '',
    expectation: '',
  });
  const [surveySubmitted, setSurveySubmitted] = useState(false);

  useEffect(() => {
    // Parar confetti após 5 segundos
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSurveySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envio da pesquisa
    setSurveySubmitted(true);
  };

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {showConfetti && <Confetti />}

      {/* HERO - Você está dentro! */}
      <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
        {/* Logo */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-80 z-10">
          <img src="/logos/logotipo-02.png" alt="Acelerador de Audiência" className="h-12 md:h-16" />
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-bg to-black" />

        <div className="relative z-10 container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold text-gold rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <Check className="w-4 h-4" />
              INSCRIÇÃO CONFIRMADA!
            </div>

            <h1 className="text-hero-xl md:text-hero-xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              VOCÊ ESTÁ <span className="text-gold">DENTRO!</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in-up">
              Bem-vindo ao Retiro Anti-Carnaval
            </p>

            <p className="text-xl text-gray-400 mb-12 animate-fade-in-up">
              Prepare-se para 4 dias de transformação
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={WHATSAPP_GROUP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg px-10 py-5 bg-green-success hover:bg-green-success/90"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Entrar no Grupo de WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            {/* Mini Timer */}
            <div className="bg-dark-bg border border-gray-800 rounded-2xl p-6 max-w-md mx-auto">
              <p className="text-gray-500 mb-4 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                O evento começa em:
              </p>
              <p className="text-2xl font-bold text-gold">
                14 de Março de 2026 às 10h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRÓXIMOS PASSOS */}
      <section className="section-padding bg-white">
        {/* Logo fundo claro */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-80">
          <img src="/logos/logotipo-03.png" alt="Acelerador de Audiência" className="h-12 md:h-16" />
        </div>

        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title !text-black">
              Próximos <span className="text-gold">Passos</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {nextSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 hover:border-gold transition-colors"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                  <div className="text-gold mb-4 mt-2">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DATA E HORA */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title !text-black">
              Marque na sua <span className="text-gold">Agenda</span>
            </h2>

            <div className="bg-white border-2 border-gold rounded-3xl p-8 md:p-12 shadow-xl shadow-gold/10">
              <Calendar className="w-16 h-16 text-gold mx-auto mb-6" />

              <div className="text-5xl md:text-6xl font-black text-black mb-4">
                14-17
              </div>
              <div className="text-2xl text-gray-600 mb-8">de Março de 2026</div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 mb-2">Horário das aulas:</p>
                <p className="text-xl font-semibold text-black">
                  Manhã: 10h • Tarde: 17h (retorno)
                </p>
              </div>

              <div className="mt-8 p-4 bg-gold/10 rounded-xl">
                <p className="text-gold font-semibold">
                  4 dias de imersão. 0 distrações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARAÇÃO */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">
              O que você <span className="text-gold">precisa</span>
            </h2>

            <div className="bg-dark-bg border border-gray-800 rounded-2xl p-8">
              <div className="space-y-4">
                {preparationItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-black/50 rounded-xl border border-gray-800"
                  >
                    <div className="text-gold">{item.icon}</div>
                    <span className="text-gray-300">{item.text}</span>
                    <Check className="w-5 h-5 text-green-success ml-auto" />
                  </div>
                ))}
              </div>

              <p className="text-gray-500 text-sm mt-6 text-center">
                💡 Dica: prepare seu espaço com antecedência para aproveitar ao máximo cada aula.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PESQUISA + WHATSAPP */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Pesquisa */}
            {!surveySubmitted ? (
              <div className="bg-black border border-gray-800 rounded-2xl p-6 md:p-10 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  Antes de começar...
                </h3>
                <p className="text-gray-400 text-center mb-8">
                  Para prepararmos tudo para você, responda rapidamente:
                </p>

                <form onSubmit={handleSurveySubmit} className="space-y-6">
                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-gray-400 mb-2">
                      Qual seu maior desafio hoje no digital? *
                    </label>
                    <textarea
                      id="challenge"
                      value={formData.mainChallenge}
                      onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}
                      className="form-input min-h-[100px] resize-none"
                      placeholder="Ex: Consigo ter resultado offline, mas online ninguém me conhece..."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="expectation" className="block text-sm font-medium text-gray-400 mb-2">
                      O que você espera levar do Retiro?
                    </label>
                    <textarea
                      id="expectation"
                      value={formData.expectation}
                      onChange={(e) => setFormData({ ...formData, expectation: e.target.value })}
                      className="form-input min-h-[100px] resize-none"
                      placeholder="Ex: Quero sair com meu posicionamento definido..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Enviar Respostas
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-green-success/20 border border-green-success rounded-2xl p-6 md:p-10 mb-8 text-center">
                <Check className="w-16 h-16 text-green-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Obrigado pela sua resposta!
                </h3>
                <p className="text-gray-400">
                  Isso nos ajuda a personalizar sua experiência no Retiro.
                </p>
              </div>
            )}

            {/* CTA WhatsApp */}
            <div className="bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 rounded-2xl p-8 md:p-12 text-center">
              <MessageCircle className="w-16 h-16 text-gold mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                O grupo espera por você
              </h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Conecte-se com outros profissionais que escolheram crescer durante o carnaval.
                Networking, troca de experiências e muito mais.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  Acessar Grupo Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-hero-lg md:text-hero-xl font-bold text-white mb-6">
              Te vejo em <span className="text-gold">4 dias</span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Enquanto o mundo carnavala, você constrói.
            </p>

            <p className="text-gold text-2xl font-semibold mb-12">
              O crescimento começa agora.
            </p>

            <div className="bg-dark-bg border border-gray-800 rounded-2xl p-8">
              <Clock className="w-12 h-12 text-gold mx-auto mb-4" />
              <p className="text-gray-400 mb-2">
                Primeira aula:
              </p>
              <p className="text-2xl font-bold text-white">
                Sábado, 14/03 às 10h
              </p>
              <p className="text-gray-500 mt-4 text-sm">
                O link será enviado no WhatsApp 1h antes.
              </p>
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

function Trophy({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
