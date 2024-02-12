import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zmeu Hausbesorger",
  description:
    "Professionelle Hausbesorger in Graz und Wien für umfassende Haushaltsdienstleistungen. Vertrauen Sie auf unsere Erfahrung in der Reinigung, Organisation und Pflege Ihres Zuhauses.",
  keywords: [
    "Hausbesorger",
    "Büroreinigung",
    "Hausbesorger Graz",
    "Hausbesorger Wien",
    "Hausreinigung",
    "Reinigungsservice",
    "Wände Malen",
  ],
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <GoogleTagManager gtmId="G-9S2MVSGW4W" />
        <div className="max-w-[1280px] mx-auto">
          <Header />
        </div>
        <main className="max-w-[1280px] mx-auto min-h-[calc(100vh-433px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
