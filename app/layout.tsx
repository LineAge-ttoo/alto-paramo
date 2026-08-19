import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/config/site";
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
  title: {
    default: `${site.name} — ${site.description}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Alto Páramo",
    "Café de especialidad",
    "San Agustín",
    "Huila",
    "Colombia",
    "Macizo Colombiano",
    "Specialty Coffee",
    "Trazabilidad",
    "Café de origen"
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    title: `${site.name} — ${site.description}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
