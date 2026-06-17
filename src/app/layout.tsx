import type { Metadata } from "next";
import { Archivo, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAHYO — Backend & Cloud Infrastructure Engineer",
  description:
    "Building scalable systems & reliable cloud architectures. Kubernetes, Node.js, IoT/MQTT, and DevOps engineering.",
  keywords: [
    "backend engineer",
    "cloud infrastructure",
    "kubernetes",
    "devops",
    "nodejs",
    "portfolio",
    "software engineer",
    "iot",
    "mqtt",
  ],
  authors: [{ name: "Muhamad Cahyo Rifki Dwi Putra" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${archivo.variable} ${newsreader.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased min-h-screen relative`}
      >
        {children}
      </body>
    </html>
  );
}
