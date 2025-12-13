"use client";
import { Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";
import Contactquestions from "./contact";
import { spaceGrotesk } from "../ui/components";
import Image from "next/image";
import MainContact from "./mainContact";

function Contactpage() {
  return (
    <div className="w-full lg:mt-10">
      <div className="container mx-auto w-[90%] border-r-1 border-l-1">
      <motion.div
        className="h-[100lvh]  md:px-13 flex  sm:flex-col lg:flex-row  flex-col px-5 justify-between"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <div className="lg:w-1/3 mt-20 w-full px-2 ">
          <div className="text-black flex flex-col border-b-1 border-gray-300 pb-5 gap-4">
            <h1
              className={`md:text-6xl text-3xl font-semibold tracking-tighter [word-spacing:0.01px] leading-tight md:text-center ${spaceGrotesk.className}`}
            >
              Contact us
            </h1>
            <p className="text-gray-700">
              If you have questions or need any general information, please
              complete this form to request the information you need. It will be
              an honor to help you.
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-between">
            <div className="text-black pt-5 flex flex-col gap-5">
              <p className="font-semibold">General enquires</p>
              <div className="flex flex-row items-center gap-4 ">
                <img
                  className="rounded-full w-[50px]"
                  src="contactus.avif"
                  alt=""
                ></img>
                <div className="flex-col items-center">
                  <p>Bessie Cooper</p>
                  <p className="text-gray-700">Marketing Coordinator</p>
                </div>
              </div>
              <div className="flex flex-row text-gray-600 gap-2 items-center">
                <Mail />
                <p className="text-black">pointer@info.com</p>
              </div>
              <div className="text-gray-600 flex flex-row gap-2 items-center">
                <Phone />
                <p className="text-black">908754412</p>
              </div>
            </div>
            <div className="flex flex-col pt-5 gap-4">
              <p className="font-semibold text-black">General enquires</p>
              <div className="flex flex-col gap-2 text-black">
                <Link href="">facebook</Link>
                <Link href="">Twitter</Link>
                <Link href="">Instagram</Link>
              </div>
            </div>
          </div>
        </div>

        <motion.div className="md:w-[700px] bg-gray-100 mt-20 h-[500px] w-full flex md:flex-row justify-between  ">
          <form>
            <p
              className={`text-2xl text-black font-semibold flex  mt-10 px-4 tracking-tighter [word-spacing:0.01px] leading-tight md:text-center ${spaceGrotesk.className}`}
            >
              send a message
            </p>
            <div className="grid grid-cols-1 gap-4 mt-10 m pl-4 w-[300px]">
              <input
                type="text"
                name="name"
                placeholder="full name"
                className="border-b-2 text-gray-500 border-gray-200 focus:border-blue-500 outline-blue-500 outline-0"
              ></input>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="border-b-2 text-gray-500 border-gray-200 mt-8 focus:border-blue-500 outline-blue-500 outline-0"
              ></input>
              <input
                type="text"
                name="phone"
                placeholder="phone"
                className="border-b-2 text-gray-500 border-gray-200 mt-8 focus:border-blue-500 outline-blue-500 outline-0"
              ></input>

              <textarea
                name="message"
                placeholder="message"
                className="border-b-2 text-gray-500  border-gray-200 mt-8  focus:border-blue-500 outline-blue-500 outline-0"
              ></textarea>
            </div>

            <div className="px-10 mt-10 ">
              <button
                type="submit"
                className=" bg-blue-600 text-white font-semibold py-2 w-full hover:bg-blue-700 transition"
              >
                Submit Now
              </button>
            </div>
          </form>

          <Image
            src="/contactgirl.avif"
            alt="contactgirl"
            width={300}
            height={0}
            className="hidden md:block"
          />
        </motion.div>
         </motion.div>
      
      <div className=" min-h-screen container mx-auto border-l-1 border-r-1 mt-120 md:mt-0 px-4">
        {" "}
        <p
          className={`md:text-6xl text-3xl font-semibold tracking-tighter  text-black  [word-spacing:0.01px] leading-tight md:text-center ${spaceGrotesk.className}`}
        >
          Our worldwide location
        </p>{" "}
        <Image
          src="/world.svg"
          alt="world "
          width={400}
          height={600}
          className="w-[90%] px-30 mt-20 "
        />
        <MainContact />
      </div>
     
      </div>
      <Contactquestions />
    </div>
  );
}

export default Contactpage;
