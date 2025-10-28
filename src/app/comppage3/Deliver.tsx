import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight, CircleCheck, FileText, MoveRight } from "lucide-react";

function Deliver() {
  return (
    <div className="w-full mt-20 h-[100lvh]">
    <div className=" container w-[90%]  border-l-1 border-r-1 mx-auto  md:px-13 flex flex-col  mt-40 md:mt-50">
      
        
        <div className=" mt-10 p-5 md:p-0 flex sm:flex-col lg:flex-row gap-8 flex-col">
        
          <motion.div
            className="w-full  origin-top "
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className=" flex flex-col gap-8 ">
              <div className=" border-b-1  flex flex-col gap-8 p-2 ">
                <div className="flex flex-row bg-white border border-gray-200 rounded-3xl w-60 gap-2 justify-center items-center ">
                  <FileText className="text-black w-3 h-3" />
                  <p className="text-black text-[15px] font-medium">
                   PROJECT MANAGEMENT
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  <h1 className="text-black md:text-3xl text-xl font-semibold">
                    Deliver projects on time and budget
                  </h1>
                  <p className="text-gray-700 text-[15px]">
                    Organize and monitor your project delivery with integrated
                    tools that your team will love using.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="text-black flex flex-row gap-4 font-semibold">
                  {" "}
                  <CircleCheck />
                  Connect Pointer to your other tools.
                </div>
                <div className="text-black flex flex-row gap-4 font-semibold">
                  {" "}
                  <CircleCheck />
                  Connect Pointer to your other tools.
                </div>
                <div className="text-black flex flex-row gap-4 font-semibold">
                  {" "}
                  <CircleCheck />
                  Connect Pointer to your other tools.
                </div>
                <div className="w-[180px] bg-white border border-gray-200 rounded-3xl items-center flex gap-2 px-1 py-1">
                  <button className="bg-gray-200 text-black px-4 py-2 rounded-3xl text-[15px] ">
                    Learn more
                  </button>
                  <ChevronRight className="mr-4 text-black" />
                </div>
              </div>
            </div>
          </motion.div>
            <div className="w-full h-[500px] lg:mt-10 ">
            <motion.img
              src="Delivergirl.avif"
              alt="Reveal"
              className="w-[570px] h-[500px] object-cover origin-top  shadow-lg"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1  ,}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{  once: true,amount: 0.3 }}
            />{" "}
          </div>
        </div>
      
    </div>
    </div>
  );
}

export default Deliver;
