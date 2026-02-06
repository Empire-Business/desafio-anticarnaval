import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Retiro Anti-Carnaval | Acelerador de Audiência",
  description: "Em 4 dias, saia do carnaval com seu posicionamento digital definido e um plano completo para ampliar sua autoridade do mundo real para o mundo digital.",
  keywords: ["posicionamento digital", "autoridade", "Instagram", "marketing digital", "conteúdo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
