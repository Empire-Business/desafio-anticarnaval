"use client";

import { Lightbulb, Sparkles } from "lucide-react";

export default function Epiphany() {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-gold-500" />
            <span className="text-gold-500 text-sm font-medium">A Descoberta</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            DESCOBRIMOS QUE O PROBLEMA <span className="text-gradient-gold">NÃO É VOCÊ</span>
          </h2>
        </div>

        {/* Story Content */}
        <div className="space-y-6 md:space-y-8">
          {/* Paragraph 1 */}
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Há alguns anos, observávamos algo que se repetia...
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Médicos com consultório cheio. Empresários com empresas lucrativas.
              Mentores com dezenas de alunos satisfeitos.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Todos com <span className="text-white font-semibold">autoridade no mundo real</span>.
              Todos com resultado comprovado.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Mas no digital? Nada.
            </p>
          </div>

          {/* Paragraph 2 - The Confusion */}
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              E o mais confuso era ver pessoas — gente com muito menos resultado,
              menos experiência, menos tudo — tendo <span className="text-white font-semibold">MUITO mais sucesso</span> no Instagram.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              A pergunta que fizemos foi:
            </p>
            <p className="text-gold-500 font-semibold text-xl mt-4 italic">
              "O que eles têm que esses profissionais não têm?"
            </p>
          </div>

          {/* The Answer - Highlighted */}
          <div className="bg-gradient-to-br from-gold-500/10 to-gold-600/5 border border-gold-500/30 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Sparkles className="w-8 h-8 text-gold-500/30" />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              A resposta que encontramos mudou tudo.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              Não era sobre ser mais bonito. Mais carismático. Mais engraçado.
              Mais talentoso em vídeo.
            </p>
            <p className="text-white text-xl md:text-2xl font-bold text-center py-6">
              Era sobre <span className="text-gradient-gold">POSICIONAMENTO</span>.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Esses profissionais estavam tentando ser "mais um" no digital.
              Falando de tudo. Tentando agradar todo mundo.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Enquanto isso, as pessoas que tinham sucesso?
            </p>
            <p className="text-white font-semibold text-center mt-4">
              Elas falavam de UMA coisa. Para UM público. Com UMA posição clara.
            </p>
          </div>

          {/* The Key Insight */}
          <div className="bg-gray-900 border-l-4 border-gold-500 rounded-r-xl p-6 md:p-8">
            <p className="text-gray-400 leading-relaxed mb-4">
              E foi aí que descobrimos:
            </p>
            <p className="text-white text-xl md:text-2xl font-bold text-center py-4">
              O digital não premia quem é "bom".
            </p>
            <p className="text-gradient-gold text-2xl md:text-3xl font-bold text-center">
              O digital premia quem é CLARO.
            </p>
          </div>

          {/* Results */}
          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Quando ajudamos esses profissionais a definirem seu posicionamento... Tudo mudou.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Seguidores passaram a vir. Qualificados começaram a aparecer.
              O mesmo resultado que tinham no mundo real, passaram a ter no digital também.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-gold-500 font-semibold">
                Foi isso que levou a gente a gerar R$ 1 milhão em vendas orgânicas.
                Com +10 perfis próprios. Centenas de alunos atendidos.
              </p>
              <p className="text-gray-400 mt-4">
                Agora, queremos ensinar exatamente como fazer isso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
