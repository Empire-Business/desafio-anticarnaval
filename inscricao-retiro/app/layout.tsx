import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Otimização de fonte: display: swap evita bloqueio de renderização
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Retiro Anti-Carnaval - Inscrição Gratuita | Acelerador de Audiência',
  description: 'Em 4 dias, saia do carnaval com seu posicionamento digital definido e um plano completo para ampliar sua autoridade. 100% online e gratuito.',
  keywords: 'retiro anti-carnaval, posicionamento digital, autoridade, instagram, marketing digital, crescimento instagram, conteúdo digital',
  authors: [{ name: 'Acelerador de Audiência' }],
  creator: 'Acelerador de Audiência',
  publisher: 'Acelerador de Audiência',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aceleradordeaudiencia.com.br'),
  openGraph: {
    title: 'Retiro Anti-Carnaval - Inscrição Gratuita',
    description: 'Em 4 dias, saia do carnaval com seu posicionamento digital definido e um plano completo para ampliar sua autoridade.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Acelerador de Audiência',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retiro Anti-Carnaval - Inscrição Gratuita',
    description: 'Em 4 dias, saia do carnaval com seu posicionamento digital definido.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* Preconnect para origens externas se houver */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
