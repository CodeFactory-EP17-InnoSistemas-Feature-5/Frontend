import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter } from "./fonts";
import "./globals.css";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";

export const metadata: Metadata = {
  title: "Sistema de gestion de documentos y entrega",
  description: "Gestion de documentos y entrega",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col antialiased`}
      >
        <Header />
        <main className="flex-grow overflow-y-auto py-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
