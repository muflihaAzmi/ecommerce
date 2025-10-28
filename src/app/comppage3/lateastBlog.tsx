import { FileText, MoveRight } from "lucide-react";
import { motion } from "motion/react";
import React, { useState } from "react";
import { spaceGrotesk } from "../ui/components";

function LeatestBlog() {

  const [hovered, setHovered] = useState(1);

  return (
    <div className="container mx-auto w-[90%] min-h-screen mt-30 ">
      <div className=" border-l-1 border-r-1 px-30">
       <div className="flex lg:flex-row lg:justify-between sm:flex-col w-full flex-col  p-5">
                <h2 className={`text-black lg:text-6xl text-4xl  md:w-[600px]  font-semibold w-full tracking-tighter [word-spacing:0.1px] leading-none ${spaceGrotesk.className}`}>
                Receive our latest blog & articles
                </h2>
                <div className="bg-black w-[220px] h-12 px-1 flex items-center rounded-3xl shadow-lg mt-4 flex-row justify-between">
                  <button className="bg-white text-black px-6 py-2 rounded-3xl font-medium shadow-md hover:shadow-lg transition-shadow">
                    Book a Demo
                  </button>
                  <MoveRight className="mr-4 text-white" />
                </div>
              </div>
    
    <div className="flex md:flex-row flex-col  gap-4 h-[450px] overflow-hidden ">
 
      <div
        onMouseEnter={() => setHovered(1)}
        onMouseLeave={() => setHovered(null)}
        className={`bg-cover bg-center h-[450px] 
          ${hovered === 2 ? "md:w-2/4" : "md:w-3/4"} w-full relative`}
        style={{ backgroundImage: `url("https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e4bdc67acfa8915df771fe_image-4.webp")` }}
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={
            hovered === 1 || hovered === null
              ? { x: 0, opacity: 1 } 
              : { x: 100, opacity: 0 } 
          }
          transition={{ duration: 0.3, }}
          className="absolute bottom-10 left-10 bg-white md:w-[400px] w-[280px] h-[350px] flex flex-col p-5 shadow-lg rounded"
        >
          <div className="flex flex-row justify-between items-center mb-3">
            <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded-3xl">hu</button>
            <h1 className="text-black text-sm">March 27, 2025</h1>
          </div>
          <h1 className="text-2xl font-semibold mb-4 text-black md:mt-10">
            Implementing effective & fair workload distribution in your product team.
          </h1>
          <div className="flex items-center gap-3 md:mt-10">
            <img
              className="w-10 h-10 rounded-full"
              src="https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e3ebbccc71de8744fd5fd9_Ellipse%206.webp"
              alt="Eleanor Pena"
            />
            <div className="text-black flex flex-col text-sm">
              <h1 className="font-semibold">Eleanor Pena ,</h1>
              <h1>AI Engineer</h1>
            </div>
            <div className="flex flex-end ml-20 text-gray-700">
              <h1>10 min read</h1>
            </div>
          </div>
        </motion.div>
      </div>

     
      <div
        onMouseEnter={() => setHovered(2)}
        onMouseLeave={() => setHovered(null)}
        className={`bg-cover bg-center h-[450px]
          ${hovered === 1 || hovered === null ? "md:w-2/4" : "md:w-3/4"} w-full relative`}
        style={{ backgroundImage: `url("https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e4bdc67acfa8915df771fe_image-4.webp")` }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }} 
          animate={
            hovered === 2
              ? { x: 0, opacity: 1 } 
              : { x: -100, opacity: 0 } 
          }
          transition={{ duration: 0.3,  }}
          className="absolute bottom-10 left-10 bg-white md:w-[400px] w-[280px] h-[350px] flex flex-col p-5 shadow-lg rounded"
        >
          <div className="flex flex-row justify-between items-center mb-3">
            <button className="bg-pink-100 text-pink-600 px-3 py-1 rounded-3xl">hu</button>
            <h1 className="text-black text-sm">March 27, 2025</h1>
          </div>
          <h1 className="text-2xl font-semibold mb-4 text-black md:mt-10">
            Implementing effective & fair workload distribution in your product team.
          </h1>
          <div className="flex items-center gap-3 md:mt-10">
            <img
              className="w-10 h-10 rounded-full"
              src="https://cdn.prod.website-files.com/67e091ded7e9762ca9dbf5f1/67e3ebbccc71de8744fd5fd9_Ellipse%206.webp"
              alt="Eleanor Pena"
            />
            <div className="text-black flex flex-col text-sm">
              <h1 className="font-semibold">Eleanor Pena ,</h1>
              <h1>AI Engineer</h1>
            </div>
            <div className="flex flex-end ml-20 text-gray-700">
              <h1>10 min read</h1>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default LeatestBlog;