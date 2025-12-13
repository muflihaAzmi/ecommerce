"use client";
import { MoveRight } from "lucide-react";
import {  motion, useScroll, useTransform } from "framer-motion";
import Build from "./homepage/page";
import MainPacked from "./comppage2/mainpacked";
import Stack from "./comppage3/stack";
import Bannertoggle from "./comppage3/bannertoggle";
import Deliver from "./comppage3/Deliver";
import Packed from "./comppage3/packed";
import Customer from "./comppage3/customer";
import LeatestBlog from "./comppage3/lateastBlog";
import ImageRow from "./comppage3/banner2";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Pointer",
};

import { inter } from "./ui/font";
import { spaceGrotesk } from "./ui/components";

export default function Home() {
  const slider = [
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",

    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",

    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/apple.png",
    "/dev.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
    "/ubuntu.png",
    "/twitter.png",
    "/whatsapp.png",
    "/chat-gpt.png",
  ];

  const { scrollYProgress } = useScroll();

  // Scale up smoothly
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.6, 1]);

  // Move video down more in final state
  const y = useTransform(scrollYProgress, [0, 0.1], [30, 800]);

  // Move video left in initial state, then center in fina
  const x = useTransform(scrollYProgress, [0, 0.1], [40, -60]);

  // Expand width to full
  const width = useTransform(scrollYProgress, [0, 0.1], ["40%", "85%"]);

  // Expand height
  const height = useTransform(scrollYProgress, [0, 0.1], ["500px", "600px"]);

  // Adjust border radius (optional - makes it go from rounded to sharp)
  // const borderRadius = useTransform(scrollYProgress, [0, 0.5], [24, 0]);

  return (
    <>
      <div className="w-full ">
        <div className="border-l  w-[90%] md:h-[200lvh] h-[100lvh] container mx-auto mt-20 lg:px-13 md:flex md:flex-row justify-between border-r-1 ">
          <div className="lg:w-[70%]">
            <motion.div
              className="flex flex-row bg-white border border-gray-200 py-1 rounded-3xl  w-64 gap-1 justify-center items-center  "
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Image src="/rocket.svg" alt="" width={20} height={20} />
              <p
                className={`text-black  text-base font-medium ${inter.className}`}
              >
                BEST BUSINESS WEBSITE
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-6 mt-5"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h1
                className={` text-black text-[38px] lg:text-[66px] [font-weight:550] ${spaceGrotesk.className} tracking-tighter [word-spacing:0.1px] leading-tight`}
              >
                Powering every part of<br></br> your accounting operations.
              </h1>
              <p
                className={`md:text-[16px] font-semibold sm:text-[15px] text-[15px] text-gray-600 ${inter.className} `}
              >
                Built by entrepreneurs just like you to provide a better
                accounting solution for small businesses.
              </p>
              <div className="bg-black w-[220px] h-12 px-1 flex items-center rounded-3xl shadow-lg mt-4 flex-row justify-between">
                <button className="bg-white text-black px-6 py-2 cursor-pointer text-semibold rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <motion.h1
                    className={inter.className}
                    initial={{ y: 0, opacity: 1 }}
                    whileHover={{
                      y: 20, 
                      opacity: 0.5,
                      transition: { ease: "easeOut", duration: 0.6 },
                    }}
                    animate={{
                      y: [-20, 0], 
                      transition: { ease: "easeOut", duration: 0.6 },
                    }}
                  >
                    Book a Demo
                  </motion.h1>
                </button>
                <MoveRight className="mr-4 text-white" />
              </div>
            </motion.div>
          </div>
          *{" "}
          <motion.div
            className=" absolute right-13  origin-top overflow-hidden sm:hidden hidden lg:block z-10
         "
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              scale: scale,
              y,
              x,
              width,
              height,
              // borderRadius,
              zIndex: 5,
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover "
            >
              <source src="/nature.mp4" type="video/mp4" />
            </video>

            <button className="bg-black w-10 h-10">
              <img src="playbutton.jpg"></img>
            </button>
          </motion.div>
          <div className="lg:hidden mt-20">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover  "
            >
              <source src="/nature.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="container mx-auto mygradient overflow-hidden   w-[85%] mt-20">
          <div className="flex justify-center gap-9 ">
            <motion.div
              className="flex flex-shrink-0 h-[50px] gap-9 justify-center   "
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
              {slider.map((logo, index) => {
                return <img src={logo} key={index}></img>;
              })}
            </motion.div>
            <motion.div
              className="flex flex-shrink-0 h-[50px] gap-9 justify-center  "
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
              {slider.map((logo, index) => {
                return <img src={logo} key={index}></img>;
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <Build />
      <MainPacked />
      <Stack />
      <Bannertoggle />
      <Deliver />
      <Packed />
      <Customer />
      <LeatestBlog />
      <ImageRow />
    </>
  );
}
