import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { spaceGrotesk } from "../ui/components";

function Contactquestions() {
  return (
    <motion.div className="container mx-auto w-[90%] border-l-1 border-r-1 md:px-13 h-[100lvh] mt-50 lg:mt-10  px-5">
      <div>
        <h1 className={`text-black md:text-6xl font-semibold text-3xl tracking-tighter [word-spacing:0.01px] leading-tight  ${spaceGrotesk.className}`}>
          Frequently asked questions
        </h1>
        <div className="flex lg:flex-row md:gap-4 gap-10 mt-5 flex-col  md:mt-10">
          <motion.div
            className="md:w-1/3 bg-gray-100w-full bg-gray-100 "
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="redflag.avif"
              alt=""
            ></img>
          </motion.div>
          <div className=" flex flex-col text-black lg:w-3/4 justify-center py-4 md:px-10 px-5 gap-4 font-semibold w-full ">
            <motion.div
              className="border-b-1 text-gray-200 pb-10 "
              initial={{y:20, visibility:"hidden",opacity: 0 }}
              whileInView={{ y:0,visibility:"visible", opacity: 1 }}
              transition={{ duration: 0.8}}
            >
              <Collapsible>
                <CollapsibleTrigger className="flex justify-between text-[20px] w-full ">
                  <h1 className="text-black">How does the Pointer app work?</h1>
                  <ChevronDown className="text-gray-200" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {" "}
                  <p className="text-gray-500 text-[15px] w-3/4 py-4">
                    After asking a few introductory questions, the app presents
                    a personalized experience that helps you navigate the
                    challenges of loss.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>

            <motion.div
              className="border-b-1 text-gray-200 pb-10"
              initial={{y:20, visibility:"hidden",opacity: 0 }}
              whileInView={{ y:0,visibility:"visible", opacity: 1 }}
              transition={{ duration: 0.8}}
            >
              <Collapsible>
                <CollapsibleTrigger className="flex justify-between text-[20px] w-full ">
                  <h1 className="text-black">How does the Pointer app work?</h1>
                  <ChevronDown className="text-gray-200" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {" "}
                  <p className="text-gray-500 text-[15px] w-3/4 py-4">
                    After asking a few introductory questions, the app presents
                    a personalized experience that helps you navigate the
                    challenges of loss.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>

            <motion.div className="border-b-1 text-gray-200 pb-10"
           initial={{y:20, visibility:"hidden",opacity: 0 }}
              whileInView={{ y:0,visibility:"visible", opacity: 1 }}
              transition={{ duration: 0.8}}>
              <Collapsible>
                <CollapsibleTrigger className="flex justify-between text-[20px] w-full ">
                  <h1 className="text-black">How does the Pointer app work?</h1>
                  <ChevronDown className="text-gray-200" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {" "}
                  <p className="text-gray-500 text-[15px] w-3/4 py-4">
                    After asking a few introductory questions, the app presents
                    a personalized experience that helps you navigate the
                    challenges of loss.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>

            <motion.div className="border-b-1 text-gray-200 pb-10"
             initial={{y:20, visibility:"hidden",opacity: 0 }}
              whileInView={{ y:0,visibility:"visible", opacity: 1 }}
              transition={{ duration: 0.8}}>
              <Collapsible>
                <CollapsibleTrigger className="flex justify-between text-[20px] w-full ">
                  <h1 className="text-black">How does the Pointer app work?</h1>
                  <ChevronDown className="text-gray-200" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {" "}
                  <p className="text-gray-500 text-[15px] w-3/4 py-4">
                    After asking a few introductory questions, the app presents
                    a personalized experience that helps you navigate the
                    challenges of loss.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>

            <motion.div className="border-b-1 text-gray-200 pb-10"
           initial={{y:20, visibility:"hidden",opacity: 0 }}
              whileInView={{ y:0,visibility:"visible", opacity: 1 }}
              transition={{ duration: 0.8}}>
              <Collapsible>
                <CollapsibleTrigger className="flex justify-between text-[20px] w-full ">
                  <h1 className="text-black">How does the Pointer app work?</h1>
                  <ChevronDown className="text-gray-200" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {" "}
                  <p className="text-gray-500 text-[15px] w-3/4 py-4">
                    After asking a few introductory questions, the app presents
                    a personalized experience that helps you navigate the
                    challenges of loss.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contactquestions;
