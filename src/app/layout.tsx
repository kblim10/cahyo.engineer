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
  title: "cahyo — Backend & Cloud Infrastructure Engineer",
  description:
    "Portfolio of Muhamad Cahyo Rifki Dwi Putra — Backend Engineer & Cloud Infrastructure Enthusiast. Building scalable systems and reliable cloud architectures.",
  keywords: [
    "backend engineer",
    "cloud infrastructure",
    "devops",
    "portfolio",
    "software engineer",
  ],
  authors: [{ name: "Muhamad Cahyo Rifki Dwi Putra" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

import Scene3D from "@/components/Scene3D";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased noise-bg grid-pattern min-h-screen relative`}
      >
        <Scene3D />
        {children}
      </body>
    </html>
  );
}
