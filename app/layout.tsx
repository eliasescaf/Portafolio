import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-zinc-950 text-zinc-50 min-h-screen flex flex-col relative">
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-zinc-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(39,39,42,1),rgba(9,9,11,1))]"></div>
          <Header />
          <main className="grow w-[90%] mx-auto px-6 pt-20">
            {children}
          </main>
          <Footer />
      </body>
    </html>
  );
}
