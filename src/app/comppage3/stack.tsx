import React from "react";
import { motion } from "motion/react";
import { ChevronRight, CircleCheck, FileText,  } from "lucide-react";
import { spaceGrotesk } from "../ui/components";

function Stack() {
  return (
    <div className="w-full h-lvh">
    <div className=" container w-[90%] border-l border-r mx-auto md:px-13 flex flex-col  lg:mt-10 mt-40">
      
        <div className="flex justify-center">
          {" "}
          <h1 className={`md:text-6xl text-4xl text-black flex  md:w-[700px] text-center font-semibold tracking-tighter [word-spacing:0.1px] leading-none ${spaceGrotesk.className}`}>
            Simple integration with your stack
          </h1>
        </div>
        <div className=" mt-10 p-5 flex sm:flex-col lg:flex-row  flex-col">
          <div className="w-full  h-[500px] ">
            <motion.img
              src="deliver.avif"
              alt="Reveal"
              className="w-[550px] h-[500px] object-cover origin-top  shadow-lg"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
            <div className="md:p-10 flex flex-col gap-8 mt-10 md:mt-0 ">
              <div className=" border-b  flex flex-col gap-8 p-2 ">
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
                <div className="w-[180px] bg-white border border-gray-200 rounded-3xl items-center flex gap-4 px-1 py-1">
                  <button className="bg-gray-200 text-black px-4 py-2 rounded-3xl text-[15px] font-semibold ">
                    Learn more
                  </button>
                <ChevronRight className="mr-4 text-black" />
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
