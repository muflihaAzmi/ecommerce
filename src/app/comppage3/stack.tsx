import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { CircleCheck, FileText, MoveRight } from "lucide-react";

function Stack() {
  return (
    <div className="w-full h-screen">
    <div className=" container mx-auto md:px-20 flex flex-col  mt-20">
      
        <div className="flex justify-center">
          {" "}
          <h1 className="md:text-5xl text-4xl text-black flex  md:w-[800px] text-center font-semibold">
            Simple integration with your stack
          </h1>
        </div>
        <div className=" mt-10 p-5 flex sm:flex-col lg:flex-row gap-4 flex-col">
          <div className="w-full  h-[500px] ">
            <motion.img
              src="deliver.avif"
              alt="Reveal"
              className="w-[770px] h-[500px] object-cover origin-top  shadow-lg"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once:true, amount: 0.3 }}
            />{" "}
          </div>
          <motion.div
            className="w-full  origin-top "
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="md:p-10 flex flex-col gap-8 ">
              <div className=" border-b-1  flex flex-col gap-8 p-2 ">
                <div className="flex flex-row bg-white border border-gray-200 rounded-3xl w-60 gap-2 justify-center items-center ">
                  <FileText className="text-black w-3 h-3" />
                  <p className="text-black text-[15px] font-medium">
                    BEST BUSINESS WEBSITE
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  <h1 className="text-black md:text-3xl text-xl font-semibold">
                    Deliver projects on time and budget
                  </h1>
                  <p className="text-gray-400 text-[15px]">
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
                <div className="w-[140px] bg-white border border-gray-200 rounded-3xl items-center flex gap-4 px-1 py-1">
                  <button className="bg-gray-200 text-black px-2 py-2 rounded-3xl text-[10px] font-semibold ">
                    Learn more
                  </button>
                  <MoveRight className="mr-4 text-black" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      
    </div>
    </div>
  );
}

export default Stack;
