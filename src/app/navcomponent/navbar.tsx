"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";


function Navbar() {
  const [open, setOpen] = useState(false);
    const router = useRouter();

  const handleclick = () => {
    setOpen((toggle) => !toggle);
  };
const send=()=>{
  router.push("/contactpage")
}
  return (
    <div className="md:w-full relative">
    <nav className=" bg-white container w-[88%] mx-auto h-[70px]   flex justify-between  border-b-1">
     
      <div className="flex  items-center  gap-2">
        <Image src="/pointersy.svg" alt="pointer logo" width={30} height={0} />
        <h1 className="text-black text-2xl font-semibold">Pointer</h1>
      </div>

      <div className={`hidden lg:w-full sm:hidden  lg:flex gap-x-8 ml-40  items-center justify-center cursor-pointer text-gray-800 text-base  z-0`}>
        <Link href="/" className="hover:text-orange-400">
          Home
        </Link>
        
        <Link href="/contactpage" className="hover:text-orange-400">
          Contact
        </Link>
        <Link href="/blog" className="hover:text-orange-400">
          Blog
        </Link>
        <Link href="/review"className="hover:text-orange-400">
          Pages
        </Link> 
      </div>

      <div className="flex items-center pr-4 gap-5  lg:justify-between">
        <ShoppingCart className="text-black mb-2 mr-2 " />

        <div className="lg:flex lg:justify-center sm:hidden items-center gap-x-2 hidden">
          <button className="bg-white  w-25 py-2 rounded-3xl font-medium hover:bg-black text-black hover:text-white shadow- border border-zinc-300 duration-500">
            Log In
          </button>

          <button className="bg-black w-35 py-2 rounded-3xl font-medium hover:bg-white hover:text-black shadow-md duration-500" onClick={send}>
            Book A Demo
          </button>
        </div>

        <div className="lg:hidden  items-center ">
          <button onClick={handleclick} >
            <Menu className="text-black " />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden absolute justify-center z-10  flex flex-col bg-white text-center   text-black gap-2 items-center p-5 w-[88%] mt-20 ">
          <div className=" flex flex-col mt-15  gap-4">
          <Link href="/" className="hover:text-orange-400">
            Home
          </Link>
          <Link href="/contactpage" className="hover:text-orange-400">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-orange-400">
            Blog
          </Link>
          <Link href="/review" className="hover:text-orange-400">
            Pages
          </Link>
          <div className="flex md:justify-center md:items-center md:gap-x-4 flex-col gap-y-2 ">
            <button className="bg-white px-6 py-3 rounded-3xl font-medium hover:bg-black text-black hover:text-white shadow-md duration-500">
              Log In
            </button>

            <button onClick={send} className="bg-black px-6 py-3 rounded-3xl font-medium hover:bg-white text-white hover:text-black shadow-md duration-500">
              Book A Demo
            </button>
          </div>
          </div>
        </div>
      )}
   
    </nav>
    </div>
  );
}

export default Navbar;
