'use client';

import { useState } from 'react';
import { ArrowLeft, Play, ExternalLink } from 'lucide-react';

const aulas = [
  { id: 'aula01', title: 'Aula 1 - Introdução', path: 'SLIDES_COMPLETOS/aula01/index.html' },
  { id: 'aula02', title: 'Aula 2 - Conteúdo', path: 'SLIDES_COMPLETOS/aula02/index.html' },
  { id: 'aula03', title: 'Aula 3 - Conteúdo', path: 'SLIDES_COMPLETOS/aula03/index.html' },
  { id: 'aula04', title: 'Aula 4 - Encerramento', path: 'SLIDES_COMPLETOS/aula04/index.html' },
];

export default function SlidesPage() {
  const [selectedAula, setSelectedAula] = useState<typeof aulas[0] | null>(null);

  // URL base dos slides - será servida da pasta public
  const getSlideUrl = (path: string) => {
    return `/${path}`;
  };

  if (selectedAula) {
    return (
      <div className="min-h-screen bg-black text-gray-100">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
          <div className="flex items-center justify-between px-3 md:px-4 py-3">
            <button
              onClick={() => setSelectedAula(null)}
              className="flex items-center gap-1.5 md:gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Voltar</span>
            </button>
            <h1 className="text-sm font-medium text-white truncate max-w-[200px] md:max-w-[400px]">{selectedAula.title}</h1>
            <a
              href={getSlideUrl(selectedAula.path)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 md:p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white"
              title="Abrir em nova aba"
            >
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </header>

        {/* Iframe com slides */}
        <div className="pt-14 md:pt-16 h-screen">
          <iframe
            src={getSlideUrl(selectedAula.path)}
            className="w-full h-full border-0"
            title={selectedAula.title}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="flex items-center justify-between px-3 md:px-4 py-3">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-1.5 md:gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base">Voltar</span>
          </button>
          <h1 className="text-base md:text-lg font-semibold text-white">Slides das Aulas</h1>
          <div className="w-16"></div>
        </div>
      </header>

      {/* Lista de aulas */}
      <main className="pt-16 md:pt-20 pb-12 px-3 md:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Slides Completos</h2>
            <p className="text-gray-400 text-sm md:text-base">
              Apresentações completas de todas as aulas do Retiro Anti-Carnaval
            </p>
          </div>

          <div className="grid gap-4">
            {aulas.map((aula) => (
              <button
                key={aula.id}
                onClick={() => setSelectedAula(aula)}
                className="bg-gray-900/50 border border-gray-800 hover:border-yellow-500/50 rounded-xl p-5 md:p-6 text-left transition-all hover:scale-[1.01] group"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                      <Play className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-white mb-1">{aula.title}</h3>
                      <p className="text-sm text-gray-500">Clique para abrir os slides</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-yellow-500 transition-colors flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-12 p-4 md:p-6 bg-gray-900/30 border border-gray-800 rounded-xl">
            <h3 className="text-sm font-semibold text-white mb-2">Como navegar</h3>
            <ul className="text-xs md:text-sm text-gray-400 space-y-1">
              <li>• Use as setas na tela para navegar entre slides</li>
              <li>• Clique nos pontos na lateral esquerda para pular para um slide específico</li>
              <li>• Abra em nova aba se preferir tela cheia</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
