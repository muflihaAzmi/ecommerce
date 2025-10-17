import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navcomponent/navbar";
import DiagonalBox from "./footercomponents/footer1";
import Footer from "./footercomponents/footer2";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"], // normal, semi-bold, bold
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className= {` ${poppins.className} ` }> <Navbar />{children} <DiagonalBox/> <Footer/></body>

    </html>
  );
}
