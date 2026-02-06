"use client";

import { TESTIMONIALS, STATS } from "@/lib/constants";
import { Quote, TrendingUp } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            QUEM JÁ PASSOU POR ISSO, <span className="text-gradient-gold">TRANSFORMOU:</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gold-500/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-gold-500/30 mb-4" />

              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                  <span className="text-black font-bold text-sm">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5 text-gold-500" />
              Números do Acelerador de Audiência
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
