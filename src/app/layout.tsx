import "./globals.css";
import Navbar from "@/app/navcomponent/navbar";
import DiagonalBox from "./footercomponents/footer1";
import Footer from "./footercomponents/footer2";
import { Inter } from 'next/font/google';
import type { Metadata } from "next";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pointer | Frontend Developer",
  description: "Modern web experiences built with Next.js",
  icons: {
    icon: "/internet.png",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className }> <Navbar />{children} <DiagonalBox></DiagonalBox> <Footer/></body>

    </html>
  );
}
