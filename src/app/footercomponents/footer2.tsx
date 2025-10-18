"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function Footer() {
  return (
    <div className=" container mx-auto md:px-30 mt-10 ">
      <div className=" flex justify-between md:flex-row flex-col gap-4 w-full ml-2 ">
        <div className="flex flex-col gap-4">
          <p className="text-black w-[300px] font-semibold ">
            Built by entrepreneurs just like you to provide a better accounting
            solution for small businesses.
          </p>
          <div className="flex flex-row">
            <img
              src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e09f210e5925bb58fef48c_Frame%201000015619.svg"
              alt=""
            ></img>
            <img
              src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e09f211673b66e25260dd0_Frame%201000015620.svg"
              alt=""
            ></img>
            <img
              src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e09f2146a3474a2d9c340f_Frame%201000015621.svg"
              alt=""
            ></img>
            <img
              src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e09f21217c5d90196d5ecd_Frame%201000015618.svg"
              alt=""
            ></img>
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
      <div className="flex border-t-1 border-b-1 flex-row gap-4  ">
        <motion.img
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
        </motion.img>
       
        
        <motion.h1
          className=" md:text-[300px] text-[50px] font-bold"
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
      <div className="text-black flex md:flex-row justify-between p-4 flex-col">
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
  );
}

export default Footer;
