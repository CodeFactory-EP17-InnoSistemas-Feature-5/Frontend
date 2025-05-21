import type { Metadata } from "next";
import { inter } from "./fonts";
import "./globals.css";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { ApolloWrapper } from "@/lib/ApolloWrapper";
import { NotificationProvider } from "@/components/contexts/NotificationContext";

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
        <ApolloWrapper>
          <NotificationProvider>
            <Header />
            <main className="flex-grow overflow-y-auto py-5">{children}</main>
            <Footer />
          </NotificationProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
