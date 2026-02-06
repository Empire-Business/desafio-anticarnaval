export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-black border-t border-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white mb-2">Retiro Anti-Carnaval</h3>
          <p className="text-gray-500 text-sm">Acelerador de Audiência</p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
          <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
            Termos de Uso
          </a>
          <span className="text-gray-800">•</span>
          <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
            Política de Privacidade
          </a>
          <span className="text-gray-800">•</span>
          <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
            Contato
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-4">
            © {currentYear} Acelerador de Audiência. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-xs">
            Este evento não é afiliado ao Instagram ou Meta.
            <br />
            Todos os resultados mencionados são típicos e variam de acordo com cada indivíduo.
          </p>
        </div>
      </div>
    </footer>
  );
}
