"use client";

import { CheckCircle, Target, Users, Zap } from "lucide-react";
import { TARGET_AUDIENCE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Solution() {
  const handleScrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-16 md:py-24 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            APRESENTO O <span className="text-gradient-gold">RETIRO ANTICARNAVAL</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            4 dias. 100% online. Totalmente gratuito.
          </p>
        </div>

        {/* What Is It */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gold-500/30 rounded-2xl p-6 md:p-10 mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6">O Que É</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            O Retiro Anti-Carnaval é um <span className="text-gold-500 font-semibold">evento intensivo de 4 dias</span> onde você
            vai <span className="text-white font-semibold">DEFINIR</span> seu posicionamento digital e
            <span className="text-white font-semibold"> CRIAR</span> seu plano completo de conteúdo.
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Não é uma "aula teórica" que você esquece no dia seguinte.
          </p>
          <p className="text-white text-lg font-semibold">
            É um DESAFIO. Cada dia, você aprende e APLICA.
          </p>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4">No final, você sai com:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Seu posicionamento definido",
                "Seus temas de conteúdo escolhidos",
                "Sua estratégia de escala traçada",
                "Um plano de 90 dias pronto",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-6 bg-gold-500/10 border border-gold-500/30 rounded-xl text-center">
            <p className="text-gold-500 text-xl md:text-2xl font-bold">
              Enquanto o resto do mundo está no carnaval, você avança.
            </p>
          </div>
        </div>

        {/* For Who */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-10 mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-gold-500" />
            Para Quem É
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TARGET_AUDIENCE.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/20 flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-3 h-3 text-gold-500" />
                </div>
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-gold-500" />
            </div>
            <h4 className="text-white font-semibold mb-2">Clareza</h4>
            <p className="text-gray-400 text-sm">Saia da confusão e defina exatamente quem você é no digital</p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-gold-500" />
            </div>
            <h4 className="text-white font-semibold mb-2">Plano</h4>
            <p className="text-gray-400 text-sm">Receba um roteiro completo de 90 dias para executar</p>
          </div>

          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-gold-500" />
            </div>
            <h4 className="text-white font-semibold mb-2">Comunidade</h4>
            <p className="text-gray-400 text-sm">Faça parte de um grupo de profissionais que estão construindo</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="xl"
            className="max-w-md mx-auto"
            onClick={handleScrollToForm}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            QUERO PARTICIPAR DO RETIRO
          </Button>
        </div>
      </div>
    </section>
  );
}
