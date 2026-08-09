import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, JetBrains_Mono, Jost } from "next/font/google";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-7BC7CKWSL1";

const SITE_URL = "https://micaelaauzmendi.com";
const SITE_TITLE = "Mica Auzmendi · Diseño de tiendas online y experiencia de compra";
const SITE_DESCRIPTION =
  "Hago que comprarte sea fácil. Diseño y rediseño tu tienda online, tu landing y la experiencia de compra completa — del feed a la tienda, de la compra a la re-compra.";
// Versión optimizada (1200x630) para previews de link
const SHARE_IMAGE = "/photos/share-portfolio-og.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Mica Auzmendi",
  },
  description: SITE_DESCRIPTION,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Mica Auzmendi",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

const heading = Jost({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${heading.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ThemeProvider>
          <AmbientBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
