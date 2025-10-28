import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { spaceGrotesk } from "../ui/components";
function ReviewOne() {
  return (
  
<>
<div className="w-full h-[100lvh]  mt-20">
  <div className="md:px-30 mt-16 gap-0 container w-[90%] mx-auto border-l-1 border-r-1">
 <p className={`text-black lg:text-5xl sm:text-4xl text-3xl flex  items-center mt-10  font-semibold tracking-tighter [word-spacing:0.01px] leading-tight text-center ${spaceGrotesk.className}`}>See what all the talk is about
  </p>
    <section className="grid lg:grid-cols-3 grid-rows-3 mt-10">
         
  <div className="row-span-2 ">
    <motion.div
      className="bg-orange-500 flex flex-col justify-center px-6 h-[600px]"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Image src="/walter.svg" alt="" width={180} height={50} />
      <p className="text-white mt-8 font-semibold text-2xl">
        Pointer has been a great tool for our businesses. We wanted an all-in-one
        solution that was seamless for clients to use, and the team has been a
        great resource when we have questions or recommendations!
      </p>
      <div className="mt-10 flex flex-row justify-between">
        <div>
        <p className="text-white text-xl">Savannah Nguyen</p>
        <p className="text-gray-300">Marketing Coordinator</p>
        </div>
        <img
                  className=" w-[50px]"
                  src="contactus.avif"
                  alt=""
                ></img>
      </div>
    </motion.div>
  </div>


  <div className="bg-gray-100 h-[300px] flex justify-center items-center border border-gray-200">
    <h1 className="text-black text-3xl font-semibold">overcut</h1>
  </div>

 
  <div className="bg-white border border-gray-200 h-[300px] p-8 flex flex-col justify-center gap-2  text-black">
    <h1 className="font-semibold text-4xl">25x</h1>
    <p>Revenue Growth</p>
  </div>


  <div className="bg-amber-600 border border-gray-200 h-[300px] flex flex-col justify-center p-6">
    <p className="text-black mb-6">
      “Analyses that would take days and weeks of back and forth with
      analysts now take minutes. The ability to answer these questions
      myself, easily.”
    </p>
      <div className="mt-10 flex flex-row justify-between">
        <div>
        <p className="text-white text-xl">Savannah Nguyen</p>
        <p className="text-gray-300">Marketing Coordinator</p>
        </div>
        <img
                  className=" w-[50px]"
                  src="contactus.avif"
                  alt=""
                ></img>
      </div>
  </div>


  <div className="row-span-2">
    <motion.div
      className="bg-blue-500 flex flex-col justify-center px-6 h-[600px]"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Image src="/walter.svg" alt="" width={180} height={50} className="pt-5" />
      <p className="text-white mt-10 font-semibold text-2xl">
        Pointer has been a great tool for our businesses. We wanted an all-in-one
        solution that was seamless for clients to use, and the team has been a
        great resource when we have questions or recommendations!
      </p>
      <div className="mt-10 flex flex-row justify-between">
        <div>
        <p className="text-white text-xl">Savannah Nguyen</p>
        <p className="text-gray-300">Marketing Coordinator</p>
        </div>
        <img
                  className=" w-[50px]"
                  src="contactus.avif"
                  alt=""
                ></img>
      </div>
    </motion.div>
  </div>



  <div className="bg-white border border-gray-200 h-[300px] p-8 flex flex-col justify-center gap-2  text-black">
    <h1 className="font-semibold text-4xl">25x</h1>
    <p>Revenue Growth</p>
  </div>
  <div className="bg-gray-100 flex justify-center items-center border border-gray-200 h-[300px]">
    <img src="boomer.svg"></img>
  </div>

  
</section>
</div>
</div>

</>
  );
} export default ReviewOne