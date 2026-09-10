import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lunarmusic.com.mx"),
  title: {
    default: "Lunar Music | Booking & Management",
    template: "%s | Lunar Music",
  },
  description: "Agencia de Booking & Management en México. Representación de artistas, producción de eventos y talento musical.",
  keywords: ["booking", "management", "agencia", "artistas", "eventos", "México", "DJ", "música electrónica"],
  authors: [{ name: "Lunar Music" }],
  creator: "Lunar Music",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://lunarmusic.com.mx",
    title: "Lunar Music | Booking & Management",
    description: "Agencia de Booking & Management. Conectando talento con los mejores escenarios.",
    siteName: "Lunar Music",
    images: [{
      url: "/lunar_logo_nobg.png",
      width: 800,
      height: 600,
      alt: "Lunar Music Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunar Music | Booking & Management",
    description: "Agencia de Booking & Management en México.",
    images: ["/lunar_logo_nobg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
