import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Australia's Best Al Virtual Receptionist | VirtualAssistant.com.au",
  description: "Designed to save time, cut costs, and boost productivity.Your Al receptionist sounds human and works, speaks, and feels just like your business.Let us take your calls 24/7 and streamline your admin effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar/>
    {children}
    <Footer/>
      </body>
    </html>
  );
}
