'use client';

import { useEffect, useState } from 'react';

export default function ObrigadoPage() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; top: string; rotation: string; delay: string }>>([]);

  useEffect(() => {
    // Create celebration confetti
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      rotation: `${Math.random() * 360}deg`,
      delay: `${Math.random() * 2}s`,
    }));
    setConfetti(newConfetti);
  }, []);

  const steps = [
    { num: '01', title: 'Confirme seu e-mail', desc: 'Verifique sua caixa de entrada e pasta de spam.', icon: '📧' },
    { num: '02', title: 'Acesse o grupo exclusivo', desc: 'Você receberá o link do WhatsApp 24h antes do evento.', icon: '💬' },
    { num: '03', title: 'Prepare-se para o retiro', desc: 'Organize sua agenda. 14-17 de fevereiro são para transformar seu ano.', icon: '📅' },
  ];

  const bringItems = [
    'Bloco de notas ou dispositivo para anotações',
    'Mente aberta para aprender',
    'Disposição para aplicar o que aprender',
    'Uma pergunta: onde quero chegar em 90 dias?',
  ];

  return (
    <div>
      {/* Background Effects */}
      <div className="carnaval-glow" />
      <div className="confetti-container">
        {confetti.map(c => (
          <div
            key={c.id}
            className="confetti"
            style={{
              left: c.left,
              top: c.top,
              transform: `rotate(${c.rotation})`,
              animationDelay: c.delay,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Logo */}
      <div style={{ position: 'fixed', top: '1.5rem', right: '1.5rem', zIndex: 10 }}>
        <img src="/logo-dark.png" alt="" style={{ width: '110px', opacity: 0.9 }} />
      </div>

      {/* Hero */}
      <section className="hero" style={{ minHeight: 'auto', padding: '8rem 1.5rem 6rem' }}>
        <div className="container">
          {/* Success Icon */}
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #27AE60 0%, #1e8449 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2.5rem',
            boxShadow: '0 8px 40px rgba(39, 174, 96, 0.3)',
            animation: 'float 3s ease-in-out infinite'
          }}>
            <svg width="48" height="36" viewBox="0 0 24 18" fill="none">
              <path d="M2 9L8 15L16 4" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 style={{ marginBottom: '1rem' }}>
            Inscrição <span className="text-gold">confirmada!</span>
          </h1>

          <p className="hero-subtitle">
            Parabéns! Você deu o primeiro passo para transformar sua presença digital.
          </p>

          <div style={{
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '16px',
            padding: '2.5rem',
            maxWidth: '450px',
            margin: '3rem auto 0'
          }}>
            <p className="text-gold" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
              Quando
            </p>
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>
              14 a 17 de Fevereiro de 2026
            </p>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '0.5rem' }}>
              Aulas ao vivo • Não ficam gravadas
            </p>
          </div>

          {/* Window glow */}
          <div className="window-glow" style={{ top: '20%', right: '-10%' }} />
        </div>
      </section>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <h2 className="text-center mb-6">Por onde começar</h2>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: i < steps.length - 1 ? '3rem' : '0',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  color: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1.125rem',
                  flexShrink: 0,
                  boxShadow: '0 4px 20px rgba(212, 175, 55, 0.25)'
                }}>
                  {step.num}
                </div>

                <div className="card" style={{ flex: 1, padding: '1.5rem 2rem' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{step.icon}</div>
                  <h4 style={{ marginBottom: '0.5rem', color: '#fff' }}>{step.title}</h4>
                  <p style={{ fontSize: '0.9375rem', margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="separator" />

      {/* What to bring */}
      <section className="section">
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 className="text-center mb-6">Para trazer ao retiro</h2>

          <div className="grid grid-2">
            {bringItems.map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem 1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{
                    width: '24px',
                    height: '24px',
                    background: 'rgba(39, 174, 96, 0.15)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#27AE60',
                    fontSize: '0.75rem',
                    fontWeight: 700
                  }}>✓</span>
                  <span style={{ fontSize: '0.9375rem', color: 'rgba(255, 255, 255, 0.7)' }}>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.5) 0%, transparent 100%)' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <div className="text-center">
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💬</div>
            <h2 className="mb-4">Comunidade exclusiva</h2>
            <p style={{ marginBottom: '2rem' }}>
              Durante o retiro, você terá acesso a uma comunidade exclusiva onde poderá trocar
              experiências, tirar dúvidas e fazer networking com outros profissionais que também estão
              construindo sua presença digital.
            </p>

            <div className="card" style={{ borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <p className="text-gold" style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                📱 O link do grupo será enviado por e-mail e WhatsApp 24h antes do evento
              </p>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                Fique atento! Não deixe para conferir na última hora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reminder */}
      <section className="section">
        <div className="container" style={{ maxWidth: '650px' }}>
          <div className="text-center">
            <h2 className="mb-4" style={{ fontSize: '1.75rem' }}>🔔 Lembrete importante</h2>
            <p className="mb-6">
              As aulas são <strong className="text-white">ao vivo e não ficarão gravadas</strong>. Reserve esses dias na sua agenda.
            </p>

            <div style={{
              background: 'rgba(231, 76, 60, 0.1)',
              border: '1px solid rgba(231, 76, 60, 0.25)',
              borderRadius: '12px',
              padding: '2rem'
            }}>
              <p style={{ color: '#E74C3C', fontWeight: 600, fontSize: '1rem' }}>
                ⚠️ Não perca! O conteúdo de cada dia é essencial para o próximo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share */}
      <section className="section" style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(212, 175, 55, 0.03) 100%)' }}>
        <div className="container text-center">
          <h2 className="mb-4">Convide alguém</h2>
          <p className="mb-6" style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
            O processo de transformação é mais poderoso quando compartilhado.
          </p>

          <a
            href="https://wa.me/?text=Vou%20participar%20do%20Retiro%20Anti-Carnaval!%20Vem%20comigo!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Compartilhar no WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Final message */}
      <section className="section">
        <div className="container text-center">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p className="text-gold" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>
              Enquanto o mundo carnavala,
            </p>
            <p style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '2rem' }}>
              você constrói.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4rem',
              padding: '2rem',
              background: 'rgba(212, 175, 55, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(212, 175, 55, 0.1)'
            }}>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#D4AF37' }}>4</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255, 255, 255, 0.5)' }}>
                  Dias
                </div>
              </div>
              <div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#D4AF37' }}>Fev</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255, 255, 255, 0.5)' }}>
                  2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.875rem' }}>
            © 2026 Acelerador de Audiência. Todos os direitos reservados.
          </p>
          <div className="footer-links">
            <a href="/inscricao">Voltar</a>
            <a href="#">Contato</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
