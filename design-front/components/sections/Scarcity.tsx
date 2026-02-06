"use client";

import { AlertTriangle, ArrowRight } from "lucide-react";
import { REGISTRATION_END_DATE } from "@/lib/constants";
import Countdown from "@/components/ui/Countdown";
import Button from "@/components/ui/Button";

export default function Scarcity() {
  const handleScrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-16 md:py-24 px-4 bg-black overflow-hidden">
      {/* Urgent background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-sm font-medium">Últimas Chance</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            AS INSCRIÇÕES <span className="text-red-500">ENCERRAM EM:</span>
          </h2>
        </div>

        {/* Countdown - Larger */}
        <div className="mb-10">
          <Countdown targetDate={REGISTRATION_END_DATE} />
        </div>

        {/* Explanation */}
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-10 mb-10">
          <h3 className="text-lg font-bold text-white mb-4">Por quê as inscrições fecham antes do carnaval?</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            Simples: porque precisamos organizar os grupos e preparar os materiais para cada participante.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            E também porque queremos que você entre com disposição total, sem a pressa de última hora.
          </p>
          <p className="text-white text-lg">
            Então, se você quer participar, inscreva-se até <span className="text-gold-500 font-semibold">quarta-feira, 13/02</span>.
          </p>
          <p className="text-red-500 font-semibold text-lg mt-4">
            Depois disso, as portas fecham.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="xl"
            className="max-w-md mx-auto animate-pulse-gold"
            onClick={handleScrollToForm}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            QUERO ME INSCREVER AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}
