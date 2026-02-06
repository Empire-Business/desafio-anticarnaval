import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WPGPLJSL');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WPGPLJSL"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
