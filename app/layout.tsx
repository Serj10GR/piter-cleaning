import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Zmeu Hausbesorger",
  description: "Hausbersorger Graz, hausbersoger Viena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="max-w-[1280px] mx-auto">
          <Header />
        </div>
        <main className="max-w-[1280px] mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
