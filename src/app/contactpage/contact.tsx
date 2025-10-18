import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

function Contactquestions() {
  return (
    <motion.div className="w-full md:px-30 h-[100lvh] mt-10">
      <div>
        <h1 className="text-black md:text-5xl font-semibold text-3xl ">
          Frequently asked questions
        </h1>
        <div className="flex md:flex-row gap-4 mt-10 flex-col  ">
          <motion.div
            className="md:w-1/3 bg-gray-100w-full bg-gray-100 "
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src="https://cdn.prod.website-files.com/67df2c20360768e358fdd20a/67e4a9839178f3221f591098_3dicons-flag-iso-color.avif"
              alt=""
            ></img>
          </motion.div>
          <div className=" flex flex-col text-black md:w-3/4 justify-center py-4 md:px-10 px-3 gap-4 font-semibold w-full">
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
