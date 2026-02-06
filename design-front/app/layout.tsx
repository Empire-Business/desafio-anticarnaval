import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://retiroanticarnaval.com.br"),
  title: "Retiro Anti-Carnaval - Acelerador de Audiência",
  description: "Em 4 dias, saia do carnaval com seu posicionamento digital definido e um plano completo para ampliar sua autoridade do mundo real para o mundo digital. Evento gratuito, 100% online.",
  keywords: ["retiro anti-carnaval", "posicionamento digital", "autoridade digital", "instagram", "marketing digital", "acelerador de audiência"],
  authors: [{ name: "Acelerador de Audiência" }],
  openGraph: {
    title: "Retiro Anti-Carnaval - Acelerador de Audiência",
    description: "Enquanto o mundo está no carnaval, você avança. 4 dias para definir seu posicionamento digital.",
    url: "https://retiroanticarnaval.com.br",
    siteName: "Retiro Anti-Carnaval",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Retiro Anti-Carnaval",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Retiro Anti-Carnaval - Acelerador de Audiência",
    description: "Enquanto o mundo está no carnaval, você avança. 4 dias para definir seu posicionamento digital.",
    images: ["/assets/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
