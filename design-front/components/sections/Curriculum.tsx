"use client";

import { CURRICULUM_DAYS } from "@/lib/constants";
import { BookOpen, Target, TrendingUp, Calendar } from "lucide-react";

const dayIcons = {
  1: BookOpen,
  2: Target,
  3: TrendingUp,
  4: Calendar,
};

const dayColors = {
  1: "from-blue-500/10 to-blue-600/5 border-blue-500/30",
  2: "from-purple-500/10 to-purple-600/5 border-purple-500/30",
  3: "from-pink-500/10 to-pink-600/5 border-pink-500/30",
  4: "from-gold-500/10 to-gold-600/5 border-gold-500/30",
};

export default function Curriculum() {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            O Que Você Vai <span className="text-gradient-gold">Aprender</span>
          </h2>
          <p className="text-gray-400 text-lg">
            4 dias de conteúdo intenso e aplicável
          </p>
        </div>

        {/* Curriculum Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRICULUM_DAYS.map((day) => {
            const Icon = dayIcons[day.day as keyof typeof dayIcons];
            const colorClass = dayColors[day.day as keyof typeof dayColors];

            return (
              <div
                key={day.day}
                className={`bg-gradient-to-br ${colorClass} border rounded-2xl p-6 md:p-8 transition-all hover:scale-[1.02]`}
              >
                {/* Day Badge */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                    day.day === 4 ? "from-gold-500 to-gold-600" : "from-gray-800 to-gray-900"
                  } flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${day.day === 4 ? "text-black" : "text-gold-500"}`} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${day.day === 4 ? "text-gold-500" : "text-gray-500"}`}>
                      DIA {day.day}
                    </div>
                    <div className="text-xs text-gray-600">14-17/02/2026</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight">
                  {day.title}
                </h3>

                {/* Topics */}
                <ul className="space-y-3">
                  {day.topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-500 mt-2" />
                      <span className="text-gray-400 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            Cada dia você terá tarefas práticas para completar. Não é apenas assistir — é aplicar.
          </p>
        </div>
      </div>
    </section>
  );
}
