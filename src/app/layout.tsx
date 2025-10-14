import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navcomponent/navbar";
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
     
      <body className= {`${poppins.className} w-full` }> <Navbar />{children}</body>

    </html>
  );
}
