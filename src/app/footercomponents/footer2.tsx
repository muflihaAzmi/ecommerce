"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function Footer() {
  return (
    <div className="mt-10 w-full ">
      <div className="w-[90%] container mx-auto  border-l border-r flex justify-between md:flex-row flex-col gap-4  px-5 ">
        <div className="flex flex-col gap-4">
          <p className="text-black w-[300px] font-semibold ">
            Built by entrepreneurs just like you to provide a better accounting
            solution for small businesses.
          </p>
          <div className="flex flex-row w-full px-5 gap-3">
  <Image
    src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e09f210e5925bb58fef48c_Frame%201000015619.svg"
    alt=""
    width={120}
    height={40}
    className="object-contain"
  />

  <Image
    src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e09f211673b66e25260dd0_Frame%201000015620.svg"
    alt=""
    width={120}
    height={40}
    className="object-contain"
  />

  <Image
    src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e09f2146a3474a2d9c340f_Frame%201000015621.svg"
    alt=""
    width={120}
    height={40}
    className="object-contain"
  />

  <Image
    src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e09f21217c5d90196d5ecd_Frame%201000015618.svg"
    alt=""
    width={120}
    height={40}
    className="object-contain"
  />
</div>

        </div>
        <div className="text-black flex flex-col gap-8 p-4">
          <Link href="">Home</Link>
          <Link href="">About us</Link>
          <Link href="">Review</Link>
          <Link href="">Login</Link>
          <Link href="">signup</Link>
          <Link href="">blog</Link>
          <Link href="">carear</Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row text-black gap-2 items-center">
            <Mail />
            <p className="text-black">pointer@info.com</p>
          </div>
          <div className="text-black flex flex-row gap-2 items-center">
            <Phone />
            <p className="text-black">908754412</p>
          </div>
          <div className="text-black flex flex-row gap-2 items-center">
            <MapPin />
            <p className="text-black">US</p>
          </div>
        </div>
      </div>
     
        {/* <motion.img
              src="/pointersy.svg"
          alt="pointer logo"
          width={300}
          height={50}
          animate={{
            filter: [
              "invert(20%)",
              "sepia(243%)",
              "saturate(1576%)",
              "hue-rotate(-21deg)",
              "brightness(137%)",
              "contrast(73%)"
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }} >
        </motion.img> */}
        <div className="flex justify-center mt-10 ">
        
        <motion.h1
          className=" lg:text-[200px] sm:text-[150px] text-[30px] flex flex-start font-bold px-5 justify-center border-t w-[90%] "
          animate={{
            color: ["#000fff", "#ff0000", "#00ff00", "#ffff00"], 
          }}
          transition={{
            duration: 4,
            repeat: Infinity, 
            repeatType: "loop", 
            ease: "linear", 
          }}
        >
          Pointer
        </motion.h1>
      </div>

     <div className="flex justify-center
     ">
      <div className="text-black flex flex-row justify-between px-20 border-t w-[90%]">
      <div>
        <p>© All rights reserved Basecom.</p>
      </div>
      <div className="flex flex-row gap-4">
        <p>Licence</p>
        <p>Style Guide</p>
        <p>ChangeLog</p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
