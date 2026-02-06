"use client";

import { useState } from "react";
import { Calendar, ArrowRight, Sparkles } from "lucide-react";
import { REGISTRATION_END_DATE } from "@/lib/constants";
import Countdown from "@/components/ui/Countdown";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);

  const handleCTAClick = () => {
    setShowForm(true);
    // Scroll to form section
    setTimeout(() => {
      document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url('/assets/hero-carnival.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-6 md:mb-8 animate-fade-in-up backdrop-blur-sm">
          <Calendar className="w-4 h-4 text-gold-500" />
          <span className="text-gold-500 text-sm font-medium">14 a 17 de Fevereiro de 2026</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight animate-fade-in-up drop-shadow-lg" style={{ animationDelay: "0.1s" }}>
          VOCÊ COMEÇOU O ANO...
          <span className="block text-gradient-gold mt-2">MAS NA VERDADE NÃO COMEÇOU O ANO</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up drop-shadow" style={{ animationDelay: "0.2s" }}>
          Em 4 dias, saia do carnaval com seu <span className="text-gold-500 font-semibold">posicionamento digital</span> definido
          e um plano completo para ampliar sua autoridade do mundo real para o mundo digital.
        </p>

        {/* Countdown */}
        <div className="mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Countdown targetDate={REGISTRATION_END_DATE} />
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="xl"
            fullWidth
            className="max-w-md animate-pulse-gold group shadow-2xl"
            onClick={handleCTAClick}
            icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          >
            QUERO PARTICIPAR GRÁTIS
          </Button>

          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>Gratuito • Vagas limitadas • 100% online</span>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-gray-300 text-sm animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>+1.000 inscritos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span>4 dias de conteúdo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
            <span>Aulas ao vivo</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-300 animate-bounce z-10">
        <span className="text-xs uppercase tracking-widest">Role para saber mais</span>
        <ArrowRight className="w-5 h-5 rotate-90" />
      </div>
    </section>
  );
}
