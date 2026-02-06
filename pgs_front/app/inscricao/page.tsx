'use client';

import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-02-13T23:59:00');

export default function InscricaoPage() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = TARGET_DATE.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const faqs = [
    { q: 'O evento é ao vivo ou gravado?', a: 'As aulas são ao vivo e não ficam gravadas.' },
    { q: 'Preciso estar em todas as aulas?', a: 'Sim. As aulas são ao vivo e não ficam gravadas, então recomenda-se assistir todas.' },
    { q: 'Preciso ter Instagram grande?', a: 'Não. Na verdade, quanto menor, melhor - vamos construir do jeito certo.' },
    { q: 'Serve para qualquer nicho?', a: 'Sim. O princípio de posicionamento é universal.' },
    { q: 'Tenho que pagar algo?', a: 'O evento é 100% gratuito.' },
    { q: 'Vou vender algo durante o evento?', a: 'Vamos apresentar o Acelerador de Audiência. Mas sem pressão.' },
  ];

  const days = [
    {
      num: 1,
      title: 'Por que você tem autoridade real mas ninguém sabe no digital',
      items: ['O abismo entre offline e online', 'Por que "bom conteúdo" não é suficiente', 'A nova era: retenção > alcance']
    },
    {
      num: 2,
      title: 'Posicionamento - Como se tornar a ÚNICA opção',
      items: ['Os 4 elementos de um posicionamento forte', 'Como encontrar seu diferencial único', 'Sua declaração escrita']
    },
    {
      num: 3,
      title: 'Escala de conteúdo - Ter presença sem virar escravo',
      items: ['Os 3 caminhos: Corte, Profundidade, Multi-canais', 'Por que quantidade gera qualidade', 'Como usar IA sem perder essência']
    },
    {
      num: 4,
      title: 'Seu plano de 90 dias - Do posicionamento ao resultado',
      items: ['Consolidar tudo em um plano de ação', 'As 3 ações para a semana que vem', 'Como continuar avançando']
    },
  ];

  const deliverables = [
    { title: 'Por Dia de Evento', items: ['Planilha de Auditoria Digital', 'Template de Posicionamento', 'Grade de Conteúdo Semanal', 'Planner de 90 Dias'] },
    { title: 'Bônus Exclusivos', items: ['Prompts de IA para conteúdo', 'Lista de referências por nicho', 'Acesso ao Empire Chat', 'Comunidade de participantes'] },
    { title: 'Certificado', items: ['Todos que completarem as tarefas recebem certificado oficial'] },
  ];

  return (
    <div className="page-wrapper">
      {/* Logo fixo */}
      <div className="fixed-logo">
        <img src="/logo-dark.png" alt="" width="100" height="36" />
      </div>

      {/* HERO - Cena cinematográfica do carnaval */}
      <section className="hero-section">
        {/* Background imagem do carnaval */}
        <div className="hero-background">
          <img
            src="/images/decorative/carnival-street.png"
            alt=""
            width="1920"
            height="1080"
            className="hero-bg-image"
          />
          <div className="hero-overlay" />
        </div>

        {/* Janela/metáfora visual */}
        <div className="hero-window-frame">
          <div className="window-glow-left" />
          <div className="window-glow-right" />
        </div>

        <div className="hero-container">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>Retiro Anti-Carnaval</span>
            <span className="badge-dot" />
          </div>

          {/* Headline principal */}
          <h1 className="hero-title">
            <span className="title-line">Você começou o ano.</span>
            <span className="title-line title-gold">Mas na verdade não começou.</span>
          </h1>

          {/* Subtítulo */}
          <p className="hero-subtitle">
            Enquanto o mundo está no carnaval, você constrói. Em 4 dias, saia com seu
            posicionamento digital definido e um plano completo para ampliar sua autoridade do mundo
            real para o mundo digital.
          </p>

          {/* CTA Principal */}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            <span>Quero Participar Grátis</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Meta infos */}
          <div className="hero-meta">
            <span className="meta-item">🎁 Gratuito</span>
            <span className="meta-divider">•</span>
            <span className="meta-item">Vagas limitadas</span>
            <span className="meta-divider">•</span>
            <span className="meta-item">100% online</span>
          </div>

          {/* Countdown */}
          <div className="hero-countdown">
            {[
              { value: String(timeLeft.days).padStart(2, '0'), label: 'Dias' },
              { value: String(timeLeft.hours).padStart(2, '0'), label: 'Horas' },
              { value: String(timeLeft.minutes).padStart(2, '0'), label: 'Min' },
              { value: String(timeLeft.seconds).padStart(2, '0'), label: 'Seg' },
            ].map((item, i) => (
              <div key={i} className="countdown-block">
                <div className="countdown-value">{item.value}</div>
                <div className="countdown-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span>Role para descobrir</span>
        </div>
      </section>

      {/* PROBLEMA - Split com imagem */}
      <section className="problem-section">
        <div className="problem-container">
          <div className="problem-content">
            <span className="section-label">O Problema</span>

            <h2 className="problem-title">
              Você tem autoridade no mundo real.<br />
              <span className="text-muted">Mas no digital...</span>
              <span className="text-gold"> é como se não existisse.</span>
            </h2>

            <p className="problem-text">
              Vê pessoas com <strong className="text-white">menos resultado</strong> que você, com{' '}
              <strong className="text-white">menos experiência</strong>, com <strong className="text-white">menos sucesso</strong> no
              mundo real... tendo <strong className="text-gold">muito mais destaque</strong> no digital?
            </p>

            <p className="problem-text">
              Isso é mais comum do que você imagina. Você tem experiência real,
              resultado comprovado, histórias de clientes transformados.
            </p>

            <p className="problem-text">
              Mas quando vai para o Instagram... silêncio.
            </p>

            {/* Painel de negativos */}
            <div className="problem-pain-box">
              {['Posts com 30 likes', 'Zero qualificados no DM', 'Digital não é pra mim'].map((item, i) => (
                <div key={i} className="pain-item">
                  <span className="pain-icon">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagem do carnaval (o "distração") */}
          <div className="problem-visual">
            <div className="carnival-side-panel">
              <img
                src="/images/decorative/carnival-parade.png"
                alt=""
                width="800"
                height="1200"
                className="carnival-side-image"
              />
              <div className="carnival-side-overlay">
                <span className="side-label">O mundo lá fora</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSIÇÃO - A descoberta */}
      <section className="epiphany-section">
        <div className="epiphany-container">
          {/* Imagem hero-carnival-window */}
          <div className="epiphany-visual">
            <img
              src="/images/hero-carnival-window.png"
              alt=""
              width="1200"
              height="675"
              className="epiphany-image"
            />
          </div>

          <div className="epiphany-content">
            <span className="section-label">A Descoberta</span>

            <h2 className="epiphany-title">
              O problema não é você.<br />
              <span className="text-gold">É o posicionamento.</span>
            </h2>

            <blockquote className="epiphany-quote">
              O digital não premia quem é "bom". O digital premia quem é{' '}
              <strong>CLARO</strong>.
            </blockquote>

            <p className="epiphany-text">
              Quando ajudamos esses profissionais a definirem seu posicionamento, tudo mudou.{' '}
              <span className="text-gold">Foi assim que geramos R$ 1 milhão em vendas orgânicas.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SOLUÇÃO - 4 Dias com cards */}
      <section className="solution-section">
        <div className="solution-container">
          <div className="solution-header">
            <span className="solution-badge">4 dias • 100% online • Gratuito</span>
            <h2 className="solution-title">Apresento o Retiro Anti-Carnaval</h2>
            <p className="solution-subtitle">
              Não é uma aula teórica. É um <strong>DESAFIO</strong>.
              Cada dia, você aprende e <strong className="text-gold">APLICA</strong>.
            </p>
          </div>

          <div className="days-grid">
            {days.map((day) => (
              <div key={day.num} className="day-card">
                <div className="day-header">
                  <span className="day-number">0{day.num}</span>
                  <div className="day-divider" />
                </div>
                <h3 className="day-title">{day.title}</h3>
                <ul className="day-list">
                  {day.items.map((item, i) => (
                    <li key={i} className="day-item">
                      <span className="day-bullet">◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="solution-outcome">
            <p>No final, você sai com:</p>
            <div className="outcome-tags">
              {['Posicionamento definido', 'Temas escolhidos', 'Estratégia traçada', 'Plano de 90 dias'].map((item, i) => (
                <span key={i} className="outcome-tag">
                  <span className="tag-check">✓</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENTREGÁVEIS - Destaque para certificado */}
      <section className="deliverables-section">
        <div className="deliverables-container">
          <h2 className="deliverables-title">Além do conteúdo, você leva isso</h2>

          <div className="deliverables-grid">
            {deliverables.map((item, i) => (
              <div key={i} className="deliverable-card">
                <div className="deliverable-icon">
                  {i === 0 && '📦'}
                  {i === 1 && '🎁'}
                  {i === 2 && '🏆'}
                </div>
                <h3 className="deliverable-card-title">{item.title}</h3>
                <ul className="deliverable-list">
                  {item.items.map((sub, j) => (
                    <li key={j} className="deliverable-item">
                      <span className="checkmark">✓</span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certificado em destaque */}
          <div className="certificate-showcase">
            <div className="certificate-css">
              <div className="certificate-border">
                <div className="certificate-inner">
                  <div className="certificate-header">
                    <div className="certificate-seal">
                      <span className="seal-icon">★</span>
                    </div>
                    <h3 className="certificate-title">Certificado de Conclusão</h3>
                    <p className="certificate-subtitle">Retiro Anti-Carnaval</p>
                  </div>
                  <div className="certificate-body">
                    <p className="certificate-text">Certificamos que</p>
                    <div className="certificate-name">Seu Nome</div>
                    <p className="certificate-text">completou com êxito o Retiro Anti-Carnaval</p>
                    <p className="certificate-date">Fevereiro de 2026</p>
                  </div>
                  <div className="certificate-footer">
                    <div className="signature-line">
                      <span>Acelerador de Audiência</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="certificate-note">
              Todos que completarem as tarefas recebem certificado oficial
            </p>
          </div>
        </div>
      </section>

      {/* QUEM VAI ENSINAR - Perfil dos Fundadores */}
      <section className="founders-section">
        <div className="founders-container">
          <span className="section-label">Quem vai te guiar</span>
          <h2 className="founders-title">Aprendeu com quem <span className="text-gold">FEZ</span>, não com quem só fala</h2>
          <p className="founders-subtitle">
            Nós construímos +10 perfis próprios, geramos R$ 1 milhão em vendas orgânicas e atendemos centenas de alunos. Mas o mais importante: <strong className="text-white">fizemos tudo errado primeiro</strong>, para você não precisar cometer os mesmos erros.
          </p>

          <div className="founders-grid">
            <div className="founder-card">
              <div className="founder-image-wrapper">
                <img src="/images/founders/davi.png" alt="Davi" width="200" height="200" className="founder-image" />
                <div className="founder-badge">Criador da Metodologia</div>
              </div>
              <h3 className="founder-name">Davi</h3>
              <p className="founder-credential">+2.000 conteúdos produzidos</p>
              <ul className="founder-highlights">
                <li>✦ Criou o framework que gerou R$ 1M em vendas orgânicas</li>
                <li>✦ Desenvolveu o "Manual da Viralização" usado por grandes marcas</li>
                <li>✦ Trabalhou com empresas como Empiricus</li>
                <li>✦ Especialista em transformar autoridade offline em digital</li>
              </ul>
            </div>

            <div className="founder-card">
              <div className="founder-image-wrapper">
                <img src="/images/founders/sandro.png" alt="Sandro" width="200" height="200" className="founder-image" />
                <div className="founder-badge">Especialista em Estrutura</div>
              </div>
              <h3 className="founder-name">Sandro</h3>
              <p className="founder-credential">+20 empresas escaladas</p>
              <ul className="founder-highlights">
                <li>✦ Escalou +20 empresas de zero a milhões</li>
                <li>✦ Especialista em estrutura de operação de escala</li>
                <li>✦ Transformou bases desengajadas em vendas consistentes</li>
                <li>✦ Domina a arte de fazer muito conteúdo com qualidade</li>
              </ul>
            </div>

            <div className="founder-card">
              <div className="founder-image-wrapper">
                <img src="/images/founders/pedro.png" alt="Pedro" width="200" height="200" className="founder-image" />
                <div className="founder-badge">Especialista em Operação</div>
              </div>
              <h3 className="founder-name">Pedro</h3>
              <p className="founder-credential">Operação & Escala</p>
              <ul className="founder-highlights">
                <li>✦ Responsável por fazer a metodologia funcionar na prática</li>
                <li>✦ Especialista em transformar estratégia em execução</li>
                <li>✦ Gerencia operação de múltiplos perfis em escala</li>
                <li>✦ Garante que o aluno saia do retiro com o plano aplicável</li>
              </ul>
            </div>
          </div>

          <div className="founders-cta">
            <p className="founders-cta-text">
              Durante 4 dias, nós vamos compartilhar tudo o que aprendemos construindo esses resultados. <span className="text-gold">Sem enrolação, sem teoria sem prática.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="faq-title">Perguntas frequentes</h2>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-card ${openFaq === i ? 'faq-open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <div className="faq-question">
                  {faq.q}
                  <span className={`faq-arrow ${openFaq === i ? 'faq-arrow-rotated' : ''}`}>▼</span>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESCASSEZ - Com imagem de bateria (ritmo) */}
      <section className="scarcity-section">
        <div className="scarcity-background">
          <img
            src="/images/decorative/carnival-drummers.png"
            alt=""
            width="1600"
            height="900"
            className="scarcity-bg-image"
          />
          <div className="scarcity-overlay" />
        </div>

        <div className="scarcity-container">
          <span className="scarcity-label">⏰ As inscrições encerram em:</span>

          <div className="scarcity-countdown">
            {[
              { value: String(timeLeft.days).padStart(2, '0'), label: 'Dias' },
              { value: String(timeLeft.hours).padStart(2, '0'), label: 'Horas' },
              { value: String(timeLeft.minutes).padStart(2, '0'), label: 'Min' },
              { value: String(timeLeft.seconds).padStart(2, '0'), label: 'Seg' },
            ].map((item, i) => (
              <div key={i} className="scarcity-countdown-block">
                <div className="scarcity-countdown-value">{item.value}</div>
                <div className="scarcity-countdown-label">{item.label}</div>
              </div>
            ))}
          </div>

          <p className="scarcity-text">
            Precisamos organizar os grupos e preparar os materiais. Inscreva-se até{' '}
            <strong className="text-white">sexta-feira, 13/02</strong>. Depois disso, as portas fecham.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta-section">
        <div className="final-cta-container">
          <h2 className="final-cta-title">Pronto para recuperar o começo do seu ano?</h2>

          <p className="final-cta-text">
            Enquanto o mundo está no carnaval, você avança.<br />
            4 dias. Posicionamento definido. Plano traçado.
            <span className="text-gold"> Tudo gratuito.</span>
          </p>

          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="final-cta-btn"
          >
            <span>Quero Participar do Retiro Anti-Carnaval</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="final-cta-note">
            🔒 100% gratuito. Sem cartão de crédito. Só participar e aplicar.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-copy">© 2026 Acelerador de Audiência. Todos os direitos reservados.</p>
          <p className="footer-disclaimer">Este evento não é afiliado ao Instagram ou Meta.</p>
          <div className="footer-links">
            <a href="#">Contato</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
