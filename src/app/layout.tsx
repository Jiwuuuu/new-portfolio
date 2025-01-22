import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { gafien, switzer } from "./fonts/font";

export const metadata: Metadata = {
  title: "Andrei",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="dark">
      <body
        className={`${gafien.variable} ${switzer.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
