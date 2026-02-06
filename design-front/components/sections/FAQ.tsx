"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 px-4 bg-gray-950">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-gold-500" />
            <span className="text-gold-500 text-sm font-medium">Dúvidas Frequentes</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            PERGUNTAS <span className="text-gradient-gold">FREQUENTES</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 border rounded-xl overflow-hidden transition-all ${
                openIndex === index ? "border-gold-500/50" : "border-gray-800"
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left transition-colors hover:bg-gray-900/50"
              >
                <span className="text-white font-medium pr-4">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Outra dúvida? Entre em contato pelo WhatsApp do Acelerador de Audiência.
          </p>
        </div>
      </div>
    </section>
  );
}
