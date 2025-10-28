"use client";
import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function DiagonalBox() {
  return (
    <div className=" container mx-auto lg:px-13 min-h-screen w-[90%] border-l-1 border-r-1 sm:mt-40 mt-80 lg:mt-0 px-2 lg:mt-30 ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="w-full lg:h-[500px] h-[700px] "
        style={{
          background: "linear-gradient(115deg, black 60%, blue 55%)",
        }}
      >  <motion.div className=" flex-col flex px-4  "
       initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}>
        <div className=" flex mt-30  lg:ml-30">
          <h1 className="text-5xl font-semibold ">Rethink your business</h1>
        </div>
        <p className="md:w-[400px] w-[300px] flex mt-10 lg:ml-30 text-gray-300 font-semibold">Boost efficiency, save time, and enhance your campaigns with Pointer.</p>
         <div className="bg-white w-[210px] h-11 px-1 flex items-center rounded-3xl shadow-lg mt-8 flex-row justify-between lg:ml-30 ">
          <button className="bg-black text-white px-6 py-2 rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow">
            Book a Demo
          </button>
         <MoveRight className="mr-4 text-black" />
        </div>
        </motion.div>


      </motion.div>
    </div>
  );
}
