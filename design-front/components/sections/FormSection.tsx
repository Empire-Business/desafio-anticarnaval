"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { FORM_URL, FORM_SCRIPT } from "@/lib/constants";

export default function FormSection() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Load the form embed script
    const script = document.createElement("script");
    script.src = FORM_SCRIPT;
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Clean up
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="formulario" className="relative py-16 md:py-24 px-4 bg-gray-950">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Preencha para <span className="text-gradient-gold">Garantir sua Vaga</span>
          </h2>
          <p className="text-gray-400">
            São poucas vagas e as inscrições encerram em 13/02
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 md:p-8">
          <div className="min-h-[600px] flex items-center justify-center">
            {!scriptLoaded && (
              <div className="flex flex-col items-center gap-4 text-gray-500">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p>Carregando formulário...</p>
              </div>
            )}

            <iframe
              src={FORM_URL}
              style={{
                border: "none",
                width: "100%",
                minWidth: "100%",
                minHeight: "600px",
              }}
              scrolling="no"
              id="2r4bFS0lFrY4ANt0Bwhl"
              title="Formulário de Inscrição - Retiro Anti-Carnaval"
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Trust Note */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Seus dados estão seguros. Não enviamos spam.
          </p>
        </div>
      </div>
    </section>
  );
}
