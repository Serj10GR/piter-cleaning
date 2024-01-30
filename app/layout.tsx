import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { MobileNav } from "@/components/navbar/mobile";

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
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
