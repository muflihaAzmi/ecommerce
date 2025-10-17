"use client";
import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function DiagonalBox() {
  return (
    <div className="md:px-50 min-h-screen w-full px-5">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="w-full h-[500px] "
        style={{
          background: "linear-gradient(115deg, black 65%, blue 55%)",
        }}
      >  <div className=" flex-col flex ">
        <div className="w-[400px] flex mt-30 md:ml-30">
          <h1 className="text-5xl font-semibold ">Rethink your business</h1>
        </div>
        <p className="md:w-[400px] w-[300px] flex mt-10 md:ml-30 text-gray-300 font-semibold">Boost efficiency, save time, and enhance your campaigns with Pointer.</p>
         <div className="bg-white w-[220px] h-13 px-1 flex items-center rounded-3xl shadow-lg mt-8 flex-row justify-between md:ml-30">
          <button className="bg-black text-white px-6 py-2 rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow">
            Book a Demo
          </button>
         <MoveRight className="mr-4 text-black" />
        </div>
        </div>


      </motion.div>
    </div>
  );
}
