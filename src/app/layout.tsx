import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-bg grid-pattern min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
