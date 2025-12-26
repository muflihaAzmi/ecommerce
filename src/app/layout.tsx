import "./globals.css";
import Navbar from "@/app/navcomponent/navbar";
import DiagonalBox from "./footercomponents/footer1";
import Footer from "./footercomponents/footer2";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
        <Navbar />
        {children}
        <DiagonalBox />
        <Footer />
      </body>
    </html>
  );
}
