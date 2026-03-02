import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../app/components/Header"; 
import Footer from "../app/components/Footer"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Runiq | Cesta k lepšímu běhu",
  description: "Objevte radost z pohybu bez trápení. Naučíme vás rozumět tepovým zónám, doporučíme správné běžecké boty a poradíme, jak běhat zdravěji.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased suppressHydrationWarning`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
