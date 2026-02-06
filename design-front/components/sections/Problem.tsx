"use client";

import { X, Frown } from "lucide-react";

export default function Problem() {
  const problems = [
    { text: "Posts com 30 likes" },
    { text: "Zero qualificados chegando no seu DM" },
    { text: "A sensação de que \"digital não é pra mim\"" },
    { text: "Menos resultado que você tem no mundo real" },
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            VOCÊ TEM AUTORIDADE NO MUNDO REAL.
            <span className="block text-red-500 mt-2">MAS NO DIGITAL... É COMO SE NÃO EXISTISSE.</span>
          </h2>
        </div>

        {/* Problem Description */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 md:p-10 mb-10">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Você já sentiu aquela frustração?
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            Vê pessoas com <span className="text-white font-semibold">MENOS resultado</span> que você,
            com <span className="text-white font-semibold">MENOS experiência</span>, com
            <span className="text-white font-semibold"> MENOS sucesso</span> no mundo real... tendo
            <span className="text-gold-500 font-semibold"> MUITO mais destaque</span> no digital?
          </p>
          <p className="text-gray-400 leading-relaxed">
            Isso é mais comum do que você imagina.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-gray-900/30 border border-red-500/20 rounded-xl p-4 md:p-5"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                <X className="w-4 h-4 text-red-500" />
              </div>
              <p className="text-gray-300">{problem.text}</p>
            </div>
          ))}
        </div>

        {/* Guilt Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-l-4 border-gold-500 rounded-r-xl p-6 md:p-8">
          <p className="text-gray-400 mb-4">E aí bate aquela culpa:</p>
          <div className="space-y-3 text-gray-300 italic">
            <p className="flex items-start gap-3">
              <span className="text-gold-500">"</span>
              <span>Por que fulano que abriu ontem já tem mais seguidores?</span>
              <span className="text-gold-500">"</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-gold-500">"</span>
              <span>O que estou fazendo errado?</span>
              <span className="text-gold-500">"</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-gold-500">"</span>
              <span>Será que digital não é o meu caminho?</span>
              <span className="text-gold-500">"</span>
            </p>
          </div>
        </div>

        {/* Micro-commitment */}
        <div className="mt-10 text-center">
          <p className="text-gold-500 text-lg font-semibold flex items-center justify-center gap-2">
            <Frown className="w-5 h-5" />
            Se você se identifica com isso, continue lendo...
          </p>
        </div>
      </div>
    </section>
  );
}
