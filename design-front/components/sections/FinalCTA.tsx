"use client";

import { Lock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FinalCTA() {
  const handleScrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-gray-950 to-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          PRONTO PARA RECUPERAR<br />
          <span className="text-gradient-gold">O COMEÇO DO SEU ANO?</span>
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          Enquanto o mundo está no carnaval, você avança.
        </p>
        <p className="text-lg text-gray-500 mb-10">
          4 dias. Posicionamento definido. Plano traçado.<br className="hidden md:block" />
          Tudo gratuito.
        </p>

        {/* CTA Button */}
        <Button
          size="xl"
          fullWidth
          className="max-w-lg mx-auto mb-8 animate-pulse-gold"
          onClick={handleScrollToForm}
          icon={<ArrowRight className="w-5 h-5" />}
        >
          QUERO PARTICIPAR DO RETIRO ANTICARNAVAL
        </Button>

        {/* Guarantee */}
        <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-900/50 border border-gray-800 rounded-xl">
          <Lock className="w-5 h-5 text-gold-500" />
          <div className="text-left">
            <p className="text-white font-semibold">É 100% gratuito</p>
            <p className="text-gray-500 text-sm">Não tem carta de irmão para assinar. Não tem cartão de crédito. Só participar e aplicar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
