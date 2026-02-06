"use client";

import { DELIVERABLES } from "@/lib/constants";
import { Gift, FileText, Award, Sparkles } from "lucide-react";

export default function Deliverables() {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-6">
            <Gift className="w-4 h-4 text-gold-500" />
            <span className="text-gold-500 text-sm font-medium">Bônus Exclusivos</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ALÉM DO CONTEÚDO, <span className="text-gradient-gold">VOCÊ LEVA ISSO:</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Daily Deliverables */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-5 h-5 text-gold-500" />
              Por Dia de Evento
            </h3>

            <div className="space-y-4">
              {DELIVERABLES.daily.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-gray-900/30 rounded-xl p-4 border border-gray-800"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <span className="text-gold-500 font-bold">{item.day}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{item.item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bonuses */}
          <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 border border-gold-500/30 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-gold-500" />
              Bônus Exclusivos
            </h3>

            <div className="space-y-4">
              {DELIVERABLES.bonuses.map((bonus, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-black/30 rounded-xl p-4 border border-gold-500/20"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{bonus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate */}
        <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold-500/20 flex items-center justify-center">
              <Award className="w-8 h-8 text-gold-500" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-bold text-white mb-2">Certificado de Conclusão</h4>
              <p className="text-gray-400">
                Todos que completarem as tarefas recebem certificado oficial do Retiro Anti-Carnaval.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
