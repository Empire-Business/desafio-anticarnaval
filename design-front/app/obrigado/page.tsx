"use client";

import { useEffect } from "react";
import { CheckCircle, Calendar, Clock, Share2, Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { EVENT_INFO } from "@/lib/constants";
import Link from "next/link";

export default function ObrigadoPage() {
  // Create calendar file content
  const createCalendarEvent = () => {
    const startDate = new Date("2026-02-14T10:00:00");
    const endDate = new Date("2026-02-17T18:00:00");

    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Acelerador de Audiência//Retiro Anti-Carnaval//PT
BEGIN:VEVENT
UID:retiro-anticarnaval-2026@aceleradordeaudiencia.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:Retiro Anti-Carnaval - Acelerador de Audiência
DESCRIPTION:Em 4 dias, saia do carnaval com seu posicionamento digital definido. Evento 100% online e gratuito.
LOCATION:Online (Zoom/Google Meet)
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-P1D
ACTION:DISPLAY
DESCRIPTION:Lembrete: Retiro Anti-Carnaval começa amanhã!
END:VALARM
END:VEVENT
END:VCALENDAR`;
  };

  const downloadCalendar = () => {
    const calendarContent = createCalendarEvent();
    const blob = new Blob([calendarContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "retiro-anticarnaval-2026.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(
      "Acabei de me inscrever no Retiro Anti-Carnaval! 🎯\n\n4 dias para definir meu posicionamento digital enquanto o mundo está no carnaval.\n\nVem comigo: "
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  return (
    <main className="relative min-h-screen bg-black">
      {/* Carnival Background Effects - Subtle */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full">
          {/* Success Icon with Animation */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-green-500/20 border-2 border-green-500 mb-6 animate-bounce">
              <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-500" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Inscrição <span className="text-green-500">Confirmada!</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Você está dentro do Retiro Anti-Carnaval
            </p>
          </div>

          {/* Event Details Card */}
          <div className="bg-gray-950 border border-gold-500/30 rounded-2xl p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gold-500" />
              Detalhes do Evento
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Data</p>
                  <p className="text-white font-semibold">{EVENT_INFO.dates}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Horário</p>
                  <p className="text-white font-semibold">{EVENT_INFO.times}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Formato</p>
                  <p className="text-white font-semibold">{EVENT_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
              <p className="text-gold-500 text-sm font-medium">
                ✓ Os links de acesso serão enviados para seu WhatsApp antes do evento
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8 mb-8">
            <h3 className="text-lg font-bold text-white mb-4">Próximos Passos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Fique atento ao seu WhatsApp - vamos te adicionar ao grupo</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Reserve os horários dos 4 dias (manhã e tarde)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Prepare um ambiente tranquilo para as aulas ao vivo</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Baixe o material do primeiro dia quando receber o link</span>
              </li>
            </ul>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              onClick={downloadCalendar}
              icon={<Download className="w-5 h-5" />}
            >
              Adicionar ao Calendário
            </Button>
            <Button
              variant="outline"
              size="lg"
              fullWidth
              onClick={shareOnWhatsApp}
              icon={<Share2 className="w-5 h-5" />}
            >
              Compartilhar
            </Button>
          </div>

          {/* Back to Home */}
          <div className="text-center">
            <Link
              href="/"
              className="text-gray-500 hover:text-gold-500 transition-colors text-sm inline-flex items-center gap-2"
            >
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
