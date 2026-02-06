"use client";

import Image from "next/image";
import { TrendingUp } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  image?: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Fernanda Girassol",
    role: "De prejuízo com tráfego a +R$ 100 mil/mês",
    quote: "A Fernanda Girassol pivotou completamente o negócio através da produção de conteúdo. Depois de anos dependendo de anúncios pagos, ela parou de rodar tráfego e hoje fatura mais de R$ 100 mil por mês organicamente, gerando 500 leads mensais.",
    image: "/assets/cases/fernanda-girassol.jpg",
  },
  {
    name: "Henrique Carolenske",
    role: "De confuso a +500 mil seguidores",
    quote: "O Henrique Carolenske produz conteúdo sobre branding e construção de marca. Com consistência e foco, ele construiu uma audiência de mais de 500 mil seguidores. Hoje, ele vende organicamente os produtos da marca dele através do conteúdo que posta todos os dias.",
    image: "/assets/cases/henrique-carolenske.jpg",
  },
];

const stats = [
  { value: "+10", label: "Perfis próprios gerando demanda" },
  { value: "R$ 1M", label: "Em vendas mensais orgânicas" },
  { value: "Centenas", label: "De alunos transformados" },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-950 border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gold-500/30 transition-colors"
            >
              {/* Profile Image */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-800 flex-shrink-0">
                  {testimonial.image ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                      <span className="text-black font-bold text-xl">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-gold-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed italic">
                {testimonial.quote}
              </p>
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
            {stats.map((stat, index) => (
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
