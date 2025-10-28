import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navcomponent/navbar";
import DiagonalBox from "./footercomponents/footer1";
import Footer from "./footercomponents/footer2";
import { Inter } from 'next/font/google';
   


    export const inter = Inter({
      subsets: ['latin'],
      display: 'swap', // Optional: controls font loading behavior
    });

   

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
